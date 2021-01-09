(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/react-indiana-drag-scroll/dist/index.es.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-indiana-drag-scroll/dist/index.es.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

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

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear' 
 * that is a function which will clear the timer to prevent previously scheduled executions. 
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */
function debounce(func, wait, immediate){
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  }
  var debounced = function(){
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  
  debounced.flush = function() {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;
      
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
}
// Adds compatibility for ES modules
debounce.debounce = debounce;

var debounce_1 = debounce;

/**
 * BEM class name factory.
 *
 * @typedef {Function} Bem
 * @param {String|Object} [elementOrMods] Element name or hash object with mods
 * @param {Object} [mods] Hash object with mods
 * @returns {String}
 */

/**
 * Returns BEM class name factory.
 *
 * @param {String} componentName Block name
 * @returns {Bem}
 */
var easyBem = function bem(componentName) {
    return function (elementOrMods, mods) {
        if (!elementOrMods) {
            return componentName;
        }

        var element;

        if (typeof elementOrMods === 'string') {
            element = elementOrMods;
        } else {
            mods = elementOrMods;
        }

        var base = componentName;
        if (element) {
            base += '__' + element;
        }

        return base + (
            mods
                ? Object.keys(mods).reduce(function (result, name) {
                    var value = mods[name];

                    if (value) {
                        result += ' ' + (
                            typeof value === 'boolean'
                                ? (base + '--' + name)
                                : (base + '--' + name + '_' + value)
                        );
                    }

                    return result;
                }, '')
                : ''
        );
    };
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".indiana-scroll-container {\n  overflow: auto;\n}\n  .indiana-scroll-container--dragging > * {\n      pointer-events: none;\n      cursor: -webkit-grab;\n      cursor: grab;\n    }\n  .indiana-scroll-container--hide-scrollbars {\n    overflow: hidden;\n    overflow: -moz-scrollbars-none;\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n  }\n  .indiana-scroll-container--hide-scrollbars::-webkit-scrollbar {\n      display: none !important;\n      height: 0 !important;\n      width: 0 !important;\n      background: transparent !important;\n      -webkit-appearance: none !important;\n    }\n  .indiana-scroll-container--native-scroll {\n    overflow: auto;\n  }\n\n.indiana-dragging {\n  cursor: -webkit-grab !important;\n  cursor: grab !important;\n}\n";
styleInject(css);

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var cn = easyBem('indiana-scroll-container');

var SCROLL_END_DEBOUNCE = 300;

var ScrollContainer = function (_PureComponent) {
  inherits(ScrollContainer, _PureComponent);

  function ScrollContainer(props) {
    classCallCheck(this, ScrollContainer);

    var _this = possibleConstructorReturn(this, (ScrollContainer.__proto__ || Object.getPrototypeOf(ScrollContainer)).call(this, props));

    _this.onEndScroll = function () {
      _this.scrolling = false;
      if (!_this.pressed && _this.started) {
        _this.processEnd();
      }
    };

    _this.onScroll = function (e) {
      var container = _this.container.current;
      // Ignore the internal scrolls
      if (container.scrollLeft !== _this.scrollLeft || container.scrollTop !== _this.scrollTop) {
        _this.scrolling = true;
        _this.processScroll(e);
        _this.onEndScroll();
      }
    };

    _this.onTouchStart = function (e) {
      var nativeMobileScroll = _this.props.nativeMobileScroll;

      if (_this.isDraggable(e.target)) {
        if (nativeMobileScroll && _this.scrolling) {
          _this.pressed = true;
        } else {
          var touch = e.touches[0];
          _this.processClick(e, touch.clientX, touch.clientY);
          if (!nativeMobileScroll && _this.props.stopPropagation) {
            e.stopPropagation();
          }
        }
      }
    };

    _this.onTouchEnd = function (e) {
      var nativeMobileScroll = _this.props.nativeMobileScroll;

      if (_this.pressed) {
        if (_this.started && (!_this.scrolling || !nativeMobileScroll)) {
          _this.processEnd();
        } else {
          _this.pressed = false;
        }
        _this.forceUpdate();
      }
    };

    _this.onTouchMove = function (e) {
      var nativeMobileScroll = _this.props.nativeMobileScroll;

      if (_this.pressed && (!nativeMobileScroll || !_this.isMobile)) {
        var touch = e.touches[0];
        if (touch) {
          _this.processMove(e, touch.clientX, touch.clientY);
        }
        e.preventDefault();
        if (_this.props.stopPropagation) {
          e.stopPropagation();
        }
      }
    };

    _this.onMouseDown = function (e) {
      if (_this.isDraggable(e.target) && _this.isScrollable()) {
        _this.processClick(e, e.clientX, e.clientY);
        e.preventDefault();
        if (_this.props.stopPropagation) {
          e.stopPropagation();
        }
      }
    };

    _this.onMouseMove = function (e) {
      if (_this.pressed) {
        _this.processMove(e, e.clientX, e.clientY);
        e.preventDefault();
        if (_this.props.stopPropagation) {
          e.stopPropagation();
        }
      }
    };

    _this.onMouseUp = function (e) {
      if (_this.pressed) {
        if (_this.started) {
          _this.processEnd();
        } else {
          _this.pressed = false;
          _this.forceUpdate();
          if (_this.props.onClick) {
            _this.props.onClick(e);
          }
        }
        e.preventDefault();
        if (_this.props.stopPropagation) {
          e.stopPropagation();
        }
      }
    };

    _this.container = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.onEndScroll = debounce_1(_this.onEndScroll, SCROLL_END_DEBOUNCE);

    // Is container scrolling now (for example by inertia)
    _this.scrolling = false;
    // Is scrolling started
    _this.started = false;
    // Is touch active or mouse pressed down
    _this.pressed = false;

    // Bind callbacks
    _this.getRef = _this.getRef.bind(_this);
    return _this;
  }

  createClass(ScrollContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var nativeMobileScroll = this.props.nativeMobileScroll;

      var container = this.container.current;

      window.addEventListener('mouseup', this.onMouseUp);
      window.addEventListener('mousemove', this.onMouseMove);
      window.addEventListener('touchmove', this.onTouchMove, { passive: false });
      window.addEventListener('touchend', this.onTouchEnd);

      // due to https://github.com/facebook/react/issues/9809#issuecomment-414072263
      container.addEventListener('touchstart', this.onTouchStart, { passive: false });
      container.addEventListener('mousedown', this.onMouseDown, { passive: false });

      if (nativeMobileScroll) {
        // We should check if it's the mobile device after page was loaded
        // to prevent breaking SSR
        this.isMobile = this.isMobileDevice();

        // If it's the mobile device, we should rerender to change styles
        if (this.isMobile) {
          this.forceUpdate();
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('mouseup', this.onMouseUp);
      window.removeEventListener('mousemove', this.onMouseMove);
      window.removeEventListener('touchmove', this.onTouchMove);
      window.removeEventListener('touchend', this.onTouchEnd);
    }
  }, {
    key: 'getElement',
    value: function getElement() {
      return this.container.current;
    }
  }, {
    key: 'isMobileDevice',
    value: function isMobileDevice() {
      return typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1;
    }
  }, {
    key: 'isDraggable',
    value: function isDraggable(target) {
      var ignoreElements = this.props.ignoreElements;
      if (ignoreElements) {
        var closest = target.closest(ignoreElements);
        return closest === null || closest.contains(this.getElement());
      } else {
        return true;
      }
    }
  }, {
    key: 'isScrollable',
    value: function isScrollable() {
      var container = this.container.current;
      return container && (container.scrollWidth > container.clientWidth || container.scrollHeight > container.clientHeight);
    }

    // Simulate 'onEndScroll' event that fires when scrolling is stopped

  }, {
    key: 'processClick',
    value: function processClick(e, clientX, clientY) {
      var container = this.container.current;
      this.scrollLeft = container.scrollLeft;
      this.scrollTop = container.scrollTop;
      this.clientX = clientX;
      this.clientY = clientY;
      this.pressed = true;
    }
  }, {
    key: 'processStart',
    value: function processStart(e) {
      var changeCursor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var onStartScroll = this.props.onStartScroll;

      var container = this.container.current;

      this.started = true;

      // Add the class to change displayed cursor
      if (changeCursor) {
        document.body.classList.add('indiana-dragging');
      }

      if (onStartScroll) {
        onStartScroll(container.scrollLeft, container.scrollTop, container.scrollWidth, container.scrollHeight);
      }
      this.forceUpdate();
    }

    // Process native scroll (scrollbar, mobile scroll)

  }, {
    key: 'processScroll',
    value: function processScroll(e) {
      if (this.started) {
        var onScroll = this.props.onScroll;

        var container = this.container.current;
        if (onScroll) {
          onScroll(container.scrollLeft, container.scrollTop, container.scrollWidth, container.scrollHeight);
        }
      } else {
        this.processStart(e, false);
      }
    }

    // Process non-native scroll

  }, {
    key: 'processMove',
    value: function processMove(e, newClientX, newClientY) {
      var _props = this.props,
          horizontal = _props.horizontal,
          vertical = _props.vertical,
          activationDistance = _props.activationDistance,
          onScroll = _props.onScroll;

      var container = this.container.current;

      if (!this.started) {
        if (horizontal && Math.abs(newClientX - this.clientX) > activationDistance || vertical && Math.abs(newClientY - this.clientY) > activationDistance) {
          this.clientX = newClientX;
          this.clientY = newClientY;
          this.processStart();
        }
      } else {
        if (horizontal) {
          container.scrollLeft -= newClientX - this.clientX;
        }
        if (vertical) {
          container.scrollTop -= newClientY - this.clientY;
        }
        if (onScroll) {
          onScroll(container.scrollLeft, container.scrollTop, container.scrollWidth, container.scrollHeight);
        }
        this.clientX = newClientX;
        this.clientY = newClientY;
        this.scrollLeft = container.scrollLeft;
        this.scrollTop = container.scrollTop;
      }
    }
  }, {
    key: 'processEnd',
    value: function processEnd(e) {
      var onEndScroll = this.props.onEndScroll;

      var container = this.container.current;

      this.pressed = false;
      this.started = false;
      this.scrolling = false;

      if (container && onEndScroll) {
        onEndScroll(container.scrollLeft, container.scrollTop, container.scrollWidth, container.scrollHeight);
      }
      document.body.classList.remove('indiana-dragging');
      this.forceUpdate();
    }
  }, {
    key: 'getRef',
    value: function getRef(el) {
      [this.container, this.props.innerRef].forEach(function (ref) {
        if (ref) {
          if (typeof ref === 'function') {
            ref(el);
          } else {
            ref.current = el;
          }
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          className = _props2.className,
          style = _props2.style,
          hideScrollbars = _props2.hideScrollbars,
          Component = _props2.component;


      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        Component,
        {
          className: classnames(className, cn({
            'dragging': this.pressed,
            'hide-scrollbars': hideScrollbars,
            'native-scroll': this.isMobile
          })),
          style: style,
          ref: this.getRef,
          onScroll: this.onScroll
        },
        children
      );
    }
  }]);
  return ScrollContainer;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

ScrollContainer.propTypes = {
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  horizontal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  hideScrollbars: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  activationDistance: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  onStartScroll: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onScroll: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onEndScroll: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  ignoreElements: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  nativeMobileScroll: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  stopPropagation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({ current: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any })])
};
ScrollContainer.defaultProps = {
  nativeMobileScroll: true,
  hideScrollbars: true,
  activationDistance: 10,
  vertical: true,
  horizontal: true,
  stopPropagation: false,
  style: {},
  component: 'div'
};

/* harmony default export */ __webpack_exports__["default"] = (ScrollContainer);
//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./node_modules/react-infinite-scroll-component/dist/index.es.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-infinite-scroll-component/dist/index.es.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  {Number}    delay          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}   [noTrailing]   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
 *                                    the internal counter is reset)
 * @param  {Function}  callback       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param  {Boolean}   [debounceMode] If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
 *                                    schedule `callback` to execute after `delay` ms.
 *
 * @return {Function}  A new, throttled, function.
 */
function throttle (delay, noTrailing, callback, debounceMode) {
  /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */
  var timeoutID;
  var cancelled = false; // Keep track of the last time `callback` was executed.

  var lastExec = 0; // Function to clear existing timeout

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  } // Function to cancel next exec


  function cancel() {
    clearExistingTimeout();
    cancelled = true;
  } // `noTrailing` defaults to falsy.


  if (typeof noTrailing !== 'boolean') {
    debounceMode = callback;
    callback = noTrailing;
    noTrailing = undefined;
  }
  /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */


  function wrapper() {
    var self = this;
    var elapsed = Date.now() - lastExec;
    var args = arguments;

    if (cancelled) {
      return;
    } // Execute `callback` and update the `lastExec` timestamp.


    function exec() {
      lastExec = Date.now();
      callback.apply(self, args);
    }
    /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */


    function clear() {
      timeoutID = undefined;
    }

    if (debounceMode && !timeoutID) {
      /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`.
       */
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      /*
       * In throttle mode, if `delay` time has been exceeded, execute
       * `callback`.
       */
      exec();
    } else if (noTrailing !== true) {
      /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  wrapper.cancel = cancel; // Return the wrapper function.

  return wrapper;
}

var ThresholdUnits = {
    Pixel: 'Pixel',
    Percent: 'Percent',
};
var defaultThreshold = {
    unit: ThresholdUnits.Percent,
    value: 0.8,
};
function parseThreshold(scrollThreshold) {
    if (typeof scrollThreshold === 'number') {
        return {
            unit: ThresholdUnits.Percent,
            value: scrollThreshold * 100,
        };
    }
    if (typeof scrollThreshold === 'string') {
        if (scrollThreshold.match(/^(\d*(\.\d+)?)px$/)) {
            return {
                unit: ThresholdUnits.Pixel,
                value: parseFloat(scrollThreshold),
            };
        }
        if (scrollThreshold.match(/^(\d*(\.\d+)?)%$/)) {
            return {
                unit: ThresholdUnits.Percent,
                value: parseFloat(scrollThreshold),
            };
        }
        console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...');
        return defaultThreshold;
    }
    console.warn('scrollThreshold should be string or number');
    return defaultThreshold;
}

var InfiniteScroll = /** @class */ (function (_super) {
    __extends(InfiniteScroll, _super);
    function InfiniteScroll(props) {
        var _this = _super.call(this, props) || this;
        _this.lastScrollTop = 0;
        _this.actionTriggered = false;
        // variables to keep track of pull down behaviour
        _this.startY = 0;
        _this.currentY = 0;
        _this.dragging = false;
        // will be populated in componentDidMount
        // based on the height of the pull down element
        _this.maxPullDownDistance = 0;
        _this.getScrollableTarget = function () {
            if (_this.props.scrollableTarget instanceof HTMLElement)
                return _this.props.scrollableTarget;
            if (typeof _this.props.scrollableTarget === 'string') {
                return document.getElementById(_this.props.scrollableTarget);
            }
            if (_this.props.scrollableTarget === null) {
                console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      ");
            }
            return null;
        };
        _this.onStart = function (evt) {
            if (_this.lastScrollTop)
                return;
            _this.dragging = true;
            if (evt instanceof MouseEvent) {
                _this.startY = evt.pageY;
            }
            else if (evt instanceof TouchEvent) {
                _this.startY = evt.touches[0].pageY;
            }
            _this.currentY = _this.startY;
            if (_this._infScroll) {
                _this._infScroll.style.willChange = 'transform';
                _this._infScroll.style.transition = "transform 0.2s cubic-bezier(0,0,0.31,1)";
            }
        };
        _this.onMove = function (evt) {
            if (!_this.dragging)
                return;
            if (evt instanceof MouseEvent) {
                _this.currentY = evt.pageY;
            }
            else if (evt instanceof TouchEvent) {
                _this.currentY = evt.touches[0].pageY;
            }
            // user is scrolling down to up
            if (_this.currentY < _this.startY)
                return;
            if (_this.currentY - _this.startY >=
                Number(_this.props.pullDownToRefreshThreshold)) {
                _this.setState({
                    pullToRefreshThresholdBreached: true,
                });
            }
            // so you can drag upto 1.5 times of the maxPullDownDistance
            if (_this.currentY - _this.startY > _this.maxPullDownDistance * 1.5)
                return;
            if (_this._infScroll) {
                _this._infScroll.style.overflow = 'visible';
                _this._infScroll.style.transform = "translate3d(0px, " + (_this.currentY -
                    _this.startY) + "px, 0px)";
            }
        };
        _this.onEnd = function () {
            _this.startY = 0;
            _this.currentY = 0;
            _this.dragging = false;
            if (_this.state.pullToRefreshThresholdBreached) {
                _this.props.refreshFunction && _this.props.refreshFunction();
                _this.setState({
                    pullToRefreshThresholdBreached: false,
                });
            }
            requestAnimationFrame(function () {
                // this._infScroll
                if (_this._infScroll) {
                    _this._infScroll.style.overflow = 'auto';
                    _this._infScroll.style.transform = 'none';
                    _this._infScroll.style.willChange = 'none';
                }
            });
        };
        _this.onScrollListener = function (event) {
            if (typeof _this.props.onScroll === 'function') {
                // Execute this callback in next tick so that it does not affect the
                // functionality of the library.
                setTimeout(function () { return _this.props.onScroll && _this.props.onScroll(event); }, 0);
            }
            var target = _this.props.height || _this._scrollableNode
                ? event.target
                : document.documentElement.scrollTop
                    ? document.documentElement
                    : document.body;
            // return immediately if the action has already been triggered,
            // prevents multiple triggers.
            if (_this.actionTriggered)
                return;
            var atBottom = _this.props.inverse
                ? _this.isElementAtTop(target, _this.props.scrollThreshold)
                : _this.isElementAtBottom(target, _this.props.scrollThreshold);
            // call the `next` function in the props to trigger the next data fetch
            if (atBottom && _this.props.hasMore) {
                _this.actionTriggered = true;
                _this.setState({ showLoader: true });
                _this.props.next && _this.props.next();
            }
            _this.lastScrollTop = target.scrollTop;
        };
        _this.state = {
            showLoader: false,
            pullToRefreshThresholdBreached: false,
        };
        _this.throttledOnScrollListener = throttle(150, _this.onScrollListener).bind(_this);
        _this.onStart = _this.onStart.bind(_this);
        _this.onMove = _this.onMove.bind(_this);
        _this.onEnd = _this.onEnd.bind(_this);
        return _this;
    }
    InfiniteScroll.prototype.componentDidMount = function () {
        if (typeof this.props.dataLength === 'undefined') {
            throw new Error("mandatory prop \"dataLength\" is missing. The prop is needed" +
                " when loading more content. Check README.md for usage");
        }
        this._scrollableNode = this.getScrollableTarget();
        this.el = this.props.height
            ? this._infScroll
            : this._scrollableNode || window;
        if (this.el) {
            this.el.addEventListener('scroll', this
                .throttledOnScrollListener);
        }
        if (typeof this.props.initialScrollY === 'number' &&
            this.el &&
            this.el instanceof HTMLElement &&
            this.el.scrollHeight > this.props.initialScrollY) {
            this.el.scrollTo(0, this.props.initialScrollY);
        }
        if (this.props.pullDownToRefresh && this.el) {
            this.el.addEventListener('touchstart', this.onStart);
            this.el.addEventListener('touchmove', this.onMove);
            this.el.addEventListener('touchend', this.onEnd);
            this.el.addEventListener('mousedown', this.onStart);
            this.el.addEventListener('mousemove', this.onMove);
            this.el.addEventListener('mouseup', this.onEnd);
            // get BCR of pullDown element to position it above
            this.maxPullDownDistance =
                (this._pullDown &&
                    this._pullDown.firstChild &&
                    this._pullDown.firstChild.getBoundingClientRect()
                        .height) ||
                    0;
            this.forceUpdate();
            if (typeof this.props.refreshFunction !== 'function') {
                throw new Error("Mandatory prop \"refreshFunction\" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage'");
            }
        }
    };
    InfiniteScroll.prototype.componentWillUnmount = function () {
        if (this.el) {
            this.el.removeEventListener('scroll', this
                .throttledOnScrollListener);
            if (this.props.pullDownToRefresh) {
                this.el.removeEventListener('touchstart', this.onStart);
                this.el.removeEventListener('touchmove', this.onMove);
                this.el.removeEventListener('touchend', this.onEnd);
                this.el.removeEventListener('mousedown', this.onStart);
                this.el.removeEventListener('mousemove', this.onMove);
                this.el.removeEventListener('mouseup', this.onEnd);
            }
        }
    };
    InfiniteScroll.prototype.UNSAFE_componentWillReceiveProps = function (props) {
        // do nothing when dataLength is unchanged
        if (this.props.dataLength === props.dataLength)
            return;
        this.actionTriggered = false;
        // update state when new data was sent in
        this.setState({
            showLoader: false,
        });
    };
    InfiniteScroll.prototype.isElementAtTop = function (target, scrollThreshold) {
        if (scrollThreshold === void 0) { scrollThreshold = 0.8; }
        var clientHeight = target === document.body || target === document.documentElement
            ? window.screen.availHeight
            : target.clientHeight;
        var threshold = parseThreshold(scrollThreshold);
        if (threshold.unit === ThresholdUnits.Pixel) {
            return (target.scrollTop <=
                threshold.value + clientHeight - target.scrollHeight + 1 ||
                target.scrollTop === 0);
        }
        return (target.scrollTop <=
            threshold.value / 100 + clientHeight - target.scrollHeight + 1 ||
            target.scrollTop === 0);
    };
    InfiniteScroll.prototype.isElementAtBottom = function (target, scrollThreshold) {
        if (scrollThreshold === void 0) { scrollThreshold = 0.8; }
        var clientHeight = target === document.body || target === document.documentElement
            ? window.screen.availHeight
            : target.clientHeight;
        var threshold = parseThreshold(scrollThreshold);
        if (threshold.unit === ThresholdUnits.Pixel) {
            return (target.scrollTop + clientHeight >= target.scrollHeight - threshold.value);
        }
        return (target.scrollTop + clientHeight >=
            (threshold.value / 100) * target.scrollHeight);
    };
    InfiniteScroll.prototype.render = function () {
        var _this = this;
        var style = __assign({ height: this.props.height || 'auto', overflow: 'auto', WebkitOverflowScrolling: 'touch' }, this.props.style);
        var hasChildren = this.props.hasChildren ||
            !!(this.props.children &&
                this.props.children instanceof Array &&
                this.props.children.length);
        // because heighted infiniteScroll visualy breaks
        // on drag down as overflow becomes visible
        var outerDivStyle = this.props.pullDownToRefresh && this.props.height
            ? { overflow: 'auto' }
            : {};
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: outerDivStyle, className: "infinite-scroll-component__outerdiv" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "infinite-scroll-component " + (this.props.className || ''), ref: function (infScroll) { return (_this._infScroll = infScroll); }, style: style },
                this.props.pullDownToRefresh && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { position: 'relative' }, ref: function (pullDown) { return (_this._pullDown = pullDown); } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: {
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: -1 * this.maxPullDownDistance,
                        } }, this.state.pullToRefreshThresholdBreached
                        ? this.props.releaseToRefreshContent
                        : this.props.pullDownToRefreshContent))),
                this.props.children,
                !this.state.showLoader &&
                    !hasChildren &&
                    this.props.hasMore &&
                    this.props.loader,
                this.state.showLoader && this.props.hasMore && this.props.loader,
                !this.props.hasMore && this.props.endMessage)));
    };
    return InfiniteScroll;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

/* harmony default export */ __webpack_exports__["default"] = (InfiniteScroll);
//# sourceMappingURL=index.es.js.map


/***/ })

}]);