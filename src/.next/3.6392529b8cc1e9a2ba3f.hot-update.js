webpackHotUpdate(3,{

/***/ "../node_modules/react-lazyload/lib/decorator.js":
false,

/***/ "../node_modules/react-lazyload/lib/index.js":
false,

/***/ "../node_modules/react-lazyload/lib/utils/debounce.js":
false,

/***/ "../node_modules/react-lazyload/lib/utils/event.js":
false,

/***/ "../node_modules/react-lazyload/lib/utils/scrollParent.js":
false,

/***/ "../node_modules/react-lazyload/lib/utils/throttle.js":
false,

/***/ "./components/MGMFooter/MGMFooter.component.js":
false,

/***/ "./components/MGMFooter/MGMFooter.scss":
false,

/***/ "./components/MGMFooter/PropertiesGrid/PropertiesGrid.component.js":
false,

/***/ "./components/MGMFooter/PropertiesGridRow/PropertiesGridRow.component.js":
false,

/***/ "./components/MGMFooter/PropertiesGridRow/PropertiesGridRow.scss":
false,

/***/ "./components/PropertyFooter/PropertyFooter.component.js":
false,

/***/ "./components/PropertyFooter/PropertyFooter.scss":
false,

/***/ "./components/PropertyFooter/PropertyFooterAwards/PropertyFooterAwards.component.js":
false,

/***/ "./components/PropertyFooter/PropertyFooterAwards/PropertyFooterAwards.scss":
false,

/***/ "./components/PropertyFooter/PropertyFooterContact/PropertyFooterContact.component.js":
false,

/***/ "./components/PropertyFooter/PropertyFooterContact/PropertyFooterContact.scss":
false,

/***/ "./components/PropertyFooter/PropertyFooterLink/PropertyFooterLink.component.js":
false,

/***/ "./components/PropertyFooter/PropertyFooterLink/PropertyFooterLink.scss":
false,

/***/ "./components/PropertyFooter/PropertyFooterLinksGroup/PropertyFooterLinksGroup.component.js":
false,

/***/ "./components/PropertyFooter/PropertyFooterLinksGroup/PropertyFooterLinksGroup.scss":
false,

/***/ "./components/PropertyFooter/PropertyFooterMobileLabel/PropertyFooterMobileLabel.component.js":
false,

/***/ "./components/PropertyFooter/PropertyFooterMobileLabel/PropertyFooterMobileLabel.scss":
false,

/***/ "./components/layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module, __webpack_provided_window_dot_jQuery) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_head__ = __webpack_require__("../node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("../node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_base_dmp_scss__ = __webpack_require__("./styles/base.dmp.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_base_dmp_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_base_dmp_scss__);


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var _jsxFileName = 'C:\\Users\\criabell\\Desktop\\next-react-contentful\\src\\components\\layout.js';

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/* eslint-disable no-undef, no-unused-vars */





__WEBPACK_IMPORTED_MODULE_2_next_router___default.a.onRouteChangeStart = function (url) {
  NProgress.start();
};
__WEBPACK_IMPORTED_MODULE_2_next_router___default.a.onRouteChangeComplete = function () {
  return NProgress.done();
};
__WEBPACK_IMPORTED_MODULE_2_next_router___default.a.onRouteChangeError = function () {
  return NProgress.done();
};

var Layout = function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.$ = __webpack_provided_window_dot_jQuery = __webpack_require__("../node_modules/jquery/dist/jquery.js");
      __webpack_require__("../node_modules/bootstrap/dist/js/bootstrap.js");
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { style: { height: '100%' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, 'Next / Contentful / React'), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { charSet: 'utf-8', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('style', { dangerouslySetInnerHTML: { __html: __WEBPACK_IMPORTED_MODULE_3__styles_base_dmp_scss___default.a }, __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { className: 'container-fluid', style: { height: '100%' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, this.props.children));
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var _default = Layout;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_jsxFileName, '_jsxFileName', 'C:/Users/criabell/Desktop/next-react-contentful/src/components/layout.js');
  reactHotLoader.register(_createClass, '_createClass', 'C:/Users/criabell/Desktop/next-react-contentful/src/components/layout.js');
  reactHotLoader.register(_classCallCheck, '_classCallCheck', 'C:/Users/criabell/Desktop/next-react-contentful/src/components/layout.js');
  reactHotLoader.register(_possibleConstructorReturn, '_possibleConstructorReturn', 'C:/Users/criabell/Desktop/next-react-contentful/src/components/layout.js');
  reactHotLoader.register(_inherits, '_inherits', 'C:/Users/criabell/Desktop/next-react-contentful/src/components/layout.js');
  reactHotLoader.register(Layout, 'Layout', 'C:/Users/criabell/Desktop/next-react-contentful/src/components/layout.js');
  reactHotLoader.register(_default, 'default', 'C:/Users/criabell/Desktop/next-react-contentful/src/components/layout.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__("../node_modules/jquery/dist/jquery.js")))

/***/ })

})
//# sourceMappingURL=3.6392529b8cc1e9a2ba3f.hot-update.js.map