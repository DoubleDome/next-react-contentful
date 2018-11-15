module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../common/contentful.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable no-undef */
var contentful = __webpack_require__("contentful");

var defaultConfig = {
  CTF_SPACE_ID: "bdtysnvzs3h8",
  CTF_CDA_TOKEN: "cdf1047b43a2276fae263f23b3fabc384e4a7f9493d9e68cd917309a748ecda5",
  CTF_CPA_TOKEN: "015009d6997c04268680e42da919d5d369357a9bd925d4a696f60aa69387b39f"
};

module.exports = {
  createClient: function createClient() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultConfig;

    var options = {
      host: 'preview.contentful.com',
      space: config.CTF_SPACE_ID,
      accessToken: config.CTF_CPA_TOKEN
    };

    if (false) {
      options.host = 'cdn.contentful.com';
      options.accessToken = config.CTF_CDA_TOKEN;
    }

    return contentful.createClient(options);
  }
};

/***/ }),

/***/ "../dmp/components/G2TextHeaderSection/G2TextHeaderSection.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_components_TextHeaderSection_TextHeaderSection_component__ = __webpack_require__("./components/TextHeaderSection/TextHeaderSection.component.js");




/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__src_components_TextHeaderSection_TextHeaderSection_component__["a" /* default */]);

/***/ }),

/***/ "./components/TextHeaderSection/TextHeaderSection.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TextHeaderSection_scss__ = __webpack_require__("./components/TextHeaderSection/TextHeaderSection.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TextHeaderSection_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__TextHeaderSection_scss__);


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _jsxFileName = 'C:\\Users\\criabell\\Desktop\\next-react-contentful\\src\\components\\TextHeaderSection\\TextHeaderSection.component.js';

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




 // build-ignore-line

/**
 * [Documentation](https://mgmdigitalventures.atlassian.net/wiki/spaces/KB/pages/29851653/Text+Header)
 */

var TextHeaderSection = function (_React$PureComponent) {
  _inherits(TextHeaderSection, _React$PureComponent);

  function TextHeaderSection() {
    _classCallCheck(this, TextHeaderSection);

    return _possibleConstructorReturn(this, (TextHeaderSection.__proto__ || Object.getPrototypeOf(TextHeaderSection)).apply(this, arguments));
  }

  _createClass(TextHeaderSection, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          subtitle = _props.subtitle;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'TextHeaderSection', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'TextHeaderSection__container', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('h1', { className: 'TextHeaderSection__title', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, title), subtitle && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'TextHeaderSection__subtitle', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, subtitle)));
    }
  }]);

  return TextHeaderSection;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

TextHeaderSection.displayName = 'TextHeaderSection';
TextHeaderSection.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  subtitle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
TextHeaderSection.defaultProps = {
  subtitle: undefined
};

/* harmony default export */ __webpack_exports__["a"] = (TextHeaderSection);

/***/ }),

/***/ "./components/TextHeaderSection/TextHeaderSection.scss":
/***/ (function(module, exports) {

module.exports = "\nvar content = require(\"!!../../../node_modules/postcss-loader/lib/index.js!../../../node_modules/sass-loader/lib/loader.js??ref--4-3!./TextHeaderSection.scss\");\n\nif(typeof content === 'string') content = [[module.id, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = require(\"!../../../node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(module.hot) {\n\tmodule.hot.accept(\"!!../../../node_modules/postcss-loader/lib/index.js!../../../node_modules/sass-loader/lib/loader.js??ref--4-3!./TextHeaderSection.scss\", function() {\n\t\tvar newContent = require(\"!!../../../node_modules/postcss-loader/lib/index.js!../../../node_modules/sass-loader/lib/loader.js??ref--4-3!./TextHeaderSection.scss\");\n\n\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\n\t\tvar locals = (function(a, b) {\n\t\t\tvar key, idx = 0;\n\n\t\t\tfor(key in a) {\n\t\t\t\tif(!b || a[key] !== b[key]) return false;\n\t\t\t\tidx++;\n\t\t\t}\n\n\t\t\tfor(key in b) idx--;\n\n\t\t\treturn idx === 0;\n\t\t}(content.locals, newContent.locals));\n\n\t\tif(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');\n\n\t\tupdate(newContent);\n\t});\n\n\tmodule.hot.dispose(function() { update(); });\n}"

/***/ }),

/***/ "./components/layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_base_dmp_scss__ = __webpack_require__("./styles/base.dmp.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_base_dmp_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_base_dmp_scss__);


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
      window.$ = __webpack_provided_window_dot_jQuery = __webpack_require__("jquery");
      __webpack_require__("bootstrap");
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

/* harmony default export */ __webpack_exports__["a"] = (Layout);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("jquery")))

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_contentful__ = __webpack_require__("../common/contentful.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_contentful___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__common_contentful__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_layout__ = __webpack_require__("./components/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dmp_components_G2TextHeaderSection_G2TextHeaderSection_component__ = __webpack_require__("../dmp/components/G2TextHeaderSection/G2TextHeaderSection.component.js");


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };


var _jsxFileName = 'C:\\Users\\criabell\\Desktop\\next-react-contentful\\src\\pages\\index.js';

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _asyncToGenerator(fn) {
  return function () {
    var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);var value = info.value;
        } catch (error) {
          reject(error);return;
        }if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }return step("next");
    });
  };
}

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






var Index = function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: 'render',
    value: function render() {
      var content = this.props.roomLandingPageProp.fields;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__dmp_components_G2TextHeaderSection_G2TextHeaderSection_component__["a" /* default */], { title: content.textHeader.fields.title, subtitle: content.textHeader.fields.subtitle, __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var client, entries;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                client = Object(__WEBPACK_IMPORTED_MODULE_1__common_contentful__["createClient"])();
                _context.next = 3;
                return client.getEntries({
                  content_type: 'roomLandingPage',
                  include: 1
                });

              case 3:
                entries = _context.sent;
                return _context.abrupt('return', { roomLandingPageProp: entries.items[0] });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./styles/base.dmp.scss":
/***/ (function(module, exports) {

module.exports = "\nvar content = require(\"!!../../node_modules/postcss-loader/lib/index.js!../../node_modules/sass-loader/lib/loader.js??ref--4-3!./base.dmp.scss\");\n\nif(typeof content === 'string') content = [[module.id, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = require(\"!../../node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(module.hot) {\n\tmodule.hot.accept(\"!!../../node_modules/postcss-loader/lib/index.js!../../node_modules/sass-loader/lib/loader.js??ref--4-3!./base.dmp.scss\", function() {\n\t\tvar newContent = require(\"!!../../node_modules/postcss-loader/lib/index.js!../../node_modules/sass-loader/lib/loader.js??ref--4-3!./base.dmp.scss\");\n\n\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\n\t\tvar locals = (function(a, b) {\n\t\t\tvar key, idx = 0;\n\n\t\t\tfor(key in a) {\n\t\t\t\tif(!b || a[key] !== b[key]) return false;\n\t\t\t\tidx++;\n\t\t\t}\n\n\t\t\tfor(key in b) idx--;\n\n\t\t\treturn idx === 0;\n\t\t}(content.locals, newContent.locals));\n\n\t\tif(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');\n\n\t\tupdate(newContent);\n\t});\n\n\tmodule.hot.dispose(function() { update(); });\n}"

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "bootstrap":
/***/ (function(module, exports) {

module.exports = require("bootstrap");

/***/ }),

/***/ "contentful":
/***/ (function(module, exports) {

module.exports = require("contentful");

/***/ }),

/***/ "jquery":
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map