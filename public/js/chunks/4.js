(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./resources/js/src/components/Community/Body/Upload/UploadSingleArt/index.js":
/*!************************************************************************************!*\
  !*** ./resources/js/src/components/Community/Body/Upload/UploadSingleArt/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../CustomFields/InputField */ "./resources/js/src/components/CustomFields/InputField/index.js");
/* harmony import */ var _CustomFields_FileUploader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../CustomFields/FileUploader */ "./resources/js/src/components/CustomFields/FileUploader/index.js");
/* harmony import */ var _CustomFields_SelectField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../CustomFields/SelectField */ "./resources/js/src/components/CustomFields/SelectField/index.js");
/* harmony import */ var _CustomFields_TextareaField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../CustomFields/TextareaField */ "./resources/js/src/components/CustomFields/TextareaField/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Validations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../Validations */ "./resources/js/src/components/Validations/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_community_announcer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../store/community/announcer */ "./resources/js/src/store/community/announcer.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









 // import { useSelector } from 'react-redux';





function UploadSingleArt() {
  // Danh sách thẻ (tags)
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      tags = _useState2[0],
      setTags = _useState2[1]; // Tags Debounce


  var tagsDebounce = {
    callback: function callback(value) {
      var tagsList = value.split(',').filter(function (tag) {
        return tag !== '';
      });
      setTags(tagsList);
    },
    ms: 250
  }; // Dispatch action

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useDispatch"])(); // Danh sách kênh ảnh

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    artChannels: [],
    dimensions: [],
    privacies: []
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      optionsList = _useState4[0],
      setOptionsList = _useState4[1];

  var initialValues = {
    title: '',
    caption: '',
    description: '',
    tags: '',
    dimensional: 1,
    privacy: 1,
    channel: 1,
    art: undefined
  };
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var getSelectionListOptions = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get('/public/api/community/resources/interface/upload-select-list').then(function (response) {
                  var _response$data = response.data,
                      art_channels = _response$data.art_channels,
                      privacies = _response$data.privacies,
                      dimensions = _response$data.dimensions; // console.log(response);

                  setOptionsList({
                    artChannels: art_channels,
                    privacies: privacies,
                    dimensions: dimensions
                  });
                })["catch"](function (error) {
                  var list = error.response.data.list; // console.log(error.response);
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getSelectionListOptions() {
        return _ref.apply(this, arguments);
      };
    }();

    getSelectionListOptions();
  }, []);

  var handleSubmitForm = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(values) {
      var apiToken, data, key;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              apiToken = localStorage.getItem('authenticatedUserToken'); // Xử lý Data chuẩn bị gửi đi

              data = new FormData();

              for (key in values) {
                data.append(key, values[key]);
              } // const newTags = values.tags.split(',').filter(tag => tag !== '');
              // const newTags = tags.


              data.set('tags', tags.join(',')); // Gọi Api

              _context2.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("/public/api/community/resources/arts?api_token=".concat(apiToken), data).then(function (response) {
                var message = response.data.message;
                dispatch(Object(_store_community_announcer__WEBPACK_IMPORTED_MODULE_12__["setAnnouncementMessage"])({
                  message: message,
                  type: 'success'
                }));
              })["catch"](function (error) {
                var message = error.response.data.message;
                dispatch(Object(_store_community_announcer__WEBPACK_IMPORTED_MODULE_12__["setAnnouncementMessage"])({
                  message: message,
                  type: 'failed'
                }));
              });

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleSubmitForm(_x) {
      return _ref2.apply(this, arguments);
    };
  }(); // File Uplaod


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      file = _useState6[0],
      setFile = _useState6[1];

  var handleSetFile = function handleSetFile(selectedFile) {
    var theFile = selectedFile;
    setFile(theFile);
  }; // File Preview


  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState8 = _slicedToArray(_useState7, 2),
      preview = _useState8[0],
      setPreview = _useState8[1];

  if (!lodash__WEBPACK_IMPORTED_MODULE_7___default.a.isEmpty(file.name)) {
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function () {
      setPreview(reader.result);
    };
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "upload-single-art"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "title"
  }, "T\xE1c ph\u1EA9m \u0111\u01A1n"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "upload-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    initialValues: initialValues,
    onSubmit: handleSubmitForm,
    validationSchema: _Validations__WEBPACK_IMPORTED_MODULE_10__["SingleArtValidation"]
  }, function (_ref3) {
    var handleSubmit = _ref3.handleSubmit,
        errors = _ref3.errors,
        resetForm = _ref3.resetForm,
        isSubmitting = _ref3.isSubmitting;
    return isSubmitting ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
      className: "fas fa-circle-notch fa-spin"
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
      className: "form",
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('button-group', {
        hide: lodash__WEBPACK_IMPORTED_MODULE_7___default.a.isEmpty(file.name) || !lodash__WEBPACK_IMPORTED_MODULE_7___default.a.isEmpty(errors['art'])
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      className: "submit button success",
      type: "submit"
    }, isSubmitting ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
      className: "fas fa-circle-notch fa-spin"
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
      className: "fas fa-paper-plane"
    })), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      className: "reset button light",
      onClick: resetForm
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
      className: "fas fa-undo"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('split', {
        hide: lodash__WEBPACK_IMPORTED_MODULE_7___default.a.isEmpty(file.name) || !lodash__WEBPACK_IMPORTED_MODULE_7___default.a.isEmpty(errors['art'])
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["FastField"], {
      name: "title",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_3__["default"],
      label: "Ti\xEAu \u0111\u1EC1",
      labelClassName: "label",
      className: "text-input",
      disabled: false,
      placeholder: "Nh\u1EADp ti\xEAu \u0111\u1EC1"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["FastField"], {
      name: "caption",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_3__["default"],
      label: "Ch\xFA th\xEDch",
      labelClassName: "label",
      className: "text-input",
      disabled: false,
      placeholder: "Nh\u1EADp ch\xFA th\xEDch"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "upload-image"
    }, !lodash__WEBPACK_IMPORTED_MODULE_7___default.a.isEmpty(file.name) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, !lodash__WEBPACK_IMPORTED_MODULE_7___default.a.isEmpty(errors['art']) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "error"
    }, errors['art']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "icon"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      htmlFor: "art"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
      className: "fas fa-upload"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "Ch\u1ECDn File kh\xE1c")))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      className: "preview-image",
      src: preview
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "icon"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      htmlFor: "art"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
      className: "fas fa-upload"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "Nh\u1EA5n v\xE0o \u0111\xE2y")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('split', {
        hide: lodash__WEBPACK_IMPORTED_MODULE_7___default.a.isEmpty(file.name) || !lodash__WEBPACK_IMPORTED_MODULE_7___default.a.isEmpty(errors['art'])
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "description"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["FastField"], {
      name: "description",
      component: _CustomFields_TextareaField__WEBPACK_IMPORTED_MODULE_6__["default"],
      label: "M\xF4 t\u1EA3",
      labelClassName: "label",
      className: "text-input",
      disabled: false,
      placeholder: "Nh\u1EADp m\xF4 t\u1EA3 (kh\xF4ng b\u1EAFt bu\u1ED9c)",
      formErrorClass: "form-error textarea-error"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "privacy-and-dimensional"
    }, optionsList.dimensions.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["FastField"], {
      name: "dimensional",
      component: _CustomFields_SelectField__WEBPACK_IMPORTED_MODULE_5__["default"],
      label: "Kh\xF4ng gian",
      labelClassName: "label",
      className: "text-input",
      disabled: false,
      options: optionsList.dimensions
    }), optionsList.artChannels.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["FastField"], {
      name: "channel",
      component: _CustomFields_SelectField__WEBPACK_IMPORTED_MODULE_5__["default"],
      label: "K\xEAnh \u1EA3nh",
      labelClassName: "label",
      className: "text-input",
      disabled: false,
      options: optionsList.artChannels
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('split', {
        hide: lodash__WEBPACK_IMPORTED_MODULE_7___default.a.isEmpty(file.name) || !lodash__WEBPACK_IMPORTED_MODULE_7___default.a.isEmpty(errors['art'])
      })
    }, optionsList.privacies.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["FastField"], {
      name: "privacy",
      component: _CustomFields_SelectField__WEBPACK_IMPORTED_MODULE_5__["default"],
      label: "Ai c\xF3 th\u1EC3 xem?",
      labelClassName: "label",
      className: "text-input",
      disabled: false,
      options: optionsList.privacies
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["FastField"], {
      name: "tags",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_3__["default"],
      label: "Th\u1EBB",
      labelClassName: "label",
      className: "text-input",
      disabled: false,
      placeholder: "Nh\u1EADp th\u1EBB",
      debounce: tagsDebounce
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("legend", {
      className: "tags"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("small", {
      className: "caption"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Ch\xFA th\xEDch"), " S\u1EED d\u1EE5ng th\u1EBB \u0111\u1EC3 t\u0103ng s\u1EF1 t\u01B0\u01A1ng t\xE1c gi\u1EEFa t\xE1c ph\u1EA9m v\u1EDBi ng\u01B0\u1EDDi xem"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("small", {
      className: "tags-list"
    }, tags[0] !== '' ? tags.map(function (tag, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "tag",
        key: index
      }, tag);
    }) : 'Chưa có thẻ nào.')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["FastField"], {
      name: "file",
      component: _CustomFields_FileUploader__WEBPACK_IMPORTED_MODULE_4__["default"],
      fieldName: "art",
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
  setFile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  hidden: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  fieldName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
FileUploader.defaultProps = {
  label: '',
  labelClassName: 'label',
  className: 'file-input',
  disabled: false,
  setFile: null,
  hidden: false,
  fieldName: ''
};

function FileUploader(props) {
  var form = props.form,
      hidden = props.hidden,
      field = props.field,
      label = props.label,
      labelClassName = props.labelClassName,
      className = props.className,
      disabled = props.disabled,
      setFile = props.setFile,
      fieldName = props.fieldName; // const { name } = field;

  var handleSetFile = function handleSetFile(event) {
    var file = event.target.files[0];
    setFile(file);
    form.setFieldValue(fieldName, file);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: labelClassName
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "upload-button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: fieldName
  }, "T\u1EA2I L\xCAN")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
    name: fieldName,
    id: fieldName
  }, field, {
    className: className,
    disabled: disabled,
    type: "file",
    onChange: handleSetFile,
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
  caption: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(2, 'Tối thiểu hai ký tự').max(120, 'Tối đa 120 ký tự'),
  description: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(2, 'Tối thiểu hai ký tự').max(1000, 'Tối đa 1000 ký tự'),
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