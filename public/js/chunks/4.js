(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-infinite-scroll-component */ "./node_modules/react-infinite-scroll-component/dist/index.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _store_community_announcer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../store/community/announcer */ "./resources/js/src/store/community/announcer.js");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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














function CreateShowcase() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    list: [],
    page: 1,
    hasMore: true,
    maxPage: 0,
    totalArts: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      artsList = _useState2[0],
      setArtsList = _useState2[1];

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

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(function (state) {
    return state.auth.authenticatedUser;
  }),
      userId = _useSelector.id;

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      _useState8 = _slicedToArray(_useState7, 2),
      loading = _useState8[0],
      setLoading = _useState8[1];

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["useHistory"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var getArtsList = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/public/api/community/resources/arts?api_token=".concat(localStorage.getItem('authenticatedUserToken'), "&page=1")).then(function (response) {
                  // console.log(response);
                  setLoading(false);
                  setArtsList(_objectSpread(_objectSpread({}, artsList), {}, {
                    page: response.data.list.current_page,
                    list: response.data.list.data,
                    maxPage: response.data.list.last_page,
                    totalArts: response.data.list.total,
                    hasMore: true
                  }));
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
  }, [userId]);

  var fetchMoreArtsData = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(artsList.maxPage > artsList.page)) {
                _context3.next = 6;
                break;
              }

              setLoading(true);
              _context3.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/public/api/community/resources/arts?api_token=".concat(localStorage.getItem('authenticatedUserToken'), "&page=").concat(artsList.page + 1)).then(function (response) {
                setArtsList(_objectSpread(_objectSpread({}, artsList), {}, {
                  list: artsList.list.concat(response.data.list.data),
                  page: response.data.list.current_page
                }));
                setLoading(false);
              })["catch"](function (error) {
                console.log(error.response);
              });

            case 4:
              _context3.next = 7;
              break;

            case 6:
              setArtsList(_objectSpread(_objectSpread({}, artsList), {}, {
                hasMore: false
              }));

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function fetchMoreArtsData() {
      return _ref3.apply(this, arguments);
    };
  }();

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
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(values) {
      var apiToken, data, key;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              apiToken = localStorage.getItem('authenticatedUserToken'); // Xử lý Data chuẩn bị gửi đi

              data = new FormData();

              for (key in values) {
                data.append(key, values[key]);
              }

              data.append('art_ids_list', selectedArts);
              _context4.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/public/api/community/resources/showcases?api_token=".concat(apiToken), data).then(function (response) {
                dispatch(Object(_store_community_announcer__WEBPACK_IMPORTED_MODULE_12__["setAnnouncementMessage"])({
                  message: response.data.message,
                  type: 'success'
                }));
                history.push('/public/community/management');
              })["catch"](function (error) {
                dispatch(Object(_store_community_announcer__WEBPACK_IMPORTED_MODULE_12__["setAnnouncementMessage"])({
                  message: error.response.data.message,
                  type: 'danger'
                }));
              });

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function handleSubmitForm(_x) {
      return _ref4.apply(this, arguments);
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
  }, function (_ref5) {
    var handleSubmit = _ref5.handleSubmit,
        isSubmitting = _ref5.isSubmitting;
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
      className: "fas fa-rocket"
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10__["default"], {
    dataLength: artsList.list && artsList.list.length,
    next: fetchMoreArtsData,
    hasMore: artsList.hasMore,
    className: "list"
  }, artsList.list.length > 0 ? artsList.list.map(function (art, index) {
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
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "Kh\xF4ng c\xF3 t\xE1c ph\u1EA9m n\xE0o")), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("center", {
    className: "loading-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    className: "loading",
    src: "https://4.bp.blogspot.com/-a4arXx0z1xQ/VuM0S587YfI/AAAAAAAAAOk/jQf7UpsN93ol-qZYM4CuibUSCG8deiejg/s1600/loading.gif"
  })), artsList.totalArts == artsList.list.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "scroll-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "text"
  }, "Ch\u1EB3ng c\xF2n g\xEC \u0111\u1EC3 xem :)")))));
}

/* harmony default export */ __webpack_exports__["default"] = (CreateShowcase);

/***/ })

}]);