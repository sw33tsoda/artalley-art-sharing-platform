(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./resources/js/src/components/Community/Body/CommunityGallery/index.js":
/*!******************************************************************************!*\
  !*** ./resources/js/src/components/Community/Body/CommunityGallery/index.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_owl_carousel2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-owl-carousel2 */ "./node_modules/react-owl-carousel2/lib/OwlCarousel.js");
/* harmony import */ var react_owl_carousel2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_owl_carousel2__WEBPACK_IMPORTED_MODULE_1__);

 // import 'react-owl-carousel2/style.css'; //Allows for server-side rendering.

var channels = [{
  thumbnail_src: 'https://img4.goodfon.com/wallpaper/nbig/a/13/the-futuristic-art-alex-ichim-letatelnyi-apparat-concept-art.jpg',
  name: 'Digital Art'
}, {
  thumbnail_src: 'https://i.pinimg.com/originals/34/dc/a0/34dca06b5464af0bcff56a0a1896552e.jpg',
  name: 'Concept Art'
}, {
  thumbnail_src: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/462d1118254995.562c673f0b1c0.jpg',
  name: 'Architechture Visualization'
}, {
  thumbnail_src: 'https://i.ytimg.com/vi/kTLcpCwa7cg/maxresdefault.jpg',
  name: 'Character Animation'
}, {
  thumbnail_src: 'https://i.ytimg.com/vi/ZkBxLy1kQQc/maxresdefault.jpg',
  name: 'Sketches'
}, {
  thumbnail_src: 'https://d2y5iqmwzjm4lk.cloudfront.net/wp-content/uploads/2018/07/Horizon-Key-Art-BaseGame.jpg',
  name: 'Game Art'
}, {
  thumbnail_src: 'https://cdn.mos.cms.futurecdn.net/2nUGsD2QnvC9BzM8geN48M-1200-80.jpg',
  name: 'Illustration'
}, {
  thumbnail_src: 'https://images.squarespace-cdn.com/content/v1/5a173f16ace86416b07c25f1/1513939530902-DILPHAAJ9F0DI627449M/ke17ZwdGBToddI8pDm48kK0QKSDttGV1ap9dyeIseHF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mxU0godxi02JM9uVemPLqw3ZQRv6tY2V6nZIOWGhJ3qaH6uCpMgOc4rPl-G2eiFCQ/fantasy+album+cover6+-+in+wide+format.jpg?format=1500w',
  name: 'Fantasy'
}, {
  thumbnail_src: 'https://dvqlxo2m2q99q.cloudfront.net/000_clients/439447/page/439447sVAxW8rO.png',
  name: 'Character Design'
}, {
  thumbnail_src: 'https://img4.goodfon.com/wallpaper/nbig/a/13/the-futuristic-art-alex-ichim-letatelnyi-apparat-concept-art.jpg',
  name: 'Digital Art'
}, {
  thumbnail_src: 'https://i.pinimg.com/originals/34/dc/a0/34dca06b5464af0bcff56a0a1896552e.jpg',
  name: 'Concept Art'
}, {
  thumbnail_src: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/462d1118254995.562c673f0b1c0.jpg',
  name: 'Architechture Visualization'
}, {
  thumbnail_src: 'https://i.ytimg.com/vi/kTLcpCwa7cg/maxresdefault.jpg',
  name: 'Character Animation'
}, {
  thumbnail_src: 'https://i.ytimg.com/vi/ZkBxLy1kQQc/maxresdefault.jpg',
  name: 'Sketches'
}, {
  thumbnail_src: 'https://d2y5iqmwzjm4lk.cloudfront.net/wp-content/uploads/2018/07/Horizon-Key-Art-BaseGame.jpg',
  name: 'Game Art'
}, {
  thumbnail_src: 'https://cdn.mos.cms.futurecdn.net/2nUGsD2QnvC9BzM8geN48M-1200-80.jpg',
  name: 'Illustration'
}, {
  thumbnail_src: 'https://images.squarespace-cdn.com/content/v1/5a173f16ace86416b07c25f1/1513939530902-DILPHAAJ9F0DI627449M/ke17ZwdGBToddI8pDm48kK0QKSDttGV1ap9dyeIseHF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mxU0godxi02JM9uVemPLqw3ZQRv6tY2V6nZIOWGhJ3qaH6uCpMgOc4rPl-G2eiFCQ/fantasy+album+cover6+-+in+wide+format.jpg?format=1500w',
  name: 'Fantasy'
}, {
  thumbnail_src: 'https://dvqlxo2m2q99q.cloudfront.net/000_clients/439447/page/439447sVAxW8rO.png',
  name: 'Character Design'
}];
var carouselOption = {
  items: channels.length,
  nav: true,
  rewind: true,
  autoplay: true
};

function CommunityGallery() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "community-gallery"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_owl_carousel2__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "channels"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list"
  }, channels.map(function (channel, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "item",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: channel.thumbnail_src
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "overlay"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, channel.name)));
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (CommunityGallery);

/***/ })

}]);