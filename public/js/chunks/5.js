(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./resources/js/src/components/Community/Body/Upload/CreateShowcase/index.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/components/Community/Body/Upload/CreateShowcase/index.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../CustomFields/InputField */ "./resources/js/src/components/CustomFields/InputField/index.js");
/* harmony import */ var _CustomFields_TextareaField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../CustomFields/TextareaField */ "./resources/js/src/components/CustomFields/TextareaField/index.js");
/* harmony import */ var _CustomFields_SelectField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../CustomFields/SelectField */ "./resources/js/src/components/CustomFields/SelectField/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Validations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../Validations */ "./resources/js/src/components/Validations/index.js");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function CreateShowcase() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      artsList = _useState2[0],
      setArtList = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedArts = _useState4[0],
      setSelectedArts = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    artChannels: [],
    privacies: []
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      optionsList = _useState6[0],
      setOptionsList = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var apiToken = localStorage.getItem('authenticatedUserToken');

    var getArtsList = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/public/api/community/resources/arts?api_token=".concat(apiToken)).then(function (response) {
                  var list = response.data.list;
                  setArtList(list);
                })["catch"](function (error) {
                  console.log(error.response);
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getArtsList() {
        return _ref.apply(this, arguments);
      };
    }();

    var getSelectionListOptions = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/public/api/community/resources/interface/upload-select-list').then(function (response) {
                  var _response$data = response.data,
                      art_channels = _response$data.art_channels,
                      privacies = _response$data.privacies;
                  setOptionsList({
                    artChannels: art_channels,
                    privacies: privacies
                  });
                })["catch"](function (error) {
                  console.log(error.response);
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function getSelectionListOptions() {
        return _ref2.apply(this, arguments);
      };
    }();

    getSelectionListOptions();
    getArtsList();
  }, []);

  var handleSelectArt = function handleSelectArt(artId) {
    var newSelectedArts = selectedArts;

    if (newSelectedArts.includes(artId)) {
      newSelectedArts = newSelectedArts.filter(function (selectedId) {
        return selectedId !== artId;
      });
    } else {
      newSelectedArts.push(artId);
    }

    setSelectedArts(_toConsumableArray(newSelectedArts));
  };

  var handleClearSelectedArts = function handleClearSelectedArts() {
    var newSelectedArts = [];
    setSelectedArts([].concat(newSelectedArts));
  };

  var initialValues = {
    title: '',
    subheading: '',
    description: '',
    privacy: 1,
    channel: 1
  };

  var handleSubmitForm = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(values) {
      var apiToken, data, key;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              apiToken = localStorage.getItem('authenticatedUserToken'); // Xử lý Data chuẩn bị gửi đi

              data = new FormData();

              for (key in values) {
                data.append(key, values[key]);
              }

              data.append('art_ids_list', selectedArts);
              _context3.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/public/api/community/resources/showcases?api_token=".concat(apiToken), data).then(function (response) {
                console.log(response.data.request);
              })["catch"](function (error) {
                console.log(error.response);
              });

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleSubmitForm(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "create-showcase"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    className: "title"
  }, "T\u1EA1o qu\u1EA7y tr\u01B0ng b\u1EA7y"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "showcase-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: initialValues,
    validationSchema: _Validations__WEBPACK_IMPORTED_MODULE_8__["ShowcaseValidation"],
    onSubmit: handleSubmitForm
  }, function (_ref4) {
    var handleSubmit = _ref4.handleSubmit,
        isSubmitting = _ref4.isSubmitting;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
      className: "form",
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('button-group', {
        hide: selectedArts.length == 0
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
      className: "submit button success",
      type: "submit"
    }, isSubmitting ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
      className: "fas fa-circle-notch fa-spin"
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
      "class": "fas fa-rocket"
    })), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "split"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["FastField"], {
      name: "title",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_4__["default"],
      label: "Ti\xEAu \u0111\u1EC1",
      labelClassName: "label",
      className: "text-input",
      disabled: false,
      placeholder: "Ti\xEAu \u0111\u1EC1" // formErrorClass="form-error textarea-error"

    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["FastField"], {
      name: "subheading",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_4__["default"],
      label: "Ti\xEAu \u0111\u1EC1 ph\u1EE5",
      labelClassName: "label",
      className: "text-input",
      disabled: false,
      placeholder: "Ti\xEAu \u0111\u1EC1 ph\u1EE5" // formErrorClass="form-error textarea-error"

    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["FastField"], {
      name: "description",
      component: _CustomFields_TextareaField__WEBPACK_IMPORTED_MODULE_5__["default"],
      label: "M\xF4 t\u1EA3",
      labelClassName: "label",
      className: "text-input",
      disabled: false,
      placeholder: "Nh\u1EADp m\xF4 t\u1EA3 (kh\xF4ng b\u1EAFt bu\u1ED9c)" // formErrorClass="form-error textarea-error"

    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "split"
    }, optionsList.privacies.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["FastField"], {
      name: "privacy",
      component: _CustomFields_SelectField__WEBPACK_IMPORTED_MODULE_6__["default"],
      label: "Ai c\xF3 th\u1EC3 xem",
      labelClassName: "label",
      className: "text-input",
      disabled: false,
      options: optionsList.privacies // placeholder="Nhập mô tả (không bắt buộc)"
      // formErrorClass="form-error textarea-error"

    }), optionsList.artChannels.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["FastField"], {
      name: "channel",
      component: _CustomFields_SelectField__WEBPACK_IMPORTED_MODULE_6__["default"],
      label: "K\xEAnh \u1EA3nh",
      labelClassName: "label",
      className: "text-input",
      disabled: false,
      options: optionsList.artChannels // placeholder="Nhập mô tả (không bắt buộc)"
      // formErrorClass="form-error textarea-error"

    })));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "arts-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "filter"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    className: "text-input art-search",
    type: "text",
    placeholder: "T\xECm t\xE1c ph\u1EA9m"
  }), selectedArts.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    className: "button danger clear-selected-arts",
    onClick: handleClearSelectedArts
  }, "B\u1ECF ch\u1ECDn")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "list"
  }, artsList.length > 0 ? artsList.map(function (art, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('art', {
        selected: selectedArts.includes(art.id)
      }),
      key: index,
      onClick: function onClick() {
        return handleSelectArt(art.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "overlay"
    }, selectedArts.includes(art.id) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
      className: "fas fa-check-circle"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
      className: "far fa-check-circle"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
      src: "/storage/app/public/community/".concat(art.user_id, "/arts/").concat(art.art)
    }));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "Kh\xF4ng c\xF3 t\xE1c ph\u1EA9m n\xE0o")))));
}

/* harmony default export */ __webpack_exports__["default"] = (CreateShowcase);

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

/***/ }),

/***/ "./resources/js/src/components/Validations/index.js":
/*!**********************************************************!*\
  !*** ./resources/js/src/components/Validations/index.js ***!
  \**********************************************************/
/*! exports provided: SingleArtValidation, ShowcaseValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleArtValidation", function() { return SingleArtValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseValidation", function() { return ShowcaseValidation; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");

var KILOBYTES = 2048;
var FILE_SIZE = KILOBYTES * 1024;
var SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];
var SingleArtValidation = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  title: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(2, 'Tối thiểu hai ký tự').max(100, 'Tối đa 100 ký tự').required('Không được bỏ trống'),
  caption: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(2, 'Tối thiểu hai ký tự').max(300, 'Tối đa 300 ký tự'),
  description: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(2, 'Tối thiểu hai ký tự').max(1500, 'Tối đa 1500 ký tự'),
  dimensional: yup__WEBPACK_IMPORTED_MODULE_0__["number"]().required('Không được bỏ trống'),
  privacy: yup__WEBPACK_IMPORTED_MODULE_0__["number"]().required('Không được bỏ trống'),
  channel: yup__WEBPACK_IMPORTED_MODULE_0__["number"]().required('Không được bỏ trống'),
  art: yup__WEBPACK_IMPORTED_MODULE_0__["mixed"]().required("Không có File").test("fileSize", "Kích thước quá lớn, tối đa 2MB", function (value) {
    return value && value.size <= FILE_SIZE;
  }).test("fileFormat", "Định dạng cho phép : JPG, JPEG, PNG", function (value) {
    return value && SUPPORTED_FORMATS.includes(value.type);
  }),
  tags: yup__WEBPACK_IMPORTED_MODULE_0__["string"]()
});
var ShowcaseValidation = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  title: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(2, 'Tối thiểu hai ký tự').max(100, 'Tối đa 100 ký tự').required('Không được bỏ trống'),
  subheading: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(2, 'Tối thiểu hai ký tự').max(300, 'Tối đa 300 ký tự'),
  description: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(2, 'Tối thiểu hai ký tự').max(1500, 'Tối đa 1500 ký tự'),
  privacy: yup__WEBPACK_IMPORTED_MODULE_0__["number"]().required('Không được bỏ trống'),
  channel: yup__WEBPACK_IMPORTED_MODULE_0__["number"]().required('Không được bỏ trống')
});

/***/ })

}]);