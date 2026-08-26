import React, { useEffect, useMemo } from 'react';
import { AlertCircle } from 'lucide-react';
import { POSTING_FIELD_KEYS } from '../utils/posting-fields';

export { POSTING_FIELD_KEYS };

/**
 * Labels the component binds to on the parent form. First matching candidate
 * wins, so renames like "Account Number" -> "Customer Account" keep working.
 */
export const FORM_LABEL_BINDINGS = {
  customerAccount: ['customer account', 'account number'],
  plCode: ['pl code'],
  narration: ['narration'],
  transactionCategory: ['transaction category'],
  branchCode: ['branch code'],
  appendBranchCode: ['append branch code'],
  amount: ['amount'],
  currency: ['currency type', 'currency'],
  entryType: ['entry type'],
  amortizePayment: ['amortize payment', 'amortize'],
};

const DISPLAY_LABELS = {
  customerAccount: 'Customer Account',
  plCode: 'PL Code',
  narration: 'Narration',
  transactionCategory: 'Transaction Category',
  branchCode: 'Branch Code',
  appendBranchCode: 'Append Branch Code',
  amount: 'Amount',
  currency: 'Currency Type',
  entryType: 'Entry Type',
  amortizePayment: 'Amortize Payment',
};

const normalizeLabel = (label) =>
  String(label || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/[:*\s]+$/, '')
    .toLowerCase();

const toNumber = (value) =>
  parseFloat(String(value ?? '').replace(/,/g, '')) || 0;

const toBool = (value) => {
  if (typeof value === 'boolean') return value;
  return String(value ?? '').trim().toLowerCase() === 'true';
};

const normalizeEntryType = (value) => {
  const v = String(value ?? '').toLowerCase();
  if (v.includes('credit')) return 'credit';
  if (v.includes('debit')) return 'debit';
  return '';
};

/**
 * Matches parent-form fields to posting inputs by label and reads their
 * current answers. formData is the form definition; resultData the live
 * answers keyed by field_name.
 */
export function resolveFormValues(formData = [], resultData = {}) {
  const byLabel = {};
  (Array.isArray(formData) ? formData : []).forEach((item) => {
    if (!item?.field_name) return;
    const key = normalizeLabel(item.label);
    if (key && byLabel[key] === undefined) {
      byLabel[key] = resultData?.[item.field_name];
    }
  });

  const resolved = {};
  Object.entries(FORM_LABEL_BINDINGS).forEach(([target, candidates]) => {
    const match = candidates.find((label) => byLabel[label] !== undefined);
    resolved[target] = match !== undefined ? byLabel[match] : undefined;
  });
  return resolved;
}

/**
 * Design-time counterpart of resolveFormValues: reports which form field each
 * posting slot will bind to, so the builder can flag labels that don't exist
 * on the form yet.
 */
export function resolveFormBindings(formData = []) {
  const labels = new Set();
  (Array.isArray(formData) ? formData : []).forEach((item) => {
    if (!item?.field_name || item?.postingKey) return;
    const key = normalizeLabel(item.label);
    if (key) labels.add(key);
  });

  const bindings = {};
  Object.entries(FORM_LABEL_BINDINGS).forEach(([target, candidates]) => {
    bindings[target] = candidates.find((label) => labels.has(label)) || null;
  });
  return bindings;
}

/**
 * Resolves the posting rules into the SmartAdapter payload. Pure function so
 * the matrix (entry type x amortize) is unit-testable. Amortize is applied
 * first (replacing the PL code with the configured GL), then the entry type
 * decides which account is credited and which is debited:
 *   credit -> Customer Account is the CreditField, PL Code the DebitField
 *   debit  -> PL Code is the CreditField, Customer Account the DebitField
 */
export function buildPostingPayload({
  customerAccount,
  plCode,
  entryType,
  narration,
  amount,
  branchCode,
  currency,
  appendBranchCode,
  transactionCategory,
  amortize,
  defaultAmortizeGL,
}) {
  const account = String(customerAccount ?? '').trim();
  const effectivePlCode = amortize
    ? String(defaultAmortizeGL ?? '').trim()
    : String(plCode ?? '').trim();
  const entry = normalizeEntryType(entryType);
  const numericAmount = toNumber(amount);
  const narrationText = String(narration ?? '').trim();

  if (!entry || !account || !effectivePlCode || numericAmount <= 0) return null;

  const isCredit = entry === 'credit';
  return {
    CreditField: isCredit ? account : effectivePlCode,
    CreditNarration: narrationText,
    DebitField: isCredit ? effectivePlCode : account,
    DebitNarration: narrationText,
    AmountField: numericAmount,
    Currency: String(currency ?? '').trim(),
    BranchCode: String(branchCode ?? '').trim(),
    AppendBranchCodeforTransaction:
      appendBranchCode === undefined || String(appendBranchCode).trim() === ''
        ? ''
        : toBool(appendBranchCode),
    NarrationField: narrationText,
    TransactionCategoryField: String(transactionCategory ?? '').trim(),
    // Kept for round-tripping and server-side validation of the mapping.
    entryType: entry,
    amortize: !!amortize,
  };
}

export default function DynamicPostingComponent({
  fieldName,
  defaultValue = null,
  onChange,
  isReadOnly = false,
  resultData = {},
  formData = [],
  defaultAmortizeGL = '',
  isDesignMode = false,
}) {
  const saved =
    defaultValue && typeof defaultValue === 'object' ? defaultValue : {};

  const resolved = useMemo(
    () => resolveFormValues(formData, resultData),
    [formData, resultData],
  );

  const bindings = useMemo(() => resolveFormBindings(formData), [formData]);

  // Amortize is answered on the form ("Amortize Payment", true/false).
  const amortize = toBool(resolved.amortizePayment);

  const payload = useMemo(
    () =>
      buildPostingPayload({
        ...resolved,
        amortize,
        defaultAmortizeGL,
      }),
    [resolved, amortize, defaultAmortizeGL],
  );

  useEffect(() => {
    if (isReadOnly || typeof onChange !== 'function') return;
    onChange(payload);
  }, [payload, isReadOnly]);

  if (isReadOnly) {
    return (
      <div className="p-3 rounded-xl border border-gray-100 bg-gray-50/50 text-sm text-left">
        {saved.DebitField || saved.CreditField ? (
          <div className="space-y-1">
            <p className="text-gray-900">
              <span className="font-semibold">Debit:</span> {saved.DebitField}
              <span className="font-semibold ml-3">Credit:</span>{' '}
              {saved.CreditField}
            </p>
            <p className="text-gray-500 text-xs">
              {saved.NarrationField}
              {saved.NarrationField ? ' · ' : ''}
              {Number(saved.AmountField || 0).toLocaleString()}
              {saved.Currency ? ` ${saved.Currency}` : ''}
              {saved.amortize ? ' · Amortized' : ''}
            </p>
          </div>
        ) : (
          <p className="text-gray-500 italic">No posting captured</p>
        )}
      </div>
    );
  }

  const amortizeGLMissing =
    amortize && !String(defaultAmortizeGL || '').trim();
  const missing = Object.keys(FORM_LABEL_BINDINGS).filter((key) => {
    if (key === 'plCode' && amortize) return false; // replaced by the GL
    const value = resolved[key];
    return value === undefined || String(value ?? '').trim() === '';
  });

  return (
    <div className="w-full space-y-3 text-left">
      <div className="rounded-xl border border-gray-100 bg-gray-50/40 divide-y divide-gray-100">
        {Object.keys(FORM_LABEL_BINDINGS).map((key) => {
          const raw =
            key === 'plCode' && amortize
              ? defaultAmortizeGL
              : resolved[key];
          const display = String(raw ?? '').trim();
          const bound = bindings[key];
          return (
            <div
              key={key}
              className="flex items-center justify-between px-3 py-1.5 text-xs"
            >
              <span className="text-gray-500">
                {DISPLAY_LABELS[key]}
                {key === 'plCode' && amortize ? ' (Amortize GL)' : ''}
              </span>
              {isDesignMode ? (
                <span
                  className={
                    bound ? 'font-medium text-gray-500' : 'font-medium text-red-600'
                  }
                >
                  {bound ? `from "${bound}"` : 'no matching form field'}
                </span>
              ) : (
                <span className="font-medium text-gray-900">
                  {display || '—'}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {amortizeGLMissing && (
        <div className="flex items-start space-x-2 text-red-600">
          <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <p className="text-xs font-medium">
            Amortize is enabled but no default Amortize GL account is
            configured for this component.
          </p>
        </div>
      )}

      {isDesignMode ? (
        <p className="text-xs text-gray-500">
          Values are read from the form fields above when the form is filled.
        </p>
      ) : payload ? (
        <div className="p-3 rounded-xl border border-green-200 bg-green-50/30 text-xs text-gray-700">
          <span className="font-semibold">Debit:</span> {payload.DebitField}
          <span className="font-semibold ml-3">Credit:</span>{' '}
          {payload.CreditField}
          <span className="ml-3">
            {payload.AmountField.toLocaleString()}
            {payload.Currency ? ` ${payload.Currency}` : ''}
          </span>
        </div>
      ) : (
        !amortizeGLMissing && (
          <p className="text-xs text-gray-500">
            Waiting for form values
            {missing.length
              ? `: ${missing.map((key) => DISPLAY_LABELS[key]).join(', ')}`
              : ''}
            .
          </p>
        )
      )}
    </div>
  );
}
