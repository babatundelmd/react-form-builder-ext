import React, { useState, useEffect, useCallback } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { logAuditActivity } from '../utils/auditLogger';

const OPERATIONS = ['+', '-', '*', '/'];

export default function ArithmeticComponent({
  mappedFields = [],
  isEditing = false,
  onChangeCalculationFields,
  calculationFields = [],
  limitControlOn = false,
  outputLimitEnabled = false,
  outputMaxValue = '',
  outputFormat = 'numeric',
  onChangeLimitControlOn,
  onChangeOutputLimitEnabled,
  onChangeOutputMaxValue,
  onChangeOutputFormat,
}) {
  const [combinedFields, setCombinedFields] = useState([]);

  // Merge mappedFields + custom fields on mappedFields change
  useEffect(() => {
    setCombinedFields((prev) => {
      const customFields = prev.length
        ? prev.filter((f) => !f.isMapped)
        : calculationFields.filter((f) => !f.isMapped);

      const updatedMapped = mappedFields.map((field, index) => {
        const existing =
          prev.find((f) => f.field_name === field.field_name && f.isMapped) ||
          calculationFields.find(
            (f) => f.field_name === field.field_name && f.isMapped,
          );

        return {
          field_name: field.field_name,
          label: field.label || `Field ${index + 1}`,
          value: existing?.value || '',
          operation: existing?.operation || (index === 0 ? '' : '+'),
          isMapped: true,
          limitEnabled: existing?.limitEnabled || false,
          maxValue: existing?.maxValue || '',
          format: existing?.format || 'numeric',
        };
      });

      // Keep custom fields limit properties intact
      const updatedCustom = customFields.map((f) => {
        const existing = calculationFields.find((cf) => cf.label === f.label && !cf.isMapped);
        return {
          ...f,
          limitEnabled: existing?.limitEnabled || false,
          maxValue: existing?.maxValue || '',
          format: existing?.format || 'numeric',
        };
      });

      return [...updatedMapped, ...updatedCustom];
    });
  }, [mappedFields]);

  // Notify parent on change
  useEffect(() => {
    if (onChangeCalculationFields) {
      onChangeCalculationFields(combinedFields);
    }
  }, [combinedFields]);

  const updateField = useCallback((index, changes) => {
    setCombinedFields((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], ...changes };
      return updated;
    });
  }, []);

  const handleLabelChange = (index, newLabel) => {
    updateField(index, { label: newLabel });
  };

  const handleValueChange = (index, val) => {
    updateField(index, { value: val });
  };

  const handleOperationChange = (index, op) => {
    updateField(index, { operation: op });
  };

  const addCustomInput = () => {
    setCombinedFields((prev) => [
      ...prev,
      {
        label: `Custom Field ${prev.length + 1}`,
        value: '',
        operation: prev.length === 0 ? '' : '+',
        isMapped: false,
        limitEnabled: false,
        maxValue: '',
        format: 'numeric',
      },
    ]);
  };

  const handleDeleteCustomField = (index) => {
    setCombinedFields((prev) => prev.filter((_, i) => i !== index));
  };

  const handleLimitControlToggle = () => {
    const nextVal = !limitControlOn;
    onChangeLimitControlOn?.(nextVal);
    logAuditActivity("Configure Limits", {
      action: "Limit Control Toggle",
      limitControlOn: nextVal,
      message: `Limit Control turned ${nextVal ? "ON" : "OFF"}`
    });
  };

  const handleFieldLimitToggle = (index, field) => {
    const nextVal = !field.limitEnabled;
    updateField(index, { limitEnabled: nextVal });
    logAuditActivity("Configure Limits", {
      action: "Field Limit Toggle",
      field: field.field_name || field.label,
      limitEnabled: nextVal,
    });
  };

  return (
    <div className="max-w-sm p-3 bg-white rounded">
      <div className="space-y-3">
        {combinedFields.map((field, index) => (
          <div key={index} className="flex flex-col gap-1 border-b border-gray-100 pb-2 mb-2">
            <div className="flex items-center gap-2">
              {isEditing && !field.isMapped ? (
                <input
                  type="text"
                  value={field.label}
                  onChange={(e) => handleLabelChange(index, e.target.value)}
                  className="border outline-none focus:outline-none rounded w-[120px] p-2 text-xs"
                />
              ) : (
                <span className="text-xs font-medium capitalize">{field.label}</span>
              )}

              <div className="flex items-center flex-1 gap-2">
                {index !== 0 && (
                  <select
                    value={field.operation}
                    onChange={(e) => handleOperationChange(index, e.target.value)}
                    className="p-1 text-sm border rounded min-w-12"
                  >
                    {OPERATIONS.map((ops) => (
                      <option key={`op-${index}-${ops}`} value={ops}>
                        {ops}
                      </option>
                    ))}
                  </select>
                )}

                <CurrencyInput
                  value={field.value}
                  onValueChange={(val) => handleValueChange(index, val)}
                  className={`w-full p-2 text-xs outline-none focus:outline-none ${
                    field.isMapped ? 'bg-gray-100' : 'bg-white'
                  } text-gray-700 border rounded`}
                  placeholder={`${field.isMapped ? field.label : 'Enter'} value`}
                  readOnly={field.isMapped}
                  decimalsLimit={6}
                />

                {isEditing && !field.isMapped && (
                  <button
                    onClick={() => handleDeleteCustomField(index)}
                    className="px-2 py-1 text-xs text-white bg-red-500 rounded hover:bg-red-600"
                    title="Remove field"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Field Limit UI inside form builder properties sidebar */}
            {isEditing && limitControlOn && (
              <div className="pl-4 mt-1 bg-gray-50 p-2 rounded text-xs space-y-2 border border-dashed border-gray-200">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={field.limitEnabled || false}
                    onChange={() => handleFieldLimitToggle(index, field)}
                    className="rounded text-blue-500 w-3.5 h-3.5"
                  />
                  <span>Enable Limit on {field.label}</span>
                </label>

                {field.limitEnabled && (
                  <div className="flex gap-2 mt-1">
                    <div className="flex-1">
                      <label className="block text-[10px] text-gray-400 font-medium mb-0.5">Max Value</label>
                      <input
                        type="number"
                        value={field.maxValue || ''}
                        onChange={(e) => {
                          updateField(index, { maxValue: e.target.value });
                          logAuditActivity("Configure Limits", {
                            action: "Field Max Value Change",
                            field: field.field_name || field.label,
                            maxValue: e.target.value,
                          });
                        }}
                        placeholder="Limit"
                        className="w-full border p-1 rounded text-xs outline-none"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-[10px] text-gray-400 font-medium mb-0.5">Format</label>
                      <select
                        value={field.format || 'numeric'}
                        onChange={(e) => {
                          updateField(index, { format: e.target.value });
                          logAuditActivity("Configure Limits", {
                            action: "Field Format Change",
                            field: field.field_name || field.label,
                            format: e.target.value,
                          });
                        }}
                        className="w-full border p-1 rounded text-xs outline-none bg-white"
                      >
                        <option value="numeric">Numeric</option>
                        <option value="percentage">Percentage</option>
                        <option value="non-negative">Non-negative</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}

        {isEditing && (
          <div className="flex justify-end mb-4">
            <button
              type="button"
              onClick={addCustomInput}
              className="px-3 py-1 text-xs text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              + Add Input
            </button>
          </div>
        )}

        {/* Global Limit Control configuration section */}
        {isEditing && (
          <div className="pt-3 border-t border-gray-200 mt-4 text-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-700">Limit Control</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={limitControlOn}
                  onChange={handleLimitControlToggle}
                  className="sr-only peer"
                />
                <div className={`w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#EE593C]`}></div>
              </label>
            </div>

            {limitControlOn && (
              <div className="bg-[#FFFBFA] p-2.5 rounded-lg border border-[#FEE4E2] space-y-2">
                <label className="flex items-center gap-1.5 cursor-pointer font-medium text-gray-700">
                  <input
                    type="checkbox"
                    checked={outputLimitEnabled}
                    onChange={(e) => {
                      onChangeOutputLimitEnabled?.(e.target.checked);
                      logAuditActivity("Configure Limits", {
                        action: "Output Limit Toggle",
                        outputLimitEnabled: e.target.checked,
                      });
                    }}
                    className="rounded text-blue-500 w-3.5 h-3.5"
                  />
                  <span>Enable Limit on Calculation Output</span>
                </label>

                {outputLimitEnabled && (
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div>
                      <label className="block text-[10px] text-gray-400 font-medium mb-0.5">Max Value</label>
                      <input
                        type="number"
                        value={outputMaxValue}
                        onChange={(e) => {
                          onChangeOutputMaxValue?.(e.target.value);
                          logAuditActivity("Configure Limits", {
                            action: "Output Max Value Change",
                            outputMaxValue: e.target.value,
                          });
                        }}
                        placeholder="Limit"
                        className="w-full border p-1.5 rounded text-xs outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-gray-400 font-medium mb-0.5">Format</label>
                      <select
                        value={outputFormat}
                        onChange={(e) => {
                          onChangeOutputFormat?.(e.target.value);
                          logAuditActivity("Configure Limits", {
                            action: "Output Format Change",
                            outputFormat: e.target.value,
                          });
                        }}
                        className="w-full border p-1.5 rounded text-xs outline-none bg-white"
                      >
                        <option value="numeric">Numeric</option>
                        <option value="percentage">Percentage</option>
                        <option value="non-negative">Non-negative</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
