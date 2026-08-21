/**
 * The Dynamic Posting element resolves one payload, but the workflow's
 * SmartAdapter maps values one field at a time. So each posting value is also
 * published into the form definition as its own child entry (parentId set to
 * the posting element). Child entries are skipped by every renderer
 * (`!x.parentId`) yet still travel with the saved form JSON, which is what the
 * workflow reads — so each value gets its own mappable row there.
 */

import ID from '../UUID';

/** Payload keys, in the order they appear in the SmartAdapter mapping list. */
export const POSTING_FIELD_KEYS = [
  'CreditField',
  'CreditNarration',
  'DebitField',
  'DebitNarration',
  'AmountField',
  'Currency',
  'BranchCode',
  'AppendBranchCodeforTransaction',
  'NarrationField',
  'TransactionCategoryField',
];

const POSTING_FIELD_LABELS = {
  CreditField: 'Credit Field',
  CreditNarration: 'Credit Narration',
  DebitField: 'Debit Field',
  DebitNarration: 'Debit Narration',
  AmountField: 'Amount Field',
  Currency: 'Currency',
  BranchCode: 'Branch Code',
  AppendBranchCodeforTransaction: 'Append Branch Code for Transaction',
  NarrationField: 'Narration Field',
  TransactionCategoryField: 'Transaction Category Field',
};

const stripHtml = (value) =>
  String(value || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();

export const isPostingChild = (item) => !!item?.postingKey;

const buildChild = (parent, key, id) => ({
  id,
  postingKey: key,
  postingParentId: parent.id,
  postingParentField: parent.field_name,
  element: 'TextInput',
  text: 'Text Input',
  label: `${stripHtml(parent.label) || 'Dynamic Posting'} - ${POSTING_FIELD_LABELS[key]}`,
  field_name: `${parent.field_name}_${key}`,
  custom_name: `${parent.field_name}_${key}`,
  canHaveAnswer: true,
  required: false,
  static: false,
});

/**
 * Returns `data` with exactly one child entry per posting key for every
 * Dynamic Posting element, and no orphaned posting children. Deterministic
 * ids make this idempotent, so it is safe to run on every store update.
 */
export function syncPostingFields(data) {
  if (!Array.isArray(data)) return data;

  const parents = data.filter((x) => x?.element === 'DynamicPosting' && x?.id);
  const existing = data.filter(isPostingChild);

  // Nothing to do and nothing to clean up.
  if (!parents.length && !existing.length) return data;

  const parentById = new Map(parents.map((p) => [p.id, p]));
  // Keyed by parent + posting key, not by id, so an existing child keeps its
  // generated id across syncs.
  const kept = new Map();
  const slotOf = (parentId, key) => `${parentId}::${key}`;

  existing.forEach((child) => {
    const parent = parentById.get(child.postingParentId);
    if (!parent) return; // parent removed -> drop the orphan
    if (!POSTING_FIELD_KEYS.includes(child.postingKey)) return;
    const slot = slotOf(child.postingParentId, child.postingKey);
    if (kept.has(slot)) return; // de-dupe
    // Refresh the derived bits in case the parent was renamed, but keep the
    // existing object when nothing changed so identity checks stay cheap.
    // Children written by 3.0.4/3.0.5 carry container linkage (parentId) and
    // a readOnly flag; both are stripped here so older forms heal on load.
    const fresh = buildChild(parent, child.postingKey, child.id);
    const { parentId, col, parentIndex, readOnly, hideField, ...rest } = child;
    const stale =
      parentId !== undefined ||
      col !== undefined ||
      parentIndex !== undefined ||
      readOnly !== undefined ||
      hideField !== undefined;
    const changed =
      stale || Object.keys(fresh).some((k) => child[k] !== fresh[k]);
    kept.set(slot, changed ? { ...rest, ...fresh } : child);
  });

  parents.forEach((parent) => {
    POSTING_FIELD_KEYS.forEach((key) => {
      const slot = slotOf(parent.id, key);
      if (!kept.has(slot)) kept.set(slot, buildChild(parent, key, ID.uuid()));
    });
  });

  const next = data.filter((x) => !isPostingChild(x));
  kept.forEach((child) => next.push(child));

  // Avoid pointless re-renders when nothing actually changed.
  const same =
    next.length === data.length && next.every((item, i) => item === data[i]);
  return same ? data : next;
}
