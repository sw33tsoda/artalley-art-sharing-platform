(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./resources/js/src/components/Community/Body/Upload/UploadSingleArt/index.js":
/*!************************************************************************************!*\
  !*** ./resources/js/src/components/Community/Body/Upload/UploadSingleArt/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../CustomFields/InputField */ "./resources/js/src/components/CustomFields/InputField/index.js");
/* harmony import */ var _CustomFields_FileUploader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../CustomFields/FileUploader */ "./resources/js/src/components/CustomFields/FileUploader/index.js");
/* harmony import */ var _CustomFields_SelectField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../CustomFields/SelectField */ "./resources/js/src/components/CustomFields/SelectField/index.js");
/* harmony import */ var _CustomFields_TextareaField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../CustomFields/TextareaField */ "./resources/js/src/components/CustomFields/TextareaField/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var dimensionalOptions = [{
  label: '2D',
  value: '2d'
}, {
  label: '2.5D',
  value: '2.5d'
}, {
  label: '3D',
  value: '3d'
}];
var privacyOptions = [{
  label: 'Mọi người',
  value: 'public'
}, {
  label: 'Chỉ mình tôi',
  value: 'private'
}];

function UploadSingleArt() {
  var initialValues = {
    title: '',
    caption: '',
    description: '',
    dimensional: '',
    privacy: '',
    channel: '',
    tags: '',
    art: ''
  }; // File Uplaod

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      file = _useState2[0],
      setFile = _useState2[1];

  var handleSetFile = function handleSetFile(event) {
    var chosenFile = event.target.files[0];
    setFile(chosenFile);
  }; // File Preview


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      preview = _useState4[0],
      setPreview = _useState4[1];

  if (!lodash__WEBPACK_IMPORTED_MODULE_6___default.a.isEmpty(file.name)) {
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function () {
      setPreview(reader.result);
    };
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "upload-single-art"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "title"
  }, "T\xE1c ph\u1EA9m \u0111\u01A1n"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "upload-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_0__["Formik"], {
    initialValues: initialValues
  }, function (_ref) {
    var handleSubmit = _ref.handleSubmit;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      className: "form",
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "split",
      style: {
        display: !lodash__WEBPACK_IMPORTED_MODULE_6___default.a.isEmpty(file.name) ? 'grid' : 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_0__["FastField"], {
      name: "title",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_2__["default"],
      label: "Ti\xEAu \u0111\u1EC1",
      labelClassName: "label",
      className: "text-input",
      disabled: false,
      placeholder: "Nh\u1EADp ti\xEAu \u0111\u1EC1"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_0__["FastField"], {
      name: "caption",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_2__["default"],
      label: "Ch\xFA th\xEDch",
      labelClassName: "label",
      className: "text-input",
      disabled: false,
      placeholder: "Nh\u1EADp ch\xFA th\xEDch"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "upload-image"
    }, !lodash__WEBPACK_IMPORTED_MODULE_6___default.a.isEmpty(file.name) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: "preview-image",
      src: preview
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "icon"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: "art"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "fas fa-upload"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Nh\u1EA5n v\xE0o \u0111\xE2y")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "split",
      style: {
        display: !lodash__WEBPACK_IMPORTED_MODULE_6___default.a.isEmpty(file.name) ? 'grid' : 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "description"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_0__["FastField"], {
      name: "description",
      component: _CustomFields_TextareaField__WEBPACK_IMPORTED_MODULE_5__["default"],
      label: "M\xF4 t\u1EA3",
      labelClassName: "label",
      className: "text-input",
      disabled: false,
      placeholder: "Nh\u1EADp m\xF4 t\u1EA3 (kh\xF4ng b\u1EAFt bu\u1ED9c)"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "privacy-and-dimensional"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_0__["FastField"], {
      name: "dimensional",
      component: _CustomFields_SelectField__WEBPACK_IMPORTED_MODULE_4__["default"],
      label: "Kh\xF4ng gian",
      labelClassName: "label",
      className: "text-input",
      disabled: false,
      options: dimensionalOptions
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_0__["FastField"], {
      name: "privacy",
      component: _CustomFields_SelectField__WEBPACK_IMPORTED_MODULE_4__["default"],
      label: "Ai c\xF3 th\u1EC3 xem?",
      labelClassName: "label",
      className: "text-input",
      disabled: false,
      options: privacyOptions
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "split",
      style: {
        display: !lodash__WEBPACK_IMPORTED_MODULE_6___default.a.isEmpty(file.name) ? 'grid' : 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_0__["FastField"], {
      name: "channel",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_2__["default"],
      label: "Lo\u1EA1i \u1EA3nh",
      labelClassName: "label",
      className: "text-input",
      disabled: false,
      placeholder: "Nh\u1EADp lo\u1EA1i \u1EA3nh"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_0__["FastField"], {
      name: "tags",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_2__["default"],
      label: "Th\u1EBB",
      labelClassName: "label",
      className: "text-input",
      disabled: false,
      placeholder: "Nh\u1EADp th\u1EBB"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_0__["FastField"], {
      name: "art",
      component: _CustomFields_FileUploader__WEBPACK_IMPORTED_MODULE_3__["default"],
      type: "file",
      disabled: false,
      setFile: handleSetFile,
      hidden: true
    }));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (UploadSingleArt);

/***/ }),

/***/ "./resources/js/src/components/CustomFields/FileUploader/index.js":
/*!************************************************************************!*\
  !*** ./resources/js/src/components/CustomFields/FileUploader/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



FileUploader.propTypes = {
  form: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  field: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  labelClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  setFile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  hidden: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
FileUploader.defaultProps = {
  label: '',
  labelClassName: 'label',
  className: 'file-input',
  disabled: false,
  type: 'file',
  setFile: null,
  hidden: false
};

function FileUploader(props) {
  var form = props.form,
      hidden = props.hidden,
      field = props.field,
      label = props.label,
      labelClassName = props.labelClassName,
      className = props.className,
      disabled = props.disabled,
      type = props.type,
      setFile = props.setFile;
  var name = field.name;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: labelClassName
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "upload-button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: name
  }, "T\u1EA2I L\xCAN")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
    name: name,
    id: name
  }, field, {
    className: className,
    disabled: disabled,
    type: type,
    onChange: setFile,
    hidden: hidden
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (FileUploader);

/***/ }),

/***/ "./resources/js/src/components/CustomFields/SelectField/index.js":
/*!***********************************************************************!*\
  !*** ./resources/js/src/components/CustomFields/SelectField/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



SelectField.propTypes = {
  form: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  field: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  labelClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  options: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
SelectField.defaultProps = {
  label: '',
  labelClassName: 'label',
  placeholder: '',
  className: 'select-input',
  disabled: false,
  options: [],
  defaultValue: 'user'
};

function SelectField(props) {
  var form = props.form,
      field = props.field,
      label = props.label,
      labelClassName = props.labelClassName,
      placeholder = props.placeholder,
      className = props.className,
      disabled = props.disabled,
      type = props.type,
      options = props.options;
  var name = field.name; // const {errors,touched} = form;
  // const hasError = errors[name] && touched[name];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group mb1"
  }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: labelClassName
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", _extends({
    name: name,
    id: name
  }, field, {
    className: className,
    type: type,
    placeholder: placeholder,
    disabled: disabled
  }), options.map(function (option, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: index,
      value: option.value
    }, option.label);
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SelectField);

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
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
TextareaField.defaultProps = {
  label: '',
  labelClassName: 'label',
  placeholder: '',
  className: 'text-input',
  disabled: false
};

function TextareaField(props) {
  var form = props.form,
      field = props.field,
      label = props.label,
      labelClassName = props.labelClassName,
      placeholder = props.placeholder,
      className = props.className,
      disabled = props.disabled,
      rows = props.rows,
      cols = props.cols;
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
    className: "form-error"
  }, errors[name]));
}

/* harmony default export */ __webpack_exports__["default"] = (TextareaField);

/***/ })

}]);