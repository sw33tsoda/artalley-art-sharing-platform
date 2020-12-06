(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

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




function CreateShowcase() {
  var initialValues = {
    title: ''
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "create-showcase"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_0__["Formik"], {
    initialValues: initialValues
  }, function (_ref) {
    var handleSubmit = _ref.handleSubmit;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      className: "form",
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_0__["FastField"], {
      name: "title",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_2__["default"],
      label: "Ti\xEAu \u0111\u1EC1",
      labelClassName: "label",
      className: "text-input",
      disabled: false,
      placeholder: "Ti\xEAu \u0111\u1EC1"
    }));
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CreateShowcase);

/***/ })

}]);