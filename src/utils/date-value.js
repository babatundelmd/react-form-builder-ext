import { format, isValid, parse, parseISO } from 'date-fns';

/**
 * Reading date values that arrive from somewhere else.
 *
 * A prefilled date field is handed whatever its binding produced — another
 * form's saved display string, an ISO timestamp from an external API, a .NET
 * JSON date, a raw epoch. Two things have to hold whatever the shape:
 *
 *  - What the field submits is in the field's own format, so a value the user
 *    never touched and one they picked by hand come out identical.
 *  - A field showing no time names a calendar *day*, so the day the source
 *    meant survives being viewed from another timezone. A field that does show
 *    a time names a moment, and keeps instant semantics.
 *
 * Nothing here is ever guessed: a value that cannot be read is handed back
 * untouched rather than coerced into a plausible wrong date.
 */

// A bare numeric date such as 03/04/2026, 3-4-2026 or 12.06.2025 carries no
// evidence of its own field order, so it is only ever parsed against the
// field's mask. Handing it to `new Date()` would let the engine assume US
// ordering and silently swap day and month. Dots count: 'dd.MM.yyyy' is one
// of the formats the builder offers.
const AMBIGUOUS_NUMERIC_DATE = /^\d{1,2}[/.-]\d{1,2}[/.-]\d{2,4}/;

// The calendar date at the head of an ISO timestamp, whatever follows it.
const ISO_DATE_PREFIX = /^(\d{4})-(\d{2})-(\d{2})(?:[T ]|$)/;

// Only 10- and 13-digit runs are read as epochs, so that basic-format ISO
// (yyyyMMdd, yyyyMMddHHmm, yyyyMMddHHmmss) is left to the ISO parser.
const EPOCH = /^-?(\d{10}|\d{13})$/;

// .NET's JSON date, e.g. /Date(1775174400000)/ or /Date(1775174400000+0100)/.
const DOTNET_JSON_DATE = /^\/Date\((-?\d+)(?:[+-]\d{4})?\)\/$/;

// A written-out month is unambiguous, so these are worth parsing explicitly
// rather than leaving to `new Date()`, whose handling of them is engine
// defined: Chromium reads '12-Jun-2025' happily, other engines need not.
// date-fns matches month names case-insensitively, so JUN/Jun/jun all land.
const TEXTUAL_MONTH = /[A-Za-z]{3}/;
const TRAILING_YEAR = /(\d+)\s*$/;
const TEXTUAL_MONTH_FORMATS = {
  4: [
    'dd-MMM-yyyy', 'dd MMM yyyy', 'dd/MMM/yyyy', 'dd.MMM.yyyy',
    'dd-MMMM-yyyy', 'dd MMMM yyyy',
    'MMM dd, yyyy', 'MMM dd yyyy', 'MMMM dd, yyyy', 'MMMM dd yyyy',
  ],
  2: ['dd-MMM-yy', 'dd MMM yy', 'dd/MMM/yy', 'MMM dd, yy'],
};

// Zone designators on non-ISO text. A numeric offset has to trail either a
// zone name or an actual clock time, otherwise the '-2026' of '03-Apr-2026'
// reads as -20:26.
const NAMED_ZONE_OFFSET = /\b(?:GMT|UTC)\s*([+-])(\d{2}):?(\d{2})/i;
const TRAILING_NUMERIC_ZONE = /\d{1,2}:\d{2}(?::\d{2})?(?:\.\d+)?\s*([+-])(\d{2}):?(\d{2})\s*$/;
const BARE_UTC_ZONE = /\b(?:GMT|UTC)\b(?![+-]?\d)/i;
const TRAILING_Z = /\dZ$/;

function fromEpoch(epoch) {
  if (!Number.isFinite(epoch)) return undefined;
  // 10 digits is seconds, 13 is milliseconds.
  const millis = Math.abs(epoch) < 1e11 ? epoch * 1000 : epoch;
  const parsed = new Date(millis);
  return isValid(parsed) ? parsed : undefined;
}

// The calendar day an instant falls on in the source's own zone, expressed as
// local midnight so the picker and the mask both read it as that day.
function toCalendarDay(instant, offsetMinutes) {
  const shifted = new Date(instant.getTime() + offsetMinutes * 60000);
  return new Date(
    shifted.getUTCFullYear(),
    shifted.getUTCMonth(),
    shifted.getUTCDate(),
  );
}

// A date written with a month name, e.g. '12-Jun-2025' or 'Jun 12, 2025'. The
// year's own digit count picks the candidate formats, so that '12-Jun-25' is
// not read as the year 25 by a 'yyyy' pattern.
function parseTextualMonth(text) {
  if (!TEXTUAL_MONTH.test(text)) return undefined;
  const trailingYear = TRAILING_YEAR.exec(text);
  if (!trailingYear) return undefined;

  const formats = TEXTUAL_MONTH_FORMATS[trailingYear[1].length] || [];
  return formats
    .map((pattern) => parse(text, pattern, new Date()))
    .find((parsed) => isValid(parsed));
}

// Minutes east of UTC declared by the text, or null if it declares no zone at
// all — in which case it already reads as a local wall-clock date.
function declaredOffset(text) {
  const named = NAMED_ZONE_OFFSET.exec(text);
  const numeric = named || TRAILING_NUMERIC_ZONE.exec(text);
  if (numeric) {
    const minutes = Number(numeric[2]) * 60 + Number(numeric[3]);
    return numeric[1] === '-' ? -minutes : minutes;
  }
  if (BARE_UTC_ZONE.test(text) || TRAILING_Z.test(text)) return 0;
  return null;
}

/**
 * Read an incoming value as a Date, or undefined if it cannot be read.
 *
 * @param {string|number|Date} rawValue value as the binding delivered it
 * @param {string} formatMask the field's own format, e.g. 'dd/MM/yyyy HH:mm'
 * @param {{ showsTime?: boolean }} options whether the field displays a time
 */
export function parseFieldDate(rawValue, formatMask, { showsTime = false } = {}) {
  if (rawValue === null || rawValue === undefined || rawValue === '') {
    return undefined;
  }
  if (rawValue instanceof Date) return isValid(rawValue) ? rawValue : undefined;

  // An epoch is a bare instant with no calendar date of its own; a date-only
  // field reads it as the UTC day, which is how such values are minted.
  const asDay = (instant) =>
    instant && !showsTime ? toCalendarDay(instant, 0) : instant;

  if (typeof rawValue === 'number') return asDay(fromEpoch(rawValue));

  const text = String(rawValue).trim();
  if (!text) return undefined;

  // Shapes an external system may send that no date parser recognises.
  const dotNetDate = DOTNET_JSON_DATE.exec(text);
  if (dotNetDate) return asDay(fromEpoch(Number(dotNetDate[1])));
  if (EPOCH.test(text)) return asDay(fromEpoch(Number(text)));

  // A field that shows no time wants the calendar date the source sent, not
  // the day that instant happens to fall on in the browser's timezone: an
  // external '2026-04-03T00:00:00Z' otherwise reads as 02/04/2026 anywhere
  // west of UTC, and '2026-04-03T23:30:00Z' as 04/04/2026 in Lagos.
  if (!showsTime) {
    const isoDate = ISO_DATE_PREFIX.exec(text);
    if (isoDate) {
      const asLocalDay = new Date(
        Number(isoDate[1]),
        Number(isoDate[2]) - 1,
        Number(isoDate[3]),
      );
      if (isValid(asLocalDay)) return asLocalDay;
    }
  }

  // Bound values usually arrive as ISO; values saved in display format parse
  // against the field's own mask.
  let parsed = parseISO(text);
  if (!isValid(parsed)) {
    parsed = parse(text, formatMask, new Date());
  }
  if (!isValid(parsed)) {
    parsed = parseTextualMonth(text) || parsed;
  }
  if (!isValid(parsed) && !AMBIGUOUS_NUMERIC_DATE.test(text)) {
    // Last resort for shapes with no ordering to get wrong, e.g. RFC 1123.
    parsed = new Date(text);
  }
  if (!isValid(parsed)) return undefined;

  // Non-ISO text that still declared a zone (RFC 1123 and friends) is an
  // instant too, so a date-only field takes the day as the source stated it.
  if (!showsTime) {
    const offsetMinutes = declaredOffset(text);
    if (offsetMinutes !== null) return toCalendarDay(parsed, offsetMinutes);
  }

  return parsed;
}

/**
 * The display string for an incoming value, in the field's own format.
 *
 * Re-formatting an already formatted value is a no-op, so this is safe to run
 * on every render. A value that cannot be read is returned as it came in.
 */
export function formatFieldDate(rawValue, formatMask, options) {
  const parsed = parseFieldDate(rawValue, formatMask, options);
  if (parsed) return format(parsed, formatMask);
  return rawValue || '';
}
