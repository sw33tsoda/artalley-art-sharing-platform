(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./resources/js/src/components/Auth/Login/LoginForm/index.js":
/*!*******************************************************************!*\
  !*** ./resources/js/src/components/Auth/Login/LoginForm/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../CustomFields/InputField */ "./resources/js/src/components/CustomFields/InputField/index.js");
/* harmony import */ var _Validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Validation */ "./resources/js/src/components/Auth/Validation/index.js");





function LoginForm(props) {
  var handleLoginOnSubmit = props.handleLoginOnSubmit;
  var validationSchema = _Validation__WEBPACK_IMPORTED_MODULE_3__["LoginValidationSchema"];
  var initialValues = {
    email: '',
    password: ''
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_0__["Formik"], {
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: handleLoginOnSubmit
  }, function (_ref) {
    var handleSubmit = _ref.handleSubmit;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_0__["FastField"], {
      name: "email",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_2__["default"],
      label: "\u0110\u1ECBa ch\u1EC9 Email",
      labelClassName: "label",
      placeholder: "Nh\u1EADp \u0111\u1ECBa ch\u1EC9 Email \u0111\u0103ng nh\u1EADp",
      className: "text-input mt1",
      type: "text",
      disabled: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_0__["FastField"], {
      name: "password",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_2__["default"],
      label: "M\u1EADt kh\u1EA9u",
      labelClassName: "label",
      placeholder: "Nh\u1EADp m\u1EADt kh\u1EA9u \u0111\u0103ng nh\u1EADp",
      className: "text-input mt1",
      type: "password",
      disabled: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      type: "submit",
      className: "button form-button mt1 success"
    }, "\u0110\u0102NG NH\u1EACP"));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./resources/js/src/components/Auth/Login/index.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/components/Auth/Login/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoginForm */ "./resources/js/src/components/Auth/Login/LoginForm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/auth */ "./resources/js/src/store/auth.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







Login.propTypes = {
  closeLogin: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
};
Login.defaultProps = {
  closeLogin: null
};

function Login(props) {
  var closeLogin = props.closeLogin;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();

  var handleLoginOnSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(payload) {
      var email, password;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              email = payload.email, password = payload.password;
              axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/public/api/auth/login', {
                email: email,
                password: password
              }).then(function (response) {
                var _response$data = response.data,
                    login_status = _response$data.login_status,
                    message = _response$data.message,
                    user_info = _response$data.user_info;

                if (login_status == 1) {
                  var action = Object(_store_auth__WEBPACK_IMPORTED_MODULE_5__["setAuthenticatedUser"])(user_info);
                  dispatch(action);
                  alert(message);
                  closeLogin();
                }
              })["catch"](function (error) {
                var _error$response$data = error.response.data,
                    login_status = _error$response$data.login_status,
                    message = _error$response$data.message; // console.log(error.response);

                if (login_status == 0) {
                  alert(message);
                }
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleLoginOnSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, "\u0110\u0102NG NH\u1EACP"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "login-close close",
    onClick: closeLogin
  }, "\u0110\xF3ng"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_LoginForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    handleLoginOnSubmit: handleLoginOnSubmit
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./resources/js/src/components/Auth/Register/GuideAndIntroduction/TermsAndConditions.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/components/Auth/Register/GuideAndIntroduction/TermsAndConditions.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TermsAndConditions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function TermsAndConditions() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "terms-and-conditions scroll"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Welcome to GooDeals!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "These terms and conditions outline the rules and regulations for the use of GooDeals Group's Website, located at www.GooDeals.com."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "By accessing this website we assume you accept these terms and conditions. Do not continue to use GooDeals if you do not agree to take all of the terms and conditions stated on this page. Our Terms and Conditions were created with the help of the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.termsandconditionsgenerator.com"
  }, "Terms And Conditions "), " and the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.privacypolicyonline.com/terms-conditions-generator/"
  }, "Free Terms & Conditions"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: \"Client\", \"You\" and \"Your\" refers to you, the person log on this website and compliant to the Company\u2019s terms and conditions. \"The Company\", \"Ourselves\", \"We\", \"Our\" and \"Us\", refers to our Company. \"Party\", \"Parties\", or \"Us\", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client\u2019s needs in respect of provision of the Company\u2019s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Cookies")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We employ the use of cookies. By accessing GooDeals, you agreed to use cookies in agreement with the GooDeals Group's Privacy Policy."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Most interactive websites use cookies to let us retrieve the user\u2019s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "License")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Unless otherwise stated, GooDeals Group and/or its licensors own the intellectual property rights for all material on GooDeals. All intellectual property rights are reserved. You may access this from GooDeals for your own personal use subjected to restrictions set in these terms and conditions."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You must not:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Republish material from GooDeals"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Sell, rent or sub-license material from GooDeals"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Reproduce, duplicate or copy material from GooDeals"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Redistribute content from GooDeals")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "This Agreement shall begin on the date hereof."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. GooDeals Group does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of GooDeals Group,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, GooDeals Group shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "GooDeals Group reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You warrant and represent that:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You hereby grant GooDeals Group a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Hyperlinking to our Content")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The following organizations may link to our Website without prior written approval:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Government agencies;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Search engines;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "News organizations;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party\u2019s site."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We may consider and approve other link requests from the following types of organizations:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "commonly-known consumer and/or business information sources;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "dot.com community sites;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "associations or other groups representing charities;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "online directory distributors;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "internet portals;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "accounting, law and consulting firms; and"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "educational institutions and trade associations.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of GooDeals Group; and (d) the link is in the context of general resource information."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party\u2019s site."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to GooDeals Group. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Approved organizations may hyperlink to our Website as follows:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "By use of our corporate name; or"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "By use of the uniform resource locator being linked to; or"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party\u2019s site.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "No use of GooDeals Group's logo or other artwork will be allowed for linking absent a trademark license agreement."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "iFrames")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Content Liability")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Your Privacy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Please read Privacy Policy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Reservation of Rights")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it\u2019s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Removal of links from our website")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Disclaimer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "limit or exclude our or your liability for death or personal injury;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "limit or exclude our or your liability for fraud or fraudulent misrepresentation;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "limit any of our or your liabilities in any way that is not permitted under applicable law; or"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "exclude any of our or your liabilities that may not be excluded under applicable law.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature."));
}

/***/ }),

/***/ "./resources/js/src/components/Auth/Register/GuideAndIntroduction/index.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/components/Auth/Register/GuideAndIntroduction/index.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TermsAndConditions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TermsAndConditions */ "./resources/js/src/components/Auth/Register/GuideAndIntroduction/TermsAndConditions.js");



function GuideAndIntroduction() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TermsAndConditions__WEBPACK_IMPORTED_MODULE_1__["default"], null);
}

/* harmony default export */ __webpack_exports__["default"] = (GuideAndIntroduction);

/***/ }),

/***/ "./resources/js/src/components/Auth/Register/RegisterForm/index.js":
/*!*************************************************************************!*\
  !*** ./resources/js/src/components/Auth/Register/RegisterForm/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../CustomFields/InputField */ "./resources/js/src/components/CustomFields/InputField/index.js");
/* harmony import */ var _Validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Validation */ "./resources/js/src/components/Auth/Validation/index.js");





function RegisterForm(props) {
  var isFinish = props.isFinish,
      handleRegisterOnSubmit = props.handleRegisterOnSubmit,
      formRef = props.formRef;
  var initialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: ''
  };
  var validationSchema = _Validation__WEBPACK_IMPORTED_MODULE_3__["RegisterValidationSchema"];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_0__["Formik"], {
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: handleRegisterOnSubmit,
    innerRef: formRef
  }, function (_ref) {
    var handleSubmit = _ref.handleSubmit;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_0__["FastField"], {
      name: "firstname",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_2__["default"],
      label: "T\xEAn",
      labelClassName: "label",
      placeholder: "T\xEAn c\u1EE7a b\u1EA1n?",
      className: "text-input mt1",
      type: "text",
      disabled: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_0__["FastField"], {
      name: "lastname",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_2__["default"],
      label: "H\u1ECD",
      labelClassName: "label",
      placeholder: "T\xEAn h\u1ECD c\u1EE7a b\u1EA1n?",
      className: "text-input mt1",
      type: "text",
      disabled: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_0__["FastField"], {
      name: "username",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_2__["default"],
      label: "T\xEAn ng\u01B0\u1EDDi d\xF9ng",
      labelClassName: "label",
      placeholder: "T\xEAn ng\u01B0\u1EDDi d\xF9ng s\u1EBD l\xE0...",
      className: "text-input mt1",
      type: "text",
      disabled: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_0__["FastField"], {
      name: "password",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_2__["default"],
      label: "M\u1EADt kh\u1EA9u",
      labelClassName: "label",
      placeholder: "M\u1EADt kh\u1EA9u",
      className: "text-input mt1",
      type: "password",
      disabled: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_0__["FastField"], {
      name: "password_confirmation",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_2__["default"],
      label: "X\xE1c nh\u1EADn m\u1EADt kh\u1EA9u",
      labelClassName: "label",
      placeholder: "\u0110i\u1EC1n l\u1EA1i m\u1EADt kh\u1EA9u",
      className: "text-input mt1",
      type: "password",
      disabled: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_0__["FastField"], {
      name: "email",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_2__["default"],
      label: "\u0110\u1ECBa ch\u1EC9 Email",
      labelClassName: "label",
      placeholder: "example@example.com",
      className: "text-input mt1",
      type: "email",
      disabled: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      type: "submit",
      className: "button form-button mt1 ".concat(isFinish ? 'success' : 'danger'),
      disabled: !isFinish
    }, isFinish ? 'HOÀN THÀNH' : 'XEM ĐIỀU KHOẢN'));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (RegisterForm);

/***/ }),

/***/ "./resources/js/src/components/Auth/Register/index.js":
/*!************************************************************!*\
  !*** ./resources/js/src/components/Auth/Register/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _GuideAndIntroduction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GuideAndIntroduction */ "./resources/js/src/components/Auth/Register/GuideAndIntroduction/index.js");
/* harmony import */ var _RegisterForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RegisterForm */ "./resources/js/src/components/Auth/Register/RegisterForm/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function Register(props) {
  var closeRegister = props.closeRegister;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isFinish = _useState2[0],
      setIsFinish = _useState2[1];

  var formRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var handleRegisterFormStatus = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIsFinish(!isFinish);

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleRegisterFormStatus() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleRegisterOnSubmit = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(payload, _ref2) {
      var resetForm, firstname, lastname, username, password, email;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              resetForm = _ref2.resetForm;
              firstname = payload.firstname, lastname = payload.lastname, username = payload.username, password = payload.password, email = payload.email;
              axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/public/api/auth/register', {
                firstname: firstname,
                lastname: lastname,
                username: username,
                password: password,
                email: email
              }).then(function (response) {
                var _response$data = response.data,
                    message = _response$data.message,
                    register_status = _response$data.register_status;
                alert(message);

                if (register_status == 1) {
                  resetForm({});
                }
              })["catch"](function (error) {
                if (error) {
                  alert('Không đủ điều kiện đăng ký'); // Error log
                  // console.log(error);

                  console.log(error.response);
                }
              });

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleRegisterOnSubmit(_x, _x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "register"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "guide-and-introduction"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, "CH\u1EC8 V\xC0I B\u01AF\u1EDAC TH\xD4I!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "mb2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "guide"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, "Ho\xE0n th\xE0nh m\u1EABu \u0111\u0103ng k\xFD."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, "\u0110\u1ECDc ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, "\u0110i\u1EC1u Kho\u1EA3n v\xE0 \u0110i\u1EC1u Ki\u1EC7n"), " c\u1EE7a ch\xFAng t\xF4i."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, "X\xE1c nh\u1EADn \u0111\xE3 \u0111\u1ECDc ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, "\u0110i\u1EC1u Kho\u1EA3n v\xE0 \u0110i\u1EC1u Ki\u1EC7n"), " sau \u0111\xF3 ho\xE0n th\xE0nh \u0111\u0103ng k\xFD."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_GuideAndIntroduction__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "finish-checkbox mt2",
    onClick: handleRegisterFormStatus
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "checkbox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "checkbox-tick",
    style: {
      visibility: isFinish ? 'visible' : 'hidden'
    }
  })), "T\xF4i \u0111\xE3 \u0111\u1ECDc v\xE0 ch\u1EA5p nh\u1EADn", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, " \u0110i\u1EC1u Kho\u1EA3n v\xE0 \u0110i\u1EC1u Ki\u1EC7n"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, "\u0110\u0102NG K\xDD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "register-close close",
    onClick: closeRegister
  }, "\u0110\xF3ng"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_RegisterForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isFinish: isFinish,
    handleRegisterOnSubmit: handleRegisterOnSubmit,
    formRef: formRef
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Register);

/***/ }),

/***/ "./resources/js/src/components/Auth/index.js":
/*!***************************************************!*\
  !*** ./resources/js/src/components/Auth/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Register */ "./resources/js/src/components/Auth/Register/index.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Login */ "./resources/js/src/components/Auth/Login/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../store/auth */ "./resources/js/src/store/auth.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function Auth() {
  var authenticatedUser = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.auth.authenticatedUser;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useRouteMatch = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useRouteMatch"])(),
      url = _useRouteMatch.url;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isRegister = _useState2[0],
      setIsRegister = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isLogin = _useState4[0],
      setIsLogin = _useState4[1];

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])();

  var handleCloseRegister = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return setIsRegister(false);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleCloseRegister() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleCloseLogin = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return setIsLogin(false);

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleCloseLogin() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleLogout = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("/public/api/auth/logout?api_token=".concat(authenticatedUser.api_token)).then(function (response) {
                var _response$data = response.data,
                    login_status = _response$data.login_status,
                    message = _response$data.message;

                if (login_status) {
                  var action = Object(_store_auth__WEBPACK_IMPORTED_MODULE_7__["removeAuthenticatedUser"])();
                  dispatch(action);
                  alert(message);
                }
              })["catch"](function (error) {
                console.log(error);
              });

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleLogout() {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleRedirectOnClick = function handleRedirectOnClick(path) {
    history.push(path);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "auth"
  }, !lodash__WEBPACK_IMPORTED_MODULE_8___default.a.isEmpty(authenticatedUser) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "user-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: "/public/community/setting"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "username"
  }, authenticatedUser.username)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: "/public/community/setting"
  }, authenticatedUser.profile_picture !== null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "profile-picture",
    src: "/storage/app/public/profilePictures/".concat(authenticatedUser.profile_picture)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "button",
    onClick: function onClick() {
      return handleRedirectOnClick(url + '/management');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fas fa-images"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "text"
  }, "Qu\u1EA3n l\xFD")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "button",
    onClick: function onClick() {
      return handleRedirectOnClick(url + '/upload');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: url + '/upload',
    style: {
      textDecoration: 'none',
      color: '#D9D9D9'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fas fa-plus"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "text"
  }, "Th\xEAm")))), authenticatedUser.role == 'admin' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "button admin",
    onClick: function onClick() {
      return handleRedirectOnClick('/public/admin');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fa fa-user-shield",
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "text"
  }, "Admin")), isRegister && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Register__WEBPACK_IMPORTED_MODULE_2__["default"], {
    closeRegister: handleCloseRegister
  }), isLogin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Login__WEBPACK_IMPORTED_MODULE_3__["default"], {
    closeLogin: handleCloseLogin
  }), !lodash__WEBPACK_IMPORTED_MODULE_8___default.a.isEmpty(authenticatedUser) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "button",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fa fa-sign-out",
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "text"
  }, "\u0110\u0103ng xu\u1EA5t"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "button",
    onClick: function onClick() {
      return setIsRegister(!isRegister);
    }
  }, "\u0110\u0103ng k\xFD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "button",
    onClick: function onClick() {
      return setIsLogin(!isLogin);
    }
  }, "\u0110\u0103ng nh\u1EADp")));
}

/* harmony default export */ __webpack_exports__["default"] = (Auth);

/***/ }),

/***/ "./resources/js/src/components/Community/Announcement/index.js":
/*!*********************************************************************!*\
  !*** ./resources/js/src/components/Community/Announcement/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_community_announcer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/community/announcer */ "./resources/js/src/store/community/announcer.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);




Announcement.propTypes = {
  timeout: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired
};
Announcement.defaultProps = {
  timeout: 5
};

function Announcement(_ref) {
  var timeout = _ref.timeout;
  var announcement = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.community_announcement;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  if (announcement.message !== '') {
    setTimeout(function () {
      dispatch(Object(_store_community_announcer__WEBPACK_IMPORTED_MODULE_2__["removeAnnouncementMessage"])());
    }, timeout * 1000);
  }

  return announcement.message && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "announcement"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "message"
  }, announcement.type == 'success' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-check-circle success-icon"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-times-circle"
  }), announcement.message));
}

/* harmony default export */ __webpack_exports__["default"] = (Announcement);

/***/ }),

/***/ "./resources/js/src/components/Community/Body/CommentSection/CommentForm/index.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/components/Community/Body/CommentSection/CommentForm/index.js ***!
  \****************************************************************************************/
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_community_announcer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../store/community/announcer */ "./resources/js/src/store/community/announcer.js");
/* harmony import */ var _CustomFields_TextareaField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../CustomFields/TextareaField */ "./resources/js/src/components/CustomFields/TextareaField/index.js");
/* harmony import */ var _Validations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../Validations */ "./resources/js/src/components/Validations/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function CommentForm(_ref) {
  var parentColumn = _ref.parentColumn,
      parentId = _ref.parentId,
      refreshList = _ref.refreshList,
      type = _ref.type,
      action = _ref.action,
      initialValues = _ref.initialValues,
      setAction = _ref.setAction;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isSubmitting = _useState2[0],
      setIsSubmitting = _useState2[1];

  var handleSubmitForm = function handleSubmitForm(values, _ref2) {
    var resetForm = _ref2.resetForm;
    setIsSubmitting(true); // console.log(parentColumn,parentId,refreshList,type,action,initialValues,setAction);

    var resource = function () {
      switch (type) {
        case 'comment':
          return 'comments';

        case 'reply':
          return 'replies';
      }
    }();

    var formData = new FormData();
    (function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data, values, type, action) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(action == 'edit')) {
                  _context.next = 6;
                  break;
                }

                data.append(type, values[type]);
                data.append('_method', 'PATCH');
                _context.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/public/api/community/resources/".concat(resource, "/").concat(parentId, "?api_token=").concat(localStorage.getItem('authenticatedUserToken')), data);

              case 5:
                return _context.abrupt("return", _context.sent);

              case 6:
                data.append(type, values[type]);
                data.append(parentColumn, parentId);
                _context.next = 10;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/public/api/community/resources/".concat(resource, "?api_token=").concat(localStorage.getItem('authenticatedUserToken')), data);

              case 10:
                return _context.abrupt("return", _context.sent);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2, _x3, _x4) {
        return _ref3.apply(this, arguments);
      };
    })()(formData, values, type, action).then(function (response) {
      dispatch(Object(_store_community_announcer__WEBPACK_IMPORTED_MODULE_5__["setAnnouncementMessage"])({
        message: response.data.message,
        type: 'success'
      })); // if (action == undefined) {
      // }

      resetForm();
      refreshList();

      if (setAction) {
        setAction(null, 'clear', null);
      } // console.log(resetForm,refreshList,setAction);

    })["catch"](function (error) {
      dispatch(Object(_store_community_announcer__WEBPACK_IMPORTED_MODULE_5__["setAnnouncementMessage"])({
        message: error.response.data.message,
        type: 'danger'
      }));
    }).then(function () {
      setIsSubmitting(false);
    });
  };

  return isSubmitting ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("center", {
    className: "loading-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    className: "loading",
    src: "https://4.bp.blogspot.com/-a4arXx0z1xQ/VuM0S587YfI/AAAAAAAAAOk/jQf7UpsN93ol-qZYM4CuibUSCG8deiejg/s1600/loading.gif"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    validationSchema: type == 'comment' ? _Validations__WEBPACK_IMPORTED_MODULE_7__["CommentValidation"] : _Validations__WEBPACK_IMPORTED_MODULE_7__["ReplyValidation"],
    initialValues: function (values) {
      if (values) {
        return values;
      }

      var initialValues = {};
      initialValues[type] = '';
      return initialValues;
    }(initialValues),
    onSubmit: handleSubmitForm
  }, function (_ref4) {
    var values = _ref4.values,
        errors = _ref4.errors,
        handleSubmit = _ref4.handleSubmit;
    // console.log(values,errors);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
      className: "form comment-form",
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["FastField"], {
      name: type,
      component: _CustomFields_TextareaField__WEBPACK_IMPORTED_MODULE_6__["default"],
      placeholder: "Nh\u1EADp b\xECnh lu\u1EADn...",
      disabled: false,
      showError: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "controls"
    }, errors[type] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "error"
    }, errors[type]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "text-count"
    }, values[type].length, "/500"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
      type: "submit",
      className: "button success"
    }, action == 'edit' ? 'Sửa' : 'Gửi')));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (CommentForm);

/***/ }),

/***/ "./resources/js/src/components/Community/Body/CommentSection/CommentList/Comment/index.js":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/components/Community/Body/CommentSection/CommentList/Comment/index.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../CommentForm */ "./resources/js/src/components/Community/Body/CommentSection/CommentForm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);





function Comment(_ref) {
  var info = _ref.info,
      authenticatedUserId = _ref.authenticatedUserId,
      setAction = _ref.setAction,
      currentAction = _ref.currentAction,
      refreshList = _ref.refreshList,
      repliesList = _ref.repliesList,
      type = _ref.type;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(type)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "profile-picture"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/public/community/user/".concat(info.users.id, "/arts")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/storage/app/public/profilePictures/".concat(info.users.profile_picture)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/public/community/user/".concat(info.users.id, "/arts")
  }, info.users.username), info.is_edited == true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "edited"
  }, "(B\xECnh lu\u1EADn \u0111\xE3 \u0111\u01B0\u1EE3c ch\u1EC9nh s\u1EEDa)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "callout-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("callout", {
      edit_mode: currentAction.type == type && currentAction.id == info.id && currentAction.action == 'edit'
    })
  }, currentAction.type == type && currentAction.id == info.id && currentAction.action == 'edit' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CommentForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    action: "edit",
    type: type,
    parentId: info.id,
    initialValues: info,
    setAction: setAction,
    refreshList: refreshList
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, info[type])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null)), authenticatedUserId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "action-controls form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-box"
  }, info.user_id == authenticatedUserId && type !== 'reply' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: function onClick() {
      return setAction(info.id, 'add', 'reply');
    }
  }, currentAction.type == 'reply' && currentAction.action == 'add' && currentAction.id == info.id ? "HỦY" : "TRẢ LỜI")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-box"
  }, info.user_id == authenticatedUserId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, currentAction.id == info.id && currentAction.action == 'edit' ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: function onClick() {
      return setAction(info.id, 'edit', type);
    }
  }, "S\u1EEDa"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: function onClick() {
      return setAction(info.id, 'delete', type);
    }
  }, "X\xF3a")))), info.user_id == authenticatedUserId && info.id == currentAction.id && currentAction.action == 'add' && currentAction.type == 'reply' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CommentForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    parentColumn: "comment_id",
    parentId: info.id,
    refreshList: refreshList,
    type: currentAction.type,
    action: "add",
    setAction: setAction
  }), repliesList && repliesList.map(function (reply, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comment, {
      info: reply,
      key: index,
      authenticatedUserId: authenticatedUserId,
      type: "reply",
      setAction: setAction,
      currentAction: currentAction,
      refreshList: refreshList
    });
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ }),

/***/ "./resources/js/src/components/Community/Body/CommentSection/CommentList/index.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/components/Community/Body/CommentSection/CommentList/index.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_community_announcer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../store/community/announcer */ "./resources/js/src/store/community/announcer.js");
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Comment */ "./resources/js/src/components/Community/Body/CommentSection/CommentList/Comment/index.js");


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







function CommentList(_ref) {
  var artId = _ref.artId,
      refresh = _ref.refresh,
      refreshList = _ref.refreshList;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      commentsList = _useState2[0],
      setCommentsList = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    type: null,
    action: null,
    id: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      currentAction = _useState4[0],
      setCurrentAction = _useState4[1]; // console.log(currentAction);


  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.auth.authenticatedUser;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var getCommentsList = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/public/api/community/resources/public/get-comments-list-by-art-id/".concat(artId)).then(function (response) {
                  // console.log(response);
                  setCommentsList(_toConsumableArray(response.data.list));
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

      return function getCommentsList() {
        return _ref2.apply(this, arguments);
      };
    }();

    getCommentsList();
  }, [artId, refresh]);

  var handleAction = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id, action, type) {
      var resource;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.t0 = action;
              _context2.next = _context2.t0 === 'add' ? 3 : _context2.t0 === 'edit' ? 5 : _context2.t0 === 'delete' ? 7 : _context2.t0 === 'clear' ? 10 : 11;
              break;

            case 3:
              setCurrentAction({
                type: type,
                action: 'add',
                id: id
              });
              return _context2.abrupt("break", 12);

            case 5:
              setCurrentAction({
                type: type,
                action: 'edit',
                id: id
              });
              return _context2.abrupt("break", 12);

            case 7:
              resource = function () {
                switch (type) {
                  case 'comment':
                    return 'comments';

                  case 'reply':
                    return 'replies';
                }
              }();

              _context2.next = 10;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]("/public/api/community/resources/".concat(resource, "/").concat(id, "?api_token=").concat(localStorage.getItem('authenticatedUserToken'))).then(function (response) {
                dispatch(Object(_store_community_announcer__WEBPACK_IMPORTED_MODULE_4__["setAnnouncementMessage"])({
                  message: response.data.message,
                  type: 'success'
                }));
                refreshList();
              })["catch"](function (error) {
                dispatch(Object(_store_community_announcer__WEBPACK_IMPORTED_MODULE_4__["setAnnouncementMessage"])({
                  message: error.response.data.message,
                  type: 'danger'
                }));
              });

            case 10:
              setCurrentAction({
                action: null,
                type: null,
                id: null
              });

            case 11:
              return _context2.abrupt("break", 12);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleAction(_x, _x2, _x3) {
      return _ref3.apply(this, arguments);
    };
  }(); // debugger;


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "comment-list"
  }, commentsList && commentsList.map(function (comment, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Comment__WEBPACK_IMPORTED_MODULE_5__["default"], {
      info: comment,
      key: index,
      authenticatedUserId: user.id,
      setAction: handleAction,
      currentAction: currentAction,
      refreshList: refreshList,
      repliesList: comment.replies,
      type: "comment"
    });
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CommentList);

/***/ }),

/***/ "./resources/js/src/components/Community/Body/CommentSection/index.js":
/*!****************************************************************************!*\
  !*** ./resources/js/src/components/Community/Body/CommentSection/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CommentForm */ "./resources/js/src/components/Community/Body/CommentSection/CommentForm/index.js");
/* harmony import */ var _CommentList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommentList */ "./resources/js/src/components/Community/Body/CommentSection/CommentList/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function CommentSection(_ref) {
  var artId = _ref.artId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      refresh = _useState2[0],
      setRefresh = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "comment-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "title"
  }, "B\xECnh lu\u1EADn"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CommentForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    parentColumn: "art_id",
    parentId: artId,
    type: "comment",
    refreshList: function refreshList() {
      return setRefresh(!refresh);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CommentList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    artId: artId,
    refresh: refresh,
    refreshList: function refreshList() {
      setRefresh(!refresh);
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CommentSection);

/***/ }),

/***/ "./resources/js/src/components/Community/Body/Lists/ArtsList/index.js":
/*!****************************************************************************!*\
  !*** ./resources/js/src/components/Community/Body/Lists/ArtsList/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-infinite-scroll-component */ "./node_modules/react-infinite-scroll-component/dist/index.es.js");


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






function ArtsList(_ref) {
  var userId = _ref.userId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    list: [],
    page: 1,
    hasMore: true,
    maxPage: 0,
    totalArts: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      artsList = _useState2[0],
      setArtsList = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // const apiToken = localStorage.getItem('authenticatedUserToken');
    var getArtsList = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/public/api/community/resources/public/get-arts-list-by-user-id/".concat(userId, "?page=1")).then(function (response) {
                  setLoading(false);

                  if (response.data.list.data.length > 0) {
                    setArtsList(_objectSpread(_objectSpread({}, artsList), {}, {
                      page: response.data.list.current_page,
                      list: response.data.list.data,
                      hasMore: true,
                      maxPage: response.data.list.last_page,
                      totalArts: response.data.list.total
                    }));
                  }
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
        return _ref2.apply(this, arguments);
      };
    }();

    getArtsList();
  }, [userId]);

  var fetchMoreData = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(artsList.page <= artsList.maxPage)) {
                _context2.next = 6;
                break;
              }

              setLoading(true);
              _context2.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/public/api/community/resources/public/get-arts-list-by-user-id/".concat(userId, "?page=").concat(artsList.page + 1)).then(function (response) {
                setLoading(false);
                setArtsList(_objectSpread(_objectSpread({}, artsList), {}, {
                  list: artsList.list.concat(response.data.list.data),
                  page: response.data.list.current_page
                }));
              })["catch"](function (error) {
                console.log(error.response);
              });

            case 4:
              _context2.next = 7;
              break;

            case 6:
              setArtsList(_objectSpread(_objectSpread({}, artsList), {}, {
                hasMore: false
              }));

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function fetchMoreData() {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_4__["default"], {
    dataLength: artsList.list.length,
    next: fetchMoreData,
    hasMore: artsList.hasMore,
    className: "arts-list"
  }, artsList.list.map(function (art, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/public/community/art/".concat(art.id),
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "art"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: "/storage/app/public/community/".concat(art.user_id, "/arts/").concat(art.art)
    })));
  })), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("center", {
    className: "loading-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    className: "loading",
    src: "https://4.bp.blogspot.com/-a4arXx0z1xQ/VuM0S587YfI/AAAAAAAAAOk/jQf7UpsN93ol-qZYM4CuibUSCG8deiejg/s1600/loading.gif"
  })), artsList.totalArts == artsList.list.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "scroll-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "text"
  }, "Ch\u1EB3ng c\xF2n g\xEC \u0111\u1EC3 xem :)")));
}

/* harmony default export */ __webpack_exports__["default"] = (ArtsList);

/***/ }),

/***/ "./resources/js/src/components/Community/Body/Lists/ShowcasesList/index.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/components/Community/Body/Lists/ShowcasesList/index.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-moment */ "./node_modules/react-moment/dist/index.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function ShowcasesList(_ref) {
  var userId = _ref.userId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      showcasesList = _useState2[0],
      setShowcasesList = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // const apiToken = localStorage.getItem('authenticatedUserToken');
    var getArtsList = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/public/api/community/resources/public/get-showcases-list-by-user-id/".concat(userId)).then(function (response) {
                  var list = response.data.list;

                  if (list.length > 0) {
                    setShowcasesList(list);
                  }

                  setLoading(false);
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
        return _ref2.apply(this, arguments);
      };
    }();

    getArtsList();
  }, [userId]);
  return !loading ? showcasesList.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "showcases-list"
  }, showcasesList.map(function (showcase, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "list"
    }, showcase.showcase_arts.slice(0, 3).map(function (showcase_art, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        to: "/public/community/art/".concat(showcase_art.arts.id),
        key: index
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "showcase"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "showcase-thumbnail"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        src: "/storage/app/public/community/".concat(showcase_art.user_id, "/arts/").concat(showcase_art.arts.art)
      }))));
    }), showcase.showcase_arts.length > 3 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/public/community/showcase/".concat(showcase.id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "showcase"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "showcase-thumbnail has-more"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
      className: "fas fa-grip-horizontal"
    }), " ", showcase.showcase_arts.length - 3, "+")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "showcase-title"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "info"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/public/community/showcase/".concat(showcase.id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "title"
    }, showcase.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "subheading"
    }, showcase.subheading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "date"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_3___default.a, {
      format: "H:m:sA D/MM/yyyy"
    }, showcase.created_at))));
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "no-item"
  }, "Tr\u1ED1ng") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    className: "loading",
    src: "https://4.bp.blogspot.com/-a4arXx0z1xQ/VuM0S587YfI/AAAAAAAAAOk/jQf7UpsN93ol-qZYM4CuibUSCG8deiejg/s1600/loading.gif",
    style: {
      width: '50px',
      height: '50px',
      paddingTop: '50px'
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ShowcasesList);

/***/ }),

/***/ "./resources/js/src/components/Community/Body/Management/EditArt/index.js":
/*!********************************************************************************!*\
  !*** ./resources/js/src/components/Community/Body/Management/EditArt/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Upload_UploadSingleArt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Upload/UploadSingleArt */ "./resources/js/src/components/Community/Body/Upload/UploadSingleArt/index.js");



function EditArt() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Upload_UploadSingleArt__WEBPACK_IMPORTED_MODULE_1__["default"], null);
}

/* harmony default export */ __webpack_exports__["default"] = (EditArt);

/***/ }),

/***/ "./resources/js/src/components/Community/Body/Management/index.js":
/*!************************************************************************!*\
  !*** ./resources/js/src/components/Community/Body/Management/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_indiana_drag_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-indiana-drag-scroll */ "./node_modules/react-indiana-drag-scroll/dist/index.es.js");
/* harmony import */ var _Lists_ArtsList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Lists/ArtsList */ "./resources/js/src/components/Community/Body/Lists/ArtsList/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function Management() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      showcasesList = _useState2[0],
      setShowcasesList = _useState2[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.auth.authenticatedUser;
  }),
      userId = _useSelector.id;

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var getArtsList = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/public/api/community/resources/showcases?api_token=".concat(localStorage.getItem('authenticatedUserToken'))).then(function (response) {
                  // console.log(response.data);
                  var showcasesResult = response.data.list;

                  if (showcasesResult.length > 0) {
                    setShowcasesList(showcasesResult);
                  }
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

    getArtsList();
  }, [userId]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "management"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "page-title"
  }, "Qu\u1EA3n l\xFD")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "wrapper"
  }, showcasesList.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_indiana_drag_scroll__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "showcases-list"
  }, showcasesList.map(function (showcase, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/public/community/showcase/".concat(showcase.id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "title"
    }, showcase.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "list"
    }, showcase.showcase_arts.slice(0, 3).map(function (showcase_art, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        to: "/public/community/art/".concat(showcase_art.arts.id),
        key: index
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "showcase"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "showcase-thumbnail"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        src: "/storage/app/public/community/".concat(showcase_art.user_id, "/arts/").concat(showcase_art.arts.art)
      }))));
    }), showcase.showcase_arts.length > 3 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/public/community/showcase/".concat(showcase.id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "showcase"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "showcase-thumbnail has-more"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
      className: "fas fa-image"
    }), " ", showcase.showcase_arts.length - 3, "+")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "showcase-title"
    })))));
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "no-item"
  }, "Tr\u1ED1ng"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Lists_ArtsList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    userId: userId
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Management);

/***/ }),

/***/ "./resources/js/src/components/Community/Body/ShowArt/index.js":
/*!*********************************************************************!*\
  !*** ./resources/js/src/components/Community/Body/ShowArt/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _CustomFields_SelectField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../CustomFields/SelectField */ "./resources/js/src/components/CustomFields/SelectField/index.js");
/* harmony import */ var _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../CustomFields/InputField */ "./resources/js/src/components/CustomFields/InputField/index.js");
/* harmony import */ var _CustomFields_TextareaField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../CustomFields/TextareaField */ "./resources/js/src/components/CustomFields/TextareaField/index.js");
/* harmony import */ var _Validations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../Validations */ "./resources/js/src/components/Validations/index.js");
/* harmony import */ var _store_community_announcer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../store/community/announcer */ "./resources/js/src/store/community/announcer.js");
/* harmony import */ var react_indiana_drag_scroll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-indiana-drag-scroll */ "./node_modules/react-indiana-drag-scroll/dist/index.es.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-moment */ "./node_modules/react-moment/dist/index.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _CommentSection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../CommentSection */ "./resources/js/src/components/Community/Body/CommentSection/index.js");


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
















function ShowArt() {
  // Lấy thông tin người dùng từ Global State.
  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.auth.authenticatedUser;
  }); // etc...

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();

  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useParams"])(),
      id = _useParams.id;

  var editFormRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])(); // Local states.
  // Toggle mở rộng quày liên quan

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      fullShowcasesListToggle = _useState2[0],
      setFullShowcasesListToggle = _useState2[1]; // Toggle sửa tác phẩm


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      editMode = _useState4[0],
      setEditMode = _useState4[1]; // Check nếu thông tin tác phẩm khác nhau


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isDiff = _useState6[0],
      setIsDiff = _useState6[1]; // Chứa tác phẩm


  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      _useState8 = _slicedToArray(_useState7, 2),
      art = _useState8[0],
      setArt = _useState8[1]; // Refresh lại useEffect


  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState10 = _slicedToArray(_useState9, 2),
      refresh = _useState10[0],
      setRefresh = _useState10[1]; // Check nếu đang submit


  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isSubmitting = _useState12[0],
      setIsSubmitting = _useState12[1]; // Danh sách các mục chọn (Select list)


  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    artChannels: [],
    dimensions: [],
    privacies: []
  }),
      _useState14 = _slicedToArray(_useState13, 2),
      optionsList = _useState14[0],
      setOptionsList = _useState14[1]; // Delete Event


  var deleleArt = null; // Thẻ

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState16 = _slicedToArray(_useState15, 2),
      tags = _useState16[0],
      setTags = _useState16[1]; // Debounce nhập Tag


  var tagsDebounce = {
    callback: function callback(value) {
      var tagsList = value.split(',').filter(function (tag) {
        return tag !== '';
      });
      setTags(tagsList);
    },
    ms: 250
  };
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var getArt = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/public/api/community/resources/public/get-art-by-id/".concat(id)).then(function (response) {
                  console.log(response.data.art);
                  var _response$data = response.data,
                      art = _response$data.art,
                      channelSelectList = _response$data.channelSelectList,
                      privacySelectList = _response$data.privacySelectList,
                      dimensionSelectList = _response$data.dimensionSelectList;

                  if (art.tags == null) {
                    art.tags = [];
                  } else {
                    art.tags = art.tags.split(',');
                    setTags(art.tags);
                  }

                  setArt(_objectSpread(_objectSpread({}, art), {}, _defineProperty({
                    title: art.title,
                    caption: Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isNull"])(art.caption) ? '' : art.caption,
                    description: Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isNull"])(art.description) ? '' : art.description,
                    tags: Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isNull"])(art.tags) ? '' : art.tags,
                    dimensional: art.dimension_id.toString(),
                    channel: art.art_channel_id.toString(),
                    privacy: art.privacy_id.toString()
                  }, "tags", art.tags.join(','))));
                  setOptionsList({
                    artChannels: channelSelectList.map(function (option) {
                      return {
                        value: option.id,
                        label: option.channel_name
                      };
                    }),
                    dimensions: dimensionSelectList.map(function (option) {
                      return {
                        value: option.id,
                        label: option.dimensional
                      };
                    }),
                    privacies: privacySelectList.map(function (option) {
                      return {
                        value: option.id,
                        label: option.allowed
                      };
                    })
                  });
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

      return function getArt() {
        return _ref.apply(this, arguments);
      };
    }();

    getArt();
  }, [refresh]);

  var handleEditSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(values) {
      var data, fillable, key, apiToken;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setIsSubmitting(true);
              data = new FormData();
              fillable = ['title', 'caption', 'channel', 'dimensional', 'privacy', 'description', 'tags'];

              for (key in values) {
                if (fillable.includes(key)) data.append(key, values[key]);
              } // data.append('_method','PATCH');


              apiToken = localStorage.getItem('authenticatedUserToken');
              _context2.next = 7;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/public/api/community/resources/arts/edit/".concat(values.id, "?api_token=").concat(apiToken), data).then(function (response) {
                var message = response.data.message;
                dispatch(Object(_store_community_announcer__WEBPACK_IMPORTED_MODULE_11__["setAnnouncementMessage"])({
                  message: message,
                  type: 'success'
                }));
                setRefresh(!refresh);
                setEditMode(false);
              })["catch"](function (error) {
                var message = error.response.data.message;
                dispatch(Object(_store_community_announcer__WEBPACK_IMPORTED_MODULE_11__["setAnnouncementMessage"])({
                  message: message,
                  type: 'danger'
                }));
              }).then(function () {
                setIsSubmitting(false);
              });

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleEditSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleDelete = function handleDelete() {
    deleleArt = setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var apiToken;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              setIsSubmitting(true);
              apiToken = localStorage.getItem('authenticatedUserToken');
              _context3.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/public/api/community/resources/arts/delete/".concat(art.id, "?api_token=").concat(apiToken)).then(function (response) {
                var message = response.data.message;
                dispatch(Object(_store_community_announcer__WEBPACK_IMPORTED_MODULE_11__["setAnnouncementMessage"])({
                  message: message,
                  type: 'success'
                }));
                history.push('/public/community/management');
              })["catch"](function (error) {
                var message = error.response.data.message;
                dispatch(Object(_store_community_announcer__WEBPACK_IMPORTED_MODULE_11__["setAnnouncementMessage"])({
                  message: message,
                  type: 'danger'
                }));
              }).then(function () {
                setIsSubmitting(false);
              });

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })), 3000);
  };

  var handleCancelDelete = function handleCancelDelete() {
    setIsSubmitting(false);
    clearTimeout(deleleArt);
  }; // console.log(user.id,art.user_id)


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "show-art"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, art.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "genres"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "dimensional"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, art.dimensions && art.dimensions.dimensional)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "channel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, art.art_channels && art.art_channels.channel_name)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "art-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "art"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "/storage/app/public/community/".concat(art.user_id, "/arts/").concat(art.art)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "caption"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, art.caption))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, art.description)), !lodash__WEBPACK_IMPORTED_MODULE_4___default.a.isEmpty(art) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "more",
    style: {
      justifyContent: art.tags.length > 0 && art.showcase_arts.length > 0 ? 'space-between' : 'space-evenly'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "artist"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "title"
  }, "T\xC1C GI\u1EA2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/public/community/user/".concat(art.user_id, "/arts")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "profile-picture"
  }, art.users && art.users.profile_picture !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "/storage/app/public/profilePictures/".concat(art.users.profile_picture)
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "fas fa-user"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/public/community/user/".concat(art.user_id, "/arts")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "username"
  }, art.users && art.users.username)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "fullname"
  }, art.users && art.users.firstname + ' ' + art.users.lastname)))), !lodash__WEBPACK_IMPORTED_MODULE_4___default.a.isEmpty(art.showcase_arts) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "showcases-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "title"
  }, "THU\u1ED8C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "list"
  }, art.showcase_arts.slice(0, 3).map(function (showcase_art, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/public/community/showcase/".concat(showcase_art.showcase_id),
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "showcase"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "showcase-thumbnail"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: "/storage/app/public/community/".concat(showcase_art.user_id, "/arts/").concat(showcase_art.arts.art)
    }))));
  }), art.total_showcases > 3 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "showcase",
    onClick: function onClick() {
      return setFullShowcasesListToggle(!fullShowcasesListToggle);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "showcase-thumbnail has-more"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "fas fa-grip-horizontal"
  }), " ", art.total_showcases - 3, "+")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "showcase-title"
  })))), art.tags.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "tags"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "title"
  }, "TH\u1EBA"), art.tags.split(',').map(function (tag, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "",
      key: index
    }, tag);
  }))), fullShowcasesListToggle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_indiana_drag_scroll__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "full-showcases-list"
  }, art.showcase_arts.map(function (_ref4, index) {
    var showcase = _ref4.showcases;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/public/community/showcase/".concat(showcase.id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "title"
    }, showcase.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "list"
    }, showcase.showcase_arts.slice(0, 3).map(function (_ref5, index) {
      var art = _ref5.arts;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        to: "/public/community/art/".concat(art.id),
        key: index
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "showcase"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "showcase-thumbnail"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        src: "/storage/app/public/community/".concat(art.user_id, "/arts/").concat(art.art)
      }))));
    }), showcase.showcase_arts.length > 3 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/public/community/showcase/".concat(showcase.id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "showcase"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "showcase-thumbnail has-more"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
      className: "fas fa-image"
    }), " ", showcase.showcase_arts.length - 3, "+")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "showcase-title"
    })))));
  })), editMode && user.id == art.user_id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "edit-form",
    style: {
      display: isSubmitting && 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["Formik"], {
    initialValues: art,
    validationSchema: _Validations__WEBPACK_IMPORTED_MODULE_10__["EditArtValidation"],
    onSubmit: handleEditSubmit,
    innerRef: editFormRef
  }, function (_ref6) {
    var values = _ref6.values,
        handleSubmit = _ref6.handleSubmit;
    console.log(values, art);

    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isEqual"])(values, art)) {
      setIsDiff(true);
    } else {
      setIsDiff(false);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
      className: "form",
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "split"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "title"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["FastField"], {
      name: "title",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_8__["default"],
      label: "Ti\xEAu \u0111\u1EC1",
      labelClassName: "label",
      className: "text-input",
      disabled: false,
      placeholder: "Nh\u1EADp ti\xEAu \u0111\u1EC1",
      formErrorClass: "form-error textarea-error"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "caption"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["FastField"], {
      name: "caption",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_8__["default"],
      label: "Ch\xFA th\xEDch",
      labelClassName: "label",
      className: "text-input",
      disabled: false,
      placeholder: "Nh\u1EADp ch\xFA th\xEDch",
      formErrorClass: "form-error textarea-error"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "split"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "description"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["FastField"], {
      name: "description",
      component: _CustomFields_TextareaField__WEBPACK_IMPORTED_MODULE_9__["default"],
      label: "M\xF4 t\u1EA3",
      labelClassName: "label",
      className: "text-input",
      disabled: false,
      placeholder: "Nh\u1EADp m\xF4 t\u1EA3 (kh\xF4ng b\u1EAFt bu\u1ED9c)",
      formErrorClass: "form-error textarea-error"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "privacy-and-dimensional"
    }, optionsList.dimensions.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["FastField"], {
      name: "dimensional",
      component: _CustomFields_SelectField__WEBPACK_IMPORTED_MODULE_7__["default"],
      label: "Kh\xF4ng gian",
      labelClassName: "label",
      className: "text-input",
      disabled: false,
      options: optionsList.dimensions
    }), optionsList.artChannels.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["FastField"], {
      name: "channel",
      component: _CustomFields_SelectField__WEBPACK_IMPORTED_MODULE_7__["default"],
      label: "K\xEAnh \u1EA3nh",
      labelClassName: "label",
      className: "text-input",
      disabled: false,
      options: optionsList.artChannels
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "split"
    }, optionsList.privacies.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["FastField"], {
      name: "privacy",
      component: _CustomFields_SelectField__WEBPACK_IMPORTED_MODULE_7__["default"],
      label: "Ai c\xF3 th\u1EC3 xem?",
      labelClassName: "label",
      className: "text-input",
      disabled: false,
      options: optionsList.privacies
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["FastField"], {
      name: "tags",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_8__["default"],
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
    }) : 'Chưa có thẻ nào.')))));
  })), user.id == art.user_id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "action-wrapper"
  }, !isSubmitting ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, isDiff && editMode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "submit",
    onClick: function onClick() {
      editFormRef.current.handleSubmit();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "fas fa-check"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "action",
    onClick: function onClick() {
      return setEditMode(!editMode);
    }
  }, editMode ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "fas fa-times"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "fas fa-edit"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "action",
    onMouseDown: handleDelete,
    onMouseUp: handleCancelDelete,
    onMouseLeave: handleCancelDelete
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "fas fa-trash"
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    className: "loading",
    src: "https://4.bp.blogspot.com/-a4arXx0z1xQ/VuM0S587YfI/AAAAAAAAAOk/jQf7UpsN93ol-qZYM4CuibUSCG8deiejg/s1600/loading.gif"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "upload-date"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "date"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "V\xE0o l\xFAc : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_13___default.a, {
    format: "H:m:sA D/MM/yyyy"
  }, art.created_at))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_CommentSection__WEBPACK_IMPORTED_MODULE_14__["default"], {
    artId: art.id
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (ShowArt);

/***/ }),

/***/ "./resources/js/src/components/Community/Body/Showcase/index.js":
/*!**********************************************************************!*\
  !*** ./resources/js/src/components/Community/Body/Showcase/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_indiana_drag_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-indiana-drag-scroll */ "./node_modules/react-indiana-drag-scroll/dist/index.es.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../CustomFields/InputField */ "./resources/js/src/components/CustomFields/InputField/index.js");
/* harmony import */ var _CustomFields_TextareaField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../CustomFields/TextareaField */ "./resources/js/src/components/CustomFields/TextareaField/index.js");
/* harmony import */ var _CustomFields_SelectField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../CustomFields/SelectField */ "./resources/js/src/components/CustomFields/SelectField/index.js");
/* harmony import */ var _Validations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../Validations */ "./resources/js/src/components/Validations/index.js");
/* harmony import */ var _store_community_announcer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../store/community/announcer */ "./resources/js/src/store/community/announcer.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-moment */ "./node_modules/react-moment/dist/index.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_14__);


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
















function Showcase() {
  // Global state
  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.auth.authenticatedUser;
  }); // etc...

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();

  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useParams"])(),
      id = _useParams.id;

  var editFormRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])(); // Local state
  // Chứa quày (showcase)

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      showcase = _useState2[0],
      setShowcase = _useState2[1]; // Tác giả


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      _useState4 = _slicedToArray(_useState3, 2),
      artist = _useState4[0],
      setArtist = _useState4[1]; // Check nếu thông tin tác phẩm khác nhau


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isDiff = _useState6[0],
      setIsDiff = _useState6[1]; // Danh sách xóa


  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState8 = _slicedToArray(_useState7, 2),
      removalList = _useState8[0],
      setRemovalList = _useState8[1]; // Toggle sửa quày


  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState10 = _slicedToArray(_useState9, 2),
      editMode = _useState10[0],
      setEditMode = _useState10[1]; // Refresh lại useEffect


  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState12 = _slicedToArray(_useState11, 2),
      refresh = _useState12[0],
      setRefresh = _useState12[1]; // Check nếu đang submit


  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState14 = _slicedToArray(_useState13, 2),
      isSubmitting = _useState14[0],
      setIsSubmitting = _useState14[1]; // Danh sách các mục chọn (Select list)


  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    artChannels: [],
    privacies: []
  }),
      _useState16 = _slicedToArray(_useState15, 2),
      optionsList = _useState16[0],
      setOptionsList = _useState16[1]; // Delete event


  var deleteShowcase = null;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var getSpecificShowcase = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/public/api/community/resources/public/get-showcase-by-id/".concat(id)).then(function (response) {
                  console.log(response.data);
                  var _response$data = response.data,
                      showcase = _response$data.showcase,
                      channelSelectList = _response$data.channelSelectList,
                      privacySelectList = _response$data.privacySelectList;
                  setShowcase(_objectSpread(_objectSpread({}, showcase), {}, {
                    title: showcase.title,
                    subheading: Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isNull"])(showcase.subheading) ? '' : showcase.subheading,
                    description: Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isNull"])(showcase.description) ? '' : showcase.description,
                    channel: showcase.art_channel_id.toString(),
                    privacy: showcase.privacy_id.toString()
                  }));
                  setOptionsList({
                    artChannels: channelSelectList.map(function (option) {
                      return {
                        value: option.id,
                        label: option.channel_name
                      };
                    }),
                    privacies: privacySelectList.map(function (option) {
                      return {
                        value: option.id,
                        label: option.allowed
                      };
                    })
                  });
                  setArtist(_objectSpread({}, showcase.users));
                })["catch"](function (error) {
                  // const {data:{message}} = error.response;
                  console.log(error.response);
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getSpecificShowcase() {
        return _ref.apply(this, arguments);
      };
    }();

    getSpecificShowcase();
  }, [refresh]);

  var handleAddItemToRemovalList = function handleAddItemToRemovalList(id) {
    var newList = removalList;

    if (newList.includes(id)) {
      newList = newList.filter(function (item_id) {
        return item_id !== id;
      });
    } else {
      newList.push(id);
    }

    setRemovalList(_toConsumableArray(newList));
  };

  var handleEditSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(values) {
      var data, fillable, key, apiToken;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setIsSubmitting(true);
              data = new FormData();
              fillable = ['title', 'subheading', 'channel', 'privacy', 'description'];

              for (key in values) {
                if (fillable.includes(key)) data.append(key, values[key]);
              }

              data.append('removal_list', removalList); // data.append('_method','PATCH');

              apiToken = localStorage.getItem('authenticatedUserToken');
              _context2.next = 8;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/public/api/community/resources/showcases/edit/".concat(values.id, "?api_token=").concat(apiToken), data).then(function (response) {
                console.log(response);
                var _response$data2 = response.data,
                    message = _response$data2.message,
                    redirect = _response$data2.redirect;
                dispatch(Object(_store_community_announcer__WEBPACK_IMPORTED_MODULE_13__["setAnnouncementMessage"])({
                  message: message,
                  type: 'success'
                }));

                if (redirect) {
                  history.push('/public/community/management');
                }

                setRefresh(!refresh);
                setEditMode(false);
                setRemovalList([]);
              })["catch"](function (error) {
                var message = error.response.data.message;
                dispatch(Object(_store_community_announcer__WEBPACK_IMPORTED_MODULE_13__["setAnnouncementMessage"])({
                  message: message,
                  type: 'danger'
                }));
              }).then(function () {
                setIsSubmitting(false);
              });

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleEditSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleDelete = function handleDelete() {
    deleteShowcase = setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var apiToken;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              setIsSubmitting(true);
              apiToken = localStorage.getItem('authenticatedUserToken');
              _context3.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/public/api/community/resources/showcases/delete/".concat(showcase.id, "?api_token=").concat(apiToken)).then(function (response) {
                var message = response.data.message;
                dispatch(Object(_store_community_announcer__WEBPACK_IMPORTED_MODULE_13__["setAnnouncementMessage"])({
                  message: message,
                  type: 'success'
                }));
                history.push('/public/community/management');
              })["catch"](function (error) {
                var message = error.response.data.message;
                dispatch(Object(_store_community_announcer__WEBPACK_IMPORTED_MODULE_13__["setAnnouncementMessage"])({
                  message: message,
                  type: 'danger'
                }));
              }).then(function () {
                setIsSubmitting(false);
              });

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })), 3000);
  };

  var handleCancelDelete = function handleCancelDelete() {
    setIsSubmitting(false);
    clearTimeout(deleteShowcase);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "showcase"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "background"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, showcase.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "subheading"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, showcase.subheading)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_indiana_drag_scroll__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "arts-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "arts-list"
  }, !lodash__WEBPACK_IMPORTED_MODULE_4___default.a.isEmpty(showcase.showcase_arts) && showcase.showcase_arts.map(function (_ref4, index) {
    var art = _ref4.arts,
        showcase_id = _ref4.id;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "wrapper",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "art"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("overlay", {
        will_be_removed: removalList.includes(art.id)
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "title"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, art.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "caption"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, art.caption)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "description"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, art.description))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: "/storage/app/public/community/1/arts/".concat(art.art)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "genres"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "dimensional"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, art.dimensions && art.dimensions.dimensional)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "channel"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, art.art_channels && art.art_channels.channel_name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "view-more"
    }, editMode ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      className: "delete-btn",
      onClick: function onClick() {
        return handleAddItemToRemovalList(showcase_id);
      }
    }, removalList.includes(showcase_id) ? "BỎ GỠ" : "GỠ") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/public/community/art/".concat(art.id)
    }, "XEM TH\xCAM"))));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, showcase.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "more"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "artist"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "title"
  }, "T\xC1C GI\u1EA2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/public/community/user/".concat(artist.id, "/arts")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "profile-picture"
  }, artist && artist.profile_picture !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "/storage/app/public/profilePictures/".concat(artist.profile_picture)
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "fas fa-user"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/public/community/user/".concat(artist.id, "/arts")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "username"
  }, artist && artist.username)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "fullname"
  }, artist && artist.firstname + ' ' + artist.lastname))))), editMode && user.id == showcase.user_id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "edit-form",
    style: {
      display: isSubmitting && 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_8__["Formik"], {
    initialValues: showcase,
    validationSchema: _Validations__WEBPACK_IMPORTED_MODULE_12__["EditShowcaseValidation"],
    onSubmit: handleEditSubmit,
    innerRef: editFormRef
  }, function (_ref5) {
    var values = _ref5.values,
        handleSubmit = _ref5.handleSubmit;

    // console.log(values,showcase);
    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isEqual"])(values, showcase) || removalList.length > 0) {
      setTimeout(function () {
        return setIsDiff(true);
      }, 0);
    } else {
      setTimeout(function () {
        return setIsDiff(false);
      }, 0);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
      className: "form",
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "split"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_8__["FastField"], {
      name: "title",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_9__["default"],
      label: "Ti\xEAu \u0111\u1EC1",
      labelClassName: "label",
      className: "text-input",
      disabled: false,
      placeholder: "Ti\xEAu \u0111\u1EC1" // formErrorClass="form-error textarea-error"

    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_8__["FastField"], {
      name: "subheading",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_9__["default"],
      label: "Ti\xEAu \u0111\u1EC1 ph\u1EE5",
      labelClassName: "label",
      className: "text-input",
      disabled: false,
      placeholder: "Ti\xEAu \u0111\u1EC1 ph\u1EE5" // formErrorClass="form-error textarea-error"

    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_8__["FastField"], {
      name: "description",
      component: _CustomFields_TextareaField__WEBPACK_IMPORTED_MODULE_10__["default"],
      label: "M\xF4 t\u1EA3",
      labelClassName: "label",
      className: "text-input",
      disabled: false,
      placeholder: "Nh\u1EADp m\xF4 t\u1EA3 (kh\xF4ng b\u1EAFt bu\u1ED9c)" // formErrorClass="form-error textarea-error"

    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "split"
    }, optionsList.privacies.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_8__["FastField"], {
      name: "privacy",
      component: _CustomFields_SelectField__WEBPACK_IMPORTED_MODULE_11__["default"],
      label: "Ai c\xF3 th\u1EC3 xem",
      labelClassName: "label",
      className: "text-input",
      disabled: false,
      options: optionsList.privacies // placeholder="Nhập mô tả (không bắt buộc)"
      // formErrorClass="form-error textarea-error"

    }), optionsList.artChannels.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_8__["FastField"], {
      name: "channel",
      component: _CustomFields_SelectField__WEBPACK_IMPORTED_MODULE_11__["default"],
      label: "K\xEAnh \u1EA3nh",
      labelClassName: "label",
      className: "text-input",
      disabled: false,
      options: optionsList.artChannels // placeholder="Nhập mô tả (không bắt buộc)"
      // formErrorClass="form-error textarea-error"

    })));
  })), user.id == showcase.user_id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "action-wrapper"
  }, !isSubmitting ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, isDiff && editMode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "submit",
    onClick: function onClick() {
      editFormRef.current.handleSubmit();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "fas fa-check"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "action",
    onClick: function onClick() {
      return setEditMode(!editMode);
    }
  }, editMode ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "fas fa-times"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "fas fa-edit"
  })), removalList.length > 0 && editMode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "removal-items-count"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "count"
  }, removalList.length, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "fas fa-trash"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "action",
    onMouseDown: handleDelete,
    onMouseUp: handleCancelDelete,
    onMouseLeave: handleCancelDelete
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "fas fa-trash"
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    className: "loading",
    src: "https://4.bp.blogspot.com/-a4arXx0z1xQ/VuM0S587YfI/AAAAAAAAAOk/jQf7UpsN93ol-qZYM4CuibUSCG8deiejg/s1600/loading.gif"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "upload-date"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "date"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "V\xE0o l\xFAc : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_14___default.a, {
    format: "H:m:sA D/MM/yyyy"
  }, showcase.created_at)))));
}

/* harmony default export */ __webpack_exports__["default"] = (Showcase);

/***/ }),

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

/***/ "./resources/js/src/components/Community/Body/UserProfile/Tabs/Arts/index.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/components/Community/Body/UserProfile/Tabs/Arts/index.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Lists_ArtsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Lists/ArtsList */ "./resources/js/src/components/Community/Body/Lists/ArtsList/index.js");
/* harmony import */ var _Management__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Management */ "./resources/js/src/components/Community/Body/Management/index.js");




function Arts(_ref) {
  var userId = _ref.userId;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "arts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Lists_ArtsList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    userId: userId
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Arts);

/***/ }),

/***/ "./resources/js/src/components/Community/Body/UserProfile/Tabs/Questions/index.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/components/Community/Body/UserProfile/Tabs/Questions/index.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function Questions() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "questions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "questions"));
}

/* harmony default export */ __webpack_exports__["default"] = (Questions);

/***/ }),

/***/ "./resources/js/src/components/Community/Body/UserProfile/Tabs/Showcases/index.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/components/Community/Body/UserProfile/Tabs/Showcases/index.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Lists_ShowcasesList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Lists/ShowcasesList */ "./resources/js/src/components/Community/Body/Lists/ShowcasesList/index.js");



function Showcases(_ref) {
  var userId = _ref.userId;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "showcases"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Lists_ShowcasesList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    userId: userId
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Showcases);

/***/ }),

/***/ "./resources/js/src/components/Community/Body/UserProfile/index.js":
/*!*************************************************************************!*\
  !*** ./resources/js/src/components/Community/Body/UserProfile/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utilities_CurrentPageSlug__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utilities/CurrentPageSlug */ "./resources/js/src/utilities/CurrentPageSlug/index.js");
/* harmony import */ var _Tabs_Arts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Tabs/Arts */ "./resources/js/src/components/Community/Body/UserProfile/Tabs/Arts/index.js");
/* harmony import */ var _Tabs_Showcases__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Tabs/Showcases */ "./resources/js/src/components/Community/Body/UserProfile/Tabs/Showcases/index.js");
/* harmony import */ var _Tabs_Questions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Tabs/Questions */ "./resources/js/src/components/Community/Body/UserProfile/Tabs/Questions/index.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-moment */ "./node_modules/react-moment/dist/index.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_community_announcer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../store/community/announcer */ "./resources/js/src/store/community/announcer.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


 // import { useSelector } from 'react-redux';











function UserProfile() {
  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useParams"])(),
      id = _useParams.id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var getUser = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/public/api/community/resources/public/get-user/".concat(id)).then(function (response) {
                  var user = response.data.user;
                  console.log(response);
                  setUser(user);
                })["catch"](function (error) {
                  dispatch(Object(_store_community_announcer__WEBPACK_IMPORTED_MODULE_11__["setAnnouncementMessage"])({
                    message: error.response.data.message,
                    type: 'danger'
                  }));
                  history.push('/public/community');
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getUser() {
        return _ref.apply(this, arguments);
      };
    }();

    getUser();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "user-profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "profile-picture"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "/storage/app/public/profilePictures/".concat(user.profile_picture),
    onError: function onError(event) {
      event.target.src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "profile-banner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "/storage/app/public/banners/".concat(user.banner),
    onError: function onError(event) {
      event.target.src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "side-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "user-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "fullname"
  }, user.firstname + ' ' + user.lastname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "username"
  }, "@", user.username), user.facebook && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "social-media",
    onClick: function onClick() {
      return window.open("https://www.facebook.com/".concat(user.facebook), '_blank', 'noopener,noreferrer');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    "class": "fab fa-facebook-square"
  }), "fb/", user.facebook), user.twitter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "social-media",
    onClick: function onClick() {
      return window.open("https://www.twitter.com/".concat(user.twitter), '_blank', 'noopener,noreferrer');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    "class": "fab fa-twitter-square"
  }), "tw/", user.twitter), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "bio"
  }, user.bio), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "join-date"
  }, "Tham gia v\xE0o ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_9___default.a, {
    format: "D/M/Y"
  }, user.created_at)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "tabs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/public/community/user/".concat(user.id, "/arts")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('tab-item', {
      selected: Object(_utilities_CurrentPageSlug__WEBPACK_IMPORTED_MODULE_5__["default"])() == 'arts'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "stats"
  }, user.stats && user.stats.artsCount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "fas fa-image"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/public/community/user/".concat(user.id, "/showcases")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('tab-item', {
      selected: Object(_utilities_CurrentPageSlug__WEBPACK_IMPORTED_MODULE_5__["default"])() == 'showcases'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "stats"
  }, user.stats && user.stats.showcasesCount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "fas fa-grip-horizontal"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/public/community/user/".concat(user.id, "/questions")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('tab-item', {
      selected: Object(_utilities_CurrentPageSlug__WEBPACK_IMPORTED_MODULE_5__["default"])() == 'questions'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "stats"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "far fa-question-circle"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "sub-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/public/community/user/".concat(user.id, "/arts"),
    component: function component() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Tabs_Arts__WEBPACK_IMPORTED_MODULE_6__["default"], {
        userId: id
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/public/community/user/".concat(user.id, "/showcases"),
    component: function component() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Tabs_Showcases__WEBPACK_IMPORTED_MODULE_7__["default"], {
        userId: id
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/public/community/user/".concat(user.id, "/questions"),
    component: _Tabs_Questions__WEBPACK_IMPORTED_MODULE_8__["default"]
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

/***/ }),

/***/ "./resources/js/src/components/Community/Body/UserSetting/General/index.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/components/Community/Body/UserSetting/General/index.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function General(props) {
  // const { user } = props;
  // useEffect(() => {
  //     const getGeneralStatistic = async () => {
  //         const apiToken = localStorage.getItem('authenticatedUserToken');
  //         await Axios.get(`/public/api/community/resources/users/${user.id}?api_token=${apiToken}`).then(response => {
  //             console.log(response.data);
  //         }).catch(error => {
  //             console.log(error);
  //         });
  //     } 
  //     getGeneralStatistic();
  // },[]);
  return null;
}

/* harmony default export */ __webpack_exports__["default"] = (General);

/***/ }),

/***/ "./resources/js/src/components/Community/Body/UserSetting/Profile/index.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/components/Community/Body/UserSetting/Profile/index.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-moment */ "./node_modules/react-moment/dist/index.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../store/auth */ "./resources/js/src/store/auth.js");
/* harmony import */ var _store_community_announcer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../store/community/announcer */ "./resources/js/src/store/community/announcer.js");
/* harmony import */ var _CustomFields_FileUploader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../CustomFields/FileUploader */ "./resources/js/src/components/CustomFields/FileUploader/index.js");
/* harmony import */ var _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../CustomFields/InputField */ "./resources/js/src/components/CustomFields/InputField/index.js");
/* harmony import */ var _CustomFields_TextareaField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../CustomFields/TextareaField */ "./resources/js/src/components/CustomFields/TextareaField/index.js");
/* harmony import */ var _Validations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../Validations */ "./resources/js/src/components/Validations/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















function Profile(props) {
  var user = props.user;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  var initialValues = {};

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNull"])(user.profile_picture) ? "/storage/app/public/profilePictures/" + user.profile_picture : ''),
      _useState2 = _slicedToArray(_useState, 2),
      profilePicturePreview = _useState2[0],
      setProfilePicturePreview = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNull"])(user.banner) ? "/storage/app/public/banners/" + user.banner : ''),
      _useState4 = _slicedToArray(_useState3, 2),
      bannerPreview = _useState4[0],
      setBannerPreview = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      deleteProfilePicture = _useState6[0],
      setDeleteProfilePicture = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      deleteBanner = _useState8[0],
      setDeleteBanner = _useState8[1]; // const [profilePicture,setProfilePicture] = useState({});
  // const [banner,setBanner] = useState({});


  var handleSetPreview = function handleSetPreview(file, type) {
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      var url = reader.result;

      if (type == 'profilePicture') {
        setProfilePicturePreview(url);
      } else {
        setBannerPreview(url);
      }
    };
  };

  var handleSetProfilePictureFile = function handleSetProfilePictureFile(file) {
    // setProfilePicture(file);
    handleSetPreview(file, 'profilePicture');
    setDeleteProfilePicture(false);
  };

  var handleSetBannerFile = function handleSetBannerFile(file) {
    // setBanner(file);
    handleSetPreview(file, 'banner');
    setDeleteBanner(false);
  };

  var handleDeletePicture = function handleDeletePicture(type) {
    if (type == 'profilePicture') {
      setDeleteProfilePicture(!deleteProfilePicture);
    } else if (type == 'banner') {
      setDeleteBanner(!deleteBanner);
    } else {
      dispatch(Object(_store_community_announcer__WEBPACK_IMPORTED_MODULE_8__["setAnnouncementMessage"])({
        message: 'Lỗi',
        type: 'danger'
      }));
    }
  };

  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(user)) {
    var allowedKeys = ['firstname', 'lastname', 'username', 'email', 'bio', 'facebook', 'twitter'];

    for (var key in user) {
      if (allowedKeys.includes(key)) {
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNull"])(user[key])) initialValues[key] = '';else initialValues[key] = user[key];
      }
    }

    Object.assign(initialValues, {
      password: '',
      password_confirmation: '',
      profile_picture: null,
      banner: null
    });
  }

  var handleSubmitForm = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values) {
      var apiToken, data, _key;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              apiToken = localStorage.getItem('authenticatedUserToken');
              data = new FormData();

              for (_key in values) {
                data.append(_key, values[_key]);
              }

              data.append('deleteProfilePicture', deleteProfilePicture);
              data.append('deleteBanner', deleteBanner);
              data.append('_method', 'PATCH');
              _context.next = 8;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/public/api/community/resources/users/".concat(user.id, "?api_token=").concat(apiToken), data).then(function (response) {
                var message = response.data.message; // console.log(response);

                dispatch(Object(_store_community_announcer__WEBPACK_IMPORTED_MODULE_8__["setAnnouncementMessage"])({
                  message: message,
                  type: 'success'
                }));
                dispatch(Object(_store_auth__WEBPACK_IMPORTED_MODULE_7__["authRefresh"])());
              })["catch"](function (error) {
                console.log(error.response);
                var message = error.response.data.message;
                dispatch(Object(_store_community_announcer__WEBPACK_IMPORTED_MODULE_8__["setAnnouncementMessage"])({
                  message: message,
                  type: 'danger'
                }));
              });

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmitForm(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "header"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "content"
  }, !Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(initialValues) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: initialValues,
    validationSchema: _Validations__WEBPACK_IMPORTED_MODULE_12__["UserProfileValidation"],
    onSubmit: handleSubmitForm
  }, function (_ref2) {
    var errors = _ref2.errors,
        values = _ref2.values,
        handleSubmit = _ref2.handleSubmit;
    // console.log(values);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", {
      className: "form",
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "split mb1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
      className: "label"
    }, "\u1EA2nh \u0111\u1EA1i di\u1EC7n"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_13___default()('profile-picture mt1', {
        "delete": deleteProfilePicture
      })
    }, profilePicturePreview !== '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "overlay"
    }, !deleteProfilePicture && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "box"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
      htmlFor: "profile_picture"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
      className: "fas fa-camera"
    }))), !Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNull"])(user.profile_picture) && Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNull"])(values.profile_picture) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "box",
      onClick: function onClick() {
        return handleDeletePicture('profilePicture');
      }
    }, deleteProfilePicture ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
      className: "fas fa-times"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
      className: "fas fa-trash-alt"
    }))), !Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(errors.profile_picture) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "image-error"
    }, errors.profile_picture) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
      className: "banner-preview",
      src: "".concat(profilePicturePreview)
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "no-image"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
      htmlFor: "profile_picture"
    }, "B\u1EA5m \u0111\u1EC3 t\u1EA3i \u1EA3nh ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
      className: "fas fa-camera"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["FastField"], {
      name: "avatarFile",
      component: _CustomFields_FileUploader__WEBPACK_IMPORTED_MODULE_9__["default"],
      fieldName: "profile_picture",
      disabled: false,
      setFile: handleSetProfilePictureFile,
      hidden: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
      className: "label"
    }, "\u1EA2nh b\xECa"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_13___default()("banner mt1", {
        "delete": deleteBanner
      })
    }, bannerPreview !== '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "overlay"
    }, !deleteBanner && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "box"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
      htmlFor: "banner"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
      className: "fas fa-camera"
    }))), !Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNull"])(user.banner) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "box",
      onClick: function onClick() {
        return handleDeletePicture('banner');
      }
    }, deleteBanner ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
      className: "fas fa-times"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
      className: "fas fa-trash-alt"
    }))), !Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(errors.banner) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "image-error"
    }, errors.banner) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
      className: "banner-preview",
      src: "".concat(bannerPreview)
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "no-image"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
      htmlFor: "banner"
    }, "B\u1EA5m \u0111\u1EC3 t\u1EA3i \u1EA3nh ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
      className: "fas fa-camera"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["FastField"], {
      name: "bannerFile",
      component: _CustomFields_FileUploader__WEBPACK_IMPORTED_MODULE_9__["default"],
      fieldName: "banner",
      disabled: false,
      setFile: handleSetBannerFile,
      hidden: true
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "split"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "firstname"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["FastField"], {
      name: "firstname",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_10__["default"],
      label: "H\u1ECD",
      labelClassName: "label",
      placeholder: "H\u1ECD c\u1EE7a b\u1EA1n?",
      className: "text-input mb1 mt1",
      type: "text",
      disabled: false
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "lastname"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["FastField"], {
      name: "lastname",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_10__["default"],
      label: "T\xEAn",
      labelClassName: "label",
      placeholder: "T\xEAn c\u1EE7a b\u1EA1n?",
      className: "text-input mb1 mt1",
      type: "text",
      disabled: false
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "split"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "username"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
      className: "label"
    }, "T\xEAn ng\u01B0\u1EDDi d\xF9ng"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "input"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["FastField"], {
      name: "username",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_10__["default"] // label='Tên người dùng'
      // labelClassName='label'
      ,
      placeholder: "T\xEAn c\u1EE7a b\u1EA1n?",
      className: "text-input mb1 mt1",
      type: "text",
      disabled: false
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "email"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["FastField"], {
      name: "email",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_10__["default"],
      label: "Email",
      labelClassName: "label",
      placeholder: "T\xEAn c\u1EE7a b\u1EA1n?",
      className: "text-input mb1 mt1",
      type: "text",
      disabled: false
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "bio"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["FastField"], {
      name: "bio",
      component: _CustomFields_TextareaField__WEBPACK_IMPORTED_MODULE_11__["default"],
      label: "T\xEAn ng\u01B0\u1EDDi d\xF9ng",
      labelClassName: "label",
      placeholder: "Ti\u1EC3u s\u1EED b\u1EA3n th\xE2n.",
      className: "text-input mb1 mt1",
      type: "text",
      disabled: false
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "split"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "facebook"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["FastField"], {
      name: "facebook",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_10__["default"],
      label: "Facebook",
      labelClassName: "label",
      placeholder: "",
      className: "text-input mb1 mt1",
      type: "text",
      disabled: false
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "twitter"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["FastField"], {
      name: "twitter",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_10__["default"],
      label: "Twitter",
      labelClassName: "label",
      placeholder: "",
      className: "text-input mb1 mt1",
      type: "text",
      disabled: false
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "split"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "facebook"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["FastField"], {
      name: "password",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_10__["default"],
      label: "M\u1EADt kh\u1EA9u",
      labelClassName: "label",
      placeholder: "",
      className: "text-input mb1 mt1",
      type: "password",
      disabled: false
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "twitter"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["FastField"], {
      name: "password_confirmation",
      component: _CustomFields_InputField__WEBPACK_IMPORTED_MODULE_10__["default"],
      label: "Nh\u1EADp l\u1EA1i m\u1EADt kh\u1EA9u",
      labelClassName: "label",
      placeholder: "",
      className: "text-input mb1 mt1",
      type: "password",
      disabled: false
    }))), (!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isEqual"])(values, initialValues) || deleteBanner || deleteProfilePicture) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
      type: "submit",
      className: "button danger submit"
    }, "Update"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "last-update"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, "L\u1EA7n thay \u0111\u1ED5i cu\u1ED1i : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_5___default.a, {
      format: 'h:m:sA - D/M/y'
    }, user.updated_at)));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./resources/js/src/components/Community/Body/UserSetting/index.js":
/*!*************************************************************************!*\
  !*** ./resources/js/src/components/Community/Body/UserSetting/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../store/auth */ "./resources/js/src/store/auth.js");
/* harmony import */ var _General__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./General */ "./resources/js/src/components/Community/Body/UserSetting/General/index.js");
/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Profile */ "./resources/js/src/components/Community/Body/UserSetting/Profile/index.js");







function UserSetting() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.auth.authenticatedUser;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_store_auth__WEBPACK_IMPORTED_MODULE_3__["authRefresh"])());
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-setting"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "page-title"
  }, "C\xE0i \u0111\u1EB7t"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navbar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/public/community/user/".concat(user.id, "/arts")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title"
  }, "Trang c\xE1 nh\xE2n"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/public/community/setting/general"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title"
  }, "T\u1ED5ng quan"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/public/community/setting/profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title"
  }, "Th\xF4ng tin c\xE1 nh\xE2n"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/public/community/setting/history"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title"
  }, "L\u1ECBch s\u1EED truy c\u1EADp")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/public/community/setting/general",
    component: function component() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_General__WEBPACK_IMPORTED_MODULE_4__["default"], {
        user: user
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/public/community/setting/profile",
    component: function component() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Profile__WEBPACK_IMPORTED_MODULE_5__["default"], {
        user: user
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/public/community/setting/history",
    component: function component() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "lich su");
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (UserSetting);

/***/ }),

/***/ "./resources/js/src/components/Community/Body/index.js":
/*!*************************************************************!*\
  !*** ./resources/js/src/components/Community/Body/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _utilities_CurrentPageSlug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utilities/CurrentPageSlug */ "./resources/js/src/utilities/CurrentPageSlug/index.js");
/* harmony import */ var _Errors_Warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Errors/Warning */ "./resources/js/src/components/Errors/Warning.js");
/* harmony import */ var _Management__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Management */ "./resources/js/src/components/Community/Body/Management/index.js");
/* harmony import */ var _Management_EditArt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Management/EditArt */ "./resources/js/src/components/Community/Body/Management/EditArt/index.js");
/* harmony import */ var _ShowArt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ShowArt */ "./resources/js/src/components/Community/Body/ShowArt/index.js");
/* harmony import */ var _Showcase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Showcase */ "./resources/js/src/components/Community/Body/Showcase/index.js");
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UserProfile */ "./resources/js/src/components/Community/Body/UserProfile/index.js");
/* harmony import */ var _UserSetting__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UserSetting */ "./resources/js/src/components/Community/Body/UserSetting/index.js");










var CommunityGallery = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ./CommunityGallery */ "./resources/js/src/components/Community/Body/CommunityGallery/index.js"));
});
var Upload = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! ./Upload */ "./resources/js/src/components/Community/Body/Upload/index.js"));
});
var style = {
  bodyHeight: {
    minHeight: 'calc(100vh - 575px)'
  }
};

function Body() {
  var _useRouteMatch = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useRouteMatch"])(),
      url = _useRouteMatch.url;

  var pagesWithCustomHeight = ['management', 'upload', 'upload-single-art'];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body",
    style: pagesWithCustomHeight.includes(Object(_utilities_CurrentPageSlug__WEBPACK_IMPORTED_MODULE_2__["default"])()) ? style.bodyHeight : null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\u0110ang t\u1EA3i...")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: url,
    component: CommunityGallery
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: url + '/upload',
    component: Upload
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: url + '/management',
    component: _Management__WEBPACK_IMPORTED_MODULE_4__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: url + '/art/:id',
    component: _ShowArt__WEBPACK_IMPORTED_MODULE_6__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: url + '/art/edit/:id',
    component: _Management_EditArt__WEBPACK_IMPORTED_MODULE_5__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: url + '/showcase/:id',
    component: _Showcase__WEBPACK_IMPORTED_MODULE_7__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: url + '/user/:id',
    component: _UserProfile__WEBPACK_IMPORTED_MODULE_8__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: url + '/setting',
    component: _UserSetting__WEBPACK_IMPORTED_MODULE_9__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Errors_Warning__WEBPACK_IMPORTED_MODULE_3__["default"], {
    warning: "404",
    description: "Trang n\xE0y kh\xF4ng t\u1ED3n t\u1EA1i"
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Body);

/***/ }),

/***/ "./resources/js/src/components/Community/Footer/index.js":
/*!***************************************************************!*\
  !*** ./resources/js/src/components/Community/Footer/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var storage_path = '/storage/app/public/web/header';
var style = {
  footerBackground: {
    backgroundImage: "linear-gradient(180deg, rgba(216,216,216,1) 0%, rgba(216,216,216,1) 35%, rgba(0,212,255,0) 100%),url('".concat(storage_path, "/background.jpg')")
  }
};

function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer",
    style: style.footerBackground
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./resources/js/src/components/Community/Header/index.js":
/*!***************************************************************!*\
  !*** ./resources/js/src/components/Community/Header/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Navbar */ "./resources/js/src/components/Community/Navbar/index.js");



function Header() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header",
    style: {
      backgroundImage: "url('/storage/app/public/web/header/background.jpg')"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./resources/js/src/components/Community/Navbar/Search/index.js":
/*!**********************************************************************!*\
  !*** ./resources/js/src/components/Community/Navbar/Search/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function Search() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "search",
    onClick: function onClick() {
      return setIsOpen(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-search"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text"
  }, "T\xCCM KI\u1EBEM")), isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "search-overlay"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "unused")));
}

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./resources/js/src/components/Community/Navbar/index.js":
/*!***************************************************************!*\
  !*** ./resources/js/src/components/Community/Navbar/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Auth */ "./resources/js/src/components/Auth/index.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Search */ "./resources/js/src/components/Community/Navbar/Search/index.js");





function Navbar() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navbar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navbar-items"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/public",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "ART"), "ALLEY"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Search__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Auth__WEBPACK_IMPORTED_MODULE_2__["default"], null))));
}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./resources/js/src/components/Community/index.js":
/*!********************************************************!*\
  !*** ./resources/js/src/components/Community/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Announcement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Announcement */ "./resources/js/src/components/Community/Announcement/index.js");
/* harmony import */ var _Body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Body */ "./resources/js/src/components/Community/Body/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./resources/js/src/components/Community/Footer/index.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./resources/js/src/components/Community/Header/index.js");






function Community() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "community"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Announcement__WEBPACK_IMPORTED_MODULE_1__["default"], {
    timeout: 5
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Body__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
}

/* harmony default export */ __webpack_exports__["default"] = (Community);

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
  formErrorClass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  showError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool // ref: PropTypes.object,

};
TextareaField.defaultProps = {
  label: '',
  labelClassName: 'label',
  placeholder: '',
  className: 'text-input',
  disabled: false,
  formErrorClass: 'form-error',
  showError: true // ref:null,

};

function TextareaField(props) {
  var form = props.form,
      field = props.field,
      label = props.label,
      labelClassName = props.labelClassName,
      placeholder = props.placeholder,
      className = props.className,
      disabled = props.disabled,
      formErrorClass = props.formErrorClass,
      showError = props.showError;
  var name = field.name;
  var errors = form.errors,
      touched = form.touched;
  var hasError = errors[name] && touched[name];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: labelClassName
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", _extends({
    name: name,
    id: name
  }, field, {
    className: className,
    placeholder: placeholder,
    disabled: disabled // ref={ref}

  })), hasError && showError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: formErrorClass
  }, errors[name]));
}

/* harmony default export */ __webpack_exports__["default"] = (TextareaField);

/***/ }),

/***/ "./resources/js/src/components/Validations/index.js":
/*!**********************************************************!*\
  !*** ./resources/js/src/components/Validations/index.js ***!
  \**********************************************************/
/*! exports provided: UserProfileValidation, SingleArtValidation, EditArtValidation, ShowcaseValidation, EditShowcaseValidation, CommentValidation, ReplyValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileValidation", function() { return UserProfileValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleArtValidation", function() { return SingleArtValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditArtValidation", function() { return EditArtValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseValidation", function() { return ShowcaseValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditShowcaseValidation", function() { return EditShowcaseValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentValidation", function() { return CommentValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplyValidation", function() { return ReplyValidation; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");

var KILOBYTES = 1024;
var FILE_SIZE = KILOBYTES * 1024;
var SUPPORTED_FORMATS = ["image/jpg", "image/jpeg"];
var UserProfileValidation = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  firstname: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(2, 'Tối thiểu hai ký tự').max(30, 'Tên quá dài').required('Không được bỏ trống'),
  lastname: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(2, 'Tối thiểu hai ký tự').max(30, 'Tên quá dài').required('Không được bỏ trống'),
  username: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(2, 'Tối thiểu hai ký tự').max(30, 'Tên quá dài').required('Không được bỏ trống'),
  email: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().email('Địa chỉ Email không hợp lệ').max(60, 'Địa chỉ Email quá dài').required('Không được bỏ trống'),
  password: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(8, 'Tối thiểu tám ký tự').max(64, 'Mật khẩu quá dài'),
  password_confirmation: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().oneOf([yup__WEBPACK_IMPORTED_MODULE_0__["ref"]('password'), null], 'Mật khẩu không giống nhau'),
  bio: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(2, 'Tối thiểu hai ký tự').max(500, 'Tối đa 500 chữ'),
  twitter: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(2, 'Tối thiểu hai ký tự').max(64, 'Tên quá dài'),
  facebook: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(2, 'Tối thiểu hai ký tự').max(64, 'Tên quá dài'),
  profile_picture: yup__WEBPACK_IMPORTED_MODULE_0__["mixed"]().nullable().test("fileSize", "Kích thước quá lớn, tối đa 1MB", function (value) {
    return value ? value && value.size <= FILE_SIZE : true;
  }).test("fileFormat", "Định dạng cho phép : JPG, JPEG", function (value) {
    return value ? value && SUPPORTED_FORMATS.includes(value.type) : true;
  }),
  banner: yup__WEBPACK_IMPORTED_MODULE_0__["mixed"]().nullable().test("fileSize", "Kích thước quá lớn, tối đa 1MB", function (value) {
    return value ? value && value.size <= FILE_SIZE : true;
  }).test("fileFormat", "Định dạng cho phép : JPG, JPEG", function (value) {
    return value ? value && SUPPORTED_FORMATS.includes(value.type) : true;
  })
});
var SingleArtValidation = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  title: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(2, 'Tối thiểu hai ký tự').max(100, 'Tối đa 100 ký tự').required('Không được bỏ trống'),
  caption: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(2, 'Tối thiểu hai ký tự').max(120, 'Tối đa 120 ký tự'),
  description: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(2, 'Tối thiểu hai ký tự').max(1000, 'Tối đa 1000 ký tự'),
  dimensional: yup__WEBPACK_IMPORTED_MODULE_0__["number"]().required('Không được bỏ trống'),
  privacy: yup__WEBPACK_IMPORTED_MODULE_0__["number"]().required('Không được bỏ trống'),
  channel: yup__WEBPACK_IMPORTED_MODULE_0__["number"]().required('Không được bỏ trống'),
  art: yup__WEBPACK_IMPORTED_MODULE_0__["mixed"]().required("Không có File").test("fileSize", "Kích thước quá lớn, tối đa 1MB", function (value) {
    return value && value.size <= FILE_SIZE;
  }).test("fileFormat", "Định dạng cho phép : JPG, JPEG", function (value) {
    return value && SUPPORTED_FORMATS.includes(value.type);
  }),
  tags: yup__WEBPACK_IMPORTED_MODULE_0__["string"]()
});
var EditArtValidation = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  title: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(2, 'Tối thiểu hai ký tự').max(100, 'Tối đa 100 ký tự').required('Không được bỏ trống'),
  caption: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(2, 'Tối thiểu hai ký tự').max(120, 'Tối đa 120 ký tự').nullable(),
  description: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(2, 'Tối thiểu hai ký tự').max(1000, 'Tối đa 1000 ký tự').nullable(),
  dimensional: yup__WEBPACK_IMPORTED_MODULE_0__["number"]().required('Không được bỏ trống'),
  privacy: yup__WEBPACK_IMPORTED_MODULE_0__["number"]().required('Không được bỏ trống'),
  channel: yup__WEBPACK_IMPORTED_MODULE_0__["number"]().required('Không được bỏ trống'),
  tags: yup__WEBPACK_IMPORTED_MODULE_0__["string"]()
});
var ShowcaseValidation = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  title: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(2, 'Tối thiểu hai ký tự').max(100, 'Tối đa 100 ký tự').required('Không được bỏ trống'),
  subheading: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(2, 'Tối thiểu hai ký tự').max(300, 'Tối đa 300 ký tự'),
  description: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(2, 'Tối thiểu hai ký tự').max(1500, 'Tối đa 1500 ký tự'),
  privacy: yup__WEBPACK_IMPORTED_MODULE_0__["number"]().required('Không được bỏ trống'),
  channel: yup__WEBPACK_IMPORTED_MODULE_0__["number"]().required('Không được bỏ trống')
});
var EditShowcaseValidation = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  title: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(2, 'Tối thiểu hai ký tự').max(100, 'Tối đa 100 ký tự').required('Không được bỏ trống'),
  subheading: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(2, 'Tối thiểu hai ký tự').max(300, 'Tối đa 300 ký tự').nullable(),
  description: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(2, 'Tối thiểu hai ký tự').max(1500, 'Tối đa 1500 ký tự').nullable(),
  privacy: yup__WEBPACK_IMPORTED_MODULE_0__["number"]().required('Không được bỏ trống'),
  channel: yup__WEBPACK_IMPORTED_MODULE_0__["number"]().required('Không được bỏ trống')
});
var CommentValidation = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  comment: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(2, 'Tối thiểu hai ký tự').max(500, 'Tối đa 500 ký tự').required('Không được bỏ trống')
});
var ReplyValidation = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  reply: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(2, 'Tối thiểu hai ký tự').max(500, 'Tối đa 500 ký tự').required('Không được bỏ trống')
});

/***/ })

}]);