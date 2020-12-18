(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./resources/js/src/components/Community/Body/Upload/CreateShowcase/index.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/components/Community/Body/Upload/CreateShowcase/index.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../CustomFields/InputField */ "./resources/js/src/components/CustomFields/InputField/index.js");
/* harmony import */ var _CustomFields_TextareaField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../CustomFields/TextareaField */ "./resources/js/src/components/CustomFields/TextareaField/index.js");





function CreateShowcase() {
  var initialValues = {
    title: '',
    subheading: '',
    description: '',
    privacy_id: 1,
    channel: 1
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "create-showcase"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "title"
  }, "T\u1EA1o qu\u1EA7y tr\u01B0ng b\u1EA7y"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "showcase-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_0__["Formik"], {
    initialValues: initialValues
  }, function (_ref) {
    var handleSubmit = _ref.handleSubmit;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      className: "form",
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "split"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_0__["FastField"], {
      name: "title",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_2__["default"],
      label: "Ti\xEAu \u0111\u1EC1",
      labelClassName: "label",
      className: "text-input",
      disabled: false,
      placeholder: "Ti\xEAu \u0111\u1EC1"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_0__["FastField"], {
      name: "subheading",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_2__["default"],
      label: "Ti\xEAu \u0111\u1EC1 ph\u1EE5",
      labelClassName: "label",
      className: "text-input",
      disabled: false,
      placeholder: "Ti\xEAu \u0111\u1EC1 ph\u1EE5"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_0__["FastField"], {
      name: "description",
      component: _CustomFields_TextareaField__WEBPACK_IMPORTED_MODULE_3__["default"],
      label: "M\xF4 t\u1EA3",
      labelClassName: "label",
      className: "text-input",
      disabled: false,
      placeholder: "Nh\u1EADp m\xF4 t\u1EA3 (kh\xF4ng b\u1EAFt bu\u1ED9c)",
      formErrorClass: "form-error textarea-error"
    }));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (CreateShowcase);

/***/ }),

/***/ "./resources/js/src/components/CustomFields/TextareaField/index.js":
/*!*************************************************************************!*\
  !*** ./resources/js/src/components/CustomFields/TextareaField/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



TextareaField.propTypes = {
  form: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  field: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  labelClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  formErrorClass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
TextareaField.defaultProps = {
  label: '',
  labelClassName: 'label',
  placeholder: '',
  className: 'text-input',
  disabled: false,
  formErrorClass: 'form-error'
};

function TextareaField(props) {
  var form = props.form,
      field = props.field,
      label = props.label,
      labelClassName = props.labelClassName,
      placeholder = props.placeholder,
      className = props.className,
      disabled = props.disabled,
      formErrorClass = props.formErrorClass;
  var name = field.name;
  var errors = form.errors,
      touched = form.touched;
  var hasError = errors[name] && touched[name];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group mb1"
  }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: labelClassName
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", _extends({
    name: name,
    id: name
  }, field, {
    className: className,
    placeholder: placeholder,
    disabled: disabled
  })), hasError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: formErrorClass
  }, errors[name]));
}

/* harmony default export */ __webpack_exports__["default"] = (TextareaField);

/***/ })

}]);