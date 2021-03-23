(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./resources/js/src/components/Admin/Announcer/index.js":
/*!**************************************************************!*\
  !*** ./resources/js/src/components/Admin/Announcer/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_admin_announcer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/admin/announcer */ "./resources/js/src/store/admin/announcer.js");




function Announcer() {
  var announcer = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.admin_announcer;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  if (announcer.message) {
    setTimeout(function () {
      var action = Object(_store_admin_announcer__WEBPACK_IMPORTED_MODULE_2__["removeAnnouncerMessage"])();
      dispatch(action);
    }, 5000);
  }

  return announcer.message && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "announcement"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "message"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, announcer.message)));
}

/* harmony default export */ __webpack_exports__["default"] = (Announcer);

/***/ }),

/***/ "./resources/js/src/components/Admin/ConfirmationBox/index.js":
/*!********************************************************************!*\
  !*** ./resources/js/src/components/Admin/ConfirmationBox/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_admin_confirmation_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/admin/confirmation_box */ "./resources/js/src/store/admin/confirmation_box.js");





function ConfirmationBox() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.admin_confirmation_box;
  }),
      title = _useSelector.title,
      description = _useSelector.description,
      callback = _useSelector.callback;

  var handleSubmit = function handleSubmit() {
    callback();
    dispatch(Object(_store_admin_confirmation_box__WEBPACK_IMPORTED_MODULE_3__["closeConfirmationBox"])());
  };

  var close = function close() {
    dispatch(Object(_store_admin_confirmation_box__WEBPACK_IMPORTED_MODULE_3__["closeConfirmationBox"])());
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "confirmation-box-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "confirmation-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "title"
  }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "description"
  }, description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "button",
    onClick: close
  }, "H\u1EE7y"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "button",
    onClick: handleSubmit
  }, "Ch\u1EA5p nh\u1EADn"))));
}

/* harmony default export */ __webpack_exports__["default"] = (ConfirmationBox);

/***/ }),

/***/ "./resources/js/src/components/Admin/ControlSidebar/index.js":
/*!*******************************************************************!*\
  !*** ./resources/js/src/components/Admin/ControlSidebar/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);




function ControlSidebar(_ref) {
  var sideBarToggle = _ref.sideBarToggle,
      setSideBarToggle = _ref.setSideBarToggle;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('control-sidebar', {
      sidebar_hidden: !sideBarToggle
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "QU\u1EA2N TR\u1ECA")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sidebar-toggle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "toggle-button",
    onClick: setSideBarToggle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-caret-square-left"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "resources"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/public/admin/users/list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-users"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "NG\u01AF\u1EDCI D\xD9NG")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-image"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "T\xC1C PH\u1EA8M")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-images"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "QU\xC0Y TR\u01AFNG B\xC0Y")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-comments"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "B\xCCNH LU\u1EACN")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-clone"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "B\xC0I VI\u1EBET")))))));
}

/* harmony default export */ __webpack_exports__["default"] = (ControlSidebar);

/***/ }),

/***/ "./resources/js/src/components/Admin/Dashboard/Content/Resources/Users/List/AddEditForm/index.js":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/components/Admin/Dashboard/Content/Resources/Users/List/AddEditForm/index.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../../../CustomFields/InputField */ "./resources/js/src/components/CustomFields/InputField/index.js");
/* harmony import */ var _CustomFields_TextareaField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../../../CustomFields/TextareaField */ "./resources/js/src/components/CustomFields/TextareaField/index.js");
/* harmony import */ var _CustomFields_SelectField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../../../../CustomFields/SelectField */ "./resources/js/src/components/CustomFields/SelectField/index.js");
/* harmony import */ var _CustomFields_FileUploader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../../../CustomFields/FileUploader */ "./resources/js/src/components/CustomFields/FileUploader/index.js");
/* harmony import */ var _Validations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../../../../Validations */ "./resources/js/src/components/Validations/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_admin_announcer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../../store/admin/announcer */ "./resources/js/src/store/admin/announcer.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _LoadingSpinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../LoadingSpinner */ "./resources/js/src/components/Admin/LoadingSpinner/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














AddEditForm.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
  user: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object
};
AddEditForm.defaultProps = {
  type: 'add',
  user: {}
};

function AddEditForm(_ref) {
  var type = _ref.type;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      profilePicturePreview = _useState2[0],
      setProfilePicturePreview = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      bannerPreview = _useState4[0],
      setBannerPreview = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isLoading = _useState6[0],
      setIsLoading = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    facebook: '',
    twitter: '',
    bio: '',
    role: 'user',
    password: '',
    password_confirmation: '',
    profile_picture: null,
    banner: null
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      initialValues = _useState8[0],
      setInitialValues = _useState8[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])();

  var _useParams = Object(react_router__WEBPACK_IMPORTED_MODULE_12__["useParams"])(),
      id = _useParams.id;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setIsLoading(true);

    if (type == 'edit') {
      _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("/public/api/admin/resources/users/".concat(id, "?api_token=").concat(localStorage.getItem('authenticatedUserToken'))).then(function (response) {
                  var temp = {};

                  for (var key in initialValues) {
                    if (!['profile_picture', 'banner'].includes(key)) temp[key] = response.data.user_info[key] == null ? '' : response.data.user_info[key];
                  }

                  setInitialValues(_objectSpread({}, temp));
                  if (response.data.user_info.profile_picture !== null) setProfilePicturePreview('/storage/app/public/profilePictures/' + response.data.user_info.profile_picture);else setProfilePicturePreview('');
                  if (response.data.user_info.banner !== null) setBannerPreview('/storage/app/public/banners/' + response.data.user_info.banner);else setBannerPreview('');
                  setIsLoading(false);
                })["catch"](function (error) {
                  console.log(error.response);
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    } else {
      setBannerPreview('');
      setProfilePicturePreview('');
      setIsLoading(false);
    }
  }, [id]);

  var loadPreview = function loadPreview(file, type) {
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      if (type == 'profile_picture') setProfilePicturePreview(reader.result);else setBannerPreview(reader.result);
    };
  };

  var handleSetProfilePictureFile = function handleSetProfilePictureFile(selectedFile) {
    var file = selectedFile;
    loadPreview(file, 'profile_picture');
  };

  var handleSetBannerFile = function handleSetBannerFile(selectedFile) {
    var file = selectedFile;
    loadPreview(file, 'banner');
  };

  var handleOnSubmitForm = function handleOnSubmitForm(values, _ref3) {
    var resetForm = _ref3.resetForm,
        setSubmitting = _ref3.setSubmitting;
    var data = new FormData();

    for (var key in values) {
      data.append(key, values[key]);
    }

    setTimeout(function () {
      _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(type == 'edit')) {
                  _context2.next = 5;
                  break;
                }

                data.append('_method', 'PATCH');
                _context2.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("/public/api/admin/resources/users/".concat(id, "?api_token=").concat(localStorage.getItem('authenticatedUserToken')), data);

              case 4:
                return _context2.abrupt("return", _context2.sent);

              case 5:
                _context2.next = 7;
                return axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("/public/api/admin/resources/users?api_token=".concat(localStorage.getItem('authenticatedUserToken')), data);

              case 7:
                return _context2.abrupt("return", _context2.sent);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))().then(function (response) {
        var message = response.data.message; // console.log(response);

        dispatch(Object(_store_admin_announcer__WEBPACK_IMPORTED_MODULE_10__["setAnnouncerMessage"])(message));

        if (type !== 'edit') {
          resetForm();
        }

        setSubmitting(false);
      })["catch"](function (error) {
        var message = error.response.data.message;
        dispatch(Object(_store_admin_announcer__WEBPACK_IMPORTED_MODULE_10__["setAnnouncerMessage"])(message));
      });
    }, 1000);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LoadingSpinner__WEBPACK_IMPORTED_MODULE_13__["default"], {
    isLoading: isLoading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "add-edit-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["Formik"], {
    onSubmit: handleOnSubmitForm,
    initialValues: type == 'add' ? {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      facebook: '',
      twitter: '',
      bio: '',
      role: 'user',
      password: '',
      password_confirmation: '',
      profile_picture: null,
      banner: null
    } : initialValues,
    enableReinitialize: true,
    validationSchema: type == 'edit' ? _Validations__WEBPACK_IMPORTED_MODULE_6__["UserProfileValidation"] : _Validations__WEBPACK_IMPORTED_MODULE_6__["RegisterValidationSchema"]
  }, function (_ref5) {
    var handleSubmit = _ref5.handleSubmit,
        errors = _ref5.errors,
        isSubmitting = _ref5.isSubmitting;
    // console.log(isSubmitting);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      onSubmit: handleSubmit,
      className: "admin-form"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "grid-box"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["FastField"], {
      name: "firstname",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_2__["default"],
      label: "T\xEAn",
      className: "text-input",
      placeholder: "Nh\u1EADp t\xEAn",
      disabled: isSubmitting
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["FastField"], {
      name: "lastname",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_2__["default"],
      label: "H\u1ECD",
      className: "text-input",
      placeholder: "Nh\u1EADp h\u1ECD",
      disabled: isSubmitting
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["FastField"], {
      name: "username",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_2__["default"],
      label: "T\xEAn ng\u01B0\u1EDDi d\xF9ng",
      className: "text-input",
      placeholder: "Nh\u1EADp t\xEAn ng\u01B0\u1EDDi d\xF9ng",
      disabled: isSubmitting
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["FastField"], {
      name: "email",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_2__["default"],
      label: "\u0110\u1ECBa ch\u1EC9 Email",
      className: "text-input",
      placeholder: "Nh\u1EADp \u0111\u1ECBa ch\u1EC9 Email (Ex: something@gmail.com)",
      disabled: isSubmitting
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "grid-box"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["FastField"], {
      name: "password",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_2__["default"],
      label: "M\u1EADt kh\u1EA9u",
      className: "text-input",
      placeholder: "Nh\u1EADp m\u1EADt kh\u1EA9u",
      disabled: isSubmitting
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["FastField"], {
      name: "password_confirmation",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_2__["default"],
      label: "Nh\u1EADp l\u1EA1i m\u1EADt kh\u1EA9u",
      className: "text-input",
      placeholder: "nh\u1EADp l\u1EA1i m\u1EADt kh\u1EA9u",
      disabled: isSubmitting
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "grid-box"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["FastField"], {
      name: "facebook",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_2__["default"],
      label: "Facebook",
      className: "text-input",
      placeholder: "Nh\u1EADp Facebook",
      disabled: isSubmitting
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["FastField"], {
      name: "twitter",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_2__["default"],
      label: "Twitter",
      className: "text-input",
      placeholder: "Nh\u1EADp Twitter",
      disabled: isSubmitting
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["FastField"], {
      name: "bio",
      component: _CustomFields_TextareaField__WEBPACK_IMPORTED_MODULE_3__["default"],
      label: "Ti\u1EC3u s\u1EED",
      className: "text-input",
      placeholder: "Nh\u1EADp ti\u1EC3u s\u1EED",
      disabled: isSubmitting
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["FastField"], {
      name: "role",
      component: _CustomFields_SelectField__WEBPACK_IMPORTED_MODULE_4__["default"],
      label: "Vai tr\xF2",
      className: "text-input",
      options: [{
        value: 'user',
        label: 'Thành viên'
      }, {
        value: 'admin',
        label: 'Quản trị viên'
      }],
      disabled: isSubmitting
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "grid-box pics"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "label"
    }, "\u1EA2nh \u0111\u1EA1i di\u1EC7n"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "profile-piture preview"
    }, profilePicturePreview == '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "add-pic",
      htmlFor: "profile_picture"
    }, "T\u1EA3i l\xEAn") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: profilePicturePreview
    }), profilePicturePreview !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "overlay"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: "profile_picture"
    }, "Thay \u0111\u1ED5i"))), errors['profile_picture'] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
      className: "form-error"
    }, errors['profile_picture'])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "label"
    }, "\u1EA2nh b\xECa"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "banner-picture preview"
    }, bannerPreview == '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "add-pic",
      htmlFor: "banner"
    }, "T\u1EA3i l\xEAn") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: bannerPreview
    }), bannerPreview !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "overlay"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: "banner"
    }, "Thay \u0111\u1ED5i"))), errors['banner'] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
      className: "form-error"
    }, errors['banner']))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["FastField"], {
      name: "profile_picture_name",
      component: _CustomFields_FileUploader__WEBPACK_IMPORTED_MODULE_5__["default"] // label='Nhập ảnh'
      ,
      fieldName: "profile_picture",
      disabled: isSubmitting,
      setFile: handleSetProfilePictureFile,
      hidden: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["FastField"], {
      name: "banner_name",
      component: _CustomFields_FileUploader__WEBPACK_IMPORTED_MODULE_5__["default"] // label='Nhập ảnh'
      ,
      fieldName: "banner",
      disabled: isSubmitting,
      setFile: handleSetBannerFile,
      hidden: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "button button-crimson submit",
      type: "submit",
      disabled: isSubmitting
    }, isSubmitting ? 'Đang tải...' : type == 'edit' ? 'Sửa' : 'Thêm'));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (AddEditForm);

/***/ }),

/***/ "./resources/js/src/components/Admin/Dashboard/Content/Resources/Users/List/FullUserInfo/index.js":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/components/Admin/Dashboard/Content/Resources/Users/List/FullUserInfo/index.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _LoadingSpinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../LoadingSpinner */ "./resources/js/src/components/Admin/LoadingSpinner/index.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-moment */ "./node_modules/react-moment/dist/index.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function FullUserInfo() {
  var _useParams = Object(react_router__WEBPACK_IMPORTED_MODULE_3__["useParams"])(),
      id = _useParams.id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isLoading = _useState4[0],
      setIsLoading = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setIsLoading(true);

    _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/public/api/admin/resources/users/".concat(id, "?api_token=").concat(localStorage.getItem('authenticatedUserToken'))).then(function (response) {
                var user_info = response.data.user_info;
                setUser(_objectSpread({}, user_info));
                setIsLoading(false);
              })["catch"](function (error) {
                console.log(error.response);
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, [id]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "full-user-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LoadingSpinner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isLoading: isLoading
  }, !Object(jquery__WEBPACK_IMPORTED_MODULE_8__["isEmptyObject"])(user) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "pics"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('profile-picture', {
      no_pic: user.profile_picture == null
    })
  }, user.profile_picture !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/storage/app/public/profilePictures/".concat(user.profile_picture)
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "text"
  }, "Kh\xF4ng c\xF3 \u1EA3nh")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('banner', {
      no_pic: user.banner == null
    })
  }, user.banner !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/storage/app/public/banners/".concat(user.banner)
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "text"
  }, "Kh\xF4ng c\xF3 \u1EA3nh"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "outer-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "inner-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "field"
  }, "T\xEAn"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "value"
  }, user.firstname)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "inner-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "field"
  }, "H\u1ECD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "value"
  }, user.lastname))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "outer-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "inner-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "field"
  }, "T\xEAn ng\u01B0\u1EDDi d\xF9ng"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "value"
  }, user.username)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "inner-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "field"
  }, "\u0110\u1ECBa ch\u1EC9 Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "value"
  }, user.email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "inner-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "field"
  }, "Vai tr\xF2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "value"
  }, user.role == 'admin' ? 'Quản trị viên' : 'Thành viên'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "outer-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "inner-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "field"
  }, "Token"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "value"
  }, user.api_token)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "inner-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "field"
  }, "Ti\u1EC3u s\u1EED"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "value"
  }, user.bio))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "outer-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "inner-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "field"
  }, "Facebook"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "value"
  }, user.facebook)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "inner-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "field"
  }, "Twitter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "value"
  }, user.twitter))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "outer-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "inner-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "field"
  }, "Ng\xE0y tham gia"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_6___default.a, {
    format: "H:m:ssA DD/MM/yyyy"
  }, user.created_at))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "inner-group last"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "field"
  }, "Ng\xE0y s\u1EEDa \u0111\u1ED5i"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_6___default.a, {
    format: "H:m:ssA DD/MM/yyyy"
  }, user.updated_at))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "stats"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "grid-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "main-stats"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "T\xE1c ph\u1EA9m"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, user.stats.arts.total)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "extra-stats"
  }, user.stats.arts.by_channels.map(function (channel, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "wrapper",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "name"
    }, channel.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "number"
    }, channel.count));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "extra-stats"
  }, user.stats.arts.by_dimensions.map(function (dimension, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "wrapper",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "name"
    }, dimension.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "number"
    }, dimension.count));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "grid-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "main-stats"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Qu\xE0y tr\u01B0ng b\xE0y"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, user.stats.showcases))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "grid-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "main-stats"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "B\xECnh lu\u1EADn"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, user.stats.comments)))))));
}

/* harmony default export */ __webpack_exports__["default"] = (FullUserInfo);

/***/ }),

/***/ "./resources/js/src/components/Admin/Dashboard/Content/Resources/Users/List/index.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/components/Admin/Dashboard/Content/Resources/Users/List/index.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _FullUserInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FullUserInfo */ "./resources/js/src/components/Admin/Dashboard/Content/Resources/Users/List/FullUserInfo/index.js");
/* harmony import */ var _LoadingSpinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../LoadingSpinner */ "./resources/js/src/components/Admin/LoadingSpinner/index.js");
/* harmony import */ var _AddEditForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AddEditForm */ "./resources/js/src/components/Admin/Dashboard/Content/Resources/Users/List/AddEditForm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_admin_announcer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../store/admin/announcer */ "./resources/js/src/store/admin/announcer.js");
/* harmony import */ var _store_admin_confirmation_box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../store/admin/confirmation_box */ "./resources/js/src/store/admin/confirmation_box.js");
/* harmony import */ var _store_admin_users__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../store/admin/users */ "./resources/js/src/store/admin/users.js");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













function List() {
  // url hiện tại
  var _useRouteMatch = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useRouteMatch"])(),
      url = _useRouteMatch.url; // input ref


  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(); // input debouncing

  var debounce = null; // dispatch

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])(); // Toggle tìm kiếm 

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      searchToggle = _useState2[0],
      setSearchToggle = _useState2[1]; // filter danh sách


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    date: 'desc',
    role: ''
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      filter = _useState4[0],
      setFilter = _useState4[1]; // trigger refresh list


  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.admin_users;
  }),
      listRefreshTimes = _useSelector.listRefreshTimes;

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      _useState6 = _slicedToArray(_useState5, 2),
      currentPage = _useState6[0],
      setCurrentPage = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState8 = _slicedToArray(_useState7, 2),
      maxPage = _useState8[0],
      setMaxPage = _useState8[1]; // dữ liệu danh sách


  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState10 = _slicedToArray(_useState9, 2),
      list = _useState10[0],
      setList = _useState10[1]; // loading


  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isLoading = _useState12[0],
      setIsLoading = _useState12[1]; // keywords tìm kiếm


  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState14 = _slicedToArray(_useState13, 2),
      searchInputValue = _useState14[0],
      setSearchInputValue = _useState14[1]; // người dùng được chọn


  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState16 = _slicedToArray(_useState15, 2),
      selectedUser = _useState16[0],
      setSelectedUser = _useState16[1]; // xử lý cập nhật state tìm kiếm


  var handleSetInputValue = function handleSetInputValue(_ref) {
    var value = _ref.target.value;
    clearTimeout(debounce);
    debounce = setTimeout(function () {
      setSearchInputValue(value);
    }, 250);
  }; // xử lý chọn người dùng


  var handleSetSelectedUser = function handleSetSelectedUser(user) {
    setSelectedUser(_objectSpread({}, user));
  };

  var handleClearInput = function handleClearInput() {
    setSearchInputValue('');
    inputRef.current.value = '';
  };

  var handleSelectFilter = function handleSelectFilter(event) {
    switch (event.target.id) {
      case 'role':
        {
          setFilter(_objectSpread(_objectSpread({}, filter), {}, {
            role: event.target.value
          }));
          break;
        }

      case 'order':
        {
          setFilter(_objectSpread(_objectSpread({}, filter), {}, {
            date: event.target.value
          }));
          break;
        }

      default:
        break;
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setIsLoading(true);

    _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/public/api/admin/resources/users?api_token=".concat(localStorage.authenticatedUserToken, "&role=").concat(filter.role, "&date=").concat(filter.date, "&searchInput=").concat(searchInputValue, "&page=").concat(currentPage)).then(function (response) {
                var _response$data$list = response.data.list,
                    data = _response$data$list.data,
                    last_page = _response$data$list.last_page;
                setMaxPage(last_page);

                if (last_page == 1) {
                  setCurrentPage(1);
                }

                setList(_toConsumableArray(data));
                setIsLoading(false);
              })["catch"](function (error) {
                console.log(error.response);
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, [filter, searchInputValue, currentPage, listRefreshTimes]);

  var handleDeleteUser = function handleDeleteUser(id) {
    dispatch(Object(_store_admin_confirmation_box__WEBPACK_IMPORTED_MODULE_10__["showConfirmationBox"])({
      title: 'Thông báo',
      description: 'Bạn có muốn xóa người dùng này',
      callback: function () {
        var _callback = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return axios__WEBPACK_IMPORTED_MODULE_3___default.a["delete"]("/public/api/admin/resources/users/".concat(id, "?api_token=").concat(localStorage.getItem('authenticatedUserToken'))).then(function (response) {
                    var message = response.data.message;
                    dispatch(Object(_store_admin_announcer__WEBPACK_IMPORTED_MODULE_9__["setAnnouncerMessage"])(message));
                    dispatch(Object(_store_admin_users__WEBPACK_IMPORTED_MODULE_11__["userListRefresh"])());
                  })["catch"](function (error) {
                    var message = error.response.data.message;
                    dispatch(Object(_store_admin_announcer__WEBPACK_IMPORTED_MODULE_9__["setAnnouncerMessage"])(message));
                  });

                case 2:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        function callback() {
          return _callback.apply(this, arguments);
        }

        return callback;
      }()
    }));
  };

  var handlePageChange = function handlePageChange(action) {
    switch (action) {
      case 'prev':
        {
          if (currentPage > 1) setCurrentPage(currentPage - 1);
          break;
        }

      case 'next':
        {
          if (currentPage < maxPage) setCurrentPage(currentPage + 1);
          break;
        }

      default:
        break;
    }
  };

  var handleRevokeToken = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(user_id, token) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!token) {
                _context3.next = 3;
                break;
              }

              _context3.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/public/api/admin/resources/users/revoke_token?api_token=".concat(localStorage.getItem('authenticatedUserToken')), {
                id: user_id
              }).then(function (response) {
                var message = response.data.message;
                dispatch(Object(_store_admin_announcer__WEBPACK_IMPORTED_MODULE_9__["setAnnouncerMessage"])(message));
              })["catch"](function (error) {
                dispatch(Object(_store_admin_announcer__WEBPACK_IMPORTED_MODULE_9__["setAnnouncerMessage"])(error.response.data.message));
              });

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleRevokeToken(_x, _x2) {
      return _ref3.apply(this, arguments);
    };
  }(); // console.log(currentPage);


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "button-wrapper",
    onClick: function onClick() {
      return setSearchToggle(!searchToggle);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "button button-crimson"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fas fa-search"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("search-bar", {
      search_hidden: !searchToggle
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    id: "search-input",
    className: "text-input",
    type: "text",
    onChange: handleSetInputValue,
    ref: inputRef
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "button-wrapper",
    onClick: handleClearInput
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "button button-crimson"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fas fa-times"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "select"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
    id: "role",
    onChange: handleSelectFilter
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "",
    defaultChecked: true
  }, "T\u1EA5t c\u1EA3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "user"
  }, "Th\xE0nh vi\xEAn"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "admin"
  }, "Qu\u1EA3n tr\u1ECB vi\xEAn"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "select"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
    id: "order",
    onChange: handleSelectFilter
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "desc",
    defaultChecked: true
  }, "M\u1EDBi nh\u1EA5t"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "asc"
  }, "C\u0169 nh\u1EA5t"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "pagination"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "button button-crimson",
    style: currentPage == 1 ? {
      backgroundColor: 'silver'
    } : {},
    onClick: function onClick() {
      return handlePageChange('prev');
    }
  }, "Tr\u01B0\u1EDBc"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "button button-crimson",
    style: currentPage == maxPage ? {
      backgroundColor: 'silver'
    } : {},
    onClick: function onClick() {
      return handlePageChange('next');
    }
  }, "Sau")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LoadingSpinner__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isLoading: isLoading
  }, list && list.map(function (user, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('user', {
        selected: selectedUser.id == user.id
      }),
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "user-info"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "profile-picture"
    }, user.profile_picture == null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "fas fa-user"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "/storage/app/public/profilePictures/".concat(user.profile_picture)
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "group-info"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "info firstname"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, user.firstname)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "info lastname"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, user.lastname)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "info username"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, user.username)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "info email"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, user.email))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "group-info extra"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "info firstname"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, user.role == 'admin' ? 'Quản trị viên' : 'Thành viên')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "info lastname"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, user.api_token == null ? 'Chưa cấp' : 'Đã cấp')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "action"
    }, user.api_token && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "button button-crimson",
      onClick: function onClick() {
        return handleRevokeToken(user.id, user.api_token);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "fas fa-unlink"
    }), " Token"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: url + "/edit/".concat(user.id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "button button-crimson"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "fas fa-cog"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "button button-crimson",
      onClick: function onClick() {
        return handleDeleteUser(user.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "fas fa-trash-alt"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: url + "/show/".concat(user.id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "button button-crimson",
      onClick: function onClick() {
        return handleSetSelectedUser(user);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "fas fa-ellipsis-h"
    })))));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    path: url + "/show/:id"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FullUserInfo__WEBPACK_IMPORTED_MODULE_5__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    path: url + "/add"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AddEditForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "add"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    path: url + "/edit/:id"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AddEditForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "edit",
    userInfo: selectedUser
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./resources/js/src/components/Admin/Dashboard/Content/Resources/Users/index.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/components/Admin/Dashboard/Content/Resources/Users/index.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./List */ "./resources/js/src/components/Admin/Dashboard/Content/Resources/Users/List/index.js");


 // import AddEditForm from './List/AddEditForm';



function Users() {
  var _useRouteMatch = Object(react_router__WEBPACK_IMPORTED_MODULE_1__["useRouteMatch"])(),
      url = _useRouteMatch.url;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "users"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "controls"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: url + '/list'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "button button-crimson"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-list"
  }), " Danh s\xE1ch"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: url + '/list/add'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "button button-crimson"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-plus"
  }), " Th\xEAm")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: url + '/list'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_List__WEBPACK_IMPORTED_MODULE_3__["default"], null))));
}

/* harmony default export */ __webpack_exports__["default"] = (Users);

/***/ }),

/***/ "./resources/js/src/components/Admin/Dashboard/Content/Resources/index.js":
/*!********************************************************************************!*\
  !*** ./resources/js/src/components/Admin/Dashboard/Content/Resources/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _Users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Users */ "./resources/js/src/components/Admin/Dashboard/Content/Resources/Users/index.js");




function Resources() {
  var _useRouteMatch = Object(react_router__WEBPACK_IMPORTED_MODULE_1__["useRouteMatch"])(),
      url = _useRouteMatch.url;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "resources"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: url + '/users',
    component: _Users__WEBPACK_IMPORTED_MODULE_2__["default"]
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Resources);

/***/ }),

/***/ "./resources/js/src/components/Admin/Dashboard/Content/index.js":
/*!**********************************************************************!*\
  !*** ./resources/js/src/components/Admin/Dashboard/Content/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Resources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Resources */ "./resources/js/src/components/Admin/Dashboard/Content/Resources/index.js");



function Content() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Resources__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}

/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./resources/js/src/components/Admin/Dashboard/TopNav/index.js":
/*!*********************************************************************!*\
  !*** ./resources/js/src/components/Admin/Dashboard/TopNav/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");



function TopNav(_ref) {
  var setSideBarToggle = _ref.setSideBarToggle;
  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.auth.authenticatedUser;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "top-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "QU\u1EA2N TR\u1ECA"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "admin-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "username"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, user.username)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "profile-picture"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/storage/app/public/profilePictures/".concat(user.profile_picture)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sidebar-toggle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "toggle-button",
    onClick: setSideBarToggle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-bars"
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (TopNav);

/***/ }),

/***/ "./resources/js/src/components/Admin/Dashboard/index.js":
/*!**************************************************************!*\
  !*** ./resources/js/src/components/Admin/Dashboard/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Content */ "./resources/js/src/components/Admin/Dashboard/Content/index.js");
/* harmony import */ var _TopNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopNav */ "./resources/js/src/components/Admin/Dashboard/TopNav/index.js");




function Dashboard(_ref) {
  var setSideBarToggle = _ref.setSideBarToggle;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dashboard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TopNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    setSideBarToggle: setSideBarToggle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./resources/js/src/components/Admin/LoadingSpinner/index.js":
/*!*******************************************************************!*\
  !*** ./resources/js/src/components/Admin/LoadingSpinner/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function LoadingSpinner(_ref) {
  var children = _ref.children,
      isLoading = _ref.isLoading;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loading-spinner",
    style: !isLoading ? {
      position: 'fixed',
      left: '-9999px'
    } : {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "shape"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "loading-text"
  }, "\u0110ang t\u1EA3i...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: isLoading ? {
      position: 'fixed',
      left: '-9999px'
    } : {}
  }, children));
}

/* harmony default export */ __webpack_exports__["default"] = (LoadingSpinner);

/***/ }),

/***/ "./resources/js/src/components/Admin/index.js":
/*!****************************************************!*\
  !*** ./resources/js/src/components/Admin/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Errors_Warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Errors/Warning */ "./resources/js/src/components/Errors/Warning.js");
/* harmony import */ var _Announcer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Announcer */ "./resources/js/src/components/Admin/Announcer/index.js");
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Dashboard */ "./resources/js/src/components/Admin/Dashboard/index.js");
/* harmony import */ var _ControlSidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ControlSidebar */ "./resources/js/src/components/Admin/ControlSidebar/index.js");
/* harmony import */ var _ConfirmationBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ConfirmationBox */ "./resources/js/src/components/Admin/ConfirmationBox/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function Admin() {
  var authenticatedUser = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.auth.authenticatedUser;
  });
  var confirmationBoxToggle = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.admin_confirmation_box.toggle;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      sideBarToggle = _useState2[0],
      setSideBarToggle = _useState2[1];

  if (authenticatedUser.role !== 'admin') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Errors_Warning__WEBPACK_IMPORTED_MODULE_2__["default"], {
      warning: "B\u1EA0N L\u1EA0C \u0110\u01AF\u1EDCNG?",
      description: "\u0110\xE2y l\xE0 khu v\u1EF1c d\xE0nh ri\xEAng cho ban qu\u1EA3n tr\u1ECB"
    });
  }

  var handleSetSideBarToggle = function handleSetSideBarToggle() {
    setSideBarToggle(!sideBarToggle);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "admin"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Announcer__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ControlSidebar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sideBarToggle: sideBarToggle,
    setSideBarToggle: handleSetSideBarToggle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Dashboard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setSideBarToggle: handleSetSideBarToggle
  }), confirmationBoxToggle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ConfirmationBox__WEBPACK_IMPORTED_MODULE_6__["default"], null));
}

/* harmony default export */ __webpack_exports__["default"] = (Admin);

/***/ })

}]);