import React, { useState, useEffect, useMemo } from 'react';
import { AlertCircle } from 'lucide-react';

export const DEFAULT_NARRATION_TYPES = 'VAT, WHT, Reversed Amount';

const parseNarrationTypes = (raw) =>
  String(raw || DEFAULT_NARRATION_TYPES)
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

const toNumber = (value) => parseFloat(String(value ?? '').replace(/,/g, '')) || 0;

/**
 * Resolves the posting rules for the Dynamic Posting Component.
 * Pure function so the mapping matrix (entry type x amortize x narration)
 * can be unit-tested in isolation.
 */
export function buildPostingPayload({
  customerAccount,
  otherAccount,
  entryType,
  narration,
  amount,
  branchCode,
  currency,
  appendBranchCodeCheck,
  transactionCategory,
  amortize,
}) {
  const numericAmount = toNumber(amount);
  if (!entryType || !narration || numericAmount <= 0) return null;
  if (!customerAccount || !otherAccount) return null;

  const isDebit = entryType === 'debit';
  return {
    debitAccount: isDebit ? customerAccount : otherAccount,
    creditAccount: isDebit ? otherAccount : customerAccount,
    amount: numericAmount,
    narration,
    branchCode: branchCode || '',
    currency: currency || '',
    appendBranchCodeCheck: !!appendBranchCodeCheck,
    transactionCategory: transactionCategory || '',
    // Kept for round-tripping and server-side validation of the mapping.
    entryType,
    amortize: !!amortize,
  };
}

export default function DynamicPostingComponent({
  fieldName,
  defaultValue = null,
  onChange,
  isReadOnly = false,
  resultData = {},
  customerAccountField = '',
  otherAccountField = '',
  defaultAmortizeGL = '',
  branchCode = '',
  currency = '',
  appendBranchCodeCheck = false,
  transactionCategory = '',
  narrationTypes = DEFAULT_NARRATION_TYPES,
}) {
  const saved =
    defaultValue && typeof defaultValue === 'object' ? defaultValue : {};

  const [narration, setNarration] = useState(saved.narration || '');
  const [entryType, setEntryType] = useState(saved.entryType || '');
  const [amount, setAmount] = useState(
    saved.amount != null ? String(saved.amount) : '',
  );
  const [amortize, setAmortize] = useState(!!saved.amortize);

  const narrationOptions = useMemo(
    () => parseNarrationTypes(narrationTypes),
    [narrationTypes],
  );

  const customerAccount = String(
    resultData?.[customerAccountField] ?? '',
  ).trim();
  const parentOtherAccount = String(
    resultData?.[otherAccountField] ?? '',
  ).trim();
  const otherAccount = amortize
    ? String(defaultAmortizeGL || '').trim()
    : parentOtherAccount;

  const payload = useMemo(
    () =>
      buildPostingPayload({
        customerAccount,
        otherAccount,
        entryType,
        narration,
        amount,
        branchCode,
        currency,
        appendBranchCodeCheck,
        transactionCategory,
        amortize,
      }),
    [
      customerAccount,
      otherAccount,
      entryType,
      narration,
      amount,
      branchCode,
      currency,
      appendBranchCodeCheck,
      transactionCategory,
      amortize,
    ],
  );

  useEffect(() => {
    if (isReadOnly || typeof onChange !== 'function') return;
    onChange(payload);
  }, [payload, isReadOnly]);

  if (isReadOnly) {
    return (
      <div className="p-3 rounded-xl border border-gray-100 bg-gray-50/50 text-sm text-left">
        {saved.debitAccount || saved.creditAccount ? (
          <div className="space-y-1">
            <p className="text-gray-900">
              <span className="font-semibold">Debit:</span> {saved.debitAccount}
              {' '}
              <span className="font-semibold ml-2">Credit:</span>{' '}
              {saved.creditAccount}
            </p>
            <p className="text-gray-500 text-xs">
              {saved.narration} &middot; {Number(saved.amount || 0).toLocaleString()}
              {saved.currency ? ` ${saved.currency}` : ''}
              {saved.amortize ? ' · Amortized' : ''}
            </p>
          </div>
        ) : (
          <p className="text-gray-500 italic">No posting captured</p>
        )}
      </div>
    );
  }

  const amortizeGLMissing = amortize && !String(defaultAmortizeGL || '').trim();

  return (
    <div className="w-full space-y-3 text-left">
      <div className="form-group">
        <label className="control-label text-13" htmlFor={`${fieldName}_narration`}>
          Narration Type
        </label>
        <select
          id={`${fieldName}_narration`}
          className="form-control"
          value={narration}
          onChange={(e) => setNarration(e.target.value)}
        >
          <option value="">Select narration type</option>
          {narrationOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label className="control-label text-13" htmlFor={`${fieldName}_entry_type`}>
          Entry Type
        </label>
        <select
          id={`${fieldName}_entry_type`}
          className="form-control"
          value={entryType}
          onChange={(e) => setEntryType(e.target.value)}
        >
          <option value="">Select entry type</option>
          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
        </select>
      </div>

      <div className="form-group">
        <label className="control-label text-13" htmlFor={`${fieldName}_amount`}>
          Amount
        </label>
        <input
          id={`${fieldName}_amount`}
          type="text"
          inputMode="decimal"
          className="form-control"
          value={amount}
          placeholder="0.00"
          onChange={(e) => {
            const next = e.target.value;
            // digits, commas and a single decimal point only
            if (/^[\d,]*\.?\d*$/.test(next)) setAmount(next);
          }}
        />
      </div>

      <div className="custom-control custom-checkbox">
        <input
          id={`${fieldName}_amortize`}
          className="custom-control-input"
          type="checkbox"
          checked={amortize}
          onChange={(e) => setAmortize(e.target.checked)}
        />
        <label
          className="custom-control-label"
          htmlFor={`${fieldName}_amortize`}
        >
          Amortize
        </label>
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

      {payload && (
        <div className="p-3 rounded-xl border border-green-200 bg-green-50/30 text-xs text-gray-700">
          <span className="font-semibold">Debit:</span> {payload.debitAccount}
          <span className="font-semibold ml-3">Credit:</span>{' '}
          {payload.creditAccount}
          <span className="ml-3">
            {payload.amount.toLocaleString()}
            {payload.currency ? ` ${payload.currency}` : ''}
          </span>
        </div>
      )}
      {!payload && !amortizeGLMissing && !customerAccount && !otherAccount && (
        <p className="text-xs text-gray-500">
          Waiting for account values from the parent form.
        </p>
      )}
    </div>
  );
}
