(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

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

/***/ "./resources/js/src/components/Admin/Dashboard/Content/Resources/Users/List/index.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/components/Admin/Dashboard/Content/Resources/Users/List/index.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\XAMPP\\htdocs\\laravelproject\\resources\\js\\src\\components\\Admin\\Dashboard\\Content\\Resources\\Users\\List\\index.js: JSX attributes must only be assigned a non-empty expression (219:86)\n\n\u001b[0m \u001b[90m 217 | \u001b[39m                                \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 218 | \u001b[39m                                \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m\"action\"\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 219 | \u001b[39m                                    \u001b[33m<\u001b[39m\u001b[33mbutton\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m\"button button-crimson\"\u001b[39m onClick\u001b[33m=\u001b[39m{}\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m                                                                                      \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 220 | \u001b[39m                                        \u001b[33m<\u001b[39m\u001b[33mi\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m\"fas fa-unlink\"\u001b[39m\u001b[33m>\u001b[39m\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mi\u001b[39m\u001b[33m>\u001b[39m \u001b[33mToken\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 221 | \u001b[39m                                    \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mbutton\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 222 | \u001b[39m                                    \u001b[0m\n    at Object._raise (D:\\XAMPP\\htdocs\\laravelproject\\node_modules\\@babel\\parser\\lib\\index.js:790:17)\n    at Object.raiseWithData (D:\\XAMPP\\htdocs\\laravelproject\\node_modules\\@babel\\parser\\lib\\index.js:783:17)\n    at Object.raise (D:\\XAMPP\\htdocs\\laravelproject\\node_modules\\@babel\\parser\\lib\\index.js:777:17)\n    at Object.jsxParseAttributeValue (D:\\XAMPP\\htdocs\\laravelproject\\node_modules\\@babel\\parser\\lib\\index.js:4580:16)\n    at Object.jsxParseAttribute (D:\\XAMPP\\htdocs\\laravelproject\\node_modules\\@babel\\parser\\lib\\index.js:4628:44)\n    at Object.jsxParseOpeningElementAfterName (D:\\XAMPP\\htdocs\\laravelproject\\node_modules\\@babel\\parser\\lib\\index.js:4648:28)\n    at Object.jsxParseOpeningElementAt (D:\\XAMPP\\htdocs\\laravelproject\\node_modules\\@babel\\parser\\lib\\index.js:4641:17)\n    at Object.jsxParseElementAt (D:\\XAMPP\\htdocs\\laravelproject\\node_modules\\@babel\\parser\\lib\\index.js:4673:33)\n    at Object.jsxParseElementAt (D:\\XAMPP\\htdocs\\laravelproject\\node_modules\\@babel\\parser\\lib\\index.js:4689:32)\n    at Object.jsxParseElementAt (D:\\XAMPP\\htdocs\\laravelproject\\node_modules\\@babel\\parser\\lib\\index.js:4689:32)\n    at Object.jsxParseElement (D:\\XAMPP\\htdocs\\laravelproject\\node_modules\\@babel\\parser\\lib\\index.js:4747:17)\n    at Object.parseExprAtom (D:\\XAMPP\\htdocs\\laravelproject\\node_modules\\@babel\\parser\\lib\\index.js:4754:19)\n    at Object.parseExprSubscripts (D:\\XAMPP\\htdocs\\laravelproject\\node_modules\\@babel\\parser\\lib\\index.js:10094:23)\n    at Object.parseUpdate (D:\\XAMPP\\htdocs\\laravelproject\\node_modules\\@babel\\parser\\lib\\index.js:10074:21)\n    at Object.parseMaybeUnary (D:\\XAMPP\\htdocs\\laravelproject\\node_modules\\@babel\\parser\\lib\\index.js:10063:17)\n    at Object.parseExprOps (D:\\XAMPP\\htdocs\\laravelproject\\node_modules\\@babel\\parser\\lib\\index.js:9933:23)\n    at Object.parseMaybeConditional (D:\\XAMPP\\htdocs\\laravelproject\\node_modules\\@babel\\parser\\lib\\index.js:9907:23)\n    at Object.parseMaybeAssign (D:\\XAMPP\\htdocs\\laravelproject\\node_modules\\@babel\\parser\\lib\\index.js:9870:21)\n    at D:\\XAMPP\\htdocs\\laravelproject\\node_modules\\@babel\\parser\\lib\\index.js:9837:39\n    at Object.allowInAnd (D:\\XAMPP\\htdocs\\laravelproject\\node_modules\\@babel\\parser\\lib\\index.js:11510:12)\n    at Object.parseMaybeAssignAllowIn (D:\\XAMPP\\htdocs\\laravelproject\\node_modules\\@babel\\parser\\lib\\index.js:9837:17)\n    at Object.parseParenAndDistinguishExpression (D:\\XAMPP\\htdocs\\laravelproject\\node_modules\\@babel\\parser\\lib\\index.js:10706:28)\n    at Object.parseExprAtom (D:\\XAMPP\\htdocs\\laravelproject\\node_modules\\@babel\\parser\\lib\\index.js:10424:21)\n    at Object.parseExprAtom (D:\\XAMPP\\htdocs\\laravelproject\\node_modules\\@babel\\parser\\lib\\index.js:4759:20)\n    at Object.parseExprSubscripts (D:\\XAMPP\\htdocs\\laravelproject\\node_modules\\@babel\\parser\\lib\\index.js:10094:23)\n    at Object.parseUpdate (D:\\XAMPP\\htdocs\\laravelproject\\node_modules\\@babel\\parser\\lib\\index.js:10074:21)\n    at Object.parseMaybeUnary (D:\\XAMPP\\htdocs\\laravelproject\\node_modules\\@babel\\parser\\lib\\index.js:10063:17)\n    at Object.parseExprOps (D:\\XAMPP\\htdocs\\laravelproject\\node_modules\\@babel\\parser\\lib\\index.js:9933:23)\n    at Object.parseMaybeConditional (D:\\XAMPP\\htdocs\\laravelproject\\node_modules\\@babel\\parser\\lib\\index.js:9907:23)\n    at Object.parseMaybeAssign (D:\\XAMPP\\htdocs\\laravelproject\\node_modules\\@babel\\parser\\lib\\index.js:9870:21)\n    at Object.parseFunctionBody (D:\\XAMPP\\htdocs\\laravelproject\\node_modules\\@babel\\parser\\lib\\index.js:11177:24)\n    at Object.parseArrowExpression (D:\\XAMPP\\htdocs\\laravelproject\\node_modules\\@babel\\parser\\lib\\index.js:11156:10)\n    at Object.parseParenAndDistinguishExpression (D:\\XAMPP\\htdocs\\laravelproject\\node_modules\\@babel\\parser\\lib\\index.js:10729:12)\n    at Object.parseExprAtom (D:\\XAMPP\\htdocs\\laravelproject\\node_modules\\@babel\\parser\\lib\\index.js:10424:21)\n    at Object.parseExprAtom (D:\\XAMPP\\htdocs\\laravelproject\\node_modules\\@babel\\parser\\lib\\index.js:4759:20)\n    at Object.parseExprSubscripts (D:\\XAMPP\\htdocs\\laravelproject\\node_modules\\@babel\\parser\\lib\\index.js:10094:23)");

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