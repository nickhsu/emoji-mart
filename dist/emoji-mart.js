(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["EmojiMart"] = factory(require("react"));
	else
		root["EmojiMart"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.frequently = exports.store = exports.emojiIndex = exports.Emoji = exports.Picker = undefined;

	var _components = __webpack_require__(1);

	Object.defineProperty(exports, 'Picker', {
	  enumerable: true,
	  get: function get() {
	    return _components.Picker;
	  }
	});
	Object.defineProperty(exports, 'Emoji', {
	  enumerable: true,
	  get: function get() {
	    return _components.Emoji;
	  }
	});

	var _emojiIndex = __webpack_require__(25);

	var _emojiIndex2 = _interopRequireDefault(_emojiIndex);

	var _store = __webpack_require__(17);

	var _store2 = _interopRequireDefault(_store);

	var _frequently = __webpack_require__(16);

	var _frequently2 = _interopRequireDefault(_frequently);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.emojiIndex = _emojiIndex2.default;
	exports.store = _store2.default;
	exports.frequently = _frequently2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _anchors = __webpack_require__(2);

	Object.defineProperty(exports, 'Anchors', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_anchors).default;
	  }
	});

	var _category = __webpack_require__(15);

	Object.defineProperty(exports, 'Category', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_category).default;
	  }
	});

	var _emoji = __webpack_require__(18);

	Object.defineProperty(exports, 'Emoji', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_emoji).default;
	  }
	});

	var _picker = __webpack_require__(21);

	Object.defineProperty(exports, 'Picker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_picker).default;
	  }
	});

	var _preview = __webpack_require__(23);

	Object.defineProperty(exports, 'Preview', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_preview).default;
	  }
	});

	var _search = __webpack_require__(24);

	Object.defineProperty(exports, 'Search', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_search).default;
	  }
	});

	var _skins = __webpack_require__(26);

	Object.defineProperty(exports, 'Skins', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_skins).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _svgInlineReact = __webpack_require__(4);

	var _svgInlineReact2 = _interopRequireDefault(_svgInlineReact);

	var _svgs = __webpack_require__(5);

	var SVGs = _interopRequireWildcard(_svgs);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Anchors = function (_React$Component) {
	  _inherits(Anchors, _React$Component);

	  function Anchors(props) {
	    _classCallCheck(this, Anchors);

	    var _this = _possibleConstructorReturn(this, (Anchors.__proto__ || Object.getPrototypeOf(Anchors)).call(this, props));

	    var defaultCategory = props.categories[0];
	    if (defaultCategory.anchor) {
	      defaultCategory = defaultCategory.anchor;
	    }

	    _this.state = {
	      selected: defaultCategory.name
	    };
	    return _this;
	  }

	  _createClass(Anchors, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var categories = _props.categories;
	      var onAnchorClick = _props.onAnchorClick;
	      var color = _props.color;
	      var i18n = _props.i18n;
	      var selected = this.state.selected;


	      return _react2.default.createElement(
	        'div',
	        { className: 'emoji-mart-anchors' },
	        categories.map(function (category, i) {
	          var name = category.name;
	          var anchor = category.anchor;
	          var isSelected = name == selected;

	          if (anchor) {
	            return null;
	          }

	          return _react2.default.createElement(
	            'span',
	            {
	              key: name,
	              title: i18n.categories[name.toLowerCase()],
	              onClick: function onClick() {
	                return onAnchorClick(category, i);
	              },
	              className: 'emoji-mart-anchor ' + (isSelected ? 'emoji-mart-anchor-selected' : ''),
	              style: { color: isSelected ? color : null }
	            },
	            _react2.default.createElement(_svgInlineReact2.default, { src: SVGs[name] }),
	            _react2.default.createElement('span', { className: 'emoji-mart-anchor-bar', style: { backgroundColor: color } })
	          );
	        })
	      );
	    }
	  }]);

	  return Anchors;
	}(_react2.default.Component);

	exports.default = Anchors;


	Anchors.propTypes = {
	  categories: _react2.default.PropTypes.array,
	  onAnchorClick: _react2.default.PropTypes.func
	};

	Anchors.defaultProps = {
	  categories: [],
	  onAnchorClick: function onAnchorClick() {}
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var DOMParser = typeof window !== 'undefined' && window.DOMParser;
	var process = process || {};
	process.env = process.env || {};
	var parserAvailable = typeof DOMParser !== 'undefined' && DOMParser.prototype != null && DOMParser.prototype.parseFromString != null;

	if ("production" !== process.env.NODE_ENV && !parserAvailable) {
	    console.info('<InlineSVG />: `raw` prop works only when `window.DOMParser` exists.');
	}

	function isParsable(src) {
	    // kinda naive but meh, ain't gonna use full-blown parser for this
	    return parserAvailable && typeof src === 'string' && src.trim().substr(0, 4) === '<svg';
	}

	// parse SVG string using `DOMParser`
	function parseFromSVGString(src) {
	    var parser = new DOMParser();
	    return parser.parseFromString(src, "image/svg+xml");
	}

	// Transform DOM prop/attr names applicable to `<svg>` element but react-limited
	function switchSVGAttrToReactProp(propName) {
	    switch (propName) {
	        case 'class':
	            return 'className';
	        default:
	            return propName;
	    }
	}

	var InlineSVG = (function (_React$Component) {
	    _inherits(InlineSVG, _React$Component);

	    _createClass(InlineSVG, null, [{
	        key: 'defaultProps',
	        value: {
	            element: 'i',
	            raw: false,
	            src: ''
	        },
	        enumerable: true
	    }, {
	        key: 'propTypes',
	        value: {
	            src: _react2['default'].PropTypes.string.isRequired,
	            element: _react2['default'].PropTypes.string,
	            raw: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }]);

	    function InlineSVG(props) {
	        _classCallCheck(this, InlineSVG);

	        _get(Object.getPrototypeOf(InlineSVG.prototype), 'constructor', this).call(this, props);
	        this._extractSVGProps = this._extractSVGProps.bind(this);
	    }

	    // Serialize `Attr` objects in `NamedNodeMap`

	    _createClass(InlineSVG, [{
	        key: '_serializeAttrs',
	        value: function _serializeAttrs(map) {
	            var ret = {};
	            var prop = undefined;
	            for (var i = 0; i < map.length; i++) {
	                prop = switchSVGAttrToReactProp(map[i].name);
	                ret[prop] = map[i].value;
	            }
	            return ret;
	        }

	        // get <svg /> element props
	    }, {
	        key: '_extractSVGProps',
	        value: function _extractSVGProps(src) {
	            var map = parseFromSVGString(src).documentElement.attributes;
	            return map.length > 0 ? this._serializeAttrs(map) : null;
	        }

	        // get content inside <svg> element.
	    }, {
	        key: '_stripSVG',
	        value: function _stripSVG(src) {
	            return parseFromSVGString(src).documentElement.innerHTML;
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(_ref) {
	            var children = _ref.children;

	            if ("production" !== process.env.NODE_ENV && children != null) {
	                console.info('<InlineSVG />: `children` prop will be ignored.');
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var Element = undefined,
	                __html = undefined,
	                svgProps = undefined;
	            var _props = this.props;
	            var element = _props.element;
	            var raw = _props.raw;
	            var src = _props.src;

	            var otherProps = _objectWithoutProperties(_props, ['element', 'raw', 'src']);

	            if (raw === true && isParsable(src)) {
	                Element = 'svg';
	                svgProps = this._extractSVGProps(src);
	                __html = this._stripSVG(src);
	            }
	            __html = __html || src;
	            Element = Element || element;
	            svgProps = svgProps || {};

	            return _react2['default'].createElement(Element, _extends({}, svgProps, otherProps, { src: null, children: null,
	                dangerouslySetInnerHTML: { __html: __html } }));
	        }
	    }]);

	    return InlineSVG;
	})(_react2['default'].Component);

	exports['default'] = InlineSVG;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _activity = __webpack_require__(6);

	Object.defineProperty(exports, 'Activity', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_activity).default;
	  }
	});

	var _flags = __webpack_require__(7);

	Object.defineProperty(exports, 'Flags', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_flags).default;
	  }
	});

	var _foods = __webpack_require__(8);

	Object.defineProperty(exports, 'Foods', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_foods).default;
	  }
	});

	var _nature = __webpack_require__(9);

	Object.defineProperty(exports, 'Nature', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_nature).default;
	  }
	});

	var _objects = __webpack_require__(10);

	Object.defineProperty(exports, 'Objects', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_objects).default;
	  }
	});

	var _people = __webpack_require__(11);

	Object.defineProperty(exports, 'People', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_people).default;
	  }
	});

	var _places = __webpack_require__(12);

	Object.defineProperty(exports, 'Places', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_places).default;
	  }
	});

	var _recent = __webpack_require__(13);

	Object.defineProperty(exports, 'Recent', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_recent).default;
	  }
	});

	var _symbols = __webpack_require__(14);

	Object.defineProperty(exports, 'Symbols', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_symbols).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113\"></path></svg>"

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z\"></path></svg>"

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9\"></path></svg>"

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8\"></path><path d=\"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235\"></path></svg>"

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z\"></path><path d=\"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789\"></path></svg>"

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10\"></path><path d=\"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0\"></path></svg>"

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5\"></path><path d=\"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z\"></path></svg>"

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z\"></path><path d=\"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10\"></path></svg>"

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76\"></path></svg>"

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _frequently = __webpack_require__(16);

	var _frequently2 = _interopRequireDefault(_frequently);

	var _ = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Category = function (_React$Component) {
	  _inherits(Category, _React$Component);

	  function Category() {
	    _classCallCheck(this, Category);

	    return _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).apply(this, arguments));
	  }

	  _createClass(Category, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.container = this.refs.container;
	      this.label = this.refs.label;
	      this.parent = this.container.parentNode;

	      this.margin = 0;
	      this.minMargin = 0;

	      this.memoizeSize();
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      var _props = this.props;
	      var name = _props.name;
	      var perLine = _props.perLine;
	      var hasStickyPosition = _props.hasStickyPosition;
	      var emojis = _props.emojis;
	      var emojiProps = _props.emojiProps;
	      var skin = emojiProps.skin;
	      var size = emojiProps.size;
	      var set = emojiProps.set;
	      var nextPerLine = nextProps.perLine;
	      var nextHasStickyPosition = nextProps.hasStickyPosition;
	      var nextEmojis = nextProps.emojis;
	      var nextEmojiProps = nextProps.emojiProps;
	      var nextSkin = nextEmojiProps.skin;
	      var nextSize = nextEmojiProps.size;
	      var nextSet = nextEmojiProps.set;
	      var shouldUpdate = false;

	      if (name == 'Recent' && perLine != nextPerLine) {
	        shouldUpdate = true;
	      }

	      if (name == 'Search') {
	        shouldUpdate = !(emojis == nextEmojis);
	      }

	      if (skin != nextSkin || size != nextSize || set != nextSet || hasStickyPosition != nextHasStickyPosition) {
	        shouldUpdate = true;
	      }

	      return shouldUpdate;
	    }
	  }, {
	    key: 'memoizeSize',
	    value: function memoizeSize() {
	      var _container$getBoundin = this.container.getBoundingClientRect();

	      var top = _container$getBoundin.top;
	      var height = _container$getBoundin.height;

	      var _parent$getBoundingCl = this.parent.getBoundingClientRect();

	      var parentTop = _parent$getBoundingCl.top;

	      var _label$getBoundingCli = this.label.getBoundingClientRect();

	      var labelHeight = _label$getBoundingCli.height;


	      this.top = top - parentTop + this.parent.scrollTop;

	      if (height == 0) {
	        this.maxMargin = 0;
	      } else {
	        this.maxMargin = height - labelHeight;
	      }
	    }
	  }, {
	    key: 'handleScroll',
	    value: function handleScroll(scrollTop) {
	      var margin = scrollTop - this.top;
	      margin = margin < this.minMargin ? this.minMargin : margin;
	      margin = margin > this.maxMargin ? this.maxMargin : margin;

	      if (margin == this.margin) return;
	      var name = this.props.name;


	      if (!this.props.hasStickyPosition) {
	        this.label.style.top = margin + 'px';
	      }

	      this.margin = margin;
	      return true;
	    }
	  }, {
	    key: 'getEmojis',
	    value: function getEmojis() {
	      var _props2 = this.props;
	      var name = _props2.name;
	      var emojis = _props2.emojis;
	      var perLine = _props2.perLine;


	      if (name == 'Recent') {
	        var frequentlyUsed = _frequently2.default.get(perLine * 4);

	        if (frequentlyUsed.length) {
	          emojis = frequentlyUsed;
	        }
	      }

	      if (emojis) {
	        emojis = emojis.slice(0);
	      }

	      return emojis;
	    }
	  }, {
	    key: 'updateDisplay',
	    value: function updateDisplay(display) {
	      var emojis = this.getEmojis();

	      if (!display && !emojis) {
	        return;
	      }

	      this.container.style.display = display;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props;
	      var name = _props3.name;
	      var hasStickyPosition = _props3.hasStickyPosition;
	      var emojiProps = _props3.emojiProps;
	      var i18n = _props3.i18n;
	      var emojis = this.getEmojis();
	      var labelStyles = {};
	      var labelSpanStyles = {};
	      var containerStyles = {};

	      if (!emojis) {
	        containerStyles = {
	          display: 'none'
	        };
	      }

	      if (!hasStickyPosition) {
	        labelStyles = {
	          height: 28
	        };

	        labelSpanStyles = {
	          position: 'absolute'
	        };
	      }

	      return _react2.default.createElement(
	        'div',
	        { ref: 'container', className: 'emoji-mart-category', style: containerStyles },
	        _react2.default.createElement(
	          'div',
	          { style: labelStyles, 'data-name': name, className: 'emoji-mart-category-label' },
	          _react2.default.createElement(
	            'span',
	            { style: labelSpanStyles, ref: 'label' },
	            i18n.categories[name.toLowerCase()]
	          )
	        ),
	        emojis && emojis.map(function (emoji) {
	          return _react2.default.createElement(_.Emoji, _extends({
	            key: emoji.id || emoji,
	            emoji: emoji
	          }, emojiProps));
	        }),
	        emojis && !emojis.length && _react2.default.createElement(
	          'div',
	          { className: 'emoji-mart-no-results' },
	          _react2.default.createElement(_.Emoji, _extends({}, emojiProps, {
	            size: 22,
	            emoji: 'sleuth_or_spy'
	          })),
	          _react2.default.createElement(
	            'span',
	            { className: 'emoji-mart-no-results-label' },
	            'No emoji found'
	          )
	        )
	      );
	    }
	  }]);

	  return Category;
	}(_react2.default.Component);

	exports.default = Category;


	Category.propTypes = {
	  emojis: _react2.default.PropTypes.array,
	  hasStickyPosition: _react2.default.PropTypes.bool,
	  name: _react2.default.PropTypes.string.isRequired,
	  perLine: _react2.default.PropTypes.number.isRequired,
	  emojiProps: _react2.default.PropTypes.object.isRequired
	};

	Category.defaultProps = {
	  emojis: [],
	  hasStickyPosition: true
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _store = __webpack_require__(17);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var frequently = _store2.default.get('frequently') || {};

	function add(emoji) {
	  var id = emoji.id;


	  frequently[id] || (frequently[id] = 0);
	  frequently[id] += 1;

	  _store2.default.set('last', id);
	  _store2.default.set('frequently', frequently);
	}

	function get(quantity) {
	  var sorted = Object.keys(frequently).sort(function (a, b) {
	    return frequently[a] - frequently[b];
	  }).reverse(),
	      sliced = sorted.slice(0, quantity),
	      last = _store2.default.get('last');

	  if (last && sliced.indexOf(last) == -1) {
	    sliced.pop();
	    sliced.push(last);
	  }

	  return sliced;
	}

	exports.default = { add: add, get: get };

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var NAMESPACE = 'emoji-mart';

	var isLocalStorageSupported = typeof window !== 'undefined' && 'localStorage' in window;

	function update(state) {
	  for (var key in state) {
	    var value = state[key];
	    set(key, value);
	  }
	}

	function set(key, value) {
	  if (!isLocalStorageSupported) return;
	  try {
	    window.localStorage[NAMESPACE + '.' + key] = JSON.stringify(value);
	  } catch (e) {}
	}

	function get(key) {
	  if (!isLocalStorageSupported) return;
	  try {
	    var value = window.localStorage[NAMESPACE + '.' + key];
	  } catch (e) {
	    return;
	  }

	  if (value) {
	    return JSON.parse(value);
	  }
	}

	function setNamespace(namespace) {
	  NAMESPACE = namespace;
	}

	exports.default = { update: update, set: set, get: get, setNamespace: setNamespace };

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _data = __webpack_require__(19);

	var _data2 = _interopRequireDefault(_data);

	var _utils = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SHEET_COLUMNS = 41;

	var Emoji = function (_React$Component) {
	  _inherits(Emoji, _React$Component);

	  function Emoji(props) {
	    _classCallCheck(this, Emoji);

	    var _this = _possibleConstructorReturn(this, (Emoji.__proto__ || Object.getPrototypeOf(Emoji)).call(this, props));

	    _this.hasSkinVariations = !!_this.getData().skin_variations;
	    return _this;
	  }

	  _createClass(Emoji, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return this.hasSkinVariations && nextProps.skin != this.props.skin || nextProps.size != this.props.size || nextProps.set != this.props.set;
	    }
	  }, {
	    key: 'getPosition',
	    value: function getPosition() {
	      var _getData2 = this.getData();

	      var sheet_x = _getData2.sheet_x;
	      var sheet_y = _getData2.sheet_y;
	      var multiply = 100 / (SHEET_COLUMNS - 1);

	      return multiply * sheet_x + '% ' + multiply * sheet_y + '%';
	    }
	  }, {
	    key: 'getData',
	    value: function getData() {
	      var _props = this.props;
	      var emoji = _props.emoji;
	      var skin = _props.skin;
	      var set = _props.set;

	      return (0, _utils.getData)(emoji, skin, set);
	    }
	  }, {
	    key: 'getSanitizedData',
	    value: function getSanitizedData() {
	      var _props2 = this.props;
	      var emoji = _props2.emoji;
	      var skin = _props2.skin;
	      var set = _props2.set;

	      return (0, _utils.getSanitizedData)(emoji, skin, set);
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(e) {
	      var onClick = this.props.onClick;
	      var emoji = this.getSanitizedData();

	      onClick(emoji, e);
	    }
	  }, {
	    key: 'handleOver',
	    value: function handleOver(e) {
	      var onOver = this.props.onOver;
	      var emoji = this.getSanitizedData();

	      onOver(emoji, e);
	    }
	  }, {
	    key: 'handleLeave',
	    value: function handleLeave(e) {
	      var onLeave = this.props.onLeave;
	      var emoji = this.getSanitizedData();

	      onLeave(emoji, e);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props;
	      var set = _props3.set;
	      var size = _props3.size;
	      var sheetSize = _props3.sheetSize;
	      var native = _props3.native;
	      var onOver = _props3.onOver;
	      var onLeave = _props3.onLeave;
	      var backgroundImageFn = _props3.backgroundImageFn;

	      var _getData3 = this.getData();

	      var unified = _getData3.unified;
	      var style = {};
	      var children = this.props.children;

	      if (!unified) {
	        return null;
	      }

	      if (native && unified) {
	        style = { fontSize: size };
	        children = (0, _utils.unifiedToNative)(unified);
	      } else {
	        style = {
	          width: size,
	          height: size,
	          display: 'inline-block',
	          backgroundImage: 'url(' + backgroundImageFn(set, sheetSize) + ')',
	          backgroundSize: 100 * SHEET_COLUMNS + '%',
	          backgroundPosition: this.getPosition()
	        };
	      }

	      return _react2.default.createElement(
	        'span',
	        {
	          onClick: this.handleClick.bind(this),
	          onMouseEnter: this.handleOver.bind(this),
	          onMouseLeave: this.handleLeave.bind(this),
	          className: 'emoji-mart-emoji' },
	        _react2.default.createElement(
	          'span',
	          { style: style },
	          children
	        )
	      );
	    }
	  }]);

	  return Emoji;
	}(_react2.default.Component);

	exports.default = Emoji;


	Emoji.propTypes = {
	  onOver: _react2.default.PropTypes.func,
	  onLeave: _react2.default.PropTypes.func,
	  onClick: _react2.default.PropTypes.func,
	  backgroundImageFn: _react2.default.PropTypes.func,
	  native: _react2.default.PropTypes.bool,
	  skin: _react2.default.PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
	  sheetSize: _react2.default.PropTypes.oneOf([16, 20, 32, 64]),
	  set: _react2.default.PropTypes.oneOf(['apple', 'google', 'twitter', 'emojione']),
	  size: _react2.default.PropTypes.number.isRequired,
	  emoji: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.object]).isRequired
	};

	Emoji.defaultProps = {
	  skin: 1,
	  set: 'apple',
	  sheetSize: 64,
	  native: false,
	  backgroundImageFn: function backgroundImageFn(set, sheetSize) {
	    return 'https://unpkg.com/emoji-datasource@' + ('2.4.4') + '/sheet_' + set + '_' + sheetSize + '.png';
	  },
	  onOver: function onOver() {},
	  onLeave: function onLeave() {},
	  onClick: function onClick() {}
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = { "categories": [{ "name": "People", "emojis": ["grinning", "grimacing", "grin", "joy", "smiley", "smile", "sweat_smile", "laughing", "innocent", "wink", "blush", "slightly_smiling_face", "upside_down_face", "relaxed", "yum", "relieved", "heart_eyes", "kissing_heart", "kissing", "kissing_smiling_eyes", "kissing_closed_eyes", "stuck_out_tongue_winking_eye", "stuck_out_tongue_closed_eyes", "stuck_out_tongue", "money_mouth_face", "nerd_face", "sunglasses", "hugging_face", "smirk", "no_mouth", "neutral_face", "expressionless", "unamused", "face_with_rolling_eyes", "thinking_face", "flushed", "disappointed", "worried", "angry", "rage", "pensive", "confused", "slightly_frowning_face", "white_frowning_face", "persevere", "confounded", "tired_face", "weary", "triumph", "open_mouth", "scream", "fearful", "cold_sweat", "hushed", "frowning", "anguished", "cry", "disappointed_relieved", "sleepy", "sweat", "sob", "dizzy_face", "astonished", "zipper_mouth_face", "mask", "face_with_thermometer", "face_with_head_bandage", "sleeping", "zzz", "hankey", "smiling_imp", "imp", "japanese_ogre", "japanese_goblin", "skull", "ghost", "alien", "robot_face", "smiley_cat", "smile_cat", "joy_cat", "heart_eyes_cat", "smirk_cat", "kissing_cat", "scream_cat", "crying_cat_face", "pouting_cat", "raised_hands", "clap", "wave", "+1", "-1", "facepunch", "fist", "v", "ok_hand", "hand", "open_hands", "muscle", "pray", "point_up", "point_up_2", "point_down", "point_left", "point_right", "middle_finger", "raised_hand_with_fingers_splayed", "the_horns", "spock-hand", "writing_hand", "nail_care", "lips", "tongue", "ear", "nose", "eye", "eyes", "bust_in_silhouette", "busts_in_silhouette", "speaking_head_in_silhouette", "baby", "boy", "girl", "man", "woman", "person_with_blond_hair", "older_man", "older_woman", "man_with_gua_pi_mao", "man_with_turban", "cop", "construction_worker", "guardsman", "sleuth_or_spy", "santa", "angel", "princess", "bride_with_veil", "walking", "runner", "dancer", "dancers", "couple", "two_men_holding_hands", "two_women_holding_hands", "bow", "information_desk_person", "no_good", "ok_woman", "raising_hand", "person_with_pouting_face", "person_frowning", "haircut", "massage", "couple_with_heart", "woman-heart-woman", "man-heart-man", "couplekiss", "woman-kiss-woman", "man-kiss-man", "family", "man-woman-girl", "man-woman-girl-boy", "man-woman-boy-boy", "man-woman-girl-girl", "woman-woman-boy", "woman-woman-girl", "woman-woman-girl-boy", "woman-woman-boy-boy", "woman-woman-girl-girl", "man-man-boy", "man-man-girl", "man-man-girl-boy", "man-man-boy-boy", "man-man-girl-girl", "womans_clothes", "shirt", "jeans", "necktie", "dress", "bikini", "kimono", "lipstick", "kiss", "footprints", "high_heel", "sandal", "boot", "mans_shoe", "athletic_shoe", "womans_hat", "tophat", "helmet_with_white_cross", "mortar_board", "crown", "school_satchel", "pouch", "purse", "handbag", "briefcase", "eyeglasses", "dark_sunglasses", "ring", "closed_umbrella"] }], "emojis": { "grinning": { "name": "Grinning Face", "unified": "1F600", "variations": [], "sheet_x": 26, "sheet_y": 15, "short_names": ["grinning"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [":D"], "keywords": ["face", "smile", "happy", "joy", ":D"], "search": "grinning,face,smile,happy,joy,:d" }, "grimacing": { "name": "Grimacing Face", "unified": "1F62C", "variations": [], "sheet_x": 27, "sheet_y": 18, "short_names": ["grimacing"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["face", "grimace", "teeth"], "search": "grimacing,face,grimace,teeth" }, "grin": { "name": "Grinning Face with Smiling Eyes", "unified": "1F601", "variations": [], "sheet_x": 26, "sheet_y": 16, "short_names": ["grin"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["face", "happy", "smile", "joy"], "search": "grin,grinning,face,with,smiling,eyes,happy,smile,joy" }, "joy": { "name": "Face with Tears of Joy", "unified": "1F602", "variations": [], "sheet_x": 26, "sheet_y": 17, "short_names": ["joy"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["face", "cry", "tears", "weep", "happy", "haha"], "search": "joy,face,with,tears,of,cry,weep,happy,haha" }, "smiley": { "name": "Smiling Face with Open Mouth", "unified": "1F603", "variations": [], "sheet_x": 26, "sheet_y": 18, "short_names": ["smiley"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": ["=)", "=-)"], "keywords": ["face", "happy", "joy", "haha", ":D"], "search": "smiley,smiling,face,with,open,mouth,happy,joy,haha,:d,=),=-)" }, "smile": { "name": "Smiling Face with Open Mouth and Smiling Eyes", "unified": "1F604", "variations": [], "sheet_x": 26, "sheet_y": 19, "short_names": ["smile"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": ["C:", "c:", ":D", ":-D"], "keywords": ["face", "happy", "joy", "funny", "haha", "laugh", "like", ":D"], "search": "smile,smiling,face,with,open,mouth,and,eyes,happy,joy,funny,haha,laugh,like,:d,c:,:-d" }, "sweat_smile": { "name": "Smiling Face with Open Mouth and Cold Sweat", "unified": "1F605", "variations": [], "sheet_x": 26, "sheet_y": 20, "short_names": ["sweat_smile"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["face", "hot", "happy", "laugh"], "search": "sweat,smile,smiling,face,with,open,mouth,and,cold,hot,happy,laugh" }, "laughing": { "name": "Smiling Face with Open Mouth and Tightly-Closed Eyes", "unified": "1F606", "variations": [], "sheet_x": 26, "sheet_y": 21, "short_names": ["laughing", "satisfied"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [":>", ":->"], "keywords": ["happy", "joy", "lol", "satisfied", "haha", "face", "glad", "XD"], "search": "laughing,satisfied,smiling,face,with,open,mouth,and,tightly,closed,eyes,happy,joy,lol,haha,glad,xd,:>,:->" }, "innocent": { "name": "Smiling Face with Halo", "unified": "1F607", "variations": [], "sheet_x": 26, "sheet_y": 22, "short_names": ["innocent"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["face", "angel", "heaven", "halo"], "search": "innocent,smiling,face,with,halo,angel,heaven" }, "wink": { "name": "Winking Face", "unified": "1F609", "variations": [], "sheet_x": 26, "sheet_y": 24, "short_names": ["wink"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [";)", ";-)"], "keywords": ["face", "happy", "mischievous", "secret"], "search": "wink,winking,face,happy,mischievous,secret,;),;-)" }, "blush": { "name": "Smiling Face with Smiling Eyes", "unified": "1F60A", "variations": [], "sheet_x": 26, "sheet_y": 25, "short_names": ["blush"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [":)"], "keywords": ["face", "smile", "happy", "flushed", "crush", "embarrassed", "shy", "joy"], "search": "blush,smiling,face,with,eyes,smile,happy,flushed,crush,embarrassed,shy,joy,:)" }, "slightly_smiling_face": { "name": "Slightly Smiling Face", "unified": "1F642", "variations": [], "sheet_x": 27, "sheet_y": 40, "short_names": ["slightly_smiling_face"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [":)", "(:", ":-)"], "keywords": [], "search": "slightly,smiling,face,:),(:,:-)" }, "upside_down_face": { "name": "Upside-Down Face", "unified": "1F643", "variations": [], "sheet_x": 28, "sheet_y": 0, "short_names": ["upside_down_face"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": [], "search": "upside,down,face" }, "relaxed": { "name": "White Smiling Face", "unified": "263A", "variations": ["263A-FE0F"], "sheet_x": 1, "sheet_y": 25, "short_names": ["relaxed"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["face", "blush", "massage", "happiness"], "search": "relaxed,white,smiling,face,blush,massage,happiness" }, "yum": { "name": "Face Savouring Delicious Food", "unified": "1F60B", "variations": [], "sheet_x": 26, "sheet_y": 26, "short_names": ["yum"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["happy", "joy", "tongue", "smile", "face", "silly", "yummy"], "search": "yum,face,savouring,delicious,food,happy,joy,tongue,smile,silly,yummy" }, "relieved": { "name": "Relieved Face", "unified": "1F60C", "variations": [], "sheet_x": 26, "sheet_y": 27, "short_names": ["relieved"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["face", "relaxed", "phew", "massage", "happiness"], "search": "relieved,face,relaxed,phew,massage,happiness" }, "heart_eyes": { "name": "Smiling Face with Heart-Shaped Eyes", "unified": "1F60D", "variations": [], "sheet_x": 26, "sheet_y": 28, "short_names": ["heart_eyes"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["face", "love", "like", "affection", "valentines", "infatuation", "crush"], "search": "heart,eyes,smiling,face,with,shaped,love,like,affection,valentines,infatuation,crush" }, "kissing_heart": { "name": "Face Throwing a Kiss", "unified": "1F618", "variations": [], "sheet_x": 26, "sheet_y": 39, "short_names": ["kissing_heart"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["face", "love", "like", "affection", "valentines", "infatuation"], "search": "kissing,heart,face,throwing,a,kiss,love,like,affection,valentines,infatuation" }, "kissing": { "name": "Kissing Face", "unified": "1F617", "variations": [], "sheet_x": 26, "sheet_y": 38, "short_names": ["kissing"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["love", "like", "face", "3", "valentines", "infatuation"], "search": "kissing,face,love,like,3,valentines,infatuation" }, "kissing_smiling_eyes": { "name": "Kissing Face with Smiling Eyes", "unified": "1F619", "variations": [], "sheet_x": 26, "sheet_y": 40, "short_names": ["kissing_smiling_eyes"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["face", "affection", "valentines", "infatuation"], "search": "kissing,smiling,eyes,face,with,affection,valentines,infatuation" }, "kissing_closed_eyes": { "name": "Kissing Face with Closed Eyes", "unified": "1F61A", "variations": [], "sheet_x": 27, "sheet_y": 0, "short_names": ["kissing_closed_eyes"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["face", "love", "like", "affection", "valentines", "infatuation"], "search": "kissing,closed,eyes,face,with,love,like,affection,valentines,infatuation" }, "stuck_out_tongue_winking_eye": { "name": "Face with Stuck-out Tongue and Winking Eye", "unified": "1F61C", "variations": [], "sheet_x": 27, "sheet_y": 2, "short_names": ["stuck_out_tongue_winking_eye"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [";p", ";-p", ";b", ";-b", ";P", ";-P"], "keywords": ["face", "prank", "childish", "playful", "mischievous", "smile"], "search": "stuck,out,tongue,winking,eye,face,with,and,prank,childish,playful,mischievous,smile,;p,;-p,;b,;-b" }, "stuck_out_tongue_closed_eyes": { "name": "Face with Stuck-out Tongue and Tightly-Closed Eyes", "unified": "1F61D", "variations": [], "sheet_x": 27, "sheet_y": 3, "short_names": ["stuck_out_tongue_closed_eyes"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["face", "prank", "playful", "mischievous", "smile"], "search": "stuck,out,tongue,closed,eyes,face,with,and,tightly,prank,playful,mischievous,smile" }, "stuck_out_tongue": { "name": "Face with Stuck-out Tongue", "unified": "1F61B", "variations": [], "sheet_x": 27, "sheet_y": 1, "short_names": ["stuck_out_tongue"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [":p", ":-p", ":P", ":-P", ":b", ":-b"], "keywords": ["face", "prank", "childish", "playful", "mischievous", "smile"], "search": "stuck,out,tongue,face,with,prank,childish,playful,mischievous,smile,:p,:-p,:b,:-b" }, "money_mouth_face": { "name": "Money-Mouth Face", "unified": "1F911", "variations": [], "sheet_x": 32, "sheet_y": 2, "short_names": ["money_mouth_face"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": [], "search": "money,mouth,face" }, "nerd_face": { "name": "Nerd Face", "unified": "1F913", "variations": [], "sheet_x": 32, "sheet_y": 4, "short_names": ["nerd_face"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": [], "search": "nerd,face" }, "sunglasses": { "name": "Smiling Face with Sunglasses", "unified": "1F60E", "variations": [], "sheet_x": 26, "sheet_y": 29, "short_names": ["sunglasses"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": ["8)"], "keywords": ["face", "cool", "smile", "summer", "beach"], "search": "sunglasses,smiling,face,with,cool,smile,summer,beach,8)" }, "hugging_face": { "name": "Hugging Face", "unified": "1F917", "variations": [], "sheet_x": 32, "sheet_y": 8, "short_names": ["hugging_face"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": [], "search": "hugging,face" }, "smirk": { "name": "Smirking Face", "unified": "1F60F", "variations": [], "sheet_x": 26, "sheet_y": 30, "short_names": ["smirk"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["face", "smile", "mean", "prank", "smug", "sarcasm"], "search": "smirk,smirking,face,smile,mean,prank,smug,sarcasm" }, "no_mouth": { "name": "Face Without Mouth", "unified": "1F636", "variations": [], "sheet_x": 27, "sheet_y": 28, "short_names": ["no_mouth"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["face", "hellokitty"], "search": "no,mouth,face,without,hellokitty" }, "neutral_face": { "name": "Neutral Face", "unified": "1F610", "variations": [], "sheet_x": 26, "sheet_y": 31, "short_names": ["neutral_face"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [":|", ":-|"], "keywords": ["indifference", "meh", ":|"], "search": "neutral,face,indifference,meh,:|,:-|" }, "expressionless": { "name": "Expressionless Face", "unified": "1F611", "variations": [], "sheet_x": 26, "sheet_y": 32, "short_names": ["expressionless"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["face", "indifferent", "-_-", "meh"], "search": "expressionless,face,indifferent,-_-,meh" }, "unamused": { "name": "Unamused Face", "unified": "1F612", "variations": [], "sheet_x": 26, "sheet_y": 33, "short_names": ["unamused"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [":("], "keywords": ["indifference", "bored", "straight face", "serious"], "search": "unamused,face,indifference,bored,straight face,serious,:(" }, "face_with_rolling_eyes": { "name": "Face with Rolling Eyes", "unified": "1F644", "variations": [], "sheet_x": 28, "sheet_y": 1, "short_names": ["face_with_rolling_eyes"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": [], "search": "face,with,rolling,eyes" }, "thinking_face": { "name": "Thinking Face", "unified": "1F914", "variations": [], "sheet_x": 32, "sheet_y": 5, "short_names": ["thinking_face"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": [], "search": "thinking,face" }, "flushed": { "name": "Flushed Face", "unified": "1F633", "variations": [], "sheet_x": 27, "sheet_y": 25, "short_names": ["flushed"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["face", "blush", "shy", "flattered"], "search": "flushed,face,blush,shy,flattered" }, "disappointed": { "name": "Disappointed Face", "unified": "1F61E", "variations": [], "sheet_x": 27, "sheet_y": 4, "short_names": ["disappointed"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": ["):", ":(", ":-("], "keywords": ["face", "sad", "upset", "depressed", ":("], "search": "disappointed,face,sad,upset,depressed,:(,):,:-(" }, "worried": { "name": "Worried Face", "unified": "1F61F", "variations": [], "sheet_x": 27, "sheet_y": 5, "short_names": ["worried"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["face", "concern", "nervous", ":("], "search": "worried,face,concern,nervous,:(" }, "angry": { "name": "Angry Face", "unified": "1F620", "variations": [], "sheet_x": 27, "sheet_y": 6, "short_names": ["angry"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [">:(", ">:-("], "keywords": ["mad", "face", "annoyed", "frustrated"], "search": "angry,face,mad,annoyed,frustrated,>:(,>:-(" }, "rage": { "name": "Pouting Face", "unified": "1F621", "variations": [], "sheet_x": 27, "sheet_y": 7, "short_names": ["rage"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["angry", "mad", "hate", "despise"], "search": "rage,pouting,face,angry,mad,hate,despise" }, "pensive": { "name": "Pensive Face", "unified": "1F614", "variations": [], "sheet_x": 26, "sheet_y": 35, "short_names": ["pensive"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["face", "sad", "depressed", "okay", "upset"], "search": "pensive,face,sad,depressed,okay,upset" }, "confused": { "name": "Confused Face", "unified": "1F615", "variations": [], "sheet_x": 26, "sheet_y": 36, "short_names": ["confused"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [":\\", ":-\\", ":/", ":-/"], "keywords": ["face", "indifference", "huh", "weird", "hmmm"], "search": "confused,face,indifference,huh,weird,hmmm,:\\,:-\\,:/,:-/" }, "slightly_frowning_face": { "name": "Slightly Frowning Face", "unified": "1F641", "variations": [], "sheet_x": 27, "sheet_y": 39, "short_names": ["slightly_frowning_face"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": [], "search": "slightly,frowning,face" }, "white_frowning_face": { "name": "White Frowning Face", "unified": "2639", "variations": ["2639-FE0F"], "sheet_x": 1, "sheet_y": 24, "short_names": ["white_frowning_face"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": [], "search": "white,frowning,face" }, "persevere": { "name": "Persevering Face", "unified": "1F623", "variations": [], "sheet_x": 27, "sheet_y": 9, "short_names": ["persevere"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["face", "sick", "no", "upset", "oops"], "search": "persevere,persevering,face,sick,no,upset,oops" }, "confounded": { "name": "Confounded Face", "unified": "1F616", "variations": [], "sheet_x": 26, "sheet_y": 37, "short_names": ["confounded"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["face", "confused", "sick", "unwell", "oops"], "search": "confounded,face,confused,sick,unwell,oops" }, "tired_face": { "name": "Tired Face", "unified": "1F62B", "variations": [], "sheet_x": 27, "sheet_y": 17, "short_names": ["tired_face"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["sick", "whine", "upset", "frustrated"], "search": "tired,face,sick,whine,upset,frustrated" }, "weary": { "name": "Weary Face", "unified": "1F629", "variations": [], "sheet_x": 27, "sheet_y": 15, "short_names": ["weary"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["face", "tired", "sleepy", "sad", "frustrated", "upset"], "search": "weary,face,tired,sleepy,sad,frustrated,upset" }, "triumph": { "name": "Face with Look of Triumph", "unified": "1F624", "variations": [], "sheet_x": 27, "sheet_y": 10, "short_names": ["triumph"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["face", "gas", "phew", "proud", "pride"], "search": "triumph,face,with,look,of,gas,phew,proud,pride" }, "open_mouth": { "name": "Face with Open Mouth", "unified": "1F62E", "variations": [], "sheet_x": 27, "sheet_y": 20, "short_names": ["open_mouth"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [":o", ":-o", ":O", ":-O"], "keywords": ["face", "surprise", "impressed", "wow"], "search": "open,mouth,face,with,surprise,impressed,wow,:o,:-o" }, "scream": { "name": "Face Screaming in Fear", "unified": "1F631", "variations": [], "sheet_x": 27, "sheet_y": 23, "short_names": ["scream"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["face", "munch", "scared", "omg"], "search": "scream,face,screaming,in,fear,munch,scared,omg" }, "fearful": { "name": "Fearful Face", "unified": "1F628", "variations": [], "sheet_x": 27, "sheet_y": 14, "short_names": ["fearful"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["face", "scared", "terrified", "nervous", "oops", "huh"], "search": "fearful,face,scared,terrified,nervous,oops,huh" }, "cold_sweat": { "name": "Face with Open Mouth and Cold Sweat", "unified": "1F630", "variations": [], "sheet_x": 27, "sheet_y": 22, "short_names": ["cold_sweat"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["face", "nervous"], "search": "cold,sweat,face,with,open,mouth,and,nervous" }, "hushed": { "name": "Hushed Face", "unified": "1F62F", "variations": [], "sheet_x": 27, "sheet_y": 21, "short_names": ["hushed"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["face", "woo", "shh"], "search": "hushed,face,woo,shh" }, "frowning": { "name": "Frowning Face with Open Mouth", "unified": "1F626", "variations": [], "sheet_x": 27, "sheet_y": 12, "short_names": ["frowning"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["face", "aw", "what"], "search": "frowning,face,with,open,mouth,aw,what" }, "anguished": { "name": "Anguished Face", "unified": "1F627", "variations": [], "sheet_x": 27, "sheet_y": 13, "short_names": ["anguished"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": ["D:"], "keywords": ["face", "stunned", "nervous"], "search": "anguished,face,stunned,nervous,d:" }, "cry": { "name": "Crying Face", "unified": "1F622", "variations": [], "sheet_x": 27, "sheet_y": 8, "short_names": ["cry"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [":'("], "keywords": ["face", "tears", "sad", "depressed", "upset", ":'("], "search": "cry,crying,face,tears,sad,depressed,upset,:'(" }, "disappointed_relieved": { "name": "Disappointed but Relieved Face", "unified": "1F625", "variations": [], "sheet_x": 27, "sheet_y": 11, "short_names": ["disappointed_relieved"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["face", "phew", "sweat", "nervous"], "search": "disappointed,relieved,but,face,phew,sweat,nervous" }, "sleepy": { "name": "Sleepy Face", "unified": "1F62A", "variations": [], "sheet_x": 27, "sheet_y": 16, "short_names": ["sleepy"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["face", "tired", "rest", "nap"], "search": "sleepy,face,tired,rest,nap" }, "sweat": { "name": "Face with Cold Sweat", "unified": "1F613", "variations": [], "sheet_x": 26, "sheet_y": 34, "short_names": ["sweat"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["face", "hot", "sad", "tired", "exercise"], "search": "sweat,face,with,cold,hot,sad,tired,exercise" }, "sob": { "name": "Loudly Crying Face", "unified": "1F62D", "variations": [], "sheet_x": 27, "sheet_y": 19, "short_names": ["sob"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [":'("], "keywords": ["face", "cry", "tears", "sad", "upset", "depressed"], "search": "sob,loudly,crying,face,cry,tears,sad,upset,depressed,:'(" }, "dizzy_face": { "name": "Dizzy Face", "unified": "1F635", "variations": [], "sheet_x": 27, "sheet_y": 27, "short_names": ["dizzy_face"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["spent", "unconscious", "xox"], "search": "dizzy,face,spent,unconscious,xox" }, "astonished": { "name": "Astonished Face", "unified": "1F632", "variations": [], "sheet_x": 27, "sheet_y": 24, "short_names": ["astonished"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["face", "xox", "surprised", "poisoned"], "search": "astonished,face,xox,surprised,poisoned" }, "zipper_mouth_face": { "name": "Zipper-Mouth Face", "unified": "1F910", "variations": [], "sheet_x": 32, "sheet_y": 1, "short_names": ["zipper_mouth_face"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": [], "search": "zipper,mouth,face" }, "mask": { "name": "Face with Medical Mask", "unified": "1F637", "variations": [], "sheet_x": 27, "sheet_y": 29, "short_names": ["mask"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["face", "sick", "ill", "disease"], "search": "mask,face,with,medical,sick,ill,disease" }, "face_with_thermometer": { "name": "Face with Thermometer", "unified": "1F912", "variations": [], "sheet_x": 32, "sheet_y": 3, "short_names": ["face_with_thermometer"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": [], "search": "face,with,thermometer" }, "face_with_head_bandage": { "name": "Face with Head-Bandage", "unified": "1F915", "variations": [], "sheet_x": 32, "sheet_y": 6, "short_names": ["face_with_head_bandage"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": [], "search": "face,with,head,bandage" }, "sleeping": { "name": "Sleeping Face", "unified": "1F634", "variations": [], "sheet_x": 27, "sheet_y": 26, "short_names": ["sleeping"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["face", "tired", "sleepy", "night", "zzz"], "search": "sleeping,face,tired,sleepy,night,zzz" }, "zzz": { "name": "Sleeping Symbol", "unified": "1F4A4", "variations": [], "sheet_x": 20, "sheet_y": 11, "short_names": ["zzz"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["sleepy", "tired"], "search": "zzz,sleeping,symbol,sleepy,tired" }, "hankey": { "name": "Pile of Poo", "unified": "1F4A9", "variations": [], "sheet_x": 20, "sheet_y": 16, "short_names": ["hankey", "poop", "shit"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["poop", "shitface", "fail", "turd"], "search": "hankey,poop,shit,pile,of,poo,shitface,fail,turd" }, "smiling_imp": { "name": "Smiling Face with Horns", "unified": "1F608", "variations": [], "sheet_x": 26, "sheet_y": 23, "short_names": ["smiling_imp"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["devil", "horns"], "search": "smiling,imp,face,with,horns,devil" }, "imp": { "name": "Imp", "unified": "1F47F", "variations": [], "sheet_x": 18, "sheet_y": 26, "short_names": ["imp"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["devil", "angry", "horns"], "search": "imp,devil,angry,horns" }, "japanese_ogre": { "name": "Japanese Ogre", "unified": "1F479", "variations": [], "sheet_x": 18, "sheet_y": 15, "short_names": ["japanese_ogre"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["monster", "red", "mask", "halloween", "scary", "creepy", "devil", "demon"], "search": "japanese,ogre,monster,red,mask,halloween,scary,creepy,devil,demon" }, "japanese_goblin": { "name": "Japanese Goblin", "unified": "1F47A", "variations": [], "sheet_x": 18, "sheet_y": 16, "short_names": ["japanese_goblin"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["red", "evil", "mask", "monster", "scary", "creepy"], "search": "japanese,goblin,red,evil,mask,monster,scary,creepy" }, "skull": { "name": "Skull", "unified": "1F480", "variations": [], "sheet_x": 18, "sheet_y": 27, "short_names": ["skull"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["dead", "skeleton", "creepy"], "search": "skull,dead,skeleton,creepy" }, "ghost": { "name": "Ghost", "unified": "1F47B", "variations": [], "sheet_x": 18, "sheet_y": 17, "short_names": ["ghost"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["halloween", "spooky", "scary"], "search": "ghost,halloween,spooky,scary" }, "alien": { "name": "Extraterrestrial Alien", "unified": "1F47D", "variations": [], "sheet_x": 18, "sheet_y": 24, "short_names": ["alien"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["UFO", "paul", "weird", "outer_space"], "search": "alien,extraterrestrial,ufo,paul,weird,outer_space" }, "robot_face": { "name": "Robot Face", "unified": "1F916", "variations": [], "sheet_x": 32, "sheet_y": 7, "short_names": ["robot_face"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": [], "search": "robot,face" }, "smiley_cat": { "name": "Smiling Cat Face with Open Mouth", "unified": "1F63A", "variations": [], "sheet_x": 27, "sheet_y": 32, "short_names": ["smiley_cat"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["animal", "cats", "happy"], "search": "smiley,cat,smiling,face,with,open,mouth,animal,cats,happy" }, "smile_cat": { "name": "Grinning Cat Face with Smiling Eyes", "unified": "1F638", "variations": [], "sheet_x": 27, "sheet_y": 30, "short_names": ["smile_cat"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["animal", "cats"], "search": "smile,cat,grinning,face,with,smiling,eyes,animal,cats" }, "joy_cat": { "name": "Cat Face with Tears of Joy", "unified": "1F639", "variations": [], "sheet_x": 27, "sheet_y": 31, "short_names": ["joy_cat"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["animal", "cats", "haha", "happy", "tears"], "search": "joy,cat,face,with,tears,of,animal,cats,haha,happy" }, "heart_eyes_cat": { "name": "Smiling Cat Face with Heart-Shaped Eyes", "unified": "1F63B", "variations": [], "sheet_x": 27, "sheet_y": 33, "short_names": ["heart_eyes_cat"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["animal", "love", "like", "affection", "cats", "valentines"], "search": "heart,eyes,cat,smiling,face,with,shaped,animal,love,like,affection,cats,valentines" }, "smirk_cat": { "name": "Cat Face with Wry Smile", "unified": "1F63C", "variations": [], "sheet_x": 27, "sheet_y": 34, "short_names": ["smirk_cat"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["animal", "cats"], "search": "smirk,cat,face,with,wry,smile,animal,cats" }, "kissing_cat": { "name": "Kissing Cat Face with Closed Eyes", "unified": "1F63D", "variations": [], "sheet_x": 27, "sheet_y": 35, "short_names": ["kissing_cat"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["animal", "cats"], "search": "kissing,cat,face,with,closed,eyes,animal,cats" }, "scream_cat": { "name": "Weary Cat Face", "unified": "1F640", "variations": [], "sheet_x": 27, "sheet_y": 38, "short_names": ["scream_cat"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["animal", "cats", "munch", "scared"], "search": "scream,cat,weary,face,animal,cats,munch,scared" }, "crying_cat_face": { "name": "Crying Cat Face", "unified": "1F63F", "variations": [], "sheet_x": 27, "sheet_y": 37, "short_names": ["crying_cat_face"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["animal", "tears", "weep", "sad", "cats", "upset"], "search": "crying,cat,face,animal,tears,weep,sad,cats,upset" }, "pouting_cat": { "name": "Pouting Cat Face", "unified": "1F63E", "variations": [], "sheet_x": 27, "sheet_y": 36, "short_names": ["pouting_cat"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["animal", "cats"], "search": "pouting,cat,face,animal,cats" }, "raised_hands": { "name": "Person Raising Both Hands in Celebration", "unified": "1F64C", "variations": [], "sheet_x": 28, "sheet_y": 29, "short_names": ["raised_hands"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F64C-1F3FB": { "unified": "1F64C-1F3FB", "image": "1f64c-1f3fb.png", "sheet_x": 28, "sheet_y": 30, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F64C-1F3FC": { "unified": "1F64C-1F3FC", "image": "1f64c-1f3fc.png", "sheet_x": 28, "sheet_y": 31, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F64C-1F3FD": { "unified": "1F64C-1F3FD", "image": "1f64c-1f3fd.png", "sheet_x": 28, "sheet_y": 32, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F64C-1F3FE": { "unified": "1F64C-1F3FE", "image": "1f64c-1f3fe.png", "sheet_x": 28, "sheet_y": 33, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F64C-1F3FF": { "unified": "1F64C-1F3FF", "image": "1f64c-1f3ff.png", "sheet_x": 28, "sheet_y": 34, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["gesture", "hooray", "yea", "celebration"], "search": "raised,hands,person,raising,both,in,celebration,gesture,hooray,yea" }, "clap": { "name": "Clapping Hands Sign", "unified": "1F44F", "variations": [], "sheet_x": 15, "sheet_y": 16, "short_names": ["clap"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F44F-1F3FB": { "unified": "1F44F-1F3FB", "image": "1f44f-1f3fb.png", "sheet_x": 15, "sheet_y": 17, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F44F-1F3FC": { "unified": "1F44F-1F3FC", "image": "1f44f-1f3fc.png", "sheet_x": 15, "sheet_y": 18, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F44F-1F3FD": { "unified": "1F44F-1F3FD", "image": "1f44f-1f3fd.png", "sheet_x": 15, "sheet_y": 19, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F44F-1F3FE": { "unified": "1F44F-1F3FE", "image": "1f44f-1f3fe.png", "sheet_x": 15, "sheet_y": 20, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F44F-1F3FF": { "unified": "1F44F-1F3FF", "image": "1f44f-1f3ff.png", "sheet_x": 15, "sheet_y": 21, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["hands", "praise", "applause", "congrats", "yay"], "search": "clap,clapping,hands,sign,praise,applause,congrats,yay" }, "wave": { "name": "Waving Hand Sign", "unified": "1F44B", "variations": [], "sheet_x": 14, "sheet_y": 33, "short_names": ["wave"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F44B-1F3FB": { "unified": "1F44B-1F3FB", "image": "1f44b-1f3fb.png", "sheet_x": 14, "sheet_y": 34, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F44B-1F3FC": { "unified": "1F44B-1F3FC", "image": "1f44b-1f3fc.png", "sheet_x": 14, "sheet_y": 35, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F44B-1F3FD": { "unified": "1F44B-1F3FD", "image": "1f44b-1f3fd.png", "sheet_x": 14, "sheet_y": 36, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F44B-1F3FE": { "unified": "1F44B-1F3FE", "image": "1f44b-1f3fe.png", "sheet_x": 14, "sheet_y": 37, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F44B-1F3FF": { "unified": "1F44B-1F3FF", "image": "1f44b-1f3ff.png", "sheet_x": 14, "sheet_y": 38, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["hands", "gesture", "goodbye", "solong", "farewell", "hello", "palm"], "search": "wave,waving,hand,sign,hands,gesture,goodbye,solong,farewell,hello,palm" }, "+1": { "name": "Thumbs Up Sign", "unified": "1F44D", "variations": [], "sheet_x": 15, "sheet_y": 4, "short_names": ["+1", "thumbsup"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F44D-1F3FB": { "unified": "1F44D-1F3FB", "image": "1f44d-1f3fb.png", "sheet_x": 15, "sheet_y": 5, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F44D-1F3FC": { "unified": "1F44D-1F3FC", "image": "1f44d-1f3fc.png", "sheet_x": 15, "sheet_y": 6, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F44D-1F3FD": { "unified": "1F44D-1F3FD", "image": "1f44d-1f3fd.png", "sheet_x": 15, "sheet_y": 7, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F44D-1F3FE": { "unified": "1F44D-1F3FE", "image": "1f44d-1f3fe.png", "sheet_x": 15, "sheet_y": 8, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F44D-1F3FF": { "unified": "1F44D-1F3FF", "image": "1f44d-1f3ff.png", "sheet_x": 15, "sheet_y": 9, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["thumbsup", "yes", "awesome", "good", "agree", "accept", "cool", "hand", "like"], "search": "+1,thumbsup,thumbs,up,sign,yes,awesome,good,agree,accept,cool,hand,like" }, "-1": { "name": "Thumbs Down Sign", "unified": "1F44E", "variations": [], "sheet_x": 15, "sheet_y": 10, "short_names": ["-1", "thumbsdown"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F44E-1F3FB": { "unified": "1F44E-1F3FB", "image": "1f44e-1f3fb.png", "sheet_x": 15, "sheet_y": 11, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F44E-1F3FC": { "unified": "1F44E-1F3FC", "image": "1f44e-1f3fc.png", "sheet_x": 15, "sheet_y": 12, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F44E-1F3FD": { "unified": "1F44E-1F3FD", "image": "1f44e-1f3fd.png", "sheet_x": 15, "sheet_y": 13, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F44E-1F3FE": { "unified": "1F44E-1F3FE", "image": "1f44e-1f3fe.png", "sheet_x": 15, "sheet_y": 14, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F44E-1F3FF": { "unified": "1F44E-1F3FF", "image": "1f44e-1f3ff.png", "sheet_x": 15, "sheet_y": 15, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["thumbsdown", "no", "dislike", "hand"], "search": ",1,thumbsdown,thumbs,down,sign,no,dislike,hand" }, "facepunch": { "name": "Fisted Hand Sign", "unified": "1F44A", "variations": [], "sheet_x": 14, "sheet_y": 27, "short_names": ["facepunch", "punch"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F44A-1F3FB": { "unified": "1F44A-1F3FB", "image": "1f44a-1f3fb.png", "sheet_x": 14, "sheet_y": 28, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F44A-1F3FC": { "unified": "1F44A-1F3FC", "image": "1f44a-1f3fc.png", "sheet_x": 14, "sheet_y": 29, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F44A-1F3FD": { "unified": "1F44A-1F3FD", "image": "1f44a-1f3fd.png", "sheet_x": 14, "sheet_y": 30, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F44A-1F3FE": { "unified": "1F44A-1F3FE", "image": "1f44a-1f3fe.png", "sheet_x": 14, "sheet_y": 31, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F44A-1F3FF": { "unified": "1F44A-1F3FF", "image": "1f44a-1f3ff.png", "sheet_x": 14, "sheet_y": 32, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["angry", "violence", "fist", "hit", "attack", "hand"], "search": "facepunch,punch,fisted,hand,sign,angry,violence,fist,hit,attack" }, "fist": { "name": "Raised Fist", "unified": "270A", "variations": [], "sheet_x": 3, "sheet_y": 9, "short_names": ["fist"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "270A-1F3FB": { "unified": "270A-1F3FB", "image": "270a-1f3fb.png", "sheet_x": 3, "sheet_y": 10, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "270A-1F3FC": { "unified": "270A-1F3FC", "image": "270a-1f3fc.png", "sheet_x": 3, "sheet_y": 11, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "270A-1F3FD": { "unified": "270A-1F3FD", "image": "270a-1f3fd.png", "sheet_x": 3, "sheet_y": 12, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "270A-1F3FE": { "unified": "270A-1F3FE", "image": "270a-1f3fe.png", "sheet_x": 3, "sheet_y": 13, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "270A-1F3FF": { "unified": "270A-1F3FF", "image": "270a-1f3ff.png", "sheet_x": 3, "sheet_y": 14, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["fingers", "hand", "grasp"], "search": "fist,raised,fingers,hand,grasp" }, "v": { "name": "Victory Hand", "unified": "270C", "variations": ["270C-FE0F"], "sheet_x": 3, "sheet_y": 21, "short_names": ["v"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "270C-1F3FB": { "unified": "270C-1F3FB", "image": "270c-1f3fb.png", "sheet_x": 3, "sheet_y": 22, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "270C-1F3FC": { "unified": "270C-1F3FC", "image": "270c-1f3fc.png", "sheet_x": 3, "sheet_y": 23, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "270C-1F3FD": { "unified": "270C-1F3FD", "image": "270c-1f3fd.png", "sheet_x": 3, "sheet_y": 24, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "270C-1F3FE": { "unified": "270C-1F3FE", "image": "270c-1f3fe.png", "sheet_x": 3, "sheet_y": 25, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "270C-1F3FF": { "unified": "270C-1F3FF", "image": "270c-1f3ff.png", "sheet_x": 3, "sheet_y": 26, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["fingers", "ohyeah", "hand", "peace", "victory", "two"], "search": "v,victory,hand,fingers,ohyeah,peace,two" }, "ok_hand": { "name": "Ok Hand Sign", "unified": "1F44C", "variations": [], "sheet_x": 14, "sheet_y": 39, "short_names": ["ok_hand"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F44C-1F3FB": { "unified": "1F44C-1F3FB", "image": "1f44c-1f3fb.png", "sheet_x": 14, "sheet_y": 40, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F44C-1F3FC": { "unified": "1F44C-1F3FC", "image": "1f44c-1f3fc.png", "sheet_x": 15, "sheet_y": 0, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F44C-1F3FD": { "unified": "1F44C-1F3FD", "image": "1f44c-1f3fd.png", "sheet_x": 15, "sheet_y": 1, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F44C-1F3FE": { "unified": "1F44C-1F3FE", "image": "1f44c-1f3fe.png", "sheet_x": 15, "sheet_y": 2, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F44C-1F3FF": { "unified": "1F44C-1F3FF", "image": "1f44c-1f3ff.png", "sheet_x": 15, "sheet_y": 3, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["fingers", "limbs", "perfect"], "search": "ok,hand,sign,fingers,limbs,perfect" }, "hand": { "name": "Raised Hand", "unified": "270B", "variations": [], "sheet_x": 3, "sheet_y": 15, "short_names": ["hand", "raised_hand"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "270B-1F3FB": { "unified": "270B-1F3FB", "image": "270b-1f3fb.png", "sheet_x": 3, "sheet_y": 16, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "270B-1F3FC": { "unified": "270B-1F3FC", "image": "270b-1f3fc.png", "sheet_x": 3, "sheet_y": 17, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "270B-1F3FD": { "unified": "270B-1F3FD", "image": "270b-1f3fd.png", "sheet_x": 3, "sheet_y": 18, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "270B-1F3FE": { "unified": "270B-1F3FE", "image": "270b-1f3fe.png", "sheet_x": 3, "sheet_y": 19, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "270B-1F3FF": { "unified": "270B-1F3FF", "image": "270b-1f3ff.png", "sheet_x": 3, "sheet_y": 20, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["fingers", "stop", "highfive", "palm", "ban", "raised_hand"], "search": "hand,raised,fingers,stop,highfive,palm,ban,raised_hand" }, "open_hands": { "name": "Open Hands Sign", "unified": "1F450", "variations": [], "sheet_x": 15, "sheet_y": 22, "short_names": ["open_hands"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F450-1F3FB": { "unified": "1F450-1F3FB", "image": "1f450-1f3fb.png", "sheet_x": 15, "sheet_y": 23, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F450-1F3FC": { "unified": "1F450-1F3FC", "image": "1f450-1f3fc.png", "sheet_x": 15, "sheet_y": 24, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F450-1F3FD": { "unified": "1F450-1F3FD", "image": "1f450-1f3fd.png", "sheet_x": 15, "sheet_y": 25, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F450-1F3FE": { "unified": "1F450-1F3FE", "image": "1f450-1f3fe.png", "sheet_x": 15, "sheet_y": 26, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F450-1F3FF": { "unified": "1F450-1F3FF", "image": "1f450-1f3ff.png", "sheet_x": 15, "sheet_y": 27, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["fingers", "butterfly"], "search": "open,hands,sign,fingers,butterfly" }, "muscle": { "name": "Flexed Biceps", "unified": "1F4AA", "variations": [], "sheet_x": 20, "sheet_y": 17, "short_names": ["muscle"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F4AA-1F3FB": { "unified": "1F4AA-1F3FB", "image": "1f4aa-1f3fb.png", "sheet_x": 20, "sheet_y": 18, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F4AA-1F3FC": { "unified": "1F4AA-1F3FC", "image": "1f4aa-1f3fc.png", "sheet_x": 20, "sheet_y": 19, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F4AA-1F3FD": { "unified": "1F4AA-1F3FD", "image": "1f4aa-1f3fd.png", "sheet_x": 20, "sheet_y": 20, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F4AA-1F3FE": { "unified": "1F4AA-1F3FE", "image": "1f4aa-1f3fe.png", "sheet_x": 20, "sheet_y": 21, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F4AA-1F3FF": { "unified": "1F4AA-1F3FF", "image": "1f4aa-1f3ff.png", "sheet_x": 20, "sheet_y": 22, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["arm", "flex", "hand", "summer", "strong", "biceps"], "search": "muscle,flexed,biceps,arm,flex,hand,summer,strong" }, "pray": { "name": "Person with Folded Hands", "unified": "1F64F", "variations": [], "sheet_x": 29, "sheet_y": 6, "short_names": ["pray"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F64F-1F3FB": { "unified": "1F64F-1F3FB", "image": "1f64f-1f3fb.png", "sheet_x": 29, "sheet_y": 7, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F64F-1F3FC": { "unified": "1F64F-1F3FC", "image": "1f64f-1f3fc.png", "sheet_x": 29, "sheet_y": 8, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F64F-1F3FD": { "unified": "1F64F-1F3FD", "image": "1f64f-1f3fd.png", "sheet_x": 29, "sheet_y": 9, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F64F-1F3FE": { "unified": "1F64F-1F3FE", "image": "1f64f-1f3fe.png", "sheet_x": 29, "sheet_y": 10, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F64F-1F3FF": { "unified": "1F64F-1F3FF", "image": "1f64f-1f3ff.png", "sheet_x": 29, "sheet_y": 11, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["please", "hope", "wish", "namaste", "highfive"], "search": "pray,person,with,folded,hands,please,hope,wish,namaste,highfive" }, "point_up": { "name": "White Up Pointing Index", "unified": "261D", "variations": ["261D-FE0F"], "sheet_x": 1, "sheet_y": 10, "short_names": ["point_up"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "261D-1F3FB": { "unified": "261D-1F3FB", "image": "261d-1f3fb.png", "sheet_x": 1, "sheet_y": 11, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "261D-1F3FC": { "unified": "261D-1F3FC", "image": "261d-1f3fc.png", "sheet_x": 1, "sheet_y": 12, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "261D-1F3FD": { "unified": "261D-1F3FD", "image": "261d-1f3fd.png", "sheet_x": 1, "sheet_y": 13, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "261D-1F3FE": { "unified": "261D-1F3FE", "image": "261d-1f3fe.png", "sheet_x": 1, "sheet_y": 14, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "261D-1F3FF": { "unified": "261D-1F3FF", "image": "261d-1f3ff.png", "sheet_x": 1, "sheet_y": 15, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["hand", "fingers", "direction"], "search": "point,up,white,pointing,index,hand,fingers,direction" }, "point_up_2": { "name": "White Up Pointing Backhand Index", "unified": "1F446", "variations": [], "sheet_x": 14, "sheet_y": 3, "short_names": ["point_up_2"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F446-1F3FB": { "unified": "1F446-1F3FB", "image": "1f446-1f3fb.png", "sheet_x": 14, "sheet_y": 4, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F446-1F3FC": { "unified": "1F446-1F3FC", "image": "1f446-1f3fc.png", "sheet_x": 14, "sheet_y": 5, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F446-1F3FD": { "unified": "1F446-1F3FD", "image": "1f446-1f3fd.png", "sheet_x": 14, "sheet_y": 6, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F446-1F3FE": { "unified": "1F446-1F3FE", "image": "1f446-1f3fe.png", "sheet_x": 14, "sheet_y": 7, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F446-1F3FF": { "unified": "1F446-1F3FF", "image": "1f446-1f3ff.png", "sheet_x": 14, "sheet_y": 8, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["fingers", "hand", "direction"], "search": "point,up,2,white,pointing,backhand,index,fingers,hand,direction" }, "point_down": { "name": "White Down Pointing Backhand Index", "unified": "1F447", "variations": [], "sheet_x": 14, "sheet_y": 9, "short_names": ["point_down"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F447-1F3FB": { "unified": "1F447-1F3FB", "image": "1f447-1f3fb.png", "sheet_x": 14, "sheet_y": 10, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F447-1F3FC": { "unified": "1F447-1F3FC", "image": "1f447-1f3fc.png", "sheet_x": 14, "sheet_y": 11, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F447-1F3FD": { "unified": "1F447-1F3FD", "image": "1f447-1f3fd.png", "sheet_x": 14, "sheet_y": 12, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F447-1F3FE": { "unified": "1F447-1F3FE", "image": "1f447-1f3fe.png", "sheet_x": 14, "sheet_y": 13, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F447-1F3FF": { "unified": "1F447-1F3FF", "image": "1f447-1f3ff.png", "sheet_x": 14, "sheet_y": 14, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["fingers", "hand", "direction"], "search": "point,down,white,pointing,backhand,index,fingers,hand,direction" }, "point_left": { "name": "White Left Pointing Backhand Index", "unified": "1F448", "variations": [], "sheet_x": 14, "sheet_y": 15, "short_names": ["point_left"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F448-1F3FB": { "unified": "1F448-1F3FB", "image": "1f448-1f3fb.png", "sheet_x": 14, "sheet_y": 16, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F448-1F3FC": { "unified": "1F448-1F3FC", "image": "1f448-1f3fc.png", "sheet_x": 14, "sheet_y": 17, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F448-1F3FD": { "unified": "1F448-1F3FD", "image": "1f448-1f3fd.png", "sheet_x": 14, "sheet_y": 18, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F448-1F3FE": { "unified": "1F448-1F3FE", "image": "1f448-1f3fe.png", "sheet_x": 14, "sheet_y": 19, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F448-1F3FF": { "unified": "1F448-1F3FF", "image": "1f448-1f3ff.png", "sheet_x": 14, "sheet_y": 20, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["direction", "fingers", "hand"], "search": "point,left,white,pointing,backhand,index,direction,fingers,hand" }, "point_right": { "name": "White Right Pointing Backhand Index", "unified": "1F449", "variations": [], "sheet_x": 14, "sheet_y": 21, "short_names": ["point_right"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F449-1F3FB": { "unified": "1F449-1F3FB", "image": "1f449-1f3fb.png", "sheet_x": 14, "sheet_y": 22, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F449-1F3FC": { "unified": "1F449-1F3FC", "image": "1f449-1f3fc.png", "sheet_x": 14, "sheet_y": 23, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F449-1F3FD": { "unified": "1F449-1F3FD", "image": "1f449-1f3fd.png", "sheet_x": 14, "sheet_y": 24, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F449-1F3FE": { "unified": "1F449-1F3FE", "image": "1f449-1f3fe.png", "sheet_x": 14, "sheet_y": 25, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F449-1F3FF": { "unified": "1F449-1F3FF", "image": "1f449-1f3ff.png", "sheet_x": 14, "sheet_y": 26, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["fingers", "hand", "direction"], "search": "point,right,white,pointing,backhand,index,fingers,hand,direction" }, "middle_finger": { "name": "Reversed Hand with Middle Finger Extended", "unified": "1F595", "variations": [], "sheet_x": 25, "sheet_y": 19, "short_names": ["middle_finger", "reversed_hand_with_middle_finger_extended"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F595-1F3FB": { "unified": "1F595-1F3FB", "image": "1f595-1f3fb.png", "sheet_x": 25, "sheet_y": 20, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F595-1F3FC": { "unified": "1F595-1F3FC", "image": "1f595-1f3fc.png", "sheet_x": 25, "sheet_y": 21, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F595-1F3FD": { "unified": "1F595-1F3FD", "image": "1f595-1f3fd.png", "sheet_x": 25, "sheet_y": 22, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F595-1F3FE": { "unified": "1F595-1F3FE", "image": "1f595-1f3fe.png", "sheet_x": 25, "sheet_y": 23, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F595-1F3FF": { "unified": "1F595-1F3FF", "image": "1f595-1f3ff.png", "sheet_x": 25, "sheet_y": 24, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["hand", "fingers", "rude"], "search": "middle,finger,reversed,hand,with,extended,fingers,rude" }, "raised_hand_with_fingers_splayed": { "name": "Raised Hand with Fingers Splayed", "unified": "1F590", "variations": [], "sheet_x": 25, "sheet_y": 13, "short_names": ["raised_hand_with_fingers_splayed"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F590-1F3FB": { "unified": "1F590-1F3FB", "image": "1f590-1f3fb.png", "sheet_x": 25, "sheet_y": 14, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F590-1F3FC": { "unified": "1F590-1F3FC", "image": "1f590-1f3fc.png", "sheet_x": 25, "sheet_y": 15, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F590-1F3FD": { "unified": "1F590-1F3FD", "image": "1f590-1f3fd.png", "sheet_x": 25, "sheet_y": 16, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F590-1F3FE": { "unified": "1F590-1F3FE", "image": "1f590-1f3fe.png", "sheet_x": 25, "sheet_y": 17, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F590-1F3FF": { "unified": "1F590-1F3FF", "image": "1f590-1f3ff.png", "sheet_x": 25, "sheet_y": 18, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": [], "search": "raised,hand,with,fingers,splayed" }, "the_horns": { "name": "Sign of the Horns", "unified": "1F918", "variations": [], "sheet_x": 32, "sheet_y": 9, "short_names": ["the_horns", "sign_of_the_horns"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F918-1F3FB": { "unified": "1F918-1F3FB", "image": "1f918-1f3fb.png", "sheet_x": 32, "sheet_y": 10, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F918-1F3FC": { "unified": "1F918-1F3FC", "image": "1f918-1f3fc.png", "sheet_x": 32, "sheet_y": 11, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F918-1F3FD": { "unified": "1F918-1F3FD", "image": "1f918-1f3fd.png", "sheet_x": 32, "sheet_y": 12, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F918-1F3FE": { "unified": "1F918-1F3FE", "image": "1f918-1f3fe.png", "sheet_x": 32, "sheet_y": 13, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F918-1F3FF": { "unified": "1F918-1F3FF", "image": "1f918-1f3ff.png", "sheet_x": 32, "sheet_y": 14, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": [], "search": "the,horns,sign,of" }, "spock-hand": { "name": "Raised Hand with Part Between Middle and Ring Fingers", "unified": "1F596", "variations": [], "sheet_x": 25, "sheet_y": 25, "short_names": ["spock-hand"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F596-1F3FB": { "unified": "1F596-1F3FB", "image": "1f596-1f3fb.png", "sheet_x": 25, "sheet_y": 26, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F596-1F3FC": { "unified": "1F596-1F3FC", "image": "1f596-1f3fc.png", "sheet_x": 25, "sheet_y": 27, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F596-1F3FD": { "unified": "1F596-1F3FD", "image": "1f596-1f3fd.png", "sheet_x": 25, "sheet_y": 28, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F596-1F3FE": { "unified": "1F596-1F3FE", "image": "1f596-1f3fe.png", "sheet_x": 25, "sheet_y": 29, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F596-1F3FF": { "unified": "1F596-1F3FF", "image": "1f596-1f3ff.png", "sheet_x": 25, "sheet_y": 30, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": [], "search": "spock,hand,raised,with,part,between,middle,and,ring,fingers" }, "writing_hand": { "name": "Writing Hand", "unified": "270D", "variations": ["270D-FE0F"], "sheet_x": 3, "sheet_y": 27, "short_names": ["writing_hand"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "270D-1F3FB": { "unified": "270D-1F3FB", "image": "270d-1f3fb.png", "sheet_x": 3, "sheet_y": 28, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "270D-1F3FC": { "unified": "270D-1F3FC", "image": "270d-1f3fc.png", "sheet_x": 3, "sheet_y": 29, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "270D-1F3FD": { "unified": "270D-1F3FD", "image": "270d-1f3fd.png", "sheet_x": 3, "sheet_y": 30, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "270D-1F3FE": { "unified": "270D-1F3FE", "image": "270d-1f3fe.png", "sheet_x": 3, "sheet_y": 31, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "270D-1F3FF": { "unified": "270D-1F3FF", "image": "270d-1f3ff.png", "sheet_x": 3, "sheet_y": 32, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["pen", "stationery"], "search": "writing,hand,pen,stationery" }, "nail_care": { "name": "Nail Polish", "unified": "1F485", "variations": [], "sheet_x": 19, "sheet_y": 6, "short_names": ["nail_care"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F485-1F3FB": { "unified": "1F485-1F3FB", "image": "1f485-1f3fb.png", "sheet_x": 19, "sheet_y": 7, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F485-1F3FC": { "unified": "1F485-1F3FC", "image": "1f485-1f3fc.png", "sheet_x": 19, "sheet_y": 8, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F485-1F3FD": { "unified": "1F485-1F3FD", "image": "1f485-1f3fd.png", "sheet_x": 19, "sheet_y": 9, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F485-1F3FE": { "unified": "1F485-1F3FE", "image": "1f485-1f3fe.png", "sheet_x": 19, "sheet_y": 10, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F485-1F3FF": { "unified": "1F485-1F3FF", "image": "1f485-1f3ff.png", "sheet_x": 19, "sheet_y": 11, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["beauty", "manicure", "finger", "fashion"], "search": "nail,care,polish,beauty,manicure,finger,fashion" }, "lips": { "name": "Mouth", "unified": "1F444", "variations": [], "sheet_x": 14, "sheet_y": 1, "short_names": ["lips"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["mouth", "kiss"], "search": "lips,mouth,kiss" }, "tongue": { "name": "Tongue", "unified": "1F445", "variations": [], "sheet_x": 14, "sheet_y": 2, "short_names": ["tongue"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["mouth", "playful"], "search": "tongue,mouth,playful" }, "ear": { "name": "Ear", "unified": "1F442", "variations": [], "sheet_x": 13, "sheet_y": 30, "short_names": ["ear"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F442-1F3FB": { "unified": "1F442-1F3FB", "image": "1f442-1f3fb.png", "sheet_x": 13, "sheet_y": 31, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F442-1F3FC": { "unified": "1F442-1F3FC", "image": "1f442-1f3fc.png", "sheet_x": 13, "sheet_y": 32, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F442-1F3FD": { "unified": "1F442-1F3FD", "image": "1f442-1f3fd.png", "sheet_x": 13, "sheet_y": 33, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F442-1F3FE": { "unified": "1F442-1F3FE", "image": "1f442-1f3fe.png", "sheet_x": 13, "sheet_y": 34, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F442-1F3FF": { "unified": "1F442-1F3FF", "image": "1f442-1f3ff.png", "sheet_x": 13, "sheet_y": 35, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["face", "hear", "sound", "listen"], "search": "ear,face,hear,sound,listen" }, "nose": { "name": "Nose", "unified": "1F443", "variations": [], "sheet_x": 13, "sheet_y": 36, "short_names": ["nose"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F443-1F3FB": { "unified": "1F443-1F3FB", "image": "1f443-1f3fb.png", "sheet_x": 13, "sheet_y": 37, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F443-1F3FC": { "unified": "1F443-1F3FC", "image": "1f443-1f3fc.png", "sheet_x": 13, "sheet_y": 38, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F443-1F3FD": { "unified": "1F443-1F3FD", "image": "1f443-1f3fd.png", "sheet_x": 13, "sheet_y": 39, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F443-1F3FE": { "unified": "1F443-1F3FE", "image": "1f443-1f3fe.png", "sheet_x": 13, "sheet_y": 40, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F443-1F3FF": { "unified": "1F443-1F3FF", "image": "1f443-1f3ff.png", "sheet_x": 14, "sheet_y": 0, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["smell", "sniff"], "search": "nose,smell,sniff" }, "eye": { "name": "Eye", "unified": "1F441", "variations": [], "sheet_x": 13, "sheet_y": 29, "short_names": ["eye"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["face", "look", "see", "watch", "stare"], "search": "eye,face,look,see,watch,stare" }, "eyes": { "name": "Eyes", "unified": "1F440", "variations": [], "sheet_x": 13, "sheet_y": 28, "short_names": ["eyes"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["look", "watch", "stalk", "peek", "see"], "search": "eyes,look,watch,stalk,peek,see" }, "bust_in_silhouette": { "name": "Bust in Silhouette", "unified": "1F464", "variations": [], "sheet_x": 16, "sheet_y": 6, "short_names": ["bust_in_silhouette"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["user", "person", "human"], "search": "bust,in,silhouette,user,person,human" }, "busts_in_silhouette": { "name": "Busts in Silhouette", "unified": "1F465", "variations": [], "sheet_x": 16, "sheet_y": 7, "short_names": ["busts_in_silhouette"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["user", "person", "human", "group", "team"], "search": "busts,in,silhouette,user,person,human,group,team" }, "speaking_head_in_silhouette": { "name": "Speaking Head in Silhouette", "unified": "1F5E3", "variations": [], "sheet_x": 26, "sheet_y": 5, "short_names": ["speaking_head_in_silhouette"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": [], "search": "speaking,head,in,silhouette" }, "baby": { "name": "Baby", "unified": "1F476", "variations": [], "sheet_x": 17, "sheet_y": 38, "short_names": ["baby"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F476-1F3FB": { "unified": "1F476-1F3FB", "image": "1f476-1f3fb.png", "sheet_x": 17, "sheet_y": 39, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F476-1F3FC": { "unified": "1F476-1F3FC", "image": "1f476-1f3fc.png", "sheet_x": 17, "sheet_y": 40, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F476-1F3FD": { "unified": "1F476-1F3FD", "image": "1f476-1f3fd.png", "sheet_x": 18, "sheet_y": 0, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F476-1F3FE": { "unified": "1F476-1F3FE", "image": "1f476-1f3fe.png", "sheet_x": 18, "sheet_y": 1, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F476-1F3FF": { "unified": "1F476-1F3FF", "image": "1f476-1f3ff.png", "sheet_x": 18, "sheet_y": 2, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["child", "boy", "girl", "toddler"], "search": "baby,child,boy,girl,toddler" }, "boy": { "name": "Boy", "unified": "1F466", "variations": [], "sheet_x": 16, "sheet_y": 8, "short_names": ["boy"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F466-1F3FB": { "unified": "1F466-1F3FB", "image": "1f466-1f3fb.png", "sheet_x": 16, "sheet_y": 9, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F466-1F3FC": { "unified": "1F466-1F3FC", "image": "1f466-1f3fc.png", "sheet_x": 16, "sheet_y": 10, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F466-1F3FD": { "unified": "1F466-1F3FD", "image": "1f466-1f3fd.png", "sheet_x": 16, "sheet_y": 11, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F466-1F3FE": { "unified": "1F466-1F3FE", "image": "1f466-1f3fe.png", "sheet_x": 16, "sheet_y": 12, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F466-1F3FF": { "unified": "1F466-1F3FF", "image": "1f466-1f3ff.png", "sheet_x": 16, "sheet_y": 13, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["man", "male", "guy", "teenager"], "search": "boy,man,male,guy,teenager" }, "girl": { "name": "Girl", "unified": "1F467", "variations": [], "sheet_x": 16, "sheet_y": 14, "short_names": ["girl"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F467-1F3FB": { "unified": "1F467-1F3FB", "image": "1f467-1f3fb.png", "sheet_x": 16, "sheet_y": 15, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F467-1F3FC": { "unified": "1F467-1F3FC", "image": "1f467-1f3fc.png", "sheet_x": 16, "sheet_y": 16, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F467-1F3FD": { "unified": "1F467-1F3FD", "image": "1f467-1f3fd.png", "sheet_x": 16, "sheet_y": 17, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F467-1F3FE": { "unified": "1F467-1F3FE", "image": "1f467-1f3fe.png", "sheet_x": 16, "sheet_y": 18, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F467-1F3FF": { "unified": "1F467-1F3FF", "image": "1f467-1f3ff.png", "sheet_x": 16, "sheet_y": 19, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["female", "woman", "teenager"], "search": "girl,female,woman,teenager" }, "man": { "name": "Man", "unified": "1F468", "variations": [], "sheet_x": 16, "sheet_y": 20, "short_names": ["man"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F468-1F3FB": { "unified": "1F468-1F3FB", "image": "1f468-1f3fb.png", "sheet_x": 16, "sheet_y": 21, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F468-1F3FC": { "unified": "1F468-1F3FC", "image": "1f468-1f3fc.png", "sheet_x": 16, "sheet_y": 22, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F468-1F3FD": { "unified": "1F468-1F3FD", "image": "1f468-1f3fd.png", "sheet_x": 16, "sheet_y": 23, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F468-1F3FE": { "unified": "1F468-1F3FE", "image": "1f468-1f3fe.png", "sheet_x": 16, "sheet_y": 24, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F468-1F3FF": { "unified": "1F468-1F3FF", "image": "1f468-1f3ff.png", "sheet_x": 16, "sheet_y": 25, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["mustache", "father", "dad", "guy", "classy", "sir", "moustache"], "search": "man,mustache,father,dad,guy,classy,sir,moustache" }, "woman": { "name": "Woman", "unified": "1F469", "variations": [], "sheet_x": 16, "sheet_y": 26, "short_names": ["woman"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F469-1F3FB": { "unified": "1F469-1F3FB", "image": "1f469-1f3fb.png", "sheet_x": 16, "sheet_y": 27, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F469-1F3FC": { "unified": "1F469-1F3FC", "image": "1f469-1f3fc.png", "sheet_x": 16, "sheet_y": 28, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F469-1F3FD": { "unified": "1F469-1F3FD", "image": "1f469-1f3fd.png", "sheet_x": 16, "sheet_y": 29, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F469-1F3FE": { "unified": "1F469-1F3FE", "image": "1f469-1f3fe.png", "sheet_x": 16, "sheet_y": 30, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F469-1F3FF": { "unified": "1F469-1F3FF", "image": "1f469-1f3ff.png", "sheet_x": 16, "sheet_y": 31, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["female", "girls", "lady"], "search": "woman,female,girls,lady" }, "person_with_blond_hair": { "name": "Person with Blond Hair", "unified": "1F471", "variations": [], "sheet_x": 17, "sheet_y": 8, "short_names": ["person_with_blond_hair"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F471-1F3FB": { "unified": "1F471-1F3FB", "image": "1f471-1f3fb.png", "sheet_x": 17, "sheet_y": 9, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F471-1F3FC": { "unified": "1F471-1F3FC", "image": "1f471-1f3fc.png", "sheet_x": 17, "sheet_y": 10, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F471-1F3FD": { "unified": "1F471-1F3FD", "image": "1f471-1f3fd.png", "sheet_x": 17, "sheet_y": 11, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F471-1F3FE": { "unified": "1F471-1F3FE", "image": "1f471-1f3fe.png", "sheet_x": 17, "sheet_y": 12, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F471-1F3FF": { "unified": "1F471-1F3FF", "image": "1f471-1f3ff.png", "sheet_x": 17, "sheet_y": 13, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["man", "male", "boy", "blonde", "guy"], "search": "person,with,blond,hair,man,male,boy,blonde,guy" }, "older_man": { "name": "Older Man", "unified": "1F474", "variations": [], "sheet_x": 17, "sheet_y": 26, "short_names": ["older_man"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F474-1F3FB": { "unified": "1F474-1F3FB", "image": "1f474-1f3fb.png", "sheet_x": 17, "sheet_y": 27, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F474-1F3FC": { "unified": "1F474-1F3FC", "image": "1f474-1f3fc.png", "sheet_x": 17, "sheet_y": 28, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F474-1F3FD": { "unified": "1F474-1F3FD", "image": "1f474-1f3fd.png", "sheet_x": 17, "sheet_y": 29, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F474-1F3FE": { "unified": "1F474-1F3FE", "image": "1f474-1f3fe.png", "sheet_x": 17, "sheet_y": 30, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F474-1F3FF": { "unified": "1F474-1F3FF", "image": "1f474-1f3ff.png", "sheet_x": 17, "sheet_y": 31, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["human", "male", "men"], "search": "older,man,human,male,men" }, "older_woman": { "name": "Older Woman", "unified": "1F475", "variations": [], "sheet_x": 17, "sheet_y": 32, "short_names": ["older_woman"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F475-1F3FB": { "unified": "1F475-1F3FB", "image": "1f475-1f3fb.png", "sheet_x": 17, "sheet_y": 33, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F475-1F3FC": { "unified": "1F475-1F3FC", "image": "1f475-1f3fc.png", "sheet_x": 17, "sheet_y": 34, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F475-1F3FD": { "unified": "1F475-1F3FD", "image": "1f475-1f3fd.png", "sheet_x": 17, "sheet_y": 35, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F475-1F3FE": { "unified": "1F475-1F3FE", "image": "1f475-1f3fe.png", "sheet_x": 17, "sheet_y": 36, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F475-1F3FF": { "unified": "1F475-1F3FF", "image": "1f475-1f3ff.png", "sheet_x": 17, "sheet_y": 37, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["female", "women", "girl", "lady"], "search": "older,woman,female,women,girl,lady" }, "man_with_gua_pi_mao": { "name": "Man with Gua Pi Mao", "unified": "1F472", "variations": [], "sheet_x": 17, "sheet_y": 14, "short_names": ["man_with_gua_pi_mao"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F472-1F3FB": { "unified": "1F472-1F3FB", "image": "1f472-1f3fb.png", "sheet_x": 17, "sheet_y": 15, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F472-1F3FC": { "unified": "1F472-1F3FC", "image": "1f472-1f3fc.png", "sheet_x": 17, "sheet_y": 16, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F472-1F3FD": { "unified": "1F472-1F3FD", "image": "1f472-1f3fd.png", "sheet_x": 17, "sheet_y": 17, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F472-1F3FE": { "unified": "1F472-1F3FE", "image": "1f472-1f3fe.png", "sheet_x": 17, "sheet_y": 18, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F472-1F3FF": { "unified": "1F472-1F3FF", "image": "1f472-1f3ff.png", "sheet_x": 17, "sheet_y": 19, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["male", "boy"], "search": "man,with,gua,pi,mao,male,boy" }, "man_with_turban": { "name": "Man with Turban", "unified": "1F473", "variations": [], "sheet_x": 17, "sheet_y": 20, "short_names": ["man_with_turban"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F473-1F3FB": { "unified": "1F473-1F3FB", "image": "1f473-1f3fb.png", "sheet_x": 17, "sheet_y": 21, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F473-1F3FC": { "unified": "1F473-1F3FC", "image": "1f473-1f3fc.png", "sheet_x": 17, "sheet_y": 22, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F473-1F3FD": { "unified": "1F473-1F3FD", "image": "1f473-1f3fd.png", "sheet_x": 17, "sheet_y": 23, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F473-1F3FE": { "unified": "1F473-1F3FE", "image": "1f473-1f3fe.png", "sheet_x": 17, "sheet_y": 24, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F473-1F3FF": { "unified": "1F473-1F3FF", "image": "1f473-1f3ff.png", "sheet_x": 17, "sheet_y": 25, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["male", "indian", "hinduism", "arabs"], "search": "man,with,turban,male,indian,hinduism,arabs" }, "cop": { "name": "Police Officer", "unified": "1F46E", "variations": [], "sheet_x": 16, "sheet_y": 36, "short_names": ["cop"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F46E-1F3FB": { "unified": "1F46E-1F3FB", "image": "1f46e-1f3fb.png", "sheet_x": 16, "sheet_y": 37, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F46E-1F3FC": { "unified": "1F46E-1F3FC", "image": "1f46e-1f3fc.png", "sheet_x": 16, "sheet_y": 38, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F46E-1F3FD": { "unified": "1F46E-1F3FD", "image": "1f46e-1f3fd.png", "sheet_x": 16, "sheet_y": 39, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F46E-1F3FE": { "unified": "1F46E-1F3FE", "image": "1f46e-1f3fe.png", "sheet_x": 16, "sheet_y": 40, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F46E-1F3FF": { "unified": "1F46E-1F3FF", "image": "1f46e-1f3ff.png", "sheet_x": 17, "sheet_y": 0, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["man", "police", "law", "legal", "enforcement", "arrest", "911"], "search": "cop,police,officer,man,law,legal,enforcement,arrest,911" }, "construction_worker": { "name": "Construction Worker", "unified": "1F477", "variations": [], "sheet_x": 18, "sheet_y": 3, "short_names": ["construction_worker"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F477-1F3FB": { "unified": "1F477-1F3FB", "image": "1f477-1f3fb.png", "sheet_x": 18, "sheet_y": 4, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F477-1F3FC": { "unified": "1F477-1F3FC", "image": "1f477-1f3fc.png", "sheet_x": 18, "sheet_y": 5, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F477-1F3FD": { "unified": "1F477-1F3FD", "image": "1f477-1f3fd.png", "sheet_x": 18, "sheet_y": 6, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F477-1F3FE": { "unified": "1F477-1F3FE", "image": "1f477-1f3fe.png", "sheet_x": 18, "sheet_y": 7, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F477-1F3FF": { "unified": "1F477-1F3FF", "image": "1f477-1f3ff.png", "sheet_x": 18, "sheet_y": 8, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["male", "human", "wip", "guy", "build"], "search": "construction,worker,male,human,wip,guy,build" }, "guardsman": { "name": "Guardsman", "unified": "1F482", "variations": [], "sheet_x": 18, "sheet_y": 34, "short_names": ["guardsman"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F482-1F3FB": { "unified": "1F482-1F3FB", "image": "1f482-1f3fb.png", "sheet_x": 18, "sheet_y": 35, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F482-1F3FC": { "unified": "1F482-1F3FC", "image": "1f482-1f3fc.png", "sheet_x": 18, "sheet_y": 36, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F482-1F3FD": { "unified": "1F482-1F3FD", "image": "1f482-1f3fd.png", "sheet_x": 18, "sheet_y": 37, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F482-1F3FE": { "unified": "1F482-1F3FE", "image": "1f482-1f3fe.png", "sheet_x": 18, "sheet_y": 38, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F482-1F3FF": { "unified": "1F482-1F3FF", "image": "1f482-1f3ff.png", "sheet_x": 18, "sheet_y": 39, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["uk", "gb", "british", "male", "guy", "royal"], "search": "guardsman,uk,gb,british,male,guy,royal" }, "sleuth_or_spy": { "name": "Sleuth or Spy", "unified": "1F575", "variations": [], "sheet_x": 24, "sheet_y": 39, "short_names": ["sleuth_or_spy"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F575-1F3FB": { "unified": "1F575-1F3FB", "image": "1f575-1f3fb.png", "sheet_x": 24, "sheet_y": 40, "has_img_apple": true, "has_img_google": false, "has_img_twitter": false, "has_img_emojione": true }, "1F575-1F3FC": { "unified": "1F575-1F3FC", "image": "1f575-1f3fc.png", "sheet_x": 25, "sheet_y": 0, "has_img_apple": true, "has_img_google": false, "has_img_twitter": false, "has_img_emojione": true }, "1F575-1F3FD": { "unified": "1F575-1F3FD", "image": "1f575-1f3fd.png", "sheet_x": 25, "sheet_y": 1, "has_img_apple": true, "has_img_google": false, "has_img_twitter": false, "has_img_emojione": true }, "1F575-1F3FE": { "unified": "1F575-1F3FE", "image": "1f575-1f3fe.png", "sheet_x": 25, "sheet_y": 2, "has_img_apple": true, "has_img_google": false, "has_img_twitter": false, "has_img_emojione": true }, "1F575-1F3FF": { "unified": "1F575-1F3FF", "image": "1f575-1f3ff.png", "sheet_x": 25, "sheet_y": 3, "has_img_apple": true, "has_img_google": false, "has_img_twitter": false, "has_img_emojione": true } }, "emoticons": [], "keywords": [], "search": "sleuth,or,spy" }, "santa": { "name": "Father Christmas", "unified": "1F385", "variations": [], "sheet_x": 8, "sheet_y": 29, "short_names": ["santa"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F385-1F3FB": { "unified": "1F385-1F3FB", "image": "1f385-1f3fb.png", "sheet_x": 8, "sheet_y": 30, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F385-1F3FC": { "unified": "1F385-1F3FC", "image": "1f385-1f3fc.png", "sheet_x": 8, "sheet_y": 31, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F385-1F3FD": { "unified": "1F385-1F3FD", "image": "1f385-1f3fd.png", "sheet_x": 8, "sheet_y": 32, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F385-1F3FE": { "unified": "1F385-1F3FE", "image": "1f385-1f3fe.png", "sheet_x": 8, "sheet_y": 33, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F385-1F3FF": { "unified": "1F385-1F3FF", "image": "1f385-1f3ff.png", "sheet_x": 8, "sheet_y": 34, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["festival", "man", "male", "xmas", "father christmas"], "search": "santa,father,christmas,festival,man,male,xmas,father christmas" }, "angel": { "name": "Baby Angel", "unified": "1F47C", "variations": [], "sheet_x": 18, "sheet_y": 18, "short_names": ["angel"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F47C-1F3FB": { "unified": "1F47C-1F3FB", "image": "1f47c-1f3fb.png", "sheet_x": 18, "sheet_y": 19, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F47C-1F3FC": { "unified": "1F47C-1F3FC", "image": "1f47c-1f3fc.png", "sheet_x": 18, "sheet_y": 20, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F47C-1F3FD": { "unified": "1F47C-1F3FD", "image": "1f47c-1f3fd.png", "sheet_x": 18, "sheet_y": 21, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F47C-1F3FE": { "unified": "1F47C-1F3FE", "image": "1f47c-1f3fe.png", "sheet_x": 18, "sheet_y": 22, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F47C-1F3FF": { "unified": "1F47C-1F3FF", "image": "1f47c-1f3ff.png", "sheet_x": 18, "sheet_y": 23, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["heaven", "wings", "halo"], "search": "angel,baby,heaven,wings,halo" }, "princess": { "name": "Princess", "unified": "1F478", "variations": [], "sheet_x": 18, "sheet_y": 9, "short_names": ["princess"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F478-1F3FB": { "unified": "1F478-1F3FB", "image": "1f478-1f3fb.png", "sheet_x": 18, "sheet_y": 10, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F478-1F3FC": { "unified": "1F478-1F3FC", "image": "1f478-1f3fc.png", "sheet_x": 18, "sheet_y": 11, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F478-1F3FD": { "unified": "1F478-1F3FD", "image": "1f478-1f3fd.png", "sheet_x": 18, "sheet_y": 12, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F478-1F3FE": { "unified": "1F478-1F3FE", "image": "1f478-1f3fe.png", "sheet_x": 18, "sheet_y": 13, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F478-1F3FF": { "unified": "1F478-1F3FF", "image": "1f478-1f3ff.png", "sheet_x": 18, "sheet_y": 14, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["girl", "woman", "female", "blond", "crown", "royal", "queen"], "search": "princess,girl,woman,female,blond,crown,royal,queen" }, "bride_with_veil": { "name": "Bride with Veil", "unified": "1F470", "variations": [], "sheet_x": 17, "sheet_y": 2, "short_names": ["bride_with_veil"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F470-1F3FB": { "unified": "1F470-1F3FB", "image": "1f470-1f3fb.png", "sheet_x": 17, "sheet_y": 3, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F470-1F3FC": { "unified": "1F470-1F3FC", "image": "1f470-1f3fc.png", "sheet_x": 17, "sheet_y": 4, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F470-1F3FD": { "unified": "1F470-1F3FD", "image": "1f470-1f3fd.png", "sheet_x": 17, "sheet_y": 5, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F470-1F3FE": { "unified": "1F470-1F3FE", "image": "1f470-1f3fe.png", "sheet_x": 17, "sheet_y": 6, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F470-1F3FF": { "unified": "1F470-1F3FF", "image": "1f470-1f3ff.png", "sheet_x": 17, "sheet_y": 7, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["couple", "marriage", "wedding"], "search": "bride,with,veil,couple,marriage,wedding" }, "walking": { "name": "Pedestrian", "unified": "1F6B6", "variations": [], "sheet_x": 30, "sheet_y": 40, "short_names": ["walking"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F6B6-1F3FB": { "unified": "1F6B6-1F3FB", "image": "1f6b6-1f3fb.png", "sheet_x": 31, "sheet_y": 0, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F6B6-1F3FC": { "unified": "1F6B6-1F3FC", "image": "1f6b6-1f3fc.png", "sheet_x": 31, "sheet_y": 1, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F6B6-1F3FD": { "unified": "1F6B6-1F3FD", "image": "1f6b6-1f3fd.png", "sheet_x": 31, "sheet_y": 2, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F6B6-1F3FE": { "unified": "1F6B6-1F3FE", "image": "1f6b6-1f3fe.png", "sheet_x": 31, "sheet_y": 3, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F6B6-1F3FF": { "unified": "1F6B6-1F3FF", "image": "1f6b6-1f3ff.png", "sheet_x": 31, "sheet_y": 4, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["human", "feet", "steps"], "search": "walking,pedestrian,human,feet,steps" }, "runner": { "name": "Runner", "unified": "1F3C3", "variations": [], "sheet_x": 10, "sheet_y": 9, "short_names": ["runner", "running"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F3C3-1F3FB": { "unified": "1F3C3-1F3FB", "image": "1f3c3-1f3fb.png", "sheet_x": 10, "sheet_y": 10, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F3C3-1F3FC": { "unified": "1F3C3-1F3FC", "image": "1f3c3-1f3fc.png", "sheet_x": 10, "sheet_y": 11, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F3C3-1F3FD": { "unified": "1F3C3-1F3FD", "image": "1f3c3-1f3fd.png", "sheet_x": 10, "sheet_y": 12, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F3C3-1F3FE": { "unified": "1F3C3-1F3FE", "image": "1f3c3-1f3fe.png", "sheet_x": 10, "sheet_y": 13, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F3C3-1F3FF": { "unified": "1F3C3-1F3FF", "image": "1f3c3-1f3ff.png", "sheet_x": 10, "sheet_y": 14, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["man", "walking", "exercise", "race", "running"], "search": "runner,running,man,walking,exercise,race" }, "dancer": { "name": "Dancer", "unified": "1F483", "variations": [], "sheet_x": 18, "sheet_y": 40, "short_names": ["dancer"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F483-1F3FB": { "unified": "1F483-1F3FB", "image": "1f483-1f3fb.png", "sheet_x": 19, "sheet_y": 0, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F483-1F3FC": { "unified": "1F483-1F3FC", "image": "1f483-1f3fc.png", "sheet_x": 19, "sheet_y": 1, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F483-1F3FD": { "unified": "1F483-1F3FD", "image": "1f483-1f3fd.png", "sheet_x": 19, "sheet_y": 2, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F483-1F3FE": { "unified": "1F483-1F3FE", "image": "1f483-1f3fe.png", "sheet_x": 19, "sheet_y": 3, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F483-1F3FF": { "unified": "1F483-1F3FF", "image": "1f483-1f3ff.png", "sheet_x": 19, "sheet_y": 4, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["female", "girl", "woman", "fun"], "search": "dancer,female,girl,woman,fun" }, "dancers": { "name": "Woman with Bunny Ears", "unified": "1F46F", "variations": [], "sheet_x": 17, "sheet_y": 1, "short_names": ["dancers"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["female", "bunny", "women", "girls"], "search": "dancers,woman,with,bunny,ears,female,women,girls" }, "couple": { "name": "Man and Woman Holding Hands", "unified": "1F46B", "variations": [], "sheet_x": 16, "sheet_y": 33, "short_names": ["couple", "man_and_woman_holding_hands"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["pair", "people", "human", "love", "date", "dating", "like", "affection", "valentines", "marriage"], "search": "couple,man,and,woman,holding,hands,pair,people,human,love,date,dating,like,affection,valentines,marriage" }, "two_men_holding_hands": { "name": "Two Men Holding Hands", "unified": "1F46C", "variations": [], "sheet_x": 16, "sheet_y": 34, "short_names": ["two_men_holding_hands"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["pair", "couple", "love", "like", "bromance", "friendship", "people", "human"], "search": "two,men,holding,hands,pair,couple,love,like,bromance,friendship,people,human" }, "two_women_holding_hands": { "name": "Two Women Holding Hands", "unified": "1F46D", "variations": [], "sheet_x": 16, "sheet_y": 35, "short_names": ["two_women_holding_hands"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["pair", "friendship", "couple", "love", "like", "female", "people", "human"], "search": "two,women,holding,hands,pair,friendship,couple,love,like,female,people,human" }, "bow": { "name": "Person Bowing Deeply", "unified": "1F647", "variations": [], "sheet_x": 28, "sheet_y": 14, "short_names": ["bow"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F647-1F3FB": { "unified": "1F647-1F3FB", "image": "1f647-1f3fb.png", "sheet_x": 28, "sheet_y": 15, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F647-1F3FC": { "unified": "1F647-1F3FC", "image": "1f647-1f3fc.png", "sheet_x": 28, "sheet_y": 16, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F647-1F3FD": { "unified": "1F647-1F3FD", "image": "1f647-1f3fd.png", "sheet_x": 28, "sheet_y": 17, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F647-1F3FE": { "unified": "1F647-1F3FE", "image": "1f647-1f3fe.png", "sheet_x": 28, "sheet_y": 18, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F647-1F3FF": { "unified": "1F647-1F3FF", "image": "1f647-1f3ff.png", "sheet_x": 28, "sheet_y": 19, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["man", "male", "boy"], "search": "bow,person,bowing,deeply,man,male,boy" }, "information_desk_person": { "name": "Information Desk Person", "unified": "1F481", "variations": [], "sheet_x": 18, "sheet_y": 28, "short_names": ["information_desk_person"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F481-1F3FB": { "unified": "1F481-1F3FB", "image": "1f481-1f3fb.png", "sheet_x": 18, "sheet_y": 29, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F481-1F3FC": { "unified": "1F481-1F3FC", "image": "1f481-1f3fc.png", "sheet_x": 18, "sheet_y": 30, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F481-1F3FD": { "unified": "1F481-1F3FD", "image": "1f481-1f3fd.png", "sheet_x": 18, "sheet_y": 31, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F481-1F3FE": { "unified": "1F481-1F3FE", "image": "1f481-1f3fe.png", "sheet_x": 18, "sheet_y": 32, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F481-1F3FF": { "unified": "1F481-1F3FF", "image": "1f481-1f3ff.png", "sheet_x": 18, "sheet_y": 33, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["female", "girl", "woman", "human"], "search": "information,desk,person,female,girl,woman,human" }, "no_good": { "name": "Face with No Good Gesture", "unified": "1F645", "variations": [], "sheet_x": 28, "sheet_y": 2, "short_names": ["no_good"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F645-1F3FB": { "unified": "1F645-1F3FB", "image": "1f645-1f3fb.png", "sheet_x": 28, "sheet_y": 3, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F645-1F3FC": { "unified": "1F645-1F3FC", "image": "1f645-1f3fc.png", "sheet_x": 28, "sheet_y": 4, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F645-1F3FD": { "unified": "1F645-1F3FD", "image": "1f645-1f3fd.png", "sheet_x": 28, "sheet_y": 5, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F645-1F3FE": { "unified": "1F645-1F3FE", "image": "1f645-1f3fe.png", "sheet_x": 28, "sheet_y": 6, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F645-1F3FF": { "unified": "1F645-1F3FF", "image": "1f645-1f3ff.png", "sheet_x": 28, "sheet_y": 7, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["female", "girl", "woman", "nope"], "search": "no,good,face,with,gesture,female,girl,woman,nope" }, "ok_woman": { "name": "Face with Ok Gesture", "unified": "1F646", "variations": [], "sheet_x": 28, "sheet_y": 8, "short_names": ["ok_woman"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F646-1F3FB": { "unified": "1F646-1F3FB", "image": "1f646-1f3fb.png", "sheet_x": 28, "sheet_y": 9, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F646-1F3FC": { "unified": "1F646-1F3FC", "image": "1f646-1f3fc.png", "sheet_x": 28, "sheet_y": 10, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F646-1F3FD": { "unified": "1F646-1F3FD", "image": "1f646-1f3fd.png", "sheet_x": 28, "sheet_y": 11, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F646-1F3FE": { "unified": "1F646-1F3FE", "image": "1f646-1f3fe.png", "sheet_x": 28, "sheet_y": 12, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F646-1F3FF": { "unified": "1F646-1F3FF", "image": "1f646-1f3ff.png", "sheet_x": 28, "sheet_y": 13, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["women", "girl", "female", "pink", "human"], "search": "ok,woman,face,with,gesture,women,girl,female,pink,human" }, "raising_hand": { "name": "Happy Person Raising One Hand", "unified": "1F64B", "variations": [], "sheet_x": 28, "sheet_y": 23, "short_names": ["raising_hand"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F64B-1F3FB": { "unified": "1F64B-1F3FB", "image": "1f64b-1f3fb.png", "sheet_x": 28, "sheet_y": 24, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F64B-1F3FC": { "unified": "1F64B-1F3FC", "image": "1f64b-1f3fc.png", "sheet_x": 28, "sheet_y": 25, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F64B-1F3FD": { "unified": "1F64B-1F3FD", "image": "1f64b-1f3fd.png", "sheet_x": 28, "sheet_y": 26, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F64B-1F3FE": { "unified": "1F64B-1F3FE", "image": "1f64b-1f3fe.png", "sheet_x": 28, "sheet_y": 27, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F64B-1F3FF": { "unified": "1F64B-1F3FF", "image": "1f64b-1f3ff.png", "sheet_x": 28, "sheet_y": 28, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["female", "girl", "woman"], "search": "raising,hand,happy,person,one,female,girl,woman" }, "person_with_pouting_face": { "name": "Person with Pouting Face", "unified": "1F64E", "variations": [], "sheet_x": 29, "sheet_y": 0, "short_names": ["person_with_pouting_face"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F64E-1F3FB": { "unified": "1F64E-1F3FB", "image": "1f64e-1f3fb.png", "sheet_x": 29, "sheet_y": 1, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F64E-1F3FC": { "unified": "1F64E-1F3FC", "image": "1f64e-1f3fc.png", "sheet_x": 29, "sheet_y": 2, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F64E-1F3FD": { "unified": "1F64E-1F3FD", "image": "1f64e-1f3fd.png", "sheet_x": 29, "sheet_y": 3, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F64E-1F3FE": { "unified": "1F64E-1F3FE", "image": "1f64e-1f3fe.png", "sheet_x": 29, "sheet_y": 4, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F64E-1F3FF": { "unified": "1F64E-1F3FF", "image": "1f64e-1f3ff.png", "sheet_x": 29, "sheet_y": 5, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["female", "girl", "woman"], "search": "person,with,pouting,face,female,girl,woman" }, "person_frowning": { "name": "Person Frowning", "unified": "1F64D", "variations": [], "sheet_x": 28, "sheet_y": 35, "short_names": ["person_frowning"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F64D-1F3FB": { "unified": "1F64D-1F3FB", "image": "1f64d-1f3fb.png", "sheet_x": 28, "sheet_y": 36, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F64D-1F3FC": { "unified": "1F64D-1F3FC", "image": "1f64d-1f3fc.png", "sheet_x": 28, "sheet_y": 37, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F64D-1F3FD": { "unified": "1F64D-1F3FD", "image": "1f64d-1f3fd.png", "sheet_x": 28, "sheet_y": 38, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F64D-1F3FE": { "unified": "1F64D-1F3FE", "image": "1f64d-1f3fe.png", "sheet_x": 28, "sheet_y": 39, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F64D-1F3FF": { "unified": "1F64D-1F3FF", "image": "1f64d-1f3ff.png", "sheet_x": 28, "sheet_y": 40, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["female", "girl", "woman", "sad", "depressed", "discouraged", "unhappy"], "search": "person,frowning,female,girl,woman,sad,depressed,discouraged,unhappy" }, "haircut": { "name": "Haircut", "unified": "1F487", "variations": [], "sheet_x": 19, "sheet_y": 18, "short_names": ["haircut"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F487-1F3FB": { "unified": "1F487-1F3FB", "image": "1f487-1f3fb.png", "sheet_x": 19, "sheet_y": 19, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F487-1F3FC": { "unified": "1F487-1F3FC", "image": "1f487-1f3fc.png", "sheet_x": 19, "sheet_y": 20, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F487-1F3FD": { "unified": "1F487-1F3FD", "image": "1f487-1f3fd.png", "sheet_x": 19, "sheet_y": 21, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F487-1F3FE": { "unified": "1F487-1F3FE", "image": "1f487-1f3fe.png", "sheet_x": 19, "sheet_y": 22, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F487-1F3FF": { "unified": "1F487-1F3FF", "image": "1f487-1f3ff.png", "sheet_x": 19, "sheet_y": 23, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["female", "girl", "woman"], "search": "haircut,female,girl,woman" }, "massage": { "name": "Face Massage", "unified": "1F486", "variations": [], "sheet_x": 19, "sheet_y": 12, "short_names": ["massage"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "skin_variations": { "1F486-1F3FB": { "unified": "1F486-1F3FB", "image": "1f486-1f3fb.png", "sheet_x": 19, "sheet_y": 13, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F486-1F3FC": { "unified": "1F486-1F3FC", "image": "1f486-1f3fc.png", "sheet_x": 19, "sheet_y": 14, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F486-1F3FD": { "unified": "1F486-1F3FD", "image": "1f486-1f3fd.png", "sheet_x": 19, "sheet_y": 15, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F486-1F3FE": { "unified": "1F486-1F3FE", "image": "1f486-1f3fe.png", "sheet_x": 19, "sheet_y": 16, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true }, "1F486-1F3FF": { "unified": "1F486-1F3FF", "image": "1f486-1f3ff.png", "sheet_x": 19, "sheet_y": 17, "has_img_apple": true, "has_img_google": false, "has_img_twitter": true, "has_img_emojione": true } }, "emoticons": [], "keywords": ["female", "girl", "woman", "head"], "search": "massage,face,female,girl,woman,head" }, "couple_with_heart": { "name": "Couple with Heart", "unified": "1F491", "variations": [], "sheet_x": 19, "sheet_y": 33, "short_names": ["couple_with_heart"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["pair", "love", "like", "affection", "human", "dating", "valentines", "marriage"], "search": "couple,with,heart,pair,love,like,affection,human,dating,valentines,marriage" }, "woman-heart-woman": { "name": "Woman Heart Woman", "unified": "1F469-200D-2764-FE0F-200D-1F469", "variations": [], "sheet_x": 39, "sheet_y": 19, "short_names": ["woman-heart-woman"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": false, "emoticons": [], "keywords": [], "search": "woman,heart" }, "man-heart-man": { "name": "Man Heart Man", "unified": "1F468-200D-2764-FE0F-200D-1F468", "variations": [], "sheet_x": 39, "sheet_y": 12, "short_names": ["man-heart-man"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": false, "emoticons": [], "keywords": [], "search": "man,heart" }, "couplekiss": { "name": "Kiss", "unified": "1F48F", "variations": [], "sheet_x": 19, "sheet_y": 31, "short_names": ["couplekiss"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["pair", "valentines", "love", "like", "dating", "marriage"], "search": "couplekiss,kiss,pair,valentines,love,like,dating,marriage" }, "woman-kiss-woman": { "name": "Woman Kiss Woman", "unified": "1F469-200D-2764-FE0F-200D-1F48B-200D-1F469", "variations": [], "sheet_x": 39, "sheet_y": 20, "short_names": ["woman-kiss-woman"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": false, "emoticons": [], "keywords": [], "search": "woman,kiss" }, "man-kiss-man": { "name": "Man Kiss Man", "unified": "1F468-200D-2764-FE0F-200D-1F48B-200D-1F468", "variations": [], "sheet_x": 39, "sheet_y": 13, "short_names": ["man-kiss-man"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": false, "emoticons": [], "keywords": [], "search": "man,kiss" }, "family": { "name": "Family", "unified": "1F46A", "variations": ["1F468-200D-1F469-200D-1F466"], "sheet_x": 16, "sheet_y": 32, "short_names": ["family", "man-woman-boy"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["home", "parents", "child", "mom", "dad", "father", "mother", "people", "human"], "search": "family,man,woman,boy,home,parents,child,mom,dad,father,mother,people,human" }, "man-woman-girl": { "name": "Man Woman Girl", "unified": "1F468-200D-1F469-200D-1F467", "variations": [], "sheet_x": 39, "sheet_y": 9, "short_names": ["man-woman-girl"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": [], "search": "man,woman,girl" }, "man-woman-girl-boy": { "name": "Man Woman Girl Boy", "unified": "1F468-200D-1F469-200D-1F467-200D-1F466", "variations": [], "sheet_x": 39, "sheet_y": 10, "short_names": ["man-woman-girl-boy"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": [], "search": "man,woman,girl,boy" }, "man-woman-boy-boy": { "name": "Man Woman Boy Boy", "unified": "1F468-200D-1F469-200D-1F466-200D-1F466", "variations": [], "sheet_x": 39, "sheet_y": 8, "short_names": ["man-woman-boy-boy"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": [], "search": "man,woman,boy" }, "man-woman-girl-girl": { "name": "Man Woman Girl Girl", "unified": "1F468-200D-1F469-200D-1F467-200D-1F467", "variations": [], "sheet_x": 39, "sheet_y": 11, "short_names": ["man-woman-girl-girl"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": [], "search": "man,woman,girl" }, "woman-woman-boy": { "name": "Woman Woman Boy", "unified": "1F469-200D-1F469-200D-1F466", "variations": [], "sheet_x": 39, "sheet_y": 14, "short_names": ["woman-woman-boy"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": [], "search": "woman,boy" }, "woman-woman-girl": { "name": "Woman Woman Girl", "unified": "1F469-200D-1F469-200D-1F467", "variations": [], "sheet_x": 39, "sheet_y": 16, "short_names": ["woman-woman-girl"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": [], "search": "woman,girl" }, "woman-woman-girl-boy": { "name": "Woman Woman Girl Boy", "unified": "1F469-200D-1F469-200D-1F467-200D-1F466", "variations": [], "sheet_x": 39, "sheet_y": 17, "short_names": ["woman-woman-girl-boy"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": [], "search": "woman,girl,boy" }, "woman-woman-boy-boy": { "name": "Woman Woman Boy Boy", "unified": "1F469-200D-1F469-200D-1F466-200D-1F466", "variations": [], "sheet_x": 39, "sheet_y": 15, "short_names": ["woman-woman-boy-boy"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": [], "search": "woman,boy" }, "woman-woman-girl-girl": { "name": "Woman Woman Girl Girl", "unified": "1F469-200D-1F469-200D-1F467-200D-1F467", "variations": [], "sheet_x": 39, "sheet_y": 18, "short_names": ["woman-woman-girl-girl"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": [], "search": "woman,girl" }, "man-man-boy": { "name": "Man Man Boy", "unified": "1F468-200D-1F468-200D-1F466", "variations": [], "sheet_x": 39, "sheet_y": 3, "short_names": ["man-man-boy"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": [], "search": "man,boy" }, "man-man-girl": { "name": "Man Man Girl", "unified": "1F468-200D-1F468-200D-1F467", "variations": [], "sheet_x": 39, "sheet_y": 5, "short_names": ["man-man-girl"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": [], "search": "man,girl" }, "man-man-girl-boy": { "name": "Man Man Girl Boy", "unified": "1F468-200D-1F468-200D-1F467-200D-1F466", "variations": [], "sheet_x": 39, "sheet_y": 6, "short_names": ["man-man-girl-boy"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": [], "search": "man,girl,boy" }, "man-man-boy-boy": { "name": "Man Man Boy Boy", "unified": "1F468-200D-1F468-200D-1F466-200D-1F466", "variations": [], "sheet_x": 39, "sheet_y": 4, "short_names": ["man-man-boy-boy"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": [], "search": "man,boy" }, "man-man-girl-girl": { "name": "Man Man Girl Girl", "unified": "1F468-200D-1F468-200D-1F467-200D-1F467", "variations": [], "sheet_x": 39, "sheet_y": 7, "short_names": ["man-man-girl-girl"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": [], "search": "man,girl" }, "womans_clothes": { "name": "Womans Clothes", "unified": "1F45A", "variations": [], "sheet_x": 15, "sheet_y": 37, "short_names": ["womans_clothes"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["fashion", "shopping", "female"], "search": "womans,clothes,fashion,shopping,female" }, "shirt": { "name": "T-Shirt", "unified": "1F455", "variations": [], "sheet_x": 15, "sheet_y": 32, "short_names": ["shirt", "tshirt"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["fashion", "cloth", "casual", "tshirt", "tee"], "search": "shirt,tshirt,t,fashion,cloth,casual,tee" }, "jeans": { "name": "Jeans", "unified": "1F456", "variations": [], "sheet_x": 15, "sheet_y": 33, "short_names": ["jeans"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["fashion", "shopping"], "search": "jeans,fashion,shopping" }, "necktie": { "name": "Necktie", "unified": "1F454", "variations": [], "sheet_x": 15, "sheet_y": 31, "short_names": ["necktie"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["shirt", "suitup", "formal", "fashion", "cloth", "business"], "search": "necktie,shirt,suitup,formal,fashion,cloth,business" }, "dress": { "name": "Dress", "unified": "1F457", "variations": [], "sheet_x": 15, "sheet_y": 34, "short_names": ["dress"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["clothes", "fashion", "shopping"], "search": "dress,clothes,fashion,shopping" }, "bikini": { "name": "Bikini", "unified": "1F459", "variations": [], "sheet_x": 15, "sheet_y": 36, "short_names": ["bikini"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["swimming", "female", "woman", "girl", "fashion", "beach", "summer"], "search": "bikini,swimming,female,woman,girl,fashion,beach,summer" }, "kimono": { "name": "Kimono", "unified": "1F458", "variations": [], "sheet_x": 15, "sheet_y": 35, "short_names": ["kimono"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["dress", "fashion", "women", "female", "japanese"], "search": "kimono,dress,fashion,women,female,japanese" }, "lipstick": { "name": "Lipstick", "unified": "1F484", "variations": [], "sheet_x": 19, "sheet_y": 5, "short_names": ["lipstick"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["female", "girl", "fashion", "woman"], "search": "lipstick,female,girl,fashion,woman" }, "kiss": { "name": "Kiss Mark", "unified": "1F48B", "variations": [], "sheet_x": 19, "sheet_y": 27, "short_names": ["kiss"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [":*", ":-*"], "keywords": ["face", "lips", "love", "like", "affection", "valentines"], "search": "kiss,mark,face,lips,love,like,affection,valentines,:*,:-*" }, "footprints": { "name": "Footprints", "unified": "1F463", "variations": [], "sheet_x": 16, "sheet_y": 5, "short_names": ["footprints"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["feet", "tracking", "walking", "beach"], "search": "footprints,feet,tracking,walking,beach" }, "high_heel": { "name": "High-Heeled Shoe", "unified": "1F460", "variations": [], "sheet_x": 16, "sheet_y": 2, "short_names": ["high_heel"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["fashion", "shoes", "female", "pumps", "stiletto"], "search": "high,heel,heeled,shoe,fashion,shoes,female,pumps,stiletto" }, "sandal": { "name": "Womans Sandal", "unified": "1F461", "variations": [], "sheet_x": 16, "sheet_y": 3, "short_names": ["sandal"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["shoes", "fashion", "flip flops"], "search": "sandal,womans,shoes,fashion,flip flops" }, "boot": { "name": "Womans Boots", "unified": "1F462", "variations": [], "sheet_x": 16, "sheet_y": 4, "short_names": ["boot"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["shoes", "fashion"], "search": "boot,womans,boots,shoes,fashion" }, "mans_shoe": { "name": "Mans Shoe", "unified": "1F45E", "variations": [], "sheet_x": 16, "sheet_y": 0, "short_names": ["mans_shoe", "shoe"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["fashion", "male"], "search": "mans,shoe,fashion,male" }, "athletic_shoe": { "name": "Athletic Shoe", "unified": "1F45F", "variations": [], "sheet_x": 16, "sheet_y": 1, "short_names": ["athletic_shoe"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["shoes", "sports", "sneakers"], "search": "athletic,shoe,shoes,sports,sneakers" }, "womans_hat": { "name": "Womans Hat", "unified": "1F452", "variations": [], "sheet_x": 15, "sheet_y": 29, "short_names": ["womans_hat"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["fashion", "accessories", "female", "lady", "spring"], "search": "womans,hat,fashion,accessories,female,lady,spring" }, "tophat": { "name": "Top Hat", "unified": "1F3A9", "variations": [], "sheet_x": 9, "sheet_y": 24, "short_names": ["tophat"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["magic", "gentleman", "classy", "circus"], "search": "tophat,top,hat,magic,gentleman,classy,circus" }, "helmet_with_white_cross": { "name": "Helmet with White Cross", "unified": "26D1", "variations": [], "sheet_x": 2, "sheet_y": 25, "short_names": ["helmet_with_white_cross"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": [], "search": "helmet,with,white,cross" }, "mortar_board": { "name": "Graduation Cap", "unified": "1F393", "variations": [], "sheet_x": 9, "sheet_y": 7, "short_names": ["mortar_board"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["school", "college", "degree", "university", "graduation", "cap", "hat", "legal", "learn", "education"], "search": "mortar,board,graduation,cap,school,college,degree,university,hat,legal,learn,education" }, "crown": { "name": "Crown", "unified": "1F451", "variations": [], "sheet_x": 15, "sheet_y": 28, "short_names": ["crown"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["king", "kod", "leader", "royalty", "lord"], "search": "crown,king,kod,leader,royalty,lord" }, "school_satchel": { "name": "School Satchel", "unified": "1F392", "variations": [], "sheet_x": 9, "sheet_y": 6, "short_names": ["school_satchel"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["student", "education", "bag"], "search": "school,satchel,student,education,bag" }, "pouch": { "name": "Pouch", "unified": "1F45D", "variations": [], "sheet_x": 15, "sheet_y": 40, "short_names": ["pouch"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["bag", "accessories", "shopping"], "search": "pouch,bag,accessories,shopping" }, "purse": { "name": "Purse", "unified": "1F45B", "variations": [], "sheet_x": 15, "sheet_y": 38, "short_names": ["purse"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["fashion", "accessories", "money", "sales", "shopping"], "search": "purse,fashion,accessories,money,sales,shopping" }, "handbag": { "name": "Handbag", "unified": "1F45C", "variations": [], "sheet_x": 15, "sheet_y": 39, "short_names": ["handbag"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["fashion", "accessory", "accessories", "shopping"], "search": "handbag,fashion,accessory,accessories,shopping" }, "briefcase": { "name": "Briefcase", "unified": "1F4BC", "variations": [], "sheet_x": 20, "sheet_y": 40, "short_names": ["briefcase"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["business", "documents", "work", "law", "legal"], "search": "briefcase,business,documents,work,law,legal" }, "eyeglasses": { "name": "Eyeglasses", "unified": "1F453", "variations": [], "sheet_x": 15, "sheet_y": 30, "short_names": ["eyeglasses"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["fashion", "accessories", "eyesight", "nerdy", "dork", "geek"], "search": "eyeglasses,fashion,accessories,eyesight,nerdy,dork,geek" }, "dark_sunglasses": { "name": "Dark Sunglasses", "unified": "1F576", "variations": [], "sheet_x": 25, "sheet_y": 4, "short_names": ["dark_sunglasses"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["face", "cool", "accessories"], "search": "dark,sunglasses,face,cool,accessories" }, "ring": { "name": "Ring", "unified": "1F48D", "variations": [], "sheet_x": 19, "sheet_y": 29, "short_names": ["ring"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["wedding", "propose", "marriage", "valentines", "diamond", "fashion", "jewelry", "gem"], "search": "ring,wedding,propose,marriage,valentines,diamond,fashion,jewelry,gem" }, "closed_umbrella": { "name": "Closed Umbrella", "unified": "1F302", "variations": [], "sheet_x": 5, "sheet_y": 23, "short_names": ["closed_umbrella"], "has_img_apple": true, "has_img_google": true, "has_img_twitter": true, "has_img_emojione": true, "emoticons": [], "keywords": ["weather", "rain", "drizzle"], "search": "closed,umbrella,weather,rain,drizzle" } }, "skins": {}, "short_names": { "red_car": "car", "satisfied": "laughing", "telephone": "phone", "honeybee": "bee", "sailboat": "boat", "flipper": "dolphin", "cn": "flag-cn", "knife": "hocho", "poop": "hankey", "shit": "hankey", "paw_prints": "feet", "fr": "flag-fr", "heavy_exclamation_mark": "exclamation", "de": "flag-de", "thumbsup": "+1", "thumbsdown": "-1", "punch": "facepunch", "raised_hand": "hand", "reversed_hand_with_middle_finger_extended": "middle_finger", "sign_of_the_horns": "the_horns", "it": "flag-it", "lantern": "izakaya_lantern", "waxing_gibbous_moon": "moon", "envelope": "email", "jp": "flag-jp", "sun_small_cloud": "mostly_sunny", "sun_behind_cloud": "barely_sunny", "sun_behind_rain_cloud": "partly_sunny_rain", "lightning_cloud": "lightning", "collision": "boom", "running": "runner", "tornado_cloud": "tornado", "man_and_woman_holding_hands": "couple", "open_book": "book", "man-woman-boy": "family", "pencil": "memo", "tshirt": "shirt", "ru": "flag-ru", "shoe": "mans_shoe", "kr": "flag-kr", "es": "flag-es", "gb": "flag-gb", "uk": "flag-gb", "us": "flag-us" } };

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.unifiedToNative = exports.deepMerge = exports.intersect = exports.getSanitizedData = exports.getData = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _data = __webpack_require__(19);

	var _data2 = _interopRequireDefault(_data);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var COLONS_REGEX = /^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;
	var SKINS = ['1F3FA', '1F3FB', '1F3FC', '1F3FD', '1F3FE', '1F3FF'];

	function unifiedToNative(unified) {
	  var unicodes = unified.split('-'),
	      codePoints = unicodes.map(function (u) {
	    return '0x' + u;
	  });

	  return String.fromCodePoint.apply(String, _toConsumableArray(codePoints));
	}

	function sanitize(emoji) {
	  var name = emoji.name;
	  var short_names = emoji.short_names;
	  var skin_tone = emoji.skin_tone;
	  var skin_variations = emoji.skin_variations;
	  var emoticons = emoji.emoticons;
	  var unified = emoji.unified;
	  var id = short_names[0];
	  var colons = ':' + id + ':';

	  if (skin_tone) {
	    colons += ':skin-tone-' + skin_tone + ':';
	  }

	  return {
	    id: id,
	    name: name,
	    colons: colons,
	    emoticons: emoticons,
	    skin: skin_tone || (skin_variations ? 1 : null),
	    native: unifiedToNative(unified)
	  };
	}

	function getSanitizedData() {
	  return sanitize(getData.apply(undefined, arguments));
	}

	function getData(emoji, skin, set) {
	  var emojiData = {};

	  if (typeof emoji == 'string') {
	    var matches = emoji.match(COLONS_REGEX);

	    if (matches) {
	      emoji = matches[1];

	      if (matches[2]) {
	        skin = parseInt(matches[2]);
	      }
	    }

	    if (_data2.default.short_names.hasOwnProperty(emoji)) {
	      emoji = _data2.default.short_names[emoji];
	    }

	    if (_data2.default.emojis.hasOwnProperty(emoji)) {
	      emojiData = _data2.default.emojis[emoji];
	    }
	  } else if (emoji.id) {
	    if (_data2.default.short_names.hasOwnProperty(emoji.id)) {
	      emoji.id = _data2.default.short_names[emoji.id];
	    }

	    if (_data2.default.emojis.hasOwnProperty(emoji.id)) {
	      emojiData = _data2.default.emojis[emoji.id];
	      skin || (skin = emoji.skin);
	    }
	  }

	  if (emojiData.skin_variations && skin > 1 && set) {
	    emojiData = JSON.parse(JSON.stringify(emojiData));

	    var skinKey = SKINS[skin - 1],
	        variationKey = emojiData.unified + '-' + skinKey,
	        variationData = emojiData.skin_variations[variationKey];

	    if (variationData['has_img_' + set]) {
	      emojiData.skin_tone = skin;

	      for (var k in variationData) {
	        var v = variationData[k];
	        emojiData[k] = v;
	      }
	    }
	  }

	  return emojiData;
	}

	function intersect(a, b) {
	  var aSet = new Set(a),
	      bSet = new Set(b),
	      intersection = null;

	  intersection = new Set([].concat(_toConsumableArray(aSet)).filter(function (x) {
	    return bSet.has(x);
	  }));

	  return Array.from(intersection);
	}

	function deepMerge(a, b) {
	  var o = {};

	  for (var key in a) {
	    var originalValue = a[key],
	        value = originalValue;

	    if (b.hasOwnProperty(key)) {
	      value = b[key];
	    }

	    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
	      value = deepMerge(originalValue, value);
	    }

	    o[key] = value;
	  }

	  return o;
	}

	exports.getData = getData;
	exports.getSanitizedData = getSanitizedData;
	exports.intersect = intersect;
	exports.deepMerge = deepMerge;
	exports.unifiedToNative = unifiedToNative;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(22);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _data = __webpack_require__(19);

	var _data2 = _interopRequireDefault(_data);

	var _store = __webpack_require__(17);

	var _store2 = _interopRequireDefault(_store);

	var _frequently = __webpack_require__(16);

	var _frequently2 = _interopRequireDefault(_frequently);

	var _utils = __webpack_require__(20);

	var _ = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RECENT_CATEGORY = { name: 'Recent', emojis: null };
	var SEARCH_CATEGORY = { name: 'Search', emojis: null, anchor: RECENT_CATEGORY };

	var CATEGORIES = [SEARCH_CATEGORY, RECENT_CATEGORY].concat(_data2.default.categories);

	var I18N = {
	  search: 'Search',
	  categories: {
	    search: 'Search Results',
	    recent: 'Frequently Used',
	    people: 'Smileys & People',
	    nature: 'Animals & Nature',
	    foods: 'Food & Drink',
	    activity: 'Activity',
	    places: 'Travel & Places',
	    objects: 'Objects',
	    symbols: 'Symbols',
	    flags: 'Flags'
	  }
	};

	var Picker = function (_React$Component) {
	  _inherits(Picker, _React$Component);

	  function Picker(props) {
	    _classCallCheck(this, Picker);

	    var _this = _possibleConstructorReturn(this, (Picker.__proto__ || Object.getPrototypeOf(Picker)).call(this, props));

	    _this.i18n = (0, _utils.deepMerge)(I18N, props.i18n);
	    _this.state = {
	      skin: _store2.default.get('skin') || props.skin,
	      firstRender: true
	    };
	    return _this;
	  }

	  _createClass(Picker, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(props) {
	      if (props.skin && !_store2.default.get('skin')) {
	        this.setState({ skin: props.skin });
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      if (this.state.firstRender) {
	        this.testStickyPosition();
	        this.firstRenderTimeout = setTimeout(function () {
	          _this2.setState({ firstRender: false });
	        }, 60);
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.updateCategoriesSize();
	      this.handleScroll();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      SEARCH_CATEGORY.emojis = null;

	      clearTimeout(this.leaveTimeout);
	      clearTimeout(this.firstRenderTimeout);
	    }
	  }, {
	    key: 'testStickyPosition',
	    value: function testStickyPosition() {
	      var stickyTestElement = document.createElement('div');
	      var _arr = ['', '-webkit-', '-ms-', '-moz-', '-o-'];
	      for (var _i = 0; _i < _arr.length; _i++) {
	        var prefix = _arr[_i];
	        stickyTestElement.style.position = prefix + 'sticky';
	      }

	      this.hasStickyPosition = !!stickyTestElement.style.position.length;
	    }
	  }, {
	    key: 'handleEmojiOver',
	    value: function handleEmojiOver(emoji) {
	      var preview = this.refs.preview;

	      preview.setState({ emoji: emoji });
	      clearTimeout(this.leaveTimeout);
	    }
	  }, {
	    key: 'handleEmojiLeave',
	    value: function handleEmojiLeave(emoji) {
	      var _this3 = this;

	      this.leaveTimeout = setTimeout(function () {
	        var preview = _this3.refs.preview;

	        preview.setState({ emoji: null });
	      }, 16);
	    }
	  }, {
	    key: 'handleEmojiClick',
	    value: function handleEmojiClick(emoji, e) {
	      var _this4 = this;

	      this.props.onClick(emoji, e);
	      _frequently2.default.add(emoji);

	      var component = this.refs['category-1'];
	      if (component) {
	        (function () {
	          var maxMargin = component.maxMargin;
	          component.forceUpdate();

	          window.requestAnimationFrame(function () {
	            component.memoizeSize();
	            if (maxMargin == component.maxMargin) return;

	            _this4.updateCategoriesSize();
	            _this4.handleScrollPaint();

	            if (SEARCH_CATEGORY.emojis) {
	              component.updateDisplay('none');
	            }
	          });
	        })();
	      }
	    }
	  }, {
	    key: 'handleScroll',
	    value: function handleScroll() {
	      if (!this.waitingForPaint) {
	        this.waitingForPaint = true;
	        window.requestAnimationFrame(this.handleScrollPaint.bind(this));
	      }
	    }
	  }, {
	    key: 'handleScrollPaint',
	    value: function handleScrollPaint() {
	      this.waitingForPaint = false;

	      if (!this.refs.scroll) {
	        return;
	      }

	      var target = this.refs.scroll,
	          scrollTop = target.scrollTop,
	          scrollingDown = scrollTop > (this.scrollTop || 0),
	          activeCategory = null,
	          minTop = 0;

	      for (var i = 0, l = CATEGORIES.length; i < l; i++) {
	        var ii = scrollingDown ? CATEGORIES.length - 1 - i : i,
	            category = CATEGORIES[ii],
	            component = this.refs['category-' + ii];

	        if (component) {
	          var active = component.handleScroll(scrollTop);

	          if (!minTop || component.top < minTop) {
	            if (component.top > 0) {
	              minTop = component.top;
	            }
	          }

	          if (active && !activeCategory) {
	            if (category.anchor) category = category.anchor;
	            activeCategory = category;
	          }
	        }
	      }

	      if (scrollTop < minTop) {
	        activeCategory = RECENT_CATEGORY;
	      }

	      if (activeCategory) {
	        var anchors = this.refs.anchors;
	        var _activeCategory = activeCategory;
	        var categoryName = _activeCategory.name;


	        if (anchors.state.selected != categoryName) {
	          anchors.setState({ selected: categoryName });
	        }
	      }

	      this.scrollTop = scrollTop;
	    }
	  }, {
	    key: 'handleSearch',
	    value: function handleSearch(emojis) {
	      SEARCH_CATEGORY.emojis = emojis;

	      for (var i = 0, l = CATEGORIES.length; i < l; i++) {
	        var component = this.refs['category-' + i];

	        if (component && component.props.name != 'Search') {
	          var display = emojis ? 'none' : null;
	          component.updateDisplay(display);
	        }
	      }

	      this.forceUpdate();
	    }
	  }, {
	    key: 'handleAnchorClick',
	    value: function handleAnchorClick(category, i) {
	      var component = this.refs['category-' + i];
	      var _refs = this.refs;
	      var scroll = _refs.scroll;
	      var anchors = _refs.anchors;
	      var scrollToComponent = null;

	      scrollToComponent = function scrollToComponent() {
	        if (component) {
	          var top = component.top;


	          if (category.name == 'Recent') {
	            top = 0;
	          } else {
	            top += 1;
	          }

	          scroll.scrollTop = top;
	        }
	      };

	      if (SEARCH_CATEGORY.emojis) {
	        this.handleSearch(null);
	        this.refs.search.clear();

	        window.requestAnimationFrame(scrollToComponent);
	      } else {
	        scrollToComponent();
	      }
	    }
	  }, {
	    key: 'handleSkinChange',
	    value: function handleSkinChange(skin) {
	      var newState = { skin: skin };

	      this.setState(newState);
	      _store2.default.update(newState);
	    }
	  }, {
	    key: 'updateCategoriesSize',
	    value: function updateCategoriesSize() {
	      for (var i = 0, l = CATEGORIES.length; i < l; i++) {
	        var component = this.refs['category-' + i];
	        if (component) component.memoizeSize();
	      }
	    }
	  }, {
	    key: 'getCategories',
	    value: function getCategories() {
	      var categories = CATEGORIES;

	      return this.state.firstRender ? categories.slice(0, 3) : categories;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this5 = this;

	      var _props = this.props;
	      var perLine = _props.perLine;
	      var emojiSize = _props.emojiSize;
	      var set = _props.set;
	      var sheetSize = _props.sheetSize;
	      var style = _props.style;
	      var title = _props.title;
	      var emoji = _props.emoji;
	      var color = _props.color;
	      var backgroundImageFn = _props.backgroundImageFn;
	      var skin = this.state.skin;
	      var width = perLine * (emojiSize + 12) + 12 + 2;
	      var native = set === 'native';

	      return _react2.default.createElement(
	        'div',
	        { style: _extends({}, style, { width: width }), className: 'emoji-mart' },
	        _react2.default.createElement(
	          'div',
	          { className: 'emoji-mart-bar' },
	          _react2.default.createElement(_.Anchors, {
	            ref: 'anchors',
	            i18n: this.i18n,
	            color: color,
	            categories: CATEGORIES,
	            onAnchorClick: this.handleAnchorClick.bind(this)
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { ref: 'scroll', className: 'emoji-mart-scroll', onScroll: this.handleScroll.bind(this) },
	          _react2.default.createElement(_.Search, {
	            ref: 'search',
	            onSearch: this.handleSearch.bind(this),
	            i18n: this.i18n
	          }),
	          this.getCategories().map(function (category, i) {
	            return _react2.default.createElement(_.Category, {
	              ref: 'category-' + i,
	              key: category.name,
	              name: category.name,
	              emojis: category.emojis,
	              perLine: perLine,
	              hasStickyPosition: _this5.hasStickyPosition,
	              i18n: _this5.i18n,
	              emojiProps: {
	                skin: skin,
	                size: emojiSize,
	                native: native,
	                set: set,
	                sheetSize: sheetSize,
	                backgroundImageFn: backgroundImageFn,
	                onOver: _this5.handleEmojiOver.bind(_this5),
	                onLeave: _this5.handleEmojiLeave.bind(_this5),
	                onClick: _this5.handleEmojiClick.bind(_this5)
	              }
	            });
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'emoji-mart-bar' },
	          _react2.default.createElement(_.Preview, {
	            ref: 'preview',
	            title: title,
	            emoji: emoji,
	            emojiProps: {
	              size: 38,
	              skin: skin,
	              native: native,
	              set: set,
	              sheetSize: sheetSize,
	              backgroundImageFn: backgroundImageFn
	            },
	            skinsProps: {
	              skin: skin,
	              onChange: this.handleSkinChange.bind(this)
	            }
	          })
	        )
	      );
	    }
	  }]);

	  return Picker;
	}(_react2.default.Component);

	exports.default = Picker;


	Picker.propTypes = {
	  onClick: _react2.default.PropTypes.func,
	  perLine: _react2.default.PropTypes.number,
	  emojiSize: _react2.default.PropTypes.number,
	  i18n: _react2.default.PropTypes.object,
	  style: _react2.default.PropTypes.object,
	  title: _react2.default.PropTypes.string,
	  emoji: _react2.default.PropTypes.string,
	  color: _react2.default.PropTypes.string,
	  set: _.Emoji.propTypes.set,
	  backgroundImageFn: _.Emoji.propTypes.backgroundImageFn,
	  skin: _.Emoji.propTypes.skin,
	  sheetSize: _.Emoji.propTypes.sheetSize
	};

	Picker.defaultProps = {
	  onClick: function onClick() {},
	  emojiSize: 24,
	  perLine: 9,
	  i18n: {},
	  style: {},
	  title: 'Emoji Mart™',
	  emoji: 'department_store',
	  color: '#ae65c5',
	  set: _.Emoji.defaultProps.set,
	  skin: _.Emoji.defaultProps.skin,
	  sheetSize: _.Emoji.defaultProps.sheetSize,
	  backgroundImageFn: _.Emoji.defaultProps.backgroundImageFn
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

	// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

	// MIT license

	var isWindowAvailable = typeof window !== 'undefined';

	isWindowAvailable && function () {
	  var lastTime = 0;
	  var vendors = ['ms', 'moz', 'webkit', 'o'];

	  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
	    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
	    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	  }

	  if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
	    var currTime = new Date().getTime();
	    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	    var id = window.setTimeout(function () {
	      callback(currTime + timeToCall);
	    }, timeToCall);

	    lastTime = currTime + timeToCall;
	    return id;
	  };

	  if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
	    clearTimeout(id);
	  };
	}();

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _ = __webpack_require__(1);

	var _utils = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Preview = function (_React$Component) {
	  _inherits(Preview, _React$Component);

	  function Preview(props) {
	    _classCallCheck(this, Preview);

	    var _this = _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).call(this, props));

	    _this.state = { emoji: null };
	    return _this;
	  }

	  _createClass(Preview, [{
	    key: 'render',
	    value: function render() {
	      var emoji = this.state.emoji;
	      var _props = this.props;
	      var emojiProps = _props.emojiProps;
	      var skinsProps = _props.skinsProps;
	      var title = _props.title;
	      var idleEmoji = _props.emoji;


	      if (emoji) {
	        var emojiData = (0, _utils.getData)(emoji);
	        var emoticons = emojiData.emoticons;
	        var knownEmoticons = [];
	        var listedEmoticons = [];

	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = emoticons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var emoticon = _step.value;

	            if (knownEmoticons.indexOf(emoticon.toLowerCase()) == -1) {
	              knownEmoticons.push(emoticon.toLowerCase());
	              listedEmoticons.push(emoticon);
	            }
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }

	        return _react2.default.createElement(
	          'div',
	          { className: 'emoji-mart-preview' },
	          _react2.default.createElement(
	            'div',
	            { className: 'emoji-mart-preview-emoji' },
	            _react2.default.createElement(_.Emoji, _extends({
	              key: emoji.id,
	              emoji: emoji
	            }, emojiProps))
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'emoji-mart-preview-data' },
	            _react2.default.createElement(
	              'div',
	              { className: 'emoji-mart-preview-name' },
	              emoji.name
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'emoji-mart-preview-shortnames' },
	              emojiData.short_names.map(function (short_name) {
	                return _react2.default.createElement(
	                  'span',
	                  { key: short_name, className: 'emoji-mart-preview-shortname' },
	                  ':',
	                  short_name,
	                  ':'
	                );
	              })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'emoji-mart-preview-emoticons' },
	              listedEmoticons.map(function (emoticon) {
	                return _react2.default.createElement(
	                  'span',
	                  { key: emoticon, className: 'emoji-mart-preview-emoticon' },
	                  emoticon
	                );
	              })
	            )
	          )
	        );
	      } else {
	        return _react2.default.createElement(
	          'div',
	          { className: 'emoji-mart-preview' },
	          _react2.default.createElement(
	            'div',
	            { className: 'emoji-mart-preview-emoji' },
	            _react2.default.createElement(_.Emoji, _extends({
	              emoji: idleEmoji
	            }, emojiProps))
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'emoji-mart-preview-data' },
	            _react2.default.createElement(
	              'span',
	              { className: 'emoji-mart-title-label' },
	              title
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'emoji-mart-preview-skins' },
	            _react2.default.createElement(_.Skins, skinsProps)
	          )
	        );
	      }
	    }
	  }]);

	  return Preview;
	}(_react2.default.Component);

	exports.default = Preview;


	Preview.propTypes = {
	  title: _react2.default.PropTypes.string.isRequired,
	  emoji: _react2.default.PropTypes.string.isRequired,
	  emojiProps: _react2.default.PropTypes.object.isRequired,
	  skinsProps: _react2.default.PropTypes.object.isRequired
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _emojiIndex = __webpack_require__(25);

	var _emojiIndex2 = _interopRequireDefault(_emojiIndex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Search = function (_React$Component) {
	  _inherits(Search, _React$Component);

	  function Search() {
	    _classCallCheck(this, Search);

	    return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
	  }

	  _createClass(Search, [{
	    key: 'handleChange',
	    value: function handleChange() {
	      var input = this.refs.input;
	      var value = input.value;

	      this.props.onSearch(_emojiIndex2.default.search(value));
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      this.refs.input.value = '';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var i18n = this.props.i18n;


	      return _react2.default.createElement('input', {
	        ref: 'input',
	        type: 'text',
	        onChange: this.handleChange.bind(this),
	        placeholder: i18n.search,
	        className: 'emoji-mart-search'
	      });
	    }
	  }]);

	  return Search;
	}(_react2.default.Component);

	exports.default = Search;


	Search.propTypes = {
	  onSearch: _react2.default.PropTypes.func,
	  maxResults: _react2.default.PropTypes.number
	};

	Search.defaultProps = {
	  onSearch: function onSearch() {},
	  maxResults: 75
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _data = __webpack_require__(19);

	var _data2 = _interopRequireDefault(_data);

	var _ = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var index = {};
	var emojisList = {};
	var emoticonsList = {};

	for (var emoji in _data2.default.emojis) {
	  var emojiData = _data2.default.emojis[emoji];
	  var short_names = emojiData.short_names;
	  var emoticons = emojiData.emoticons;
	  var id = short_names[0];

	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = emoticons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var emoticon = _step.value;

	      if (!emoticonsList[emoticon]) {
	        emoticonsList[emoticon] = id;
	      }
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  emojisList[id] = (0, _.getSanitizedData)(id);
	}

	function search(value) {
	  var maxResults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 75;

	  var results = null;

	  if (value.length) {
	    var values = value.toLowerCase().split(/[\s|,|\-|_]+/),
	        allResults = [];

	    if (values.length > 2) {
	      values = [values[0], values[1]];
	    }

	    allResults = values.map(function (value) {
	      var aPool = _data2.default.emojis,
	          aIndex = index,
	          length = 0;

	      if (value == '-' || value == '-1') {
	        return [emojisList['-1']];
	      }

	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;

	      try {
	        for (var _iterator2 = value.split('')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var char = _step2.value;

	          length++;

	          aIndex[char] || (aIndex[char] = {});
	          aIndex = aIndex[char];

	          if (!aIndex.results) {
	            (function () {
	              var scores = {};

	              aIndex.results = [];
	              aIndex.pool = {};

	              for (var id in aPool) {
	                var _emoji = aPool[id];
	                var _search = _emoji.search;
	                var sub = value.substr(0, length);
	                var subIndex = _search.indexOf(sub);

	                if (subIndex != -1) {
	                  var score = subIndex + 1;
	                  if (sub == id) score = 0;

	                  aIndex.results.push(emojisList[id]);
	                  aIndex.pool[id] = _emoji;

	                  scores[id] = score;
	                }
	              }

	              aIndex.results.sort(function (a, b) {
	                var aScore = scores[a.id],
	                    bScore = scores[b.id];

	                return aScore - bScore;
	              });
	            })();
	          }

	          aPool = aIndex.pool;
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }

	      return aIndex.results;
	    }).filter(function (a) {
	      return a;
	    });

	    if (allResults.length > 1) {
	      results = _.intersect.apply(undefined, _toConsumableArray(allResults));
	    } else if (allResults.length) {
	      results = allResults[0];
	    } else {
	      results = [];
	    }
	  }

	  if (results && results.length) {
	    results = results.slice(0, maxResults);
	  }

	  return results;
	}

	exports.default = { search: search, emojis: emojisList, emoticons: emoticonsList };

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Skins = function (_React$Component) {
	  _inherits(Skins, _React$Component);

	  function Skins(props) {
	    _classCallCheck(this, Skins);

	    var _this = _possibleConstructorReturn(this, (Skins.__proto__ || Object.getPrototypeOf(Skins)).call(this, props));

	    _this.state = {
	      opened: false
	    };
	    return _this;
	  }

	  _createClass(Skins, [{
	    key: 'handleClick',
	    value: function handleClick(skin) {
	      var onChange = this.props.onChange;


	      if (!this.state.opened) {
	        this.setState({ opened: true });
	      } else {
	        onChange(skin);
	        this.setState({ opened: false });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var skin = this.props.skin;
	      var opened = this.state.opened;


	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'emoji-mart-skin-swatches ' + (opened ? 'emoji-mart-skin-swatches-opened' : '') },
	          Array(6).fill().map(function (_, i) {
	            var skinTone = i + 1,
	                selected = skinTone == skin;

	            return _react2.default.createElement(
	              'span',
	              { key: 'skin-tone-' + skinTone, className: 'emoji-mart-skin-swatch ' + (selected ? 'emoji-mart-skin-swatch-selected' : '') },
	              _react2.default.createElement('span', {
	                onClick: function onClick() {
	                  return _this2.handleClick(skinTone);
	                },
	                className: 'emoji-mart-skin emoji-mart-skin-tone-' + skinTone })
	            );
	          })
	        )
	      );
	    }
	  }]);

	  return Skins;
	}(_react2.default.Component);

	exports.default = Skins;


	Skins.propTypes = {
	  onChange: _react2.default.PropTypes.func,
	  skin: _react2.default.PropTypes.number.isRequired
	};

	Skins.defaultProps = {
	  onChange: function onChange() {}
	};

/***/ }
/******/ ])
});
;