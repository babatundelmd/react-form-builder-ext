// Validation rules for the Number field (NumberInput).
//
// Settings saved on the element:
//   numericOnly - only digits and one decimal point may be entered
//   minLength   - fewest digits accepted
//   maxLength   - most digits accepted (typing past it is blocked)
//
// Example: minLength 10 + maxLength 10 -> exactly 10 digits (1234567898).
//          minLength 10 + maxLength 12 -> 10 to 12 digits (123456789882).

const toCountOrNull = (v) => {
  if (v === undefined || v === null || v === "") return null;
  const n = Number(v);
  return Number.isFinite(n) && n >= 0 ? Math.floor(n) : null;
};

export const getNumberRules = (data = {}) => ({
  numericOnly: !!data.numericOnly,
  minLength: toCountOrNull(data.minLength),
  maxLength: toCountOrNull(data.maxLength),
});

// Keep only digits and the first decimal point.
export const sanitizeNumericOnly = (value) => {
  const cleaned = String(value ?? "").replace(/[^0-9.]/g, "");
  const dot = cleaned.indexOf(".");
  if (dot === -1) return cleaned;
  return (
    cleaned.slice(0, dot + 1) + cleaned.slice(dot + 1).replace(/\./g, "")
  );
};

export const countDigits = (value) =>
  (String(value ?? "").match(/[0-9]/g) || []).length;

// Keep everything up to and including the max-th digit.
export const truncateDigits = (value, max) => {
  const str = String(value ?? "");
  let seen = 0;
  for (let i = 0; i < str.length; i++) {
    if (/[0-9]/.test(str[i]) && ++seen === max) return str.slice(0, i + 1);
  }
  return max === 0 ? "" : str;
};

const digitsWord = (n) => `${n} digit${n === 1 ? "" : "s"}`;

// Returns an error message for the first rule the value breaks, or "".
// An empty value passes; "required" is checked separately.
export const validateNumberValue = (value, data) => {
  const str = String(value ?? "").trim();
  if (str === "") return "";

  const { numericOnly, minLength, maxLength } = getNumberRules(data);

  if (numericOnly && !/^[0-9]*\.?[0-9]*$/.test(str)) {
    return "Only numbers are allowed. Remove letters and symbols.";
  }
  if (!Number.isFinite(Number(str))) {
    return "Enter a valid number.";
  }

  const digits = countDigits(str);
  if (minLength !== null && maxLength !== null && minLength === maxLength) {
    if (digits !== minLength) {
      return `Must be exactly ${digitsWord(minLength)} (you entered ${digits}).`;
    }
    return "";
  }
  if (minLength !== null && digits < minLength) {
    return `Must be at least ${digitsWord(minLength)} (you entered ${digits}).`;
  }
  if (maxLength !== null && digits > maxLength) {
    return `Must be no more than ${digitsWord(maxLength)} (you entered ${digits}).`;
  }
  return "";
};

// Problems with the designer's own settings (shown in the editor).
export const getNumberRulesConfigWarnings = (data) => {
  const { minLength, maxLength } = getNumberRules(data);
  return minLength !== null && maxLength !== null && minLength > maxLength
    ? ["Min Length is greater than Max Length."]
    : [];
};
