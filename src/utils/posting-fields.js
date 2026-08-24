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
const childLabel = (parent, key) => {
  const own = stripHtml(parent.label);
  const named = own && own.toLowerCase() !== 'dynamic posting' ? `${own} - ` : '';
  return `dynamic_posting - ${named}${POSTING_FIELD_LABELS[key]}`;
};

const buildChild = (parent, key, id) => ({
  id,
  postingKey: key,
  postingParentId: parent.id,
  postingParentField: parent.field_name,
  element: 'TextInput',
  text: 'Text Input',
  label: childLabel(parent, key),
  field_name: `${parent.field_name}_${key}`,
  custom_name: `${parent.field_name}_${key}`,
  canHaveAnswer: true,
  required: false,
  static: false,
});

export function syncPostingFields(data) {
  if (!Array.isArray(data)) return data;

  const parents = data.filter((x) => x?.element === 'DynamicPosting' && x?.id);
  const hadChildren = data.some(isPostingChild);

  // Nothing to do and nothing to clean up.
  if (!parents.length && !hadChildren) return data;

  const parentById = new Map(parents.map((p) => [p.id, p]));
  const slotOf = (parentId, key) => `${parentId}::${key}`;

  const byFieldName = new Map();
  parents.forEach((parent) => {
    POSTING_FIELD_KEYS.forEach((key) => {
      byFieldName.set(`${parent.field_name}_${key}`, {
        parentId: parent.id,
        key,
      });
    });
  });
  const identify = (item) => {
    if (!item) return null;
    if (item.postingKey) {
      return { parentId: item.postingParentId, key: item.postingKey };
    }
    return item.field_name ? byFieldName.get(item.field_name) || null : null;
  };

  // Keyed by parent + posting key, not by id, so an existing child keeps its
  // generated id across syncs.
  const kept = new Map();

  data.forEach((item) => {
    const ident = identify(item);
    if (!ident) return;
    const parent = parentById.get(ident.parentId);
    if (!parent) return; // parent removed -> drop the orphan
    if (!POSTING_FIELD_KEYS.includes(ident.key)) return;
    const slot = slotOf(ident.parentId, ident.key);
    if (kept.has(slot)) return; // de-dupe
    const fresh = buildChild(parent, ident.key, item.id || ID.uuid());
    const { parentId, col, parentIndex, readOnly, hideField, ...rest } = item;
    const stale =
      parentId !== undefined ||
      col !== undefined ||
      parentIndex !== undefined ||
      readOnly !== undefined ||
      hideField !== undefined;
    const changed =
      stale || Object.keys(fresh).some((k) => item[k] !== fresh[k]);
    kept.set(slot, changed ? { ...rest, ...fresh } : item);
  });

  parents.forEach((parent) => {
    POSTING_FIELD_KEYS.forEach((key) => {
      const slot = slotOf(parent.id, key);
      if (!kept.has(slot)) kept.set(slot, buildChild(parent, key, ID.uuid()));
    });
  });

  const next = [];
  data.forEach((item) => {
    if (identify(item)) return; // re-inserted under its own parent below
    next.push(item);
    if (item?.element === 'DynamicPosting' && item?.id) {
      POSTING_FIELD_KEYS.forEach((key) => {
        const child = kept.get(slotOf(item.id, key));
        if (child) next.push(child);
      });
    }
  });

  // Avoid pointless re-renders when nothing actually changed.
  const same =
    next.length === data.length && next.every((item, i) => item === data[i]);
  return same ? data : next;
}
