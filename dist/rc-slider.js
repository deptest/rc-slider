(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
    {module.exports = factory(require('react'), require('react-dom'));}
    else if (typeof define === 'function' && define.amd)
    {define(['react', 'react-dom'], factory);}
    else if (typeof exports === 'object')
    {exports['rc-slider'] = factory(require('react'), require('react-dom'));}
    else
    {root['rc-slider'] = factory(root['React'], root['ReactDOM']);}
})(this, function(__WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_17__) {
    return /******/ (function(modules) { // webpackBootstrap
        /******/ 	// The module cache
        /******/ 	let installedModules = {};
        /******/
        /******/ 	// The require function
        /******/ 	function __webpack_require__(moduleId) {
            /******/
            /******/ 		// Check if module is in cache
            /******/ 		if (installedModules[moduleId])
            /******/ 			{return installedModules[moduleId].exports;}
            /******/
            /******/ 		// Create a new module (and put it into the cache)
            /******/ 		let module = installedModules[moduleId] = {
                /******/ 			exports: {},
                /******/ 			id: moduleId,
                /******/ 			loaded: false
                /******/ 		};
            /******/
            /******/ 		// Execute the module function
            /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/ 		// Flag the module as loaded
            /******/ 		module.loaded = true;
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
        /******/ 	// __webpack_public_path__
        /******/ 	__webpack_require__.p = '';
        /******/
        /******/ 	// Load entry module and return exports
        /******/ 	return __webpack_require__(0);
        /******/ })
    /************************************************************************/
    /******/ ([
        /* 0 */
        /***/ function(module, exports, __webpack_require__) {

            (function webpackMissingModule() { throw new Error('Cannot find module "./assets/index.less"'); }());
            module.exports = __webpack_require__(1);


            /***/ },
        /* 1 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            Object.defineProperty(exports, '__esModule', {
	  value: true
            });

            let _Slider = __webpack_require__(2);

            let _Slider2 = _interopRequireDefault(_Slider);

            let _Range = __webpack_require__(24);

            let _Range2 = _interopRequireDefault(_Range);

            let _Handle = __webpack_require__(22);

            let _Handle2 = _interopRequireDefault(_Handle);

            let _createSliderWithTooltip = __webpack_require__(25);

            let _createSliderWithTooltip2 = _interopRequireDefault(_createSliderWithTooltip);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

            _Slider2.default.Range = _Range2.default;
            _Slider2.default.Handle = _Handle2.default;
            _Slider2.default.createSliderWithTooltip = _createSliderWithTooltip2.default;
            exports.default = _Slider2.default;
            module.exports = exports['default'];

            /***/ },
        /* 2 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            Object.defineProperty(exports, '__esModule', {
	    value: true
            });

            let _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { let source = arguments[i]; for (let key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

            let _propTypes = __webpack_require__(3);

            let _propTypes2 = _interopRequireDefault(_propTypes);

            let _react = __webpack_require__(10);

            let _react2 = _interopRequireDefault(_react);

            let _Track = __webpack_require__(11);

            let _Track2 = _interopRequireDefault(_Track);

            let _createSlider = __webpack_require__(12);

            let _createSlider2 = _interopRequireDefault(_createSlider);

            let _utils = __webpack_require__(23);

            let utils = _interopRequireWildcard(_utils);

            function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { let newObj = {}; if (obj != null) { for (let key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) {newObj[key] = obj[key];} } } newObj.default = obj; return newObj; } }

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

            function _defaults(obj, defaults) { let keys = Object.getOwnPropertyNames(defaults); for (let i = 0; i < keys.length; i++) { let key = keys[i]; let value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

            function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called'); } return call && (typeof call === 'object' || typeof call === 'function') ? call : self; }

            function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) {Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass);} } /* eslint-disable react/prop-types */


            let Slider = function (_React$Component) {
	    _inherits(Slider, _React$Component);

	    function Slider(props) {
	        _classCallCheck(this, Slider);

	        let _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

	        _this.onEnd = function () {
	            _this.setState({ dragging: false });
	            _this.removeDocumentEvents();
	            _this.props.onAfterChange(_this.getValue());
	        };

	        let defaultValue = props.defaultValue !== undefined ? props.defaultValue : props.min;
	        let value = props.value !== undefined ? props.value : defaultValue;

	        _this.state = {
	            value: _this.trimAlignValue(value),
	            dragging: false
	        };
	        return _this;
	    }

	    Slider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (!('value' in nextProps || 'min' in nextProps || 'max' in nextProps)) {
	            return;
	        }

	        let prevValue = this.state.value;
	        let value = nextProps.value !== undefined ? nextProps.value : prevValue;
	        let nextValue = this.trimAlignValue(value, nextProps);
	        if (nextValue === prevValue) {
	            return;
	        }

	        this.setState({ value: nextValue });
	        if (utils.isValueOutOfRange(value, nextProps)) {
	            this.props.onChange(nextValue);
	        }
	    };

	    Slider.prototype.onChange = function onChange(state) {
	        let props = this.props;
	        let isNotControlled = !('value' in props);
	        if (isNotControlled) {
	            this.setState(state);
	        }

	        let changedValue = state.value;
	        props.onChange(changedValue);
	    };

	    Slider.prototype.onStart = function onStart(position) {
	        this.setState({ dragging: true });
	        let props = this.props;
	        let prevValue = this.getValue();
	        props.onBeforeChange(prevValue);

	        let value = this.calcValueByPos(position);
	        this.startValue = value;
	        this.startPosition = position;

	        if (value === prevValue) {
	            return;
	        }

	        this.onChange({ value: value });
	    };

	    Slider.prototype.onMove = function onMove(e, position) {
	        utils.pauseEvent(e);
	        let state = this.state;
	        let value = this.calcValueByPos(position);
	        let oldValue = state.value;
	        if (value === oldValue) {
	            return;
	        }

	        this.onChange({ value: value });
	    };

	    Slider.prototype.onMoveByKeyboard = function onMoveByKeyboard(position, step) {
	        let value = this.calcValueByPos(position) + step;

	        this.onChange({ value: value });
	    };

	    Slider.prototype.getValue = function getValue() {
	        return this.state.value;
	    };

	    Slider.prototype.getLowerBound = function getLowerBound() {
	        return this.props.min;
	    };

	    Slider.prototype.getUpperBound = function getUpperBound() {
	        return this.state.value;
	    };

	    Slider.prototype.moveToMax = function moveToMax() {
	        let max = this.props.max;

	        this.onChange({ value: max });
	    };

	    Slider.prototype.moveToMin = function moveToMin() {
	        let min = this.props.min;

	        this.onChange({ value: min });
	    };

	    Slider.prototype.trimAlignValue = function trimAlignValue(v) {
	        let nextProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	        let mergedProps = _extends({}, this.props, nextProps);
	        let val = utils.ensureValueInRange(v, mergedProps);
	        return utils.ensureValuePrecision(val, mergedProps);
	    };

	    Slider.prototype.render = function render() {
	        let _this2 = this;

	        let _props = this.props,
	            prefixCls = _props.prefixCls,
	            vertical = _props.vertical,
	            included = _props.included,
	            disabled = _props.disabled,
	            minimumTrackTintColor = _props.minimumTrackTintColor,
	            ariaLabel = _props.ariaLabel,
	            ariaValueNow = _props.ariaValueNow,
	            ariaValueText = _props.ariaValueText,
	            ariaValueMin = _props.ariaValueMin,
	            ariaValueMax = _props.ariaValueMax,
	            handleGenerator = _props.handle;
	        let _state = this.state,
	            value = _state.value,
	            dragging = _state.dragging;

	        let offset = this.calcOffset(value);
	        let handle = handleGenerator({
	            className: prefixCls + '-handle',
	            vertical: vertical,
	            offset: offset,
	            value: value,
	            dragging: dragging,
	            disabled: disabled,
	            ariaLabel: ariaLabel,
	            ariaValueNow: ariaValueNow || value,
	            ariaValueText: ariaValueText,
	            ariaValueMin: ariaValueMin,
	            ariaValueMax: ariaValueMax,
	            minimumTrackTintColor: minimumTrackTintColor,
	            ref: function ref(h) {
	                return _this2.saveHandle(0, h);
	            }
	        });
	        let track = _react2.default.createElement(_Track2.default, {
	            className: prefixCls + '-track',
	            vertical: vertical,
	            included: included,
	            offset: 0,
	            disabled: disabled,
	            length: offset,
	            minimumTrackTintColor: minimumTrackTintColor
	        });

	        return { tracks: track, handles: handle };
	    };

	    return Slider;
            }(_react2.default.Component);

            Slider.displayName = 'Slider';
            Slider.propTypes = {
	    defaultValue: _propTypes2.default.number,
	    value: _propTypes2.default.number,
	    disabled: _propTypes2.default.bool,
	    ariaLabel: _propTypes2.default.string,
	    ariaValueNow: _propTypes2.default.number,
	    ariaValueText: _propTypes2.default.string,
	    ariaValueMin: _propTypes2.default.number,
	    ariaValueMax: _propTypes2.default.number
            };
            Slider.defaultProps = {};
            exports.default = (0, _createSlider2.default)(Slider);
            module.exports = exports['default'];

            /***/ },
        /* 3 */
        /***/ function(module, exports, __webpack_require__) {

            /* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

                if (process.env.NODE_ENV !== 'production') {
	  let REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  let isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  let throwOnDirectAccess = true;
	  module.exports = __webpack_require__(5)(isValidElement, throwOnDirectAccess);
                } else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(9)();
                }

                /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)));

            /***/ },
        /* 4 */
        /***/ function(module, exports) {

            // shim for using process in browser
            let process = module.exports = {};

            // cached from whatever global is present so that test runners that stub it
            // don't break things.  But we need to wrap it in a try catch in case it is
            // wrapped in strict mode code which doesn't define any globals.  It's inside a
            // function because try/catches deoptimize in certain engines.

            let cachedSetTimeout;
            let cachedClearTimeout;

            function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
            }
            function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
            }
            (function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
            } ());
            function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


            }
            function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



            }
            let queue = [];
            let draining = false;
            let currentQueue;
            let queueIndex = -1;

            function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
            }

            function drainQueue() {
	    if (draining) {
	        return;
	    }
	    let timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    let len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
            }

            process.nextTick = function (fun) {
	    let args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (let i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
            };

            // v8 likes predictible objects
            function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
            }
            Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
            };
            process.title = 'browser';
            process.browser = true;
            process.env = {};
            process.argv = [];
            process.version = ''; // empty string to avoid regexp issues
            process.versions = {};

            function noop() {}

            process.on = noop;
            process.addListener = noop;
            process.once = noop;
            process.off = noop;
            process.removeListener = noop;
            process.removeAllListeners = noop;
            process.emit = noop;
            process.prependListener = noop;
            process.prependOnceListener = noop;

            process.listeners = function (name) { return []; };

            process.binding = function (name) {
	    throw new Error('process.binding is not supported');
            };

            process.cwd = function () { return '/'; };
            process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
            };
            process.umask = function() { return 0; };


            /***/ },
        /* 5 */
        /***/ function(module, exports, __webpack_require__) {

            /* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

                'use strict';

                let assign = __webpack_require__(6);

                let ReactPropTypesSecret = __webpack_require__(7);
                let checkPropTypes = __webpack_require__(8);

                let printWarning = function() {};

                if (process.env.NODE_ENV !== 'production') {
	  printWarning = function(text) {
	    let message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
                }

                function emptyFunctionThatReturnsNull() {
	  return null;
                }

                module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  let ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  let FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    let iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  let ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  let ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          let err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          let cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    let chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      let propValue = props[propName];
	      let propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        let preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      let propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        let propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (let i = 0; i < propValue.length; i++) {
	        let error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      let propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        let propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        let expectedClassName = expectedClass.name || ANONYMOUS;
	        let actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      let propValue = props[propName];
	      for (let i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      let valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      let propValue = props[propName];
	      let propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (let key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          let error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (let i = 0; i < arrayOfTypeCheckers.length; i++) {
	      let checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (let i = 0; i < arrayOfTypeCheckers.length; i++) {
	        let checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      let propValue = props[propName];
	      let propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (let key in shapeTypes) {
	        let checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        let error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      let propValue = props[propName];
	      let propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      let allKeys = assign({}, props[propName], shapeTypes);
	      for (let key in allKeys) {
	        let checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        let error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          let iterator = iteratorFn.call(propValue);
	          let step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              let entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    let propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    let propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    let type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
                };

                /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)));

            /***/ },
        /* 6 */
        /***/ function(module, exports) {

            /*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

            'use strict';
            /* eslint-disable no-unused-vars */
            let getOwnPropertySymbols = Object.getOwnPropertySymbols;
            let hasOwnProperty = Object.prototype.hasOwnProperty;
            let propIsEnumerable = Object.prototype.propertyIsEnumerable;

            function toObject(val) {
                if (val === null || val === undefined) {
                    throw new TypeError('Object.assign cannot be called with null or undefined');
                }

                return Object(val);
            }

            function shouldUseNative() {
                try {
                    if (!Object.assign) {
                        return false;
                    }

                    // Detect buggy property enumeration order in older V8 versions.

                    // https://bugs.chromium.org/p/v8/issues/detail?id=4118
                    let test1 = new String('abc');  // eslint-disable-line no-new-wrappers
                    test1[5] = 'de';
                    if (Object.getOwnPropertyNames(test1)[0] === '5') {
                        return false;
                    }

                    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
                    let test2 = {};
                    for (let i = 0; i < 10; i++) {
                        test2['_' + String.fromCharCode(i)] = i;
                    }
                    let order2 = Object.getOwnPropertyNames(test2).map(function (n) {
                        return test2[n];
                    });
                    if (order2.join('') !== '0123456789') {
                        return false;
                    }

                    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
                    let test3 = {};
                    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
                        test3[letter] = letter;
                    });
                    if (Object.keys(Object.assign({}, test3)).join('') !==
     'abcdefghijklmnopqrst') {
                        return false;
                    }

                    return true;
                } catch (err) {
                    // We don't expect any of the above to throw, but better to be safe.
                    return false;
                }
            }

            module.exports = shouldUseNative() ? Object.assign : function (target, source) {
                let from;
                let to = toObject(target);
                let symbols;

                for (let s = 1; s < arguments.length; s++) {
                    from = Object(arguments[s]);

                    for (let key in from) {
                        if (hasOwnProperty.call(from, key)) {
                            to[key] = from[key];
                        }
                    }

                    if (getOwnPropertySymbols) {
                        symbols = getOwnPropertySymbols(from);
                        for (let i = 0; i < symbols.length; i++) {
                            if (propIsEnumerable.call(from, symbols[i])) {
                                to[symbols[i]] = from[symbols[i]];
                            }
                        }
                    }
                }

                return to;
            };


            /***/ },
        /* 7 */
        /***/ function(module, exports) {

            /**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

            'use strict';

            let ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

            module.exports = ReactPropTypesSecret;


            /***/ },
        /* 8 */
        /***/ function(module, exports, __webpack_require__) {

            /* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

                'use strict';

                let printWarning = function() {};

                if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = __webpack_require__(7);
	  var loggedTypeFailures = {};

	  printWarning = function(text) {
	    let message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
                }

                /**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
                function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (let typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            let err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );

	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          let stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
                }

                module.exports = checkPropTypes;

                /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)));

            /***/ },
        /* 9 */
        /***/ function(module, exports, __webpack_require__) {

            /**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

            'use strict';

            let ReactPropTypesSecret = __webpack_require__(7);

            function emptyFunction() {}

            module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    let err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  }
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  let ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
            };


            /***/ },
        /* 10 */
        /***/ function(module, exports) {

            module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

            /***/ },
        /* 11 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            Object.defineProperty(exports, '__esModule', {
	  value: true
            });

            let _react = __webpack_require__(10);

            let _react2 = _interopRequireDefault(_react);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

            let Track = function Track(_ref) {
	  let className = _ref.className,
	      included = _ref.included,
	      vertical = _ref.vertical,
	      offset = _ref.offset,
	      length = _ref.length,
	      minimumTrackTintColor = _ref.minimumTrackTintColor,
	      disabled = _ref.disabled;

	  let style = {
	    visibility: included ? 'visible' : 'hidden'
	  };
	  if (vertical) {
	    style.bottom = offset + '%';
	    style.height = length + '%';
	  } else {
	    style.left = offset + '%';
	    style.width = length + '%';
	  }
	  if (minimumTrackTintColor && !disabled) {
	    style.backgroundColor = minimumTrackTintColor;
	  }
	  return _react2.default.createElement('div', { className: className, style: style });
            };

            exports.default = Track;
            module.exports = exports['default'];

            /***/ },
        /* 12 */
        /***/ function(module, exports, __webpack_require__) {

            /* WEBPACK VAR INJECTION */(function(process) {'use strict';

                Object.defineProperty(exports, '__esModule', {
	  value: true
                });

                let _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { let source = arguments[i]; for (let key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

                exports.default = createSlider;

                let _react = __webpack_require__(10);

                let _react2 = _interopRequireDefault(_react);

                let _propTypes = __webpack_require__(3);

                let _propTypes2 = _interopRequireDefault(_propTypes);

                let _addEventListener = __webpack_require__(13);

                let _addEventListener2 = _interopRequireDefault(_addEventListener);

                let _classnames = __webpack_require__(18);

                let _classnames2 = _interopRequireDefault(_classnames);

                let _warning = __webpack_require__(19);

                let _warning2 = _interopRequireDefault(_warning);

                let _Steps = __webpack_require__(20);

                let _Steps2 = _interopRequireDefault(_Steps);

                let _Marks = __webpack_require__(21);

                let _Marks2 = _interopRequireDefault(_Marks);

                let _Handle = __webpack_require__(22);

                let _Handle2 = _interopRequireDefault(_Handle);

                let _utils = __webpack_require__(23);

                let utils = _interopRequireWildcard(_utils);

                function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { let newObj = {}; if (obj != null) { for (let key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) {newObj[key] = obj[key];} } } newObj.default = obj; return newObj; } }

                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

                function _defaults(obj, defaults) { let keys = Object.getOwnPropertyNames(defaults); for (let i = 0; i < keys.length; i++) { let key = keys[i]; let value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

                function _objectWithoutProperties(obj, keys) { let target = {}; for (let i in obj) { if (keys.indexOf(i) >= 0) {continue;} if (!Object.prototype.hasOwnProperty.call(obj, i)) {continue;} target[i] = obj[i]; } return target; }

                function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

                function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called'); } return call && (typeof call === 'object' || typeof call === 'function') ? call : self; }

                function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) {Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass);} }

                function noop() {}

                function createSlider(Component) {
	  let _class, _temp;

	  return _temp = _class = function (_Component) {
	    _inherits(ComponentEnhancer, _Component);

	    function ComponentEnhancer(props) {
	      _classCallCheck(this, ComponentEnhancer);

	      let _this = _possibleConstructorReturn(this, _Component.call(this, props));

	      _this.onMouseDown = function (e) {
	        if (e.button !== 0) {
	          return;
	        }

	        let isVertical = _this.props.vertical;
	        let position = utils.getMousePosition(isVertical, e);
	        if (!utils.isEventFromHandle(e, _this.handlesRefs)) {
	          _this.dragOffset = 0;
	        } else {
	          e.target.focus();
	          let handlePosition = utils.getHandleCenterPosition(isVertical, e.target);
	          _this.dragOffset = position - handlePosition;
	          position = handlePosition;
	        }
	        _this.onStart(position);
	        _this.addDocumentMouseEvents();
	        utils.pauseEvent(e);
	      };

	      _this.onTouchStart = function (e) {
	        if (utils.isNotTouchEvent(e)) {return;}

	        let isVertical = _this.props.vertical;
	        let position = utils.getTouchPosition(isVertical, e);
	        if (!utils.isEventFromHandle(e, _this.handlesRefs)) {
	          _this.dragOffset = 0;
	        } else {
	          let handlePosition = utils.getHandleCenterPosition(isVertical, e.target);
	          _this.dragOffset = position - handlePosition;
	          position = handlePosition;
	        }
	        _this.onStart(position);
	        _this.addDocumentTouchEvents();
	        utils.pauseEvent(e);
	      };

	      _this.onMouseMove = function (e) {
	        if (!_this.sliderRef) {
	          _this.onEnd();
	          return;
	        }
	        let position = utils.getMousePosition(_this.props.vertical, e);
	        _this.onMove(e, position - _this.dragOffset);
	      };

	      _this.onTouchMove = function (e) {
	        if (utils.isNotTouchEvent(e) || !_this.sliderRef) {
	          _this.onEnd();
	          return;
	        }

	        let position = utils.getTouchPosition(_this.props.vertical, e);
	        _this.onMove(e, position - _this.dragOffset);
	      };

	      _this.onKeyDown = function (e) {
	        let step = _this.props.step;

	        let handlePosition = utils.getHandleCenterPosition(_this.props.vertical, e.target);
	        if (e.keyCode === 13 || e.keyCode === 9 || !_this.sliderRef) {
	          _this.onEnd();
	          return;
	        } else if (e.keyCode === 38 || e.keyCode === 39) {
	          _this.onMoveByKeyboard(handlePosition, step);
	        } else if (e.keyCode === 40 || e.keyCode === 37) {
	          _this.onMoveByKeyboard(handlePosition, -step);
	        } else if (e.keyCode === 35) {
	          _this.moveToMax(handlePosition);
	        } else if (e.keyCode === 36) {
	          _this.moveToMin(handlePosition);
	        }

	        // if there is no keyup listener, add one
	        if (!_this.onKeyUpListener) {
	          _this.addDocumentKeyboardEvents();
	        }
	        utils.pauseEvent(e);
	      };

	      _this.saveSlider = function (slider) {
	        _this.sliderRef = slider;
	      };

	      if (process.env.NODE_ENV !== 'production') {
	        let step = props.step,
	            max = props.max,
	            min = props.min;

	        (0, _warning2.default)(step && Math.floor(step) === step ? (max - min) % step === 0 : true, 'Slider[max] - Slider[min] (%s) should be a multiple of Slider[step] (%s)', max - min, step);
	      }

	      _this.handlesRefs = {};
	      return _this;
	    }

	    ComponentEnhancer.prototype.componentWillUnmount = function componentWillUnmount() {
	      if (_Component.prototype.componentWillUnmount) {_Component.prototype.componentWillUnmount.call(this);}
	      if (this.onKeyUpListener) {this.onKeyUpListener.remove();}
	      this.removeDocumentEvents();
	    };

	    ComponentEnhancer.prototype.addDocumentTouchEvents = function addDocumentTouchEvents() {
	      // just work for Chrome iOS Safari and Android Browser
	      this.onTouchMoveListener = (0, _addEventListener2.default)(document, 'touchmove', this.onTouchMove);
	      this.onTouchUpListener = (0, _addEventListener2.default)(document, 'touchend', this.onEnd);
	    };

	    ComponentEnhancer.prototype.addDocumentMouseEvents = function addDocumentMouseEvents() {
	      this.onMouseMoveListener = (0, _addEventListener2.default)(document, 'mousemove', this.onMouseMove);
	      this.onMouseUpListener = (0, _addEventListener2.default)(document, 'mouseup', this.onEnd);
	    };

	    ComponentEnhancer.prototype.addDocumentKeyboardEvents = function addDocumentKeyboardEvents() {
	      this.onKeyUpListener = (0, _addEventListener2.default)(document, 'keyup', this.onEnd);
	    };

	    ComponentEnhancer.prototype.removeDocumentEvents = function removeDocumentEvents() {
	      /* eslint-disable no-unused-expressions */
	      this.onTouchMoveListener && this.onTouchMoveListener.remove();
	      this.onTouchUpListener && this.onTouchUpListener.remove();

	      this.onMouseMoveListener && this.onMouseMoveListener.remove();
	      this.onMouseUpListener && this.onMouseUpListener.remove();
	      /* eslint-enable no-unused-expressions */
	    };

	    ComponentEnhancer.prototype.getSliderStart = function getSliderStart() {
	      let slider = this.sliderRef;
	      let rect = slider.getBoundingClientRect();

	      return this.props.vertical ? rect.top : rect.left;
	    };

	    ComponentEnhancer.prototype.getSliderLength = function getSliderLength() {
	      let slider = this.sliderRef;
	      if (!slider) {
	        return 0;
	      }

	      return this.props.vertical ? slider.clientHeight : slider.clientWidth;
	    };

	    ComponentEnhancer.prototype.calcValue = function calcValue(offset) {
	      let _props = this.props,
	          vertical = _props.vertical,
	          min = _props.min,
	          max = _props.max;

	      let ratio = Math.abs(Math.max(offset, 0) / this.getSliderLength());
	      let value = vertical ? (1 - ratio) * (max - min) + min : ratio * (max - min) + min;
	      return value;
	    };

	    ComponentEnhancer.prototype.calcValueByPos = function calcValueByPos(position) {
	      let pixelOffset = position - this.getSliderStart();
	      let nextValue = this.trimAlignValue(this.calcValue(pixelOffset));
	      return nextValue;
	    };

	    ComponentEnhancer.prototype.calcOffset = function calcOffset(value) {
	      let _props2 = this.props,
	          min = _props2.min,
	          max = _props2.max;

	      let ratio = (value - min) / (max - min);
	      return ratio * 100;
	    };

	    ComponentEnhancer.prototype.saveHandle = function saveHandle(index, handle) {
	      this.handlesRefs[index] = handle;
	    };

	    ComponentEnhancer.prototype.render = function render() {
	      let _classNames;

	      let _props3 = this.props,
	          prefixCls = _props3.prefixCls,
	          className = _props3.className,
	          marks = _props3.marks,
	          dots = _props3.dots,
	          step = _props3.step,
	          included = _props3.included,
	          disabled = _props3.disabled,
	          vertical = _props3.vertical,
	          min = _props3.min,
	          max = _props3.max,
	          children = _props3.children,
	          maximumTrackTintColor = _props3.maximumTrackTintColor,
	          style = _props3.style;

	      let _Component$prototype$ = _Component.prototype.render.call(this),
	          tracks = _Component$prototype$.tracks,
	          handles = _Component$prototype$.handles;

	      let sliderClassName = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, prefixCls + '-with-marks', Object.keys(marks).length), _defineProperty(_classNames, prefixCls + '-disabled', disabled), _defineProperty(_classNames, prefixCls + '-vertical', vertical), _defineProperty(_classNames, className, className), _classNames));

	      let trackStyle = maximumTrackTintColor && !disabled ? {
	        backgroundColor: maximumTrackTintColor
	      } : {};

	      return _react2.default.createElement(
	        'div',
	        {
	          ref: this.saveSlider,
	          className: sliderClassName,
	          onTouchStart: disabled ? noop : this.onTouchStart,
	          onMouseDown: disabled ? noop : this.onMouseDown,
	          onKeyDown: disabled ? noop : this.onKeyDown,
	          style: style
	        },
	        _react2.default.createElement('div', { className: prefixCls + '-rail', style: trackStyle }),
	        tracks,
	        _react2.default.createElement(_Steps2.default, {
	          prefixCls: prefixCls,
	          vertical: vertical,
	          marks: marks,
	          dots: dots,
	          step: step,
	          included: included,
	          lowerBound: this.getLowerBound(),
	          upperBound: this.getUpperBound(),
	          max: max,
	          min: min
	        }),
	        handles,
	        _react2.default.createElement(_Marks2.default, {
	          className: prefixCls + '-mark',
	          vertical: vertical,
	          marks: marks,
	          included: included,
	          lowerBound: this.getLowerBound(),
	          upperBound: this.getUpperBound(),
	          max: max,
	          min: min
	        }),
	        children
	      );
	    };

	    return ComponentEnhancer;
	  }(Component), _class.displayName = 'ComponentEnhancer(' + Component.displayName + ')', _class.propTypes = _extends({}, Component.propTypes, {
	    min: _propTypes2.default.number,
	    max: _propTypes2.default.number,
	    step: _propTypes2.default.number,
	    marks: _propTypes2.default.object,
	    included: _propTypes2.default.bool,
	    className: _propTypes2.default.string,
	    prefixCls: _propTypes2.default.string,
	    disabled: _propTypes2.default.bool,
	    children: _propTypes2.default.any,
	    onBeforeChange: _propTypes2.default.func,
	    onChange: _propTypes2.default.func,
	    onAfterChange: _propTypes2.default.func,
	    handle: _propTypes2.default.func,
	    dots: _propTypes2.default.bool,
	    vertical: _propTypes2.default.bool,
	    style: _propTypes2.default.object,
	    maximumTrackTintColor: _propTypes2.default.string
	  }), _class.defaultProps = _extends({}, Component.defaultProps, {
	    prefixCls: 'rc-slider',
	    className: '',
	    min: 0,
	    max: 100,
	    step: 1,
	    marks: {},
	    handle: function handle(_ref) {
	      let index = _ref.index,
	          restProps = _objectWithoutProperties(_ref, ['index']);

	      delete restProps.dragging;
	      delete restProps.value;
	      return _react2.default.createElement(_Handle2.default, _extends({}, restProps, { key: index }));
	    },

	    onBeforeChange: noop,
	    onChange: noop,
	    onAfterChange: noop,
	    included: true,
	    disabled: false,
	    dots: false,
	    vertical: false
	  }), _temp;
                }
                module.exports = exports['default'];
                /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)));

            /***/ },
        /* 13 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            Object.defineProperty(exports, '__esModule', {
	  value: true
            });
            exports['default'] = addEventListenerWrap;

            let _addDomEventListener = __webpack_require__(14);

            let _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);

            let _reactDom = __webpack_require__(17);

            let _reactDom2 = _interopRequireDefault(_reactDom);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

            function addEventListenerWrap(target, eventType, cb, option) {
	  /* eslint camelcase: 2 */
	  let callback = _reactDom2['default'].unstable_batchedUpdates ? function run(e) {
	    _reactDom2['default'].unstable_batchedUpdates(cb, e);
	  } : cb;
	  return (0, _addDomEventListener2['default'])(target, eventType, callback, option);
            }
            module.exports = exports['default'];

            /***/ },
        /* 14 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            Object.defineProperty(exports, '__esModule', {
	  value: true
            });
            exports['default'] = addEventListener;

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

            let _EventObject = __webpack_require__(15);

            let _EventObject2 = _interopRequireDefault(_EventObject);

            function addEventListener(target, eventType, callback, option) {
	  function wrapCallback(e) {
	    let ne = new _EventObject2['default'](e);
	    callback.call(target, ne);
	  }

	  if (target.addEventListener) {
	    let _ret = (function () {
	      let useCapture = false;
	      if (typeof option === 'object') {
	        useCapture = option.capture || false;
	      } else if (typeof option === 'boolean') {
	        useCapture = option;
	      }

	      target.addEventListener(eventType, wrapCallback, option || false);

	      return {
	        v: {
	          remove: function remove() {
	            target.removeEventListener(eventType, wrapCallback, useCapture);
	          }
	        }
	      };
	    })();

	    if (typeof _ret === 'object') {return _ret.v;}
	  } else if (target.attachEvent) {
	    target.attachEvent('on' + eventType, wrapCallback);
	    return {
	      remove: function remove() {
	        target.detachEvent('on' + eventType, wrapCallback);
	      }
	    };
	  }
            }

            module.exports = exports['default'];

            /***/ },
        /* 15 */
        /***/ function(module, exports, __webpack_require__) {

            /**
	 * @ignore
	 * event object for dom
	 * @author yiminghe@gmail.com
	 */

            'use strict';

            Object.defineProperty(exports, '__esModule', {
	  value: true
            });

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

            let _EventBaseObject = __webpack_require__(16);

            let _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);

            let _objectAssign = __webpack_require__(6);

            let _objectAssign2 = _interopRequireDefault(_objectAssign);

            let TRUE = true;
            let FALSE = false;
            let commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];

            function isNullOrUndefined(w) {
	  return w === null || w === undefined;
            }

            let eventNormalizers = [{
	  reg: /^key/,
	  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
	  fix: function fix(event, nativeEvent) {
	    if (isNullOrUndefined(event.which)) {
	      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
	    }

	    // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
	    if (event.metaKey === undefined) {
	      event.metaKey = event.ctrlKey;
	    }
	  }
            }, {
	  reg: /^touch/,
	  props: ['touches', 'changedTouches', 'targetTouches']
            }, {
	  reg: /^hashchange$/,
	  props: ['newURL', 'oldURL']
            }, {
	  reg: /^gesturechange$/i,
	  props: ['rotation', 'scale']
            }, {
	  reg: /^(mousewheel|DOMMouseScroll)$/,
	  props: [],
	  fix: function fix(event, nativeEvent) {
	    let deltaX = undefined;
	    let deltaY = undefined;
	    let delta = undefined;
	    let wheelDelta = nativeEvent.wheelDelta;
	    let axis = nativeEvent.axis;
	    let wheelDeltaY = nativeEvent.wheelDeltaY;
	    let wheelDeltaX = nativeEvent.wheelDeltaX;
	    let detail = nativeEvent.detail;

	    // ie/webkit
	    if (wheelDelta) {
	      delta = wheelDelta / 120;
	    }

	    // gecko
	    if (detail) {
	      // press control e.detail == 1 else e.detail == 3
	      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
	    }

	    // Gecko
	    if (axis !== undefined) {
	      if (axis === event.HORIZONTAL_AXIS) {
	        deltaY = 0;
	        deltaX = 0 - delta;
	      } else if (axis === event.VERTICAL_AXIS) {
	        deltaX = 0;
	        deltaY = delta;
	      }
	    }

	    // Webkit
	    if (wheelDeltaY !== undefined) {
	      deltaY = wheelDeltaY / 120;
	    }
	    if (wheelDeltaX !== undefined) {
	      deltaX = -1 * wheelDeltaX / 120;
	    }

	    // 默认 deltaY (ie)
	    if (!deltaX && !deltaY) {
	      deltaY = delta;
	    }

	    if (deltaX !== undefined) {
	      /**
	       * deltaX of mousewheel event
	       * @property deltaX
	       * @member Event.DomEvent.Object
	       */
	      event.deltaX = deltaX;
	    }

	    if (deltaY !== undefined) {
	      /**
	       * deltaY of mousewheel event
	       * @property deltaY
	       * @member Event.DomEvent.Object
	       */
	      event.deltaY = deltaY;
	    }

	    if (delta !== undefined) {
	      /**
	       * delta of mousewheel event
	       * @property delta
	       * @member Event.DomEvent.Object
	       */
	      event.delta = delta;
	    }
	  }
            }, {
	  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
	  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
	  fix: function fix(event, nativeEvent) {
	    let eventDoc = undefined;
	    let doc = undefined;
	    let body = undefined;
	    let target = event.target;
	    let button = nativeEvent.button;

	    // Calculate pageX/Y if missing and clientX/Y available
	    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
	      eventDoc = target.ownerDocument || document;
	      doc = eventDoc.documentElement;
	      body = eventDoc.body;
	      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
	      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
	    }

	    // which for click: 1 === left; 2 === middle; 3 === right
	    // do not use button
	    if (!event.which && button !== undefined) {
	      if (button & 1) {
	        event.which = 1;
	      } else if (button & 2) {
	        event.which = 3;
	      } else if (button & 4) {
	        event.which = 2;
	      } else {
	        event.which = 0;
	      }
	    }

	    // add relatedTarget, if necessary
	    if (!event.relatedTarget && event.fromElement) {
	      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
	    }

	    return event;
	  }
            }];

            function retTrue() {
	  return TRUE;
            }

            function retFalse() {
	  return FALSE;
            }

            function DomEventObject(nativeEvent) {
	  let type = nativeEvent.type;

	  let isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';

	  _EventBaseObject2['default'].call(this);

	  this.nativeEvent = nativeEvent;

	  // in case dom event has been mark as default prevented by lower dom node
	  let isDefaultPrevented = retFalse;
	  if ('defaultPrevented' in nativeEvent) {
	    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
	  } else if ('getPreventDefault' in nativeEvent) {
	    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
	    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
	  } else if ('returnValue' in nativeEvent) {
	    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
	  }

	  this.isDefaultPrevented = isDefaultPrevented;

	  let fixFns = [];
	  let fixFn = undefined;
	  let l = undefined;
	  let prop = undefined;
	  let props = commonProps.concat();

	  eventNormalizers.forEach(function (normalizer) {
	    if (type.match(normalizer.reg)) {
	      props = props.concat(normalizer.props);
	      if (normalizer.fix) {
	        fixFns.push(normalizer.fix);
	      }
	    }
	  });

	  l = props.length;

	  // clone properties of the original event object
	  while (l) {
	    prop = props[--l];
	    this[prop] = nativeEvent[prop];
	  }

	  // fix target property, if necessary
	  if (!this.target && isNative) {
	    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
	  }

	  // check if target is a text node (safari)
	  if (this.target && this.target.nodeType === 3) {
	    this.target = this.target.parentNode;
	  }

	  l = fixFns.length;

	  while (l) {
	    fixFn = fixFns[--l];
	    fixFn(this, nativeEvent);
	  }

	  this.timeStamp = nativeEvent.timeStamp || Date.now();
            }

            let EventBaseObjectProto = _EventBaseObject2['default'].prototype;

            (0, _objectAssign2['default'])(DomEventObject.prototype, EventBaseObjectProto, {
	  constructor: DomEventObject,

	  preventDefault: function preventDefault() {
	    let e = this.nativeEvent;

	    // if preventDefault exists run it on the original event
	    if (e.preventDefault) {
	      e.preventDefault();
	    } else {
	      // otherwise set the returnValue property of the original event to FALSE (IE)
	      e.returnValue = FALSE;
	    }

	    EventBaseObjectProto.preventDefault.call(this);
	  },

	  stopPropagation: function stopPropagation() {
	    let e = this.nativeEvent;

	    // if stopPropagation exists run it on the original event
	    if (e.stopPropagation) {
	      e.stopPropagation();
	    } else {
	      // otherwise set the cancelBubble property of the original event to TRUE (IE)
	      e.cancelBubble = TRUE;
	    }

	    EventBaseObjectProto.stopPropagation.call(this);
	  }
            });

            exports['default'] = DomEventObject;
            module.exports = exports['default'];

            /***/ },
        /* 16 */
        /***/ function(module, exports) {

            /**
	 * @ignore
	 * base event object for custom and dom event.
	 * @author yiminghe@gmail.com
	 */

            'use strict';

            Object.defineProperty(exports, '__esModule', {
	  value: true
            });
            function returnFalse() {
	  return false;
            }

            function returnTrue() {
	  return true;
            }

            function EventBaseObject() {
	  this.timeStamp = Date.now();
	  this.target = undefined;
	  this.currentTarget = undefined;
            }

            EventBaseObject.prototype = {
	  isEventObject: 1,

	  constructor: EventBaseObject,

	  isDefaultPrevented: returnFalse,

	  isPropagationStopped: returnFalse,

	  isImmediatePropagationStopped: returnFalse,

	  preventDefault: function preventDefault() {
	    this.isDefaultPrevented = returnTrue;
	  },

	  stopPropagation: function stopPropagation() {
	    this.isPropagationStopped = returnTrue;
	  },

	  stopImmediatePropagation: function stopImmediatePropagation() {
	    this.isImmediatePropagationStopped = returnTrue;
	    // fixed 1.2
	    // call stopPropagation implicitly
	    this.stopPropagation();
	  },

	  halt: function halt(immediate) {
	    if (immediate) {
	      this.stopImmediatePropagation();
	    } else {
	      this.stopPropagation();
	    }
	    this.preventDefault();
	  }
            };

            exports['default'] = EventBaseObject;
            module.exports = exports['default'];

            /***/ },
        /* 17 */
        /***/ function(module, exports) {

            module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

            /***/ },
        /* 18 */
        /***/ function(module, exports, __webpack_require__) {

            let __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2017 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
            /* global define */

            (function () {
                'use strict';

                let hasOwn = {}.hasOwnProperty;

                function classNames () {
                    let classes = [];

                    for (let i = 0; i < arguments.length; i++) {
                        let arg = arguments[i];
                        if (!arg) {continue;}

                        let argType = typeof arg;

                        if (argType === 'string' || argType === 'number') {
                            classes.push(arg);
                        } else if (Array.isArray(arg) && arg.length) {
                            let inner = classNames.apply(null, arg);
                            if (inner) {
                                classes.push(inner);
                            }
                        } else if (argType === 'object') {
                            for (let key in arg) {
                                if (hasOwn.call(arg, key) && arg[key]) {
                                    classes.push(key);
                                }
                            }
                        }
                    }

                    return classes.join(' ');
                }

                if (typeof module !== 'undefined' && module.exports) {
                    classNames.default = classNames;
                    module.exports = classNames;
                } else if (true) {
                    // register as 'classnames', consistent with npm package name
                    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
                        return classNames;
                    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                } else {
                    window.classNames = classNames;
                }
            }());


            /***/ },
        /* 19 */
        /***/ function(module, exports, __webpack_require__) {

            /* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

                'use strict';

                /**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

                let warning = function() {};

                if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    let len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (let key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      let argIndex = 0;
	      let message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    }
	  };
                }

                module.exports = warning;

                /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)));

            /***/ },
        /* 20 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            Object.defineProperty(exports, '__esModule', {
	  value: true
            });

            let _react = __webpack_require__(10);

            let _react2 = _interopRequireDefault(_react);

            let _classnames = __webpack_require__(18);

            let _classnames2 = _interopRequireDefault(_classnames);

            let _warning = __webpack_require__(19);

            let _warning2 = _interopRequireDefault(_warning);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

            function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

            let calcPoints = function calcPoints(vertical, marks, dots, step, min, max) {
	  (0, _warning2.default)(dots ? step > 0 : true, '`Slider[step]` should be a positive number in order to make Slider[dots] work.');
	  let points = Object.keys(marks).map(parseFloat);
	  if (dots) {
	    for (let i = min; i <= max; i = i + step) {
	      if (points.indexOf(i) >= 0) {continue;}
	      points.push(i);
	    }
	  }
	  return points;
            };

            let Steps = function Steps(_ref) {
	  let prefixCls = _ref.prefixCls,
	      vertical = _ref.vertical,
	      marks = _ref.marks,
	      dots = _ref.dots,
	      step = _ref.step,
	      included = _ref.included,
	      lowerBound = _ref.lowerBound,
	      upperBound = _ref.upperBound,
	      max = _ref.max,
	      min = _ref.min;

	  let range = max - min;
	  let elements = calcPoints(vertical, marks, dots, step, min, max).map(function (point) {
	    let _classNames;

	    let offset = Math.abs(point - min) / range * 100 + '%';
	    let style = vertical ? { bottom: offset } : { left: offset };

	    let isActived = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
	    let pointClassName = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, prefixCls + '-dot', true), _defineProperty(_classNames, prefixCls + '-dot-active', isActived), _classNames));

	    return _react2.default.createElement('span', { className: pointClassName, style: style, key: point });
	  });

	  return _react2.default.createElement(
	    'div',
	    { className: prefixCls + '-step' },
	    elements
	  );
            };

            exports.default = Steps;
            module.exports = exports['default'];

            /***/ },
        /* 21 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            Object.defineProperty(exports, '__esModule', {
	  value: true
            });

            let _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { let source = arguments[i]; for (let key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

            let _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; };

            let _react = __webpack_require__(10);

            let _react2 = _interopRequireDefault(_react);

            let _classnames = __webpack_require__(18);

            let _classnames2 = _interopRequireDefault(_classnames);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

            function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

            let Marks = function Marks(_ref) {
	  let className = _ref.className,
	      vertical = _ref.vertical,
	      marks = _ref.marks,
	      included = _ref.included,
	      upperBound = _ref.upperBound,
	      lowerBound = _ref.lowerBound,
	      max = _ref.max,
	      min = _ref.min;

	  let marksKeys = Object.keys(marks);
	  let marksCount = marksKeys.length;
	  let unit = 100 / (marksCount - 1);
	  let markWidth = unit * 0.9;

	  let range = max - min;
	  let elements = marksKeys.map(parseFloat).sort(function (a, b) {
	    return a - b;
	  }).map(function (point) {
	    let _classNames;

	    let isActive = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
	    let markClassName = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, className + '-text', true), _defineProperty(_classNames, className + '-text-active', isActive), _classNames));

	    let bottomStyle = {
	      marginBottom: '-50%',
	      bottom: (point - min) / range * 100 + '%'
	    };

	    let leftStyle = {
	      width: markWidth + '%',
	      marginLeft: -markWidth / 2 + '%',
	      left: (point - min) / range * 100 + '%'
	    };

	    let style = vertical ? bottomStyle : leftStyle;

	    let markPoint = marks[point];
	    let markPointIsObject = (typeof markPoint === 'undefined' ? 'undefined' : _typeof(markPoint)) === 'object' && !_react2.default.isValidElement(markPoint);
	    let markLabel = markPointIsObject ? markPoint.label : markPoint;
	    let markStyle = markPointIsObject ? _extends({}, style, markPoint.style) : style;
	    return _react2.default.createElement(
	      'span',
	      {
	        className: markClassName,
	        style: markStyle,
	        key: point
	      },
	      markLabel
	    );
	  });

	  return _react2.default.createElement(
	    'div',
	    { className: className },
	    elements
	  );
            };

            exports.default = Marks;
            module.exports = exports['default'];

            /***/ },
        /* 22 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            Object.defineProperty(exports, '__esModule', {
	    value: true
            });

            let _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { let source = arguments[i]; for (let key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

            let _propTypes = __webpack_require__(3);

            let _propTypes2 = _interopRequireDefault(_propTypes);

            let _react = __webpack_require__(10);

            let _react2 = _interopRequireDefault(_react);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

            function _defaults(obj, defaults) { let keys = Object.getOwnPropertyNames(defaults); for (let i = 0; i < keys.length; i++) { let key = keys[i]; let value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

            function _objectWithoutProperties(obj, keys) { let target = {}; for (let i in obj) { if (keys.indexOf(i) >= 0) {continue;} if (!Object.prototype.hasOwnProperty.call(obj, i)) {continue;} target[i] = obj[i]; } return target; }

            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

            function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called'); } return call && (typeof call === 'object' || typeof call === 'function') ? call : self; }

            function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) {Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass);} }

            let Handle = function (_React$Component) {
	    _inherits(Handle, _React$Component);

	    function Handle() {
	        _classCallCheck(this, Handle);

	        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	    }

	    Handle.prototype.render = function render() {
	        let _props = this.props,
	            className = _props.className,
	            vertical = _props.vertical,
	            offset = _props.offset,
	            minimumTrackTintColor = _props.minimumTrackTintColor,
	            disabled = _props.disabled,
	            ariaLabel = _props.ariaLabel,
	            ariaValueText = _props.ariaValueText,
	            ariaValueNow = _props.ariaValueNow,
	            ariaValueMin = _props.ariaValueMin,
	            ariaValueMax = _props.ariaValueMax,
	            restProps = _objectWithoutProperties(_props, ['className', 'vertical', 'offset', 'minimumTrackTintColor', 'disabled', 'ariaLabel', 'ariaValueText', 'ariaValueNow', 'ariaValueMin', 'ariaValueMax']);

	        let style = vertical ? { bottom: offset + '%' } : { left: offset + '%' };
	        let ariaOrientation = vertical ? 'vertical' : 'horizontal';
	        if (minimumTrackTintColor && !disabled) {
	            style.borderColor = minimumTrackTintColor;
	        }
	        return _react2.default.createElement('div', _extends({}, restProps, {
	            className: className,
	            tabIndex: 0,
	            role: 'slider',
	            style: style,
	            'aria-label': ariaLabel,
	            'aria-valuenow': ariaValueNow,
	            'aria-orientation': ariaOrientation,
	            'aria-valuetext': ariaValueText,
	            'aria-valuemin': ariaValueMin,
	            'aria-valuemax': ariaValueMax
	        }));
	    };

	    return Handle;
            }(_react2.default.Component);

            exports.default = Handle;


            Handle.propTypes = {
	    className: _propTypes2.default.string,
	    vertical: _propTypes2.default.bool,
	    offset: _propTypes2.default.number,
	    minimumTrackTintColor: _propTypes2.default.string,
	    disabled: _propTypes2.default.bool,
	    ariaLabel: _propTypes2.default.string,
	    ariaValueText: _propTypes2.default.string,
	    ariaValueNow: _propTypes2.default.number,
	    ariaValueMin: _propTypes2.default.number,
	    ariaValueMax: _propTypes2.default.number
            };
            module.exports = exports['default'];

            /***/ },
        /* 23 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            Object.defineProperty(exports, '__esModule', {
	  value: true
            });
            exports.isEventFromHandle = isEventFromHandle;
            exports.isValueOutOfRange = isValueOutOfRange;
            exports.isNotTouchEvent = isNotTouchEvent;
            exports.getClosestPoint = getClosestPoint;
            exports.getPrecision = getPrecision;
            exports.getMousePosition = getMousePosition;
            exports.getTouchPosition = getTouchPosition;
            exports.getHandleCenterPosition = getHandleCenterPosition;
            exports.ensureValueInRange = ensureValueInRange;
            exports.ensureValuePrecision = ensureValuePrecision;
            exports.pauseEvent = pauseEvent;

            let _reactDom = __webpack_require__(17);

            function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

            function isEventFromHandle(e, handles) {
	  return Object.keys(handles).some(function (key) {
	    return e.target === (0, _reactDom.findDOMNode)(handles[key]);
	  });
            }

            function isValueOutOfRange(value, _ref) {
	  let min = _ref.min,
	      max = _ref.max;

	  return value < min || value > max;
            }

            function isNotTouchEvent(e) {
	  return e.touches.length > 1 || e.type.toLowerCase() === 'touchend' && e.touches.length > 0;
            }

            function getClosestPoint(val, _ref2) {
	  let marks = _ref2.marks,
	      step = _ref2.step,
	      min = _ref2.min;

	  let points = Object.keys(marks).map(parseFloat);
	  if (step !== null) {
	    let closestStep = Math.round((val - min) / step) * step + min;
	    points.push(closestStep);
	  }
	  let diffs = points.map(function (point) {
	    return Math.abs(val - point);
	  });
	  return points[diffs.indexOf(Math.min.apply(Math, _toConsumableArray(diffs)))];
            }

            function getPrecision(step) {
	  let stepString = step.toString();
	  let precision = 0;
	  if (stepString.indexOf('.') >= 0) {
	    precision = stepString.length - stepString.indexOf('.') - 1;
	  }
	  return precision;
            }

            function getMousePosition(vertical, e) {
	  return vertical ? e.clientY : e.pageX;
            }

            function getTouchPosition(vertical, e) {
	  return vertical ? e.touches[0].clientY : e.touches[0].pageX;
            }

            function getHandleCenterPosition(vertical, handle) {
	  let coords = handle.getBoundingClientRect();
	  return vertical ? coords.top + coords.height * 0.5 : coords.left + coords.width * 0.5;
            }

            function ensureValueInRange(val, _ref3) {
	  let max = _ref3.max,
	      min = _ref3.min;

	  if (val <= min) {
	    return min;
	  }
	  if (val >= max) {
	    return max;
	  }
	  return val;
            }

            function ensureValuePrecision(val, props) {
	  let step = props.step;

	  let closestPoint = getClosestPoint(val, props);
	  return step === null ? closestPoint : parseFloat(closestPoint.toFixed(getPrecision(step)));
            }

            function pauseEvent(e) {
	  e.stopPropagation();
	  e.preventDefault();
            }

            /***/ },
        /* 24 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            Object.defineProperty(exports, '__esModule', {
	    value: true
            });

            let _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { let source = arguments[i]; for (let key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

            let _propTypes = __webpack_require__(3);

            let _propTypes2 = _interopRequireDefault(_propTypes);

            let _react = __webpack_require__(10);

            let _react2 = _interopRequireDefault(_react);

            let _classnames = __webpack_require__(18);

            let _classnames2 = _interopRequireDefault(_classnames);

            let _Track = __webpack_require__(11);

            let _Track2 = _interopRequireDefault(_Track);

            let _createSlider = __webpack_require__(12);

            let _createSlider2 = _interopRequireDefault(_createSlider);

            let _utils = __webpack_require__(23);

            let utils = _interopRequireWildcard(_utils);

            function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { let newObj = {}; if (obj != null) { for (let key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) {newObj[key] = obj[key];} } } newObj.default = obj; return newObj; } }

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

            function _defaults(obj, defaults) { let keys = Object.getOwnPropertyNames(defaults); for (let i = 0; i < keys.length; i++) { let key = keys[i]; let value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

            function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

            function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

            function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called'); } return call && (typeof call === 'object' || typeof call === 'function') ? call : self; }

            function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) {Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass);} } /* eslint-disable react/prop-types */


            let Range = function (_React$Component) {
	    _inherits(Range, _React$Component);

	    function Range(props) {
	        _classCallCheck(this, Range);

	        let _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

	        _this.onEnd = function () {
	            _this.setState({ handle: null });
	            _this.removeDocumentEvents();
	            _this.props.onAfterChange(_this.getValue());
	        };

	        let count = props.count,
	            min = props.min,
	            max = props.max;

	        let initialValue = Array.apply(null, Array(count + 1)).map(function () {
	            return min;
	        });
	        let defaultValue = 'defaultValue' in props ? props.defaultValue : initialValue;
	        let value = props.value !== undefined ? props.value : defaultValue;
	        let bounds = value.map(function (v) {
	            return _this.trimAlignValue(v);
	        });
	        let recent = bounds[0] === max ? 0 : bounds.length - 1;

	        _this.state = {
	            handle: null,
	            recent: recent,
	            bounds: bounds
	        };
	        return _this;
	    }

	    Range.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        let _this2 = this;

	        if (!('value' in nextProps || 'min' in nextProps || 'max' in nextProps)) {
	            return;
	        }
	        let bounds = this.state.bounds;

	        let value = nextProps.value || bounds;
	        let nextBounds = value.map(function (v) {
	            return _this2.trimAlignValue(v, nextProps);
	        });
	        if (nextBounds.length === bounds.length && nextBounds.every(function (v, i) {
	            return v === bounds[i];
	        })) {
	            return;
	        }

	        this.setState({ bounds: nextBounds });
	        if (bounds.some(function (v) {
	            return utils.isValueOutOfRange(v, nextProps);
	        })) {
	            this.props.onChange(nextBounds);
	        }
	    };

	    Range.prototype.onChange = function onChange(state) {
	        let props = this.props;
	        let isNotControlled = !('value' in props);
	        if (isNotControlled) {
	            this.setState(state);
	        } else if (state.handle !== undefined) {
	            this.setState({ handle: state.handle });
	        }

	        let data = _extends({}, this.state, state);
	        let changedValue = data.bounds;
	        props.onChange(changedValue);
	    };

	    Range.prototype.onStart = function onStart(position) {
	        let props = this.props;
	        let state = this.state;
	        let bounds = this.getValue();
	        props.onBeforeChange(bounds);

	        let value = this.calcValueByPos(position);
	        this.startValue = value;
	        this.startPosition = position;

	        let closestBound = this.getClosestBound(value);
	        let boundNeedMoving = this.getBoundNeedMoving(value, closestBound);

	        this.setState({
	            handle: boundNeedMoving,
	            recent: boundNeedMoving
	        });

	        let prevValue = bounds[boundNeedMoving];
	        if (value === prevValue) {
	            return;
	        }

	        let nextBounds = [].concat(_toConsumableArray(state.bounds));
	        nextBounds[boundNeedMoving] = value;
	        this.onChange({ bounds: nextBounds });
	    };

	    Range.prototype.onMoveByKeyboard = function onMoveByKeyboard(position, step) {
	        if (step === 0) {
	            return;
	        }
	        let props = this.props;
	        let state = this.state;

	        let closestBound = this.getClosestBound(this.calcValueByPos(position));
	        let boundNeedMoving = this.getBoundNeedMoving(props.value, closestBound);

	        let oldValue = state.bounds[boundNeedMoving];
	        let value = oldValue + step;

	        let nextBounds = [].concat(_toConsumableArray(state.bounds));
	        nextBounds[boundNeedMoving] = value;

	        let nextHandle = boundNeedMoving;
	        if (props.pushable !== false) {
	            let originalValue = state.bounds[nextHandle];
	            this.pushSurroundingHandles(nextBounds, nextHandle, originalValue);
	        } else if (props.allowCross) {
	            nextBounds.sort(function (a, b) {
	                return a - b;
	            });
	            nextHandle = nextBounds.indexOf(value);
	        }

	        this.onChange({
	            handle: nextHandle,
	            bounds: nextBounds
	        });
	    };

	    Range.prototype.onMove = function onMove(e, position) {
	        utils.pauseEvent(e);
	        let props = this.props;
	        let state = this.state;

	        let value = this.calcValueByPos(position);
	        let oldValue = state.bounds[state.handle];
	        if (value === oldValue) {
	            return;
	        }

	        let nextBounds = [].concat(_toConsumableArray(state.bounds));
	        nextBounds[state.handle] = value;
	        let nextHandle = state.handle;
	        if (props.pushable !== false) {
	            let originalValue = state.bounds[nextHandle];
	            this.pushSurroundingHandles(nextBounds, nextHandle, originalValue);
	        } else if (props.allowCross) {
	            nextBounds.sort(function (a, b) {
	                return a - b;
	            });
	            nextHandle = nextBounds.indexOf(value);
	        }
	        this.onChange({
	            handle: nextHandle,
	            bounds: nextBounds
	        });
	    };

	    Range.prototype.getValue = function getValue() {
	        return this.state.bounds;
	    };

	    Range.prototype.getClosestBound = function getClosestBound(value) {
	        let bounds = this.state.bounds;

	        let closestBound = 0;
	        for (let i = 1; i < bounds.length - 1; ++i) {
	            if (value > bounds[i]) {
	                closestBound = i;
	            }
	        }
	        if (Math.abs(bounds[closestBound + 1] - value) < Math.abs(bounds[closestBound] - value)) {
	            closestBound = closestBound + 1;
	        }
	        return closestBound;
	    };

	    Range.prototype.getBoundNeedMoving = function getBoundNeedMoving(value, closestBound) {
	        let _state = this.state,
	            bounds = _state.bounds,
	            recent = _state.recent;

	        let boundNeedMoving = closestBound;
	        let isAtTheSamePoint = bounds[closestBound + 1] === bounds[closestBound];
	        if (isAtTheSamePoint) {
	            boundNeedMoving = recent;
	        }

	        if (isAtTheSamePoint && value !== bounds[closestBound + 1]) {
	            boundNeedMoving = value < bounds[closestBound + 1] ? closestBound : closestBound + 1;
	        }
	        return boundNeedMoving;
	    };

	    Range.prototype.getLowerBound = function getLowerBound() {
	        return this.state.bounds[0];
	    };

	    Range.prototype.getUpperBound = function getUpperBound() {
	        let bounds = this.state.bounds;

	        return bounds[bounds.length - 1];
	    };

	    /**
	     * Returns an array of possible slider points, taking into account both
	     * `marks` and `step`. The result is cached.
	     */


	    Range.prototype.getPoints = function getPoints() {
	        let _props = this.props,
	            marks = _props.marks,
	            step = _props.step,
	            min = _props.min,
	            max = _props.max;

	        let cache = this._getPointsCache;
	        if (!cache || cache.marks !== marks || cache.step !== step) {
	            let pointsObject = _extends({}, marks);
	            if (step !== null) {
	                for (let point = min; point <= max; point += step) {
	                    pointsObject[point] = point;
	                }
	            }
	            let points = Object.keys(pointsObject).map(parseFloat);
	            points.sort(function (a, b) {
	                return a - b;
	            });
	            this._getPointsCache = { marks: marks, step: step, points: points };
	        }
	        return this._getPointsCache.points;
	    };

	    Range.prototype.moveToMax = function moveToMax(position) {
	        let _props2 = this.props,
	            max = _props2.max,
	            pushable = _props2.pushable,
	            allowCross = _props2.allowCross,
	            value = _props2.value;

	        let state = this.state;
	        let closestBound = this.getClosestBound(this.calcValueByPos(position));
	        let boundNeedMoving = this.getBoundNeedMoving(value, closestBound);
	        let nextBounds = [].concat(_toConsumableArray(state.bounds));

	        let nextHandle = boundNeedMoving;
	        nextBounds[boundNeedMoving] = max;
	        if (pushable !== false) {
	            let originalValue = state.bounds[nextHandle];
	            this.pushSurroundingHandles(nextBounds, nextHandle, originalValue);
	        } else if (allowCross) {
	            nextBounds.sort(function (a, b) {
	                return a - b;
	            });
	            nextHandle = nextBounds.indexOf(max);
	        }

	        this.onChange({
	            handle: nextHandle,
	            bounds: nextBounds
	        });
	    };

	    Range.prototype.moveToMin = function moveToMin(position) {
	        let _props3 = this.props,
	            min = _props3.min,
	            pushable = _props3.pushable,
	            allowCross = _props3.allowCross,
	            value = _props3.value;

	        let state = this.state;
	        let closestBound = this.getClosestBound(this.calcValueByPos(position));
	        let boundNeedMoving = this.getBoundNeedMoving(value, closestBound);
	        let nextBounds = [].concat(_toConsumableArray(state.bounds));

	        let nextHandle = boundNeedMoving;
	        nextBounds[boundNeedMoving] = min;
	        if (pushable !== false) {
	            let originalValue = state.bounds[nextHandle];
	            this.pushSurroundingHandles(nextBounds, nextHandle, originalValue);
	        } else if (allowCross) {
	            nextBounds.sort(function (a, b) {
	                return a - b;
	            });
	            nextHandle = nextBounds.indexOf(min);
	        }

	        this.onChange({
	            handle: nextHandle,
	            bounds: nextBounds
	        });
	    };

	    Range.prototype.pushSurroundingHandles = function pushSurroundingHandles(bounds, handle, originalValue) {
	        let threshold = this.props.pushable;

	        let value = bounds[handle];

	        let direction = 0;
	        if (bounds[handle + 1] - value < threshold) {
	            direction = +1; // push to right
	        }
	        if (value - bounds[handle - 1] < threshold) {
	            direction = -1; // push to left
	        }

	        if (direction === 0) {
	            return;
	        }

	        let nextHandle = handle + direction;
	        let diffToNext = direction * (bounds[nextHandle] - value);
	        if (!this.pushHandle(bounds, nextHandle, direction, threshold - diffToNext)) {
	            // revert to original value if pushing is impossible
	            bounds[handle] = originalValue;
	        }
	    };

	    Range.prototype.pushHandle = function pushHandle(bounds, handle, direction, amount) {
	        let originalValue = bounds[handle];
	        let currentValue = bounds[handle];
	        while (direction * (currentValue - originalValue) < amount) {
	            if (!this.pushHandleOnePoint(bounds, handle, direction)) {
	                // can't push handle enough to create the needed `amount` gap, so we
	                // revert its position to the original value
	                bounds[handle] = originalValue;
	                return false;
	            }
	            currentValue = bounds[handle];
	        }
	        // the handle was pushed enough to create the needed `amount` gap
	        return true;
	    };

	    Range.prototype.pushHandleOnePoint = function pushHandleOnePoint(bounds, handle, direction) {
	        let points = this.getPoints();
	        let pointIndex = points.indexOf(bounds[handle]);
	        let nextPointIndex = pointIndex + direction;
	        if (nextPointIndex >= points.length || nextPointIndex < 0) {
	            // reached the minimum or maximum available point, can't push anymore
	            return false;
	        }
	        let nextHandle = handle + direction;
	        let nextValue = points[nextPointIndex];
	        let threshold = this.props.pushable;

	        let diffToNext = direction * (bounds[nextHandle] - nextValue);
	        if (!this.pushHandle(bounds, nextHandle, direction, threshold - diffToNext)) {
	            // couldn't push next handle, so we won't push this one either
	            return false;
	        }
	        // push the handle
	        bounds[handle] = nextValue;
	        return true;
	    };

	    Range.prototype.trimAlignValue = function trimAlignValue(v) {
	        let nextProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	        let mergedProps = _extends({}, this.props, nextProps);
	        let valInRange = utils.ensureValueInRange(v, mergedProps);
	        let valNotConflict = this.ensureValueNotConflict(valInRange, mergedProps);
	        return utils.ensureValuePrecision(valNotConflict, mergedProps);
	    };

	    Range.prototype.ensureValueNotConflict = function ensureValueNotConflict(val, _ref) {
	        let allowCross = _ref.allowCross;

	        let state = this.state || {};
	        let handle = state.handle,
	            bounds = state.bounds;
	        /* eslint-disable eqeqeq */

	        if (!allowCross && handle != null) {
	            if (handle > 0 && val <= bounds[handle - 1]) {
	                return bounds[handle - 1];
	            }
	            if (handle < bounds.length - 1 && val >= bounds[handle + 1]) {
	                return bounds[handle + 1];
	            }
	        }
	        /* eslint-enable eqeqeq */
	        return val;
	    };

	    Range.prototype.render = function render() {
	        let _this3 = this;

	        let _state2 = this.state,
	            handle = _state2.handle,
	            bounds = _state2.bounds;
	        let _props4 = this.props,
	            prefixCls = _props4.prefixCls,
	            vertical = _props4.vertical,
	            included = _props4.included,
	            disabled = _props4.disabled,
	            _props4$ariaLabel = _props4.ariaLabel,
	            ariaLabel = _props4$ariaLabel === undefined ? [] : _props4$ariaLabel,
	            _props4$ariaValueNow = _props4.ariaValueNow,
	            ariaValueNow = _props4$ariaValueNow === undefined ? [] : _props4$ariaValueNow,
	            _props4$ariaValueText = _props4.ariaValueText,
	            ariaValueText = _props4$ariaValueText === undefined ? [] : _props4$ariaValueText,
	            _props4$ariaValueMin = _props4.ariaValueMin,
	            ariaValueMin = _props4$ariaValueMin === undefined ? [] : _props4$ariaValueMin,
	            _props4$ariaValueMax = _props4.ariaValueMax,
	            ariaValueMax = _props4$ariaValueMax === undefined ? [] : _props4$ariaValueMax,
	            handleGenerator = _props4.handle;


	        let offsets = bounds.map(function (v) {
	            return _this3.calcOffset(v);
	        });

	        let handleClassName = prefixCls + '-handle';
	        let handles = bounds.map(function (v, i) {
	            let _classNames;

	            return handleGenerator({
	                className: (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, handleClassName, true), _defineProperty(_classNames, handleClassName + '-' + (i + 1), true), _classNames)),
	                vertical: vertical,
	                offset: offsets[i],
	                value: v,
	                dragging: handle === i,
	                index: i,
	                disabled: disabled,
	                ariaLabel: ariaLabel[i] || '',
	                ariaValueNow: ariaValueNow[i] || bounds[i],
	                ariaValueText: ariaValueText[i] || '',
	                ariaValueMin: ariaValueMin,
	                ariaValueMax: ariaValueMax,
	                ref: function ref(h) {
	                    return _this3.saveHandle(i, h);
	                }
	            });
	        });

	        let tracks = bounds.slice(0, -1).map(function (_, index) {
	            let _classNames2;

	            let i = index + 1;
	            let trackClassName = (0, _classnames2.default)((_classNames2 = {}, _defineProperty(_classNames2, prefixCls + '-track', true), _defineProperty(_classNames2, prefixCls + '-track-' + i, true), _classNames2));
	            return _react2.default.createElement(_Track2.default, {
	                className: trackClassName,
	                vertical: vertical,
	                included: included,
	                offset: offsets[i - 1],
	                length: offsets[i] - offsets[i - 1],
	                key: i
	            });
	        });

	        return { tracks: tracks, handles: handles };
	    };

	    return Range;
            }(_react2.default.Component);

            Range.displayName = 'Range';
            Range.propTypes = {
	    defaultValue: _propTypes2.default.arrayOf(_propTypes2.default.number),
	    value: _propTypes2.default.arrayOf(_propTypes2.default.number),
	    count: _propTypes2.default.number,
	    pushable: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.number]),
	    allowCross: _propTypes2.default.bool,
	    disabled: _propTypes2.default.bool,
	    ariaLabel: _propTypes2.default.arrayOf(_propTypes2.default.string),
	    ariaValueNow: _propTypes2.default.arrayOf(_propTypes2.default.number),
	    ariaValueText: _propTypes2.default.arrayOf(_propTypes2.default.string),
	    ariaValueMin: _propTypes2.default.number,
	    ariaValueMax: _propTypes2.default.number
            };
            Range.defaultProps = {
	    count: 1,
	    allowCross: true,
	    pushable: false
            };
            exports.default = (0, _createSlider2.default)(Range);
            module.exports = exports['default'];

            /***/ },
        /* 25 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            Object.defineProperty(exports, '__esModule', {
	    value: true
            });

            let _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { let source = arguments[i]; for (let key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

            exports.default = createSliderWithTooltip;

            let _react = __webpack_require__(10);

            let _react2 = _interopRequireDefault(_react);

            let _rcTooltip = __webpack_require__(26);

            let _rcTooltip2 = _interopRequireDefault(_rcTooltip);

            let _Handle = __webpack_require__(22);

            let _Handle2 = _interopRequireDefault(_Handle);

            let _propTypes = __webpack_require__(3);

            let _propTypes2 = _interopRequireDefault(_propTypes);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

            function _defaults(obj, defaults) { let keys = Object.getOwnPropertyNames(defaults); for (let i = 0; i < keys.length; i++) { let key = keys[i]; let value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

            function _objectWithoutProperties(obj, keys) { let target = {}; for (let i in obj) { if (keys.indexOf(i) >= 0) {continue;} if (!Object.prototype.hasOwnProperty.call(obj, i)) {continue;} target[i] = obj[i]; } return target; }

            function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

            function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called'); } return call && (typeof call === 'object' || typeof call === 'function') ? call : self; }

            function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) {Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass);} }

            function createSliderWithTooltip(Component) {
	    let _class, _temp;

	    return _temp = _class = function (_React$Component) {
	        _inherits(ComponentWrapper, _React$Component);

	        function ComponentWrapper(props) {
	            _classCallCheck(this, ComponentWrapper);

	            let _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

	            _this.handleTooltipVisibleChange = function (index, visible) {
	                _this.setState({
	                    visibles: _extends({}, _this.state.visibles, _defineProperty({}, index, visible))
	                });
	            };

	            _this.handleWithTooltip = function (_ref) {
	                let value = _ref.value,
	                    dragging = _ref.dragging,
	                    index = _ref.index,
	                    disabled = _ref.disabled,
	                    restProps = _objectWithoutProperties(_ref, ['value', 'dragging', 'index', 'disabled']);

	                let tipFormatter = _this.props.tipFormatter;

	                return _react2.default.createElement(
	                    _rcTooltip2.default,
	                    {
	                        prefixCls: 'rc-slider-tooltip',
	                        overlay: tipFormatter(value),
	                        visible: !disabled && (_this.state.visibles[index] || dragging),
	                        placement: 'top',
	                        key: index
	                    },
	                    _react2.default.createElement(_Handle2.default, _extends({}, restProps, {
	                        onMouseEnter: function onMouseEnter() {
	                            return _this.handleTooltipVisibleChange(index, true);
	                        },
	                        onMouseLeave: function onMouseLeave() {
	                            return _this.handleTooltipVisibleChange(index, false);
	                        }
	                    }))
	                );
	            };

	            _this.state = { visibles: {} };
	            return _this;
	        }

	        ComponentWrapper.prototype.render = function render() {
	            return _react2.default.createElement(Component, _extends({}, this.props, { handle: this.handleWithTooltip }));
	        };

	        return ComponentWrapper;
	    }(_react2.default.Component), _class.propTypes = {
	        tipFormatter: _propTypes2.default.func
	    }, _class.defaultProps = {
	        tipFormatter: function tipFormatter(value) {
	            return value;
	        }
	    }, _temp;
            }
            module.exports = exports['default'];

            /***/ },
        /* 26 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            exports.__esModule = true;

            let _Tooltip = __webpack_require__(27);

            let _Tooltip2 = _interopRequireDefault(_Tooltip);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

            exports['default'] = _Tooltip2['default'];
            module.exports = exports['default'];

            /***/ },
        /* 27 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            exports.__esModule = true;

            let _extends2 = __webpack_require__(28);

            let _extends3 = _interopRequireDefault(_extends2);

            let _objectWithoutProperties2 = __webpack_require__(67);

            let _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

            let _classCallCheck2 = __webpack_require__(68);

            let _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

            let _possibleConstructorReturn2 = __webpack_require__(69);

            let _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

            let _inherits2 = __webpack_require__(103);

            let _inherits3 = _interopRequireDefault(_inherits2);

            let _react = __webpack_require__(10);

            let _react2 = _interopRequireDefault(_react);

            let _propTypes = __webpack_require__(3);

            let _propTypes2 = _interopRequireDefault(_propTypes);

            let _rcTrigger = __webpack_require__(111);

            let _rcTrigger2 = _interopRequireDefault(_rcTrigger);

            let _placements = __webpack_require__(148);

            let _Content = __webpack_require__(149);

            let _Content2 = _interopRequireDefault(_Content);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

            let Tooltip = function (_Component) {
	  (0, _inherits3['default'])(Tooltip, _Component);

	  function Tooltip() {
	    let _temp, _this, _ret;

	    (0, _classCallCheck3['default'])(this, Tooltip);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.getPopupElement = function () {
	      let _this$props = _this.props,
	          arrowContent = _this$props.arrowContent,
	          overlay = _this$props.overlay,
	          prefixCls = _this$props.prefixCls,
	          id = _this$props.id;

	      return [_react2['default'].createElement(
	        'div',
	        { className: prefixCls + '-arrow', key: 'arrow' },
	        arrowContent
	      ), _react2['default'].createElement(_Content2['default'], {
	        key: 'content',
	        trigger: _this.trigger,
	        prefixCls: prefixCls,
	        id: id,
	        overlay: overlay
	      })];
	    }, _this.saveTrigger = function (node) {
	      _this.trigger = node;
	    }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
	  }

	  Tooltip.prototype.getPopupDomNode = function getPopupDomNode() {
	    return this.trigger.getPopupDomNode();
	  };

	  Tooltip.prototype.render = function render() {
	    let _props = this.props,
	        overlayClassName = _props.overlayClassName,
	        trigger = _props.trigger,
	        mouseEnterDelay = _props.mouseEnterDelay,
	        mouseLeaveDelay = _props.mouseLeaveDelay,
	        overlayStyle = _props.overlayStyle,
	        prefixCls = _props.prefixCls,
	        children = _props.children,
	        onVisibleChange = _props.onVisibleChange,
	        afterVisibleChange = _props.afterVisibleChange,
	        transitionName = _props.transitionName,
	        animation = _props.animation,
	        placement = _props.placement,
	        align = _props.align,
	        destroyTooltipOnHide = _props.destroyTooltipOnHide,
	        defaultVisible = _props.defaultVisible,
	        getTooltipContainer = _props.getTooltipContainer,
	        restProps = (0, _objectWithoutProperties3['default'])(_props, ['overlayClassName', 'trigger', 'mouseEnterDelay', 'mouseLeaveDelay', 'overlayStyle', 'prefixCls', 'children', 'onVisibleChange', 'afterVisibleChange', 'transitionName', 'animation', 'placement', 'align', 'destroyTooltipOnHide', 'defaultVisible', 'getTooltipContainer']);

	    let extraProps = (0, _extends3['default'])({}, restProps);
	    if ('visible' in this.props) {
	      extraProps.popupVisible = this.props.visible;
	    }
	    return _react2['default'].createElement(
	      _rcTrigger2['default'],
	      (0, _extends3['default'])({
	        popupClassName: overlayClassName,
	        ref: this.saveTrigger,
	        prefixCls: prefixCls,
	        popup: this.getPopupElement,
	        action: trigger,
	        builtinPlacements: _placements.placements,
	        popupPlacement: placement,
	        popupAlign: align,
	        getPopupContainer: getTooltipContainer,
	        onPopupVisibleChange: onVisibleChange,
	        afterPopupVisibleChange: afterVisibleChange,
	        popupTransitionName: transitionName,
	        popupAnimation: animation,
	        defaultPopupVisible: defaultVisible,
	        destroyPopupOnHide: destroyTooltipOnHide,
	        mouseLeaveDelay: mouseLeaveDelay,
	        popupStyle: overlayStyle,
	        mouseEnterDelay: mouseEnterDelay
	      }, extraProps),
	      children
	    );
	  };

	  return Tooltip;
            }(_react.Component);

            Tooltip.propTypes = {
	  trigger: _propTypes2['default'].any,
	  children: _propTypes2['default'].any,
	  defaultVisible: _propTypes2['default'].bool,
	  visible: _propTypes2['default'].bool,
	  placement: _propTypes2['default'].string,
	  transitionName: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].object]),
	  animation: _propTypes2['default'].any,
	  onVisibleChange: _propTypes2['default'].func,
	  afterVisibleChange: _propTypes2['default'].func,
	  overlay: _propTypes2['default'].oneOfType([_propTypes2['default'].node, _propTypes2['default'].func]).isRequired,
	  overlayStyle: _propTypes2['default'].object,
	  overlayClassName: _propTypes2['default'].string,
	  prefixCls: _propTypes2['default'].string,
	  mouseEnterDelay: _propTypes2['default'].number,
	  mouseLeaveDelay: _propTypes2['default'].number,
	  getTooltipContainer: _propTypes2['default'].func,
	  destroyTooltipOnHide: _propTypes2['default'].bool,
	  align: _propTypes2['default'].object,
	  arrowContent: _propTypes2['default'].any,
	  id: _propTypes2['default'].string
            };
            Tooltip.defaultProps = {
	  prefixCls: 'rc-tooltip',
	  mouseEnterDelay: 0,
	  destroyTooltipOnHide: false,
	  mouseLeaveDelay: 0.1,
	  align: {},
	  placement: 'right',
	  trigger: ['hover'],
	  arrowContent: null
            };
            exports['default'] = Tooltip;
            module.exports = exports['default'];

            /***/ },
        /* 28 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            exports.__esModule = true;

            let _assign = __webpack_require__(29);

            let _assign2 = _interopRequireDefault(_assign);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

            exports.default = _assign2.default || function (target) {
	  for (let i = 1; i < arguments.length; i++) {
	    let source = arguments[i];

	    for (let key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
            };

            /***/ },
        /* 29 */
        /***/ function(module, exports, __webpack_require__) {

            module.exports = { 'default': __webpack_require__(30), __esModule: true };

            /***/ },
        /* 30 */
        /***/ function(module, exports, __webpack_require__) {

            __webpack_require__(31);
            module.exports = __webpack_require__(34).Object.assign;


            /***/ },
        /* 31 */
        /***/ function(module, exports, __webpack_require__) {

            // 19.1.3.1 Object.assign(target, source)
            let $export = __webpack_require__(32);

            $export($export.S + $export.F, 'Object', { assign: __webpack_require__(48) });


            /***/ },
        /* 32 */
        /***/ function(module, exports, __webpack_require__) {

            let global = __webpack_require__(33);
            let core = __webpack_require__(34);
            let ctx = __webpack_require__(35);
            let hide = __webpack_require__(37);
            let has = __webpack_require__(47);
            let PROTOTYPE = 'prototype';

            var $export = function (type, name, source) {
	  let IS_FORCED = type & $export.F;
	  let IS_GLOBAL = type & $export.G;
	  let IS_STATIC = type & $export.S;
	  let IS_PROTO = type & $export.P;
	  let IS_BIND = type & $export.B;
	  let IS_WRAP = type & $export.W;
	  let exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  let expProto = exports[PROTOTYPE];
	  let target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
	  let key, own, out;
	  if (IS_GLOBAL) {source = name;}
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && has(exports, key)) {continue;}
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      let F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) {hide(expProto, key, out);}
	    }
	  }
            };
            // type bitmap
            $export.F = 1;   // forced
            $export.G = 2;   // global
            $export.S = 4;   // static
            $export.P = 8;   // proto
            $export.B = 16;  // bind
            $export.W = 32;  // wrap
            $export.U = 64;  // safe
            $export.R = 128; // real proto method for `library`
            module.exports = $export;


            /***/ },
        /* 33 */
        /***/ function(module, exports) {

            // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
            let global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
            if (typeof __g == 'number') {__g = global;} // eslint-disable-line no-undef


            /***/ },
        /* 34 */
        /***/ function(module, exports) {

            let core = module.exports = { version: '2.6.0' };
            if (typeof __e == 'number') {__e = core;} // eslint-disable-line no-undef


            /***/ },
        /* 35 */
        /***/ function(module, exports, __webpack_require__) {

            // optional / simple context binding
            let aFunction = __webpack_require__(36);
            module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) {return fn;}
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
            };


            /***/ },
        /* 36 */
        /***/ function(module, exports) {

            module.exports = function (it) {
	  if (typeof it != 'function') {throw TypeError(it + ' is not a function!');}
	  return it;
            };


            /***/ },
        /* 37 */
        /***/ function(module, exports, __webpack_require__) {

            let dP = __webpack_require__(38);
            let createDesc = __webpack_require__(46);
            module.exports = __webpack_require__(42) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
            } : function (object, key, value) {
	  object[key] = value;
	  return object;
            };


            /***/ },
        /* 38 */
        /***/ function(module, exports, __webpack_require__) {

            let anObject = __webpack_require__(39);
            let IE8_DOM_DEFINE = __webpack_require__(41);
            let toPrimitive = __webpack_require__(45);
            let dP = Object.defineProperty;

            exports.f = __webpack_require__(42) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) {try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }}
	  if ('get' in Attributes || 'set' in Attributes) {throw TypeError('Accessors not supported!');}
	  if ('value' in Attributes) {O[P] = Attributes.value;}
	  return O;
            };


            /***/ },
        /* 39 */
        /***/ function(module, exports, __webpack_require__) {

            let isObject = __webpack_require__(40);
            module.exports = function (it) {
	  if (!isObject(it)) {throw TypeError(it + ' is not an object!');}
	  return it;
            };


            /***/ },
        /* 40 */
        /***/ function(module, exports) {

            module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
            };


            /***/ },
        /* 41 */
        /***/ function(module, exports, __webpack_require__) {

            module.exports = !__webpack_require__(42) && !__webpack_require__(43)(function () {
	  return Object.defineProperty(__webpack_require__(44)('div'), 'a', { get: function () { return 7; } }).a != 7;
            });


            /***/ },
        /* 42 */
        /***/ function(module, exports, __webpack_require__) {

            // Thank's IE8 for his funny defineProperty
            module.exports = !__webpack_require__(43)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
            });


            /***/ },
        /* 43 */
        /***/ function(module, exports) {

            module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
            };


            /***/ },
        /* 44 */
        /***/ function(module, exports, __webpack_require__) {

            let isObject = __webpack_require__(40);
            let document = __webpack_require__(33).document;
            // typeof document.createElement is 'object' in old IE
            let is = isObject(document) && isObject(document.createElement);
            module.exports = function (it) {
	  return is ? document.createElement(it) : {};
            };


            /***/ },
        /* 45 */
        /***/ function(module, exports, __webpack_require__) {

            // 7.1.1 ToPrimitive(input [, PreferredType])
            let isObject = __webpack_require__(40);
            // instead of the ES6 spec version, we didn't implement @@toPrimitive case
            // and the second argument - flag - preferred type is a string
            module.exports = function (it, S) {
	  if (!isObject(it)) {return it;}
	  let fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) {return val;}
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) {return val;}
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) {return val;}
	  throw TypeError('Can\'t convert object to primitive value');
            };


            /***/ },
        /* 46 */
        /***/ function(module, exports) {

            module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
            };


            /***/ },
        /* 47 */
        /***/ function(module, exports) {

            let hasOwnProperty = {}.hasOwnProperty;
            module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
            };


            /***/ },
        /* 48 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';
            // 19.1.2.1 Object.assign(target, source, ...)
            let getKeys = __webpack_require__(49);
            let gOPS = __webpack_require__(64);
            let pIE = __webpack_require__(65);
            let toObject = __webpack_require__(66);
            let IObject = __webpack_require__(52);
            let $assign = Object.assign;

            // should work with symbols and should have deterministic property order (V8 bug)
            module.exports = !$assign || __webpack_require__(43)(function () {
	  let A = {};
	  let B = {};
	  // eslint-disable-next-line no-undef
	  let S = Symbol();
	  let K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) { B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
            }) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  let T = toObject(target);
	  let aLen = arguments.length;
	  let index = 1;
	  let getSymbols = gOPS.f;
	  let isEnum = pIE.f;
	  while (aLen > index) {
	    let S = IObject(arguments[index++]);
	    let keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
	    let length = keys.length;
	    let j = 0;
	    var key;
	    while (length > j) {if (isEnum.call(S, key = keys[j++])) {T[key] = S[key];}}
	  } return T;
                } : $assign;


            /***/ },
        /* 49 */
        /***/ function(module, exports, __webpack_require__) {

            // 19.1.2.14 / 15.2.3.14 Object.keys(O)
            let $keys = __webpack_require__(50);
            let enumBugKeys = __webpack_require__(63);

            module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
            };


            /***/ },
        /* 50 */
        /***/ function(module, exports, __webpack_require__) {

            let has = __webpack_require__(47);
            let toIObject = __webpack_require__(51);
            let arrayIndexOf = __webpack_require__(55)(false);
            let IE_PROTO = __webpack_require__(59)('IE_PROTO');

            module.exports = function (object, names) {
	  let O = toIObject(object);
	  let i = 0;
	  let result = [];
	  let key;
	  for (key in O) {if (key != IE_PROTO) {has(O, key) && result.push(key);}}
	  // Don't enum bug & hidden keys
	  while (names.length > i) {if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }}
	  return result;
            };


            /***/ },
        /* 51 */
        /***/ function(module, exports, __webpack_require__) {

            // to indexed object, toObject with fallback for non-array-like ES3 strings
            let IObject = __webpack_require__(52);
            let defined = __webpack_require__(54);
            module.exports = function (it) {
	  return IObject(defined(it));
            };


            /***/ },
        /* 52 */
        /***/ function(module, exports, __webpack_require__) {

            // fallback for non-array-like ES3 and non-enumerable old V8 strings
            let cof = __webpack_require__(53);
            // eslint-disable-next-line no-prototype-builtins
            module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
            };


            /***/ },
        /* 53 */
        /***/ function(module, exports) {

            let toString = {}.toString;

            module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
            };


            /***/ },
        /* 54 */
        /***/ function(module, exports) {

            // 7.2.1 RequireObjectCoercible(argument)
            module.exports = function (it) {
	  if (it == undefined) {throw TypeError('Can\'t call method on  ' + it);}
	  return it;
            };


            /***/ },
        /* 55 */
        /***/ function(module, exports, __webpack_require__) {

            // false -> Array#indexOf
            // true  -> Array#includes
            let toIObject = __webpack_require__(51);
            let toLength = __webpack_require__(56);
            let toAbsoluteIndex = __webpack_require__(58);
            module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    let O = toIObject($this);
	    let length = toLength(O.length);
	    let index = toAbsoluteIndex(fromIndex, length);
	    let value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) {while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) {return true;}
	    // Array#indexOf ignores holes, Array#includes - not
	    }} else {for (;length > index; index++) {if (IS_INCLUDES || index in O) {
	      if (O[index] === el) {return IS_INCLUDES || index || 0;}
	    }}} return !IS_INCLUDES && -1;
	  };
            };


            /***/ },
        /* 56 */
        /***/ function(module, exports, __webpack_require__) {

            // 7.1.15 ToLength
            let toInteger = __webpack_require__(57);
            let min = Math.min;
            module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
            };


            /***/ },
        /* 57 */
        /***/ function(module, exports) {

            // 7.1.4 ToInteger
            let ceil = Math.ceil;
            let floor = Math.floor;
            module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
            };


            /***/ },
        /* 58 */
        /***/ function(module, exports, __webpack_require__) {

            let toInteger = __webpack_require__(57);
            let max = Math.max;
            let min = Math.min;
            module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
            };


            /***/ },
        /* 59 */
        /***/ function(module, exports, __webpack_require__) {

            let shared = __webpack_require__(60)('keys');
            let uid = __webpack_require__(62);
            module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
            };


            /***/ },
        /* 60 */
        /***/ function(module, exports, __webpack_require__) {

            let core = __webpack_require__(34);
            let global = __webpack_require__(33);
            let SHARED = '__core-js_shared__';
            let store = global[SHARED] || (global[SHARED] = {});

            (module.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
            })('versions', []).push({
	  version: core.version,
	  mode: __webpack_require__(61) ? 'pure' : 'global',
	  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
            });


            /***/ },
        /* 61 */
        /***/ function(module, exports) {

            module.exports = true;


            /***/ },
        /* 62 */
        /***/ function(module, exports) {

            let id = 0;
            let px = Math.random();
            module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
            };


            /***/ },
        /* 63 */
        /***/ function(module, exports) {

            // IE 8- don't enum bug keys
            module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
            ).split(',');


            /***/ },
        /* 64 */
        /***/ function(module, exports) {

            exports.f = Object.getOwnPropertySymbols;


            /***/ },
        /* 65 */
        /***/ function(module, exports) {

            exports.f = {}.propertyIsEnumerable;


            /***/ },
        /* 66 */
        /***/ function(module, exports, __webpack_require__) {

            // 7.1.13 ToObject(argument)
            let defined = __webpack_require__(54);
            module.exports = function (it) {
	  return Object(defined(it));
            };


            /***/ },
        /* 67 */
        /***/ function(module, exports) {

            'use strict';

            exports.__esModule = true;

            exports.default = function (obj, keys) {
	  let target = {};

	  for (let i in obj) {
	    if (keys.indexOf(i) >= 0) {continue;}
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) {continue;}
	    target[i] = obj[i];
	  }

	  return target;
            };

            /***/ },
        /* 68 */
        /***/ function(module, exports) {

            'use strict';

            exports.__esModule = true;

            exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
            };

            /***/ },
        /* 69 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            exports.__esModule = true;

            let _typeof2 = __webpack_require__(70);

            let _typeof3 = _interopRequireDefault(_typeof2);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

            exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
	  }

	  return call && ((typeof call === 'undefined' ? 'undefined' : (0, _typeof3.default)(call)) === 'object' || typeof call === 'function') ? call : self;
            };

            /***/ },
        /* 70 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            exports.__esModule = true;

            let _iterator = __webpack_require__(71);

            let _iterator2 = _interopRequireDefault(_iterator);

            let _symbol = __webpack_require__(90);

            let _symbol2 = _interopRequireDefault(_symbol);

            let _typeof = typeof _symbol2.default === 'function' && typeof _iterator2.default === 'symbol' ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === 'function' && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? 'symbol' : typeof obj; };

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

            exports.default = typeof _symbol2.default === 'function' && _typeof(_iterator2.default) === 'symbol' ? function (obj) {
	  return typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
            } : function (obj) {
	  return obj && typeof _symbol2.default === 'function' && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? 'symbol' : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
            };

            /***/ },
        /* 71 */
        /***/ function(module, exports, __webpack_require__) {

            module.exports = { 'default': __webpack_require__(72), __esModule: true };

            /***/ },
        /* 72 */
        /***/ function(module, exports, __webpack_require__) {

            __webpack_require__(73);
            __webpack_require__(85);
            module.exports = __webpack_require__(89).f('iterator');


            /***/ },
        /* 73 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';
            let $at = __webpack_require__(74)(true);

            // 21.1.3.27 String.prototype[@@iterator]()
            __webpack_require__(75)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
                // 21.1.5.2.1 %StringIteratorPrototype%.next()
            }, function () {
	  let O = this._t;
	  let index = this._i;
	  let point;
	  if (index >= O.length) {return { value: undefined, done: true };}
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
            });


            /***/ },
        /* 74 */
        /***/ function(module, exports, __webpack_require__) {

            let toInteger = __webpack_require__(57);
            let defined = __webpack_require__(54);
            // true  -> String#at
            // false -> String#codePointAt
            module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    let s = String(defined(that));
	    let i = toInteger(pos);
	    let l = s.length;
	    let a, b;
	    if (i < 0 || i >= l) {return TO_STRING ? '' : undefined;}
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
            };


            /***/ },
        /* 75 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';
            let LIBRARY = __webpack_require__(61);
            let $export = __webpack_require__(32);
            let redefine = __webpack_require__(76);
            let hide = __webpack_require__(37);
            let Iterators = __webpack_require__(77);
            let $iterCreate = __webpack_require__(78);
            let setToStringTag = __webpack_require__(82);
            let getPrototypeOf = __webpack_require__(84);
            let ITERATOR = __webpack_require__(83)('iterator');
            let BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
            let FF_ITERATOR = '@@iterator';
            let KEYS = 'keys';
            let VALUES = 'values';

            let returnThis = function () { return this; };

            module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  let getMethod = function (kind) {
	    if (!BUGGY && kind in proto) {return proto[kind];}
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  let TAG = NAME + ' Iterator';
	  let DEF_VALUES = DEFAULT == VALUES;
	  let VALUES_BUG = false;
	  var proto = Base.prototype;
	  let $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  let $default = $native || getMethod(DEFAULT);
	  let $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  let $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  let methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') {hide(IteratorPrototype, ITERATOR, returnThis);}
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) {for (key in methods) {
	      if (!(key in proto)) {redefine(proto, key, methods[key]);}
	    }} else {$export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);}
	  }
	  return methods;
            };


            /***/ },
        /* 76 */
        /***/ function(module, exports, __webpack_require__) {

            module.exports = __webpack_require__(37);


            /***/ },
        /* 77 */
        /***/ function(module, exports) {

            module.exports = {};


            /***/ },
        /* 78 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';
            let create = __webpack_require__(79);
            let descriptor = __webpack_require__(46);
            let setToStringTag = __webpack_require__(82);
            let IteratorPrototype = {};

            // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
            __webpack_require__(37)(IteratorPrototype, __webpack_require__(83)('iterator'), function () { return this; });

            module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
            };


            /***/ },
        /* 79 */
        /***/ function(module, exports, __webpack_require__) {

            // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
            let anObject = __webpack_require__(39);
            let dPs = __webpack_require__(80);
            let enumBugKeys = __webpack_require__(63);
            let IE_PROTO = __webpack_require__(59)('IE_PROTO');
            let Empty = function () { /* empty */ };
            let PROTOTYPE = 'prototype';

            // Create object with fake `null` prototype: use iframe Object with cleared prototype
            var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  let iframe = __webpack_require__(44)('iframe');
	  let i = enumBugKeys.length;
	  let lt = '<';
	  let gt = '>';
	  let iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(81).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) {delete createDict[PROTOTYPE][enumBugKeys[i]];}
	  return createDict();
            };

            module.exports = Object.create || function create(O, Properties) {
	  let result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else {result = createDict();}
	  return Properties === undefined ? result : dPs(result, Properties);
            };


            /***/ },
        /* 80 */
        /***/ function(module, exports, __webpack_require__) {

            let dP = __webpack_require__(38);
            let anObject = __webpack_require__(39);
            let getKeys = __webpack_require__(49);

            module.exports = __webpack_require__(42) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  let keys = getKeys(Properties);
	  let length = keys.length;
	  let i = 0;
	  let P;
	  while (length > i) {dP.f(O, P = keys[i++], Properties[P]);}
	  return O;
            };


            /***/ },
        /* 81 */
        /***/ function(module, exports, __webpack_require__) {

            let document = __webpack_require__(33).document;
            module.exports = document && document.documentElement;


            /***/ },
        /* 82 */
        /***/ function(module, exports, __webpack_require__) {

            let def = __webpack_require__(38).f;
            let has = __webpack_require__(47);
            let TAG = __webpack_require__(83)('toStringTag');

            module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) {def(it, TAG, { configurable: true, value: tag });}
            };


            /***/ },
        /* 83 */
        /***/ function(module, exports, __webpack_require__) {

            let store = __webpack_require__(60)('wks');
            let uid = __webpack_require__(62);
            let Symbol = __webpack_require__(33).Symbol;
            let USE_SYMBOL = typeof Symbol == 'function';

            let $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
            };

            $exports.store = store;


            /***/ },
        /* 84 */
        /***/ function(module, exports, __webpack_require__) {

            // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
            let has = __webpack_require__(47);
            let toObject = __webpack_require__(66);
            let IE_PROTO = __webpack_require__(59)('IE_PROTO');
            let ObjectProto = Object.prototype;

            module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) {return O[IE_PROTO];}
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
            };


            /***/ },
        /* 85 */
        /***/ function(module, exports, __webpack_require__) {

            __webpack_require__(86);
            let global = __webpack_require__(33);
            let hide = __webpack_require__(37);
            let Iterators = __webpack_require__(77);
            let TO_STRING_TAG = __webpack_require__(83)('toStringTag');

            let DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
	  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
	  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
	  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
	  'TextTrackList,TouchList').split(',');

            for (let i = 0; i < DOMIterables.length; i++) {
	  let NAME = DOMIterables[i];
	  let Collection = global[NAME];
	  let proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) {hide(proto, TO_STRING_TAG, NAME);}
	  Iterators[NAME] = Iterators.Array;
            }


            /***/ },
        /* 86 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';
            let addToUnscopables = __webpack_require__(87);
            let step = __webpack_require__(88);
            let Iterators = __webpack_require__(77);
            let toIObject = __webpack_require__(51);

            // 22.1.3.4 Array.prototype.entries()
            // 22.1.3.13 Array.prototype.keys()
            // 22.1.3.29 Array.prototype.values()
            // 22.1.3.30 Array.prototype[@@iterator]()
            module.exports = __webpack_require__(75)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
                // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
            }, function () {
	  let O = this._t;
	  let kind = this._k;
	  let index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') {return step(0, index);}
	  if (kind == 'values') {return step(0, O[index]);}
	  return step(0, [index, O[index]]);
            }, 'values');

            // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
            Iterators.Arguments = Iterators.Array;

            addToUnscopables('keys');
            addToUnscopables('values');
            addToUnscopables('entries');


            /***/ },
        /* 87 */
        /***/ function(module, exports) {

            module.exports = function () { /* empty */ };


            /***/ },
        /* 88 */
        /***/ function(module, exports) {

            module.exports = function (done, value) {
	  return { value: value, done: !!done };
            };


            /***/ },
        /* 89 */
        /***/ function(module, exports, __webpack_require__) {

            exports.f = __webpack_require__(83);


            /***/ },
        /* 90 */
        /***/ function(module, exports, __webpack_require__) {

            module.exports = { 'default': __webpack_require__(91), __esModule: true };

            /***/ },
        /* 91 */
        /***/ function(module, exports, __webpack_require__) {

            __webpack_require__(92);
            __webpack_require__(100);
            __webpack_require__(101);
            __webpack_require__(102);
            module.exports = __webpack_require__(34).Symbol;


            /***/ },
        /* 92 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';
            // ECMAScript 6 symbols shim
            let global = __webpack_require__(33);
            let has = __webpack_require__(47);
            let DESCRIPTORS = __webpack_require__(42);
            let $export = __webpack_require__(32);
            let redefine = __webpack_require__(76);
            let META = __webpack_require__(93).KEY;
            let $fails = __webpack_require__(43);
            let shared = __webpack_require__(60);
            let setToStringTag = __webpack_require__(82);
            let uid = __webpack_require__(62);
            let wks = __webpack_require__(83);
            let wksExt = __webpack_require__(89);
            let wksDefine = __webpack_require__(94);
            let enumKeys = __webpack_require__(95);
            let isArray = __webpack_require__(96);
            let anObject = __webpack_require__(39);
            let isObject = __webpack_require__(40);
            let toIObject = __webpack_require__(51);
            let toPrimitive = __webpack_require__(45);
            let createDesc = __webpack_require__(46);
            let _create = __webpack_require__(79);
            let gOPNExt = __webpack_require__(97);
            let $GOPD = __webpack_require__(99);
            let $DP = __webpack_require__(38);
            let $keys = __webpack_require__(49);
            let gOPD = $GOPD.f;
            let dP = $DP.f;
            let gOPN = gOPNExt.f;
            let $Symbol = global.Symbol;
            let $JSON = global.JSON;
            let _stringify = $JSON && $JSON.stringify;
            let PROTOTYPE = 'prototype';
            let HIDDEN = wks('_hidden');
            let TO_PRIMITIVE = wks('toPrimitive');
            let isEnum = {}.propertyIsEnumerable;
            let SymbolRegistry = shared('symbol-registry');
            let AllSymbols = shared('symbols');
            let OPSymbols = shared('op-symbols');
            let ObjectProto = Object[PROTOTYPE];
            let USE_NATIVE = typeof $Symbol == 'function';
            let QObject = global.QObject;
            // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
            let setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

            // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
            let setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function () { return dP(this, 'a', { value: 7 }).a; }
	  })).a != 7;
            }) ? function (it, key, D) {
	  let protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) {delete ObjectProto[key];}
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) {dP(ObjectProto, key, protoDesc);}
                } : dP;

            let wrap = function (tag) {
	  let sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
            };

            let isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
            } : function (it) {
	  return it instanceof $Symbol;
            };

            var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) {$defineProperty(OPSymbols, key, D);}
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) {dP(it, HIDDEN, createDesc(1, {}));}
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) {it[HIDDEN][key] = false;}
	      D = _create(D, { enumerable: createDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
            };
            let $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  let keys = enumKeys(P = toIObject(P));
	  let i = 0;
	  let l = keys.length;
	  let key;
	  while (l > i) {$defineProperty(it, key = keys[i++], P[key]);}
	  return it;
            };
            let $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
            };
            let $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  let E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) {return false;}
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
            };
            let $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) {return;}
	  let D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {D.enumerable = true;}
	  return D;
            };
            let $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  let names = gOPN(toIObject(it));
	  let result = [];
	  let i = 0;
	  let key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) {result.push(key);}
	  } return result;
            };
            let $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  let IS_OP = it === ObjectProto;
	  let names = gOPN(IS_OP ? OPSymbols : toIObject(it));
	  let result = [];
	  let i = 0;
	  let key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) {result.push(AllSymbols[key]);}
	  } return result;
            };

            // 19.4.1.1 Symbol([description])
            if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) {throw TypeError('Symbol is not a constructor!');}
	    let tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) {$set.call(OPSymbols, value);}
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) {this[HIDDEN][tag] = false;}
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) {setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });}
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(98).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(65).f = $propertyIsEnumerable;
	  __webpack_require__(64).f = $getOwnPropertySymbols;

	  if (DESCRIPTORS && !__webpack_require__(61)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
            }

            $export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

            for (let es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
                ).split(','), j = 0; es6Symbols.length > j;){wks(es6Symbols[j++]);}

            for (let wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) {wksDefine(wellKnownSymbols[k++]);}

            $export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) {throw TypeError(sym + ' is not a symbol!');}
	    for (let key in SymbolRegistry) {if (SymbolRegistry[key] === sym) {return key;}}
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
            });

            $export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
            });

            // 24.3.2 JSON.stringify(value [, replacer [, space]])
            $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  let S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
            })), 'JSON', {
	  stringify: function stringify(it) {
	    let args = [it];
	    let i = 1;
	    let replacer, $replacer;
	    while (arguments.length > i) {args.push(arguments[i++]);}
	    $replacer = replacer = args[1];
	    if (!isObject(replacer) && it === undefined || isSymbol(it)) {return;} // IE8 returns string on undefined
	    if (!isArray(replacer)) {replacer = function (key, value) {
	      if (typeof $replacer == 'function') {value = $replacer.call(this, key, value);}
	      if (!isSymbol(value)) {return value;}
	    };}
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
            });

            // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
            $Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(37)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
            // 19.4.3.5 Symbol.prototype[@@toStringTag]
            setToStringTag($Symbol, 'Symbol');
            // 20.2.1.9 Math[@@toStringTag]
            setToStringTag(Math, 'Math', true);
            // 24.3.3 JSON[@@toStringTag]
            setToStringTag(global.JSON, 'JSON', true);


            /***/ },
        /* 93 */
        /***/ function(module, exports, __webpack_require__) {

            let META = __webpack_require__(62)('meta');
            let isObject = __webpack_require__(40);
            let has = __webpack_require__(47);
            let setDesc = __webpack_require__(38).f;
            let id = 0;
            let isExtensible = Object.isExtensible || function () {
	  return true;
            };
            let FREEZE = !__webpack_require__(43)(function () {
	  return isExtensible(Object.preventExtensions({}));
            });
            let setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
            };
            let fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) {return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;}
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) {return 'F';}
	    // not necessary to add metadata
	    if (!create) {return 'E';}
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
            };
            let getWeak = function (it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) {return true;}
	    // not necessary to add metadata
	    if (!create) {return false;}
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
            };
            // add metadata on freeze-family methods calling
            let onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) {setMeta(it);}
	  return it;
            };
            var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
            };


            /***/ },
        /* 94 */
        /***/ function(module, exports, __webpack_require__) {

            let global = __webpack_require__(33);
            let core = __webpack_require__(34);
            let LIBRARY = __webpack_require__(61);
            let wksExt = __webpack_require__(89);
            let defineProperty = __webpack_require__(38).f;
            module.exports = function (name) {
	  let $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) {defineProperty($Symbol, name, { value: wksExt.f(name) });}
            };


            /***/ },
        /* 95 */
        /***/ function(module, exports, __webpack_require__) {

            // all enumerable object keys, includes symbols
            let getKeys = __webpack_require__(49);
            let gOPS = __webpack_require__(64);
            let pIE = __webpack_require__(65);
            module.exports = function (it) {
	  let result = getKeys(it);
	  let getSymbols = gOPS.f;
	  if (getSymbols) {
	    let symbols = getSymbols(it);
	    let isEnum = pIE.f;
	    let i = 0;
	    let key;
	    while (symbols.length > i) {if (isEnum.call(it, key = symbols[i++])) {result.push(key);}}
	  } return result;
            };


            /***/ },
        /* 96 */
        /***/ function(module, exports, __webpack_require__) {

            // 7.2.2 IsArray(argument)
            let cof = __webpack_require__(53);
            module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
            };


            /***/ },
        /* 97 */
        /***/ function(module, exports, __webpack_require__) {

            // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
            let toIObject = __webpack_require__(51);
            let gOPN = __webpack_require__(98).f;
            let toString = {}.toString;

            let windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

            let getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
            };

            module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
            };


            /***/ },
        /* 98 */
        /***/ function(module, exports, __webpack_require__) {

            // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
            let $keys = __webpack_require__(50);
            let hiddenKeys = __webpack_require__(63).concat('length', 'prototype');

            exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
            };


            /***/ },
        /* 99 */
        /***/ function(module, exports, __webpack_require__) {

            let pIE = __webpack_require__(65);
            let createDesc = __webpack_require__(46);
            let toIObject = __webpack_require__(51);
            let toPrimitive = __webpack_require__(45);
            let has = __webpack_require__(47);
            let IE8_DOM_DEFINE = __webpack_require__(41);
            let gOPD = Object.getOwnPropertyDescriptor;

            exports.f = __webpack_require__(42) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) {try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }}
	  if (has(O, P)) {return createDesc(!pIE.f.call(O, P), O[P]);}
            };


            /***/ },
        /* 100 */
        /***/ function(module, exports) {



            /***/ },
        /* 101 */
        /***/ function(module, exports, __webpack_require__) {

            __webpack_require__(94)('asyncIterator');


            /***/ },
        /* 102 */
        /***/ function(module, exports, __webpack_require__) {

            __webpack_require__(94)('observable');


            /***/ },
        /* 103 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            exports.__esModule = true;

            let _setPrototypeOf = __webpack_require__(104);

            let _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

            let _create = __webpack_require__(108);

            let _create2 = _interopRequireDefault(_create);

            let _typeof2 = __webpack_require__(70);

            let _typeof3 = _interopRequireDefault(_typeof2);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

            exports.default = function (subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) {_setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;}
            };

            /***/ },
        /* 104 */
        /***/ function(module, exports, __webpack_require__) {

            module.exports = { 'default': __webpack_require__(105), __esModule: true };

            /***/ },
        /* 105 */
        /***/ function(module, exports, __webpack_require__) {

            __webpack_require__(106);
            module.exports = __webpack_require__(34).Object.setPrototypeOf;


            /***/ },
        /* 106 */
        /***/ function(module, exports, __webpack_require__) {

            // 19.1.3.19 Object.setPrototypeOf(O, proto)
            let $export = __webpack_require__(32);
            $export($export.S, 'Object', { setPrototypeOf: __webpack_require__(107).set });


            /***/ },
        /* 107 */
        /***/ function(module, exports, __webpack_require__) {

            // Works with __proto__ only. Old v8 can't work with null proto objects.
            /* eslint-disable no-proto */
            let isObject = __webpack_require__(40);
            let anObject = __webpack_require__(39);
            let check = function (O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) {throw TypeError(proto + ': can\'t set as prototype!');}
            };
            module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = __webpack_require__(35)(Function.call, __webpack_require__(99).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) { buggy = true; }
	      return function setPrototypeOf(O, proto) {
	        check(O, proto);
	        if (buggy) {O.__proto__ = proto;}
	        else {set(O, proto);}
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
            };


            /***/ },
        /* 108 */
        /***/ function(module, exports, __webpack_require__) {

            module.exports = { 'default': __webpack_require__(109), __esModule: true };

            /***/ },
        /* 109 */
        /***/ function(module, exports, __webpack_require__) {

            __webpack_require__(110);
            let $Object = __webpack_require__(34).Object;
            module.exports = function create(P, D) {
	  return $Object.create(P, D);
            };


            /***/ },
        /* 110 */
        /***/ function(module, exports, __webpack_require__) {

            let $export = __webpack_require__(32);
            // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
            $export($export.S, 'Object', { create: __webpack_require__(79) });


            /***/ },
        /* 111 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            exports.__esModule = true;

            let _extends2 = __webpack_require__(28);

            let _extends3 = _interopRequireDefault(_extends2);

            let _classCallCheck2 = __webpack_require__(68);

            let _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

            let _possibleConstructorReturn2 = __webpack_require__(69);

            let _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

            let _inherits2 = __webpack_require__(103);

            let _inherits3 = _interopRequireDefault(_inherits2);

            let _react = __webpack_require__(10);

            let _react2 = _interopRequireDefault(_react);

            let _propTypes = __webpack_require__(3);

            let _propTypes2 = _interopRequireDefault(_propTypes);

            let _reactDom = __webpack_require__(17);

            let _contains = __webpack_require__(112);

            let _contains2 = _interopRequireDefault(_contains);

            let _addEventListener = __webpack_require__(13);

            let _addEventListener2 = _interopRequireDefault(_addEventListener);

            let _ContainerRender = __webpack_require__(113);

            let _ContainerRender2 = _interopRequireDefault(_ContainerRender);

            let _Portal = __webpack_require__(118);

            let _Portal2 = _interopRequireDefault(_Portal);

            let _classnames = __webpack_require__(18);

            let _classnames2 = _interopRequireDefault(_classnames);

            let _utils = __webpack_require__(119);

            let _Popup = __webpack_require__(120);

            let _Popup2 = _interopRequireDefault(_Popup);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

            function noop() {}

            function returnEmptyString() {
	  return '';
            }

            function returnDocument() {
	  return window.document;
            }

            let ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur', 'onContextMenu'];

            let IS_REACT_16 = !!_reactDom.createPortal;

            let contextTypes = {
	  rcTrigger: _propTypes2['default'].shape({
	    onPopupMouseDown: _propTypes2['default'].func
	  })
            };

            let Trigger = function (_React$Component) {
	  (0, _inherits3['default'])(Trigger, _React$Component);

	  function Trigger(props) {
	    (0, _classCallCheck3['default'])(this, Trigger);

	    let _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props));

	    _initialiseProps.call(_this);

	    let popupVisible = void 0;
	    if ('popupVisible' in props) {
	      popupVisible = !!props.popupVisible;
	    } else {
	      popupVisible = !!props.defaultPopupVisible;
	    }

	    _this.prevPopupVisible = popupVisible;

	    _this.state = {
	      popupVisible: popupVisible
	    };
	    return _this;
	  }

	  Trigger.prototype.getChildContext = function getChildContext() {
	    return {
	      rcTrigger: {
	        onPopupMouseDown: this.onPopupMouseDown
	      }
	    };
	  };

	  Trigger.prototype.componentWillMount = function componentWillMount() {
	    let _this2 = this;

	    ALL_HANDLERS.forEach(function (h) {
	      _this2['fire' + h] = function (e) {
	        _this2.fireEvents(h, e);
	      };
	    });
	  };

	  Trigger.prototype.componentDidMount = function componentDidMount() {
	    this.componentDidUpdate({}, {
	      popupVisible: this.state.popupVisible
	    });
	  };

	  Trigger.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
	    let popupVisible = _ref.popupVisible;

	    if (popupVisible !== undefined) {
	      this.setState({
	        popupVisible: popupVisible
	      });
	    }
	  };

	  Trigger.prototype.componentDidUpdate = function componentDidUpdate(_, prevState) {
	    let props = this.props;
	    let state = this.state;
	    let triggerAfterPopupVisibleChange = function triggerAfterPopupVisibleChange() {
	      if (prevState.popupVisible !== state.popupVisible) {
	        props.afterPopupVisibleChange(state.popupVisible);
	      }
	    };
	    if (!IS_REACT_16) {
	      this.renderComponent(null, triggerAfterPopupVisibleChange);
	    }

	    this.prevPopupVisible = prevState.popupVisible;

	    // We must listen to `mousedown` or `touchstart`, edge case:
	    // https://github.com/ant-design/ant-design/issues/5804
	    // https://github.com/react-component/calendar/issues/250
	    // https://github.com/react-component/trigger/issues/50
	    if (state.popupVisible) {
	      let currentDocument = void 0;
	      if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow())) {
	        currentDocument = props.getDocument();
	        this.clickOutsideHandler = (0, _addEventListener2['default'])(currentDocument, 'mousedown', this.onDocumentClick);
	      }
	      // always hide on mobile
	      if (!this.touchOutsideHandler) {
	        currentDocument = currentDocument || props.getDocument();
	        this.touchOutsideHandler = (0, _addEventListener2['default'])(currentDocument, 'touchstart', this.onDocumentClick);
	      }
	      // close popup when trigger type contains 'onContextMenu' and document is scrolling.
	      if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
	        currentDocument = currentDocument || props.getDocument();
	        this.contextMenuOutsideHandler1 = (0, _addEventListener2['default'])(currentDocument, 'scroll', this.onContextMenuClose);
	      }
	      // close popup when trigger type contains 'onContextMenu' and window is blur.
	      if (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow()) {
	        this.contextMenuOutsideHandler2 = (0, _addEventListener2['default'])(window, 'blur', this.onContextMenuClose);
	      }
	      return;
	    }

	    this.clearOutsideHandler();
	  };

	  Trigger.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.clearDelayTimer();
	    this.clearOutsideHandler();
	    clearTimeout(this.mouseDownTimeout);
	  };

	  Trigger.prototype.getPopupDomNode = function getPopupDomNode() {
	    // for test
	    if (this._component && this._component.getPopupDomNode) {
	      return this._component.getPopupDomNode();
	    }
	    return null;
	  };

	  Trigger.prototype.getPopupAlign = function getPopupAlign() {
	    let props = this.props;
	    let popupPlacement = props.popupPlacement,
	        popupAlign = props.popupAlign,
	        builtinPlacements = props.builtinPlacements;

	    if (popupPlacement && builtinPlacements) {
	      return (0, _utils.getAlignFromPlacement)(builtinPlacements, popupPlacement, popupAlign);
	    }
	    return popupAlign;
	  };

	  /**
	   * @param popupVisible    Show or not the popup element
	   * @param event           SyntheticEvent, used for `pointAlign`
	   */
	  Trigger.prototype.setPopupVisible = function setPopupVisible(popupVisible, event) {
	    let alignPoint = this.props.alignPoint;


	    this.clearDelayTimer();

	    if (this.state.popupVisible !== popupVisible) {
	      if (!('popupVisible' in this.props)) {
	        this.setState({ popupVisible: popupVisible });
	      }
	      this.props.onPopupVisibleChange(popupVisible);
	    }

	    // Always record the point position since mouseEnterDelay will delay the show
	    if (alignPoint && event) {
	      this.setPoint(event);
	    }
	  };

	  Trigger.prototype.delaySetPopupVisible = function delaySetPopupVisible(visible, delayS, event) {
	    let _this3 = this;

	    let delay = delayS * 1000;
	    this.clearDelayTimer();
	    if (delay) {
	      let point = event ? { pageX: event.pageX, pageY: event.pageY } : null;
	      this.delayTimer = setTimeout(function () {
	        _this3.setPopupVisible(visible, point);
	        _this3.clearDelayTimer();
	      }, delay);
	    } else {
	      this.setPopupVisible(visible, event);
	    }
	  };

	  Trigger.prototype.clearDelayTimer = function clearDelayTimer() {
	    if (this.delayTimer) {
	      clearTimeout(this.delayTimer);
	      this.delayTimer = null;
	    }
	  };

	  Trigger.prototype.clearOutsideHandler = function clearOutsideHandler() {
	    if (this.clickOutsideHandler) {
	      this.clickOutsideHandler.remove();
	      this.clickOutsideHandler = null;
	    }

	    if (this.contextMenuOutsideHandler1) {
	      this.contextMenuOutsideHandler1.remove();
	      this.contextMenuOutsideHandler1 = null;
	    }

	    if (this.contextMenuOutsideHandler2) {
	      this.contextMenuOutsideHandler2.remove();
	      this.contextMenuOutsideHandler2 = null;
	    }

	    if (this.touchOutsideHandler) {
	      this.touchOutsideHandler.remove();
	      this.touchOutsideHandler = null;
	    }
	  };

	  Trigger.prototype.createTwoChains = function createTwoChains(event) {
	    let childPros = this.props.children.props;
	    let props = this.props;
	    if (childPros[event] && props[event]) {
	      return this['fire' + event];
	    }
	    return childPros[event] || props[event];
	  };

	  Trigger.prototype.isClickToShow = function isClickToShow() {
	    let _props = this.props,
	        action = _props.action,
	        showAction = _props.showAction;

	    return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
	  };

	  Trigger.prototype.isContextMenuToShow = function isContextMenuToShow() {
	    let _props2 = this.props,
	        action = _props2.action,
	        showAction = _props2.showAction;

	    return action.indexOf('contextMenu') !== -1 || showAction.indexOf('contextMenu') !== -1;
	  };

	  Trigger.prototype.isClickToHide = function isClickToHide() {
	    let _props3 = this.props,
	        action = _props3.action,
	        hideAction = _props3.hideAction;

	    return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
	  };

	  Trigger.prototype.isMouseEnterToShow = function isMouseEnterToShow() {
	    let _props4 = this.props,
	        action = _props4.action,
	        showAction = _props4.showAction;

	    return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
	  };

	  Trigger.prototype.isMouseLeaveToHide = function isMouseLeaveToHide() {
	    let _props5 = this.props,
	        action = _props5.action,
	        hideAction = _props5.hideAction;

	    return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
	  };

	  Trigger.prototype.isFocusToShow = function isFocusToShow() {
	    let _props6 = this.props,
	        action = _props6.action,
	        showAction = _props6.showAction;

	    return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
	  };

	  Trigger.prototype.isBlurToHide = function isBlurToHide() {
	    let _props7 = this.props,
	        action = _props7.action,
	        hideAction = _props7.hideAction;

	    return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
	  };

	  Trigger.prototype.forcePopupAlign = function forcePopupAlign() {
	    if (this.state.popupVisible && this._component && this._component.alignInstance) {
	      this._component.alignInstance.forceAlign();
	    }
	  };

	  Trigger.prototype.fireEvents = function fireEvents(type, e) {
	    let childCallback = this.props.children.props[type];
	    if (childCallback) {
	      childCallback(e);
	    }
	    let callback = this.props[type];
	    if (callback) {
	      callback(e);
	    }
	  };

	  Trigger.prototype.close = function close() {
	    this.setPopupVisible(false);
	  };

	  Trigger.prototype.render = function render() {
	    let _this4 = this;

	    let popupVisible = this.state.popupVisible;
	    let _props8 = this.props,
	        children = _props8.children,
	        forceRender = _props8.forceRender,
	        alignPoint = _props8.alignPoint,
	        className = _props8.className;

	    let child = _react2['default'].Children.only(children);
	    let newChildProps = { key: 'trigger' };

	    if (this.isContextMenuToShow()) {
	      newChildProps.onContextMenu = this.onContextMenu;
	    } else {
	      newChildProps.onContextMenu = this.createTwoChains('onContextMenu');
	    }

	    if (this.isClickToHide() || this.isClickToShow()) {
	      newChildProps.onClick = this.onClick;
	      newChildProps.onMouseDown = this.onMouseDown;
	      newChildProps.onTouchStart = this.onTouchStart;
	    } else {
	      newChildProps.onClick = this.createTwoChains('onClick');
	      newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
	      newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
	    }
	    if (this.isMouseEnterToShow()) {
	      newChildProps.onMouseEnter = this.onMouseEnter;
	      if (alignPoint) {
	        newChildProps.onMouseMove = this.onMouseMove;
	      }
	    } else {
	      newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
	    }
	    if (this.isMouseLeaveToHide()) {
	      newChildProps.onMouseLeave = this.onMouseLeave;
	    } else {
	      newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
	    }
	    if (this.isFocusToShow() || this.isBlurToHide()) {
	      newChildProps.onFocus = this.onFocus;
	      newChildProps.onBlur = this.onBlur;
	    } else {
	      newChildProps.onFocus = this.createTwoChains('onFocus');
	      newChildProps.onBlur = this.createTwoChains('onBlur');
	    }

	    let childrenClassName = (0, _classnames2['default'])(child && child.props && child.props.className, className);
	    if (childrenClassName) {
	      newChildProps.className = childrenClassName;
	    }
	    let trigger = _react2['default'].cloneElement(child, newChildProps);

	    if (!IS_REACT_16) {
	      return _react2['default'].createElement(
	        _ContainerRender2['default'],
	        {
	          parent: this,
	          visible: popupVisible,
	          autoMount: false,
	          forceRender: forceRender,
	          getComponent: this.getComponent,
	          getContainer: this.getContainer
	        },
	        function (_ref2) {
	          let renderComponent = _ref2.renderComponent;

	          _this4.renderComponent = renderComponent;
	          return trigger;
	        }
	      );
	    }

	    let portal = void 0;
	    // prevent unmounting after it's rendered
	    if (popupVisible || this._component || forceRender) {
	      portal = _react2['default'].createElement(
	        _Portal2['default'],
	        {
	          key: 'portal',
	          getContainer: this.getContainer,
	          didUpdate: this.handlePortalUpdate
	        },
	        this.getComponent()
	      );
	    }

	    return [trigger, portal];
	  };

	  return Trigger;
            }(_react2['default'].Component);

            Trigger.propTypes = {
	  children: _propTypes2['default'].any,
	  action: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].arrayOf(_propTypes2['default'].string)]),
	  showAction: _propTypes2['default'].any,
	  hideAction: _propTypes2['default'].any,
	  getPopupClassNameFromAlign: _propTypes2['default'].any,
	  onPopupVisibleChange: _propTypes2['default'].func,
	  afterPopupVisibleChange: _propTypes2['default'].func,
	  popup: _propTypes2['default'].oneOfType([_propTypes2['default'].node, _propTypes2['default'].func]).isRequired,
	  popupStyle: _propTypes2['default'].object,
	  prefixCls: _propTypes2['default'].string,
	  popupClassName: _propTypes2['default'].string,
	  className: _propTypes2['default'].string,
	  popupPlacement: _propTypes2['default'].string,
	  builtinPlacements: _propTypes2['default'].object,
	  popupTransitionName: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].object]),
	  popupAnimation: _propTypes2['default'].any,
	  mouseEnterDelay: _propTypes2['default'].number,
	  mouseLeaveDelay: _propTypes2['default'].number,
	  zIndex: _propTypes2['default'].number,
	  focusDelay: _propTypes2['default'].number,
	  blurDelay: _propTypes2['default'].number,
	  getPopupContainer: _propTypes2['default'].func,
	  getDocument: _propTypes2['default'].func,
	  forceRender: _propTypes2['default'].bool,
	  destroyPopupOnHide: _propTypes2['default'].bool,
	  mask: _propTypes2['default'].bool,
	  maskClosable: _propTypes2['default'].bool,
	  onPopupAlign: _propTypes2['default'].func,
	  popupAlign: _propTypes2['default'].object,
	  popupVisible: _propTypes2['default'].bool,
	  defaultPopupVisible: _propTypes2['default'].bool,
	  maskTransitionName: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].object]),
	  maskAnimation: _propTypes2['default'].string,
	  stretch: _propTypes2['default'].string,
	  alignPoint: _propTypes2['default'].bool // Maybe we can support user pass position in the future
            };
            Trigger.contextTypes = contextTypes;
            Trigger.childContextTypes = contextTypes;
            Trigger.defaultProps = {
	  prefixCls: 'rc-trigger-popup',
	  getPopupClassNameFromAlign: returnEmptyString,
	  getDocument: returnDocument,
	  onPopupVisibleChange: noop,
	  afterPopupVisibleChange: noop,
	  onPopupAlign: noop,
	  popupClassName: '',
	  mouseEnterDelay: 0,
	  mouseLeaveDelay: 0.1,
	  focusDelay: 0,
	  blurDelay: 0.15,
	  popupStyle: {},
	  destroyPopupOnHide: false,
	  popupAlign: {},
	  defaultPopupVisible: false,
	  mask: false,
	  maskClosable: true,
	  action: [],
	  showAction: [],
	  hideAction: []
            };

            var _initialiseProps = function _initialiseProps() {
	  let _this5 = this;

	  this.onMouseEnter = function (e) {
	    let mouseEnterDelay = _this5.props.mouseEnterDelay;

	    _this5.fireEvents('onMouseEnter', e);
	    _this5.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e);
	  };

	  this.onMouseMove = function (e) {
	    _this5.fireEvents('onMouseMove', e);
	    _this5.setPoint(e);
	  };

	  this.onMouseLeave = function (e) {
	    _this5.fireEvents('onMouseLeave', e);
	    _this5.delaySetPopupVisible(false, _this5.props.mouseLeaveDelay);
	  };

	  this.onPopupMouseEnter = function () {
	    _this5.clearDelayTimer();
	  };

	  this.onPopupMouseLeave = function (e) {
	    // https://github.com/react-component/trigger/pull/13
	    // react bug?
	    if (e.relatedTarget && !e.relatedTarget.setTimeout && _this5._component && _this5._component.getPopupDomNode && (0, _contains2['default'])(_this5._component.getPopupDomNode(), e.relatedTarget)) {
	      return;
	    }
	    _this5.delaySetPopupVisible(false, _this5.props.mouseLeaveDelay);
	  };

	  this.onFocus = function (e) {
	    _this5.fireEvents('onFocus', e);
	    // incase focusin and focusout
	    _this5.clearDelayTimer();
	    if (_this5.isFocusToShow()) {
	      _this5.focusTime = Date.now();
	      _this5.delaySetPopupVisible(true, _this5.props.focusDelay);
	    }
	  };

	  this.onMouseDown = function (e) {
	    _this5.fireEvents('onMouseDown', e);
	    _this5.preClickTime = Date.now();
	  };

	  this.onTouchStart = function (e) {
	    _this5.fireEvents('onTouchStart', e);
	    _this5.preTouchTime = Date.now();
	  };

	  this.onBlur = function (e) {
	    _this5.fireEvents('onBlur', e);
	    _this5.clearDelayTimer();
	    if (_this5.isBlurToHide()) {
	      _this5.delaySetPopupVisible(false, _this5.props.blurDelay);
	    }
	  };

	  this.onContextMenu = function (e) {
	    e.preventDefault();
	    _this5.fireEvents('onContextMenu', e);
	    _this5.setPopupVisible(true, e);
	  };

	  this.onContextMenuClose = function () {
	    if (_this5.isContextMenuToShow()) {
	      _this5.close();
	    }
	  };

	  this.onClick = function (event) {
	    _this5.fireEvents('onClick', event);
	    // focus will trigger click
	    if (_this5.focusTime) {
	      let preTime = void 0;
	      if (_this5.preClickTime && _this5.preTouchTime) {
	        preTime = Math.min(_this5.preClickTime, _this5.preTouchTime);
	      } else if (_this5.preClickTime) {
	        preTime = _this5.preClickTime;
	      } else if (_this5.preTouchTime) {
	        preTime = _this5.preTouchTime;
	      }
	      if (Math.abs(preTime - _this5.focusTime) < 20) {
	        return;
	      }
	      _this5.focusTime = 0;
	    }
	    _this5.preClickTime = 0;
	    _this5.preTouchTime = 0;
	    if (event && event.preventDefault) {
	      event.preventDefault();
	    }
	    let nextVisible = !_this5.state.popupVisible;
	    if (_this5.isClickToHide() && !nextVisible || nextVisible && _this5.isClickToShow()) {
	      _this5.setPopupVisible(!_this5.state.popupVisible, event);
	    }
	  };

	  this.onPopupMouseDown = function () {
	    let _context$rcTrigger = _this5.context.rcTrigger,
	        rcTrigger = _context$rcTrigger === undefined ? {} : _context$rcTrigger;

	    _this5.hasPopupMouseDown = true;

	    clearTimeout(_this5.mouseDownTimeout);
	    _this5.mouseDownTimeout = setTimeout(function () {
	      _this5.hasPopupMouseDown = false;
	    }, 0);

	    if (rcTrigger.onPopupMouseDown) {
	      rcTrigger.onPopupMouseDown.apply(rcTrigger, arguments);
	    }
	  };

	  this.onDocumentClick = function (event) {
	    if (_this5.props.mask && !_this5.props.maskClosable) {
	      return;
	    }

	    let target = event.target;
	    let root = (0, _reactDom.findDOMNode)(_this5);
	    if (!(0, _contains2['default'])(root, target) && !_this5.hasPopupMouseDown) {
	      _this5.close();
	    }
	  };

	  this.getRootDomNode = function () {
	    return (0, _reactDom.findDOMNode)(_this5);
	  };

	  this.getPopupClassNameFromAlign = function (align) {
	    let className = [];
	    let _props9 = _this5.props,
	        popupPlacement = _props9.popupPlacement,
	        builtinPlacements = _props9.builtinPlacements,
	        prefixCls = _props9.prefixCls,
	        alignPoint = _props9.alignPoint,
	        getPopupClassNameFromAlign = _props9.getPopupClassNameFromAlign;

	    if (popupPlacement && builtinPlacements) {
	      className.push((0, _utils.getAlignPopupClassName)(builtinPlacements, prefixCls, align, alignPoint));
	    }
	    if (getPopupClassNameFromAlign) {
	      className.push(getPopupClassNameFromAlign(align));
	    }
	    return className.join(' ');
	  };

	  this.getComponent = function () {
	    let _props10 = _this5.props,
	        prefixCls = _props10.prefixCls,
	        destroyPopupOnHide = _props10.destroyPopupOnHide,
	        popupClassName = _props10.popupClassName,
	        action = _props10.action,
	        onPopupAlign = _props10.onPopupAlign,
	        popupAnimation = _props10.popupAnimation,
	        popupTransitionName = _props10.popupTransitionName,
	        popupStyle = _props10.popupStyle,
	        mask = _props10.mask,
	        maskAnimation = _props10.maskAnimation,
	        maskTransitionName = _props10.maskTransitionName,
	        zIndex = _props10.zIndex,
	        popup = _props10.popup,
	        stretch = _props10.stretch,
	        alignPoint = _props10.alignPoint;
	    let _state = _this5.state,
	        popupVisible = _state.popupVisible,
	        point = _state.point;


	    let align = _this5.getPopupAlign();

	    let mouseProps = {};
	    if (_this5.isMouseEnterToShow()) {
	      mouseProps.onMouseEnter = _this5.onPopupMouseEnter;
	    }
	    if (_this5.isMouseLeaveToHide()) {
	      mouseProps.onMouseLeave = _this5.onPopupMouseLeave;
	    }

	    mouseProps.onMouseDown = _this5.onPopupMouseDown;
	    mouseProps.onTouchStart = _this5.onPopupMouseDown;

	    return _react2['default'].createElement(
	      _Popup2['default'],
	      (0, _extends3['default'])({
	        prefixCls: prefixCls,
	        destroyPopupOnHide: destroyPopupOnHide,
	        visible: popupVisible,
	        point: alignPoint && point,
	        className: popupClassName,
	        action: action,
	        align: align,
	        onAlign: onPopupAlign,
	        animation: popupAnimation,
	        getClassNameFromAlign: _this5.getPopupClassNameFromAlign
	      }, mouseProps, {
	        stretch: stretch,
	        getRootDomNode: _this5.getRootDomNode,
	        style: popupStyle,
	        mask: mask,
	        zIndex: zIndex,
	        transitionName: popupTransitionName,
	        maskAnimation: maskAnimation,
	        maskTransitionName: maskTransitionName,
	        ref: _this5.savePopup
	      }),
	      typeof popup === 'function' ? popup() : popup
	    );
	  };

	  this.getContainer = function () {
	    let props = _this5.props;

	    let popupContainer = document.createElement('div');
	    // Make sure default popup container will never cause scrollbar appearing
	    // https://github.com/react-component/trigger/issues/41
	    popupContainer.style.position = 'absolute';
	    popupContainer.style.top = '0';
	    popupContainer.style.left = '0';
	    popupContainer.style.width = '100%';
	    let mountNode = props.getPopupContainer ? props.getPopupContainer((0, _reactDom.findDOMNode)(_this5)) : props.getDocument().body;
	    mountNode.appendChild(popupContainer);
	    return popupContainer;
	  };

	  this.setPoint = function (point) {
	    let alignPoint = _this5.props.alignPoint;

	    if (!alignPoint || !point) {return;}

	    _this5.setState({
	      point: {
	        pageX: point.pageX,
	        pageY: point.pageY
	      }
	    });
	  };

	  this.handlePortalUpdate = function () {
	    if (_this5.prevPopupVisible !== _this5.state.popupVisible) {
	      _this5.props.afterPopupVisibleChange(_this5.state.popupVisible);
	    }
	  };

	  this.savePopup = function (node) {
	    _this5._component = node;
	  };
            };

            exports['default'] = Trigger;
            module.exports = exports['default'];

            /***/ },
        /* 112 */
        /***/ function(module, exports) {

            'use strict';

            Object.defineProperty(exports, '__esModule', {
	  value: true
            });
            exports['default'] = contains;
            function contains(root, n) {
	  let node = n;
	  while (node) {
	    if (node === root) {
	      return true;
	    }
	    node = node.parentNode;
	  }

	  return false;
            }
            module.exports = exports['default'];

            /***/ },
        /* 113 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            Object.defineProperty(exports, '__esModule', {
	  value: true
            });

            let _classCallCheck2 = __webpack_require__(68);

            let _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

            let _createClass2 = __webpack_require__(114);

            let _createClass3 = _interopRequireDefault(_createClass2);

            let _possibleConstructorReturn2 = __webpack_require__(69);

            let _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

            let _inherits2 = __webpack_require__(103);

            let _inherits3 = _interopRequireDefault(_inherits2);

            let _react = __webpack_require__(10);

            let _react2 = _interopRequireDefault(_react);

            let _reactDom = __webpack_require__(17);

            let _reactDom2 = _interopRequireDefault(_reactDom);

            let _propTypes = __webpack_require__(3);

            let _propTypes2 = _interopRequireDefault(_propTypes);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

            let ContainerRender = function (_React$Component) {
	  (0, _inherits3['default'])(ContainerRender, _React$Component);

	  function ContainerRender() {
	    let _ref;

	    let _temp, _this, _ret;

	    (0, _classCallCheck3['default'])(this, ContainerRender);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, (_ref = ContainerRender.__proto__ || Object.getPrototypeOf(ContainerRender)).call.apply(_ref, [this].concat(args))), _this), _this.removeContainer = function () {
	      if (_this.container) {
	        _reactDom2['default'].unmountComponentAtNode(_this.container);
	        _this.container.parentNode.removeChild(_this.container);
	        _this.container = null;
	      }
	    }, _this.renderComponent = function (props, ready) {
	      let _this$props = _this.props,
	          visible = _this$props.visible,
	          getComponent = _this$props.getComponent,
	          forceRender = _this$props.forceRender,
	          getContainer = _this$props.getContainer,
	          parent = _this$props.parent;

	      if (visible || parent._component || forceRender) {
	        if (!_this.container) {
	          _this.container = getContainer();
	        }
	        _reactDom2['default'].unstable_renderSubtreeIntoContainer(parent, getComponent(props), _this.container, function callback() {
	          if (ready) {
	            ready.call(this);
	          }
	        });
	      }
	    }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
	  }

	  (0, _createClass3['default'])(ContainerRender, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.autoMount) {
	        this.renderComponent();
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (this.props.autoMount) {
	        this.renderComponent();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.props.autoDestroy) {
	        this.removeContainer();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.children({
	        renderComponent: this.renderComponent,
	        removeContainer: this.removeContainer
	      });
	    }
	  }]);
	  return ContainerRender;
            }(_react2['default'].Component);

            ContainerRender.propTypes = {
	  autoMount: _propTypes2['default'].bool,
	  autoDestroy: _propTypes2['default'].bool,
	  visible: _propTypes2['default'].bool,
	  forceRender: _propTypes2['default'].bool,
	  parent: _propTypes2['default'].any,
	  getComponent: _propTypes2['default'].func.isRequired,
	  getContainer: _propTypes2['default'].func.isRequired,
	  children: _propTypes2['default'].func.isRequired
            };
            ContainerRender.defaultProps = {
	  autoMount: true,
	  autoDestroy: true,
	  forceRender: false
            };
            exports['default'] = ContainerRender;
            module.exports = exports['default'];

            /***/ },
        /* 114 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            exports.__esModule = true;

            let _defineProperty = __webpack_require__(115);

            let _defineProperty2 = _interopRequireDefault(_defineProperty);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

            exports.default = function () {
	  function defineProperties(target, props) {
	    for (let i = 0; i < props.length; i++) {
	      let descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ('value' in descriptor) {descriptor.writable = true;}
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) {defineProperties(Constructor.prototype, protoProps);}
	    if (staticProps) {defineProperties(Constructor, staticProps);}
	    return Constructor;
	  };
            }();

            /***/ },
        /* 115 */
        /***/ function(module, exports, __webpack_require__) {

            module.exports = { 'default': __webpack_require__(116), __esModule: true };

            /***/ },
        /* 116 */
        /***/ function(module, exports, __webpack_require__) {

            __webpack_require__(117);
            let $Object = __webpack_require__(34).Object;
            module.exports = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
            };


            /***/ },
        /* 117 */
        /***/ function(module, exports, __webpack_require__) {

            let $export = __webpack_require__(32);
            // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
            $export($export.S + $export.F * !__webpack_require__(42), 'Object', { defineProperty: __webpack_require__(38).f });


            /***/ },
        /* 118 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            Object.defineProperty(exports, '__esModule', {
	  value: true
            });

            let _classCallCheck2 = __webpack_require__(68);

            let _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

            let _createClass2 = __webpack_require__(114);

            let _createClass3 = _interopRequireDefault(_createClass2);

            let _possibleConstructorReturn2 = __webpack_require__(69);

            let _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

            let _inherits2 = __webpack_require__(103);

            let _inherits3 = _interopRequireDefault(_inherits2);

            let _react = __webpack_require__(10);

            let _react2 = _interopRequireDefault(_react);

            let _reactDom = __webpack_require__(17);

            let _reactDom2 = _interopRequireDefault(_reactDom);

            let _propTypes = __webpack_require__(3);

            let _propTypes2 = _interopRequireDefault(_propTypes);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

            let Portal = function (_React$Component) {
	  (0, _inherits3['default'])(Portal, _React$Component);

	  function Portal() {
	    (0, _classCallCheck3['default'])(this, Portal);
	    return (0, _possibleConstructorReturn3['default'])(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
	  }

	  (0, _createClass3['default'])(Portal, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.createContainer();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      let didUpdate = this.props.didUpdate;

	      if (didUpdate) {
	        didUpdate(prevProps);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.removeContainer();
	    }
	  }, {
	    key: 'createContainer',
	    value: function createContainer() {
	      this._container = this.props.getContainer();
	      this.forceUpdate();
	    }
	  }, {
	    key: 'removeContainer',
	    value: function removeContainer() {
	      if (this._container) {
	        this._container.parentNode.removeChild(this._container);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this._container) {
	        return _reactDom2['default'].createPortal(this.props.children, this._container);
	      }
	      return null;
	    }
	  }]);
	  return Portal;
            }(_react2['default'].Component);

            Portal.propTypes = {
	  getContainer: _propTypes2['default'].func.isRequired,
	  children: _propTypes2['default'].node.isRequired,
	  didUpdate: _propTypes2['default'].func
            };
            exports['default'] = Portal;
            module.exports = exports['default'];

            /***/ },
        /* 119 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            exports.__esModule = true;

            let _extends2 = __webpack_require__(28);

            let _extends3 = _interopRequireDefault(_extends2);

            exports.getAlignFromPlacement = getAlignFromPlacement;
            exports.getAlignPopupClassName = getAlignPopupClassName;
            exports.saveRef = saveRef;

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

            function isPointsEq(a1, a2, isAlignPoint) {
	  if (isAlignPoint) {
	    return a1[0] === a2[0];
	  }
	  return a1[0] === a2[0] && a1[1] === a2[1];
            }

            function getAlignFromPlacement(builtinPlacements, placementStr, align) {
	  let baseAlign = builtinPlacements[placementStr] || {};
	  return (0, _extends3['default'])({}, baseAlign, align);
            }

            function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
	  let points = align.points;
	  for (let placement in builtinPlacements) {
	    if (builtinPlacements.hasOwnProperty(placement)) {
	      if (isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) {
	        return prefixCls + '-placement-' + placement;
	      }
	    }
	  }
	  return '';
            }

            function saveRef(name, component) {
	  this[name] = component;
            }

            /***/ },
        /* 120 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            exports.__esModule = true;

            let _extends2 = __webpack_require__(28);

            let _extends3 = _interopRequireDefault(_extends2);

            let _classCallCheck2 = __webpack_require__(68);

            let _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

            let _possibleConstructorReturn2 = __webpack_require__(69);

            let _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

            let _inherits2 = __webpack_require__(103);

            let _inherits3 = _interopRequireDefault(_inherits2);

            let _react = __webpack_require__(10);

            let _react2 = _interopRequireDefault(_react);

            let _propTypes = __webpack_require__(3);

            let _propTypes2 = _interopRequireDefault(_propTypes);

            let _reactDom = __webpack_require__(17);

            let _reactDom2 = _interopRequireDefault(_reactDom);

            let _rcAlign = __webpack_require__(121);

            let _rcAlign2 = _interopRequireDefault(_rcAlign);

            let _rcAnimate = __webpack_require__(137);

            let _rcAnimate2 = _interopRequireDefault(_rcAnimate);

            let _PopupInner = __webpack_require__(146);

            let _PopupInner2 = _interopRequireDefault(_PopupInner);

            let _LazyRenderBox = __webpack_require__(147);

            let _LazyRenderBox2 = _interopRequireDefault(_LazyRenderBox);

            let _utils = __webpack_require__(119);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

            let Popup = function (_Component) {
	  (0, _inherits3['default'])(Popup, _Component);

	  function Popup(props) {
	    (0, _classCallCheck3['default'])(this, Popup);

	    let _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this, props));

	    _initialiseProps.call(_this);

	    _this.state = {
	      // Used for stretch
	      stretchChecked: false,
	      targetWidth: undefined,
	      targetHeight: undefined
	    };

	    _this.savePopupRef = _utils.saveRef.bind(_this, 'popupInstance');
	    _this.saveAlignRef = _utils.saveRef.bind(_this, 'alignInstance');
	    return _this;
	  }

	  Popup.prototype.componentDidMount = function componentDidMount() {
	    this.rootNode = this.getPopupDomNode();
	    this.setStretchSize();
	  };

	  Popup.prototype.componentDidUpdate = function componentDidUpdate() {
	    this.setStretchSize();
	  };

	  // Record size if stretch needed


	  Popup.prototype.getPopupDomNode = function getPopupDomNode() {
	    return _reactDom2['default'].findDOMNode(this.popupInstance);
	  };

	  // `target` on `rc-align` can accept as a function to get the bind element or a point.
	  // ref: https://www.npmjs.com/package/rc-align


	  Popup.prototype.getMaskTransitionName = function getMaskTransitionName() {
	    let props = this.props;
	    let transitionName = props.maskTransitionName;
	    let animation = props.maskAnimation;
	    if (!transitionName && animation) {
	      transitionName = props.prefixCls + '-' + animation;
	    }
	    return transitionName;
	  };

	  Popup.prototype.getTransitionName = function getTransitionName() {
	    let props = this.props;
	    let transitionName = props.transitionName;
	    if (!transitionName && props.animation) {
	      transitionName = props.prefixCls + '-' + props.animation;
	    }
	    return transitionName;
	  };

	  Popup.prototype.getClassName = function getClassName(currentAlignClassName) {
	    return this.props.prefixCls + ' ' + this.props.className + ' ' + currentAlignClassName;
	  };

	  Popup.prototype.getPopupElement = function getPopupElement() {
	    let _this2 = this;

	    let savePopupRef = this.savePopupRef;
	    let _state = this.state,
	        stretchChecked = _state.stretchChecked,
	        targetHeight = _state.targetHeight,
	        targetWidth = _state.targetWidth;
	    let _props = this.props,
	        align = _props.align,
	        visible = _props.visible,
	        prefixCls = _props.prefixCls,
	        style = _props.style,
	        getClassNameFromAlign = _props.getClassNameFromAlign,
	        destroyPopupOnHide = _props.destroyPopupOnHide,
	        stretch = _props.stretch,
	        children = _props.children,
	        onMouseEnter = _props.onMouseEnter,
	        onMouseLeave = _props.onMouseLeave,
	        onMouseDown = _props.onMouseDown,
	        onTouchStart = _props.onTouchStart;

	    let className = this.getClassName(this.currentAlignClassName || getClassNameFromAlign(align));
	    let hiddenClassName = prefixCls + '-hidden';

	    if (!visible) {
	      this.currentAlignClassName = null;
	    }

	    let sizeStyle = {};
	    if (stretch) {
	      // Stretch with target
	      if (stretch.indexOf('height') !== -1) {
	        sizeStyle.height = targetHeight;
	      } else if (stretch.indexOf('minHeight') !== -1) {
	        sizeStyle.minHeight = targetHeight;
	      }
	      if (stretch.indexOf('width') !== -1) {
	        sizeStyle.width = targetWidth;
	      } else if (stretch.indexOf('minWidth') !== -1) {
	        sizeStyle.minWidth = targetWidth;
	      }

	      // Delay force align to makes ui smooth
	      if (!stretchChecked) {
	        sizeStyle.visibility = 'hidden';
	        setTimeout(function () {
	          if (_this2.alignInstance) {
	            _this2.alignInstance.forceAlign();
	          }
	        }, 0);
	      }
	    }

	    let newStyle = (0, _extends3['default'])({}, sizeStyle, style, this.getZIndexStyle());

	    let popupInnerProps = {
	      className: className,
	      prefixCls: prefixCls,
	      ref: savePopupRef,
	      onMouseEnter: onMouseEnter,
	      onMouseLeave: onMouseLeave,
	      onMouseDown: onMouseDown,
	      onTouchStart: onTouchStart,
	      style: newStyle
	    };
	    if (destroyPopupOnHide) {
	      return _react2['default'].createElement(
	        _rcAnimate2['default'],
	        {
	          component: '',
	          exclusive: true,
	          transitionAppear: true,
	          transitionName: this.getTransitionName()
	        },
	        visible ? _react2['default'].createElement(
	          _rcAlign2['default'],
	          {
	            target: this.getAlignTarget(),
	            key: 'popup',
	            ref: this.saveAlignRef,
	            monitorWindowResize: true,
	            align: align,
	            onAlign: this.onAlign
	          },
	          _react2['default'].createElement(
	            _PopupInner2['default'],
	            (0, _extends3['default'])({
	              visible: true
	            }, popupInnerProps),
	            children
	          )
	        ) : null
	      );
	    }

	    return _react2['default'].createElement(
	      _rcAnimate2['default'],
	      {
	        component: '',
	        exclusive: true,
	        transitionAppear: true,
	        transitionName: this.getTransitionName(),
	        showProp: 'xVisible'
	      },
	      _react2['default'].createElement(
	        _rcAlign2['default'],
	        {
	          target: this.getAlignTarget(),
	          key: 'popup',
	          ref: this.saveAlignRef,
	          monitorWindowResize: true,
	          xVisible: visible,
	          childrenProps: { visible: 'xVisible' },
	          disabled: !visible,
	          align: align,
	          onAlign: this.onAlign
	        },
	        _react2['default'].createElement(
	          _PopupInner2['default'],
	          (0, _extends3['default'])({
	            hiddenClassName: hiddenClassName
	          }, popupInnerProps),
	          children
	        )
	      )
	    );
	  };

	  Popup.prototype.getZIndexStyle = function getZIndexStyle() {
	    let style = {};
	    let props = this.props;
	    if (props.zIndex !== undefined) {
	      style.zIndex = props.zIndex;
	    }
	    return style;
	  };

	  Popup.prototype.getMaskElement = function getMaskElement() {
	    let props = this.props;
	    let maskElement = void 0;
	    if (props.mask) {
	      let maskTransition = this.getMaskTransitionName();
	      maskElement = _react2['default'].createElement(_LazyRenderBox2['default'], {
	        style: this.getZIndexStyle(),
	        key: 'mask',
	        className: props.prefixCls + '-mask',
	        hiddenClassName: props.prefixCls + '-mask-hidden',
	        visible: props.visible
	      });
	      if (maskTransition) {
	        maskElement = _react2['default'].createElement(
	          _rcAnimate2['default'],
	          {
	            key: 'mask',
	            showProp: 'visible',
	            transitionAppear: true,
	            component: '',
	            transitionName: maskTransition
	          },
	          maskElement
	        );
	      }
	    }
	    return maskElement;
	  };

	  Popup.prototype.render = function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      this.getMaskElement(),
	      this.getPopupElement()
	    );
	  };

	  return Popup;
            }(_react.Component);

            Popup.propTypes = {
	  visible: _propTypes2['default'].bool,
	  style: _propTypes2['default'].object,
	  getClassNameFromAlign: _propTypes2['default'].func,
	  onAlign: _propTypes2['default'].func,
	  getRootDomNode: _propTypes2['default'].func,
	  align: _propTypes2['default'].any,
	  destroyPopupOnHide: _propTypes2['default'].bool,
	  className: _propTypes2['default'].string,
	  prefixCls: _propTypes2['default'].string,
	  onMouseEnter: _propTypes2['default'].func,
	  onMouseLeave: _propTypes2['default'].func,
	  onMouseDown: _propTypes2['default'].func,
	  onTouchStart: _propTypes2['default'].func,
	  stretch: _propTypes2['default'].string,
	  children: _propTypes2['default'].node,
	  point: _propTypes2['default'].shape({
	    pageX: _propTypes2['default'].number,
	    pageY: _propTypes2['default'].number
	  })
            };

            var _initialiseProps = function _initialiseProps() {
	  let _this3 = this;

	  this.onAlign = function (popupDomNode, align) {
	    let props = _this3.props;
	    let currentAlignClassName = props.getClassNameFromAlign(align);
	    // FIX: https://github.com/react-component/trigger/issues/56
	    // FIX: https://github.com/react-component/tooltip/issues/79
	    if (_this3.currentAlignClassName !== currentAlignClassName) {
	      _this3.currentAlignClassName = currentAlignClassName;
	      popupDomNode.className = _this3.getClassName(currentAlignClassName);
	    }
	    props.onAlign(popupDomNode, align);
	  };

	  this.setStretchSize = function () {
	    let _props2 = _this3.props,
	        stretch = _props2.stretch,
	        getRootDomNode = _props2.getRootDomNode,
	        visible = _props2.visible;
	    let _state2 = _this3.state,
	        stretchChecked = _state2.stretchChecked,
	        targetHeight = _state2.targetHeight,
	        targetWidth = _state2.targetWidth;


	    if (!stretch || !visible) {
	      if (stretchChecked) {
	        _this3.setState({ stretchChecked: false });
	      }
	      return;
	    }

	    let $ele = getRootDomNode();
	    if (!$ele) {return;}

	    let height = $ele.offsetHeight;
	    let width = $ele.offsetWidth;

	    if (targetHeight !== height || targetWidth !== width || !stretchChecked) {
	      _this3.setState({
	        stretchChecked: true,
	        targetHeight: height,
	        targetWidth: width
	      });
	    }
	  };

	  this.getTargetElement = function () {
	    return _this3.props.getRootDomNode();
	  };

	  this.getAlignTarget = function () {
	    let point = _this3.props.point;

	    if (point) {
	      return point;
	    }
	    return _this3.getTargetElement;
	  };
            };

            exports['default'] = Popup;
            module.exports = exports['default'];

            /***/ },
        /* 121 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            exports.__esModule = true;

            let _Align = __webpack_require__(122);

            let _Align2 = _interopRequireDefault(_Align);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

            exports['default'] = _Align2['default']; // export this package's api

            module.exports = exports['default'];

            /***/ },
        /* 122 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            exports.__esModule = true;

            let _classCallCheck2 = __webpack_require__(68);

            let _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

            let _possibleConstructorReturn2 = __webpack_require__(69);

            let _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

            let _inherits2 = __webpack_require__(103);

            let _inherits3 = _interopRequireDefault(_inherits2);

            let _react = __webpack_require__(10);

            let _react2 = _interopRequireDefault(_react);

            let _propTypes = __webpack_require__(3);

            let _propTypes2 = _interopRequireDefault(_propTypes);

            let _reactDom = __webpack_require__(17);

            let _reactDom2 = _interopRequireDefault(_reactDom);

            let _domAlign = __webpack_require__(123);

            let _addEventListener = __webpack_require__(13);

            let _addEventListener2 = _interopRequireDefault(_addEventListener);

            let _util = __webpack_require__(136);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

            function getElement(func) {
	  if (typeof func !== 'function' || !func) {return null;}
	  return func();
            }

            function getPoint(point) {
	  if (typeof point !== 'object' || !point) {return null;}
	  return point;
            }

            let Align = function (_Component) {
	  (0, _inherits3['default'])(Align, _Component);

	  function Align() {
	    let _temp, _this, _ret;

	    (0, _classCallCheck3['default'])(this, Align);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.forceAlign = function () {
	      let _this$props = _this.props,
	          disabled = _this$props.disabled,
	          target = _this$props.target,
	          align = _this$props.align,
	          onAlign = _this$props.onAlign;

	      if (!disabled && target) {
	        let source = _reactDom2['default'].findDOMNode(_this);

	        let result = void 0;
	        let element = getElement(target);
	        let point = getPoint(target);

	        if (element) {
	          result = (0, _domAlign.alignElement)(source, element, align);
	        } else if (point) {
	          result = (0, _domAlign.alignPoint)(source, point, align);
	        }

	        if (onAlign) {
	          onAlign(source, result);
	        }
	      }
	    }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
	  }

	  Align.prototype.componentDidMount = function componentDidMount() {
	    let props = this.props;
	    // if parent ref not attached .... use document.getElementById
	    this.forceAlign();
	    if (!props.disabled && props.monitorWindowResize) {
	      this.startMonitorWindowResize();
	    }
	  };

	  Align.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	    let reAlign = false;
	    let props = this.props;

	    if (!props.disabled) {
	      let source = _reactDom2['default'].findDOMNode(this);
	      let sourceRect = source ? source.getBoundingClientRect() : null;

	      if (prevProps.disabled) {
	        reAlign = true;
	      } else {
	        let lastElement = getElement(prevProps.target);
	        let currentElement = getElement(props.target);
	        let lastPoint = getPoint(prevProps.target);
	        let currentPoint = getPoint(props.target);

	        if ((0, _util.isWindow)(lastElement) && (0, _util.isWindow)(currentElement)) {
	          // Skip if is window
	          reAlign = false;
	        } else if (lastElement !== currentElement || // Element change
	        lastElement && !currentElement && currentPoint || // Change from element to point
	        lastPoint && currentPoint && currentElement || // Change from point to element
	        currentPoint && !(0, _util.isSamePoint)(lastPoint, currentPoint)) {
	          reAlign = true;
	        }

	        // If source element size changed
	        let preRect = this.sourceRect || {};
	        if (!reAlign && source && (preRect.width !== sourceRect.width || preRect.height !== sourceRect.height)) {
	          reAlign = true;
	        }
	      }

	      this.sourceRect = sourceRect;
	    }

	    if (reAlign) {
	      this.forceAlign();
	    }

	    if (props.monitorWindowResize && !props.disabled) {
	      this.startMonitorWindowResize();
	    } else {
	      this.stopMonitorWindowResize();
	    }
	  };

	  Align.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.stopMonitorWindowResize();
	  };

	  Align.prototype.startMonitorWindowResize = function startMonitorWindowResize() {
	    if (!this.resizeHandler) {
	      this.bufferMonitor = (0, _util.buffer)(this.forceAlign, this.props.monitorBufferTime);
	      this.resizeHandler = (0, _addEventListener2['default'])(window, 'resize', this.bufferMonitor);
	    }
	  };

	  Align.prototype.stopMonitorWindowResize = function stopMonitorWindowResize() {
	    if (this.resizeHandler) {
	      this.bufferMonitor.clear();
	      this.resizeHandler.remove();
	      this.resizeHandler = null;
	    }
	  };

	  Align.prototype.render = function render() {
	    let _this2 = this;

	    let _props = this.props,
	        childrenProps = _props.childrenProps,
	        children = _props.children;

	    let child = _react2['default'].Children.only(children);
	    if (childrenProps) {
	      let newProps = {};
	      let propList = Object.keys(childrenProps);
	      propList.forEach(function (prop) {
	        newProps[prop] = _this2.props[childrenProps[prop]];
	      });

	      return _react2['default'].cloneElement(child, newProps);
	    }
	    return child;
	  };

	  return Align;
            }(_react.Component);

            Align.propTypes = {
	  childrenProps: _propTypes2['default'].object,
	  align: _propTypes2['default'].object.isRequired,
	  target: _propTypes2['default'].oneOfType([_propTypes2['default'].func, _propTypes2['default'].shape({
	    clientX: _propTypes2['default'].number,
	    clientY: _propTypes2['default'].number,
	    pageX: _propTypes2['default'].number,
	    pageY: _propTypes2['default'].number
	  })]),
	  onAlign: _propTypes2['default'].func,
	  monitorBufferTime: _propTypes2['default'].number,
	  monitorWindowResize: _propTypes2['default'].bool,
	  disabled: _propTypes2['default'].bool,
	  children: _propTypes2['default'].any
            };
            Align.defaultProps = {
	  target: function target() {
	    return window;
	  },
	  monitorBufferTime: 50,
	  monitorWindowResize: false,
	  disabled: false
            };
            exports['default'] = Align;
            module.exports = exports['default'];

            /***/ },
        /* 123 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            Object.defineProperty(exports, '__esModule', {
	  value: true
            });
            exports.alignPoint = exports.alignElement = undefined;

            let _alignElement = __webpack_require__(124);

            let _alignElement2 = _interopRequireDefault(_alignElement);

            let _alignPoint = __webpack_require__(135);

            let _alignPoint2 = _interopRequireDefault(_alignPoint);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

            exports.alignElement = _alignElement2['default'];
            exports.alignPoint = _alignPoint2['default'];
            exports['default'] = _alignElement2['default'];

            /***/ },
        /* 124 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            Object.defineProperty(exports, '__esModule', {
	  value: true
            });

            let _align = __webpack_require__(125);

            let _align2 = _interopRequireDefault(_align);

            let _getOffsetParent = __webpack_require__(129);

            let _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);

            let _getVisibleRectForElement = __webpack_require__(128);

            let _getVisibleRectForElement2 = _interopRequireDefault(_getVisibleRectForElement);

            let _getRegion = __webpack_require__(132);

            let _getRegion2 = _interopRequireDefault(_getRegion);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

            function isOutOfVisibleRect(target) {
	  let visibleRect = (0, _getVisibleRectForElement2['default'])(target);
	  let targetRegion = (0, _getRegion2['default'])(target);

	  return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
            }

            function alignElement(el, refNode, align) {
	  let target = align.target || refNode;
	  let refNodeRegion = (0, _getRegion2['default'])(target);

	  let isTargetNotOutOfVisible = !isOutOfVisibleRect(target);

	  return (0, _align2['default'])(el, refNodeRegion, align, isTargetNotOutOfVisible);
            }

            alignElement.__getOffsetParent = _getOffsetParent2['default'];

            alignElement.__getVisibleRectForElement = _getVisibleRectForElement2['default'];

            exports['default'] = alignElement;
            module.exports = exports['default'];

            /***/ },
        /* 125 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            Object.defineProperty(exports, '__esModule', {
	  value: true
            });

            let _utils = __webpack_require__(126);

            let _utils2 = _interopRequireDefault(_utils);

            let _getVisibleRectForElement = __webpack_require__(128);

            let _getVisibleRectForElement2 = _interopRequireDefault(_getVisibleRectForElement);

            let _adjustForViewport = __webpack_require__(131);

            let _adjustForViewport2 = _interopRequireDefault(_adjustForViewport);

            let _getRegion = __webpack_require__(132);

            let _getRegion2 = _interopRequireDefault(_getRegion);

            let _getElFuturePos = __webpack_require__(133);

            let _getElFuturePos2 = _interopRequireDefault(_getElFuturePos);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

            // http://yiminghe.iteye.com/blog/1124720

            function isFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
            } /**
	   * align dom node flexibly
	   * @author yiminghe@gmail.com
	   */

            function isFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
            }

            function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
            }

            function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
            }

            function flip(points, reg, map) {
	  let ret = [];
	  _utils2['default'].each(points, function (p) {
	    ret.push(p.replace(reg, function (m) {
	      return map[m];
	    }));
	  });
	  return ret;
            }

            function flipOffset(offset, index) {
	  offset[index] = -offset[index];
	  return offset;
            }

            function convertOffset(str, offsetLen) {
	  let n = void 0;
	  if (/%$/.test(str)) {
	    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
	  } else {
	    n = parseInt(str, 10);
	  }
	  return n || 0;
            }

            function normalizeOffset(offset, el) {
	  offset[0] = convertOffset(offset[0], el.width);
	  offset[1] = convertOffset(offset[1], el.height);
            }

            /**
	 * @param el
	 * @param tgtRegion 参照节点所占的区域: { left, top, width, height }
	 * @param align
	 */
            function doAlign(el, tgtRegion, align, isTgtRegionVisible) {
	  let points = align.points;
	  let offset = align.offset || [0, 0];
	  let targetOffset = align.targetOffset || [0, 0];
	  let overflow = align.overflow;
	  let source = align.source || el;
	  offset = [].concat(offset);
	  targetOffset = [].concat(targetOffset);
	  overflow = overflow || {};
	  let newOverflowCfg = {};
	  let fail = 0;
	  // 当前节点可以被放置的显示区域
	  let visibleRect = (0, _getVisibleRectForElement2['default'])(source);
	  // 当前节点所占的区域, left/top/width/height
	  let elRegion = (0, _getRegion2['default'])(source);
	  // 将 offset 转换成数值，支持百分比
	  normalizeOffset(offset, elRegion);
	  normalizeOffset(targetOffset, tgtRegion);
	  // 当前节点将要被放置的位置
	  let elFuturePos = (0, _getElFuturePos2['default'])(elRegion, tgtRegion, points, offset, targetOffset);
	  // 当前节点将要所处的区域
	  let newElRegion = _utils2['default'].merge(elRegion, elFuturePos);

	  // 如果可视区域不能完全放置当前节点时允许调整
	  if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTgtRegionVisible) {
	    if (overflow.adjustX) {
	      // 如果横向不能放下
	      if (isFailX(elFuturePos, elRegion, visibleRect)) {
	        // 对齐位置反下
	        let newPoints = flip(points, /[lr]/ig, {
	          l: 'r',
	          r: 'l'
	        });
	        // 偏移量也反下
	        let newOffset = flipOffset(offset, 0);
	        let newTargetOffset = flipOffset(targetOffset, 0);
	        let newElFuturePos = (0, _getElFuturePos2['default'])(elRegion, tgtRegion, newPoints, newOffset, newTargetOffset);

	        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
	          fail = 1;
	          points = newPoints;
	          offset = newOffset;
	          targetOffset = newTargetOffset;
	        }
	      }
	    }

	    if (overflow.adjustY) {
	      // 如果纵向不能放下
	      if (isFailY(elFuturePos, elRegion, visibleRect)) {
	        // 对齐位置反下
	        let _newPoints = flip(points, /[tb]/ig, {
	          t: 'b',
	          b: 't'
	        });
	        // 偏移量也反下
	        let _newOffset = flipOffset(offset, 1);
	        let _newTargetOffset = flipOffset(targetOffset, 1);
	        let _newElFuturePos = (0, _getElFuturePos2['default'])(elRegion, tgtRegion, _newPoints, _newOffset, _newTargetOffset);

	        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
	          fail = 1;
	          points = _newPoints;
	          offset = _newOffset;
	          targetOffset = _newTargetOffset;
	        }
	      }
	    }

	    // 如果失败，重新计算当前节点将要被放置的位置
	    if (fail) {
	      elFuturePos = (0, _getElFuturePos2['default'])(elRegion, tgtRegion, points, offset, targetOffset);
	      _utils2['default'].mix(newElRegion, elFuturePos);
	    }
	    let isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
	    let isStillFailY = isFailY(elFuturePos, elRegion, visibleRect);
	    // 检查反下后的位置是否可以放下了，如果仍然放不下：
	    // 1. 复原修改过的定位参数
	    if (isStillFailX || isStillFailY) {
	      points = align.points;
	      offset = align.offset || [0, 0];
	      targetOffset = align.targetOffset || [0, 0];
	    }
	    // 2. 只有指定了可以调整当前方向才调整
	    newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
	    newOverflowCfg.adjustY = overflow.adjustY && isStillFailY;

	    // 确实要调整，甚至可能会调整高度宽度
	    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
	      newElRegion = (0, _adjustForViewport2['default'])(elFuturePos, elRegion, visibleRect, newOverflowCfg);
	    }
	  }

	  // need judge to in case set fixed with in css on height auto element
	  if (newElRegion.width !== elRegion.width) {
	    _utils2['default'].css(source, 'width', _utils2['default'].width(source) + newElRegion.width - elRegion.width);
	  }

	  if (newElRegion.height !== elRegion.height) {
	    _utils2['default'].css(source, 'height', _utils2['default'].height(source) + newElRegion.height - elRegion.height);
	  }

	  // https://github.com/kissyteam/kissy/issues/190
	  // 相对于屏幕位置没变，而 left/top 变了
	  // 例如 <div 'relative'><el absolute></div>
	  _utils2['default'].offset(source, {
	    left: newElRegion.left,
	    top: newElRegion.top
	  }, {
	    useCssRight: align.useCssRight,
	    useCssBottom: align.useCssBottom,
	    useCssTransform: align.useCssTransform,
	    ignoreShake: align.ignoreShake
	  });

	  return {
	    points: points,
	    offset: offset,
	    targetOffset: targetOffset,
	    overflow: newOverflowCfg
	  };
            }

            exports['default'] = doAlign;
            /**
	 *  2012-04-26 yiminghe@gmail.com
	 *   - 优化智能对齐算法
	 *   - 慎用 resizeXX
	 *
	 *  2011-07-13 yiminghe@gmail.com note:
	 *   - 增加智能对齐，以及大小调整选项
	 **/

            module.exports = exports['default'];

            /***/ },
        /* 126 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            Object.defineProperty(exports, '__esModule', {
	  value: true
            });

            let _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; };

            let _propertyUtils = __webpack_require__(127);

            let RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;

            let getComputedStyleX = void 0;

            // https://stackoverflow.com/a/3485654/3040605
            function forceRelayout(elem) {
	  let originalStyle = elem.style.display;
	  elem.style.display = 'none';
	  elem.offsetHeight; // eslint-disable-line
	  elem.style.display = originalStyle;
            }

            function css(el, name, v) {
	  let value = v;
	  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
	    for (let i in name) {
	      if (name.hasOwnProperty(i)) {
	        css(el, i, name[i]);
	      }
	    }
	    return undefined;
	  }
	  if (typeof value !== 'undefined') {
	    if (typeof value === 'number') {
	      value = value + 'px';
	    }
	    el.style[name] = value;
	    return undefined;
	  }
	  return getComputedStyleX(el, name);
            }

            function getClientPosition(elem) {
	  let box = void 0;
	  let x = void 0;
	  let y = void 0;
	  let doc = elem.ownerDocument;
	  let body = doc.body;
	  let docElem = doc && doc.documentElement;
	  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
	  box = elem.getBoundingClientRect();

	  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
	  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
	  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

	  x = box.left;
	  y = box.top;

	  // In IE, most of the time, 2 extra pixels are added to the top and left
	  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
	  // IE6 standards mode, this border can be overridden by setting the
	  // document element's border to zero -- thus, we cannot rely on the
	  // offset always being 2 pixels.

	  // In quirks mode, the offset can be determined by querying the body's
	  // clientLeft/clientTop, but in standards mode, it is found by querying
	  // the document element's clientLeft/clientTop.  Since we already called
	  // getClientBoundingRect we have already forced a reflow, so it is not
	  // too expensive just to query them all.

	  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
	  // 窗口边框标准是设 documentElement ,quirks 时设置 body
	  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
	  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
	  // 标准 ie 下 docElem.clientTop 就是 border-top
	  // ie7 html 即窗口边框改变不了。永远为 2
	  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

	  x -= docElem.clientLeft || body.clientLeft || 0;
	  y -= docElem.clientTop || body.clientTop || 0;

	  return {
	    left: x,
	    top: y
	  };
            }

            function getScroll(w, top) {
	  let ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  let method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    let d = w.document;
	    // ie6,7,8 standard mode
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      // quirks mode
	      ret = d.body[method];
	    }
	  }
	  return ret;
            }

            function getScrollLeft(w) {
	  return getScroll(w);
            }

            function getScrollTop(w) {
	  return getScroll(w, true);
            }

            function getOffset(el) {
	  let pos = getClientPosition(el);
	  let doc = el.ownerDocument;
	  let w = doc.defaultView || doc.parentWindow;
	  pos.left += getScrollLeft(w);
	  pos.top += getScrollTop(w);
	  return pos;
            }

            /**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
            function isWindow(obj) {
	  // must use == for ie8
	  /* eslint eqeqeq:0 */
	  return obj !== null && obj !== undefined && obj == obj.window;
            }

            function getDocument(node) {
	  if (isWindow(node)) {
	    return node.document;
	  }
	  if (node.nodeType === 9) {
	    return node;
	  }
	  return node.ownerDocument;
            }

            function _getComputedStyle(elem, name, cs) {
	  let computedStyle = cs;
	  let val = '';
	  let d = getDocument(elem);
	  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null);

	  // https://github.com/kissyteam/kissy/issues/61
	  if (computedStyle) {
	    val = computedStyle.getPropertyValue(name) || computedStyle[name];
	  }

	  return val;
            }

            let _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
            let RE_POS = /^(top|right|bottom|left)$/;
            let CURRENT_STYLE = 'currentStyle';
            let RUNTIME_STYLE = 'runtimeStyle';
            let LEFT = 'left';
            let PX = 'px';

            function _getComputedStyleIE(elem, name) {
	  // currentStyle maybe null
	  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
	  let ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];

	  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
	  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
	  // 在 ie 下不对，需要直接用 offset 方式
	  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了

	  // From the awesome hack by Dean Edwards
	  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	  // If we're not dealing with a regular pixel number
	  // but a number that has a weird ending, we need to convert it to pixels
	  // exclude left right for relativity
	  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
	    // Remember the original values
	    let style = elem.style;
	    let left = style[LEFT];
	    let rsLeft = elem[RUNTIME_STYLE][LEFT];

	    // prevent flashing of content
	    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];

	    // Put in the new values to get a computed value out
	    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
	    ret = style.pixelLeft + PX;

	    // Revert the changed values
	    style[LEFT] = left;

	    elem[RUNTIME_STYLE][LEFT] = rsLeft;
	  }
	  return ret === '' ? 'auto' : ret;
            }

            if (typeof window !== 'undefined') {
	  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
            }

            function getOffsetDirection(dir, option) {
	  if (dir === 'left') {
	    return option.useCssRight ? 'right' : dir;
	  }
	  return option.useCssBottom ? 'bottom' : dir;
            }

            function oppositeOffsetDirection(dir) {
	  if (dir === 'left') {
	    return 'right';
	  } else if (dir === 'right') {
	    return 'left';
	  } else if (dir === 'top') {
	    return 'bottom';
	  } else if (dir === 'bottom') {
	    return 'top';
	  }
            }

            // 设置 elem 相对 elem.ownerDocument 的坐标
            function setLeftTop(elem, offset, option) {
	  // set position first, in-case top/left are set even on static elem
	  if (css(elem, 'position') === 'static') {
	    elem.style.position = 'relative';
	  }
	  let presetH = -999;
	  let presetV = -999;
	  let horizontalProperty = getOffsetDirection('left', option);
	  let verticalProperty = getOffsetDirection('top', option);
	  let oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
	  let oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);

	  if (horizontalProperty !== 'left') {
	    presetH = 999;
	  }

	  if (verticalProperty !== 'top') {
	    presetV = 999;
	  }
	  let originalTransition = '';
	  let originalOffset = getOffset(elem);
	  if ('left' in offset || 'top' in offset) {
	    originalTransition = (0, _propertyUtils.getTransitionProperty)(elem) || '';
	    (0, _propertyUtils.setTransitionProperty)(elem, 'none');
	  }
	  if ('left' in offset) {
	    elem.style[oppositeHorizontalProperty] = '';
	    elem.style[horizontalProperty] = presetH + 'px';
	  }
	  if ('top' in offset) {
	    elem.style[oppositeVerticalProperty] = '';
	    elem.style[verticalProperty] = presetV + 'px';
	  }
	  // force relayout
	  forceRelayout(elem);
	  let old = getOffset(elem);
	  let originalStyle = {};
	  for (let key in offset) {
	    if (offset.hasOwnProperty(key)) {
	      let dir = getOffsetDirection(key, option);
	      let preset = key === 'left' ? presetH : presetV;
	      let off = originalOffset[key] - old[key];
	      if (dir === key) {
	        originalStyle[dir] = preset + off;
	      } else {
	        originalStyle[dir] = preset - off;
	      }
	    }
	  }
	  css(elem, originalStyle);
	  // force relayout
	  forceRelayout(elem);
	  if ('left' in offset || 'top' in offset) {
	    (0, _propertyUtils.setTransitionProperty)(elem, originalTransition);
	  }
	  let ret = {};
	  for (let _key in offset) {
	    if (offset.hasOwnProperty(_key)) {
	      let _dir = getOffsetDirection(_key, option);
	      let _off = offset[_key] - originalOffset[_key];
	      if (_key === _dir) {
	        ret[_dir] = originalStyle[_dir] + _off;
	      } else {
	        ret[_dir] = originalStyle[_dir] - _off;
	      }
	    }
	  }
	  css(elem, ret);
            }

            function setTransform(elem, offset) {
	  let originalOffset = getOffset(elem);
	  let originalXY = (0, _propertyUtils.getTransformXY)(elem);
	  let resultXY = { x: originalXY.x, y: originalXY.y };
	  if ('left' in offset) {
	    resultXY.x = originalXY.x + offset.left - originalOffset.left;
	  }
	  if ('top' in offset) {
	    resultXY.y = originalXY.y + offset.top - originalOffset.top;
	  }
	  (0, _propertyUtils.setTransformXY)(elem, resultXY);
            }

            function setOffset(elem, offset, option) {
	  if (option.ignoreShake) {
	    let oriOffset = getOffset(elem);

	    let oLeft = oriOffset.left.toFixed(0);
	    let oTop = oriOffset.top.toFixed(0);
	    let tLeft = offset.left.toFixed(0);
	    let tTop = offset.top.toFixed(0);

	    if (oLeft === tLeft && oTop === tTop) {
	      return;
	    }
	  }

	  if (option.useCssRight || option.useCssBottom) {
	    setLeftTop(elem, offset, option);
	  } else if (option.useCssTransform && (0, _propertyUtils.getTransformName)() in document.body.style) {
	    setTransform(elem, offset, option);
	  } else {
	    setLeftTop(elem, offset, option);
	  }
            }

            function each(arr, fn) {
	  for (let i = 0; i < arr.length; i++) {
	    fn(arr[i]);
	  }
            }

            function isBorderBoxFn(elem) {
	  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
            }

            let BOX_MODELS = ['margin', 'border', 'padding'];
            let CONTENT_INDEX = -1;
            let PADDING_INDEX = 2;
            let BORDER_INDEX = 1;
            let MARGIN_INDEX = 0;

            function swap(elem, options, callback) {
	  let old = {};
	  let style = elem.style;
	  let name = void 0;

	  // Remember the old values, and insert the new ones
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      old[name] = style[name];
	      style[name] = options[name];
	    }
	  }

	  callback.call(elem);

	  // Revert the old values
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      style[name] = old[name];
	    }
	  }
            }

            function getPBMWidth(elem, props, which) {
	  let value = 0;
	  let prop = void 0;
	  let j = void 0;
	  let i = void 0;
	  for (j = 0; j < props.length; j++) {
	    prop = props[j];
	    if (prop) {
	      for (i = 0; i < which.length; i++) {
	        let cssProp = void 0;
	        if (prop === 'border') {
	          cssProp = '' + prop + which[i] + 'Width';
	        } else {
	          cssProp = prop + which[i];
	        }
	        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
	      }
	    }
	  }
	  return value;
            }

            let domUtils = {};

            each(['Width', 'Height'], function (name) {
	  domUtils['doc' + name] = function (refWin) {
	    let d = refWin.document;
	    return Math.max(
	    // firefox chrome documentElement.scrollHeight< body.scrollHeight
	    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
	    d.documentElement['scroll' + name],
	    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
	    d.body['scroll' + name], domUtils['viewport' + name](d));
	  };

	  domUtils['viewport' + name] = function (win) {
	    // pc browser includes scrollbar in window.innerWidth
	    let prop = 'client' + name;
	    let doc = win.document;
	    let body = doc.body;
	    let documentElement = doc.documentElement;
	    let documentElementProp = documentElement[prop];
	    // 标准模式取 documentElement
	    // backcompat 取 body
	    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
	  };
            });

            /*
	 得到元素的大小信息
	 @param elem
	 @param name
	 @param {String} [extra]  'padding' : (css width) + padding
	 'border' : (css width) + padding + border
	 'margin' : (css width) + padding + border + margin
	 */
            function getWH(elem, name, ex) {
	  let extra = ex;
	  if (isWindow(elem)) {
	    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
	  } else if (elem.nodeType === 9) {
	    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
	  }
	  let which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	  let borderBoxValue = name === 'width' ? elem.getBoundingClientRect().width : elem.getBoundingClientRect().height;
	  let computedStyle = getComputedStyleX(elem);
	  let isBorderBox = isBorderBoxFn(elem, computedStyle);
	  let cssBoxValue = 0;
	  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
	    borderBoxValue = undefined;
	    // Fall back to computed then un computed css if necessary
	    cssBoxValue = getComputedStyleX(elem, name);
	    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
	      cssBoxValue = elem.style[name] || 0;
	    }
	    // Normalize '', auto, and prepare for extra
	    cssBoxValue = parseFloat(cssBoxValue) || 0;
	  }
	  if (extra === undefined) {
	    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
	  }
	  let borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
	  let val = borderBoxValue || cssBoxValue;
	  if (extra === CONTENT_INDEX) {
	    if (borderBoxValueOrIsBorderBox) {
	      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
	    }
	    return cssBoxValue;
	  } else if (borderBoxValueOrIsBorderBox) {
	    if (extra === BORDER_INDEX) {
	      return val;
	    }
	    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle));
	  }
	  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
            }

            let cssShow = {
	  position: 'absolute',
	  visibility: 'hidden',
	  display: 'block'
            };

            // fix #119 : https://github.com/kissyteam/kissy/issues/119
            function getWHIgnoreDisplay() {
	  for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
	    args[_key2] = arguments[_key2];
	  }

	  let val = void 0;
	  let elem = args[0];
	  // in case elem is window
	  // elem.offsetWidth === undefined
	  if (elem.offsetWidth !== 0) {
	    val = getWH.apply(undefined, args);
	  } else {
	    swap(elem, cssShow, function () {
	      val = getWH.apply(undefined, args);
	    });
	  }
	  return val;
            }

            each(['width', 'height'], function (name) {
	  let first = name.charAt(0).toUpperCase() + name.slice(1);
	  domUtils['outer' + first] = function (el, includeMargin) {
	    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
	  };
	  let which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

	  domUtils[name] = function (elem, v) {
	    let val = v;
	    if (val !== undefined) {
	      if (elem) {
	        let computedStyle = getComputedStyleX(elem);
	        let isBorderBox = isBorderBoxFn(elem);
	        if (isBorderBox) {
	          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
	        }
	        return css(elem, name, val);
	      }
	      return undefined;
	    }
	    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
	  };
            });

            function mix(to, from) {
	  for (let i in from) {
	    if (from.hasOwnProperty(i)) {
	      to[i] = from[i];
	    }
	  }
	  return to;
            }

            var utils = {
	  getWindow: function getWindow(node) {
	    if (node && node.document && node.setTimeout) {
	      return node;
	    }
	    let doc = node.ownerDocument || node;
	    return doc.defaultView || doc.parentWindow;
	  },

	  getDocument: getDocument,
	  offset: function offset(el, value, option) {
	    if (typeof value !== 'undefined') {
	      setOffset(el, value, option || {});
	    } else {
	      return getOffset(el);
	    }
	  },

	  isWindow: isWindow,
	  each: each,
	  css: css,
	  clone: function clone(obj) {
	    let i = void 0;
	    let ret = {};
	    for (i in obj) {
	      if (obj.hasOwnProperty(i)) {
	        ret[i] = obj[i];
	      }
	    }
	    let overflow = obj.overflow;
	    if (overflow) {
	      for (i in obj) {
	        if (obj.hasOwnProperty(i)) {
	          ret.overflow[i] = obj.overflow[i];
	        }
	      }
	    }
	    return ret;
	  },

	  mix: mix,
	  getWindowScrollLeft: function getWindowScrollLeft(w) {
	    return getScrollLeft(w);
	  },
	  getWindowScrollTop: function getWindowScrollTop(w) {
	    return getScrollTop(w);
	  },
	  merge: function merge() {
	    let ret = {};

	    for (var _len2 = arguments.length, args = Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
	      args[_key3] = arguments[_key3];
	    }

	    for (let i = 0; i < args.length; i++) {
	      utils.mix(ret, args[i]);
	    }
	    return ret;
	  },

	  viewportWidth: 0,
	  viewportHeight: 0
            };

            mix(utils, domUtils);

            exports['default'] = utils;
            module.exports = exports['default'];

            /***/ },
        /* 127 */
        /***/ function(module, exports) {

            'use strict';

            Object.defineProperty(exports, '__esModule', {
	  value: true
            });
            exports.getTransformName = getTransformName;
            exports.setTransitionProperty = setTransitionProperty;
            exports.getTransitionProperty = getTransitionProperty;
            exports.getTransformXY = getTransformXY;
            exports.setTransformXY = setTransformXY;
            let vendorPrefix = void 0;

            let jsCssMap = {
	  Webkit: '-webkit-',
	  Moz: '-moz-',
	  // IE did it wrong again ...
	  ms: '-ms-',
	  O: '-o-'
            };

            function getVendorPrefix() {
	  if (vendorPrefix !== undefined) {
	    return vendorPrefix;
	  }
	  vendorPrefix = '';
	  let style = document.createElement('p').style;
	  let testProp = 'Transform';
	  for (let key in jsCssMap) {
	    if (key + testProp in style) {
	      vendorPrefix = key;
	    }
	  }
	  return vendorPrefix;
            }

            function getTransitionName() {
	  return getVendorPrefix() ? getVendorPrefix() + 'TransitionProperty' : 'transitionProperty';
            }

            function getTransformName() {
	  return getVendorPrefix() ? getVendorPrefix() + 'Transform' : 'transform';
            }

            function setTransitionProperty(node, value) {
	  let name = getTransitionName();
	  if (name) {
	    node.style[name] = value;
	    if (name !== 'transitionProperty') {
	      node.style.transitionProperty = value;
	    }
	  }
            }

            function setTransform(node, value) {
	  let name = getTransformName();
	  if (name) {
	    node.style[name] = value;
	    if (name !== 'transform') {
	      node.style.transform = value;
	    }
	  }
            }

            function getTransitionProperty(node) {
	  return node.style.transitionProperty || node.style[getTransitionName()];
            }

            function getTransformXY(node) {
	  let style = window.getComputedStyle(node, null);
	  let transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
	  if (transform && transform !== 'none') {
	    let matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
	    return { x: parseFloat(matrix[12] || matrix[4], 0), y: parseFloat(matrix[13] || matrix[5], 0) };
	  }
	  return {
	    x: 0,
	    y: 0
	  };
            }

            let matrix2d = /matrix\((.*)\)/;
            let matrix3d = /matrix3d\((.*)\)/;

            function setTransformXY(node, xy) {
	  let style = window.getComputedStyle(node, null);
	  let transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
	  if (transform && transform !== 'none') {
	    let arr = void 0;
	    let match2d = transform.match(matrix2d);
	    if (match2d) {
	      match2d = match2d[1];
	      arr = match2d.split(',').map(function (item) {
	        return parseFloat(item, 10);
	      });
	      arr[4] = xy.x;
	      arr[5] = xy.y;
	      setTransform(node, 'matrix(' + arr.join(',') + ')');
	    } else {
	      let match3d = transform.match(matrix3d)[1];
	      arr = match3d.split(',').map(function (item) {
	        return parseFloat(item, 10);
	      });
	      arr[12] = xy.x;
	      arr[13] = xy.y;
	      setTransform(node, 'matrix3d(' + arr.join(',') + ')');
	    }
	  } else {
	    setTransform(node, 'translateX(' + xy.x + 'px) translateY(' + xy.y + 'px) translateZ(0)');
	  }
            }

            /***/ },
        /* 128 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            Object.defineProperty(exports, '__esModule', {
	  value: true
            });

            let _utils = __webpack_require__(126);

            let _utils2 = _interopRequireDefault(_utils);

            let _getOffsetParent = __webpack_require__(129);

            let _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);

            let _isAncestorFixed = __webpack_require__(130);

            let _isAncestorFixed2 = _interopRequireDefault(_isAncestorFixed);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

            /**
	 * 获得元素的显示部分的区域
	 */
            function getVisibleRectForElement(element) {
	  let visibleRect = {
	    left: 0,
	    right: Infinity,
	    top: 0,
	    bottom: Infinity
	  };
	  let el = (0, _getOffsetParent2['default'])(element);
	  let doc = _utils2['default'].getDocument(element);
	  let win = doc.defaultView || doc.parentWindow;
	  let body = doc.body;
	  let documentElement = doc.documentElement;

	  // Determine the size of the visible rect by climbing the dom accounting for
	  // all scrollable containers.
	  while (el) {
	    // clientWidth is zero for inline block elements in ie.
	    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) &&
	    // body may have overflow set on it, yet we still get the entire
	    // viewport. In some browsers, el.offsetParent may be
	    // document.documentElement, so check for that too.
	    el !== body && el !== documentElement && _utils2['default'].css(el, 'overflow') !== 'visible') {
	      let pos = _utils2['default'].offset(el);
	      // add border
	      pos.left += el.clientLeft;
	      pos.top += el.clientTop;
	      visibleRect.top = Math.max(visibleRect.top, pos.top);
	      visibleRect.right = Math.min(visibleRect.right,
	      // consider area without scrollBar
	      pos.left + el.clientWidth);
	      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
	      visibleRect.left = Math.max(visibleRect.left, pos.left);
	    } else if (el === body || el === documentElement) {
	      break;
	    }
	    el = (0, _getOffsetParent2['default'])(el);
	  }

	  // Set element position to fixed
	  // make sure absolute element itself don't affect it's visible area
	  // https://github.com/ant-design/ant-design/issues/7601
	  let originalPosition = null;
	  if (!_utils2['default'].isWindow(element) && element.nodeType !== 9) {
	    originalPosition = element.style.position;
	    let position = _utils2['default'].css(element, 'position');
	    if (position === 'absolute') {
	      element.style.position = 'fixed';
	    }
	  }

	  let scrollX = _utils2['default'].getWindowScrollLeft(win);
	  let scrollY = _utils2['default'].getWindowScrollTop(win);
	  let viewportWidth = _utils2['default'].viewportWidth(win);
	  let viewportHeight = _utils2['default'].viewportHeight(win);
	  let documentWidth = documentElement.scrollWidth;
	  let documentHeight = documentElement.scrollHeight;

	  // Reset element position after calculate the visible area
	  if (element.style) {
	    element.style.position = originalPosition;
	  }

	  if ((0, _isAncestorFixed2['default'])(element)) {
	    // Clip by viewport's size.
	    visibleRect.left = Math.max(visibleRect.left, scrollX);
	    visibleRect.top = Math.max(visibleRect.top, scrollY);
	    visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
	    visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
	  } else {
	    // Clip by document's size.
	    let maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
	    visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);

	    let maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
	    visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
	  }

	  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
            }

            exports['default'] = getVisibleRectForElement;
            module.exports = exports['default'];

            /***/ },
        /* 129 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            Object.defineProperty(exports, '__esModule', {
	  value: true
            });

            let _utils = __webpack_require__(126);

            let _utils2 = _interopRequireDefault(_utils);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

            /**
	 * 得到会导致元素显示不全的祖先元素
	 */

            function getOffsetParent(element) {
	  if (_utils2['default'].isWindow(element) || element.nodeType === 9) {
	    return null;
	  }
	  // ie 这个也不是完全可行
	  /*
	   <div style="width: 50px;height: 100px;overflow: hidden">
	   <div style="width: 50px;height: 100px;position: relative;" id="d6">
	   元素 6 高 100px 宽 50px<br/>
	   </div>
	   </div>
	   */
	  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
	  //  In other browsers it only includes elements with position absolute, relative or
	  // fixed, not elements with overflow set to auto or scroll.
	  //        if (UA.ie && ieMode < 8) {
	  //            return element.offsetParent;
	  //        }
	  // 统一的 offsetParent 方法
	  let doc = _utils2['default'].getDocument(element);
	  let body = doc.body;
	  let parent = void 0;
	  let positionStyle = _utils2['default'].css(element, 'position');
	  let skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';

	  if (!skipStatic) {
	    return element.nodeName.toLowerCase() === 'html' ? null : element.parentNode;
	  }

	  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
	    positionStyle = _utils2['default'].css(parent, 'position');
	    if (positionStyle !== 'static') {
	      return parent;
	    }
	  }
	  return null;
            }

            exports['default'] = getOffsetParent;
            module.exports = exports['default'];

            /***/ },
        /* 130 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            Object.defineProperty(exports, '__esModule', {
	  value: true
            });
            exports['default'] = isAncestorFixed;

            let _utils = __webpack_require__(126);

            let _utils2 = _interopRequireDefault(_utils);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

            function isAncestorFixed(element) {
	  if (_utils2['default'].isWindow(element) || element.nodeType === 9) {
	    return false;
	  }

	  let doc = _utils2['default'].getDocument(element);
	  let body = doc.body;
	  let parent = null;
	  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
	    let positionStyle = _utils2['default'].css(parent, 'position');
	    if (positionStyle === 'fixed') {
	      return true;
	    }
	  }
	  return false;
            }
            module.exports = exports['default'];

            /***/ },
        /* 131 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            Object.defineProperty(exports, '__esModule', {
	  value: true
            });

            let _utils = __webpack_require__(126);

            let _utils2 = _interopRequireDefault(_utils);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

            function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
	  let pos = _utils2['default'].clone(elFuturePos);
	  let size = {
	    width: elRegion.width,
	    height: elRegion.height
	  };

	  if (overflow.adjustX && pos.left < visibleRect.left) {
	    pos.left = visibleRect.left;
	  }

	  // Left edge inside and right edge outside viewport, try to resize it.
	  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
	    size.width -= pos.left + size.width - visibleRect.right;
	  }

	  // Right edge outside viewport, try to move it.
	  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
	    // 保证左边界和可视区域左边界对齐
	    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
	  }

	  // Top edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top < visibleRect.top) {
	    pos.top = visibleRect.top;
	  }

	  // Top edge inside and bottom edge outside viewport, try to resize it.
	  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
	    size.height -= pos.top + size.height - visibleRect.bottom;
	  }

	  // Bottom edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
	    // 保证上边界和可视区域上边界对齐
	    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
	  }

	  return _utils2['default'].mix(pos, size);
            }

            exports['default'] = adjustForViewport;
            module.exports = exports['default'];

            /***/ },
        /* 132 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            Object.defineProperty(exports, '__esModule', {
	  value: true
            });

            let _utils = __webpack_require__(126);

            let _utils2 = _interopRequireDefault(_utils);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

            function getRegion(node) {
	  let offset = void 0;
	  let w = void 0;
	  let h = void 0;
	  if (!_utils2['default'].isWindow(node) && node.nodeType !== 9) {
	    offset = _utils2['default'].offset(node);
	    w = _utils2['default'].outerWidth(node);
	    h = _utils2['default'].outerHeight(node);
	  } else {
	    let win = _utils2['default'].getWindow(node);
	    offset = {
	      left: _utils2['default'].getWindowScrollLeft(win),
	      top: _utils2['default'].getWindowScrollTop(win)
	    };
	    w = _utils2['default'].viewportWidth(win);
	    h = _utils2['default'].viewportHeight(win);
	  }
	  offset.width = w;
	  offset.height = h;
	  return offset;
            }

            exports['default'] = getRegion;
            module.exports = exports['default'];

            /***/ },
        /* 133 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            Object.defineProperty(exports, '__esModule', {
	  value: true
            });

            let _getAlignOffset = __webpack_require__(134);

            let _getAlignOffset2 = _interopRequireDefault(_getAlignOffset);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

            function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
	  let p1 = (0, _getAlignOffset2['default'])(refNodeRegion, points[1]);
	  let p2 = (0, _getAlignOffset2['default'])(elRegion, points[0]);
	  let diff = [p2.left - p1.left, p2.top - p1.top];

	  return {
	    left: elRegion.left - diff[0] + offset[0] - targetOffset[0],
	    top: elRegion.top - diff[1] + offset[1] - targetOffset[1]
	  };
            }

            exports['default'] = getElFuturePos;
            module.exports = exports['default'];

            /***/ },
        /* 134 */
        /***/ function(module, exports) {

            'use strict';

            Object.defineProperty(exports, '__esModule', {
	  value: true
            });
            /**
	 * 获取 node 上的 align 对齐点 相对于页面的坐标
	 */

            function getAlignOffset(region, align) {
	  let V = align.charAt(0);
	  let H = align.charAt(1);
	  let w = region.width;
	  let h = region.height;

	  let x = region.left;
	  let y = region.top;

	  if (V === 'c') {
	    y += h / 2;
	  } else if (V === 'b') {
	    y += h;
	  }

	  if (H === 'c') {
	    x += w / 2;
	  } else if (H === 'r') {
	    x += w;
	  }

	  return {
	    left: x,
	    top: y
	  };
            }

            exports['default'] = getAlignOffset;
            module.exports = exports['default'];

            /***/ },
        /* 135 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            Object.defineProperty(exports, '__esModule', {
	  value: true
            });

            let _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { let source = arguments[i]; for (let key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

            let _utils = __webpack_require__(126);

            let _utils2 = _interopRequireDefault(_utils);

            let _align = __webpack_require__(125);

            let _align2 = _interopRequireDefault(_align);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

            /**
	 * `tgtPoint`: { pageX, pageY } or { clientX, clientY }.
	 * If client position provided, will internal convert to page position.
	 */

            function alignPoint(el, tgtPoint, align) {
	  let pageX = void 0;
	  let pageY = void 0;

	  let doc = _utils2['default'].getDocument(el);
	  let win = doc.defaultView || doc.parentWindow;

	  let scrollX = _utils2['default'].getWindowScrollLeft(win);
	  let scrollY = _utils2['default'].getWindowScrollTop(win);
	  let viewportWidth = _utils2['default'].viewportWidth(win);
	  let viewportHeight = _utils2['default'].viewportHeight(win);

	  if ('pageX' in tgtPoint) {
	    pageX = tgtPoint.pageX;
	  } else {
	    pageX = scrollX + tgtPoint.clientX;
	  }

	  if ('pageY' in tgtPoint) {
	    pageY = tgtPoint.pageY;
	  } else {
	    pageY = scrollY + tgtPoint.clientY;
	  }

	  let tgtRegion = {
	    left: pageX,
	    top: pageY,
	    width: 0,
	    height: 0
	  };

	  let pointInView = pageX >= 0 && pageX <= scrollX + viewportWidth && pageY >= 0 && pageY <= scrollY + viewportHeight;

	  // Provide default target point
	  let points = [align.points[0], 'cc'];

	  return (0, _align2['default'])(el, tgtRegion, _extends({}, align, { points: points }), pointInView);
            }

            exports['default'] = alignPoint;
            module.exports = exports['default'];

            /***/ },
        /* 136 */
        /***/ function(module, exports) {

            'use strict';

            exports.__esModule = true;
            exports.buffer = buffer;
            exports.isSamePoint = isSamePoint;
            exports.isWindow = isWindow;
            function buffer(fn, ms) {
	  let timer = void 0;

	  function clear() {
	    if (timer) {
	      clearTimeout(timer);
	      timer = null;
	    }
	  }

	  function bufferFn() {
	    clear();
	    timer = setTimeout(fn, ms);
	  }

	  bufferFn.clear = clear;

	  return bufferFn;
            }

            function isSamePoint(prev, next) {
	  if (prev === next) {return true;}
	  if (!prev || !next) {return false;}

	  if ('pageX' in next && 'pageY' in next) {
	    return prev.pageX === next.pageX && prev.pageY === next.pageY;
	  }

	  if ('clientX' in next && 'clientY' in next) {
	    return prev.clientX === next.clientX && prev.clientY === next.clientY;
	  }

	  return false;
            }

            function isWindow(obj) {
	  return obj && typeof obj === 'object' && obj.window === obj;
            }

            /***/ },
        /* 137 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            Object.defineProperty(exports, '__esModule', {
	  value: true
            });

            let _extends2 = __webpack_require__(28);

            let _extends3 = _interopRequireDefault(_extends2);

            let _defineProperty2 = __webpack_require__(138);

            let _defineProperty3 = _interopRequireDefault(_defineProperty2);

            let _classCallCheck2 = __webpack_require__(68);

            let _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

            let _createClass2 = __webpack_require__(114);

            let _createClass3 = _interopRequireDefault(_createClass2);

            let _possibleConstructorReturn2 = __webpack_require__(69);

            let _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

            let _inherits2 = __webpack_require__(103);

            let _inherits3 = _interopRequireDefault(_inherits2);

            let _react = __webpack_require__(10);

            let _react2 = _interopRequireDefault(_react);

            let _propTypes = __webpack_require__(3);

            let _propTypes2 = _interopRequireDefault(_propTypes);

            let _ChildrenUtils = __webpack_require__(139);

            let _AnimateChild = __webpack_require__(140);

            let _AnimateChild2 = _interopRequireDefault(_AnimateChild);

            let _animate = __webpack_require__(145);

            let _animate2 = _interopRequireDefault(_animate);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

            let defaultKey = 'rc_animate_' + Date.now();

            function getChildrenFromProps(props) {
	  let children = props.children;
	  if (_react2['default'].isValidElement(children)) {
	    if (!children.key) {
	      return _react2['default'].cloneElement(children, {
	        key: defaultKey
	      });
	    }
	  }
	  return children;
            }

            function noop() {}

            let Animate = function (_React$Component) {
	  (0, _inherits3['default'])(Animate, _React$Component);

	  // eslint-disable-line

	  function Animate(props) {
	    (0, _classCallCheck3['default'])(this, Animate);

	    let _this = (0, _possibleConstructorReturn3['default'])(this, (Animate.__proto__ || Object.getPrototypeOf(Animate)).call(this, props));

	    _initialiseProps.call(_this);

	    _this.currentlyAnimatingKeys = {};
	    _this.keysToEnter = [];
	    _this.keysToLeave = [];

	    _this.state = {
	      children: (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props))
	    };

	    _this.childrenRefs = {};
	    return _this;
	  }

	  (0, _createClass3['default'])(Animate, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      let _this2 = this;

	      let showProp = this.props.showProp;
	      let children = this.state.children;
	      if (showProp) {
	        children = children.filter(function (child) {
	          return !!child.props[showProp];
	        });
	      }
	      children.forEach(function (child) {
	        if (child) {
	          _this2.performAppear(child.key);
	        }
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      let _this3 = this;

	      this.nextProps = nextProps;
	      let nextChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(nextProps));
	      let props = this.props;
	      // exclusive needs immediate response
	      if (props.exclusive) {
	        Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
	          _this3.stop(key);
	        });
	      }
	      let showProp = props.showProp;
	      let currentlyAnimatingKeys = this.currentlyAnimatingKeys;
	      // last props children if exclusive
	      let currentChildren = props.exclusive ? (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props)) : this.state.children;
	      // in case destroy in showProp mode
	      let newChildren = [];
	      if (showProp) {
	        currentChildren.forEach(function (currentChild) {
	          let nextChild = currentChild && (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, currentChild.key);
	          let newChild = void 0;
	          if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
	            newChild = _react2['default'].cloneElement(nextChild || currentChild, (0, _defineProperty3['default'])({}, showProp, true));
	          } else {
	            newChild = nextChild;
	          }
	          if (newChild) {
	            newChildren.push(newChild);
	          }
	        });
	        nextChildren.forEach(function (nextChild) {
	          if (!nextChild || !(0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, nextChild.key)) {
	            newChildren.push(nextChild);
	          }
	        });
	      } else {
	        newChildren = (0, _ChildrenUtils.mergeChildren)(currentChildren, nextChildren);
	      }

	      // need render to avoid update
	      this.setState({
	        children: newChildren
	      });

	      nextChildren.forEach(function (child) {
	        let key = child && child.key;
	        if (child && currentlyAnimatingKeys[key]) {
	          return;
	        }
	        let hasPrev = child && (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	        if (showProp) {
	          let showInNext = child.props[showProp];
	          if (hasPrev) {
	            let showInNow = (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	            if (!showInNow && showInNext) {
	              _this3.keysToEnter.push(key);
	            }
	          } else if (showInNext) {
	            _this3.keysToEnter.push(key);
	          }
	        } else if (!hasPrev) {
	          _this3.keysToEnter.push(key);
	        }
	      });

	      currentChildren.forEach(function (child) {
	        let key = child && child.key;
	        if (child && currentlyAnimatingKeys[key]) {
	          return;
	        }
	        let hasNext = child && (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, key);
	        if (showProp) {
	          let showInNow = child.props[showProp];
	          if (hasNext) {
	            let showInNext = (0, _ChildrenUtils.findShownChildInChildrenByKey)(nextChildren, key, showProp);
	            if (!showInNext && showInNow) {
	              _this3.keysToLeave.push(key);
	            }
	          } else if (showInNow) {
	            _this3.keysToLeave.push(key);
	          }
	        } else if (!hasNext) {
	          _this3.keysToLeave.push(key);
	        }
	      });
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      let keysToEnter = this.keysToEnter;
	      this.keysToEnter = [];
	      keysToEnter.forEach(this.performEnter);
	      let keysToLeave = this.keysToLeave;
	      this.keysToLeave = [];
	      keysToLeave.forEach(this.performLeave);
	    }
	  }, {
	    key: 'isValidChildByKey',
	    value: function isValidChildByKey(currentChildren, key) {
	      let showProp = this.props.showProp;
	      if (showProp) {
	        return (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	      }
	      return (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	    }
	  }, {
	    key: 'stop',
	    value: function stop(key) {
	      delete this.currentlyAnimatingKeys[key];
	      let component = this.childrenRefs[key];
	      if (component) {
	        component.stop();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      let _this4 = this;

	      let props = this.props;
	      this.nextProps = props;
	      let stateChildren = this.state.children;
	      let children = null;
	      if (stateChildren) {
	        children = stateChildren.map(function (child) {
	          if (child === null || child === undefined) {
	            return child;
	          }
	          if (!child.key) {
	            throw new Error('must set key for <rc-animate> children');
	          }
	          return _react2['default'].createElement(
	            _AnimateChild2['default'],
	            {
	              key: child.key,
	              ref: function ref(node) {
	                _this4.childrenRefs[child.key] = node;
	              },
	              animation: props.animation,
	              transitionName: props.transitionName,
	              transitionEnter: props.transitionEnter,
	              transitionAppear: props.transitionAppear,
	              transitionLeave: props.transitionLeave
	            },
	            child
	          );
	        });
	      }
	      let Component = props.component;
	      if (Component) {
	        let passedProps = props;
	        if (typeof Component === 'string') {
	          passedProps = (0, _extends3['default'])({
	            className: props.className,
	            style: props.style
	          }, props.componentProps);
	        }
	        return _react2['default'].createElement(
	          Component,
	          passedProps,
	          children
	        );
	      }
	      return children[0] || null;
	    }
	  }]);
	  return Animate;
            }(_react2['default'].Component);

            Animate.isAnimate = true;
            Animate.propTypes = {
	  component: _propTypes2['default'].any,
	  componentProps: _propTypes2['default'].object,
	  animation: _propTypes2['default'].object,
	  transitionName: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].object]),
	  transitionEnter: _propTypes2['default'].bool,
	  transitionAppear: _propTypes2['default'].bool,
	  exclusive: _propTypes2['default'].bool,
	  transitionLeave: _propTypes2['default'].bool,
	  onEnd: _propTypes2['default'].func,
	  onEnter: _propTypes2['default'].func,
	  onLeave: _propTypes2['default'].func,
	  onAppear: _propTypes2['default'].func,
	  showProp: _propTypes2['default'].string,
	  children: _propTypes2['default'].node
            };
            Animate.defaultProps = {
	  animation: {},
	  component: 'span',
	  componentProps: {},
	  transitionEnter: true,
	  transitionLeave: true,
	  transitionAppear: false,
	  onEnd: noop,
	  onEnter: noop,
	  onLeave: noop,
	  onAppear: noop
            };

            var _initialiseProps = function _initialiseProps() {
	  let _this5 = this;

	  this.performEnter = function (key) {
	    // may already remove by exclusive
	    if (_this5.childrenRefs[key]) {
	      _this5.currentlyAnimatingKeys[key] = true;
	      _this5.childrenRefs[key].componentWillEnter(_this5.handleDoneAdding.bind(_this5, key, 'enter'));
	    }
	  };

	  this.performAppear = function (key) {
	    if (_this5.childrenRefs[key]) {
	      _this5.currentlyAnimatingKeys[key] = true;
	      _this5.childrenRefs[key].componentWillAppear(_this5.handleDoneAdding.bind(_this5, key, 'appear'));
	    }
	  };

	  this.handleDoneAdding = function (key, type) {
	    let props = _this5.props;
	    delete _this5.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== _this5.nextProps) {
	      return;
	    }
	    let currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    if (!_this5.isValidChildByKey(currentChildren, key)) {
	      // exclusive will not need this
	      _this5.performLeave(key);
	    } else if (type === 'appear') {
	      if (_animate2['default'].allowAppearCallback(props)) {
	        props.onAppear(key);
	        props.onEnd(key, true);
	      }
	    } else if (_animate2['default'].allowEnterCallback(props)) {
	      props.onEnter(key);
	      props.onEnd(key, true);
	    }
	  };

	  this.performLeave = function (key) {
	    // may already remove by exclusive
	    if (_this5.childrenRefs[key]) {
	      _this5.currentlyAnimatingKeys[key] = true;
	      _this5.childrenRefs[key].componentWillLeave(_this5.handleDoneLeaving.bind(_this5, key));
	    }
	  };

	  this.handleDoneLeaving = function (key) {
	    let props = _this5.props;
	    delete _this5.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== _this5.nextProps) {
	      return;
	    }
	    let currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    // in case state change is too fast
	    if (_this5.isValidChildByKey(currentChildren, key)) {
	      _this5.performEnter(key);
	    } else {
	      let end = function end() {
	        if (_animate2['default'].allowLeaveCallback(props)) {
	          props.onLeave(key);
	          props.onEnd(key, false);
	        }
	      };
	      if (!(0, _ChildrenUtils.isSameChildren)(_this5.state.children, currentChildren, props.showProp)) {
	        _this5.setState({
	          children: currentChildren
	        }, end);
	      } else {
	        end();
	      }
	    }
	  };
            };

            exports['default'] = Animate;
            module.exports = exports['default'];

            /***/ },
        /* 138 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            exports.__esModule = true;

            let _defineProperty = __webpack_require__(115);

            let _defineProperty2 = _interopRequireDefault(_defineProperty);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

            exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
            };

            /***/ },
        /* 139 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            Object.defineProperty(exports, '__esModule', {
	  value: true
            });
            exports.toArrayChildren = toArrayChildren;
            exports.findChildInChildrenByKey = findChildInChildrenByKey;
            exports.findShownChildInChildrenByKey = findShownChildInChildrenByKey;
            exports.findHiddenChildInChildrenByKey = findHiddenChildInChildrenByKey;
            exports.isSameChildren = isSameChildren;
            exports.mergeChildren = mergeChildren;

            let _react = __webpack_require__(10);

            let _react2 = _interopRequireDefault(_react);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

            function toArrayChildren(children) {
	  let ret = [];
	  _react2['default'].Children.forEach(children, function (child) {
	    ret.push(child);
	  });
	  return ret;
            }

            function findChildInChildrenByKey(children, key) {
	  let ret = null;
	  if (children) {
	    children.forEach(function (child) {
	      if (ret) {
	        return;
	      }
	      if (child && child.key === key) {
	        ret = child;
	      }
	    });
	  }
	  return ret;
            }

            function findShownChildInChildrenByKey(children, key, showProp) {
	  let ret = null;
	  if (children) {
	    children.forEach(function (child) {
	      if (child && child.key === key && child.props[showProp]) {
	        if (ret) {
	          throw new Error('two child with same key for <rc-animate> children');
	        }
	        ret = child;
	      }
	    });
	  }
	  return ret;
            }

            function findHiddenChildInChildrenByKey(children, key, showProp) {
	  let found = 0;
	  if (children) {
	    children.forEach(function (child) {
	      if (found) {
	        return;
	      }
	      found = child && child.key === key && !child.props[showProp];
	    });
	  }
	  return found;
            }

            function isSameChildren(c1, c2, showProp) {
	  let same = c1.length === c2.length;
	  if (same) {
	    c1.forEach(function (child, index) {
	      let child2 = c2[index];
	      if (child && child2) {
	        if (child && !child2 || !child && child2) {
	          same = false;
	        } else if (child.key !== child2.key) {
	          same = false;
	        } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
	          same = false;
	        }
	      }
	    });
	  }
	  return same;
            }

            function mergeChildren(prev, next) {
	  let ret = [];

	  // For each key of `next`, the list of keys to insert before that key in
	  // the combined list
	  let nextChildrenPending = {};
	  let pendingChildren = [];
	  prev.forEach(function (child) {
	    if (child && findChildInChildrenByKey(next, child.key)) {
	      if (pendingChildren.length) {
	        nextChildrenPending[child.key] = pendingChildren;
	        pendingChildren = [];
	      }
	    } else {
	      pendingChildren.push(child);
	    }
	  });

	  next.forEach(function (child) {
	    if (child && Object.prototype.hasOwnProperty.call(nextChildrenPending, child.key)) {
	      ret = ret.concat(nextChildrenPending[child.key]);
	    }
	    ret.push(child);
	  });

	  ret = ret.concat(pendingChildren);

	  return ret;
            }

            /***/ },
        /* 140 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            Object.defineProperty(exports, '__esModule', {
	  value: true
            });

            let _classCallCheck2 = __webpack_require__(68);

            let _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

            let _createClass2 = __webpack_require__(114);

            let _createClass3 = _interopRequireDefault(_createClass2);

            let _possibleConstructorReturn2 = __webpack_require__(69);

            let _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

            let _inherits2 = __webpack_require__(103);

            let _inherits3 = _interopRequireDefault(_inherits2);

            let _react = __webpack_require__(10);

            let _react2 = _interopRequireDefault(_react);

            let _reactDom = __webpack_require__(17);

            let _reactDom2 = _interopRequireDefault(_reactDom);

            let _propTypes = __webpack_require__(3);

            let _propTypes2 = _interopRequireDefault(_propTypes);

            let _cssAnimation = __webpack_require__(141);

            let _cssAnimation2 = _interopRequireDefault(_cssAnimation);

            let _animate = __webpack_require__(145);

            let _animate2 = _interopRequireDefault(_animate);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

            let transitionMap = {
	  enter: 'transitionEnter',
	  appear: 'transitionAppear',
	  leave: 'transitionLeave'
            };

            let AnimateChild = function (_React$Component) {
	  (0, _inherits3['default'])(AnimateChild, _React$Component);

	  function AnimateChild() {
	    (0, _classCallCheck3['default'])(this, AnimateChild);
	    return (0, _possibleConstructorReturn3['default'])(this, (AnimateChild.__proto__ || Object.getPrototypeOf(AnimateChild)).apply(this, arguments));
	  }

	  (0, _createClass3['default'])(AnimateChild, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.stop();
	    }
	  }, {
	    key: 'componentWillEnter',
	    value: function componentWillEnter(done) {
	      if (_animate2['default'].isEnterSupported(this.props)) {
	        this.transition('enter', done);
	      } else {
	        done();
	      }
	    }
	  }, {
	    key: 'componentWillAppear',
	    value: function componentWillAppear(done) {
	      if (_animate2['default'].isAppearSupported(this.props)) {
	        this.transition('appear', done);
	      } else {
	        done();
	      }
	    }
	  }, {
	    key: 'componentWillLeave',
	    value: function componentWillLeave(done) {
	      if (_animate2['default'].isLeaveSupported(this.props)) {
	        this.transition('leave', done);
	      } else {
	        // always sync, do not interupt with react component life cycle
	        // update hidden -> animate hidden ->
	        // didUpdate -> animate leave -> unmount (if animate is none)
	        done();
	      }
	    }
	  }, {
	    key: 'transition',
	    value: function transition(animationType, finishCallback) {
	      let _this2 = this;

	      let node = _reactDom2['default'].findDOMNode(this);
	      let props = this.props;
	      let transitionName = props.transitionName;
	      let nameIsObj = typeof transitionName === 'object';
	      this.stop();
	      let end = function end() {
	        _this2.stopper = null;
	        finishCallback();
	      };
	      if ((_cssAnimation.isCssAnimationSupported || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
	        let name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
	        let activeName = name + '-active';
	        if (nameIsObj && transitionName[animationType + 'Active']) {
	          activeName = transitionName[animationType + 'Active'];
	        }
	        this.stopper = (0, _cssAnimation2['default'])(node, {
	          name: name,
	          active: activeName
	        }, end);
	      } else {
	        this.stopper = props.animation[animationType](node, end);
	      }
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      let stopper = this.stopper;
	      if (stopper) {
	        this.stopper = null;
	        stopper.stop();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.children;
	    }
	  }]);
	  return AnimateChild;
            }(_react2['default'].Component);

            AnimateChild.propTypes = {
	  children: _propTypes2['default'].any
            };
            exports['default'] = AnimateChild;
            module.exports = exports['default'];

            /***/ },
        /* 141 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            Object.defineProperty(exports, '__esModule', {
	  value: true
            });
            exports.isCssAnimationSupported = undefined;

            let _typeof2 = __webpack_require__(70);

            let _typeof3 = _interopRequireDefault(_typeof2);

            let _Event = __webpack_require__(142);

            let _Event2 = _interopRequireDefault(_Event);

            let _componentClasses = __webpack_require__(143);

            let _componentClasses2 = _interopRequireDefault(_componentClasses);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

            let isCssAnimationSupported = _Event2['default'].endEvents.length !== 0;
            let capitalPrefixes = ['Webkit', 'Moz', 'O',
                // ms is special .... !
                'ms'];
            let prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];

            function getStyleProperty(node, name) {
	  // old ff need null, https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
	  let style = window.getComputedStyle(node, null);
	  let ret = '';
	  for (let i = 0; i < prefixes.length; i++) {
	    ret = style.getPropertyValue(prefixes[i] + name);
	    if (ret) {
	      break;
	    }
	  }
	  return ret;
            }

            function fixBrowserByTimeout(node) {
	  if (isCssAnimationSupported) {
	    let transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
	    let transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
	    let animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
	    let animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
	    let time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
	    // sometimes, browser bug
	    node.rcEndAnimTimeout = setTimeout(function () {
	      node.rcEndAnimTimeout = null;
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }, time * 1000 + 200);
	  }
            }

            function clearBrowserBugTimeout(node) {
	  if (node.rcEndAnimTimeout) {
	    clearTimeout(node.rcEndAnimTimeout);
	    node.rcEndAnimTimeout = null;
	  }
            }

            let cssAnimation = function cssAnimation(node, transitionName, endCallback) {
	  let nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : (0, _typeof3['default'])(transitionName)) === 'object';
	  let className = nameIsObj ? transitionName.name : transitionName;
	  let activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
	  let end = endCallback;
	  let start = void 0;
	  let active = void 0;
	  let nodeClasses = (0, _componentClasses2['default'])(node);

	  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
	    end = endCallback.end;
	    start = endCallback.start;
	    active = endCallback.active;
	  }

	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }

	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }

	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }

	    clearBrowserBugTimeout(node);

	    nodeClasses.remove(className);
	    nodeClasses.remove(activeClassName);

	    _Event2['default'].removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;

	    // Usually this optional end is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (end) {
	      end();
	    }
	  };

	  _Event2['default'].addEndEventListener(node, node.rcEndListener);

	  if (start) {
	    start();
	  }
	  nodeClasses.add(className);

	  node.rcAnimTimeout = setTimeout(function () {
	    node.rcAnimTimeout = null;
	    nodeClasses.add(activeClassName);
	    if (active) {
	      setTimeout(active, 0);
	    }
	    fixBrowserByTimeout(node);
	    // 30ms for firefox
	  }, 30);

	  return {
	    stop: function stop() {
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }
	  };
            };

            cssAnimation.style = function (node, style, callback) {
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }

	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }

	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }

	    clearBrowserBugTimeout(node);

	    _Event2['default'].removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;

	    // Usually this optional callback is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (callback) {
	      callback();
	    }
	  };

	  _Event2['default'].addEndEventListener(node, node.rcEndListener);

	  node.rcAnimTimeout = setTimeout(function () {
	    for (let s in style) {
	      if (style.hasOwnProperty(s)) {
	        node.style[s] = style[s];
	      }
	    }
	    node.rcAnimTimeout = null;
	    fixBrowserByTimeout(node);
	  }, 0);
            };

            cssAnimation.setTransition = function (node, p, value) {
	  let property = p;
	  let v = value;
	  if (value === undefined) {
	    v = property;
	    property = '';
	  }
	  property = property || '';
	  capitalPrefixes.forEach(function (prefix) {
	    node.style[prefix + 'Transition' + property] = v;
	  });
            };

            cssAnimation.isCssAnimationSupported = isCssAnimationSupported;

            exports.isCssAnimationSupported = isCssAnimationSupported;
            exports['default'] = cssAnimation;

            /***/ },
        /* 142 */
        /***/ function(module, exports) {

            'use strict';

            Object.defineProperty(exports, '__esModule', {
	  value: true
            });
            let START_EVENT_NAME_MAP = {
	  transitionstart: {
	    transition: 'transitionstart',
	    WebkitTransition: 'webkitTransitionStart',
	    MozTransition: 'mozTransitionStart',
	    OTransition: 'oTransitionStart',
	    msTransition: 'MSTransitionStart'
	  },

	  animationstart: {
	    animation: 'animationstart',
	    WebkitAnimation: 'webkitAnimationStart',
	    MozAnimation: 'mozAnimationStart',
	    OAnimation: 'oAnimationStart',
	    msAnimation: 'MSAnimationStart'
	  }
            };

            let END_EVENT_NAME_MAP = {
	  transitionend: {
	    transition: 'transitionend',
	    WebkitTransition: 'webkitTransitionEnd',
	    MozTransition: 'mozTransitionEnd',
	    OTransition: 'oTransitionEnd',
	    msTransition: 'MSTransitionEnd'
	  },

	  animationend: {
	    animation: 'animationend',
	    WebkitAnimation: 'webkitAnimationEnd',
	    MozAnimation: 'mozAnimationEnd',
	    OAnimation: 'oAnimationEnd',
	    msAnimation: 'MSAnimationEnd'
	  }
            };

            let startEvents = [];
            let endEvents = [];

            function detectEvents() {
	  let testEl = document.createElement('div');
	  let style = testEl.style;

	  if (!('AnimationEvent' in window)) {
	    delete START_EVENT_NAME_MAP.animationstart.animation;
	    delete END_EVENT_NAME_MAP.animationend.animation;
	  }

	  if (!('TransitionEvent' in window)) {
	    delete START_EVENT_NAME_MAP.transitionstart.transition;
	    delete END_EVENT_NAME_MAP.transitionend.transition;
	  }

	  function process(EVENT_NAME_MAP, events) {
	    for (let baseEventName in EVENT_NAME_MAP) {
	      if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
	        let baseEvents = EVENT_NAME_MAP[baseEventName];
	        for (let styleName in baseEvents) {
	          if (styleName in style) {
	            events.push(baseEvents[styleName]);
	            break;
	          }
	        }
	      }
	    }
	  }

	  process(START_EVENT_NAME_MAP, startEvents);
	  process(END_EVENT_NAME_MAP, endEvents);
            }

            if (typeof window !== 'undefined' && typeof document !== 'undefined') {
	  detectEvents();
            }

            function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
            }

            function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
            }

            let TransitionEvents = {
	  // Start events
	  startEvents: startEvents,

	  addStartEventListener: function addStartEventListener(node, eventListener) {
	    if (startEvents.length === 0) {
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    startEvents.forEach(function (startEvent) {
	      addEventListener(node, startEvent, eventListener);
	    });
	  },
	  removeStartEventListener: function removeStartEventListener(node, eventListener) {
	    if (startEvents.length === 0) {
	      return;
	    }
	    startEvents.forEach(function (startEvent) {
	      removeEventListener(node, startEvent, eventListener);
	    });
	  },


	  // End events
	  endEvents: endEvents,

	  addEndEventListener: function addEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },
	  removeEndEventListener: function removeEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
            };

            exports['default'] = TransitionEvents;
            module.exports = exports['default'];

            /***/ },
        /* 143 */
        /***/ function(module, exports, __webpack_require__) {

            /**
	 * Module dependencies.
	 */

            try {
	  var index = __webpack_require__(144);
            } catch (err) {
	  var index = __webpack_require__(144);
            }

            /**
	 * Whitespace regexp.
	 */

            let re = /\s+/;

            /**
	 * toString reference.
	 */

            let toString = Object.prototype.toString;

            /**
	 * Wrap `el` in a `ClassList`.
	 *
	 * @param {Element} el
	 * @return {ClassList}
	 * @api public
	 */

            module.exports = function(el){
	  return new ClassList(el);
            };

            /**
	 * Initialize a new ClassList for `el`.
	 *
	 * @param {Element} el
	 * @api private
	 */

            function ClassList(el) {
	  if (!el || !el.nodeType) {
	    throw new Error('A DOM element reference is required');
	  }
	  this.el = el;
	  this.list = el.classList;
            }

            /**
	 * Add class `name` if not already present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */

            ClassList.prototype.add = function(name){
	  // classList
	  if (this.list) {
	    this.list.add(name);
	    return this;
	  }

	  // fallback
	  let arr = this.array();
	  let i = index(arr, name);
	  if (!~i) {arr.push(name);}
	  this.el.className = arr.join(' ');
	  return this;
            };

            /**
	 * Remove class `name` when present, or
	 * pass a regular expression to remove
	 * any which match.
	 *
	 * @param {String|RegExp} name
	 * @return {ClassList}
	 * @api public
	 */

            ClassList.prototype.remove = function(name){
	  if ('[object RegExp]' == toString.call(name)) {
	    return this.removeMatching(name);
	  }

	  // classList
	  if (this.list) {
	    this.list.remove(name);
	    return this;
	  }

	  // fallback
	  let arr = this.array();
	  let i = index(arr, name);
	  if (~i) {arr.splice(i, 1);}
	  this.el.className = arr.join(' ');
	  return this;
            };

            /**
	 * Remove all classes matching `re`.
	 *
	 * @param {RegExp} re
	 * @return {ClassList}
	 * @api private
	 */

            ClassList.prototype.removeMatching = function(re){
	  let arr = this.array();
	  for (let i = 0; i < arr.length; i++) {
	    if (re.test(arr[i])) {
	      this.remove(arr[i]);
	    }
	  }
	  return this;
            };

            /**
	 * Toggle class `name`, can force state via `force`.
	 *
	 * For browsers that support classList, but do not support `force` yet,
	 * the mistake will be detected and corrected.
	 *
	 * @param {String} name
	 * @param {Boolean} force
	 * @return {ClassList}
	 * @api public
	 */

            ClassList.prototype.toggle = function(name, force){
	  // classList
	  if (this.list) {
	    if ('undefined' !== typeof force) {
	      if (force !== this.list.toggle(name, force)) {
	        this.list.toggle(name); // toggle again to correct
	      }
	    } else {
	      this.list.toggle(name);
	    }
	    return this;
	  }

	  // fallback
	  if ('undefined' !== typeof force) {
	    if (!force) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  } else {
	    if (this.has(name)) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  }

	  return this;
            };

            /**
	 * Return an array of classes.
	 *
	 * @return {Array}
	 * @api public
	 */

            ClassList.prototype.array = function(){
	  let className = this.el.getAttribute('class') || '';
	  let str = className.replace(/^\s+|\s+$/g, '');
	  let arr = str.split(re);
	  if ('' === arr[0]) {arr.shift();}
	  return arr;
            };

            /**
	 * Check if class `name` is present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */

            ClassList.prototype.has =
 ClassList.prototype.contains = function(name){
	  return this.list
	    ? this.list.contains(name)
	    : !! ~index(this.array(), name);
 };


            /***/ },
        /* 144 */
        /***/ function(module, exports) {

            module.exports = function(arr, obj){
	  if (arr.indexOf) {return arr.indexOf(obj);}
	  for (let i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) {return i;}
	  }
	  return -1;
            };

            /***/ },
        /* 145 */
        /***/ function(module, exports) {

            'use strict';

            Object.defineProperty(exports, '__esModule', {
	  value: true
            });
            let util = {
	  isAppearSupported: function isAppearSupported(props) {
	    return props.transitionName && props.transitionAppear || props.animation.appear;
	  },
	  isEnterSupported: function isEnterSupported(props) {
	    return props.transitionName && props.transitionEnter || props.animation.enter;
	  },
	  isLeaveSupported: function isLeaveSupported(props) {
	    return props.transitionName && props.transitionLeave || props.animation.leave;
	  },
	  allowAppearCallback: function allowAppearCallback(props) {
	    return props.transitionAppear || props.animation.appear;
	  },
	  allowEnterCallback: function allowEnterCallback(props) {
	    return props.transitionEnter || props.animation.enter;
	  },
	  allowLeaveCallback: function allowLeaveCallback(props) {
	    return props.transitionLeave || props.animation.leave;
	  }
            };
            exports['default'] = util;
            module.exports = exports['default'];

            /***/ },
        /* 146 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            exports.__esModule = true;

            let _classCallCheck2 = __webpack_require__(68);

            let _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

            let _possibleConstructorReturn2 = __webpack_require__(69);

            let _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

            let _inherits2 = __webpack_require__(103);

            let _inherits3 = _interopRequireDefault(_inherits2);

            let _react = __webpack_require__(10);

            let _react2 = _interopRequireDefault(_react);

            let _propTypes = __webpack_require__(3);

            let _propTypes2 = _interopRequireDefault(_propTypes);

            let _LazyRenderBox = __webpack_require__(147);

            let _LazyRenderBox2 = _interopRequireDefault(_LazyRenderBox);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

            let PopupInner = function (_Component) {
	  (0, _inherits3['default'])(PopupInner, _Component);

	  function PopupInner() {
	    (0, _classCallCheck3['default'])(this, PopupInner);
	    return (0, _possibleConstructorReturn3['default'])(this, _Component.apply(this, arguments));
	  }

	  PopupInner.prototype.render = function render() {
	    let props = this.props;
	    let className = props.className;
	    if (!props.visible) {
	      className += ' ' + props.hiddenClassName;
	    }
	    return _react2['default'].createElement(
	      'div',
	      {
	        className: className,
	        onMouseEnter: props.onMouseEnter,
	        onMouseLeave: props.onMouseLeave,
	        onMouseDown: props.onMouseDown,
	        onTouchStart: props.onTouchStart,
	        style: props.style
	      },
	      _react2['default'].createElement(
	        _LazyRenderBox2['default'],
	        { className: props.prefixCls + '-content', visible: props.visible },
	        props.children
	      )
	    );
	  };

	  return PopupInner;
            }(_react.Component);

            PopupInner.propTypes = {
	  hiddenClassName: _propTypes2['default'].string,
	  className: _propTypes2['default'].string,
	  prefixCls: _propTypes2['default'].string,
	  onMouseEnter: _propTypes2['default'].func,
	  onMouseLeave: _propTypes2['default'].func,
	  onMouseDown: _propTypes2['default'].func,
	  onTouchStart: _propTypes2['default'].func,
	  children: _propTypes2['default'].any
            };
            exports['default'] = PopupInner;
            module.exports = exports['default'];

            /***/ },
        /* 147 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            exports.__esModule = true;

            let _objectWithoutProperties2 = __webpack_require__(67);

            let _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

            let _classCallCheck2 = __webpack_require__(68);

            let _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

            let _possibleConstructorReturn2 = __webpack_require__(69);

            let _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

            let _inherits2 = __webpack_require__(103);

            let _inherits3 = _interopRequireDefault(_inherits2);

            let _react = __webpack_require__(10);

            let _react2 = _interopRequireDefault(_react);

            let _propTypes = __webpack_require__(3);

            let _propTypes2 = _interopRequireDefault(_propTypes);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

            let LazyRenderBox = function (_Component) {
	  (0, _inherits3['default'])(LazyRenderBox, _Component);

	  function LazyRenderBox() {
	    (0, _classCallCheck3['default'])(this, LazyRenderBox);
	    return (0, _possibleConstructorReturn3['default'])(this, _Component.apply(this, arguments));
	  }

	  LazyRenderBox.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	    return nextProps.hiddenClassName || nextProps.visible;
	  };

	  LazyRenderBox.prototype.render = function render() {
	    let _props = this.props,
	        hiddenClassName = _props.hiddenClassName,
	        visible = _props.visible,
	        props = (0, _objectWithoutProperties3['default'])(_props, ['hiddenClassName', 'visible']);


	    if (hiddenClassName || _react2['default'].Children.count(props.children) > 1) {
	      if (!visible && hiddenClassName) {
	        props.className += ' ' + hiddenClassName;
	      }
	      return _react2['default'].createElement('div', props);
	    }

	    return _react2['default'].Children.only(props.children);
	  };

	  return LazyRenderBox;
            }(_react.Component);

            LazyRenderBox.propTypes = {
	  children: _propTypes2['default'].any,
	  className: _propTypes2['default'].string,
	  visible: _propTypes2['default'].bool,
	  hiddenClassName: _propTypes2['default'].string
            };
            exports['default'] = LazyRenderBox;
            module.exports = exports['default'];

            /***/ },
        /* 148 */
        /***/ function(module, exports) {

            'use strict';

            exports.__esModule = true;
            let autoAdjustOverflow = {
	  adjustX: 1,
	  adjustY: 1
            };

            let targetOffset = [0, 0];

            let placements = exports.placements = {
	  left: {
	    points: ['cr', 'cl'],
	    overflow: autoAdjustOverflow,
	    offset: [-4, 0],
	    targetOffset: targetOffset
	  },
	  right: {
	    points: ['cl', 'cr'],
	    overflow: autoAdjustOverflow,
	    offset: [4, 0],
	    targetOffset: targetOffset
	  },
	  top: {
	    points: ['bc', 'tc'],
	    overflow: autoAdjustOverflow,
	    offset: [0, -4],
	    targetOffset: targetOffset
	  },
	  bottom: {
	    points: ['tc', 'bc'],
	    overflow: autoAdjustOverflow,
	    offset: [0, 4],
	    targetOffset: targetOffset
	  },
	  topLeft: {
	    points: ['bl', 'tl'],
	    overflow: autoAdjustOverflow,
	    offset: [0, -4],
	    targetOffset: targetOffset
	  },
	  leftTop: {
	    points: ['tr', 'tl'],
	    overflow: autoAdjustOverflow,
	    offset: [-4, 0],
	    targetOffset: targetOffset
	  },
	  topRight: {
	    points: ['br', 'tr'],
	    overflow: autoAdjustOverflow,
	    offset: [0, -4],
	    targetOffset: targetOffset
	  },
	  rightTop: {
	    points: ['tl', 'tr'],
	    overflow: autoAdjustOverflow,
	    offset: [4, 0],
	    targetOffset: targetOffset
	  },
	  bottomRight: {
	    points: ['tr', 'br'],
	    overflow: autoAdjustOverflow,
	    offset: [0, 4],
	    targetOffset: targetOffset
	  },
	  rightBottom: {
	    points: ['bl', 'br'],
	    overflow: autoAdjustOverflow,
	    offset: [4, 0],
	    targetOffset: targetOffset
	  },
	  bottomLeft: {
	    points: ['tl', 'bl'],
	    overflow: autoAdjustOverflow,
	    offset: [0, 4],
	    targetOffset: targetOffset
	  },
	  leftBottom: {
	    points: ['br', 'bl'],
	    overflow: autoAdjustOverflow,
	    offset: [-4, 0],
	    targetOffset: targetOffset
	  }
            };

            exports['default'] = placements;

            /***/ },
        /* 149 */
        /***/ function(module, exports, __webpack_require__) {

            'use strict';

            exports.__esModule = true;

            let _classCallCheck2 = __webpack_require__(68);

            let _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

            let _possibleConstructorReturn2 = __webpack_require__(69);

            let _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

            let _inherits2 = __webpack_require__(103);

            let _inherits3 = _interopRequireDefault(_inherits2);

            let _react = __webpack_require__(10);

            let _react2 = _interopRequireDefault(_react);

            let _propTypes = __webpack_require__(3);

            let _propTypes2 = _interopRequireDefault(_propTypes);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

            let Content = function (_React$Component) {
	  (0, _inherits3['default'])(Content, _React$Component);

	  function Content() {
	    (0, _classCallCheck3['default'])(this, Content);
	    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
	  }

	  Content.prototype.componentDidUpdate = function componentDidUpdate() {
	    let trigger = this.props.trigger;

	    if (trigger) {
	      trigger.forcePopupAlign();
	    }
	  };

	  Content.prototype.render = function render() {
	    let _props = this.props,
	        overlay = _props.overlay,
	        prefixCls = _props.prefixCls,
	        id = _props.id;

	    return _react2['default'].createElement(
	      'div',
	      { className: prefixCls + '-inner', id: id, role: 'tooltip' },
	      typeof overlay === 'function' ? overlay() : overlay
	    );
	  };

	  return Content;
            }(_react2['default'].Component);

            Content.propTypes = {
	  prefixCls: _propTypes2['default'].string,
	  overlay: _propTypes2['default'].oneOfType([_propTypes2['default'].node, _propTypes2['default'].func]).isRequired,
	  id: _propTypes2['default'].string,
	  trigger: _propTypes2['default'].any
            };
            exports['default'] = Content;
            module.exports = exports['default'];

            /***/ }
        /******/ ]);
});

//# sourceMappingURL=rc-slider.js.map