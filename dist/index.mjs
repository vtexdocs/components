var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/react-is/cjs/react-is.production.min.js
var require_react_is_production_min = __commonJS({
  "node_modules/react-is/cjs/react-is.production.min.js"(exports) {
    "use strict";
    var b = "function" === typeof Symbol && Symbol.for;
    var c = b ? Symbol.for("react.element") : 60103;
    var d = b ? Symbol.for("react.portal") : 60106;
    var e = b ? Symbol.for("react.fragment") : 60107;
    var f = b ? Symbol.for("react.strict_mode") : 60108;
    var g = b ? Symbol.for("react.profiler") : 60114;
    var h = b ? Symbol.for("react.provider") : 60109;
    var k = b ? Symbol.for("react.context") : 60110;
    var l = b ? Symbol.for("react.async_mode") : 60111;
    var m = b ? Symbol.for("react.concurrent_mode") : 60111;
    var n = b ? Symbol.for("react.forward_ref") : 60112;
    var p = b ? Symbol.for("react.suspense") : 60113;
    var q = b ? Symbol.for("react.suspense_list") : 60120;
    var r = b ? Symbol.for("react.memo") : 60115;
    var t = b ? Symbol.for("react.lazy") : 60116;
    var v = b ? Symbol.for("react.block") : 60121;
    var w = b ? Symbol.for("react.fundamental") : 60117;
    var x = b ? Symbol.for("react.responder") : 60118;
    var y = b ? Symbol.for("react.scope") : 60119;
    function z(a) {
      if ("object" === typeof a && null !== a) {
        var u = a.$$typeof;
        switch (u) {
          case c:
            switch (a = a.type, a) {
              case l:
              case m:
              case e:
              case g:
              case f:
              case p:
                return a;
              default:
                switch (a = a && a.$$typeof, a) {
                  case k:
                  case n:
                  case t:
                  case r:
                  case h:
                    return a;
                  default:
                    return u;
                }
            }
          case d:
            return u;
        }
      }
    }
    function A(a) {
      return z(a) === m;
    }
    exports.AsyncMode = l;
    exports.ConcurrentMode = m;
    exports.ContextConsumer = k;
    exports.ContextProvider = h;
    exports.Element = c;
    exports.ForwardRef = n;
    exports.Fragment = e;
    exports.Lazy = t;
    exports.Memo = r;
    exports.Portal = d;
    exports.Profiler = g;
    exports.StrictMode = f;
    exports.Suspense = p;
    exports.isAsyncMode = function(a) {
      return A(a) || z(a) === l;
    };
    exports.isConcurrentMode = A;
    exports.isContextConsumer = function(a) {
      return z(a) === k;
    };
    exports.isContextProvider = function(a) {
      return z(a) === h;
    };
    exports.isElement = function(a) {
      return "object" === typeof a && null !== a && a.$$typeof === c;
    };
    exports.isForwardRef = function(a) {
      return z(a) === n;
    };
    exports.isFragment = function(a) {
      return z(a) === e;
    };
    exports.isLazy = function(a) {
      return z(a) === t;
    };
    exports.isMemo = function(a) {
      return z(a) === r;
    };
    exports.isPortal = function(a) {
      return z(a) === d;
    };
    exports.isProfiler = function(a) {
      return z(a) === g;
    };
    exports.isStrictMode = function(a) {
      return z(a) === f;
    };
    exports.isSuspense = function(a) {
      return z(a) === p;
    };
    exports.isValidElementType = function(a) {
      return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
    };
    exports.typeOf = z;
  }
});

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment3 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment3;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module.exports = require_react_is_production_min();
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    "use strict";
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (process.env.NODE_ENV !== "production") {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text3) {
        var message = "Warning: " + text3;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (process.env.NODE_ENV !== "production") {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (process.env.NODE_ENV !== "production") {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (process.env.NODE_ENV !== "production") {
      printWarning = function(text3) {
        var message = "Warning: " + text3;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (process.env.NODE_ENV !== "production") {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (process.env.NODE_ENV !== "production" && typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
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
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
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
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (process.env.NODE_ENV !== "production") {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
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
          process.env.NODE_ENV !== "production" ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
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
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
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
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
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
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/factoryWithThrowingShims.js
var require_factoryWithThrowingShims = __commonJS({
  "node_modules/prop-types/factoryWithThrowingShims.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    function emptyFunction() {
    }
    function emptyFunctionWithReset() {
    }
    emptyFunctionWithReset.resetWarningCache = emptyFunction;
    module.exports = function() {
      function shim(props, propName, componentName, location, propFullName, secret) {
        if (secret === ReactPropTypesSecret) {
          return;
        }
        var err = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        err.name = "Invariant Violation";
        throw err;
      }
      ;
      shim.isRequired = shim;
      function getShim() {
        return shim;
      }
      ;
      var ReactPropTypes = {
        array: shim,
        bigint: shim,
        bool: shim,
        func: shim,
        number: shim,
        object: shim,
        string: shim,
        symbol: shim,
        any: shim,
        arrayOf: getShim,
        element: shim,
        elementType: shim,
        instanceOf: getShim,
        node: shim,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim,
        checkPropTypes: emptyFunctionWithReset,
        resetWarningCache: emptyFunction
      };
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = require_factoryWithThrowingShims()();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// src/lib/markdown-renderer/MarkdownRenderer.tsx
import { Box as Box8 } from "@vtex/brand-ui";
import { MDXRemote } from "next-mdx-remote";

// src/lib/markdown-renderer/components.tsx
import { useContext, useEffect as useEffect5, useRef as useRef3, useState as useState4 } from "react";
import { Box as Box7, Flex as Flex4 } from "@vtex/brand-ui";
import {
  UncontrolledReactSVGPanZoom
} from "react-svg-pan-zoom";
import mermaid2 from "mermaid";
import parse from "html-react-parser";
import { InView } from "react-intersection-observer";

// src/components/copy-button/index.tsx
import { useCallback, useState, useRef, useEffect } from "react";
import copy from "copy-text-to-clipboard";
import { Box, Button, Icon } from "@vtex/brand-ui";

// src/components/copy-button/styles.ts
var basicButton = {
  float: "right",
  ":focus": {
    outline: "none !important",
    boxShadow: "none !important"
  },
  width: "28px",
  height: "28px",
  padding: "6px",
  marginX: "18px"
};
var copyButton = {
  ...basicButton,
  backgroundColor: "#E7E9EE"
};
var copyButtonCopied = {
  ...basicButton,
  backgroundColor: "#E6F2E6"
};
var copyButtonIcons = {
  position: "relative",
  width: "16px",
  height: "16px"
};
var copyButtonIcon = {
  position: "absolute",
  top: "0",
  left: "0",
  fill: "#142032",
  opacity: "inherit",
  width: "inherit",
  height: "inherit",
  transition: "all 0.15s ease"
};
var copyButtonSuccessIcon = {
  ...copyButtonIcon,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fill: "#79A479"
};
var copyButtonIconCopied = {
  transform: "scale(0.33)",
  opacity: "0"
};
var copyButtonSuccessIconCopied = {
  transform: "translate(-50%, -50%)",
  opacity: "1",
  transitionDelay: "0.075s"
};
var styles_default = {
  copyButton,
  copyButtonCopied,
  copyButtonIcons,
  copyButtonIcon,
  copyButtonSuccessIcon,
  copyButtonSuccessIconCopied,
  copyButtonIconCopied
};

// src/components/copy-button/index.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function CopyButton({ code, sx }) {
  const [isCopied, setIsCopied] = useState(false);
  const copyTimeout = useRef(void 0);
  const handleCopyCode = useCallback(() => {
    copy(code);
    setIsCopied(true);
    copyTimeout.current = window.setTimeout(() => {
      setIsCopied(false);
    }, 1e3);
  }, [code]);
  useEffect(() => () => window.clearTimeout(copyTimeout.current), []);
  return /* @__PURE__ */ jsx(
    Button,
    {
      variant: "tertiary",
      size: "small",
      onClick: handleCopyCode,
      sx: {
        ...isCopied ? styles_default.copyButtonCopied : styles_default.copyButton,
        ...sx
      },
      "aria-label": "Copy code snippet",
      children: /* @__PURE__ */ jsxs(Box, { sx: styles_default.copyButtonIcons, "aria-hidden": "true", children: [
        /* @__PURE__ */ jsx(
          Icon,
          {
            size: 16,
            sx: isCopied ? styles_default.copyButtonIconCopied : styles_default.copyButtonIcon,
            children: /* @__PURE__ */ jsx("path", { d: "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" })
          }
        ),
        /* @__PURE__ */ jsx(
          Icon,
          {
            size: 16,
            sx: isCopied ? styles_default.copyButtonSuccessIcon : styles_default.copyButtonSuccessIconCopied,
            children: /* @__PURE__ */ jsx("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" })
          }
        )
      ] })
    }
  );
}

// src/components/code-block/index.tsx
import { Box as Box2, Text } from "@vtex/brand-ui";

// src/utils/string-utils.ts
var removeHTML = (str) => str.replace(/<\/?[^>]+>/g, "");
var slugify = (str) => {
  return str.toLowerCase().replace(/\s+/g, "-").replace(/\-+/g, "-").replace(/[^a-z0-9\-]/g, "");
};
var childrenToString = (children) => {
  if (!children)
    return "";
  else if (Array.isArray(children))
    return children.map((child) => {
      if (typeof child === "string")
        return child;
      return childrenToString(child.props.children);
    }).join("");
  else {
    if (typeof children === "string")
      return children;
    return childrenToString(children["props"]["children"]);
  }
};

// src/components/code-block/styles.ts
var CodeBlock = {
  backgroundColor: "#f8f7fc !important",
  border: "1px solid #e7e9ee",
  borderRadius: "4px",
  lineBreak: "auto",
  marginY: "16px",
  fontSize: "0.875em"
};
var CodeContent = {
  code: {
    backgroundColor: "#f8f7fc",
    paddingY: "0px !important"
  }
};
var styles_default2 = { CodeBlock, CodeContent };

// src/components/code-block/index.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var CodeBlock2 = ({ ...props }) => {
  return /* @__PURE__ */ jsx2(Box2, { sx: styles_default2.CodeBlock, children: /* @__PURE__ */ jsxs2("pre", { children: [
    /* @__PURE__ */ jsx2(CopyButton, { code: childrenToString(props.children) }),
    /* @__PURE__ */ jsx2(Text, { sx: styles_default2.CodeContent, ...props })
  ] }) });
};
var code_block_default = CodeBlock2;

// src/components/overview-card/styles.ts
var overviewCard = {
  alignItems: "flex-start",
  margin: "40px 0px",
  ul: {
    borderLeft: "1px rgb(202, 203, 204) solid",
    fontSize: "0.875em",
    paddingLeft: "1.5em",
    listStyleType: "none",
    display: "block",
    textDecoration: "none"
  },
  h3: {
    fontSize: "1.125em",
    fontWeight: "600",
    my: "0"
  },
  h4: {
    fontSize: "1.05em",
    fontWeight: "400",
    marginBottom: "0"
  }
};
var overviewIcon = {
  marginRight: "1.25em",
  marginTop: "0.375em"
};
var styles_default3 = {
  overviewCard,
  overviewIcon
};

// src/components/overview-card/index.tsx
import { Flex, Box as Box3 } from "@vtex/brand-ui";

// src/components/overview-card/icons.tsx
import { Icon as Icon2 } from "@vtex/brand-ui";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var StorageUnit = (props) => /* @__PURE__ */ jsx3(
  Icon2,
  {
    ...props,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    size: 35,
    children: /* @__PURE__ */ jsxs3(
      "g",
      {
        strokeLinecap: "square",
        strokeLinejoin: "miter",
        strokeWidth: "2",
        fill: "#f71963",
        stroke: "#f71963",
        children: [
          /* @__PURE__ */ jsx3(
            "rect",
            {
              x: "15",
              y: "15",
              width: "18",
              height: "15",
              fill: "none",
              stroke: "#142032",
              strokeMiterlimit: "10"
            }
          ),
          /* @__PURE__ */ jsx3(
            "polyline",
            {
              points: "2 12 24 2 46 12",
              fill: "none",
              strokeMiterlimit: "10",
              strokeLinecap: "butt"
            }
          ),
          /* @__PURE__ */ jsx3(
            "line",
            {
              x1: "24",
              y1: "15",
              x2: "24",
              y2: "20",
              fill: "none",
              stroke: "#142032",
              strokeMiterlimit: "10"
            }
          ),
          /* @__PURE__ */ jsx3(
            "rect",
            {
              x: "6",
              y: "30",
              width: "18",
              height: "15",
              fill: "none",
              stroke: "#142032",
              strokeMiterlimit: "10"
            }
          ),
          /* @__PURE__ */ jsx3(
            "line",
            {
              x1: "15",
              y1: "30",
              x2: "15",
              y2: "35",
              fill: "none",
              stroke: "#142032",
              strokeMiterlimit: "10"
            }
          ),
          /* @__PURE__ */ jsx3(
            "rect",
            {
              x: "24",
              y: "30",
              width: "18",
              height: "15",
              fill: "none",
              stroke: "#142032",
              strokeMiterlimit: "10"
            }
          ),
          /* @__PURE__ */ jsx3(
            "line",
            {
              x1: "33",
              y1: "30",
              x2: "33",
              y2: "35",
              fill: "none",
              stroke: "#142032",
              strokeMiterlimit: "10"
            }
          )
        ]
      }
    )
  }
);
var Board = (props) => /* @__PURE__ */ jsx3(
  Icon2,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48",
    size: 35,
    children: /* @__PURE__ */ jsxs3(
      "g",
      {
        strokeLinecap: "square",
        strokeLinejoin: "miter",
        strokeWidth: "2",
        fill: "#f71963",
        stroke: "#f71963",
        children: [
          /* @__PURE__ */ jsx3(
            "rect",
            {
              x: "4",
              y: "4",
              width: "40",
              height: "40",
              fill: "none",
              stroke: "#142032",
              strokeMiterlimit: "10"
            }
          ),
          /* @__PURE__ */ jsx3(
            "rect",
            {
              x: "10",
              y: "10",
              width: "11",
              height: "13",
              fill: "none",
              strokeMiterlimit: "10"
            }
          ),
          /* @__PURE__ */ jsx3(
            "rect",
            {
              x: "10",
              y: "29",
              width: "11",
              height: "9",
              fill: "none",
              strokeMiterlimit: "10"
            }
          ),
          /* @__PURE__ */ jsx3(
            "rect",
            {
              x: "27",
              y: "10",
              width: "11",
              height: "28",
              fill: "none",
              strokeMiterlimit: "10"
            }
          )
        ]
      }
    )
  }
);
var Integration = (props) => /* @__PURE__ */ jsxs3(
  Icon2,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx3(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M18 17H20C20.552 17 21 17.448 21 18V20C21 20.552 20.552 21 20 21H18C17.448 21 17 20.552 17 20V18C17 17.448 17.448 17 18 17Z",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M4 3H6C6.552 3 7 3.448 7 4V6C7 6.552 6.552 7 6 7H4C3.448 7 3 6.552 3 6V4C3 3.448 3.448 3 4 3Z",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M11 10H13C13.552 10 14 10.448 14 11V13C14 13.552 13.552 14 13 14H11C10.448 14 10 13.552 10 13V11C10 10.448 10.448 10 11 10Z",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M11 5H19C20.105 5 21 5.895 21 7V10C21 11.105 20.105 12 19 12H17",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M13 19H5C3.895 19 3 18.105 3 17V14C3 12.895 3.895 12 5 12H7",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var SearchList = (props) => /* @__PURE__ */ jsxs3(
  Icon2,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M18.98 6.98L21 9",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M18.9796 2.85437C20.1188 3.99353 20.1188 5.84047 18.9796 6.97963C17.8404 8.11879 15.9935 8.11879 14.8543 6.97963C13.7152 5.84047 13.7152 3.99353 14.8543 2.85437C15.9935 1.71521 17.8404 1.71521 18.9796 2.85437",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M11 7.5H4C3.448 7.5 3 7.052 3 6.5V4C3 3.448 3.448 3 4 3H11",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M5.25 14.5H3.75C3.336 14.5 3 14.164 3 13.75V12.25C3 11.836 3.336 11.5 3.75 11.5H5.25C5.664 11.5 6 11.836 6 12.25V13.75C6 14.164 5.664 14.5 5.25 14.5Z",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M9.222 13H21",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M5.25 21H3.75C3.336 21 3 20.664 3 20.25V18.75C3 18.336 3.336 18 3.75 18H5.25C5.664 18 6 18.336 6 18.75V20.25C6 20.664 5.664 21 5.25 21Z",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M9.222 19.5H21",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var SwitchArrows = (props) => /* @__PURE__ */ jsxs3(
  Icon2,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M7 9.75L5 11.75L3 9.75",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M18.5 3C19.881 3 21 4.119 21 5.5C21 6.881 19.881 8 18.5 8C17.119 8 16 6.881 16 5.5C16 4.119 17.119 3 18.5 3Z",
          stroke: "#323232",
          strokeWidth: "1.5"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M16 5.5H7C5.895 5.5 5 6.395 5 7.5V11.75",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M17 14.25L19 12.25L21 14.25",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M5.5 21C4.119 21 3 19.881 3 18.5C3 17.119 4.119 16 5.5 16C6.881 16 8 17.119 8 18.5C8 19.881 6.881 21 5.5 21Z",
          stroke: "#F71963",
          strokeWidth: "1.5"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M8 18.5H17C18.105 18.5 19 17.605 19 16.5V12.25",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var SearchDetails = (props) => /* @__PURE__ */ jsxs3(
  Icon2,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M15.456 9.75699L12.037 13.177L9.75703 10.897L7.47803 13.177",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M16.747 6.18703C19.663 9.10307 19.663 13.8309 16.747 16.7469C13.831 19.663 9.1031 19.663 6.18709 16.7469C3.27105 13.8309 3.27105 9.10304 6.18709 6.18703C9.10313 3.27099 13.831 3.27099 16.747 6.18703",
          stroke: "#142032",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M20 20L16.75 16.75",
          stroke: "#142032",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var List = (props) => /* @__PURE__ */ jsxs3(
  Icon2,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M11 5H21",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M11 12H21",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M11 19H21",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M6 7H4C3.448 7 3 6.552 3 6V4C3 3.448 3.448 3 4 3H6C6.552 3 7 3.448 7 4V6C7 6.552 6.552 7 6 7Z",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M6 14H4C3.448 14 3 13.552 3 13V11C3 10.448 3.448 10 4 10H6C6.552 10 7 10.448 7 11V13C7 13.552 6.552 14 6 14Z",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M6 21H4C3.448 21 3 20.552 3 20V18C3 17.448 3.448 17 4 17H6C6.552 17 7 17.448 7 18V20C7 20.552 6.552 21 6 21Z",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var StoreCart = (props) => /* @__PURE__ */ jsxs3(
  Icon2,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M20 20V9.78",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M4.30101 9.778C2.60301 9.766 1.49601 8.085 2.23201 6.636L3.94801 3.259C4.33801 2.489 5.16001 2 6.06201 2H17.938C18.84 2 19.662 2.489 20.053 3.259L21.769 6.636C22.505 8.085 21.398 9.766 19.7 9.778C18.283 9.778 17.134 8.81 17.134 7.615V7.567C17.134 8.788 15.985 9.778 14.568 9.778C13.149 9.778 12 8.788 12 7.567C12 8.788 10.851 9.778 9.43401 9.778C8.01701 9.778 6.86801 8.788 6.86801 7.567V7.615C6.86701 8.81 5.71801 9.778 4.30101 9.778Z",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M16 20H21",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M4.59999 14.95H11L10.3 18.45H5.29999L4.29999 13.45H3.04999",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M9.835 20.915C9.855 20.935 9.855 20.966 9.835 20.986C9.815 21.006 9.784 21.006 9.764 20.986C9.744 20.966 9.744 20.935 9.764 20.915C9.784 20.895 9.816 20.895 9.835 20.915",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M5.835 20.915C5.855 20.935 5.855 20.966 5.835 20.986C5.815 21.006 5.784 21.006 5.764 20.986C5.744 20.966 5.744 20.935 5.764 20.915C5.784 20.895 5.816 20.895 5.835 20.915",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var GlobeCart = (props) => /* @__PURE__ */ jsxs3(
  Icon2,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M11 20C6.029 20 2 15.971 2 11C2 6.029 6.029 2 11 2C15.971 2 20 6.029 20 11",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M22 14H20.742L19.736 19.031H14.705L14 15.509H20.44",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M15.172 21.512C15.192 21.492 15.224 21.492 15.243 21.512C15.262 21.532 15.263 21.564 15.243 21.583C15.223 21.602 15.191 21.603 15.172 21.583C15.152 21.563 15.152 21.531 15.172 21.512",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M19.197 21.512C19.217 21.492 19.249 21.492 19.268 21.512C19.287 21.532 19.288 21.564 19.268 21.583C19.248 21.602 19.216 21.603 19.197 21.583C19.177 21.563 19.177 21.531 19.197 21.512",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M15 11C15 8.23599 14.277 5.47199 12.833 3.05999C11.986 1.64699 10.014 1.64699 9.16799 3.05999C6.27799 7.88499 6.27799 14.116 9.16799 18.941C9.59099 19.647 10.295 20 11 20",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M2.50999 8H19",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M2.50999 14H11",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var PaymentHand = (props) => /* @__PURE__ */ jsxs3(
  Icon2,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx3(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M6 21H4C3.448 21 3 20.552 3 20V14C3 13.448 3.448 13 4 13H6C6.552 13 7 13.448 7 14V20C7 20.552 6.552 21 6 21Z",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M13 17H15.333C15.766 17 16.187 16.86 16.533 16.6L18.949 14.788C19.552 14.336 20.396 14.396 20.929 14.929V14.929C21.521 15.521 21.521 16.48 20.929 17.071L18.856 19.144C18.298 19.702 17.586 20.083 16.812 20.238L13.882 20.824C13.301 20.94 12.702 20.926 12.127 20.782L9.477 20.12C9.16 20.04 8.835 20 8.508 20H7",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M13 17H14.485C15.322 17 16 16.322 16 15.485V15.182C16 14.487 15.527 13.881 14.853 13.713L12.561 13.14C12.188 13.047 11.806 13 11.422 13V13C10.495 13 9.588 13.274 8.817 13.789L7 15",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M10.667 10H19.334C20.254 10 21 9.254 21 8.333V3.667C21 2.746 20.254 2 19.333 2H10.666C9.746 2 9 2.746 9 3.667V8.334C9 9.254 9.746 10 10.667 10Z",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M16.061 4.93899C16.647 5.52499 16.647 6.47599 16.061 7.06099C15.475 7.64599 14.524 7.64699 13.939 7.06099C13.353 6.47499 13.353 5.52399 13.939 4.93899C14.525 4.35399 15.475 4.35399 16.061 4.93899",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var ToStore = (props) => /* @__PURE__ */ jsxs3(
  Icon2,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M12 20.91H3",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M4.21997 10.78V20.91",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M19.699 10.778C21.397 10.766 22.504 9.085 21.768 7.636L20.052 4.259C19.662 3.489 18.84 3 17.938 3H6.06198C5.15998 3 4.33798 3.489 3.94698 4.259L2.23098 7.636C1.49498 9.085 2.60198 10.766 4.29998 10.778C5.71698 10.778 6.86598 9.81 6.86598 8.615V8.567C6.86598 9.788 8.01498 10.778 9.43198 10.778C10.851 10.778 12 9.788 12 8.567C12 9.788 13.149 10.778 14.566 10.778C15.983 10.778 17.132 9.788 17.132 8.567V8.615C17.133 9.81 18.282 10.778 19.699 10.778V10.778Z",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M20 13L20.02 10.78",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M16 21H17.5C18.881 21 20 19.881 20 18.5V18.5C20 17.119 18.881 16 17.5 16H13",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M15 18L13 16L15 14",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var ChangeCart = (props) => /* @__PURE__ */ jsxs3(
  Icon2,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M1.5 11.25L3 9.75L4.5 11.25",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M22.5 12.75L21 14.25L19.5 12.75",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M3.235 9.98499C3.086 10.634 3 11.306 3 12C3 16.971 7.029 21 12 21C15.052 21 17.744 19.478 19.371 17.155",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M20.765 14.015C20.914 13.366 21 12.694 21 12C21 7.029 16.971 3 12 3C8.94803 3 6.25603 4.522 4.62903 6.845",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M9.05 10.25H15.45L14.75 13.75H9.75L8.75 8.75H7.5",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M14.285 16.215C14.305 16.235 14.305 16.266 14.285 16.286C14.265 16.306 14.234 16.306 14.214 16.286C14.194 16.266 14.194 16.235 14.214 16.215C14.234 16.195 14.266 16.195 14.285 16.215",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M10.285 16.215C10.305 16.235 10.305 16.266 10.285 16.286C10.265 16.306 10.234 16.306 10.214 16.286C10.194 16.266 10.194 16.235 10.214 16.215C10.234 16.195 10.266 16.195 10.285 16.215",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var Blocks = (props) => /* @__PURE__ */ jsxs3(
  Icon2,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      " ",
      /* @__PURE__ */ jsxs3(
        "g",
        {
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeWidth: "2",
          fill: "#f71963",
          stroke: "#f71963",
          children: [
            " ",
            /* @__PURE__ */ jsx3(
              "rect",
              {
                x: "4",
                y: "4",
                width: "40",
                height: "40",
                fill: "none",
                stroke: "#142032",
                strokeMiterlimit: "10"
              }
            ),
            " ",
            /* @__PURE__ */ jsx3(
              "rect",
              {
                x: "10",
                y: "10",
                width: "11",
                height: "13",
                fill: "none",
                strokeMiterlimit: "10"
              }
            ),
            " ",
            /* @__PURE__ */ jsx3(
              "rect",
              {
                x: "10",
                y: "29",
                width: "11",
                height: "9",
                fill: "none",
                strokeMiterlimit: "10"
              }
            ),
            " ",
            /* @__PURE__ */ jsx3(
              "rect",
              {
                x: "27",
                y: "10",
                width: "11",
                height: "28",
                fill: "none",
                strokeMiterlimit: "10"
              }
            ),
            " "
          ]
        }
      )
    ]
  }
);
var StoreData = (props) => /* @__PURE__ */ jsxs3(
  Icon2,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M19.576 4.40599C20.236 5.06499 20.236 6.13399 19.576 6.79299C18.916 7.45199 17.847 7.45199 17.187 6.79299C16.527 6.13399 16.527 5.06499 17.187 4.40599C17.847 3.74699 18.916 3.74699 19.576 4.40599",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M4.42402 19.594C3.76402 18.935 3.76402 17.866 4.42402 17.207C5.08402 16.548 6.15302 16.548 6.81302 17.207C7.47302 17.866 7.47302 18.935 6.81302 19.594C6.15302 20.253 5.08402 20.253 4.42402 19.594",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M6.935 19.448C10.441 21.83 15.253 21.472 18.362 18.366C20.12 16.608 21 14.304 21 12C21 11.468 20.968 10.937 20.874 10.412",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M3.126 13.588C3.032 13.063 3 12.532 3 12C3 9.696 3.88 7.392 5.639 5.634C8.747 2.528 13.56 2.17 17.066 4.552",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12 9.00027L15.0002 12.0005L12 15.0007L8.99977 12.0005L12 9.00027Z",
          stroke: "#323232",
          strokeWidth: "1.49999",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var FileConfiguration = (props) => /* @__PURE__ */ jsxs3(
  Icon2,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M19 11V7.828C19 7.298 18.789 6.789 18.414 6.414L15.586 3.586C15.211 3.211 14.702 3 14.172 3H7C5.895 3 5 3.895 5 5V19C5 20.105 5.895 21 7 21H11",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M19 8H15C14.448 8 14 7.552 14 7V3",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M17.659 15.174V14.002",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M17.659 21V19.828",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M19.671 16.329L20.685 15.751",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M14.633 19.25L15.63 18.672",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M19.671 18.673L20.685 19.251",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M14.633 15.752L15.63 16.33",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M17.659 15.167C18.949 15.167 19.993 16.211 19.993 17.501C19.993 18.791 18.949 19.835 17.659 19.835C16.369 19.835 15.325 18.789 15.325 17.501C15.325 16.213 16.369 15.167 17.659 15.167",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var Cart = (props) => /* @__PURE__ */ jsxs3(
  Icon2,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M15.006 16.542C14.88 16.542 14.777 16.644 14.779 16.771C14.779 16.897 14.881 17 15.008 17C15.135 17 15.237 16.898 15.237 16.771C15.235 16.644 15.132 16.542 15.006 16.542",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M9.74803 16.542C9.62203 16.542 9.51903 16.644 9.52103 16.771C9.52003 16.897 9.62303 17 9.74903 17C9.87503 17 9.97803 16.898 9.97803 16.771C9.97803 16.644 9.87503 16.542 9.74803 16.542",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M17 21H7C4.791 21 3 19.209 3 17V7C3 4.791 4.791 3 7 3H17C19.209 3 21 4.791 21 7V17C21 19.209 19.209 21 17 21Z",
          stroke: "#142032",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M7.984 8.875H15.875C16.282 8.875 16.58 9.257 16.481 9.652L15.639 13.022C15.511 13.534 15.076 13.91 14.551 13.963L10.291 14.389C9.656 14.452 9.075 14.028 8.944 13.404L7.578 7H6.5",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var Platform = (props) => /* @__PURE__ */ jsx3(
  Icon2,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: /* @__PURE__ */ jsxs3(
      "g",
      {
        strokeLinecap: "square",
        strokeWidth: "2",
        fill: "none",
        stroke: "#f71963",
        strokeLinejoin: "miter",
        "stroke-miterlimit": "10",
        children: [
          /* @__PURE__ */ jsx3("rect", { x: "4", y: "15", width: "8", height: "7" }),
          /* @__PURE__ */ jsx3("rect", { x: "12", y: "15", width: "8", height: "7" }),
          /* @__PURE__ */ jsx3("rect", { x: "8", y: "8", width: "8", height: "7" }),
          /* @__PURE__ */ jsx3(
            "polyline",
            {
              points: "1 7 12 2 23 7",
              "data-cap": "butt",
              strokeLinecap: "butt",
              stroke: "#142032"
            }
          ),
          /* @__PURE__ */ jsx3("line", { x1: "12", y1: "8", x2: "12", y2: "10" }),
          /* @__PURE__ */ jsx3("line", { x1: "16", y1: "15", x2: "16", y2: "17" }),
          /* @__PURE__ */ jsx3("line", { x1: "8", y1: "15", x2: "8", y2: "17" })
        ]
      }
    )
  }
);
var RestApis = (props) => /* @__PURE__ */ jsx3(
  Icon2,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: /* @__PURE__ */ jsxs3("g", { fill: "#142032", children: [
      /* @__PURE__ */ jsx3("path", { d: "M17,17H15.858a3.915,3.915,0,0,0-.425-1.019l.81-.81a1,1,0,1,0-1.414-1.414l-.81.81A3.915,3.915,0,0,0,13,14.142V13a1,1,0,0,0-2,0v1.142a3.915,3.915,0,0,0-1.019.425l-.81-.81a1,1,0,1,0-1.414,1.414l.81.81A3.915,3.915,0,0,0,8.142,17H7a1,1,0,0,0,0,2H8.142a3.915,3.915,0,0,0,.425,1.019l-.81.81a1,1,0,1,0,1.414,1.414l.81-.81A3.915,3.915,0,0,0,11,21.858V23a1,1,0,0,0,2,0V21.858a3.915,3.915,0,0,0,1.019-.425l.81.81a1,1,0,1,0,1.414-1.414l-.81-.81A3.915,3.915,0,0,0,15.858,19H17a1,1,0,0,0,0-2Zm-5,3a2,2,0,1,1,2-2A2,2,0,0,1,12,20Z" }),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M15,3a3,3,0,1,0-4,2.816V9a1,1,0,0,0,2,0V5.816A3,3,0,0,0,15,3Z",
          fill: "#f71963"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M6.271,10.856,4,8.586V5.816a3,3,0,1,0-2,0V9a1,1,0,0,0,.293.707l2.564,2.564a1,1,0,1,0,1.414-1.415Z",
          fill: "#f71963"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M24,3a3,3,0,1,0-4,2.816v2.77l-2.271,2.27a1,1,0,0,0,1.414,1.415l2.564-2.564A1,1,0,0,0,22,9V5.816A3,3,0,0,0,24,3Z",
          fill: "#f71963"
        }
      )
    ] })
  }
);
var Catalog = (props) => /* @__PURE__ */ jsxs3(
  Icon2,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M6.5 9V20C6.5 20.552 6.948 21 7.5 21H16.5C17.052 21 17.5 20.552 17.5 20V9",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M6.5 13H3.5C2.948 13 2.5 12.552 2.5 12V7.416C2.5 6.248 3.178 5.186 4.238 4.694L7.702 3.088C8.463 2.735 9.364 2.895 9.958 3.488L11.293 4.823C11.684 5.214 12.317 5.214 12.707 4.823L14.042 3.488C14.635 2.895 15.536 2.735 16.298 3.088L19.762 4.694C20.822 5.185 21.5 6.247 21.5 7.416V12C21.5 12.552 21.052 13 20.5 13H17.5",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var Orders = (props) => /* @__PURE__ */ jsxs3(
  Icon2,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx3(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M19 3H9.667C9.018 3 8.386 3.211 7.867 3.6L4.2 6.35C3.445 6.917 3 7.806 3 8.75V19C3 20.105 3.895 21 5 21H15.5C16.444 21 17.333 20.555 17.9 19.8L20.6 16.2C20.86 15.854 21 15.433 21 15V5C21 3.895 20.105 3 19 3V3Z",
          stroke: "#333232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M17 7.31L20.64 3.87",
          stroke: "#333232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M17 20.59V7.31",
          stroke: "#333232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M17 7.31H3.38",
          stroke: "#333232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M10.36 7.31L15.29 3",
          stroke: "#333232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M8 11H12",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var Checkout = (props) => /* @__PURE__ */ jsxs3(
  Icon2,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx3(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M7.40899 14.246L5.87399 7H18.5C19.151 7 19.628 7.611 19.47 8.243L18.122 13.635C17.917 14.454 17.221 15.056 16.381 15.14L9.56499 15.822C8.54899 15.923 7.61999 15.244 7.40899 14.246Z",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M5.874 7L5.224 4H3.5",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M17.109 19.267C16.907 19.267 16.743 19.431 16.745 19.633C16.745 19.835 16.909 19.999 17.111 19.999C17.313 19.999 17.477 19.835 17.477 19.633C17.476 19.431 17.312 19.267 17.109 19.267",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M8.697 19.267C8.495 19.267 8.331 19.431 8.333 19.633C8.331 19.836 8.496 20 8.698 20C8.9 20 9.064 19.836 9.064 19.634C9.064 19.431 8.9 19.267 8.697 19.267",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var Payments = (props) => /* @__PURE__ */ jsxs3(
  Icon2,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M1 5H19",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M7.5 9H5",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M9 15H1",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M7 13L9 15L7 17",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M1 11V4C1 2.343 2.343 1 4 1H16C17.657 1 19 2.343 19 4V12C19 13.657 17.657 15 16 15H13",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var Promotions = (props) => /* @__PURE__ */ jsxs3(
  Icon2,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx3(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12.425 2.94801L15.147 2.06701C15.791 1.85801 16.491 2.14901 16.799 2.75101L18.1 5.29901C18.232 5.55701 18.442 5.76801 18.701 5.90001L21.217 7.18501C21.838 7.50201 22.137 8.22401 21.922 8.88801L21.052 11.576C20.963 11.852 20.963 12.149 21.052 12.425L21.933 15.147C22.142 15.791 21.851 16.491 21.249 16.799L18.701 18.1C18.443 18.232 18.232 18.442 18.1 18.701L16.798 21.249C16.49 21.852 15.79 22.142 15.146 21.933L12.424 21.052C12.148 20.963 11.851 20.963 11.575 21.052L8.853 21.933C8.209 22.142 7.509 21.851 7.201 21.249L5.9 18.701C5.768 18.443 5.558 18.232 5.299 18.1L2.751 16.798C2.148 16.49 1.858 15.79 2.067 15.146L2.948 12.424C3.037 12.148 3.037 11.851 2.948 11.575L2.067 8.85401C1.859 8.21001 2.149 7.50901 2.752 7.20101L5.299 5.90001C5.558 5.76801 5.768 5.55801 5.9 5.29901L7.202 2.75101C7.509 2.14901 8.21 1.85901 8.854 2.06701L11.576 2.94801C11.851 3.03801 12.149 3.03801 12.425 2.94801V2.94801Z",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M9 15L15 9",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M9.249 9C9.111 9 8.999 9.112 9 9.25C9 9.388 9.112 9.5 9.25 9.5C9.388 9.5 9.5 9.388 9.5 9.25C9.5 9.112 9.388 9 9.249 9",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M14.749 14.5C14.611 14.5 14.499 14.612 14.5 14.75C14.5 14.888 14.612 15 14.75 15C14.888 15 15 14.888 15 14.75C15 14.612 14.888 14.5 14.749 14.5",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var Pricing = (props) => /* @__PURE__ */ jsxs3(
  Icon2,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M11.89 12.11L12.44 11.56",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M8.57 15.43L8.02 15.98",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M8.013 14.071C7.922 14.448 8.004 14.854 8.299 15.149L8.575 15.425L8.904 15.754C9.332 16.182 10.026 16.182 10.454 15.754C10.809 15.399 10.878 14.847 10.619 14.416L9.844 13.122C9.586 12.691 9.654 12.139 10.009 11.784C10.437 11.356 11.131 11.356 11.559 11.784L11.888 12.113L12.164 12.389C12.458 12.683 12.54 13.088 12.451 13.464",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M15.8073 8.19265C15.9522 8.33754 15.9522 8.57244 15.8073 8.71732C15.6624 8.86221 15.4275 8.86221 15.2826 8.71732C15.1377 8.57244 15.1377 8.33753 15.2826 8.19265C15.4275 8.04777 15.6624 8.04777 15.8073 8.19265",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M13.512 4H17.897C19.059 4 20 4.941 20 6.102V10.487C20 11.045 19.778 11.579 19.384 11.974L10.974 20.384C10.153 21.205 8.82199 21.205 8.00099 20.384L3.61599 15.999C2.79499 15.178 2.79499 13.847 3.61599 13.026L12.026 4.616C12.42 4.222 12.955 4 13.512 4Z",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var AccountManagement = (props) => /* @__PURE__ */ jsxs3(
  Icon2,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M15 5.2C16.7 6.9 16.7 9.6 15 11.2C13.3 12.8 10.6 12.9 9.00001 11.2C7.40001 9.5 7.30001 6.8 9.00001 5.2C10.7 3.6 13.3 3.6 15 5.2",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M4 20C4 17.5 6 15.5 8.5 15.5H11.1",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M19 17.6V16.5C19 15.7 18.3 15 17.5 15C16.7 15 16 15.7 16 16.5V17.6",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M19 17.6H16C15.4 17.6 15 18 15 18.6V20C15 20.6 15.4 21 16 21H19C19.6 21 20 20.6 20 20V18.6C20 18 19.6 17.6 19 17.6Z",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var StoreSearch = (props) => /* @__PURE__ */ jsxs3(
  Icon2,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M10 20.91H3",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M18.853 15.006C20.336 16.489 20.176 18.99 18.375 20.255C17.229 21.059 15.628 21.059 14.482 20.255C12.68 18.991 12.521 16.489 14.004 15.006C15.344 13.667 17.515 13.667 18.853 15.006",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M21 22L18.852 19.852",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M4.22 10.78V20.91",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx3(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M19.699 10.778C21.397 10.766 22.504 9.085 21.768 7.636L20.052 4.259C19.662 3.489 18.84 3 17.938 3H6.062C5.16 3 4.338 3.489 3.947 4.259L2.231 7.636C1.495 9.085 2.602 10.766 4.3 10.778C5.717 10.778 6.866 9.81 6.866 8.615V8.567C6.866 9.788 8.015 10.778 9.432 10.778C10.851 10.778 12 9.788 12 8.567C12 9.788 13.149 10.778 14.566 10.778C15.983 10.778 17.132 9.788 17.132 8.567V8.615C17.133 9.81 18.282 10.778 19.699 10.778V10.778Z",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var Subscriptions = (props) => /* @__PURE__ */ jsx3(
  Icon2,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: /* @__PURE__ */ jsxs3("svg", { children: [
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M4.5 12.75L3 14.25L1.5 12.75",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M19.5 11.25L21 9.75L22.5 11.25",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M19.371 6.845C17.744 4.522 15.052 3 12 3C7.029 3 3 7.029 3 12C3 12.694 3.086 13.366 3.235 14.015",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M4.629 17.155C6.256 19.478 8.948 21 12 21C16.971 21 21 16.971 21 12C21 11.306 20.914 10.634 20.765 9.98499",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M13.706 9.091V8.315C13.706 7.317 12.938 6.5 12 6.5C11.062 6.5 10.294 7.317 10.294 8.315V9.091",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M14.669 9.091H9.331C8.886 9.091 8.514 9.429 8.471 9.873L7.976 15.055C7.927 15.561 8.326 16 8.836 16H15.165C15.674 16 16.073 15.561 16.025 15.054L15.53 9.872C15.487 9.429 15.115 9.091 14.669 9.091Z",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ] })
  }
);
var Fulfillment = (props) => /* @__PURE__ */ jsx3(
  Icon2,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: /* @__PURE__ */ jsxs3("svg", { children: [
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M18.704 18.296C19.323 18.915 19.323 19.918 18.704 20.536C18.085 21.155 17.082 21.155 16.464 20.536C15.845 19.917 15.845 18.914 16.464 18.296C17.083 17.677 18.086 17.677 18.704 18.296",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M7.704 18.296C8.323 18.915 8.323 19.918 7.704 20.536C7.085 21.155 6.082 21.155 5.464 20.536C4.846 19.917 4.845 18.914 5.464 18.296C6.083 17.678 7.085 17.677 7.704 18.296",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M10 4H14C14.552 4 15 4.448 15 5V15H2",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M5 19.416H3C2.448 19.416 2 18.968 2 18.416V13",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M15 7H19.323C19.732 7 20.1 7.249 20.251 7.629L21.857 11.643C21.951 11.879 22 12.131 22 12.385V18.333C22 18.885 21.552 19.333 21 19.333H19.169",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M16 19.42H8.17",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M22 14H18V10H21.2",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M2 4H7",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M2 7H5",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx3(
        "path",
        {
          d: "M3 10H2",
          stroke: "#F71963",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ] })
  }
);

// src/components/overview-card/index.tsx
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var IconsMap = [
  {
    name: "StorageUnit",
    Icon: StorageUnit
  },
  {
    name: "Board",
    Icon: Board
  },
  {
    name: "Integration",
    Icon: Integration
  },
  {
    name: "SearchList",
    Icon: SearchList
  },
  {
    name: "SearchDetails",
    Icon: SearchDetails
  },
  {
    name: "SwitchArrows",
    Icon: SwitchArrows
  },
  {
    name: "ChangeCart",
    Icon: ChangeCart
  },
  {
    name: "ToStore",
    Icon: ToStore
  },
  {
    name: "PaymentHand",
    Icon: PaymentHand
  },
  {
    name: "GlobeCart",
    Icon: GlobeCart
  },
  {
    name: "StoreCart",
    Icon: StoreCart
  },
  {
    name: "List",
    Icon: List
  },
  {
    name: "Blocks",
    Icon: Blocks
  },
  {
    name: "StoreData",
    Icon: StoreData
  },
  {
    name: "Cart",
    Icon: Cart
  },
  {
    name: "FileConfiguration",
    Icon: FileConfiguration
  },
  {
    name: "Platform",
    Icon: Platform
  },
  {
    name: "RestApis",
    Icon: RestApis
  },
  {
    name: "Catalog",
    Icon: Catalog
  },
  {
    name: "Orders",
    Icon: Orders
  },
  {
    name: "Checkout",
    Icon: Checkout
  },
  {
    name: "Payments",
    Icon: Payments
  },
  {
    name: "Promotions",
    Icon: Promotions
  },
  {
    name: "Pricing",
    Icon: Pricing
  },
  {
    name: "AccountManagement",
    Icon: AccountManagement
  },
  {
    name: "StoreSearch",
    Icon: StoreSearch
  },
  {
    name: "Subscriptions",
    Icon: Subscriptions
  },
  {
    name: "Fulfillment",
    Icon: Fulfillment
  }
];
var getIcon = (name) => {
  return IconsMap.find((icon2) => icon2.name === name)?.Icon;
};
var OverviewCard = ({ icon: icon2, children }) => {
  const Icon13 = getIcon(icon2);
  return /* @__PURE__ */ jsxs4(Flex, { sx: styles_default3.overviewCard, children: [
    Icon13 && /* @__PURE__ */ jsx4(Icon13, { sx: styles_default3.overviewIcon }),
    /* @__PURE__ */ jsx4(Box3, { children })
  ] });
};
var overview_card_default = OverviewCard;

// src/components/youtube-frame/index.tsx
var import_prop_types = __toESM(require_prop_types());
import { jsx as jsx5 } from "react/jsx-runtime";
var YoutubeFrame = ({ embedId }) => /* @__PURE__ */ jsx5("div", { className: "video-responsive", children: /* @__PURE__ */ jsx5(
  "iframe",
  {
    width: "100%",
    height: "480",
    src: `https://www.youtube.com/embed/${embedId}`,
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    title: "Embedded youtube"
  }
) });
YoutubeFrame.propTypes = {
  embedId: import_prop_types.default.string.isRequired
};
var youtube_frame_default = YoutubeFrame;

// src/components/steps/index.tsx
import { Box as Box4 } from "@vtex/brand-ui";

// src/components/steps/styles.ts
var steps = {
  ml: "4px",
  mt: "12px",
  mb: "27px",
  borderLeft: "1px solid #e5e7eb",
  pl: "25px",
  position: "relative",
  ".heading": {
    counterIncrement: `step`
  },
  ".heading:before": {
    content: `counter(step)`,
    position: "absolute",
    border: "4px solid #ffffff",
    width: "2em",
    height: "2em",
    left: "-1.3em",
    color: "#a1a1aa",
    backgroundColor: "#f2f3f6",
    borderRadius: "9999px",
    fontSize: "1em",
    textAlign: "center",
    lineHeight: "2em"
  }
};
var styles_default4 = {
  steps
};

// src/components/steps/index.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
var Steps = ({ children }) => {
  return /* @__PURE__ */ jsx6(Box4, { sx: styles_default4.steps, children });
};
var steps_default = Steps;

// src/components/lightbox/index.tsx
import { useEffect as useEffect3, useRef as useRef2, useState as useState2 } from "react";
import { Box as Box5, Button as Button2, Flex as Flex2 } from "@vtex/brand-ui";

// src/components/icons/close-icon.tsx
import { Icon as Icon3 } from "@vtex/brand-ui";
import { jsx as jsx7, jsxs as jsxs5 } from "react/jsx-runtime";
var CloseIcon = (props) => /* @__PURE__ */ jsxs5(
  Icon3,
  {
    ...props,
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx7(
        "path",
        {
          d: "M8 8L24 24",
          stroke: "currentcolor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx7(
        "path",
        {
          d: "M24 8L8 24",
          stroke: "currentcolor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var close_icon_default = CloseIcon;

// src/utils/hooks/useClickOutside.ts
import { useEffect as useEffect2 } from "react";
function useClickOutside(ref, openModal) {
  useEffect2(() => {
    function handleClickOutside(event) {
      const { body, documentElement } = document;
      if (ref.current && event.target instanceof Node && !ref.current.contains(event.target)) {
        openModal({ modalToggle: false });
        const scrollTop = body.getBoundingClientRect().top * -1;
        body.classList.remove("modal-open");
        documentElement.scrollTop = scrollTop;
        body.style.removeProperty("top");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
}

// src/components/lightbox/styles.ts
var imageContainer = {
  cursor: "pointer",
  width: "fit-content",
  borderRadius: "5px",
  mt: "16px",
  mb: "24px",
  transition: "0.3s",
  ":hover": {
    boxShadow: "2px 4px 8px 2px rgb(0 0 0 / 10%)"
  },
  "> img": {
    display: "block",
    padding: "0",
    margin: "0"
  }
};
var container = {
  margin: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.9)",
  position: "fixed",
  top: "0",
  left: "0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  zIndex: "10000"
};
var modal = {
  display: "inline-block",
  margin: "auto",
  boxShadow: "2px 4px 16px rgb(0 0 0 / 30%)",
  position: "relative",
  zIndex: "10001",
  padding: "0",
  "> img": {
    display: "block",
    maxHeight: "calc(100vh - 50px)",
    maxWidth: "calc(100vw - 50px)",
    width: "auto",
    margin: "0",
    padding: "0"
  }
};
var closeButton = {
  position: "absolute",
  zIndex: "10002",
  top: "10px",
  right: "10px",
  color: "#FEFEFE",
  ":hover": {
    color: "rgb(100, 100, 100)"
  }
};
var styles_default5 = {
  imageContainer,
  container,
  modal,
  closeButton
};

// src/components/lightbox/index.tsx
import { jsx as jsx8, jsxs as jsxs6 } from "react/jsx-runtime";
function LightBox({ children }) {
  const [isModalOpen, setIsModalOpen] = useState2(false);
  const modalRef = useRef2();
  useEffect3(() => {
    if (isModalOpen) {
      const scrollTop = document.body.getBoundingClientRect().top;
      document.body.style.top = `${scrollTop}px`;
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
      document.body.style.removeProperty("top");
    }
  }, [isModalOpen]);
  useClickOutside(modalRef, () => setIsModalOpen(false));
  return /* @__PURE__ */ jsxs6("div", { children: [
    isModalOpen && /* @__PURE__ */ jsxs6(Flex2, { sx: styles_default5.container, children: [
      /* @__PURE__ */ jsx8(
        Button2,
        {
          sx: styles_default5.closeButton,
          "aria-label": "Close",
          size: "small",
          variant: "tertiary",
          icon: () => /* @__PURE__ */ jsx8(close_icon_default, { size: 24 }),
          onClick: () => setIsModalOpen(false)
        }
      ),
      /* @__PURE__ */ jsx8(Box5, { sx: styles_default5.modal, ref: modalRef, children })
    ] }),
    /* @__PURE__ */ jsx8(Box5, { sx: styles_default5.imageContainer, onClick: () => setIsModalOpen(true), children })
  ] });
}

// src/components/whats-next-card/index.tsx
import { Box as Box6, Flex as Flex3, IconCaret, Text as Text2, Link } from "@vtex/brand-ui";

// src/components/whats-next-card/styles.ts
var container2 = {
  mt: "16px",
  padding: "16px",
  borderRadius: "4px",
  border: "1px solid #E7E9EE",
  width: ["100%", "49%"],
  transition: "all 0.3s ease-out",
  ":hover": {
    cursor: "pointer"
  },
  ":active, :hover": {
    borderColor: "muted.2",
    boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3 ease-out",
    ".title, .description": {
      transition: "all 0.3s ease-out",
      color: "#000711"
    },
    ".link, .caret": {
      transition: "all 0.3s ease-out",
      color: "muted.0"
    }
  }
};
var title = {
  mb: "8px",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: ["22px", "18px"],
  color: "muted.0"
};
var description = {
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "20px",
  color: "muted.0"
};
var linkContainer = {
  mt: "8px",
  alignItems: "center"
};
var link = {
  ...description,
  color: "muted.1"
};
var styles_default6 = { container: container2, title, description, linkContainer, link };

// src/components/whats-next-card/index.tsx
import { jsx as jsx9, jsxs as jsxs7 } from "react/jsx-runtime";
var WhatsNextCard = ({
  title: title4,
  description: description3,
  linkTitle,
  linkTo
}) => {
  return /* @__PURE__ */ jsx9(Link, { href: linkTo, sx: styles_default6.container, children: /* @__PURE__ */ jsxs7(Box6, { children: [
    /* @__PURE__ */ jsx9(Text2, { sx: styles_default6.title, className: "title", children: title4 }),
    /* @__PURE__ */ jsx9(Text2, { sx: styles_default6.description, className: "description", children: description3 }),
    /* @__PURE__ */ jsxs7(Flex3, { sx: styles_default6.linkContainer, children: [
      /* @__PURE__ */ jsx9(Text2, { sx: styles_default6.link, className: "link", children: linkTitle }),
      /* @__PURE__ */ jsx9(
        IconCaret,
        {
          className: "caret",
          color: "#A1A8B3",
          direction: "right",
          size: 16
        }
      )
    ] })
  ] }) });
};
var whats_next_card_default = WhatsNextCard;

// src/utils/context/libraryContext.tsx
import { createContext, useEffect as useEffect4, useState as useState3 } from "react";
import { SWRConfig } from "swr";
import { jsx as jsx10 } from "react/jsx-runtime";
var LibraryContext = createContext({
  headingItems: [],
  setHeadingItems: () => void 0,
  activeItem: {
    item: "",
    subItem: ""
  },
  setActiveItem: () => void 0,
  goToPreviousItem: () => void 0,
  goToPreviousSubItem: () => void 0,
  isEditorPreview: false,
  sidebarSectionHidden: false,
  activeSectionName: "",
  activeSidebarElement: "",
  sidebarDataMaster: {},
  setIsEditorPreview: () => void 0,
  sidebarElementStatus: /* @__PURE__ */ new Map(),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  setSidebarDataMaster: (_) => void 0,
  setSidebarSectionHidden: () => void 0,
  setActiveSectionName: () => void 0,
  setActiveSidebarElement: () => void 0,
  toggleSidebarElementStatus: () => void 0,
  openSidebarElement: () => void 0,
  closeSidebarElements: () => void 0,
  sidebarSections: [],
  setSidebarSections: () => void 0
});
var LibraryContextProvider = ({ children, ...props }) => {
  const [headingItems, setHeadingItems] = useState3([]);
  const [activeItem, setActiveItem] = useState3({
    item: "",
    subItem: ""
  });
  const [activeSectionName, setActiveSectionName] = useState3(
    props.sectionSelected
  );
  const [sidebarSectionHidden, setSidebarSectionHidden] = useState3(false);
  const [activeSidebarElement, setActiveSidebarElement] = useState3("");
  const [sidebarElementStatus, setSidebarElementStatus] = useState3(/* @__PURE__ */ new Map());
  const [sidebarDataMaster, setSidebarDataMaster] = useState3(props.fallback);
  const [isEditorPreview, setIsEditorPreview] = useState3(props.isPreview);
  const [sidebarSections, setSidebarSections] = useState3(props.sections);
  useEffect4(() => {
    setSidebarDataMaster(props.fallback);
  }, [props.fallback]);
  useEffect4(() => {
    if (props.sectionSelected === "")
      setSidebarSectionHidden(true);
    else if (props.sectionSelected !== activeSectionName)
      setActiveSectionName(props.sectionSelected);
  }, [props.sectionSelected]);
  const { fallback } = props;
  const toggleSidebarElementStatus = (title4) => {
    setSidebarElementStatus((sidebarElementStatus2) => {
      const open = sidebarElementStatus2.has(title4) === false ? true : !sidebarElementStatus2.get(title4);
      return new Map(sidebarElementStatus2.set(title4, open));
    });
  };
  const closeSidebarElements = (parentsArray) => {
    sidebarElementStatus.forEach((_value, key) => {
      if (!parentsArray.includes(key)) {
        setSidebarElementStatus((sidebarElementStatus2) => {
          return new Map(sidebarElementStatus2.set(key, false));
        });
      }
    });
  };
  const openSidebarElement = (title4) => {
    setSidebarElementStatus((sidebarElementStatus2) => {
      return new Map(sidebarElementStatus2.set(title4, true));
    });
  };
  const goToPreviousItem = () => {
    setActiveItem(({ item: item2, subItem }) => {
      const index = headingItems.findIndex((heading) => heading.slug === item2);
      if (index === -1)
        return { item: item2, subItem };
      const previousItem = !index ? "" : headingItems[index - 1].slug;
      const previousChildren = !index ? [] : headingItems[index - 1].children;
      const previousSubItem = !previousChildren.length ? "" : previousChildren.slice(-1)[0].slug;
      return {
        item: previousItem,
        subItem: previousSubItem
      };
    });
  };
  const goToPreviousSubItem = () => {
    setActiveItem(({ item: item2, subItem }) => {
      const heading = headingItems.find((heading2) => heading2.slug === item2);
      const index = heading?.children.findIndex(
        (child) => child.slug === subItem
      );
      if (!heading || index === -1)
        return { item: item2, subItem };
      return {
        item: item2,
        subItem: !index ? "" : heading.children[index - 1].slug
      };
    });
  };
  return /* @__PURE__ */ jsx10(
    LibraryContext.Provider,
    {
      value: {
        headingItems,
        activeItem,
        setHeadingItems,
        setActiveItem,
        goToPreviousItem,
        goToPreviousSubItem,
        isEditorPreview,
        setIsEditorPreview,
        sidebarSectionHidden,
        activeSectionName,
        activeSidebarElement,
        sidebarElementStatus,
        setActiveSectionName,
        setSidebarSectionHidden,
        setActiveSidebarElement,
        toggleSidebarElementStatus,
        openSidebarElement,
        closeSidebarElements,
        sidebarDataMaster,
        setSidebarDataMaster,
        sidebarSections,
        setSidebarSections,
        ...props
      },
      children: /* @__PURE__ */ jsx10(
        SWRConfig,
        {
          value: {
            fallback: {
              "/api/navigation": fallback ? fallback : []
            }
          },
          children
        }
      )
    }
  );
};
var libraryContext_default = LibraryContextProvider;

// src/utils/mermaidInit.ts
import mermaid from "mermaid";
var mermaidInit = () => {
  mermaid.initialize({
    theme: "base",
    themeVariables: {
      primaryColor: "#F4F4F4",
      primaryTextColor: "#E31C58",
      primaryBorderColor: "#E31C58",
      lineColor: "#E31C58"
    }
  });
};
var mermaidInit_default = mermaidInit;

// src/lib/markdown-renderer/styles.module.css
var styles_module_default = {};

// src/lib/markdown-renderer/components.tsx
import { jsx as jsx11, jsxs as jsxs8 } from "react/jsx-runtime";
mermaidInit_default();
var ObservableHeading = ({
  level,
  onEnterView,
  onLeaveView,
  ...headingProps
}) => {
  const [y, setY] = useState4(Infinity);
  const toSlugify = childrenToString(headingProps.children);
  const slug = slugify(toSlugify);
  return /* @__PURE__ */ jsx11(
    InView,
    {
      threshold: 0.5,
      className: "heading",
      rootMargin: "0px 0px -80% 0px",
      onChange: (inView, entry) => {
        if (inView)
          onEnterView(slug);
        else
          onLeaveView(slug, entry, y);
        setY(entry.boundingClientRect.y);
      },
      children: level === 2 ? /* @__PURE__ */ jsx11("h2", { id: slug, className: styles_module_default.heading, ...headingProps }) : /* @__PURE__ */ jsx11("h3", { id: slug, className: styles_module_default.heading, ...headingProps })
    }
  );
};
var Callout = ({ node, icon: icon2, ...props }) => {
  const blockquoteType = icon2 ? icon2 : "info";
  return /* @__PURE__ */ jsx11(
    "blockquote",
    {
      className: `${styles_module_default.blockquote} ${blockquoteType === "info" ? styles_module_default.blockquoteInfo : blockquoteType === "danger" ? styles_module_default.blockquoteDanger : blockquoteType === "warning" ? styles_module_default.blockquoteWarning : blockquoteType === "success" ? styles_module_default.blockquoteSuccess : ""}`,
      children: /* @__PURE__ */ jsx11("p", { ...props })
    }
  );
};
var MermaidDiagram = ({ node, ...props }) => {
  const viewerRef = useRef3(null);
  const ref = useRef3();
  const [diagram, setDiagram] = useState4("");
  const [width, setWidth] = useState4(0);
  const [height, setHeight] = useState4(0);
  useEffect5(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (!ref.current)
        return;
      setWidth(ref.current?.clientWidth ?? 0);
      setHeight(ref.current?.clientWidth / 2);
    });
    const mermaidRenderer = async function() {
      const { svg } = await mermaid2.render("mermaid-id", props.children);
      setDiagram(
        svg.replace('id="mermaid-id"', "").replaceAll("#mermaid-id", "")
      );
    };
    mermaidRenderer();
    if (ref.current)
      resizeObserver.observe(ref.current);
  }, []);
  return /* @__PURE__ */ jsx11(Box7, { ref, className: styles_module_default.svgContainer, children: /* @__PURE__ */ jsx11(
    UncontrolledReactSVGPanZoom,
    {
      ref: viewerRef,
      width,
      height,
      miniatureProps: {
        position: "none",
        width: 100,
        height: 80,
        background: "#616264"
      },
      background: "rgba(0, 0, 0, 0)",
      detectAutoPan: false,
      detectWheel: false,
      children: /* @__PURE__ */ jsx11("svg", { width, height, children: parse(diagram) })
    }
  ) });
};
var ImageComponent = ({ node, ...props }) => {
  const [srcHasError, setSrcHasError] = useState4(false);
  const regularImg = (
    // eslint-disable-next-line @next/next/no-img-element
    /* @__PURE__ */ jsx11("img", { src: props.src, alt: props.alt, onError: () => setSrcHasError(true) })
  );
  const errorMessage = /* @__PURE__ */ jsxs8("blockquote", { className: `${styles_module_default.blockquote} ${styles_module_default.blockquoteWarning}`, children: [
    "ErrorMessage",
    " ",
    props.src
  ] });
  let data = { base64: "", img: {} };
  try {
    data = JSON.parse(props.alt);
  } catch (error) {
    console.log(`Error parsing`, error);
    return errorMessage;
  }
  return !srcHasError ? /* @__PURE__ */ jsx11(LightBox, { children: regularImg }) : errorMessage;
};
var components_default = {
  OverviewCard: overview_card_default,
  WhatsNextCard: whats_next_card_default,
  YoutubeFrame: youtube_frame_default,
  Steps: steps_default,
  Flex: ({ node, ...props }) => /* @__PURE__ */ jsx11(Flex4, { className: styles_module_default.flexWrap, ...props }),
  table: ({ node, ...props }) => /* @__PURE__ */ jsx11("table", { ...props }),
  td: ({ node, ...props }) => /* @__PURE__ */ jsx11("td", { ...props }),
  img: ImageComponent,
  blockquote: ({ ...props }) => {
    return /* @__PURE__ */ jsx11(Callout, { ...props });
  },
  code: ({ node, ...props }) => {
    return /* @__PURE__ */ jsx11("code", { className: styles_module_default.code, ...props });
  },
  pre: ({ ...props }) => {
    if (props.className && props.className === "mermaid")
      return /* @__PURE__ */ jsx11(MermaidDiagram, { ...props });
    return /* @__PURE__ */ jsx11(code_block_default, { ...props });
  },
  h2: ({ node, ...props }) => {
    const { activeItem, setActiveItem, goToPreviousItem } = useContext(LibraryContext);
    return /* @__PURE__ */ jsx11(
      ObservableHeading,
      {
        level: 2,
        onEnterView: (slug) => {
          setActiveItem(({ item: item2, subItem }) => ({
            item: slug,
            subItem: item2 !== slug ? "" : subItem
          }));
        },
        onLeaveView: (slug, entry, y) => {
          if (entry.boundingClientRect.y > y && activeItem.item === slug) {
            goToPreviousItem();
          }
        },
        ...props
      }
    );
  },
  h3: ({ node, ...props }) => {
    const { activeItem, setActiveItem, goToPreviousSubItem } = useContext(LibraryContext);
    return /* @__PURE__ */ jsx11(
      ObservableHeading,
      {
        level: 3,
        onEnterView: (slug) => {
          setActiveItem(({ item: item2 }) => ({
            item: item2,
            subItem: slug
          }));
        },
        onLeaveView: (slug, entry, y) => {
          if (entry.boundingClientRect.y > y && activeItem.subItem === slug) {
            goToPreviousSubItem();
          }
        },
        ...props
      }
    );
  }
};

// src/lib/markdown-renderer/MarkdownRenderer.tsx
import { jsx as jsx12 } from "react/jsx-runtime";
var MDXRemote2 = MDXRemote;
var MarkdownRenderer = ({ serialized }) => /* @__PURE__ */ jsx12(Box8, { children: /* @__PURE__ */ jsx12(MDXRemote2, { components: components_default, lazy: true, ...serialized }) });
var MarkdownRenderer_default = MarkdownRenderer;

// src/lib/table-of-contents/TableOfContents.tsx
import { useContext as useContext2, useEffect as useEffect6 } from "react";
import Link2 from "next/link.js";
import { useRouter } from "next/router.js";
import { Box as Box9, Text as Text3 } from "@vtex/brand-ui";
import AnimateHeight from "react-animate-height";

// src/lib/table-of-contents/styles.ts
var itemsContainer = {
  position: "sticky",
  top: "calc(5rem + 32px)",
  borderLeft: "1px solid #E7E9EE"
};
var item = (level, active) => {
  const defaultLineHeight = `${level === 1 ? 18 : 22}px`;
  return {
    ml: "-1px",
    pl: `${level * 8}px`,
    py: ["6px", "6px", "6px", "6px", "4px", "4px"],
    borderLeft: `1px solid ${active && level === 1 ? "#E31C58" : "#E7E9EE"}`,
    fontSize: ["16px", "16px", "16px", "16px", "12px", "16px"],
    lineHeight: [
      defaultLineHeight,
      defaultLineHeight,
      defaultLineHeight,
      defaultLineHeight,
      `${level === 1 ? 16 : 18}px`,
      defaultLineHeight
    ],
    fontWeight: `${active ? "600" : "400"}`,
    color: `${active ? "#0C1522" : "muted.0"}`,
    ":hover": {
      color: "#000711"
    }
  };
};
var subItemsContainer = {
  ml: "16px",
  borderLeft: "1px solid #E7E9EE"
};
var styles_default7 = { itemsContainer, item, subItemsContainer };

// src/lib/table-of-contents/TableOfContents.tsx
import { jsx as jsx13, jsxs as jsxs9 } from "react/jsx-runtime";
var TableOfContents = () => {
  const router = useRouter();
  const { headingItems, activeItem, setHeadingItems, setActiveItem } = useContext2(LibraryContext);
  useEffect6(() => {
    console.log("ENTROUUUUUUUUU");
    const headings = [];
    if (!headings.length) {
      document.querySelectorAll("h2, h3").forEach((heading) => {
        const headingSlug = heading.id;
        const item2 = {
          title: removeHTML(heading.innerHTML).replace(":", ""),
          slug: headingSlug
        };
        if (heading.tagName === "H2") {
          headings.push({ ...item2, children: [] });
        } else {
          headings[headings.length - 1].children.push({ ...item2 });
        }
      });
      setHeadingItems(headings);
    }
  }, [router.asPath]);
  const Item = ({
    title: title4,
    slug,
    level,
    active
  }) => {
    return /* @__PURE__ */ jsx13(
      Link2,
      {
        href: `#${slug}`,
        onClick: () => {
          setActiveItem(({ item: item2 }) => ({
            item: level === 1 ? slug : item2,
            subItem: level === 1 ? "" : slug
          }));
        },
        children: /* @__PURE__ */ jsx13(Text3, { sx: styles_default7.item(level, active), children: title4 })
      }
    );
  };
  return /* @__PURE__ */ jsx13(Box9, { sx: styles_default7.itemsContainer, "data-cy": "table-of-contents", children: headingItems.map((item2) => /* @__PURE__ */ jsxs9(Box9, { children: [
    /* @__PURE__ */ jsx13(
      Item,
      {
        title: item2.title,
        slug: item2.slug,
        level: 1,
        active: item2.slug === activeItem.item
      }
    ),
    /* @__PURE__ */ jsx13(
      AnimateHeight,
      {
        duration: 300,
        height: item2.slug === activeItem.item ? "auto" : 0,
        children: /* @__PURE__ */ jsx13(Box9, { sx: styles_default7.subItemsContainer, children: item2.children.map((subItem) => /* @__PURE__ */ jsx13(
          Item,
          {
            title: subItem.title,
            slug: subItem.slug,
            level: 2,
            active: subItem.slug === activeItem.subItem
          },
          subItem.slug
        )) })
      }
    )
  ] }, item2.slug)) });
};
var TableOfContents_default = TableOfContents;

// src/lib/sidebar/index.tsx
import { useEffect as useEffect9, useRef as useRef5, useState as useState8, useContext as useContext5 } from "react";
import { Flex as Flex10, Text as Text7, Box as Box14 } from "@vtex/brand-ui";
import Link4 from "next/link";

// src/lib/sidebar/styles.ts
var sidebar = {
  display: [
    "none !important",
    "none !important",
    "none !important",
    "flex !important"
  ],
  position: "sticky",
  left: "0",
  top: "5rem",
  flex: "1 0 auto",
  height: "calc(100vh - 5rem)",
  width: "auto",
  minWidth: "auto",
  transition: "all 0.3s ease-in-out",
  ".active": {
    marginLeft: "-276px",
    transition: "all 0.3s ease-in-out"
  },
  ".iconContainerExpanded": {
    transition: "all 0.3s ease-in-out",
    width: "160px"
  },
  ".iconDescriptionExpanded": {
    display: "block"
  }
};
var sidebarIcons = {
  width: ["56px", "56px", "56px", "56px", "56px", "160px"],
  minWidth: "max-content",
  transition: "all 0.3s ease-in-out",
  flexDirection: "column",
  borderRight: "1px solid #E7E9EE",
  background: "#FFFFFF",
  zIndex: "2",
  paddingBottom: "32px"
};
var linkContainer2 = {
  minWidth: "100%"
};
var iconBox = {
  mt: ["16px"],
  width: "100%",
  maxWidth: "144px",
  paddingLeft: ["0", "0", "0", "8px"],
  paddingRight: ["0", "0", "0", "8px", "8px", "0"],
  py: ["0", "0", "0", "8px", "8px", "10px"],
  height: "40px",
  borderRadius: "4px",
  alignItems: "center",
  justifyContent: "flex-start",
  background: "transparent",
  color: "muted.0",
  cursor: "pointer",
  ":hover": {
    background: "#F8F7FC",
    color: "#000711",
    path: {
      stroke: [
        "#000711",
        "#000711",
        "#000711",
        "#000711",
        "#000711",
        "#4A596B"
      ]
    }
  }
};
var iconBoxActive = {
  ...iconBox,
  background: ["#F8F7FC", "#F8F7FC", "#F8F7FC", "#F8F7FC", "#F8F7FC", "none"],
  color: "#E31C58"
};
var sidebarIconsContainer = {
  width: "100%",
  flexDirection: "column",
  alignItems: "flex-start",
  px: ["0", "0", "0", "8px"]
};
var icon = {
  width: ["24px"],
  height: ["24px"]
};
var iconActive = {
  ...icon,
  "> path": {
    stroke: "#E31C58"
  }
};
var sectionDivider = {
  px: "8px",
  marginTop: "16px",
  hr: {
    border: "1px solid #E7E9EE",
    borderTop: "none"
  }
};
var iconTitle = {
  display: ["none", "none", "none", "none", "none", "block"],
  width: "100%",
  fontSize: "14px",
  ml: ["8px", "8px", "8px", "8px", "8px", "12px"],
  whiteSpace: "nowrap",
  overflowX: "hidden",
  textOverflow: "ellipsis"
};
var iconTooltip = {
  display: [
    "flex !important",
    "flex !important",
    "flex !important",
    "flex !important",
    "flex !important",
    "none !important"
  ]
};
var styles_default8 = {
  sidebar,
  sidebarIcons,
  sidebarIconsContainer,
  linkContainer: linkContainer2,
  iconBox,
  icon,
  iconActive,
  iconBoxActive,
  sectionDivider,
  iconTitle,
  iconTooltip
};

// src/lib/sidebar/functions.ts
var iconTooltipStyle = (tooltipState) => {
  const iconTooltip2 = {
    display: [
      "flex",
      "flex",
      "flex",
      "flex",
      "flex",
      tooltipState ? "flex" : "none !important"
    ]
  };
  return iconTooltip2;
};

// src/components/tooltip/index.tsx
import { useEffect as useEffect7, useRef as useRef4, useState as useState5 } from "react";
import { Box as Box10, Flex as Flex5 } from "@vtex/brand-ui";

// src/components/tooltip/styles.ts
var tooltipContainer = (sx, placement, width, height, x, y) => {
  const position = {
    bottom: {
      left: `${x + width / 2}px`,
      top: `${y + height + 3}px`
    },
    left: {
      left: `${x - 1}px`,
      top: `${y + height / 2}px`
    },
    top: {
      left: `${x + width / 2}px`,
      top: `${y - 3}px`
    },
    right: {
      left: `${x + width + 1}px`,
      top: `${y + height / 2}px`
    }
  };
  const translation = {
    bottom: "translateX(-50%)",
    left: "translateX(-100%) translateY(-50%)",
    top: "translateX(-50%) translateY(-100%)",
    right: "translateY(-50%)"
  };
  const direction = {
    bottom: "column",
    left: "row-reverse",
    top: "column-reverse",
    right: "row"
  };
  return {
    ...sx,
    zIndex: "100",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    ...position[placement],
    transform: translation[placement],
    flexDirection: direction[placement]
  };
};
var caret = (placement) => {
  const rotation = {
    bottom: 0,
    left: 90,
    top: 180,
    right: 270
  };
  const translation = {
    bottom: 1,
    left: 3,
    top: 1,
    right: 3
  };
  return {
    width: "8px",
    height: "4px",
    minWidth: "initial",
    minHeight: "initial",
    transform: `rotate(${rotation[placement]}deg) translateY(${translation[placement]}px)`
  };
};
var label = {
  borderRadius: "4px",
  backgroundColor: "black",
  color: "white",
  fontSize: "12px",
  fontWeight: "400",
  lineHeight: "130%"
};
var labelContibutorsContainer = {
  ...label,
  padding: "4px 8px"
};
var labelDocumentationContainer = {
  ...label,
  width: "284px",
  textAlign: "center",
  px: "12px",
  py: "8px"
};
var labelStyle = (documentationSection) => {
  if (documentationSection)
    return labelDocumentationContainer;
  return labelContibutorsContainer;
};
var styles_default9 = { tooltipContainer, caret, labelStyle };

// src/components/icons/caret.tsx
import { Icon as Icon4 } from "@vtex/brand-ui";
import { jsx as jsx14 } from "react/jsx-runtime";
var CaretIcon = (props) => /* @__PURE__ */ jsx14(
  Icon4,
  {
    ...props,
    width: "9",
    height: "4",
    viewBox: "0 0 9 4",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx14(
      "path",
      {
        d: "M5.20686 0.707106L8.49976 4L0.499756 4L3.79265 0.707107C4.18317 0.316583 4.81634 0.316582 5.20686 0.707106Z",
        fill: "black"
      }
    )
  }
);
var caret_default = CaretIcon;

// src/components/tooltip/index.tsx
import { jsx as jsx15, jsxs as jsxs10 } from "react/jsx-runtime";
var Tooltip = ({ children, label: label2, placement, sx, isCard }) => {
  const box3 = useRef4();
  const [boxWidth, setBoxWidth] = useState5(0);
  const [boxHeight, setBoxHeight] = useState5(0);
  const [boxOffsetLeft, setBoxOffsetLeft] = useState5(0);
  const [boxOffsetTop, setBoxOffsetTop] = useState5(0);
  const [visible, setVisible] = useState5(false);
  useEffect7(() => {
    if (box3.current) {
      setBoxWidth(box3.current.clientWidth);
      setBoxHeight(box3.current.clientHeight);
      setBoxOffsetLeft(box3.current.offsetLeft);
      setBoxOffsetTop(box3.current.offsetTop);
    }
  }, [
    box3.current,
    box3.current?.clientWidth,
    box3.current?.clientHeight,
    box3.current?.offsetLeft,
    box3.current?.offsetTop
  ]);
  return /* @__PURE__ */ jsxs10(Box10, { children: [
    /* @__PURE__ */ jsx15(
      Box10,
      {
        ref: box3,
        onMouseEnter: () => setVisible(true),
        onMouseLeave: () => setVisible(false),
        children
      }
    ),
    visible && (isCard ?? true) && /* @__PURE__ */ jsxs10(
      Flex5,
      {
        sx: styles_default9.tooltipContainer(
          sx,
          placement || "top",
          boxWidth,
          boxHeight,
          boxOffsetLeft,
          boxOffsetTop
        ),
        children: [
          /* @__PURE__ */ jsx15(caret_default, { sx: styles_default9.caret(placement || "top") }),
          /* @__PURE__ */ jsx15(Box10, { sx: styles_default9.labelStyle(isCard ?? false), children: label2 })
        ]
      }
    )
  ] });
};
var tooltip_default = Tooltip;

// src/utils/navigation-utils.ts
var flattenJSON = (obj = {}, res = {}, extraKey = "") => {
  for (const key in obj) {
    if (typeof obj[key] !== "object") {
      res[extraKey + key] = obj[key];
    } else {
      flattenJSON(obj[key], res, `${extraKey}${key}.`);
    }
  }
  return res;
};
var getKeyByEndpoint = (object, endpoint, slug, method) => {
  const slugPaths = Object.keys(object).filter((key) => object[key] === slug);
  let path = "";
  slugPaths?.map((el) => {
    if (method && object[`${el.replace(".slug", ".method")}`] == method?.toUpperCase() && object[`${el.replace(".slug", ".endpoint")}`] == endpoint) {
      path = el;
    } else if (hasChildren(object, el.replace(".slug", ".children"))) {
      path = el;
    }
  });
  return path;
};
function hasChildren(flattenedJson, elementKey) {
  for (const key in flattenedJson) {
    if (key.startsWith(`${elementKey}.`)) {
      return true;
    }
  }
  return false;
}
var getParents = (path, data, flattenedSidebar, parentsArray, parent) => {
  const pathParts = path?.split("children");
  pathParts?.splice(-1);
  let prev = "";
  pathParts?.map((el) => {
    el = prev + el;
    prev = el + "children";
    if (!parent || flattenedSidebar[`${el}${data}`].includes(parent)) {
      parentsArray.push(flattenedSidebar[`${el}${data}`]);
    }
  });
  return parentsArray;
};

// src/utils/sidebar-utils.ts
import { useRouter as useRouter2 } from "next/router";
import { useEffect as useEffect8 } from "react";
var getIcon2 = (doc, sections) => {
  for (const section of sections) {
    return section.find((icon2) => icon2.title === doc)?.Icon;
  }
};
var updateOpenPage = ({
  parentsArray = [],
  context,
  setExpandDelayStatus
}) => {
  const {
    activeSidebarElement,
    sidebarDataMaster,
    setActiveSidebarElement,
    openSidebarElement,
    closeSidebarElements
  } = context;
  const flattenedSidebar = flattenJSON(sidebarDataMaster);
  const router = useRouter2();
  let activeSlug = "";
  const querySlug = router.query.slug;
  if (querySlug && router.pathname === "/docs/api-reference/[slug]") {
    activeSlug = router.asPath.replace("/docs/api-reference/", "");
    const docPath = activeSlug.split("/");
    const hasHashTag = router.asPath.indexOf("#") > -1;
    const apiSlug = docPath[0].split(hasHashTag ? "#" : "?endpoint=")[0];
    const endpoint = "/" + docPath.splice(1, docPath.length).join("/");
    let keyPath;
    if (endpoint == "/") {
      activeSlug = apiSlug;
      keyPath = getKeyByEndpoint(flattenedSidebar, "", apiSlug);
    } else {
      const method = docPath[0].split(hasHashTag ? "#" : "?endpoint=")[1].split("-")[0];
      keyPath = getKeyByEndpoint(flattenedSidebar, endpoint, apiSlug, method);
    }
    parentsArray.push(activeSlug);
    if (keyPath) {
      getParents(keyPath, "slug", flattenedSidebar, parentsArray);
    }
  } else {
    activeSlug = parentsArray[parentsArray.length - 1];
  }
  useEffect8(() => {
    const timer = setTimeout(
      () => setExpandDelayStatus && setExpandDelayStatus(false),
      5e3
    );
    closeSidebarElements(parentsArray);
    parentsArray.forEach((slug) => {
      openSidebarElement(slug);
    });
    setActiveSidebarElement(activeSlug?.replace("?endpoint=", "#"));
    return () => {
      clearTimeout(timer);
    };
  }, [activeSidebarElement, router]);
};

// src/components/sidebar-section/index.tsx
import { Flex as Flex9, Box as Box13, Text as Text6, Button as Button4 } from "@vtex/brand-ui";
import { useContext as useContext4, useMemo, useState as useState7 } from "react";

// src/components/sidebar-section/styles.ts
var sidebarContainer = {
  position: "relative",
  width: "auto",
  height: "inherit",
  borderRight: "1px solid #E7E9EE",
  zIndex: "1",
  left: "0",
  transition: "all 0.3s ease-in-out",
  ".toggleIcon": {
    opacity: "0",
    transition: "all 0.3s ease-out"
  },
  ".sidebarHide": {
    opacity: "0",
    transition: "all 0.5s ease-out"
  },
  ":hover": {
    ".toggleIcon": {
      opacity: "100",
      transition: "all 0.3s ease-out"
    }
  }
};
var sidebarContainerHamburger = {
  width: "auto",
  minHeight: "692px",
  zIndex: "1"
};
var sidebarContainerBox = {
  opacity: "100",
  paddingTop: "34px",
  paddingBottom: "24px",
  overflowY: "auto",
  height: "inherit",
  maskImage: "linear-gradient(to top, transparent, black), linear-gradient(to left, transparent 17px, black 17px)",
  maskSize: "100% 20000px",
  maskPosition: "left bottom",
  transition: "mask-position 0.3s, -webkit-mask-position 0.3s",
  ":hover": {
    maskPosition: "left top"
  }
};
var sidebarContainerBoxHamburger = {
  opacity: "100",
  transition: "all 1s ease-out"
};
var sidebarContainerBody = {
  px: "17px"
};
var sidebarContainerHeader = {
  ...sidebarContainerBody
};
var sidebarContainerTitle = {
  alignItems: "center",
  lineHeight: "22px",
  gap: "5px",
  padding: "17px 0px 17px 17px",
  borderBottom: "1px solid #E7E9EE"
};
var sidebarTitle = {
  display: "flex",
  alignItems: "center",
  fontSize: "16px",
  lineHeight: "18px"
};
var sidebarHelpIcon = {
  ml: "4px",
  width: "24px",
  height: "24px"
};
var searchBox = {
  mt: "16px",
  mb: "20px",
  alignItems: "center",
  borderRadius: "4px",
  background: "#F4F4F4",
  width: "265px",
  height: "40px",
  paddingLeft: "12px"
};
var searchInput = {
  width: "auto",
  background: "#F4F4F4",
  border: "#F4F4F4",
  color: "#545454",
  fontSize: ["14px"]
};
var searchIcon = {
  minWidth: "16px",
  minHeight: "16px",
  width: "16px",
  mr: "8px"
};
var toggleIconBox = {
  justifyContent: "center",
  alignItems: "center",
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  border: "1px solid #E7E9EE",
  background: "#FFFFFF",
  boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.1)",
  position: "absolute",
  top: "32px",
  right: "-16px",
  cursor: "pointer"
};
var toggleIconBoxActive = {
  ...toggleIconBox,
  opacity: "100 !important"
};
var toggleIcon = {
  transform: "scaleX(-1)"
};
var arrowButton = {
  padding: "0px"
};
var previewMode = {
  display: "flex",
  color: "#A87600",
  backgroundColor: "#ffe5b5",
  padding: "10px",
  borderRadius: "10px",
  fontWeight: "600",
  fontSize: "14px",
  lineHeight: "20px",
  letterSpacing: "0.5px",
  mb: "20px",
  svg: {
    width: "20px",
    mr: "10px"
  }
};
var styles_default10 = {
  sidebarContainer,
  sidebarContainerHamburger,
  sidebarContainerBox,
  sidebarContainerBoxHamburger,
  sidebarContainerBody,
  sidebarContainerHeader,
  sidebarContainerTitle,
  sidebarTitle,
  sidebarHelpIcon,
  searchBox,
  searchInput,
  searchIcon,
  toggleIconBox,
  toggleIconBoxActive,
  toggleIcon,
  arrowButton,
  previewMode
};

// src/components/sidebar-section-filter/index.tsx
import { Box as Box11, Flex as Flex7, Text as Text5 } from "@vtex/brand-ui";

// src/components/method-category/index.tsx
import { Flex as Flex6, Text as Text4 } from "@vtex/brand-ui";

// src/components/method-category/styles.ts
var container3 = {
  border: "1px solid #DDDDDD",
  background: "#F4F4F4",
  borderRadius: "2px",
  width: "24px",
  height: "24px",
  alignItems: "center",
  justifyContent: "center"
};
var text = {
  fontWeight: "600",
  fontSize: "12px"
};
var closeIcon = {
  minWidth: "12px",
  minHeight: "12px",
  height: "12px",
  width: "12px",
  ml: "4px"
};
var styles_default11 = {
  container: container3,
  text,
  closeIcon
};

// src/components/method-category/functions.ts
var methodsColors = {
  POST: {
    border: "1px solid #7CBBEA",
    color: "#2978B5",
    background: "#DEECF7"
  },
  GET: {
    border: "1px solid #83D187",
    color: "#38853C",
    background: "#DFF1E0"
  },
  PUT: {
    border: "1px solid #F5AE70",
    color: "#D56A00",
    background: "#FFEBD7"
  },
  DELETE: {
    border: "1px solid #F49494",
    color: "#CC3D3D",
    background: "#F8E3E3"
  },
  PATCH: {
    border: "1px solid #afa871",
    color: "#6C6314",
    background: "#e9e7da"
  }
};
var categoryStyle = (method, active, sx) => {
  const categoryColors = methodsColors[method] || {
    border: "1px solid #F49494",
    color: "#CC3D3D",
    background: "#F8E3E3"
  };
  const categoryStyle2 = active ? {
    ...styles_default11.container,
    ...categoryColors,
    ...sx,
    ":hover": {
      ".filter-close-button": {
        rect: {
          fill: categoryColors.color
        },
        path: {
          stroke: "#DEECF7"
        }
      }
    }
  } : {
    ...styles_default11.container,
    color: categoryColors.color,
    ...sx
  };
  return categoryStyle2;
};
var categoryText = (method, origin) => {
  const textPascalCase = method[0] + method.slice(1).toLowerCase();
  if (origin == "filter")
    return textPascalCase;
  return textPascalCase.slice(0, 2);
};
var closeCategoryStyle = (method) => {
  const categoryColors = methodsColors[method];
  const categoryStyle2 = {
    ...styles_default11.closeIcon,
    rect: {
      fill: "transparent"
    },
    path: {
      stroke: categoryColors.color
    }
  };
  return categoryStyle2;
};

// src/components/icons/close-filter-icon.tsx
import { Icon as Icon5 } from "@vtex/brand-ui";
import { jsx as jsx16, jsxs as jsxs11 } from "react/jsx-runtime";
var CloseFilterIcon = (props) => /* @__PURE__ */ jsxs11(
  Icon5,
  {
    ...props,
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx16("rect", { width: "12", height: "12", rx: "2", fill: "#2978B5" }),
      /* @__PURE__ */ jsx16(
        "path",
        {
          d: "M3 3L9 9",
          stroke: "#DEECF7",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx16(
        "path",
        {
          d: "M9 3L3 9",
          stroke: "#DEECF7",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var close_filter_icon_default = CloseFilterIcon;

// src/components/method-category/index.tsx
import { jsx as jsx17, jsxs as jsxs12 } from "react/jsx-runtime";
var MethodCategory = ({
  method,
  active,
  origin,
  sx
}) => {
  return /* @__PURE__ */ jsxs12(Flex6, { className: "method-category", sx: categoryStyle(method, active, sx), children: [
    /* @__PURE__ */ jsx17(Text4, { sx: styles_default11.text, children: categoryText(method, origin) }),
    origin === "filter" && active && /* @__PURE__ */ jsx17(
      close_filter_icon_default,
      {
        className: "filter-close-button",
        sx: closeCategoryStyle(method)
      }
    )
  ] });
};
var method_category_default = MethodCategory;

// src/components/sidebar-section-filter/index.tsx
import { useState as useState6 } from "react";

// src/components/sidebar-section-filter/styles.ts
var container4 = {
  px: "17px",
  paddingTop: "6px",
  borderBottom: "1px solid #E7E9EE",
  paddingBottom: "16px",
  mb: "24px"
};
var text2 = {
  mb: "8px"
};
var category = {
  mr: "8px",
  px: "4px",
  width: "auto",
  cursor: "pointer",
  ":hover": {
    borderWidth: "2px"
  }
};
var clear = {
  display: "flex",
  alignItems: "center",
  color: "muted.0",
  fontSize: "12px",
  cursor: "pointer",
  ":hover": {
    color: "#000711"
  }
};
var styles_default12 = {
  container: container4,
  text: text2,
  category,
  clear
};

// src/components/sidebar-section-filter/index.tsx
import { jsx as jsx18, jsxs as jsxs13 } from "react/jsx-runtime";
var SectionFilter = ({
  methodFilterList,
  setMethodFilter
}) => {
  const [activeFilters, setActiveFilters] = useState6([]);
  const setFilter = (methodFilterChanged) => {
    if (methodFilterChanged) {
      const index = activeFilters.indexOf(methodFilterChanged);
      index === -1 ? setActiveFilters([...activeFilters, methodFilterChanged]) : setActiveFilters(
        activeFilters.filter((filter) => filter !== methodFilterChanged)
      );
      setMethodFilter(
        methodFilterList.map((methodFilter) => {
          if (methodFilter.name === methodFilterChanged)
            methodFilter.active = !methodFilter.active;
          return methodFilter;
        })
      );
    } else {
      setActiveFilters([]);
      setMethodFilter(
        methodFilterList.map((methodFilter) => {
          methodFilter.active = false;
          return methodFilter;
        })
      );
    }
  };
  const MethodButton = ({ methodFilter }) => {
    return /* @__PURE__ */ jsx18(
      Box11,
      {
        onClick: () => setFilter(methodFilter.name),
        children: /* @__PURE__ */ jsx18(
          method_category_default,
          {
            sx: styles_default12.category,
            active: methodFilter.active,
            method: methodFilter.name,
            origin: "filter"
          }
        )
      },
      `filter-category-${methodFilter.name}`
    );
  };
  return /* @__PURE__ */ jsxs13(Box11, { sx: styles_default12.container, children: [
    /* @__PURE__ */ jsx18(Text5, { sx: styles_default12.text, children: "Filter by" }),
    /* @__PURE__ */ jsxs13(Flex7, { children: [
      methodFilterList.map((methodFilter) => /* @__PURE__ */ jsx18(
        MethodButton,
        {
          methodFilter
        },
        `filter-category-${methodFilter.name}`
      )),
      activeFilters.length > 1 && /* @__PURE__ */ jsx18(Text5, { onClick: () => setFilter(null), sx: styles_default12.clear, children: "Clear all" })
    ] })
  ] });
};
var sidebar_section_filter_default = SectionFilter;

// src/components/sidebar-elements/index.tsx
import { useRouter as useRouter3 } from "next/router";
import { Fragment, useContext as useContext3 } from "react";
import {
  Box as Box12,
  Flex as Flex8,
  Link as Link3,
  Button as Button3,
  IconCaret as IconCaret2,
  IconExternalLink
} from "@vtex/brand-ui";

// src/components/sidebar-elements/styles.ts
var elementContainer = {
  maxWidth: "265px",
  background: "#FFFFFF",
  ":hover": {
    background: "#F8F7FC",
    a: {
      color: "#142032",
      "& > :first-of-type": {
        borderWidth: "2px"
      }
    }
  }
};
var elementText = {
  color: "muted.0",
  fontSize: "14px",
  lineHeight: "20px",
  fontWeight: "400",
  textAlign: "initial",
  paddingBlock: "7px",
  display: "flex",
  alignItems: "center",
  cursor: "pointer"
};
var elementActive = {
  ...elementText,
  color: "#D71D55 !important"
};
var arrowIcon = {
  padding: "0",
  color: "muted.1",
  height: "34px"
};
var arrowIconActive = {
  ...arrowIcon,
  color: "#D71D55"
};
var elementButton = {
  textTransform: "initial",
  fontVariationSettings: "unset",
  padding: "0",
  margin: "0",
  textDecoration: "none !important"
};
var sectionDivider2 = {
  hr: {
    border: "1px solid #E7E9EE",
    borderTop: "none"
  }
};
var methodBox = {
  mr: "10px"
};
var styles_default13 = {
  elementContainer,
  elementText,
  elementActive,
  arrowIcon,
  arrowIconActive,
  elementButton,
  sectionDivider: sectionDivider2,
  methodBox
};

// src/components/sidebar-elements/functions.tsx
var styleByLevelNormal = (level, icon2) => {
  const ml = 8 + (icon2 ? level * 4 : (level - 1) * 20 + 14);
  const borderLeft = icon2 ? "none" : level >= 2 ? "1px solid #E7E9EE" : "";
  const normal = {
    marginLeft: `${ml}px`,
    borderLeft
  };
  return normal;
};
var textStyle = (active, icon2) => {
  const ml = icon2 ? "4px" : "16px";
  if (active) {
    const textStyleActive = {
      ...styles_default13.elementActive,
      ml
    };
    return textStyleActive;
  }
  const textStyle2 = {
    ...styles_default13.elementText,
    ml
  };
  return textStyle2;
};

// src/components/sidebar-elements/index.tsx
import { jsx as jsx19, jsxs as jsxs14 } from "react/jsx-runtime";
var SidebarElements = ({ slugPrefix, items, subItemLevel }) => {
  const {
    isEditorPreview,
    activeSidebarElement,
    sidebarElementStatus,
    toggleSidebarElementStatus,
    sidebarDataMaster
  } = useContext3(LibraryContext);
  const router = useRouter3();
  const handleClick = (e, pathSuffix, slug) => {
    e.preventDefault();
    const hasEndpointQuery = router.query.endpoint;
    router.push(getHref(slugPrefix || "", pathSuffix, slug)).then(() => {
      if (hasEndpointQuery)
        router.reload();
    });
  };
  const checkDocumentationType = (sidebarData, slug, type) => {
    if (!sidebarData || typeof sidebarData !== "object" && !Array.isArray(sidebarData)) {
      return false;
    } else if (sidebarData?.slug == slug && sidebarData?.type == type) {
      return true;
    } else if (Array.isArray(sidebarData)) {
      for (let i = 0; i < sidebarData.length; i++) {
        const result = checkDocumentationType(sidebarData[i], slug, type);
        if (result) {
          return result;
        }
      }
    } else {
      for (const k in sidebarData) {
        const result = checkDocumentationType(sidebarData[k], slug, type);
        if (result) {
          return result;
        }
      }
    }
    return false;
  };
  const getHref = (slugPrefix2, pathSuffix, slug) => {
    const href = slugPrefix2 === "docs/api-reference" ? `/${slugPrefix2}/${slug}/${pathSuffix}` : `/${slugPrefix2}/${slug}`;
    return href.replaceAll("//", "/");
  };
  const ElementRoot = ({
    slug,
    name,
    method,
    endpoint,
    children
  }) => {
    const isExpandable = children.length > 0;
    const pathSuffix = method ? `#${method.toLowerCase()}-${endpoint}` : "";
    const activeItem = method ? `${slug}${pathSuffix}` : slug;
    return /* @__PURE__ */ jsx19(Box12, { sx: styles_default13.elementContainer, children: /* @__PURE__ */ jsxs14(Flex8, { sx: styleByLevelNormal(subItemLevel, isExpandable || false), children: [
      isExpandable && /* @__PURE__ */ jsx19(
        Button3,
        {
          "aria-label": sidebarElementStatus.has(slug) && sidebarElementStatus.get(slug) ? "Collapse category" : "Expand category",
          size: "regular",
          variant: "tertiary",
          sx: sidebarElementStatus.has(slug) && sidebarElementStatus.get(slug) ? styles_default13.arrowIconActive : styles_default13.arrowIcon,
          icon: () => /* @__PURE__ */ jsx19(
            IconCaret2,
            {
              direction: sidebarElementStatus.has(slug) && sidebarElementStatus.get(slug) ? "down" : "right",
              size: 24
            }
          ),
          onClick: () => toggleSidebarElementStatus(slug)
        }
      ),
      !checkDocumentationType(sidebarDataMaster, slug, "category") && !checkDocumentationType(sidebarDataMaster, slug, "link") ? /* @__PURE__ */ jsxs14(
        Link3,
        {
          sx: textStyle(activeSidebarElement === activeItem, isExpandable),
          onClick: (e) => {
            if (!isEditorPreview) {
              handleClick(e, pathSuffix, slug);
            }
            toggleSidebarElementStatus(activeItem);
          },
          href: getHref(slugPrefix || "", pathSuffix, slug),
          target: isEditorPreview === true ? "_blank" : "_self",
          children: [
            method && /* @__PURE__ */ jsx19(
              method_category_default,
              {
                sx: styles_default13.methodBox,
                active: activeSidebarElement === activeItem,
                origin: "sidebar",
                method
              }
            ),
            name
          ]
        }
      ) : checkDocumentationType(sidebarDataMaster, slug, "link") ? /* @__PURE__ */ jsxs14(Link3, { href: slug, target: "_blank", sx: styles_default13.elementText, children: [
        /* @__PURE__ */ jsx19(IconExternalLink, { size: 16, sx: { marginRight: "10px" } }),
        name
      ] }) : /* @__PURE__ */ jsxs14(
        Box12,
        {
          sx: textStyle(activeSidebarElement === slug, isExpandable),
          onClick: () => {
            toggleSidebarElementStatus(slug);
          },
          children: [
            method && /* @__PURE__ */ jsx19(
              method_category_default,
              {
                sx: styles_default13.methodBox,
                active: activeSidebarElement === slug,
                origin: "sidebar",
                method
              }
            ),
            name
          ]
        }
      )
    ] }) });
  };
  const ElementChildren = ({ slug, children }) => {
    const isExpandable = children.length > 0;
    return isExpandable && sidebarElementStatus.has(slug) && sidebarElementStatus.get(slug) ? /* @__PURE__ */ jsx19(Box12, { children: /* @__PURE__ */ jsx19(
      SidebarElements,
      {
        slugPrefix,
        items: children,
        subItemLevel: subItemLevel + 1
      },
      `${slug}sd`
    ) }) : null;
  };
  return /* @__PURE__ */ jsx19(Box12, { className: "sidebar-component", children: items?.map((item2, index) => {
    const key = String(item2.slug) + String(index);
    const slug = `${item2.slug}`;
    return /* @__PURE__ */ jsxs14(Fragment, { children: [
      /* @__PURE__ */ jsx19(ElementRoot, { ...item2, slug }),
      /* @__PURE__ */ jsx19(Box12, { children: /* @__PURE__ */ jsx19(ElementChildren, { ...item2, slug }) }),
      subItemLevel == 0 ? /* @__PURE__ */ jsx19(Box12, { sx: styles_default13.sectionDivider, children: /* @__PURE__ */ jsx19("hr", {}) }) : null
    ] }, String(key));
  }) });
};
var sidebar_elements_default = SidebarElements;

// src/components/icons/search-icon.tsx
import { Icon as Icon6 } from "@vtex/brand-ui";
import { jsx as jsx20 } from "react/jsx-runtime";
var SearchIcon = (props) => /* @__PURE__ */ jsx20(
  Icon6,
  {
    ...props,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx20(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.429 11.9901C10.413 12.7798 9.13641 13.25 7.75 13.25C4.43629 13.25 1.75 10.5637 1.75 7.25C1.75 3.93629 4.43629 1.25 7.75 1.25C11.0637 1.25 13.75 3.93629 13.75 7.25C13.75 8.63666 13.2796 9.91345 12.4897 10.9295L15.0298 13.4696C15.3227 13.7625 15.3227 14.2374 15.0298 14.5303C14.7369 14.8232 14.262 14.8232 13.9691 14.5303L11.429 11.9901ZM3.25 7.25C3.25 4.76472 5.26472 2.75 7.75 2.75C10.2353 2.75 12.25 4.76472 12.25 7.25C12.25 8.48671 11.7511 9.60689 10.9436 10.4203C10.9396 10.4242 10.9356 10.4281 10.9316 10.4321C10.9276 10.436 10.9237 10.44 10.9199 10.444C10.1065 11.2513 8.98649 11.75 7.75 11.75C5.26472 11.75 3.25 9.73528 3.25 7.25Z",
        fill: "#747474"
      }
    )
  }
);
var search_icon_default = SearchIcon;

// src/components/icons/sidebar-toggle-icon.tsx
import { Icon as Icon7 } from "@vtex/brand-ui";
import { jsx as jsx21, jsxs as jsxs15 } from "react/jsx-runtime";
var SideBarToggleIcon = (props) => /* @__PURE__ */ jsxs15(
  Icon7,
  {
    ...props,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx21(
        "path",
        {
          d: "M12 16.332L7 16.332",
          stroke: "#A1A8B3",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx21(
        "path",
        {
          d: "M10 12.168L7 12.168",
          stroke: "#A1A8B3",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx21(
        "path",
        {
          d: "M12 8L7 8",
          stroke: "#A1A8B3",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx21(
        "path",
        {
          d: "M17 9.03906L14 12.1641L17 15.2891",
          stroke: "#A1A8B3",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var sidebar_toggle_icon_default = SideBarToggleIcon;

// src/components/icons/arrow-left-icon.tsx
import { Icon as Icon8 } from "@vtex/brand-ui";
import { jsx as jsx22, jsxs as jsxs16 } from "react/jsx-runtime";
var ArrowLeftIcon = (props) => /* @__PURE__ */ jsxs16(
  Icon8,
  {
    ...props,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      " ",
      /* @__PURE__ */ jsx22(
        "path",
        {
          d: "M19.5195 12.0195L4.52953 12.0195",
          stroke: "#4A596B",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      ),
      /* @__PURE__ */ jsx22(
        "path",
        {
          d: "M10.5176 18.0117L4.48058 11.9997L10.5176 5.98772",
          stroke: "#4A596B",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      )
    ]
  }
);
var arrow_left_icon_default = ArrowLeftIcon;

// src/components/sidebar-section/index.tsx
import { jsx as jsx23, jsxs as jsxs17 } from "react/jsx-runtime";
var SidebarSection = ({
  documentation,
  categories,
  slugPrefix,
  isHamburgerMenu = false
}) => {
  const [searchValue, setSearchValue] = useState7("");
  const {
    isEditorPreview,
    sidebarSectionHidden,
    setSidebarSectionHidden,
    sidebarSections
  } = useContext4(LibraryContext);
  const [methodFilterList, setMethodFilterList] = useState7([
    { name: "POST", active: false },
    { name: "GET", active: false },
    { name: "PUT", active: false },
    { name: "DELETE", active: false },
    { name: "PATCH", active: false }
  ]);
  const filterStatus = methodFilterList.some(
    (methodFilter) => methodFilter.active
  );
  const filteredResult = useMemo(() => {
    if (!filterStatus && searchValue === "")
      return categories;
    const dataCopy = JSON.parse(JSON.stringify(categories));
    const filteredCategories = dataCopy.map((category2) => {
      category2.children = category2.children.map((subcategory) => {
        subcategory.children = subcategory.children.filter((endpoint) => {
          const hasMethodFilter = !filterStatus || methodFilterList.find(
            (methodFilter) => methodFilter.name === endpoint.method
          )?.active;
          const hasInputFilter = searchValue === "" || endpoint.name.toLowerCase().includes(searchValue.toLowerCase());
          return hasMethodFilter && hasInputFilter;
        });
        return subcategory;
      }).filter(
        (subcategory) => subcategory.children.length > 0 || subcategory.type === "markdown" && subcategory.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      return category2;
    }).filter((category2) => category2.children.length > 0);
    return filteredCategories;
  }, [filterStatus, methodFilterList, categories, searchValue]);
  const DocIcon = getIcon2(documentation, sidebarSections);
  return isHamburgerMenu ? /* @__PURE__ */ jsx23(
    Box13,
    {
      className: sidebarSectionHidden ? "active" : "",
      sx: styles_default10.sidebarContainerHamburger,
      children: /* @__PURE__ */ jsxs17(
        Box13,
        {
          className: sidebarSectionHidden ? "sidebarHide" : "",
          sx: styles_default10.sidebarContainerBoxHamburger,
          children: [
            /* @__PURE__ */ jsxs17(Flex9, { sx: styles_default10.sidebarContainerTitle, children: [
              /* @__PURE__ */ jsx23(
                Button4,
                {
                  sx: styles_default10.arrowButton,
                  "aria-label": "Go back",
                  size: "small",
                  variant: "tertiary",
                  icon: () => /* @__PURE__ */ jsx23(arrow_left_icon_default, { size: 24 }),
                  onClick: () => {
                    setSidebarSectionHidden(true);
                  }
                }
              ),
              DocIcon && /* @__PURE__ */ jsx23(DocIcon, {}),
              /* @__PURE__ */ jsx23(Text6, { sx: styles_default10.sidebarTitle, children: documentation })
            ] }),
            /* @__PURE__ */ jsxs17(Box13, { sx: styles_default10.sidebarContainerBody, children: [
              /* @__PURE__ */ jsxs17(Flex9, { sx: styles_default10.searchBox, children: [
                /* @__PURE__ */ jsx23(search_icon_default, { sx: styles_default10.searchIcon }),
                /* @__PURE__ */ jsx23(
                  "input",
                  {
                    style: styles_default10.searchInput,
                    className: "searchComponent",
                    type: "text",
                    placeholder: `Search in ${documentation}...`,
                    value: searchValue,
                    onChange: (e) => setSearchValue(e.currentTarget.value)
                  }
                )
              ] }),
              documentation == "API Reference" && /* @__PURE__ */ jsx23(
                sidebar_section_filter_default,
                {
                  methodFilterList,
                  setMethodFilter: setMethodFilterList
                }
              )
            ] }),
            /* @__PURE__ */ jsx23(Box13, { sx: styles_default10.sidebarContainerBody, children: /* @__PURE__ */ jsx23(
              sidebar_elements_default,
              {
                items: filteredResult,
                subItemLevel: 0,
                slugPrefix
              }
            ) })
          ]
        }
      )
    }
  ) : /* @__PURE__ */ jsxs17(
    Box13,
    {
      className: sidebarSectionHidden ? "active" : "",
      sx: styles_default10.sidebarContainer,
      children: [
        /* @__PURE__ */ jsxs17(
          Box13,
          {
            className: sidebarSectionHidden ? "sidebarHide" : "",
            sx: styles_default10.sidebarContainerBox,
            "data-cy": "sidebar-section",
            children: [
              /* @__PURE__ */ jsxs17(Box13, { sx: styles_default10.sidebarContainerHeader, children: [
                isEditorPreview && /* @__PURE__ */ jsxs17(Text6, { sx: styles_default10.previewMode, children: [
                  /* @__PURE__ */ jsxs17(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "72",
                      height: "72",
                      viewBox: "0 0 72 72",
                      fill: "none",
                      children: [
                        /* @__PURE__ */ jsx23("circle", { cx: "36", cy: "36", r: "36", fill: "#FFB100" }),
                        /* @__PURE__ */ jsx23(
                          "path",
                          {
                            d: "M40.4202 22.6818H31.8152V42.6377H40.4202V22.6818Z",
                            fill: "white"
                          }
                        ),
                        /* @__PURE__ */ jsx23(
                          "path",
                          {
                            d: "M36.1177 54.6113C38.4939 54.6113 40.4202 52.8244 40.4202 50.6201C40.4202 48.4158 38.4939 46.6289 36.1177 46.6289C33.7415 46.6289 31.8152 48.4158 31.8152 50.6201C31.8152 52.8244 33.7415 54.6113 36.1177 54.6113Z",
                            fill: "white"
                          }
                        )
                      ]
                    }
                  ),
                  "PREVIEW MODE"
                ] }),
                /* @__PURE__ */ jsx23(Text6, { sx: styles_default10.sidebarTitle, children: documentation }),
                /* @__PURE__ */ jsxs17(Flex9, { sx: styles_default10.searchBox, children: [
                  /* @__PURE__ */ jsx23(search_icon_default, { sx: styles_default10.searchIcon }),
                  /* @__PURE__ */ jsx23(
                    "input",
                    {
                      style: styles_default10.searchInput,
                      className: "searchComponent",
                      type: "text",
                      placeholder: `Search in ${!isEditorPreview ? `in ${documentation}` : ""}...`,
                      value: searchValue,
                      onChange: (e) => setSearchValue(e.currentTarget.value)
                    }
                  )
                ] })
              ] }),
              documentation == "API Reference" && /* @__PURE__ */ jsx23(
                sidebar_section_filter_default,
                {
                  methodFilterList,
                  setMethodFilter: setMethodFilterList
                }
              ),
              /* @__PURE__ */ jsx23(Box13, { sx: styles_default10.sidebarContainerBody, children: /* @__PURE__ */ jsx23(
                sidebar_elements_default,
                {
                  items: filteredResult,
                  subItemLevel: 0,
                  slugPrefix
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ jsx23(
          Flex9,
          {
            className: "toggleIcon",
            sx: sidebarSectionHidden ? styles_default10.toggleIconBoxActive : styles_default10.toggleIconBox,
            children: /* @__PURE__ */ jsx23(
              sidebar_toggle_icon_default,
              {
                onClick: () => {
                  setSidebarSectionHidden(
                    (sidebarSectionHidden2) => !sidebarSectionHidden2
                  );
                },
                sx: sidebarSectionHidden ? styles_default10.toggleIcon : {}
              }
            )
          }
        )
      ]
    }
  );
};
var sidebar_section_default = SidebarSection;

// src/lib/sidebar/index.tsx
import { Fragment as Fragment2, jsx as jsx24, jsxs as jsxs18 } from "react/jsx-runtime";
import { createElement } from "react";
var Sidebar = ({ parentsArray = [] }) => {
  const [expandDelayStatus, setExpandDelayStatus] = useState8(true);
  const context = useContext5(LibraryContext);
  const {
    isEditorPreview,
    setActiveSectionName,
    activeSectionName,
    sidebarSections,
    sidebarDataMaster
  } = context;
  updateOpenPage({ parentsArray, context, setExpandDelayStatus });
  const SideBarIcon = (sectionElement) => {
    const [iconTooltip2, setIconTooltip] = useState8(false);
    const [tooltipLabel, setTooltipLabel] = useState8(sectionElement.title);
    const titleRef = useRef5();
    useEffect9(() => {
      const resizeObserver = new MutationObserver(function(entries) {
        const target = entries[0].target;
        if (target.offsetWidth < target.scrollWidth)
          setIconTooltip(true);
        else
          setIconTooltip(false);
        if (target.offsetWidth > 0)
          setTooltipLabel(target.innerText);
      });
      if (titleRef.current) {
        if (titleRef.current.offsetWidth < titleRef.current.scrollWidth)
          setIconTooltip(true);
        resizeObserver.observe(titleRef.current, {
          childList: true
        });
      }
      return () => {
        resizeObserver.disconnect;
      };
    }, [titleRef.current]);
    return /* @__PURE__ */ jsx24(Box14, { sx: styles_default8.linkContainer, children: /* @__PURE__ */ jsx24(
      tooltip_default,
      {
        sx: iconTooltipStyle(iconTooltip2),
        placement: "right",
        label: tooltipLabel,
        children: /* @__PURE__ */ jsx24(
          Link4,
          {
            href: !isEditorPreview ? sectionElement.link : "/",
            onClick: (e) => {
              if (isEditorPreview) {
                e.preventDefault();
              }
              setActiveSectionName(sectionElement.title);
            },
            passHref: true,
            "aria-label": sectionElement.title,
            children: /* @__PURE__ */ jsxs18(
              Flex10,
              {
                sx: activeSectionName === sectionElement.title ? styles_default8.iconBoxActive : styles_default8.iconBox,
                children: [
                  /* @__PURE__ */ jsx24(
                    sectionElement.Icon,
                    {
                      sx: activeSectionName === sectionElement.title ? styles_default8.iconActive : styles_default8.icon
                    }
                  ),
                  /* @__PURE__ */ jsx24(
                    Text7,
                    {
                      className: expandDelayStatus ? "iconDescriptionExpanded" : "",
                      ref: titleRef,
                      sx: styles_default8.iconTitle,
                      children: sectionElement.title
                    }
                  )
                ]
              }
            )
          }
        )
      }
    ) });
  };
  return /* @__PURE__ */ jsxs18(Flex10, { sx: styles_default8.sidebar, children: [
    /* @__PURE__ */ jsx24(
      Flex10,
      {
        className: expandDelayStatus ? "iconContainerExpanded" : "",
        sx: styles_default8.sidebarIcons,
        children: sidebarSections.map((section, id) => {
          return /* @__PURE__ */ jsxs18(Fragment2, { children: [
            id > 0 && /* @__PURE__ */ jsx24(Box14, { sx: styles_default8.sectionDivider, children: /* @__PURE__ */ jsx24("hr", {}) }, `${id}-divider`),
            /* @__PURE__ */ jsx24(Flex10, { sx: styles_default8.sidebarIconsContainer, children: section.map((element) => /* @__PURE__ */ createElement(
              SideBarIcon,
              {
                ...element,
                key: `sidebar-icon-${element.title}`
              }
            )) }, id)
          ] });
        })
      }
    ),
    activeSectionName ? /* @__PURE__ */ jsx24(
      sidebar_section_default,
      {
        ...Array.isArray(sidebarDataMaster) ? sidebarDataMaster?.find(
          (section) => section.documentation === activeSectionName
        ) : null
      }
    ) : null
  ] });
};
var sidebar_default = Sidebar;

// src/lib/hamburger-menu/index.tsx
import {
  Header,
  HamburgerMenu as VtexHamburgerMenu,
  Box as Box16,
  IconCaret as IconCaret3,
  Button as Button5
} from "@vtex/brand-ui";

// src/lib/hamburger-menu/styles.ts
var menuContainer = {
  display: "flex",
  width: "max-content"
};
var cardContainer = {
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  overflowY: "scroll",
  height: "calc(100vh - 5rem)"
};
var sideMenuContainer = {
  backgroundColor: "#ffff",
  height: "calc(100vh - 5rem)",
  width: "100vw",
  overflowY: "auto",
  overflowX: "hidden",
  transform: "translate(0)",
  transition: "transform .5s cubic-bezier(.4,0,.2,1)"
};
var hamburgerContainer = {
  display: ["block", "block", "block", "none"],
  backgroundColor: "#ffff",
  width: "100%",
  ".menuHidden": {
    transform: "translate(-100%)"
  }
};
var hamburgerSearchContainer = {
  display: "flex",
  justifyContent: "center",
  paddingBlock: "18px",
  height: "auto"
};
var documentationContainer = {
  px: "16px",
  paddingBottom: "8px"
};
var updatesContainer = {
  px: "16px",
  paddingTop: "8px",
  borderRadius: "0px 0px 8px 8px",
  borderTop: "1px solid #E7E9EE"
};
var innerHambugerContainer = {
  padding: "0px",
  position: "relative",
  overflowX: "hidden"
};
var innerCardContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
};
var arrowIcon2 = {
  padding: "0",
  height: "50px",
  width: "50px",
  color: "muted.1"
};
var arrowIconActive2 = {
  ...arrowIcon2,
  color: "#D71D55"
};
var styles_default14 = {
  menuContainer,
  cardContainer,
  sideMenuContainer,
  hamburgerSearchContainer,
  documentationContainer,
  updatesContainer,
  hamburgerContainer,
  innerHambugerContainer,
  innerCardContainer,
  arrowIcon: arrowIcon2,
  arrowIconActive: arrowIconActive2
};

// src/lib/hamburger-menu/index.tsx
import { useContext as useContext6 } from "react";

// src/components/documentation-card/index.tsx
import Link5 from "next/link";
import { Box as Box15, Flex as Flex11, Text as Text8 } from "@vtex/brand-ui";

// src/components/documentation-card/styles.ts
var cardContainer2 = {
  my: ["16px", "16px", "16px", "16px", "16px", "16px", "24px"],
  padding: "8px",
  cursor: "pointer",
  ":active, :hover": {
    borderRadius: "4px",
    backgroundColor: "#F8F7FC",
    ".description": {
      color: "muted.0"
    }
  },
  ":active .title": {
    color: "#0C1522"
  },
  ":hover .title": {
    color: "#000711"
  }
};
var titleContainer = {
  alignItems: "center"
};
var title2 = {
  ml: "8px",
  color: "muted.0"
};
var description2 = {
  ml: "32px",
  fontSize: "16px",
  lineHeight: "18px",
  color: "muted.1"
};
var styles_default15 = {
  cardContainer: cardContainer2,
  description: description2,
  title: title2,
  titleContainer
};

// src/components/documentation-card/functions.ts
var cardContainer3 = (containerType) => {
  const containerWidth = containerType === "dropdown" ? ["308px", "442px", "444px", "480px"] : containerType === "mobile" ? "100%" : ["324px", "544px", "544px", "544px", "544px", "720px", "1400px"];
  const textWidth = containerType === "dropdown" ? ["276px", "410px", "412px", "432px"] : containerType === "mobile" ? "90%" : ["276px", "496px", "496px", "496px", "496px", "672px", "1352px"];
  const cardContainer4 = {
    ...styles_default15.cardContainer,
    width: containerWidth,
    ".title, .description": {
      width: textWidth
    }
  };
  return cardContainer4;
};
var titleContainer2 = (containerType) => {
  const marginBottom = containerType === "dropdown" ? ["5px", "5px", "5px", "1px"] : "8px";
  const titleContainer3 = {
    ...styles_default15.titleContainer,
    marginBottom
  };
  return titleContainer3;
};
var cardTitle = (containerType) => {
  const titleAttributes = containerType === "see-also" ? {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    fontSize: "18px",
    lineHeight: "24px"
  } : {
    fontSize: "16px",
    lineHeight: "22px"
  };
  const cardTitle2 = {
    ...styles_default15.title,
    ...titleAttributes
  };
  return cardTitle2;
};

// src/components/documentation-card/index.tsx
import { jsx as jsx25, jsxs as jsxs19 } from "react/jsx-runtime";
var DocumentationCard = ({
  title: title4,
  description: description3,
  link: link2,
  containerType,
  Icon: Icon13,
  onClick
}) => {
  return /* @__PURE__ */ jsx25(Link5, { href: link2, legacyBehavior: true, children: /* @__PURE__ */ jsx25("a", { onClick, style: { width: "100%" }, children: /* @__PURE__ */ jsxs19(Box15, { sx: cardContainer3(containerType), children: [
    /* @__PURE__ */ jsxs19(Flex11, { sx: titleContainer2(containerType), children: [
      /* @__PURE__ */ jsx25(Icon13, { sx: { color: "#4A596B" }, size: 24 }),
      /* @__PURE__ */ jsx25(Text8, { className: "title", sx: cardTitle(containerType), children: title4 })
    ] }),
    /* @__PURE__ */ jsx25(Text8, { className: "description", sx: styles_default15.description, children: description3 })
  ] }) }) });
};
var documentation_card_default = DocumentationCard;

// src/lib/hamburger-menu/index.tsx
import { jsx as jsx26, jsxs as jsxs20 } from "react/jsx-runtime";
var HamburgerMenu = ({ parentsArray = [] }) => {
  const context = useContext6(LibraryContext);
  const {
    sidebarDataMaster,
    sidebarSectionHidden,
    activeSectionName,
    setActiveSectionName,
    setSidebarSectionHidden,
    sidebarSections
  } = context;
  updateOpenPage({ parentsArray, context });
  return /* @__PURE__ */ jsx26(Header.ActionButton, { children: /* @__PURE__ */ jsx26(VtexHamburgerMenu, { sx: styles_default14.hamburgerContainer, children: /* @__PURE__ */ jsx26(VtexHamburgerMenu.Menu, { sx: styles_default14.innerHambugerContainer, children: /* @__PURE__ */ jsxs20(Box16, { sx: styles_default14.menuContainer, children: [
    /* @__PURE__ */ jsxs20(Box16, { sx: styles_default14.cardContainer, children: [
      /* @__PURE__ */ jsx26(Box16, { sx: styles_default14.hamburgerSearchContainer }),
      sidebarSections.map((section, id) => /* @__PURE__ */ jsx26(
        Box16,
        {
          sx: id > 0 ? styles_default14.updatesContainer : styles_default14.documentationContainer,
          "data-cy": "dropdown-menu-first-section",
          children: section.map((card2) => /* @__PURE__ */ jsxs20(Box16, { sx: styles_default14.innerCardContainer, children: [
            /* @__PURE__ */ jsx26(documentation_card_default, { containerType: "mobile", ...card2 }),
            /* @__PURE__ */ jsx26(
              Button5,
              {
                "aria-label": "Open sidebar",
                size: "regular",
                variant: "tertiary",
                icon: () => /* @__PURE__ */ jsx26(IconCaret3, { direction: "right", size: 32 }),
                sx: activeSectionName === card2.title && !sidebarSectionHidden ? styles_default14.arrowIconActive : styles_default14.arrowIcon,
                onClick: () => {
                  setActiveSectionName(card2.title);
                  setSidebarSectionHidden(false);
                }
              }
            )
          ] }, card2.title))
        },
        id
      ))
    ] }),
    /* @__PURE__ */ jsx26(
      Box16,
      {
        className: sidebarSectionHidden || !activeSectionName ? "" : "menuHidden",
        sx: styles_default14.sideMenuContainer,
        children: activeSectionName ? /* @__PURE__ */ jsx26(
          sidebar_section_default,
          {
            isHamburgerMenu: true,
            ...Array.isArray(sidebarDataMaster) ? sidebarDataMaster?.find(
              (section) => section.documentation === activeSectionName
            ) : null
          }
        ) : null
      }
    )
  ] }) }) }) });
};
var hamburger_menu_default = HamburgerMenu;

// src/lib/feedback-section/index.tsx
import { Flex as Flex12, Text as Text10, Link as Link6 } from "@vtex/brand-ui";

// src/components/icons/edit-icon.tsx
import { Icon as Icon9 } from "@vtex/brand-ui";
import { jsx as jsx27, jsxs as jsxs21 } from "react/jsx-runtime";
var EditIcon = (props) => /* @__PURE__ */ jsxs21(
  Icon9,
  {
    ...props,
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx27(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M5.793 16.6107L16.119 6.28469C16.509 5.89469 17.142 5.89469 17.532 6.28469L19.208 7.96069C19.598 8.35069 19.598 8.98369 19.208 9.37369L8.881 19.6987C8.694 19.8867 8.44 19.9917 8.175 19.9917H5.5V17.3167C5.5 17.0517 5.605 16.7977 5.793 16.6107Z",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx27(
        "path",
        {
          d: "M14.25 8.15234L17.34 11.2423",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var edit_icon_default = EditIcon;

// src/components/icons/like-icon.tsx
import { Icon as Icon10 } from "@vtex/brand-ui";
import { jsx as jsx28, jsxs as jsxs22 } from "react/jsx-runtime";
var LikeIcon = (props) => /* @__PURE__ */ jsxs22(
  Icon10,
  {
    ...props,
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx28(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M7.444 19.9922H5.556C4.973 19.9922 4.5 19.5192 4.5 18.9362V11.5482C4.5 10.9652 4.973 10.4922 5.556 10.4922H7.444C8.027 10.4922 8.5 10.9652 8.5 11.5482V18.9362C8.5 19.5192 8.027 19.9922 7.444 19.9922V19.9922Z",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx28(
        "path",
        {
          d: "M8.5 11.5638L12.149 6.81276C12.828 5.92776 14.154 5.90576 14.863 6.76676V6.76676C15.128 7.08776 15.272 7.49176 15.272 7.90776V11.1788H18.368C18.969 11.1788 19.53 11.4788 19.864 11.9778L20.193 12.4688C20.488 12.9098 20.574 13.4588 20.427 13.9678L19.068 18.6898C18.846 19.4608 18.141 19.9918 17.339 19.9918H11.05C10.55 19.9918 10.072 19.7838 9.732 19.4178L8.5 18.0918",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var like_icon_default = LikeIcon;

// src/components/icons/like-selected-icon.tsx
import { Icon as Icon11 } from "@vtex/brand-ui";
import { jsx as jsx29, jsxs as jsxs23 } from "react/jsx-runtime";
var LikeSelectedIcon = (props) => /* @__PURE__ */ jsxs23(
  Icon11,
  {
    ...props,
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx29(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M8 10.5719L11.649 5.82094C12.328 4.93594 13.654 4.91394 14.363 5.77494C14.628 6.09594 14.772 6.49994 14.772 6.91594V10.1869H17.868C18.469 10.1869 19.03 10.4869 19.364 10.9859L19.693 11.4769C19.988 11.9179 20.074 12.4669 19.927 12.9759L18.568 17.6979C18.346 18.4689 17.641 18.9999 16.839 18.9999H10.55C10.05 18.9999 9.572 18.7919 9.232 18.4259L8 17.0999",
          fill: "#A1A8B3"
        }
      ),
      /* @__PURE__ */ jsx29(
        "path",
        {
          d: "M5.056 19.5H6.944C7.80314 19.5 8.5 18.8031 8.5 17.944V10.556C8.5 9.69686 7.80314 9 6.944 9H5.056C4.19686 9 3.5 9.69686 3.5 10.556V17.944C3.5 18.8031 4.19686 19.5 5.056 19.5Z",
          fill: "#A1A8B3",
          stroke: "white",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var like_selected_icon_default = LikeSelectedIcon;

// src/lib/feedback-section/index.tsx
import { useRef as useRef7, useState as useState10 } from "react";

// src/lib/feedback-section/styles.ts
var container5 = {
  width: "100%",
  paddingBottom: "16px",
  borderBottom: ["none", "1px solid #E7E9EE"],
  flexDirection: ["column", "row"],
  alignItems: "center",
  alignContent: ["initial", "space-between"],
  marginTop: "32px",
  marginBottom: "16px"
};
var question = {
  fontSize: "16px",
  lineHeight: "18px"
};
var likeContainer = {
  paddingBottom: ["16px", "0"],
  borderBottom: ["1px solid #E7E9EE", "none"],
  mt: ["8px", "0"],
  mb: ["16px", "0"],
  width: ["100%", "auto"],
  justifyContent: ["center", "initial"]
};
var likeIcon = {
  mr: "2px"
};
var dislikeIcon = {
  mr: "2px",
  transform: "rotateX(180deg) rotateY(180deg)"
};
var button = {
  ":hover": {
    cursor: "pointer",
    color: "#000711",
    "svg > path": {
      stroke: "#000711"
    }
  }
};
var buttonActive = {
  cursor: "pointer",
  color: "#000711",
  "svg > path": {
    stroke: "#000711"
  }
};
var selectedButton = {
  color: "muted.1"
};
var box = {
  alignItems: "center",
  color: "muted.0",
  fontSize: "16px",
  lineHeight: "22px"
};
var editContainer = {
  ...box,
  ...button,
  ":hover": {
    color: "#000711 !important"
  },
  ml: ["0", "auto"],
  color: "#4A596B !important",
  display: "flex"
};
var editIcon = { mr: "4px" };
var styles_default16 = {
  container: container5,
  question,
  likeContainer,
  likeIcon,
  dislikeIcon,
  editContainer,
  editIcon,
  box,
  button,
  buttonActive,
  selectedButton
};

// src/lib/feedback-section/functions.ts
var setButtonStyle = (feedback, modalState, like) => {
  const buttonactive = modalState.modalOpen && like === modalState.liked ? styles_default16.buttonActive : styles_default16.button;
  const ml = like ? ["0", "8px"] : feedback === like ? ["0", "8px"] : ["32px", "16px"];
  if (feedback === void 0)
    return { ...styles_default16.box, ...buttonactive, ml };
  if (like === feedback)
    return { ...styles_default16.box, ...styles_default16.selectedButton, ml };
  return { display: "none !important" };
};

// src/components/feedback-modal/index.tsx
import { Box as Box17, Button as Button6, Textarea, Text as Text9, Icon as Icon12 } from "@vtex/brand-ui";
import {
  useEffect as useEffect10,
  useRef as useRef6,
  useState as useState9
} from "react";

// src/components/feedback-modal/styles.ts
var container6 = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: "0",
  left: "0",
  position: "fixed",
  width: "100%",
  minHeight: "100%",
  bottom: "auto",
  background: "rgb(0, 0, 0, 0.25)",
  zIndex: "9999"
};
var box2 = {
  width: "320px",
  height: "176px"
};
var card = {
  background: "#FFFFFF",
  border: "1px solid #E7E9EE",
  borderRadius: "4px",
  padding: "15px"
};
var title3 = {
  fontSize: "14px",
  color: "#545454"
};
var textarea = {
  marginBlock: "4px 10px",
  height: "68px",
  textarea: {
    height: "100%",
    fontSize: "14px",
    fontWeight: "normal",
    lineHeight: "19.6px",
    color: "#000000",
    px: "16px",
    paddingTop: "12px",
    ":focus-within": {
      boxShadow: "0px 0px 0px 1px #FFFFFF, 0px 0px 0px 3px #B9B9B9"
    }
  },
  ":before": {
    display: "none"
  }
};
var button2 = {
  width: "100%",
  height: "32px",
  fontSize: "14px"
};
var arrow = {
  display: ["none", "initial"],
  minWidth: "initial",
  minHeight: "initial",
  position: "absolute",
  bottom: "0",
  left: "calc(50% - 12px)",
  height: "14px"
};
var styles_default17 = {
  container: container6,
  box: box2,
  card,
  title: title3,
  textarea,
  button: button2,
  arrow
};

// src/components/feedback-modal/functions.ts
var modalWidth = 320;
var modalHeight = 180;
var modalPositionStyle = (chosenButtonRef) => {
  if (!chosenButtonRef)
    return false;
  const {
    top: buttonTop,
    bottom: buttonBottom,
    left: buttonLeft,
    width: buttonWidth
  } = chosenButtonRef.getBoundingClientRect();
  const modalLeft = [
    "initial",
    `${buttonLeft - (modalWidth - buttonWidth) / 2}px`
  ];
  const modalTop = [
    "initial",
    buttonTop > modalHeight ? `${buttonTop - modalHeight}px` : `${buttonBottom}px`
  ];
  const modalBox = {
    ...styles_default17.box,
    position: "absolute",
    left: modalLeft,
    top: modalTop
  };
  return modalBox;
};
var arrowDirectionStyle = (chosenButtonRef, element) => {
  if (!chosenButtonRef)
    return false;
  const { top: buttonTop } = chosenButtonRef.getBoundingClientRect();
  if (buttonTop >= modalHeight)
    return false;
  if (element === "arrow") {
    const arrowDirection = {
      ...styles_default17.arrow,
      transform: "rotate(180deg)",
      top: "0",
      bottom: "initial"
    };
    return arrowDirection;
  }
  const cardPosition = {
    ...styles_default17.card,
    mt: "14px"
  };
  return cardPosition;
};

// src/components/feedback-modal/index.tsx
import { jsx as jsx30, jsxs as jsxs24 } from "react/jsx-runtime";
var FeedBackModalArrow = (props) => {
  return /* @__PURE__ */ jsxs24(
    Icon12,
    {
      ...props,
      width: "20",
      height: "14",
      viewBox: "0 0 20 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        " ",
        /* @__PURE__ */ jsx30(
          "path",
          {
            d: "M10.8432 12.3275C10.4448 12.8914 9.60821 12.8914 9.20976 12.3275L0.500234 6.7935e-05L19.5527 6.56171e-05L10.8432 12.3275Z",
            fill: "white"
          }
        )
      ]
    }
  );
};
var FeedBackModal = ({
  modalState,
  changeModalState,
  changeFeedBack,
  chosenButtonRef,
  onSubmit
}) => {
  const cardRef = useRef6();
  const { body, documentElement } = document;
  const [comment, setComment] = useState9("");
  const closeModal = () => {
    const feedback = modalState?.liked;
    const scrollTop = body.getBoundingClientRect().top * -1;
    body.classList.remove("modal-open");
    documentElement.scrollTop = scrollTop;
    body.style.removeProperty("top");
    changeModalState({ modalOpen: false });
    changeFeedBack(feedback);
  };
  const handleClick = async () => {
    onSubmit(comment);
    closeModal();
  };
  useEffect10(() => {
    const scrollTop = body.getBoundingClientRect().top * -1;
    body.style.top = `-${scrollTop}px`;
    body.classList.add("modal-open");
  }, []);
  useClickOutside(cardRef, changeModalState);
  return /* @__PURE__ */ jsx30(Box17, { sx: styles_default17.container, children: /* @__PURE__ */ jsxs24(
    Box17,
    {
      ref: cardRef,
      sx: modalPositionStyle(chosenButtonRef.current) || styles_default17.box,
      children: [
        /* @__PURE__ */ jsxs24(
          Box17,
          {
            sx: arrowDirectionStyle(chosenButtonRef.current, "card") || styles_default17.card,
            "data-cy": "feedback-modal",
            children: [
              /* @__PURE__ */ jsx30(Text9, { sx: styles_default17.title, children: "Leave a comment (optional)" }),
              /* @__PURE__ */ jsx30(
                Textarea,
                {
                  id: "feedback-modal-input",
                  sx: styles_default17.textarea,
                  label: "",
                  rows: 7,
                  value: comment,
                  onChange: (e) => setComment(e.currentTarget.value)
                }
              ),
              /* @__PURE__ */ jsx30(
                Button6,
                {
                  onClick: async () => await handleClick(),
                  sx: styles_default17.button,
                  variant: "secondary",
                  children: "Send Feedback"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx30(
          FeedBackModalArrow,
          {
            sx: arrowDirectionStyle(chosenButtonRef.current, "arrow") || styles_default17.arrow
          }
        )
      ]
    }
  ) });
};
var feedback_modal_default = FeedBackModal;

// src/lib/feedback-section/index.tsx
import { jsx as jsx31, jsxs as jsxs25 } from "react/jsx-runtime";
var FeedbackSection = ({
  slug,
  urlToEdit,
  suggestEdits = true,
  sendFeedback
}) => {
  const [feedback, changeFeedback] = useState10(void 0);
  const [prevSlug, setPrevSlug] = useState10(slug);
  const [modalState, changeModalState] = useState10({
    modalOpen: false
  });
  const likeButton = useRef7();
  const dislikeButton = useRef7();
  if (slug !== prevSlug) {
    setPrevSlug(slug);
    changeModalState({ modalOpen: false });
    changeFeedback(void 0);
  }
  const openModal = (choice) => {
    changeModalState({
      modalOpen: true,
      liked: choice
    });
  };
  return /* @__PURE__ */ jsxs25(Flex12, { sx: styles_default16.container, "data-cy": "feedback-section", children: [
    /* @__PURE__ */ jsx31(Text10, { sx: styles_default16.question, children: feedback !== void 0 ? "Thanks for your feedback." : "Was this helpful?" }),
    /* @__PURE__ */ jsxs25(Flex12, { sx: styles_default16.likeContainer, children: [
      /* @__PURE__ */ jsxs25(
        Flex12,
        {
          ref: likeButton,
          sx: setButtonStyle(feedback, modalState, true),
          onClick: feedback === void 0 ? () => openModal(true) : null,
          "data-cy": "feedback-section-like",
          children: [
            feedback === void 0 || !feedback ? /* @__PURE__ */ jsx31(like_icon_default, { size: 24, sx: styles_default16.likeIcon }) : /* @__PURE__ */ jsx31(like_selected_icon_default, { size: 24, sx: styles_default16.likeIcon }),
            /* @__PURE__ */ jsx31(Text10, { children: "Yes" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs25(
        Flex12,
        {
          ref: dislikeButton,
          sx: setButtonStyle(feedback, modalState, false),
          onClick: feedback === void 0 ? () => openModal(false) : null,
          children: [
            feedback === void 0 || feedback ? /* @__PURE__ */ jsx31(like_icon_default, { size: 24, sx: styles_default16.dislikeIcon }) : /* @__PURE__ */ jsx31(like_selected_icon_default, { size: 24, sx: styles_default16.dislikeIcon }),
            /* @__PURE__ */ jsx31(Text10, { children: "No" })
          ]
        }
      )
    ] }),
    suggestEdits && /* @__PURE__ */ jsxs25(
      Link6,
      {
        target: "_blank",
        rel: "noopener noreferrer",
        href: urlToEdit,
        sx: styles_default16.editContainer,
        children: [
          /* @__PURE__ */ jsx31(edit_icon_default, { size: 24, sx: styles_default16.editIcon }),
          /* @__PURE__ */ jsx31(Text10, { children: "Suggest edits (Github)" })
        ]
      }
    ),
    modalState.modalOpen ? /* @__PURE__ */ jsx31(
      feedback_modal_default,
      {
        changeFeedBack: changeFeedback,
        changeModalState,
        modalState,
        chosenButtonRef: modalState.liked ? likeButton : dislikeButton,
        onSubmit: (comment) => sendFeedback(comment, modalState.liked ?? false)
      }
    ) : null
  ] });
};
var feedback_section_default = FeedbackSection;
export {
  feedback_section_default as FeedbackSection,
  hamburger_menu_default as HamburgerMenu,
  LibraryContext,
  libraryContext_default as LibraryContextProvider,
  MarkdownRenderer_default as MarkdownRenderer,
  sidebar_default as Sidebar,
  TableOfContents_default as TableOfContents
};
/*! Bundled license information:

react-is/cjs/react-is.production.min.js:
  (** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=index.mjs.map