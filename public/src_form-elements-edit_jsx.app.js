"use strict";
(self["webpackChunk_babatundelmd_react_form_builder_ext"] = self["webpackChunk_babatundelmd_react_form_builder_ext"] || []).push([["src_form-elements-edit_jsx"],{

/***/ "./src/ApiExample.jsx":
/*!****************************!*\
  !*** ./src/ApiExample.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ApiExample = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("blockquote", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
  className: "text-13"
}, 'API URL example format: https://example.com/validation/{value}'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
  className: "text-13"
}, "Response example format:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("pre", {
  className: "bg-white p-2 rounded-md"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, '{', " "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, ' "data":{'), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, '  "status": true,'), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, '  "description": JOHN DOE,'), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, '  }'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, ' }'))))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiExample);

/***/ }),

/***/ "./src/DynamicInputOptions.jsx":
/*!*************************************!*\
  !*** ./src/DynamicInputOptions.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const DynamicInputOptionList = ({
  initialFields = [],
  onChange
}) => {
  const [fields, setFields] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialFields);
  const handleChange = (index, field, newValue) => {
    const updated = [...fields];
    updated[index][field] = newValue;
    setFields(updated);
  };
  const addField = () => {
    setFields([...fields, {
      key: '',
      label: '',
      value: '',
      type: 'text'
    }]);
  };
  const removeField = index => {
    setFields(fields.filter((_, i) => i !== index));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    onChange(fields);
  }, [fields]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-6"
  }, fields.map((field, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: index,
    className: "flex gap-x-[10px] mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    placeholder: "Enter Key",
    value: field.key,
    onChange: e => handleChange(index, 'key', e.target.value),
    className: "input-style"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    placeholder: "Enter Label",
    value: field.label,
    onChange: e => handleChange(index, 'label', e.target.value),
    className: "input-style"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    onChange: e => handleChange(index, 'type', e.target.value),
    className: "input-style"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "text"
  }, "Text"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "number"
  }, "Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "date"
  }, "Date")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    onClick: () => removeField(index),
    className: "ml-1 text-xs outline-none"
  }, "Remove"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "text-xs outline-none",
    onClick: addField
  }, "Add Field")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("pre", {
    style: {
      fontSize: '8px'
    },
    className: "text-[8px]"
  }, JSON.stringify(fields, null, 2)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicInputOptionList);

/***/ }),

/***/ "./src/FileReaderComponent.jsx":
/*!*************************************!*\
  !*** ./src/FileReaderComponent.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.min.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.mjs");



const FileReaderComponent = ({
  setValue,
  name
}) => {
  const [fileName, setFileName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const handleFileUpload = e => {
    const file = e.target.files[0];
    if (!file) return;
    setFileName(file.name);
    // eslint-disable-next-line no-undef
    const reader = new FileReader();
    if (file.name.endsWith('.csv')) {
      reader.onload = event => {
        // eslint-disable-next-line no-undef
        const csv = event?.target.result;
        const parsed = papaparse__WEBPACK_IMPORTED_MODULE_1___default().parse(csv, {
          header: true
        });
        setValue(name, parsed.data);
      };
      reader.readAsText(file);
    } else if (file.name.endsWith('.xlsx') || file.name.endsWith('.xls')) {
      reader.onload = event => {
        // @ts-expect-error sort later
        const data = new Uint8Array(event.target.result);
        const workbook = xlsx__WEBPACK_IMPORTED_MODULE_2__.read(data, {
          type: 'array'
        });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = xlsx__WEBPACK_IMPORTED_MODULE_2__.utils.sheet_to_json(worksheet);
        setValue(name, json);
      };
      reader.readAsArrayBuffer(file);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "file",
    accept: ".csv,.xlsx,.xls",
    onChange: handleFileUpload,
    className: "mb-2 input-control file:bg-gray-600 file:text-white file:text-sm file:rounded file:border-gray-600 file:outline-none file-style input-style "
  }), fileName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mb-2 text-[10px] text-gray-600"
  }, "Uploaded: ", fileName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://res.cloudinary.com/arudovwen-me/raw/upload/v1754861915/Options_sheet_wnyr4o.xlsx",
    download: true,
    className: "mt-1 text-sm text-white text-primary font-weight-medium"
  }, "Download template"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FileReaderComponent);

/***/ }),

/***/ "./src/MultiSelectInput.jsx":
/*!**********************************!*\
  !*** ./src/MultiSelectInput.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MultiSelectInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/listbox/listbox.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/chevron-down.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/check.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/x.js");



function MultiSelectInput({
  value = [],
  onChange,
  options
}) {
  const [selectedOptions, setSelectedOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (onChange) {
      onChange(selectedOptions);
    }
  }, [selectedOptions]);

  // Filter out selected options from dropdown
  const filteredOptions = options.filter(opt => !selectedOptions.some(sel => sel.id === opt.id));

  // Remove item handler
  const removeItem = id => {
    setSelectedOptions(prev => prev.filter(item => item.id !== id));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Listbox, {
    value: selectedOptions,
    onChange: setSelectedOptions,
    multiple: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative mt-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Listbox.Button, {
    className: "relative w-full py-2 pl-3 pr-10 text-sm text-left bg-white border border-gray-300 rounded shadow-sm cursor-default focus:outline-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "block truncate"
  }, selectedOptions.length > 0 ? selectedOptions.map(opt => opt?.label).join(', ') : 'Select options'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "w-4 h-4 text-gray-400"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Listbox.Options, {
    className: "absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white border border-gray-200 rounded shadow max-h-60 focus:outline-none sm:text-sm"
  }, filteredOptions.length > 0 ? filteredOptions.map(option => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Listbox.Option, {
    key: option.id,
    value: option,
    className: ({
      active
    }) => `relative cursor-pointer select-none py-2 pl-4 pr-4 ${active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'}`
  }, ({
    selected
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: `block truncate ${selected ? 'font-medium' : 'font-normal'}`
  }, option.label), selected ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "w-4 h-4",
    "aria-hidden": "true"
  })) : null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-4 py-2 text-gray-500"
  }, "No option selected")))), selectedOptions.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-wrap gap-2 mt-[6px]"
  }, selectedOptions.map(opt => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    key: opt.id,
    className: "flex items-center px-2 py-1 text-xs bg-gray-100 border rounded-full"
  }, opt.label, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    onClick: () => removeItem(opt.id),
    className: "ml-1 text-gray-500 hover:text-gray-700"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "w-3 h-3"
  }))))));
}

/***/ }),

/***/ "./src/MultiSelectValue.jsx":
/*!**********************************!*\
  !*** ./src/MultiSelectValue.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MultiSelectValue)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/listbox/listbox.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/chevron-down.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/check.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/x.js");



function MultiSelectValue({
  value = [],
  onChange,
  options = []
}) {
  const [selectedOptions, setSelectedOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (onChange) {
      const normalized = selectedOptions.map(i => ({
        ...i,
        fieldType: i.fieldType || 'text',
        operator: i.operator || 'equals',
        value: i.value ?? '' // handles empty string, 0, false properly
      }));
      onChange(normalized);
    }
  }, [selectedOptions]);
  const filteredOptions = options.filter(opt => !selectedOptions.some(sel => sel.id === opt.id));
  const removeItem = id => {
    setSelectedOptions(prev => prev.filter(item => item.id !== id));
  };

  // const handleLabelChange = (index, newLabel) => {
  //   setSelectedOptions((prev) => prev.map((item, i) => (i === index ? { ...item, label: newLabel } : item)));
  // };

  const handleValueChange = (index, name, newValue) => {
    setSelectedOptions(prev => prev.map((item, i) => i === index ? {
      ...item,
      [name]: newValue
    } : item));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Listbox, {
    value: selectedOptions,
    onChange: setSelectedOptions,
    multiple: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative mt-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Listbox.Button, {
    className: "relative w-full py-2 pl-3 pr-10 text-sm text-left bg-white border border-gray-300 rounded shadow-sm cursor-default focus:outline-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "block truncate"
  }, selectedOptions.length > 0 ? selectedOptions.map(opt => opt.label).join(', ') : 'Select options'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "w-4 h-4 text-gray-400"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Listbox.Options, {
    className: "absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white border border-gray-200 rounded shadow max-h-60 focus:outline-none sm:text-sm"
  }, filteredOptions.length > 0 ? filteredOptions.map(option => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Listbox.Option, {
    key: option.id,
    value: option,
    className: ({
      active
    }) => `relative cursor-pointer select-none py-2 pl-4 pr-4 ${active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'}`
  }, ({
    selected
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: `block truncate ${selected ? 'font-medium' : 'font-normal'}`
  }, option.label), selected && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "w-4 h-4",
    "aria-hidden": "true"
  }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-4 py-2 text-gray-500"
  }, "No option selected")))), selectedOptions.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid items-center grid-cols-1 gap-2 mt-1"
  }, selectedOptions.map((opt, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: opt.id,
    className: "flex items-center gap-1 px-2 py-1 text-sm bg-gray-100 border rounded-lg outline-none hover:outline-none focus:outline-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: opt.label,
    readOnly: true,
    className: "flex-1 px-1 py-1 text-xs border rounded"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    value: opt.fieldType,
    onChange: e => handleValueChange(index, 'fieldType', e.target.value),
    className: "flex-1 px-1 py-1 text-xs border rounded outline-none hover:outline-none focus:outline-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "text"
  }, "Text"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "number"
  }, "Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "boolean"
  }, "Boolean")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    value: opt.operator,
    onChange: e => handleValueChange(index, 'operator', e.target.value),
    className: "flex-1 px-2 py-1 text-xs border rounded outline-none focus:ring-1 focus:ring-blue-300"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "equals"
  }, "Equals"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "not_equals"
  }, "Not equals"), opt.fieldType === 'number' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "greater"
  }, "Greater than"), opt.fieldType === 'number' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "less"
  }, "Less than"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "contains"
  }, "Contains"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "not_contains"
  }, "Does not contain")), opt.fieldType !== 'boolean' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: opt.fieldType,
    value: opt.value || '',
    onChange: e => handleValueChange(index, 'value', e.target.value),
    className: "flex-1 px-1 py-1 text-xs border rounded outline-none hover:outline-none focus:outline-none",
    placeholder: "Value"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-center flex-1 px-1 py-1 text-xs bg-white border rounded outline-none gap-x-4 hover:outline-none focus:outline-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "flex items-center !mb-0 gap-x-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "radio",
    name: `boolean-${index}` // ensures mutual exclusivity per item
    ,
    checked: opt.value === true,
    onChange: () => handleValueChange(index, 'value', true)
  }), "True"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "flex items-center gap-x-2 !mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "radio",
    name: `boolean-${index}`,
    checked: opt.value === false,
    onChange: () => handleValueChange(index, 'value', false)
  }), "False")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    onClick: () => removeItem(opt.id),
    className: "text-gray-500 hover:text-gray-700"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "w-3 h-3"
  }))))));
}

/***/ }),

/***/ "./src/OptionsCreate.jsx":
/*!*******************************!*\
  !*** ./src/OptionsCreate.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UUID__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UUID */ "./src/UUID.js");
/* harmony import */ var _UUID__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_UUID__WEBPACK_IMPORTED_MODULE_2__);



class DynamicOptionList extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "updateOption", (index, field, value) => {
      this.setState(prevState => {
        const element = {
          ...prevState.element
        };
        if (!element.options) element.options = [];
        element.options[index] = {
          ...element.options[index],
          [field]: value
        };
        return {
          element,
          dirty: true
        };
      });
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "editCorrectValue", (index, e) => {
      this.updateOption(index, 'correct', e.target.checked);
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "addOption", () => {
      this.setState(prevState => {
        const element = {
          ...prevState.element
        };
        if (!element.options) element.options = [];
        const groupKey = element.element?.toLowerCase?.() || 'unknown';
        element.options.push({
          value: '',
          text: '',
          key: '',
          correct: false,
          id: `${groupKey}_option_${_UUID__WEBPACK_IMPORTED_MODULE_2___default().uuid()}`
        });
        if (this.props.updateElement) {
          this.props.updateElement.call(this.props.preview, element);
        }
        return {
          element
        };
      });
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "removeOption", index => {
      this.setState(prevState => {
        const element = {
          ...prevState.element
        };
        if (Array.isArray(element.options)) {
          element.options.splice(index, 1);
        }
        return {
          element,
          dirty: true
        };
      });
    });
    this.state = {
      element: props.element || {
        options: []
      },
      dirty: false
    };
  }
  render() {
    const options = this.state.element?.options || [];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "p-4 bg-white border rounded"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "grid grid-cols-5 gap-2 pb-2 mb-2 font-semibold border-b"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, "Text"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, "Value"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, "Key"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, "Correct"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, "Actions")), options.map((option, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      key: option.id || index,
      className: "grid items-center grid-cols-5 gap-2 mb-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      className: "input-style",
      type: "text",
      value: option.text || '',
      onChange: e => this.updateOption(index, 'text', e.target.value),
      placeholder: "Enter text"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      className: "input-style",
      type: "text",
      value: option.value || '',
      onChange: e => this.updateOption(index, 'value', e.target.value),
      placeholder: "Enter value"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      className: "input-style",
      type: "text",
      value: option.key || '',
      onChange: e => this.updateOption(index, 'key', e.target.value),
      placeholder: "Enter key"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      type: "checkbox",
      checked: option.correct || false,
      onChange: e => this.editCorrectValue(index, e),
      className: "w-5 h-5"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
      type: "button",
      className: "px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600",
      onClick: () => this.removeOption(index)
    }, "Remove"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
      type: "button",
      className: "px-4 py-2 mt-3 text-white bg-blue-500 rounded hover:bg-blue-600",
      onClick: this.addOption
    }, "Add Option"));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicOptionList);

/***/ }),

/***/ "./src/OptionsCreateApi.jsx":
/*!**********************************!*\
  !*** ./src/OptionsCreateApi.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stores_requests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stores/requests */ "./src/stores/requests.js");


const OptionCreateApi = ({
  initialFields,
  onChange
}) => {
  const [url, setUrl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialFields || '');
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const loadApi = async () => {
    if (!url) return;
    setLoading(true);
    try {
      const {
        data
      } = await (0,_stores_requests__WEBPACK_IMPORTED_MODULE_1__.get)(url);
      if (onChange) {
        onChange(data);
      }
    } catch (error) {
      console.error('Failed to load data:', error);
      // Optional: Add error handling UI
    } finally {
      setLoading(false);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex gap-x-[10px] mb-2 items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    placeholder: "Load from URL",
    value: url,
    onChange: e => setUrl(e.target.value),
    className: "input-style"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    onClick: loadApi,
    disabled: loading,
    className: `button-style ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-600'}`
  }, loading ? 'Loading...' : 'Load')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OptionCreateApi);

/***/ }),

/***/ "./src/OptionsExample.jsx":
/*!********************************!*\
  !*** ./src/OptionsExample.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const OptionsExample = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("blockquote", {
  style: {
    fontSize: '11px',
    marginBottom: '8px'
  },
  className: "p-2 space-y-2 text-sm text-gray-700 bg-gray-100 rounded-md"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
  className: "space-y-1 list-disc list-inside"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Method:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "GET")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
  style: {
    fontSize: '11px'
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Response format:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("pre", {
  className: "p-2 mt-1 overflow-auto text-xs bg-white rounded-md"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, `{
  "data": [
    { "text": "Option 1", "value": "1", "key": "" },
    { "text": "Option 2", "value": "2", "key": "" }
  ]
}`)))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OptionsExample);

/***/ }),

/***/ "./src/TableInputColumns.jsx":
/*!***********************************!*\
  !*** ./src/TableInputColumns.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TableInputColumn)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_currency_input_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-currency-input-field */ "./node_modules/react-currency-input-field/dist/index.esm.js");


function TableInputColumn({
  value = [],
  onChange,
  onGetValue
}) {
  // Use the value prop if provided, otherwise use local state
  const [internalValues, setInternalValues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value?.length > 0 ? value : [{
    value: ''
  }]);

  // Update internal state when prop value changes
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (value?.length > 0 && JSON.stringify(value) !== JSON.stringify(internalValues)) {
      setInternalValues(value);
    }
  }, [value]);
  function handleValue(val, index) {
    const newValues = [...internalValues];
    newValues[index] = {
      ...newValues[index],
      value: val
    };
    setInternalValues(newValues);

    // Pass the updated values to parent component
    if (onChange) {
      onChange(newValues);
    }
  }

  // Add a new row
  function addRow() {
    const newValues = [...internalValues, {
      value: ''
    }];
    setInternalValues(newValues);

    // Pass the updated values to parent component
    if (onChange) {
      onChange(newValues);
    }
  }

  // Remove a row
  function removeRow(index) {
    const newValues = internalValues.filter((_, i) => i !== index);
    setInternalValues(newValues);

    // Pass the updated values to parent component
    if (onChange) {
      onChange(newValues);
    }
  }

  // Report changes to parent component via callback
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (onGetValue) {
      onGetValue(JSON.stringify({
        values: internalValues
      }));
    }
  }, [onGetValue, internalValues]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      maxWidth: '250px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "overflow-hidden border border-gray-200 rounded-lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid text-sm font-bold border-b border-gray-100 bg-gray-50"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-2 py-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: ""
  }, "Add Denominations"))), internalValues.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: item.key || index,
    className: "grid text-sm border-b border-gray-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center px-2 py-1 gap-x-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "flex-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_currency_input_field__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "input-example",
    className: "w-full px-3 py-1 border border-gray-100 rounded outline-none",
    decimalsLimit: 6,
    defaultValue: item.value,
    onValueChange: e => handleValue(e, index),
    allowNegativeValue: false
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => removeRow(index),
    className: "px-2 text-red-500 hover:text-red-700",
    type: "button",
    "aria-label": "Remove row"
  }, "\xD7"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-end mt-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    onClick: addRow,
    className: "font-semibold !text-blue-700 font-bold text-sm rounded outline-0 focus:outline-0"
  }, "+ Add")));
}

/***/ }),

/***/ "./src/data-grid-options.jsx":
/*!***********************************!*\
  !*** ./src/data-grid-options.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataGridOptions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function DataGridOptions({
  value = [],
  onChange,
  onGetUrl
}) {
  const [dataFields, setDataFields] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value.length > 0 ? value : [{
    id: Date.now(),
    field: '',
    headerName: '',
    type: 'text',
    editable: true,
    validate: false
  }]);
  const [url, setUrl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  // Handle input change
  const handleChange = (index, key, newValue) => {
    const updated = dataFields.map((item, idx) => idx === index ? {
      ...item,
      [key]: newValue
    } : item);
    setDataFields(updated);
    if (onChange) onChange(updated);
  };

  // Add new column
  const addColumn = () => {
    const updated = [...dataFields, {
      id: Date.now() + Math.random(),
      field: '',
      headerName: '',
      type: 'text',
      editable: true,
      validate: false
    }];
    setDataFields(updated);
    if (onChange) onChange(updated);
  };

  // Remove column
  const removeColumn = index => {
    const updated = dataFields.filter((_, idx) => idx !== index);
    setDataFields(updated);
    if (onChange) onChange(updated);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    onGetUrl(url);
  }, [url]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "space-y-2"
  }, dataFields.map((field, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: field.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-x-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    value: field.type,
    onChange: e => handleChange(index, 'type', e.target.value),
    className: "w-full px-2 py-1 text-sm border rounded focus:outline-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "text"
  }, "Text"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "number"
  }, "Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "checkbox"
  }, "Checkbox"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: field.field,
    onChange: e => handleChange(index, 'field', e.target.value),
    placeholder: "Field key",
    className: "w-full px-2 py-1 text-sm border rounded outline-none ine-none focus:outline-none"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: field.headerName,
    onChange: e => handleChange(index, 'headerName', e.target.value),
    placeholder: "Header name",
    className: "w-full px-2 py-1 text-sm border rounded outline-none focus:outline-none"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "flex items-center mb-0 gap-x-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    checked: field.validate,
    onChange: e => handleChange(index, 'validate', e.target.checked)
  }), "Validate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    disabled: dataFields.length === 1,
    onClick: () => removeColumn(index),
    className: "text-xs text-red-500 focus:outline-none hover:opacity-80 disabled:opacity-40 disabled:cursor-not-allowed"
  }, "Remove")), field.validate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    placeholder: "Provide validation api url",
    className: "w-full px-2 py-1 text-sm border rounded outline-none focus:outline-none",
    type: "text",
    value: url,
    onChange: e => setUrl(e.target.value)
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    onClick: addColumn,
    className: "flex items-center mt-2 text-xs font-medium text-gray-700 focuse:outline-none gap-x-1"
  }, "Add column")));
}

/***/ }),

/***/ "./src/dynamic-option-list.jsx":
/*!*************************************!*\
  !*** ./src/dynamic-option-list.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DynamicOptionList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UUID__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UUID */ "./src/UUID.js");
/* harmony import */ var _UUID__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_UUID__WEBPACK_IMPORTED_MODULE_1__);


class DynamicOptionList extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      element: props.element,
      dirty: false
    };
    this.editValue = this.editValue.bind(this);
    this.editText = this.editText.bind(this);
    this.editKey = this.editKey.bind(this);
    this.editCorrect = this.editCorrect.bind(this);
    this.updateElement = this.updateElement.bind(this);
  }
  editValue(option_index, e) {
    const this_element = this.state.element;
    this_element.options[option_index].value = e.target.value;
    this.setState({
      element: this_element,
      dirty: true
    });
  }
  editText(option_index, e) {
    const this_element = this.state.element;
    this_element.options[option_index].text = e.target.value;
    this.setState({
      element: this_element,
      dirty: true
    });
  }
  editKey(option_index, e) {
    const this_element = this.state.element;
    this_element.options[option_index].key = e.target.value;
    this.setState({
      element: this_element,
      dirty: true
    });
  }
  editCorrect(option_index, e) {
    const this_element = this.state.element;
    this_element.options[option_index].correct = e.target.checked;
    this.setState({
      element: this_element,
      dirty: true
    });
  }
  updateElement() {
    this.props.updateElement.call(this.props.preview, this.state.element);
    this.setState({
      dirty: false
    });
  }
  addOption() {
    const this_element = this.state.element;
    const groupKey = this_element.element.toLowerCase();
    this_element.options.push({
      value: '',
      text: '',
      key: '',
      correct: false,
      id: `${groupKey}_option_${_UUID__WEBPACK_IMPORTED_MODULE_1___default().uuid()}`
    });
    this.props.updateElement.call(this.props.preview, this_element);
  }
  removeOption(index) {
    const this_element = this.state.element;
    this_element.options.splice(index, 1);
    this.props.updateElement.call(this.props.preview, this_element);
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "w-full"
    }, this.state.element.options.map((option, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: option.id,
      className: "flex gap-2 mb-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "w-1/4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      className: "w-full px-2 py-1 border border-gray-300 rounded",
      type: "text",
      value: option.text || '',
      onChange: e => this.editText(index, e),
      placeholder: "Enter text"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "w-1/4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      className: "w-full px-2 py-1 border border-gray-300 rounded",
      type: "text",
      value: option.value || '',
      onChange: e => this.editValue(index, e),
      placeholder: "Enter value"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "w-1/4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      className: "w-full px-2 py-1 border border-gray-300 rounded",
      type: "text",
      value: option.key || '',
      onChange: e => this.editKey(index, e),
      placeholder: "Enter key"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex items-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "checkbox",
      checked: !!option.correct,
      onChange: e => this.editCorrect(index, e)
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      type: "button",
      className: "px-2 py-1 text-white bg-red-500 rounded",
      onClick: () => this.removeOption(index)
    }, "\u2715")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "mt-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      type: "button",
      className: "px-3 py-1 text-white bg-blue-500 rounded",
      onClick: () => this.addOption()
    }, "+ Add Option")), this.state.dirty && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "mt-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      type: "button",
      className: "px-3 py-1 text-white bg-green-500 rounded",
      onClick: this.updateElement
    }, "Save Changes")));
  }
}

/***/ }),

/***/ "./src/form-elements-edit.jsx":
/*!************************************!*\
  !*** ./src/form-elements-edit.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormElementsEdit)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-textarea-autosize */ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! draftjs-to-html */ "./node_modules/draftjs-to-html/lib/draftjs-to-html.js");
/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(draftjs_to_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-draft-wysiwyg */ "./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.js");
/* harmony import */ var react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _dynamic_option_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dynamic-option-list */ "./src/dynamic-option-list.jsx");
/* harmony import */ var _stores_requests__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stores/requests */ "./src/stores/requests.js");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/auth */ "./src/utils/auth.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _UUID__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UUID */ "./src/UUID.js");
/* harmony import */ var _UUID__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_UUID__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _language_provider_IntlMessages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./language-provider/IntlMessages */ "./src/language-provider/IntlMessages.js");
/* harmony import */ var _ApiExample__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ApiExample */ "./src/ApiExample.jsx");
/* harmony import */ var _TableInputColumns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TableInputColumns */ "./src/TableInputColumns.jsx");
/* harmony import */ var _DynamicInputOptions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./DynamicInputOptions */ "./src/DynamicInputOptions.jsx");
/* harmony import */ var _FileReaderComponent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./FileReaderComponent */ "./src/FileReaderComponent.jsx");
/* harmony import */ var _OptionsCreate__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./OptionsCreate */ "./src/OptionsCreate.jsx");
/* harmony import */ var _OptionsCreateApi__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./OptionsCreateApi */ "./src/OptionsCreateApi.jsx");
/* harmony import */ var _OptionsExample__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./OptionsExample */ "./src/OptionsExample.jsx");
/* harmony import */ var _MultiSelectInput__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./MultiSelectInput */ "./src/MultiSelectInput.jsx");
/* harmony import */ var _data_grid_options__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./data-grid-options */ "./src/data-grid-options.jsx");
/* harmony import */ var _MultiSelectValue__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./MultiSelectValue */ "./src/MultiSelectValue.jsx");
/* harmony import */ var _form_elements_ArithmeticComponent__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./form-elements/ArithmeticComponent */ "./src/form-elements/ArithmeticComponent.jsx");
/* harmony import */ var _form_elements_azure_file_settings__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./form-elements/azure-file-settings */ "./src/form-elements/azure-file-settings.jsx");


























const toolbar = {
  options: ["inline", "list", "textAlign", "fontSize", "link", "history"],
  inline: {
    inDropdown: false,
    className: undefined,
    options: ["bold", "italic", "underline", "superscript", "subscript"]
  }
};
const dateFormats = [{
  label: "Day/Month/Year",
  format: "dd/MM/yyyy"
}, {
  label: "Month/Day/Year",
  format: "MM/dd/yyyy"
}, {
  label: "ISO (Year-Month-Day)",
  format: "yyyy-MM-dd"
}, {
  label: "Full Month Day, Year",
  format: "MMMM d, yyyy"
}, {
  label: "Abbreviated Month Day, Year",
  format: "MMM d, yyyy"
}, {
  label: "Day. Month. Year (Dots)",
  format: "dd.MM.yyyy"
}, {
  label: "Day Month Name Year",
  format: "dd MMMM yyyy"
}, {
  label: "Weekday, Month Day, Year",
  format: "EEEE, MMMM d, yyyy"
}, {
  label: "Short Weekday, Month Day, Year",
  format: "EEE, MMM d, yyyy"
}, {
  label: "Day-Month-Year",
  format: "dd-MM-yyyy"
}, {
  label: "Day-Month-Year",
  format: "dd-MMM-yyyy"
}];
const currentDate = new Date();
class FormElementsEdit extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getDocuments", async () => {
      try {
        const token = (0,_utils_auth__WEBPACK_IMPORTED_MODULE_7__.getAuthToken)();
        const localData = window.localStorage.getItem("userData");
        const userData = localData ? JSON.parse(localData) : null;
        const LoginInfo = window.localStorage.getItem("LoginInfo");
        const loginData = LoginInfo ? JSON.parse(LoginInfo) : null;
        this.setState({
          fileLoading: true
        });
        const query = {
          Page: 1,
          Page_Size: 15,
          count: 100000,
          documentType: 0,
          organizationId: userData?.id,
          documentTabs: 2
        };
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };
        // a4368688-3294-412e-a516-7e1bde2c32a6
        if (!token) return;
        const url = `${this.props.apiBaseUrl}/documents/v1/documentmanagement/get-documents-inbox?email=${loginData?.email}`;
        const response = await axios__WEBPACK_IMPORTED_MODULE_23__["default"].post(url, query, config);
        if (response.status === 200) {
          this.setState({
            documents: response.data.results?.map(i => ({
              label: i?.title,
              value: i?.documentMainId
            }))
          });
        }
      } finally {
        this.setState({
          fileLoading: false
        });
      }
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "updateJsonElement", () => {
      const this_element = JSON.stringify(this.state.element);
      // to prevent ajax calls with no change
      if (this.state.dirty) {
        this.props.updateElement.call(this.props.preview, this_element);
        this.setState({
          dirty: false
        });
      }
    });
    this.state = {
      element: this.props.element,
      data: this.props.data,
      dirty: false,
      fileLoading: false,
      documents: [],
      multiFieldOptions: this.props.formData.filter(i => i.id !== this.props.element.id)
    };
    this.getDocuments = this.getDocuments.bind(this);
  }
  toggleRequired() {
    // const this_element = this.state.element;
  }
  editElementProp(elemProperty, targProperty, e) {
    // console.log(elemProperty);
    // console.log(targProperty);
    // console.log(e);

    const this_element = this.state.element;
    // Check if e is an event or direct value
    if (e && e.target) {
      this_element[elemProperty] = e.target[targProperty];
    } else {
      // Handle case where e is the direct value (like from TableInputColumn)
      this_element[targProperty] = e;
    }
    this.setState({
      element: this_element,
      dirty: true
    }, () => {
      if (targProperty === "checked") {
        this.updateElement();
      }
    });
  }
  onEditorStateChange(index, property, editorContent) {
    // const html = draftToHtml(convertToRaw(editorContent.getCurrentContent())).replace(/<p>/g, '<div>').replace(/<\/p>/g, '</div>');
    const html = draftjs_to_html__WEBPACK_IMPORTED_MODULE_3___default()((0,draft_js__WEBPACK_IMPORTED_MODULE_2__.convertToRaw)(editorContent.getCurrentContent())).replace(/<p>/g, "").replace(/<\/p>/g, "").replace(/&nbsp;/g, " ").replace(/(?:\r\n|\r|\n)/g, " ");
    const this_element = this.state.element;
    this_element[property] = html;
    this.setState({
      element: this_element,
      dirty: true
    });
  }
  updateElement() {
    const this_element = this.state.element;
    // to prevent ajax calls with no change
    if (this.state.dirty) {
      this.props.updateElement.call(this.props.preview, this_element);
      this.setState({
        dirty: false
      });
    }
  }
  convertFromHTML(content) {
    const newContent = (0,draft_js__WEBPACK_IMPORTED_MODULE_2__.convertFromHTML)(content);
    if (!newContent.contentBlocks || !newContent.contentBlocks.length) {
      // to prevent crash when no contents in editor
      return draft_js__WEBPACK_IMPORTED_MODULE_2__.EditorState.createEmpty();
    }
    const contentState = draft_js__WEBPACK_IMPORTED_MODULE_2__.ContentState.createFromBlockArray(newContent);
    return draft_js__WEBPACK_IMPORTED_MODULE_2__.EditorState.createWithContent(contentState);
  }
  addOptions() {
    const optionsApiUrl = document.getElementById("optionsApiUrl").value;
    if (optionsApiUrl) {
      (0,_stores_requests__WEBPACK_IMPORTED_MODULE_6__.get)(optionsApiUrl).then(response => {
        this.props.element.options = [];
        const {
          options
        } = this.props.element;
        (response.data || response)?.forEach(x => {
          // eslint-disable-next-line no-param-reassign
          x.id = _UUID__WEBPACK_IMPORTED_MODULE_9___default().uuid();
          options.push(x);
        });
        const this_element = this.state.element;
        this.setState({
          element: this_element,
          dirty: true
        });
      });
    }
  }
  addOptionsFromSheet(data) {
    const {
      options
    } = this.props.element;
    data.forEach(x => {
      // eslint-disable-next-line no-param-reassign
      x.id = _UUID__WEBPACK_IMPORTED_MODULE_9___default().uuid();
      options.push(x);
    });
    const this_element = this.state.element;
    this.setState({
      element: this_element,
      dirty: true
    });
  }
  componentDidMount() {
    this.getDocuments();
  }
  render() {
    if (this.state.dirty) {
      this.props.element.dirty = true;
    }
    const this_checked = this.props.element.hasOwnProperty("required") ? this.props.element.required : false;
    // const this_read_only = this.props.element.hasOwnProperty('readOnly')
    //   ? this.props.element.readOnly
    //   : false;

    const this_is_read_only = this.props.element.hasOwnProperty("isReadOnly") ? this.props.element.isReadOnly : false;
    const this_default_today = this.props.element.hasOwnProperty("defaultToday") ? this.props.element.defaultToday : false;
    const this_show_time_select = this.props.element.hasOwnProperty("showTimeSelect") ? this.props.element.showTimeSelect : false;
    const this_show_time_select_only = this.props.element.hasOwnProperty("showTimeSelectOnly") ? this.props.element.showTimeSelectOnly : false;
    const this_show_time_input = this.props.element.hasOwnProperty("showTimeInput") ? this.props.element.showTimeInput : false;
    const this_hide_past_date = this.props.element.hasOwnProperty("hidePastDate") ? this.props.element.hidePastDate : false;
    const this_hide_future_date = this.props.element.hasOwnProperty("hideFutureDate") ? this.props.element.hideFutureDate : false;
    const this_checked_inline = this.props.element.hasOwnProperty("inline") ? this.props.element.inline : false;
    const this_checked_bold = this.props.element.hasOwnProperty("bold") ? this.props.element.bold : false;
    const this_checked_italic = this.props.element.hasOwnProperty("italic") ? this.props.element.italic : false;
    const this_checked_center = this.props.element.hasOwnProperty("center") ? this.props.element.center : false;
    // const this_checked_page_break = this.props.element.hasOwnProperty(
    //   'pageBreakBefore',
    // )
    //   ? this.props.element.pageBreakBefore
    //   : false;

    const this_checked_toggle_password = this.props.element.hasOwnProperty("togglePassword") ? this.props.element.togglePassword : false;
    const this_checked_toggle_negative = this.props.element.hasOwnProperty("toggleNegative") ? this.props.element.toggleNegative : false;
    const this_checked_toggle_vibility = this.props.element.hasOwnProperty("toggleVisibility") ? this.props.element.toggleVisibility : false;
    const this_checked_is_cascade = this.props.element.hasOwnProperty("isCascade") ? this.props.element.isCascade : false;

    // const this_checked_alternate_form = this.props.element.hasOwnProperty(
    //   'alternateForm',
    // )
    //   ? this.props.element.alternateForm
    //   : false;

    const {
      canHavePageBreakBefore,
      // canHaveAlternateForm,
      canHaveDisplayHorizontal,
      canHaveOptionCorrect,
      canHaveOptionValue
    } = this.props.element;
    const canHaveImageSize = this.state.element.element === "Image" || this.state.element.element === "Camera";
    const this_files = this.props.files.length ? this.props.files : [];
    if (this_files.length < 1 || this_files.length > 0 && this_files[0].id !== "") {
      this_files.unshift({
        id: "",
        file_name: ""
      });
    }
    let editorState;
    if (this.props.element.hasOwnProperty("content")) {
      editorState = this.convertFromHTML(this.props.element.content);
    }
    if (this.props.element.hasOwnProperty("label")) {
      editorState = this.convertFromHTML(this.props.element.label);
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "clearfix"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h4", {
      className: "float-left"
    }, this.props.element.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("i", {
      className: "float-right fas fa-times dismiss-edit",
      onClick: this.props.manualEditModeOff
    })), this.props.element.hasOwnProperty("content") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_language_provider_IntlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "text-to-display"
    }), ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_4__.Editor, {
      toolbar: toolbar,
      defaultEditorState: editorState,
      onBlur: this.updateElement.bind(this),
      onEditorStateChange: this.onEditorStateChange.bind(this, 0, "content"),
      stripPastedStyles: true
    })), this.props.element.hasOwnProperty("file_path") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label",
      htmlFor: "fileSelect"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_language_provider_IntlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "choose-file"
    }), ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("select", {
      id: "fileSelect",
      className: "form-control",
      defaultValue: this.props.element.file_path,
      onBlur: this.updateElement.bind(this),
      onChange: this.editElementProp.bind(this, "file_path", "value")
    }, this_files.map(file => {
      const this_key = `file_${file.id}`;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
        value: file.id,
        key: this_key
      }, file.file_name);
    }))), this.props.element.hasOwnProperty("href") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_24__["default"], {
      type: "text",
      className: "form-control",
      defaultValue: this.props.element.href,
      onBlur: this.updateElement.bind(this),
      onChange: this.editElementProp.bind(this, "href", "value")
    })), this.props.element.hasOwnProperty("label") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_language_provider_IntlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "display-label"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_4__.Editor, {
      toolbar: toolbar,
      defaultEditorState: editorState,
      onBlur: this.updateElement.bind(this),
      onEditorStateChange: this.onEditorStateChange.bind(this, 0, "label"),
      stripPastedStyles: true,
      height: 100
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "custom-control custom-checkbox"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      id: "is-required",
      className: "custom-control-input",
      type: "checkbox",
      checked: this_checked,
      value: true,
      onChange: this.editElementProp.bind(this, "required", "checked")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "custom-control-label",
      htmlFor: "is-required"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_language_provider_IntlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "required"
    }))), this.props.element.hasOwnProperty("isReadOnly") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "custom-control custom-checkbox"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      id: "read-only",
      className: "custom-control-input",
      type: "checkbox",
      checked: this_is_read_only,
      value: true,
      onChange: this.editElementProp.bind(this, "isReadOnly", "checked")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "custom-control-label",
      htmlFor: "read-only"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_language_provider_IntlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "read-only"
    }))), this.props.element.hasOwnProperty("defaultToday") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "custom-control custom-checkbox"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      id: "is-default-to-today",
      className: "custom-control-input",
      type: "checkbox",
      checked: this_default_today,
      value: true,
      onChange: this.editElementProp.bind(this, "defaultToday", "checked")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "custom-control-label",
      htmlFor: "is-default-to-today"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_language_provider_IntlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "default-to-today"
    }), "?")), this.props.element.hasOwnProperty("showTimeSelect") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "custom-control custom-checkbox"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      id: "show-time-select",
      className: "custom-control-input",
      type: "checkbox",
      checked: this_show_time_select,
      value: true,
      onChange: this.editElementProp.bind(this, "showTimeSelect", "checked")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "custom-control-label",
      htmlFor: "show-time-select"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_language_provider_IntlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "show-time-select"
    }), "?")), this_show_time_select && this.props.element.hasOwnProperty("showTimeSelectOnly") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "custom-control custom-checkbox"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      id: "show-time-select-only",
      className: "custom-control-input",
      type: "checkbox",
      checked: this_show_time_select_only,
      value: true,
      onChange: this.editElementProp.bind(this, "showTimeSelectOnly", "checked")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "custom-control-label",
      htmlFor: "show-time-select-only"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_language_provider_IntlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "show-time-select-only"
    }), "?")), this.props.element.hasOwnProperty("showTimeInput") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "custom-control custom-checkbox"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      id: "show-time-input",
      className: "custom-control-input",
      type: "checkbox",
      checked: this_show_time_input,
      value: true,
      onChange: this.editElementProp.bind(this, "showTimeInput", "checked")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "custom-control-label",
      htmlFor: "show-time-input"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_language_provider_IntlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "show-time-input"
    }), "?")), this.props.element.hasOwnProperty("hidePastDate") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "custom-control custom-checkbox"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      id: "hidePastDate",
      className: "custom-control-input",
      type: "checkbox",
      checked: this_hide_past_date,
      value: true,
      onChange: this.editElementProp.bind(this, "hidePastDate", "checked")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "custom-control-label",
      htmlFor: "hidePastDate"
    }, "Hide Past date")), this.props.element.hasOwnProperty("hideFutureDate") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "custom-control custom-checkbox"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      id: "hideFutureDate",
      className: "custom-control-input",
      type: "checkbox",
      checked: this_hide_future_date,
      value: true,
      onChange: this.editElementProp.bind(this, "hideFutureDate", "checked")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "custom-control-label",
      htmlFor: "hideFutureDate"
    }, "Hide Future date")), (this.state.element.element === "RadioButtons" || this.state.element.element === "Checkboxes") && canHaveDisplayHorizontal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "custom-control custom-checkbox"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      id: "display-horizontal",
      className: "custom-control-input",
      type: "checkbox",
      checked: this_checked_inline,
      value: true,
      onChange: this.editElementProp.bind(this, "inline", "checked")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "custom-control-label",
      htmlFor: "display-horizontal"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_language_provider_IntlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "display-horizontal"
    })))), this.props.element.hasOwnProperty("src") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label",
      htmlFor: "srcInput"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_language_provider_IntlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "link-to"
    }), ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      id: "srcInput",
      type: "text",
      className: "form-control",
      defaultValue: this.props.element.src,
      onBlur: this.updateElement.bind(this),
      onChange: this.editElementProp.bind(this, "src", "value")
    }))), canHaveImageSize && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "custom-control custom-checkbox"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      id: "do-center",
      className: "custom-control-input",
      type: "checkbox",
      checked: this_checked_center,
      value: true,
      onChange: this.editElementProp.bind(this, "center", "checked")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "custom-control-label",
      htmlFor: "do-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_language_provider_IntlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "center"
    }), "?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "col-sm-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label",
      htmlFor: "elementWidth"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_language_provider_IntlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "width"
    }), ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      id: "elementWidth",
      type: "text",
      className: "form-control",
      defaultValue: this.props.element.width,
      onBlur: this.updateElement.bind(this),
      onChange: this.editElementProp.bind(this, "width", "value")
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "col-sm-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label",
      htmlFor: "elementHeight"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_language_provider_IntlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "height"
    }), ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      id: "elementHeight",
      type: "text",
      className: "form-control",
      defaultValue: this.props.element.height,
      onBlur: this.updateElement.bind(this),
      onChange: this.editElementProp.bind(this, "height", "value")
    })))), (this.state.element.element === "FileUpload" || this.state.element.element === "MultiFileUpload" || this.state.element.element === "AzureFileUpload") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: " mb-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label",
      htmlFor: "fileSize"
    }, "Max File Size"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "flex  border border-gray-300 rounded-lg overflow-hidden max-w-[150px]"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      id: "maxFileSize",
      type: "number",
      min: 0,
      className: "px-3.5 py-1.5 outline-none flex-1 text-sm min-w-0",
      defaultValue: this.props.element.maxFileSize,
      onBlur: this.updateElement.bind(this),
      onChange: this.editElementProp.bind(this, "maxFileSize", "value")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
      className: "bg-gray-100 px-3.5 py-1.5 flex items-center justify-center text-sm font-medium"
    }, "MB"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label",
      htmlFor: "fileType"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_language_provider_IntlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "choose-file-type"
    }), ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("select", {
      id: "fileType",
      className: "form-control",
      onBlur: this.updateElement.bind(this),
      onChange: this.editElementProp.bind(this, "fileType", "value"),
      value: this.props.element.fileType
    }, _data__WEBPACK_IMPORTED_MODULE_8__.FileTypes.map((file, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
      value: file.type,
      key: index
    }, file.typeName)))), this.state.element.element === "FileUpload" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label",
      htmlFor: "fileType"
    }, "File Result"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("select", {
      id: "fileResult",
      className: "form-control",
      onBlur: this.updateElement.bind(this),
      onChange: this.editElementProp.bind(this, "fileResult", "value"),
      value: this.props.element.fileResult
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
      value: null,
      disabled: true
    }, "Select"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
      value: "url"
    }, "Url String"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
      value: "base64"
    }, "Base64 String"))), this.state.element.element === "AzureFileUpload" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_form_elements_azure_file_settings__WEBPACK_IMPORTED_MODULE_22__["default"], {
      apiUrl: this.props.apiBaseUrl,
      detail: this.props.element.azureSettings || {},
      onValueChange: objData => {
        this.editElementProp(this, "azureSettings", objData);
      }
    }))), this.state.element.element === "Signature" && this.props.element.readOnly ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label",
      htmlFor: "variableKey"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_language_provider_IntlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "variable-key"
    }), ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      id: "variableKey",
      type: "text",
      className: "form-control",
      defaultValue: this.props.element.variableKey,
      onBlur: this.updateElement.bind(this),
      onChange: this.editElementProp.bind(this, "variableKey", "value")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
      className: "help-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_language_provider_IntlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "variable-key-desc"
    }), ".")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null), this.props.element.hasOwnProperty("step") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group-range"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label",
      htmlFor: "rangeStep"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_language_provider_IntlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "step"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      id: "rangeStep",
      type: "number",
      className: "form-control",
      defaultValue: this.props.element.step,
      onBlur: this.updateElement.bind(this),
      onChange: this.editElementProp.bind(this, "step", "value")
    }))), this.props.element.hasOwnProperty("min_value") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group-range"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label",
      htmlFor: "rangeMin"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_language_provider_IntlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "min"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      id: "rangeMin",
      type: "number",
      className: "form-control",
      defaultValue: this.props.element.min_value,
      onBlur: this.updateElement.bind(this),
      onChange: this.editElementProp.bind(this, "min_value", "value")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      type: "text",
      className: "form-control",
      defaultValue: this.props.element.min_label,
      onBlur: this.updateElement.bind(this),
      onChange: this.editElementProp.bind(this, "min_label", "value")
    }))), this.props.element.hasOwnProperty("max_value") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group-range"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label",
      htmlFor: "rangeMax"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_language_provider_IntlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "max"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      id: "rangeMax",
      type: "number",
      className: "form-control",
      defaultValue: this.props.element.max_value,
      onBlur: this.updateElement.bind(this),
      onChange: this.editElementProp.bind(this, "max_value", "value")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      type: "text",
      className: "form-control",
      defaultValue: this.props.element.max_label,
      onBlur: this.updateElement.bind(this),
      onChange: this.editElementProp.bind(this, "max_label", "value")
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "grid grid-cols-2 date_range gap-x-3"
    }, this.props.element.hasOwnProperty("canHaveMinLength") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group-range"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label text-13",
      htmlFor: "minLength"
    }, "Min Length"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      type: "number",
      style: {
        width: "100%"
      },
      className: "!w-full form-control text-sm",
      defaultValue: this.props.element.minLength,
      onBlur: this.updateElement.bind(this),
      onChange: this.editElementProp.bind(this, "minLength", "value")
    }))), this.props.element.hasOwnProperty("canHaveMaxLength") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group-range"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label text-13",
      htmlFor: "maxLength"
    }, "Max Length"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      type: "number",
      style: {
        width: "100%"
      },
      className: "!w-full form-control text-sm",
      defaultValue: this.props.element.maxLength,
      min: this.props.element.minLength,
      onBlur: this.updateElement.bind(this),
      onChange: this.editElementProp.bind(this, "maxLength", "value")
    })))), this.props.element.hasOwnProperty("canTogglePassword") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "custom-control custom-checkbox"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      id: "toggle-password",
      className: "custom-control-input",
      type: "checkbox",
      checked: this_checked_toggle_password,
      value: true,
      onChange: this.editElementProp.bind(this, "togglePassword", "checked")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "custom-control-label",
      htmlFor: "toggle-password"
    }, "Can Toggle Password"))), this.props.element.hasOwnProperty("canToggleNegative") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "custom-control custom-checkbox"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      id: "toggle-negative",
      className: "custom-control-input",
      type: "checkbox",
      checked: this_checked_toggle_negative,
      value: true,
      onChange: this.editElementProp.bind(this, "toggleNegative", "checked")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "custom-control-label",
      htmlFor: "toggle-negative"
    }, "Can Allow Negative"))), this.props.element.hasOwnProperty("canMapFields") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "mb-2 "
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label text-13",
      htmlFor: "documentId"
    }, "Select Mapped Fields"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_MultiSelectInput__WEBPACK_IMPORTED_MODULE_18__["default"], {
      element: this.props.element,
      options: this.state.multiFieldOptions,
      value: this.props.element.mappedFields || [],
      onChange: newValues => {
        this.editElementProp(this, "mappedFields", newValues);
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, this.props.element.hasOwnProperty("haveArithmetic") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_form_elements_ArithmeticComponent__WEBPACK_IMPORTED_MODULE_21__["default"], {
      mappedFields: this.props.element.mappedFields || [],
      calculationFields: this.props.element.calculationFields || [],
      onChangeCalculationFields: newValues => {
        this.editElementProp(this, "calculationFields", newValues);
      },
      limitControlOn: this.props.element.limitControlOn,
      outputLimitEnabled: this.props.element.outputLimitEnabled,
      outputMaxValue: this.props.element.outputMaxValue,
      outputFormat: this.props.element.outputFormat,
      onChangeLimitControlOn: val => {
        this.editElementProp(this, "limitControlOn", val);
      },
      onChangeOutputLimitEnabled: val => {
        this.editElementProp(this, "outputLimitEnabled", val);
      },
      onChangeOutputMaxValue: val => {
        this.editElementProp(this, "outputMaxValue", val);
      },
      onChangeOutputFormat: val => {
        this.editElementProp(this, "outputFormat", val);
      },
      isEditing: true
    })))), this.props.element.hasOwnProperty("havePostingConfig") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "mb-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label text-13",
      htmlFor: "postingCustomerAccountField"
    }, "Customer Account Field"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("select", {
      id: "postingCustomerAccountField",
      className: "form-control",
      defaultValue: this.props.element.customerAccountField || "",
      onBlur: this.updateElement.bind(this),
      onChange: this.editElementProp.bind(this, "customerAccountField", "value")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
      value: ""
    }, "Select field"), this.state.multiFieldOptions.filter(f => f.field_name).map(f => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
      key: f.field_name,
      value: f.field_name
    }, (f.label || "").replace(/<[^>]*>/g, "") || f.field_name)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label text-13",
      htmlFor: "postingOtherAccountField"
    }, "Other Account Field"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("select", {
      id: "postingOtherAccountField",
      className: "form-control",
      defaultValue: this.props.element.otherAccountField || "",
      onBlur: this.updateElement.bind(this),
      onChange: this.editElementProp.bind(this, "otherAccountField", "value")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
      value: ""
    }, "Select field"), this.state.multiFieldOptions.filter(f => f.field_name).map(f => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
      key: f.field_name,
      value: f.field_name
    }, (f.label || "").replace(/<[^>]*>/g, "") || f.field_name)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label text-13",
      htmlFor: "postingDefaultAmortizeGL"
    }, "Default Amortize GL Account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      id: "postingDefaultAmortizeGL",
      type: "text",
      className: "form-control",
      defaultValue: this.props.element.defaultAmortizeGL || "",
      onBlur: this.updateElement.bind(this),
      onChange: this.editElementProp.bind(this, "defaultAmortizeGL", "value")
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label text-13",
      htmlFor: "postingNarrationTypes"
    }, "Narration Types (comma separated)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      id: "postingNarrationTypes",
      type: "text",
      className: "form-control",
      defaultValue: this.props.element.narrationTypes || "VAT, WHT, Reversed Amount",
      onBlur: this.updateElement.bind(this),
      onChange: this.editElementProp.bind(this, "narrationTypes", "value")
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label text-13",
      htmlFor: "postingBranchCode"
    }, "Branch Code"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      id: "postingBranchCode",
      type: "text",
      className: "form-control",
      defaultValue: this.props.element.branchCode || "",
      onBlur: this.updateElement.bind(this),
      onChange: this.editElementProp.bind(this, "branchCode", "value")
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label text-13",
      htmlFor: "postingCurrency"
    }, "Currency"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      id: "postingCurrency",
      type: "text",
      className: "form-control",
      defaultValue: this.props.element.currency || "",
      onBlur: this.updateElement.bind(this),
      onChange: this.editElementProp.bind(this, "currency", "value")
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label text-13",
      htmlFor: "postingTransactionCategory"
    }, "Transaction Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      id: "postingTransactionCategory",
      type: "text",
      className: "form-control",
      defaultValue: this.props.element.transactionCategory || "",
      onBlur: this.updateElement.bind(this),
      onChange: this.editElementProp.bind(this, "transactionCategory", "value")
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "mt-2 mb-3 custom-control custom-checkbox"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      id: "posting-append-branch-code",
      className: "custom-control-input",
      type: "checkbox",
      checked: !!this.props.element.appendBranchCodeCheck,
      onChange: this.editElementProp.bind(this, "appendBranchCodeCheck", "checked")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "custom-control-label",
      htmlFor: "posting-append-branch-code"
    }, "Append Branch Code Check"))), this.props.element.hasOwnProperty("canToggleField") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "mt-2 mb-3 custom-control custom-checkbox"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      id: "toggle-field-visibility",
      className: "custom-control-input",
      type: "checkbox",
      checked: this_checked_toggle_vibility,
      onChange: this.editElementProp.bind(this, "toggleVisibility", "checked")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "custom-control-label",
      htmlFor: "toggle-field-visibility"
    }, "Toggle Field Visibility")), this_checked_toggle_vibility && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label text-13",
      htmlFor: "toggeIds"
    }, "Dependent Fields/Values"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_MultiSelectValue__WEBPACK_IMPORTED_MODULE_20__["default"], {
      element: this.props.element,
      options: this.state.multiFieldOptions,
      value: this.props.element.visibilityFields || [],
      onChange: newValues => {
        this.editElementProp(this, "visibilityFields", newValues);
      }
    }))), this.props.element.hasOwnProperty("canUseCascade") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "mt-2 mb-3 custom-control custom-checkbox"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      id: "is-cascade",
      className: "custom-control-input",
      type: "checkbox",
      checked: this_checked_is_cascade,
      onChange: this.editElementProp.bind(this, "isCascade", "checked")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "custom-control-label",
      htmlFor: "is-cascade"
    }, "Use Cascade")), this_checked_is_cascade && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label text-13",
      htmlFor: "toggeIds"
    }, "Dependent Field"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("select", {
      className: "form-control",
      value: this.props.element.method,
      onBlur: this.updateElement.bind(this),
      onChange: this.editElementProp.bind(this, "dependentField", "value")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
      value: ""
    }, "Select field"), this.state.multiFieldOptions.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
      key: index,
      value: item.field_name
    }, item.label))))), this.props.element.hasOwnProperty("canMakeApiValidation") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "mb-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ApiExample__WEBPACK_IMPORTED_MODULE_11__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label text-13",
      htmlFor: "url"
    }, "Api Url"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      type: "text",
      className: "form-control",
      defaultValue: this.props.element.url,
      onBlur: this.updateElement.bind(this),
      onChange: this.editElementProp.bind(this, "url", "value")
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label text-13",
      htmlFor: "url"
    }, "File Retrieval Api Url (optional)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      type: "text",
      className: "form-control",
      defaultValue: this.props.element.fileUrl,
      onBlur: this.updateElement.bind(this),
      onChange: this.editElementProp.bind(this, "fileUrl", "value")
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label text-13",
      htmlFor: "method"
    }, "Method"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("select", {
      className: "form-control",
      defaultValue: this.props.element.method,
      onBlur: this.updateElement.bind(this),
      onChange: this.editElementProp.bind(this, "method", "value")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
      value: "get"
    }, "GET"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
      value: "post"
    }, "POST"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label text-13",
      htmlFor: "apiKey"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, " ", "Authorization Key", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
      className: "text-muted"
    }, "(Optional)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      type: "text",
      className: "form-control",
      defaultValue: this.props.element.apiKey,
      onBlur: this.updateElement.bind(this),
      onChange: this.editElementProp.bind(this, "apiKey", "value")
    }))), this.props.element.hasOwnProperty("canSelectDocuments") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label text-13",
      htmlFor: "documentId"
    }, "Choose a document"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("select", {
      id: "documentId",
      className: "form-control",
      value: this.props.element.documentId,
      onBlur: this.updateElement.bind(this),
      onChange: this.editElementProp.bind(this, "documentId", "value")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
      value: null
    }, this.state.fileLoading ? "Fetching documents..." : "Select document"), this.state.documents?.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
      key: item.value,
      value: JSON.stringify(item)
    }, item.label))))), this.props.element.hasOwnProperty("minDate") || this.props.element.hasOwnProperty("maxDate") ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, (!this.props.element.hidePastDate || !this.props.element.hideFutureDate) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label text-13"
    }, "Date Range "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "grid grid-cols-2 date_range gap-x-3"
    }, !this.props.element.hidePastDate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react_datepicker__WEBPACK_IMPORTED_MODULE_25___default()), {
      onChange: newValues => {
        this.editElementProp(this, "minDate", newValues);
      },
      name: "minDate",
      selected: this.props.element.minDate,
      className: "form-control",
      isClearable: true,
      placeholderText: "Min Date Value"
    })), !this.props.element.hideFutureDate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react_datepicker__WEBPACK_IMPORTED_MODULE_25___default()), {
      onChange: newValues => {
        this.editElementProp(this, "maxDate", newValues);
      },
      name: "maxDate",
      selected: this.props.element.maxDate,
      minDate: this.props.element.hidePastDate ? currentDate : this.props.element.minDate,
      className: "form-control",
      isClearable: true,
      placeholderText: "Max Date Value"
    })))) : null, this.props.element.hasOwnProperty("canSelectDateFormat") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label text-13"
    }, "Choose a date format"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("select", {
      id: "dateFormat",
      className: "form-control",
      value: this.props.element.dateFormat,
      onBlur: this.updateElement.bind(this),
      onChange: this.editElementProp.bind(this, "dateFormat", "value")
    }, dateFormats?.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
      key: item.format,
      value: item.format
    }, item.label, " (", item.format, ")"))))), this.props.element.hasOwnProperty("canHaveDenonimator") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_TableInputColumns__WEBPACK_IMPORTED_MODULE_12__["default"], {
      value: this.props.element.denominators || [],
      onChange: newValues => {
        this.editElementProp(this, "denominators", newValues);
      }
    }))), this.props.element.hasOwnProperty("canHaveDynamicInputOptions") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label text-13",
      htmlFor: "dynamicInputOptions"
    }, "Add Inputs Key/Label"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_DynamicInputOptions__WEBPACK_IMPORTED_MODULE_13__["default"], {
      initialFields: this.props.element.dynamicInputOptions,
      onChange: newValues => {
        this.editElementProp(this, "dynamicInputOptions", newValues);
      }
    }))), " ", this.props.element.hasOwnProperty("canHaveDataColumns") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label text-13",
      htmlFor: "dynamicInputOptions"
    }, "Add Data Columns"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_data_grid_options__WEBPACK_IMPORTED_MODULE_19__["default"], {
      value: this.props.element.dataColumns,
      onChange: newValues => {
        this.editElementProp(this, "dataColumns", newValues);
      },
      onGetUrl: url => {
        this.editElementProp(this, "url", url);
      }
    }))), " ", this.props.element.hasOwnProperty("canHandleMultiOptions") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label text-13",
      htmlFor: "firstLabel"
    }, "First DropDown Detail"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      id: "firstLabel",
      className: "input-style",
      defaultValue: this.props.element.firstLabel,
      placeholder: "Enter First label",
      onBlur: this.updateElement.bind(this),
      onChange: this.editElementProp.bind(this, "firstLabel", "value")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "mt-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_OptionsCreateApi__WEBPACK_IMPORTED_MODULE_16__["default"], {
      onChange: newValues => {
        this.editElementProp(this, "firstDropdownOptions", newValues);
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_OptionsCreate__WEBPACK_IMPORTED_MODULE_15__["default"], {
      hideKey: true,
      initialFields: this.props.element.firstDropdownOptions,
      onChange: newValues => {
        this.editElementProp(this, "firstDropdownOptions", newValues);
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label text-13",
      htmlFor: "secondLabel"
    }, "Second DropDown Detail"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      id: "secondLabel",
      className: "input-style",
      defaultValue: this.props.element.secondLabel,
      placeholder: "Enter Second label",
      onBlur: this.updateElement.bind(this),
      onChange: this.editElementProp.bind(this, "secondLabel", "value")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "mt-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_OptionsCreateApi__WEBPACK_IMPORTED_MODULE_16__["default"], {
      onChange: newValues => {
        this.editElementProp(this, "secondDropdownOptions", newValues);
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_OptionsCreate__WEBPACK_IMPORTED_MODULE_15__["default"], {
      initialFields: this.props.element.secondDropdownOptions,
      onChange: newValues => {
        this.editElementProp(this, "secondDropdownOptions", newValues);
      }
    }))), this.props.element.hasOwnProperty("default_value") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group-range"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label",
      htmlFor: "defaultSelected"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_language_provider_IntlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "default-selected"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      id: "defaultSelected",
      type: "number",
      className: "form-control",
      defaultValue: this.props.element.default_value,
      onBlur: this.updateElement.bind(this),
      onChange: this.editElementProp.bind(this, "default_value", "value")
    }))), this.props.element.hasOwnProperty("static") && this.props.element.static && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_language_provider_IntlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "text-style"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "custom-control custom-checkbox"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      id: "do-bold",
      className: "custom-control-input",
      type: "checkbox",
      checked: this_checked_bold,
      value: true,
      onChange: this.editElementProp.bind(this, "bold", "checked")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "custom-control-label",
      htmlFor: "do-bold"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_language_provider_IntlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "bold"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "custom-control custom-checkbox"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      id: "do-italic",
      className: "custom-control-input",
      type: "checkbox",
      checked: this_checked_italic,
      value: true,
      onChange: this.editElementProp.bind(this, "italic", "checked")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "custom-control-label",
      htmlFor: "do-italic"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_language_provider_IntlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "italic"
    })))), this.props.element.showDescription && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label",
      htmlFor: "questionDescription"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_language_provider_IntlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "description"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_24__["default"], {
      type: "text",
      className: "form-control",
      id: "questionDescription",
      defaultValue: this.props.element.description,
      onBlur: this.updateElement.bind(this),
      onChange: this.editElementProp.bind(this, "description", "value")
    })), this.props.showCorrectColumn && this.props.element.canHaveAnswer && !this.props.element.hasOwnProperty("options") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label",
      htmlFor: "correctAnswer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_language_provider_IntlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "correct-answer"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      id: "correctAnswer",
      type: "text",
      className: "form-control",
      defaultValue: this.props.element.correct,
      onBlur: this.updateElement.bind(this),
      onChange: this.editElementProp.bind(this, "correct", "value")
    })), this.props.element.canPopulateFromApi && this.props.element.hasOwnProperty("options") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label",
      htmlFor: "optionsApiUrl"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_language_provider_IntlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "populate-options-from-api"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_OptionsExample__WEBPACK_IMPORTED_MODULE_17__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "col-sm-8"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      className: "input-style",
      style: {
        width: "100%"
      },
      type: "text",
      id: "optionsApiUrl",
      onBlur: this.updateElement.bind(this),
      onChange: this.editElementProp.bind(this, "optionsApiUrl", "value"),
      placeholder: "http://localhost:8080/api/optionsdata"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
      onClick: this.addOptions.bind(this),
      className: "button-style"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_language_provider_IntlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "populate"
    }))))), this.props.element.canPopulateFromApi && this.props.element.hasOwnProperty("options") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
      className: "control-label",
      htmlFor: "optionsApiUrl"
    }, "Populate from sheet (csv, xlsx)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "col-sm-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_FileReaderComponent__WEBPACK_IMPORTED_MODULE_14__["default"], {
      name: "options",
      setValue: (name, value) => {
        this.addOptionsFromSheet(value);
      }
    })))), this.props.element.hasOwnProperty("options") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_dynamic_option_list__WEBPACK_IMPORTED_MODULE_5__["default"], {
      showCorrectColumn: this.props.showCorrectColumn,
      canHaveOptionCorrect: canHaveOptionCorrect,
      canHaveOptionValue: canHaveOptionValue,
      data: this.props.preview.state.data,
      updateElement: this.props.updateElement,
      preview: this.props.preview,
      element: this.props.element,
      key: this.props.element.options.length
    }));
  }
}
FormElementsEdit.defaultProps = {
  className: "edit-element-fields"
};

/***/ }),

/***/ "./src/form-elements/ArithmeticComponent.jsx":
/*!***************************************************!*\
  !*** ./src/form-elements/ArithmeticComponent.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ArithmeticComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_currency_input_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-currency-input-field */ "./node_modules/react-currency-input-field/dist/index.esm.js");
/* harmony import */ var _utils_auditLogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/auditLogger */ "./src/utils/auditLogger.js");



const OPERATIONS = ['+', '-', '*', '/'];
function ArithmeticComponent({
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
  onChangeOutputFormat
}) {
  const [combinedFields, setCombinedFields] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);

  // Merge mappedFields + custom fields on mappedFields change
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setCombinedFields(prev => {
      const customFields = prev.length ? prev.filter(f => !f.isMapped) : calculationFields.filter(f => !f.isMapped);
      const updatedMapped = mappedFields.map((field, index) => {
        const existing = prev.find(f => f.field_name === field.field_name && f.isMapped) || calculationFields.find(f => f.field_name === field.field_name && f.isMapped);
        return {
          field_name: field.field_name,
          label: field.label || `Field ${index + 1}`,
          value: existing?.value || '',
          operation: existing?.operation || (index === 0 ? '' : '+'),
          isMapped: true,
          limitEnabled: existing?.limitEnabled || false,
          maxValue: existing?.maxValue || '',
          format: existing?.format || 'numeric'
        };
      });

      // Keep custom fields limit properties intact
      const updatedCustom = customFields.map(f => {
        const existing = calculationFields.find(cf => cf.label === f.label && !cf.isMapped);
        return {
          ...f,
          limitEnabled: existing?.limitEnabled || false,
          maxValue: existing?.maxValue || '',
          format: existing?.format || 'numeric'
        };
      });
      return [...updatedMapped, ...updatedCustom];
    });
  }, [mappedFields]);

  // Notify parent on change
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (onChangeCalculationFields) {
      onChangeCalculationFields(combinedFields);
    }
  }, [combinedFields]);
  const updateField = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((index, changes) => {
    setCombinedFields(prev => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        ...changes
      };
      return updated;
    });
  }, []);
  const handleLabelChange = (index, newLabel) => {
    updateField(index, {
      label: newLabel
    });
  };
  const handleValueChange = (index, val) => {
    updateField(index, {
      value: val
    });
  };
  const handleOperationChange = (index, op) => {
    updateField(index, {
      operation: op
    });
  };
  const addCustomInput = () => {
    setCombinedFields(prev => [...prev, {
      label: `Custom Field ${prev.length + 1}`,
      value: '',
      operation: prev.length === 0 ? '' : '+',
      isMapped: false,
      limitEnabled: false,
      maxValue: '',
      format: 'numeric'
    }]);
  };
  const handleDeleteCustomField = index => {
    setCombinedFields(prev => prev.filter((_, i) => i !== index));
  };
  const handleLimitControlToggle = () => {
    const nextVal = !limitControlOn;
    onChangeLimitControlOn?.(nextVal);
    (0,_utils_auditLogger__WEBPACK_IMPORTED_MODULE_2__.logAuditActivity)("Configure Limits", {
      action: "Limit Control Toggle",
      limitControlOn: nextVal,
      message: `Limit Control turned ${nextVal ? "ON" : "OFF"}`
    });
  };
  const handleFieldLimitToggle = (index, field) => {
    const nextVal = !field.limitEnabled;
    updateField(index, {
      limitEnabled: nextVal
    });
    (0,_utils_auditLogger__WEBPACK_IMPORTED_MODULE_2__.logAuditActivity)("Configure Limits", {
      action: "Field Limit Toggle",
      field: field.field_name || field.label,
      limitEnabled: nextVal
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "max-w-sm p-3 bg-white rounded"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "space-y-3"
  }, combinedFields.map((field, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: index,
    className: "flex flex-col gap-1 border-b border-gray-100 pb-2 mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2"
  }, isEditing && !field.isMapped ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: field.label,
    onChange: e => handleLabelChange(index, e.target.value),
    className: "border outline-none focus:outline-none rounded w-[120px] p-2 text-xs"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs font-medium capitalize"
  }, field.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center flex-1 gap-2"
  }, index !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    value: field.operation,
    onChange: e => handleOperationChange(index, e.target.value),
    className: "p-1 text-sm border rounded min-w-12"
  }, OPERATIONS.map(ops => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    key: `op-${index}-${ops}`,
    value: ops
  }, ops))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_currency_input_field__WEBPACK_IMPORTED_MODULE_1__["default"], {
    value: field.value,
    onValueChange: val => handleValueChange(index, val),
    className: `w-full p-2 text-xs outline-none focus:outline-none ${field.isMapped ? 'bg-gray-100' : 'bg-white'} text-gray-700 border rounded`,
    placeholder: `${field.isMapped ? field.label : 'Enter'} value`,
    readOnly: field.isMapped,
    decimalsLimit: 6
  }), isEditing && !field.isMapped && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => handleDeleteCustomField(index),
    className: "px-2 py-1 text-xs text-white bg-red-500 rounded hover:bg-red-600",
    title: "Remove field"
  }, "\u2715"))), isEditing && limitControlOn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pl-4 mt-1 bg-gray-50 p-2 rounded text-xs space-y-2 border border-dashed border-gray-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "flex items-center gap-1.5 cursor-pointer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    checked: field.limitEnabled || false,
    onChange: () => handleFieldLimitToggle(index, field),
    className: "rounded text-blue-500 w-3.5 h-3.5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Enable Limit on ", field.label)), field.limitEnabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex gap-2 mt-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "block text-[10px] text-gray-400 font-medium mb-0.5"
  }, "Max Value"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    value: field.maxValue || '',
    onChange: e => {
      updateField(index, {
        maxValue: e.target.value
      });
      (0,_utils_auditLogger__WEBPACK_IMPORTED_MODULE_2__.logAuditActivity)("Configure Limits", {
        action: "Field Max Value Change",
        field: field.field_name || field.label,
        maxValue: e.target.value
      });
    },
    placeholder: "Limit",
    className: "w-full border p-1 rounded text-xs outline-none"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "block text-[10px] text-gray-400 font-medium mb-0.5"
  }, "Format"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    value: field.format || 'numeric',
    onChange: e => {
      updateField(index, {
        format: e.target.value
      });
      (0,_utils_auditLogger__WEBPACK_IMPORTED_MODULE_2__.logAuditActivity)("Configure Limits", {
        action: "Field Format Change",
        field: field.field_name || field.label,
        format: e.target.value
      });
    },
    className: "w-full border p-1 rounded text-xs outline-none bg-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "numeric"
  }, "Numeric"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "percentage"
  }, "Percentage"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "non-negative"
  }, "Non-negative"))))))), isEditing && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-end mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    onClick: addCustomInput,
    className: "px-3 py-1 text-xs text-white bg-blue-500 rounded hover:bg-blue-600"
  }, "+ Add Input")), isEditing && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pt-3 border-t border-gray-200 mt-4 text-xs space-y-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-semibold text-gray-700"
  }, "Limit Control"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "relative inline-flex items-center cursor-pointer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    checked: limitControlOn,
    onChange: handleLimitControlToggle,
    className: "sr-only peer"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#EE593C]`
  }))), limitControlOn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-[#FFFBFA] p-2.5 rounded-lg border border-[#FEE4E2] space-y-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "flex items-center gap-1.5 cursor-pointer font-medium text-gray-700"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    checked: outputLimitEnabled,
    onChange: e => {
      onChangeOutputLimitEnabled?.(e.target.checked);
      (0,_utils_auditLogger__WEBPACK_IMPORTED_MODULE_2__.logAuditActivity)("Configure Limits", {
        action: "Output Limit Toggle",
        outputLimitEnabled: e.target.checked
      });
    },
    className: "rounded text-blue-500 w-3.5 h-3.5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Enable Limit on Calculation Output")), outputLimitEnabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid grid-cols-2 gap-2 mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "block text-[10px] text-gray-400 font-medium mb-0.5"
  }, "Max Value"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    value: outputMaxValue,
    onChange: e => {
      onChangeOutputMaxValue?.(e.target.value);
      (0,_utils_auditLogger__WEBPACK_IMPORTED_MODULE_2__.logAuditActivity)("Configure Limits", {
        action: "Output Max Value Change",
        outputMaxValue: e.target.value
      });
    },
    placeholder: "Limit",
    className: "w-full border p-1.5 rounded text-xs outline-none"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "block text-[10px] text-gray-400 font-medium mb-0.5"
  }, "Format"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    value: outputFormat,
    onChange: e => {
      onChangeOutputFormat?.(e.target.value);
      (0,_utils_auditLogger__WEBPACK_IMPORTED_MODULE_2__.logAuditActivity)("Configure Limits", {
        action: "Output Format Change",
        outputFormat: e.target.value
      });
    },
    className: "w-full border p-1.5 rounded text-xs outline-none bg-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "numeric"
  }, "Numeric"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "percentage"
  }, "Percentage"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "non-negative"
  }, "Non-negative"))))))));
}

/***/ }),

/***/ "./src/form-elements/azure-file-settings.jsx":
/*!***************************************************!*\
  !*** ./src/form-elements/azure-file-settings.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AzureFileSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/auth */ "./src/utils/auth.js");



function AzureFileSettings({
  detail = {},
  onValueChange = () => {},
  apiUrl
}) {
  const api = axios__WEBPACK_IMPORTED_MODULE_2__["default"].create({
    baseURL: `${apiUrl}/workflows/api/v1`
  });
  // Resolved per request rather than baked into the instance, so a token issued or
  // rotated after this component mounted is still the one that gets sent.
  api.interceptors.request.use(config => {
    config.headers.Authorization = (0,_utils_auth__WEBPACK_IMPORTED_MODULE_1__.authHeader)();
    return config;
  });
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [settings, setSettings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [containers, setContainers] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [folders, setFolders] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);

  // -----------------------
  // Uncontrolled internal state
  // -----------------------
  const [storageSettingId, setStorageSettingId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(detail.storageSettingId || '');
  const [containerName, setContainerName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(detail.containerName || '');
  const [folderName, setFolderName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(detail.folderName || '');

  // -----------------------
  // Fetch: Settings
  // -----------------------
  const fetchSettings = async () => {
    try {
      setLoading(true);
      const {
        data
      } = await api.get('/Settings/get-all?activitySettingType=azure');
      setSettings(data?.results || []);
    } finally {
      setLoading(false);
    }
  };

  // -----------------------
  // Fetch: Containers
  // -----------------------
  const fetchContainers = async id => {
    if (!id) return;
    try {
      setLoading(true);
      const {
        data
      } = await api.get(`/Azure/get-containers/${id}`);
      setContainers(data?.data || []);
    } finally {
      setLoading(false);
    }
  };

  // -----------------------
  // Fetch: Folders
  // -----------------------
  const fetchFolders = async (id, container) => {
    if (!id || !container) return;
    try {
      setLoading(true);
      const {
        data
      } = await api.get(`/Azure/get-folders/${id}/${container}`);
      setFolders(data?.data || []);
    } finally {
      setLoading(false);
    }
  };

  // Load settings on mount
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchSettings();
  }, []);

  // When storage setting changes
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setContainers([]);
    setFolders([]);
    if (storageSettingId) fetchContainers(storageSettingId);
    onValueChange({
      storageSettingId,
      containerName: '',
      folderName: ''
    });
  }, [storageSettingId]);

  // When container changes
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setFolders([]);
    if (storageSettingId && containerName) {
      fetchFolders(storageSettingId, containerName);
    }
    onValueChange({
      storageSettingId,
      containerName,
      folderName: ''
    });
  }, [containerName]);

  // When folder changes
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    onValueChange({
      storageSettingId,
      containerName,
      folderName
    });
  }, [folderName]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "max-w-[500px] py-4 space-y-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-lg font-semibold"
  }, "Azure File Settings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "text-sm"
  }, "Storage Setting"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    className: "w-full p-2 border rounded",
    value: storageSettingId,
    onChange: e => {
      setStorageSettingId(e.target.value);
      setContainerName('');
      setFolderName('');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ""
  }, "Select storage setting"), settings.map(s => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    key: s.id,
    value: s.id
  }, s.name)))), storageSettingId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "text-sm"
  }, "Container"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    className: "w-full p-2 border rounded",
    value: containerName,
    onChange: e => {
      setContainerName(e.target.value);
      setFolderName('');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ""
  }, "Select a container"), containers.map(c => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    key: c.text,
    value: c.value
  }, c.text)))), containerName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "text-sm"
  }, "Folder"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    className: "w-full p-2 border rounded",
    value: folderName,
    onChange: e => setFolderName(e.target.value)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ""
  }, "Select a folder"), folders.map(f => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    key: f.text,
    value: f.value
  }, f.text)))), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-sm text-gray-500"
  }, "Loading..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-3 mt-4 space-y-1 text-sm border rounded bg-gray-50"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Setting: ", storageSettingId), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Container: ", containerName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Folder: ", folderName)));
}

/***/ })

}]);
//# sourceMappingURL=src_form-elements-edit_jsx.app.js.map