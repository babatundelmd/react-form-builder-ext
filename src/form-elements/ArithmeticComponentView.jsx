/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useMemo } from 'react';

export default function ArithmeticComponentView({
  fieldName,
  defaultValue = 0,
  onChange,
  isReadOnly = false,
  mappedFields = [],
  resultData = {},
  limitControlOn = false,
  outputLimitEnabled = false,
  outputMaxValue = '',
  outputFormat = 'numeric',
}) {
  const [combinedFields, setCombinedFields] = useState([]);

  // ✅ Build combined fields when in edit mode (not read-only)
  useEffect(() => {
    if (isReadOnly || !Array.isArray(mappedFields)) return;

    const initialFields = mappedFields.map((field) => {
      const raw = resultData?.[field.field_name] ?? field.value ?? 0;
      const numericValue = parseFloat(String(raw).replace(/,/g, '')) || 0;
      return { ...field, value: numericValue };
    });

    setCombinedFields(initialFields);
  }, [mappedFields, resultData, isReadOnly]);

  const calculatedResult = useMemo(() => {
    if (isReadOnly || !combinedFields.length) {
      // use previous stored value instead
      return parseFloat(String(defaultValue).replace(/,/g, '')) || 0;
    }

    return combinedFields.reduce((total, { operation, value }, index) => {
      const num = parseFloat(value) || 0;
      if (index === 0) return num;

      switch (operation) {
        case '+':
          return total + num;
        case '-':
          return total - num;
        case '*':
          return total * num;
        case '/':
          return num === 0 ? NaN : total / num;
        default:
          return total;
      }
    }, 0);
  }, [combinedFields, isReadOnly, defaultValue]);

  // ✅ Calculate clamped result for outputting/displaying
  const clampedResult = useMemo(() => {
    let res = calculatedResult;
    if (limitControlOn) {
      if (outputLimitEnabled && outputMaxValue !== '') {
        const maxVal = parseFloat(outputMaxValue);
        if (res > maxVal) {
          res = maxVal;
        }
      }
      if (outputFormat === 'percentage' && res > 100) {
        res = 100;
      }
      if (outputFormat === 'non-negative' && res < 0) {
        res = 0;
      }
    }
    return res;
  }, [calculatedResult, limitControlOn, outputLimitEnabled, outputMaxValue, outputFormat]);

  // ✅ Notify parent only in edit mode with clamped result
  useEffect(() => {
    if (!isReadOnly && typeof onChange === 'function') {
      const safeValue =
        Number.isFinite(clampedResult) && !Number.isNaN(clampedResult)
          ? clampedResult.toLocaleString()
          : '0';
      onChange(safeValue);
    }
  }, [clampedResult, isReadOnly]);

  const errors = useMemo(() => {
    if (isReadOnly || !limitControlOn) return {};
    const currentErrors = {};

    combinedFields.forEach((field) => {
      if (field.limitEnabled) {
        const val = parseFloat(String(field.value).replace(/,/g, '')) || 0;
        
        if (field.format === 'non-negative' && val < 0) {
          currentErrors[field.field_name || field.label] = `${field.label} must be non-negative.`;
        } else if (field.format === 'percentage' && (val < 0 || val > 100)) {
          currentErrors[field.field_name || field.label] = `${field.label} must be a percentage (0-100).`;
        }

        if (
          field.maxValue !== undefined &&
          field.maxValue !== '' &&
          val > parseFloat(field.maxValue)
        ) {
          currentErrors[field.field_name || field.label] = `${field.label} cannot exceed limit of ${field.maxValue}.`;
        }
      }
    });

    if (outputLimitEnabled) {
      const val = calculatedResult || 0;
      
      if (outputFormat === 'non-negative' && val < 0) {
        currentErrors['output_field_limit'] = `Calculation output must be non-negative.`;
      } else if (outputFormat === 'percentage' && (val < 0 || val > 100)) {
        currentErrors['output_field_limit'] = `Calculation output must be a percentage (0-100).`;
      }

      if (
        outputMaxValue !== undefined &&
        outputMaxValue !== '' &&
        val > parseFloat(outputMaxValue)
      ) {
        currentErrors['output_field_limit'] = `Calculation output cannot exceed limit of ${outputMaxValue}.`;
      }
    }

    return currentErrors;
  }, [combinedFields, calculatedResult, isReadOnly, limitControlOn, outputLimitEnabled, outputMaxValue, outputFormat]);

  useEffect(() => {
    if (!isReadOnly && fieldName) {
      if (!window.kusala_calculator_errors) {
        window.kusala_calculator_errors = {};
      }
      if (Object.keys(errors).length > 0) {
        window.kusala_calculator_errors[fieldName] = errors;
      } else {
        delete window.kusala_calculator_errors[fieldName];
      }
    }
    return () => {
      if (!isReadOnly && fieldName && window.kusala_calculator_errors) {
        delete window.kusala_calculator_errors[fieldName];
      }
    };
  }, [errors, isReadOnly, fieldName]);

  const displayValue =
    Number.isFinite(clampedResult) && !Number.isNaN(clampedResult)
      ? clampedResult.toLocaleString()
      : '0';

  return (
    <div>
      <div className="form-control field-control">
        {displayValue}
      </div>
      {Object.keys(errors).length > 0 && (
        <div style={{ color: "#EE593C", fontSize: "11px", marginTop: "8px", display: "flex", flexDirection: "column", gap: "4px", padding: "8px", backgroundColor: "#FFFBFA", border: "1px solid #FEE4E2", borderRadius: "6px" }}>
          {Object.values(errors).map((err, idx) => (
            <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "6px" }}>
              <span style={{ fontSize: "12px", marginTop: "-1px" }}>⚠️</span>
              <span style={{ fontWeight: 500 }}>{err}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
