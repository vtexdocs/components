var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/prop-types/node_modules/react-is/cjs/react-is.production.min.js
var require_react_is_production_min = __commonJS({
  "node_modules/prop-types/node_modules/react-is/cjs/react-is.production.min.js"(exports) {
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

// node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js"(exports) {
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
        var Fragment6 = REACT_FRAGMENT_TYPE;
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
        exports.Fragment = Fragment6;
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

// node_modules/prop-types/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/prop-types/node_modules/react-is/index.js"(exports, module) {
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

// node_modules/@algolia/cache-common/dist/cache-common.esm.js
var cache_common_esm_exports = {};
__export(cache_common_esm_exports, {
  createFallbackableCache: () => createFallbackableCache,
  createNullCache: () => createNullCache
});
function createFallbackableCache(options) {
  const caches = [...options.caches];
  const current = caches.shift();
  if (current === void 0) {
    return createNullCache();
  }
  return {
    get(key, defaultValue, events = {
      miss: () => Promise.resolve()
    }) {
      return current.get(key, defaultValue, events).catch(() => {
        return createFallbackableCache({ caches }).get(key, defaultValue, events);
      });
    },
    set(key, value) {
      return current.set(key, value).catch(() => {
        return createFallbackableCache({ caches }).set(key, value);
      });
    },
    delete(key) {
      return current.delete(key).catch(() => {
        return createFallbackableCache({ caches }).delete(key);
      });
    },
    clear() {
      return current.clear().catch(() => {
        return createFallbackableCache({ caches }).clear();
      });
    }
  };
}
function createNullCache() {
  return {
    get(_key, defaultValue, events = {
      miss: () => Promise.resolve()
    }) {
      const value = defaultValue();
      return value.then((result) => Promise.all([result, events.miss(result)])).then(([result]) => result);
    },
    set(_key, value) {
      return Promise.resolve(value);
    },
    delete(_key) {
      return Promise.resolve();
    },
    clear() {
      return Promise.resolve();
    }
  };
}
var init_cache_common_esm = __esm({
  "node_modules/@algolia/cache-common/dist/cache-common.esm.js"() {
    "use strict";
  }
});

// node_modules/@algolia/cache-in-memory/dist/cache-in-memory.esm.js
var cache_in_memory_esm_exports = {};
__export(cache_in_memory_esm_exports, {
  createInMemoryCache: () => createInMemoryCache
});
function createInMemoryCache(options = { serializable: true }) {
  let cache = {};
  return {
    get(key, defaultValue, events = {
      miss: () => Promise.resolve()
    }) {
      const keyAsString = JSON.stringify(key);
      if (keyAsString in cache) {
        return Promise.resolve(options.serializable ? JSON.parse(cache[keyAsString]) : cache[keyAsString]);
      }
      const promise = defaultValue();
      const miss = events && events.miss || (() => Promise.resolve());
      return promise.then((value) => miss(value)).then(() => promise);
    },
    set(key, value) {
      cache[JSON.stringify(key)] = options.serializable ? JSON.stringify(value) : value;
      return Promise.resolve(value);
    },
    delete(key) {
      delete cache[JSON.stringify(key)];
      return Promise.resolve();
    },
    clear() {
      cache = {};
      return Promise.resolve();
    }
  };
}
var init_cache_in_memory_esm = __esm({
  "node_modules/@algolia/cache-in-memory/dist/cache-in-memory.esm.js"() {
    "use strict";
  }
});

// node_modules/@algolia/client-common/dist/client-common.esm.js
var client_common_esm_exports = {};
__export(client_common_esm_exports, {
  AuthMode: () => AuthMode,
  addMethods: () => addMethods,
  createAuth: () => createAuth,
  createRetryablePromise: () => createRetryablePromise,
  createWaitablePromise: () => createWaitablePromise,
  destroy: () => destroy,
  encode: () => encode,
  shuffle: () => shuffle,
  version: () => version
});
function createAuth(authMode, appId, apiKey) {
  const credentials = {
    "x-algolia-api-key": apiKey,
    "x-algolia-application-id": appId
  };
  return {
    headers() {
      return authMode === AuthMode.WithinHeaders ? credentials : {};
    },
    queryParameters() {
      return authMode === AuthMode.WithinQueryParameters ? credentials : {};
    }
  };
}
function createRetryablePromise(callback) {
  let retriesCount = 0;
  const retry = () => {
    retriesCount++;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(callback(retry));
      }, Math.min(100 * retriesCount, 1e3));
    });
  };
  return callback(retry);
}
function createWaitablePromise(promise, wait = (_response, _requestOptions) => {
  return Promise.resolve();
}) {
  return Object.assign(promise, {
    wait(requestOptions) {
      return createWaitablePromise(promise.then((response) => Promise.all([wait(response, requestOptions), response])).then((promiseResults) => promiseResults[1]));
    }
  });
}
function shuffle(array) {
  let c = array.length - 1;
  for (c; c > 0; c--) {
    const b = Math.floor(Math.random() * (c + 1));
    const a = array[c];
    array[c] = array[b];
    array[b] = a;
  }
  return array;
}
function addMethods(base, methods) {
  if (!methods) {
    return base;
  }
  Object.keys(methods).forEach((key) => {
    base[key] = methods[key](base);
  });
  return base;
}
function encode(format, ...args) {
  let i = 0;
  return format.replace(/%s/g, () => encodeURIComponent(args[i++]));
}
var version, destroy, AuthMode;
var init_client_common_esm = __esm({
  "node_modules/@algolia/client-common/dist/client-common.esm.js"() {
    "use strict";
    version = "4.20.0";
    destroy = (base) => {
      return () => {
        return base.transporter.requester.destroy();
      };
    };
    AuthMode = {
      /**
       * If auth credentials should be in query parameters.
       */
      WithinQueryParameters: 0,
      /**
       * If auth credentials should be in headers.
       */
      WithinHeaders: 1
    };
  }
});

// node_modules/@algolia/requester-common/dist/requester-common.esm.js
var MethodEnum;
var init_requester_common_esm = __esm({
  "node_modules/@algolia/requester-common/dist/requester-common.esm.js"() {
    "use strict";
    MethodEnum = {
      Delete: "DELETE",
      Get: "GET",
      Post: "POST",
      Put: "PUT"
    };
  }
});

// node_modules/@algolia/transporter/dist/transporter.esm.js
var transporter_esm_exports = {};
__export(transporter_esm_exports, {
  CallEnum: () => CallEnum,
  HostStatusEnum: () => HostStatusEnum,
  createApiError: () => createApiError,
  createDeserializationError: () => createDeserializationError,
  createMappedRequestOptions: () => createMappedRequestOptions,
  createRetryError: () => createRetryError,
  createStatefulHost: () => createStatefulHost,
  createStatelessHost: () => createStatelessHost,
  createTransporter: () => createTransporter,
  createUserAgent: () => createUserAgent,
  deserializeFailure: () => deserializeFailure,
  deserializeSuccess: () => deserializeSuccess,
  isStatefulHostTimeouted: () => isStatefulHostTimeouted,
  isStatefulHostUp: () => isStatefulHostUp,
  serializeData: () => serializeData,
  serializeHeaders: () => serializeHeaders,
  serializeQueryParameters: () => serializeQueryParameters,
  serializeUrl: () => serializeUrl,
  stackFrameWithoutCredentials: () => stackFrameWithoutCredentials,
  stackTraceWithoutCredentials: () => stackTraceWithoutCredentials
});
function createMappedRequestOptions(requestOptions, timeout) {
  const options = requestOptions || {};
  const data = options.data || {};
  Object.keys(options).forEach((key) => {
    if (["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(key) === -1) {
      data[key] = options[key];
    }
  });
  return {
    data: Object.entries(data).length > 0 ? data : void 0,
    timeout: options.timeout || timeout,
    headers: options.headers || {},
    queryParameters: options.queryParameters || {},
    cacheable: options.cacheable
  };
}
function createStatefulHost(host, status = HostStatusEnum.Up) {
  return {
    ...host,
    status,
    lastUpdate: Date.now()
  };
}
function isStatefulHostUp(host) {
  return host.status === HostStatusEnum.Up || Date.now() - host.lastUpdate > EXPIRATION_DELAY;
}
function isStatefulHostTimeouted(host) {
  return host.status === HostStatusEnum.Timeouted && Date.now() - host.lastUpdate <= EXPIRATION_DELAY;
}
function createStatelessHost(options) {
  if (typeof options === "string") {
    return {
      protocol: "https",
      url: options,
      accept: CallEnum.Any
    };
  }
  return {
    protocol: options.protocol || "https",
    url: options.url,
    accept: options.accept || CallEnum.Any
  };
}
function createRetryableOptions(hostsCache, statelessHosts) {
  return Promise.all(statelessHosts.map((statelessHost) => {
    return hostsCache.get(statelessHost, () => {
      return Promise.resolve(createStatefulHost(statelessHost));
    });
  })).then((statefulHosts) => {
    const hostsUp = statefulHosts.filter((host) => isStatefulHostUp(host));
    const hostsTimeouted = statefulHosts.filter((host) => isStatefulHostTimeouted(host));
    const hostsAvailable = [...hostsUp, ...hostsTimeouted];
    const statelessHostsAvailable = hostsAvailable.length > 0 ? hostsAvailable.map((host) => createStatelessHost(host)) : statelessHosts;
    return {
      getTimeout(timeoutsCount, baseTimeout) {
        const timeoutMultiplier = hostsTimeouted.length === 0 && timeoutsCount === 0 ? 1 : hostsTimeouted.length + 3 + timeoutsCount;
        return timeoutMultiplier * baseTimeout;
      },
      statelessHosts: statelessHostsAvailable
    };
  });
}
function retryableRequest(transporter, statelessHosts, request, requestOptions) {
  const stackTrace = [];
  const data = serializeData(request, requestOptions);
  const headers = serializeHeaders(transporter, requestOptions);
  const method = request.method;
  const dataQueryParameters = request.method !== MethodEnum.Get ? {} : {
    ...request.data,
    ...requestOptions.data
  };
  const queryParameters = {
    "x-algolia-agent": transporter.userAgent.value,
    ...transporter.queryParameters,
    ...dataQueryParameters,
    ...requestOptions.queryParameters
  };
  let timeoutsCount = 0;
  const retry = (hosts, getTimeout) => {
    const host = hosts.pop();
    if (host === void 0) {
      throw createRetryError(stackTraceWithoutCredentials(stackTrace));
    }
    const payload = {
      data,
      headers,
      method,
      url: serializeUrl(host, request.path, queryParameters),
      connectTimeout: getTimeout(timeoutsCount, transporter.timeouts.connect),
      responseTimeout: getTimeout(timeoutsCount, requestOptions.timeout)
    };
    const pushToStackTrace = (response) => {
      const stackFrame = {
        request: payload,
        response,
        host,
        triesLeft: hosts.length
      };
      stackTrace.push(stackFrame);
      return stackFrame;
    };
    const decisions = {
      onSuccess: (response) => deserializeSuccess(response),
      onRetry(response) {
        const stackFrame = pushToStackTrace(response);
        if (response.isTimedOut) {
          timeoutsCount++;
        }
        return Promise.all([
          /**
           * Failures are individually send the logger, allowing
           * the end user to debug / store stack frames even
           * when a retry error does not happen.
           */
          transporter.logger.info("Retryable failure", stackFrameWithoutCredentials(stackFrame)),
          /**
           * We also store the state of the host in failure cases. If the host, is
           * down it will remain down for the next 2 minutes. In a timeout situation,
           * this host will be added end of the list of hosts on the next request.
           */
          transporter.hostsCache.set(host, createStatefulHost(host, response.isTimedOut ? HostStatusEnum.Timeouted : HostStatusEnum.Down))
        ]).then(() => retry(hosts, getTimeout));
      },
      onFail(response) {
        pushToStackTrace(response);
        throw deserializeFailure(response, stackTraceWithoutCredentials(stackTrace));
      }
    };
    return transporter.requester.send(payload).then((response) => {
      return retryDecision(response, decisions);
    });
  };
  return createRetryableOptions(transporter.hostsCache, statelessHosts).then((options) => {
    return retry([...options.statelessHosts].reverse(), options.getTimeout);
  });
}
function createTransporter(options) {
  const { hostsCache, logger, requester, requestsCache, responsesCache, timeouts, userAgent, hosts, queryParameters, headers } = options;
  const transporter = {
    hostsCache,
    logger,
    requester,
    requestsCache,
    responsesCache,
    timeouts,
    userAgent,
    headers,
    queryParameters,
    hosts: hosts.map((host) => createStatelessHost(host)),
    read(request, requestOptions) {
      const mappedRequestOptions = createMappedRequestOptions(requestOptions, transporter.timeouts.read);
      const createRetryableRequest = () => {
        return retryableRequest(transporter, transporter.hosts.filter((host) => (host.accept & CallEnum.Read) !== 0), request, mappedRequestOptions);
      };
      const cacheable = mappedRequestOptions.cacheable !== void 0 ? mappedRequestOptions.cacheable : request.cacheable;
      if (cacheable !== true) {
        return createRetryableRequest();
      }
      const key = {
        request,
        mappedRequestOptions,
        transporter: {
          queryParameters: transporter.queryParameters,
          headers: transporter.headers
        }
      };
      return transporter.responsesCache.get(key, () => {
        return transporter.requestsCache.get(key, () => {
          return transporter.requestsCache.set(key, createRetryableRequest()).then((response) => Promise.all([transporter.requestsCache.delete(key), response]), (err) => Promise.all([transporter.requestsCache.delete(key), Promise.reject(err)])).then(([_, response]) => response);
        });
      }, {
        /**
         * Of course, once we get this response back from the server, we
         * tell response cache to actually store the received response
         * to be used later.
         */
        miss: (response) => transporter.responsesCache.set(key, response)
      });
    },
    write(request, requestOptions) {
      return retryableRequest(transporter, transporter.hosts.filter((host) => (host.accept & CallEnum.Write) !== 0), request, createMappedRequestOptions(requestOptions, transporter.timeouts.write));
    }
  };
  return transporter;
}
function createUserAgent(version2) {
  const userAgent = {
    value: `Algolia for JavaScript (${version2})`,
    add(options) {
      const addedUserAgent = `; ${options.segment}${options.version !== void 0 ? ` (${options.version})` : ""}`;
      if (userAgent.value.indexOf(addedUserAgent) === -1) {
        userAgent.value = `${userAgent.value}${addedUserAgent}`;
      }
      return userAgent;
    }
  };
  return userAgent;
}
function deserializeSuccess(response) {
  try {
    return JSON.parse(response.content);
  } catch (e) {
    throw createDeserializationError(e.message, response);
  }
}
function deserializeFailure({ content, status }, stackFrame) {
  let message = content;
  try {
    message = JSON.parse(content).message;
  } catch (e) {
  }
  return createApiError(message, status, stackFrame);
}
function encode2(format, ...args) {
  let i = 0;
  return format.replace(/%s/g, () => encodeURIComponent(args[i++]));
}
function serializeUrl(host, path, queryParameters) {
  const queryParametersAsString = serializeQueryParameters(queryParameters);
  let url = `${host.protocol}://${host.url}/${path.charAt(0) === "/" ? path.substr(1) : path}`;
  if (queryParametersAsString.length) {
    url += `?${queryParametersAsString}`;
  }
  return url;
}
function serializeQueryParameters(parameters) {
  const isObjectOrArray = (value) => Object.prototype.toString.call(value) === "[object Object]" || Object.prototype.toString.call(value) === "[object Array]";
  return Object.keys(parameters).map((key) => encode2("%s=%s", key, isObjectOrArray(parameters[key]) ? JSON.stringify(parameters[key]) : parameters[key])).join("&");
}
function serializeData(request, requestOptions) {
  if (request.method === MethodEnum.Get || request.data === void 0 && requestOptions.data === void 0) {
    return void 0;
  }
  const data = Array.isArray(request.data) ? request.data : { ...request.data, ...requestOptions.data };
  return JSON.stringify(data);
}
function serializeHeaders(transporter, requestOptions) {
  const headers = {
    ...transporter.headers,
    ...requestOptions.headers
  };
  const serializedHeaders = {};
  Object.keys(headers).forEach((header) => {
    const value = headers[header];
    serializedHeaders[header.toLowerCase()] = value;
  });
  return serializedHeaders;
}
function stackTraceWithoutCredentials(stackTrace) {
  return stackTrace.map((stackFrame) => stackFrameWithoutCredentials(stackFrame));
}
function stackFrameWithoutCredentials(stackFrame) {
  const modifiedHeaders = stackFrame.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
  return {
    ...stackFrame,
    request: {
      ...stackFrame.request,
      headers: {
        ...stackFrame.request.headers,
        ...modifiedHeaders
      }
    }
  };
}
function createApiError(message, status, transporterStackTrace) {
  return {
    name: "ApiError",
    message,
    status,
    transporterStackTrace
  };
}
function createDeserializationError(message, response) {
  return {
    name: "DeserializationError",
    message,
    response
  };
}
function createRetryError(transporterStackTrace) {
  return {
    name: "RetryError",
    message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",
    transporterStackTrace
  };
}
var CallEnum, HostStatusEnum, EXPIRATION_DELAY, isNetworkError, isRetryable, isSuccess, retryDecision;
var init_transporter_esm = __esm({
  "node_modules/@algolia/transporter/dist/transporter.esm.js"() {
    "use strict";
    init_requester_common_esm();
    CallEnum = {
      /**
       * If the host is read only.
       */
      Read: 1,
      /**
       * If the host is write only.
       */
      Write: 2,
      /**
       * If the host is both read and write.
       */
      Any: 3
    };
    HostStatusEnum = {
      Up: 1,
      Down: 2,
      Timeouted: 3
    };
    EXPIRATION_DELAY = 2 * 60 * 1e3;
    isNetworkError = ({ isTimedOut, status }) => {
      return !isTimedOut && ~~status === 0;
    };
    isRetryable = (response) => {
      const status = response.status;
      const isTimedOut = response.isTimedOut;
      return isTimedOut || isNetworkError(response) || ~~(status / 100) !== 2 && ~~(status / 100) !== 4;
    };
    isSuccess = ({ status }) => {
      return ~~(status / 100) === 2;
    };
    retryDecision = (response, outcomes) => {
      if (isRetryable(response)) {
        return outcomes.onRetry(response);
      }
      if (isSuccess(response)) {
        return outcomes.onSuccess(response);
      }
      return outcomes.onFail(response);
    };
  }
});

// node_modules/@algolia/client-analytics/dist/client-analytics.esm.js
var client_analytics_esm_exports = {};
__export(client_analytics_esm_exports, {
  addABTest: () => addABTest,
  createAnalyticsClient: () => createAnalyticsClient,
  deleteABTest: () => deleteABTest,
  getABTest: () => getABTest,
  getABTests: () => getABTests,
  stopABTest: () => stopABTest
});
var createAnalyticsClient, addABTest, deleteABTest, getABTest, getABTests, stopABTest;
var init_client_analytics_esm = __esm({
  "node_modules/@algolia/client-analytics/dist/client-analytics.esm.js"() {
    "use strict";
    init_client_common_esm();
    init_transporter_esm();
    init_requester_common_esm();
    createAnalyticsClient = (options) => {
      const region = options.region || "us";
      const auth = createAuth(AuthMode.WithinHeaders, options.appId, options.apiKey);
      const transporter = createTransporter({
        hosts: [{ url: `analytics.${region}.algolia.com` }],
        ...options,
        headers: {
          ...auth.headers(),
          ...{ "content-type": "application/json" },
          ...options.headers
        },
        queryParameters: {
          ...auth.queryParameters(),
          ...options.queryParameters
        }
      });
      const appId = options.appId;
      return addMethods({ appId, transporter }, options.methods);
    };
    addABTest = (base) => {
      return (abTest, requestOptions) => {
        return base.transporter.write({
          method: MethodEnum.Post,
          path: "2/abtests",
          data: abTest
        }, requestOptions);
      };
    };
    deleteABTest = (base) => {
      return (abTestID, requestOptions) => {
        return base.transporter.write({
          method: MethodEnum.Delete,
          path: encode("2/abtests/%s", abTestID)
        }, requestOptions);
      };
    };
    getABTest = (base) => {
      return (abTestID, requestOptions) => {
        return base.transporter.read({
          method: MethodEnum.Get,
          path: encode("2/abtests/%s", abTestID)
        }, requestOptions);
      };
    };
    getABTests = (base) => {
      return (requestOptions) => {
        return base.transporter.read({
          method: MethodEnum.Get,
          path: "2/abtests"
        }, requestOptions);
      };
    };
    stopABTest = (base) => {
      return (abTestID, requestOptions) => {
        return base.transporter.write({
          method: MethodEnum.Post,
          path: encode("2/abtests/%s/stop", abTestID)
        }, requestOptions);
      };
    };
  }
});

// node_modules/@algolia/client-personalization/dist/client-personalization.esm.js
var client_personalization_esm_exports = {};
__export(client_personalization_esm_exports, {
  createPersonalizationClient: () => createPersonalizationClient,
  getPersonalizationStrategy: () => getPersonalizationStrategy,
  setPersonalizationStrategy: () => setPersonalizationStrategy
});
var createPersonalizationClient, getPersonalizationStrategy, setPersonalizationStrategy;
var init_client_personalization_esm = __esm({
  "node_modules/@algolia/client-personalization/dist/client-personalization.esm.js"() {
    "use strict";
    init_client_common_esm();
    init_transporter_esm();
    init_requester_common_esm();
    createPersonalizationClient = (options) => {
      const region = options.region || "us";
      const auth = createAuth(AuthMode.WithinHeaders, options.appId, options.apiKey);
      const transporter = createTransporter({
        hosts: [{ url: `personalization.${region}.algolia.com` }],
        ...options,
        headers: {
          ...auth.headers(),
          ...{ "content-type": "application/json" },
          ...options.headers
        },
        queryParameters: {
          ...auth.queryParameters(),
          ...options.queryParameters
        }
      });
      return addMethods({ appId: options.appId, transporter }, options.methods);
    };
    getPersonalizationStrategy = (base) => {
      return (requestOptions) => {
        return base.transporter.read({
          method: MethodEnum.Get,
          path: "1/strategies/personalization"
        }, requestOptions);
      };
    };
    setPersonalizationStrategy = (base) => {
      return (personalizationStrategy, requestOptions) => {
        return base.transporter.write({
          method: MethodEnum.Post,
          path: "1/strategies/personalization",
          data: personalizationStrategy
        }, requestOptions);
      };
    };
  }
});

// node_modules/@algolia/client-search/dist/client-search.esm.js
var client_search_esm_exports = {};
__export(client_search_esm_exports, {
  ApiKeyACLEnum: () => ApiKeyACLEnum,
  BatchActionEnum: () => BatchActionEnum,
  ScopeEnum: () => ScopeEnum,
  StrategyEnum: () => StrategyEnum,
  SynonymEnum: () => SynonymEnum,
  addApiKey: () => addApiKey,
  assignUserID: () => assignUserID,
  assignUserIDs: () => assignUserIDs,
  batch: () => batch,
  browseObjects: () => browseObjects,
  browseRules: () => browseRules,
  browseSynonyms: () => browseSynonyms,
  chunkedBatch: () => chunkedBatch,
  clearDictionaryEntries: () => clearDictionaryEntries,
  clearObjects: () => clearObjects,
  clearRules: () => clearRules,
  clearSynonyms: () => clearSynonyms,
  copyIndex: () => copyIndex,
  copyRules: () => copyRules,
  copySettings: () => copySettings,
  copySynonyms: () => copySynonyms,
  createBrowsablePromise: () => createBrowsablePromise,
  createMissingObjectIDError: () => createMissingObjectIDError,
  createObjectNotFoundError: () => createObjectNotFoundError,
  createSearchClient: () => createSearchClient,
  createValidUntilNotFoundError: () => createValidUntilNotFoundError,
  customRequest: () => customRequest,
  deleteApiKey: () => deleteApiKey,
  deleteBy: () => deleteBy,
  deleteDictionaryEntries: () => deleteDictionaryEntries,
  deleteIndex: () => deleteIndex,
  deleteObject: () => deleteObject,
  deleteObjects: () => deleteObjects,
  deleteRule: () => deleteRule,
  deleteSynonym: () => deleteSynonym,
  exists: () => exists,
  findAnswers: () => findAnswers,
  findObject: () => findObject,
  generateSecuredApiKey: () => generateSecuredApiKey,
  getApiKey: () => getApiKey,
  getAppTask: () => getAppTask,
  getDictionarySettings: () => getDictionarySettings,
  getLogs: () => getLogs,
  getObject: () => getObject,
  getObjectPosition: () => getObjectPosition,
  getObjects: () => getObjects,
  getRule: () => getRule,
  getSecuredApiKeyRemainingValidity: () => getSecuredApiKeyRemainingValidity,
  getSettings: () => getSettings,
  getSynonym: () => getSynonym,
  getTask: () => getTask,
  getTopUserIDs: () => getTopUserIDs,
  getUserID: () => getUserID,
  hasPendingMappings: () => hasPendingMappings,
  initIndex: () => initIndex,
  listApiKeys: () => listApiKeys,
  listClusters: () => listClusters,
  listIndices: () => listIndices,
  listUserIDs: () => listUserIDs,
  moveIndex: () => moveIndex,
  multipleBatch: () => multipleBatch,
  multipleGetObjects: () => multipleGetObjects,
  multipleQueries: () => multipleQueries,
  multipleSearchForFacetValues: () => multipleSearchForFacetValues,
  partialUpdateObject: () => partialUpdateObject,
  partialUpdateObjects: () => partialUpdateObjects,
  removeUserID: () => removeUserID,
  replaceAllObjects: () => replaceAllObjects,
  replaceAllRules: () => replaceAllRules,
  replaceAllSynonyms: () => replaceAllSynonyms,
  replaceDictionaryEntries: () => replaceDictionaryEntries,
  restoreApiKey: () => restoreApiKey,
  saveDictionaryEntries: () => saveDictionaryEntries,
  saveObject: () => saveObject,
  saveObjects: () => saveObjects,
  saveRule: () => saveRule,
  saveRules: () => saveRules,
  saveSynonym: () => saveSynonym,
  saveSynonyms: () => saveSynonyms,
  search: () => search,
  searchDictionaryEntries: () => searchDictionaryEntries,
  searchForFacetValues: () => searchForFacetValues,
  searchRules: () => searchRules,
  searchSynonyms: () => searchSynonyms,
  searchUserIDs: () => searchUserIDs,
  setDictionarySettings: () => setDictionarySettings,
  setSettings: () => setSettings,
  updateApiKey: () => updateApiKey,
  waitAppTask: () => waitAppTask,
  waitTask: () => waitTask
});
import { createHmac } from "crypto";
function createBrowsablePromise(options) {
  const browse = (data) => {
    return options.request(data).then((response) => {
      if (options.batch !== void 0) {
        options.batch(response.hits);
      }
      if (options.shouldStop(response)) {
        return void 0;
      }
      if (response.cursor) {
        return browse({
          cursor: response.cursor
        });
      }
      return browse({
        page: (data.page || 0) + 1
      });
    });
  };
  return browse({});
}
function createMissingObjectIDError() {
  return {
    name: "MissingObjectIDError",
    message: "All objects must have an unique objectID (like a primary key) to be valid. Algolia is also able to generate objectIDs automatically but *it's not recommended*. To do it, use the `{'autoGenerateObjectIDIfNotExist': true}` option."
  };
}
function createObjectNotFoundError() {
  return {
    name: "ObjectNotFoundError",
    message: "Object not found."
  };
}
function createValidUntilNotFoundError() {
  return {
    name: "ValidUntilNotFoundError",
    message: "ValidUntil not found in given secured api key."
  };
}
var createSearchClient, addApiKey, assignUserID, assignUserIDs, clearDictionaryEntries, copyIndex, copyRules, copySettings, copySynonyms, customRequest, deleteApiKey, deleteDictionaryEntries, generateSecuredApiKey, getApiKey, getAppTask, getDictionarySettings, getLogs, getSecuredApiKeyRemainingValidity, getTopUserIDs, getUserID, hasPendingMappings, initIndex, listApiKeys, listClusters, listIndices, listUserIDs, moveIndex, multipleBatch, multipleGetObjects, multipleQueries, multipleSearchForFacetValues, removeUserID, replaceDictionaryEntries, restoreApiKey, saveDictionaryEntries, searchDictionaryEntries, searchUserIDs, setDictionarySettings, updateApiKey, waitAppTask, batch, browseObjects, browseRules, browseSynonyms, chunkedBatch, clearObjects, clearRules, clearSynonyms, deleteBy, deleteIndex, deleteObject, deleteObjects, deleteRule, deleteSynonym, exists, findAnswers, findObject, getObject, getObjectPosition, getObjects, getRule, getSettings, getSynonym, getTask, partialUpdateObject, partialUpdateObjects, replaceAllObjects, replaceAllRules, replaceAllSynonyms, saveObject, saveObjects, saveRule, saveRules, saveSynonym, saveSynonyms, search, searchForFacetValues, searchRules, searchSynonyms, setSettings, waitTask, ApiKeyACLEnum, BatchActionEnum, ScopeEnum, StrategyEnum, SynonymEnum;
var init_client_search_esm = __esm({
  "node_modules/@algolia/client-search/dist/client-search.esm.js"() {
    "use strict";
    init_client_common_esm();
    init_transporter_esm();
    init_requester_common_esm();
    createSearchClient = (options) => {
      const appId = options.appId;
      const auth = createAuth(options.authMode !== void 0 ? options.authMode : AuthMode.WithinHeaders, appId, options.apiKey);
      const transporter = createTransporter({
        hosts: [
          { url: `${appId}-dsn.algolia.net`, accept: CallEnum.Read },
          { url: `${appId}.algolia.net`, accept: CallEnum.Write }
        ].concat(shuffle([
          { url: `${appId}-1.algolianet.com` },
          { url: `${appId}-2.algolianet.com` },
          { url: `${appId}-3.algolianet.com` }
        ])),
        ...options,
        headers: {
          ...auth.headers(),
          ...{ "content-type": "application/x-www-form-urlencoded" },
          ...options.headers
        },
        queryParameters: {
          ...auth.queryParameters(),
          ...options.queryParameters
        }
      });
      const base = {
        transporter,
        appId,
        addAlgoliaAgent(segment, version2) {
          transporter.userAgent.add({ segment, version: version2 });
        },
        clearCache() {
          return Promise.all([
            transporter.requestsCache.clear(),
            transporter.responsesCache.clear()
          ]).then(() => void 0);
        }
      };
      return addMethods(base, options.methods);
    };
    addApiKey = (base) => {
      return (acl, requestOptions) => {
        const { queryParameters, ...options } = requestOptions || {};
        const data = {
          acl,
          ...queryParameters !== void 0 ? { queryParameters } : {}
        };
        const wait = (response, waitRequestOptions) => {
          return createRetryablePromise((retry) => {
            return getApiKey(base)(response.key, waitRequestOptions).catch((apiError) => {
              if (apiError.status !== 404) {
                throw apiError;
              }
              return retry();
            });
          });
        };
        return createWaitablePromise(base.transporter.write({
          method: MethodEnum.Post,
          path: "1/keys",
          data
        }, options), wait);
      };
    };
    assignUserID = (base) => {
      return (userID, clusterName, requestOptions) => {
        const mappedRequestOptions = createMappedRequestOptions(requestOptions);
        mappedRequestOptions.queryParameters["X-Algolia-User-ID"] = userID;
        return base.transporter.write({
          method: MethodEnum.Post,
          path: "1/clusters/mapping",
          data: { cluster: clusterName }
        }, mappedRequestOptions);
      };
    };
    assignUserIDs = (base) => {
      return (userIDs, clusterName, requestOptions) => {
        return base.transporter.write({
          method: MethodEnum.Post,
          path: "1/clusters/mapping/batch",
          data: {
            users: userIDs,
            cluster: clusterName
          }
        }, requestOptions);
      };
    };
    clearDictionaryEntries = (base) => {
      return (dictionary, requestOptions) => {
        return createWaitablePromise(base.transporter.write({
          method: MethodEnum.Post,
          path: encode("/1/dictionaries/%s/batch", dictionary),
          data: {
            clearExistingDictionaryEntries: true,
            requests: { action: "addEntry", body: [] }
          }
        }, requestOptions), (response, waitRequestOptions) => waitAppTask(base)(response.taskID, waitRequestOptions));
      };
    };
    copyIndex = (base) => {
      return (from, to, requestOptions) => {
        const wait = (response, waitRequestOptions) => {
          return initIndex(base)(from, {
            methods: { waitTask }
          }).waitTask(response.taskID, waitRequestOptions);
        };
        return createWaitablePromise(base.transporter.write({
          method: MethodEnum.Post,
          path: encode("1/indexes/%s/operation", from),
          data: {
            operation: "copy",
            destination: to
          }
        }, requestOptions), wait);
      };
    };
    copyRules = (base) => {
      return (from, to, requestOptions) => {
        return copyIndex(base)(from, to, {
          ...requestOptions,
          scope: [ScopeEnum.Rules]
        });
      };
    };
    copySettings = (base) => {
      return (from, to, requestOptions) => {
        return copyIndex(base)(from, to, {
          ...requestOptions,
          scope: [ScopeEnum.Settings]
        });
      };
    };
    copySynonyms = (base) => {
      return (from, to, requestOptions) => {
        return copyIndex(base)(from, to, {
          ...requestOptions,
          scope: [ScopeEnum.Synonyms]
        });
      };
    };
    customRequest = (base) => {
      return (request, requestOptions) => {
        if (request.method === MethodEnum.Get) {
          return base.transporter.read(request, requestOptions);
        }
        return base.transporter.write(request, requestOptions);
      };
    };
    deleteApiKey = (base) => {
      return (apiKey, requestOptions) => {
        const wait = (_, waitRequestOptions) => {
          return createRetryablePromise((retry) => {
            return getApiKey(base)(apiKey, waitRequestOptions).then(retry).catch((apiError) => {
              if (apiError.status !== 404) {
                throw apiError;
              }
            });
          });
        };
        return createWaitablePromise(base.transporter.write({
          method: MethodEnum.Delete,
          path: encode("1/keys/%s", apiKey)
        }, requestOptions), wait);
      };
    };
    deleteDictionaryEntries = (base) => {
      return (dictionary, objectIDs, requestOptions) => {
        const requests = objectIDs.map((objectID) => ({
          action: "deleteEntry",
          body: { objectID }
        }));
        return createWaitablePromise(base.transporter.write({
          method: MethodEnum.Post,
          path: encode("/1/dictionaries/%s/batch", dictionary),
          data: { clearExistingDictionaryEntries: false, requests }
        }, requestOptions), (response, waitRequestOptions) => waitAppTask(base)(response.taskID, waitRequestOptions));
      };
    };
    generateSecuredApiKey = () => {
      return (parentApiKey, restrictions) => {
        const queryParameters = serializeQueryParameters(restrictions);
        const securedKey = createHmac("sha256", parentApiKey).update(queryParameters).digest("hex");
        return Buffer.from(securedKey + queryParameters).toString("base64");
      };
    };
    getApiKey = (base) => {
      return (apiKey, requestOptions) => {
        return base.transporter.read({
          method: MethodEnum.Get,
          path: encode("1/keys/%s", apiKey)
        }, requestOptions);
      };
    };
    getAppTask = (base) => {
      return (taskID, requestOptions) => {
        return base.transporter.read({
          method: MethodEnum.Get,
          path: encode("1/task/%s", taskID.toString())
        }, requestOptions);
      };
    };
    getDictionarySettings = (base) => {
      return (requestOptions) => {
        return base.transporter.read({
          method: MethodEnum.Get,
          path: "/1/dictionaries/*/settings"
        }, requestOptions);
      };
    };
    getLogs = (base) => {
      return (requestOptions) => {
        return base.transporter.read({
          method: MethodEnum.Get,
          path: "1/logs"
        }, requestOptions);
      };
    };
    getSecuredApiKeyRemainingValidity = () => {
      return (securedApiKey) => {
        const decodedString = Buffer.from(securedApiKey, "base64").toString("ascii");
        const regex = /validUntil=(\d+)/;
        const match = decodedString.match(regex);
        if (match === null) {
          throw createValidUntilNotFoundError();
        }
        return parseInt(match[1], 10) - Math.round((/* @__PURE__ */ new Date()).getTime() / 1e3);
      };
    };
    getTopUserIDs = (base) => {
      return (requestOptions) => {
        return base.transporter.read({
          method: MethodEnum.Get,
          path: "1/clusters/mapping/top"
        }, requestOptions);
      };
    };
    getUserID = (base) => {
      return (userID, requestOptions) => {
        return base.transporter.read({
          method: MethodEnum.Get,
          path: encode("1/clusters/mapping/%s", userID)
        }, requestOptions);
      };
    };
    hasPendingMappings = (base) => {
      return (requestOptions) => {
        const { retrieveMappings, ...options } = requestOptions || {};
        if (retrieveMappings === true) {
          options.getClusters = true;
        }
        return base.transporter.read({
          method: MethodEnum.Get,
          path: "1/clusters/mapping/pending"
        }, options);
      };
    };
    initIndex = (base) => {
      return (indexName, options = {}) => {
        const searchIndex2 = {
          transporter: base.transporter,
          appId: base.appId,
          indexName
        };
        return addMethods(searchIndex2, options.methods);
      };
    };
    listApiKeys = (base) => {
      return (requestOptions) => {
        return base.transporter.read({
          method: MethodEnum.Get,
          path: "1/keys"
        }, requestOptions);
      };
    };
    listClusters = (base) => {
      return (requestOptions) => {
        return base.transporter.read({
          method: MethodEnum.Get,
          path: "1/clusters"
        }, requestOptions);
      };
    };
    listIndices = (base) => {
      return (requestOptions) => {
        return base.transporter.read({
          method: MethodEnum.Get,
          path: "1/indexes"
        }, requestOptions);
      };
    };
    listUserIDs = (base) => {
      return (requestOptions) => {
        return base.transporter.read({
          method: MethodEnum.Get,
          path: "1/clusters/mapping"
        }, requestOptions);
      };
    };
    moveIndex = (base) => {
      return (from, to, requestOptions) => {
        const wait = (response, waitRequestOptions) => {
          return initIndex(base)(from, {
            methods: { waitTask }
          }).waitTask(response.taskID, waitRequestOptions);
        };
        return createWaitablePromise(base.transporter.write({
          method: MethodEnum.Post,
          path: encode("1/indexes/%s/operation", from),
          data: {
            operation: "move",
            destination: to
          }
        }, requestOptions), wait);
      };
    };
    multipleBatch = (base) => {
      return (requests, requestOptions) => {
        const wait = (response, waitRequestOptions) => {
          return Promise.all(Object.keys(response.taskID).map((indexName) => {
            return initIndex(base)(indexName, {
              methods: { waitTask }
            }).waitTask(response.taskID[indexName], waitRequestOptions);
          }));
        };
        return createWaitablePromise(base.transporter.write({
          method: MethodEnum.Post,
          path: "1/indexes/*/batch",
          data: {
            requests
          }
        }, requestOptions), wait);
      };
    };
    multipleGetObjects = (base) => {
      return (requests, requestOptions) => {
        return base.transporter.read({
          method: MethodEnum.Post,
          path: "1/indexes/*/objects",
          data: {
            requests
          }
        }, requestOptions);
      };
    };
    multipleQueries = (base) => {
      return (queries, requestOptions) => {
        const requests = queries.map((query) => {
          return {
            ...query,
            params: serializeQueryParameters(query.params || {})
          };
        });
        return base.transporter.read({
          method: MethodEnum.Post,
          path: "1/indexes/*/queries",
          data: {
            requests
          },
          cacheable: true
        }, requestOptions);
      };
    };
    multipleSearchForFacetValues = (base) => {
      return (queries, requestOptions) => {
        return Promise.all(queries.map((query) => {
          const { facetName, facetQuery, ...params } = query.params;
          return initIndex(base)(query.indexName, {
            methods: { searchForFacetValues }
          }).searchForFacetValues(facetName, facetQuery, {
            ...requestOptions,
            ...params
          });
        }));
      };
    };
    removeUserID = (base) => {
      return (userID, requestOptions) => {
        const mappedRequestOptions = createMappedRequestOptions(requestOptions);
        mappedRequestOptions.queryParameters["X-Algolia-User-ID"] = userID;
        return base.transporter.write({
          method: MethodEnum.Delete,
          path: "1/clusters/mapping"
        }, mappedRequestOptions);
      };
    };
    replaceDictionaryEntries = (base) => {
      return (dictionary, entries, requestOptions) => {
        const requests = entries.map((entry) => ({
          action: "addEntry",
          body: entry
        }));
        return createWaitablePromise(base.transporter.write({
          method: MethodEnum.Post,
          path: encode("/1/dictionaries/%s/batch", dictionary),
          data: { clearExistingDictionaryEntries: true, requests }
        }, requestOptions), (response, waitRequestOptions) => waitAppTask(base)(response.taskID, waitRequestOptions));
      };
    };
    restoreApiKey = (base) => {
      return (apiKey, requestOptions) => {
        const wait = (_, waitRequestOptions) => {
          return createRetryablePromise((retry) => {
            return getApiKey(base)(apiKey, waitRequestOptions).catch((apiError) => {
              if (apiError.status !== 404) {
                throw apiError;
              }
              return retry();
            });
          });
        };
        return createWaitablePromise(base.transporter.write({
          method: MethodEnum.Post,
          path: encode("1/keys/%s/restore", apiKey)
        }, requestOptions), wait);
      };
    };
    saveDictionaryEntries = (base) => {
      return (dictionary, entries, requestOptions) => {
        const requests = entries.map((entry) => ({
          action: "addEntry",
          body: entry
        }));
        return createWaitablePromise(base.transporter.write({
          method: MethodEnum.Post,
          path: encode("/1/dictionaries/%s/batch", dictionary),
          data: { clearExistingDictionaryEntries: false, requests }
        }, requestOptions), (response, waitRequestOptions) => waitAppTask(base)(response.taskID, waitRequestOptions));
      };
    };
    searchDictionaryEntries = (base) => {
      return (dictionary, query, requestOptions) => {
        return base.transporter.read({
          method: MethodEnum.Post,
          path: encode("/1/dictionaries/%s/search", dictionary),
          data: {
            query
          },
          cacheable: true
        }, requestOptions);
      };
    };
    searchUserIDs = (base) => {
      return (query, requestOptions) => {
        return base.transporter.read({
          method: MethodEnum.Post,
          path: "1/clusters/mapping/search",
          data: {
            query
          }
        }, requestOptions);
      };
    };
    setDictionarySettings = (base) => {
      return (settings, requestOptions) => {
        return createWaitablePromise(base.transporter.write({
          method: MethodEnum.Put,
          path: "/1/dictionaries/*/settings",
          data: settings
        }, requestOptions), (response, waitRequestOptions) => waitAppTask(base)(response.taskID, waitRequestOptions));
      };
    };
    updateApiKey = (base) => {
      return (apiKey, requestOptions) => {
        const updatedFields = Object.assign({}, requestOptions);
        const { queryParameters, ...options } = requestOptions || {};
        const data = queryParameters ? { queryParameters } : {};
        const apiKeyFields = [
          "acl",
          "indexes",
          "referers",
          "restrictSources",
          "queryParameters",
          "description",
          "maxQueriesPerIPPerHour",
          "maxHitsPerQuery"
        ];
        const hasChanged = (getApiKeyResponse) => {
          return Object.keys(updatedFields).filter((updatedField) => apiKeyFields.indexOf(updatedField) !== -1).every((updatedField) => {
            if (Array.isArray(getApiKeyResponse[updatedField]) && Array.isArray(updatedFields[updatedField])) {
              const getApiKeyResponseArray = getApiKeyResponse[updatedField];
              return getApiKeyResponseArray.length === updatedFields[updatedField].length && getApiKeyResponseArray.every((value, index) => value === updatedFields[updatedField][index]);
            } else {
              return getApiKeyResponse[updatedField] === updatedFields[updatedField];
            }
          });
        };
        const wait = (_, waitRequestOptions) => createRetryablePromise((retry) => {
          return getApiKey(base)(apiKey, waitRequestOptions).then((getApiKeyResponse) => {
            return hasChanged(getApiKeyResponse) ? Promise.resolve() : retry();
          });
        });
        return createWaitablePromise(base.transporter.write({
          method: MethodEnum.Put,
          path: encode("1/keys/%s", apiKey),
          data
        }, options), wait);
      };
    };
    waitAppTask = (base) => {
      return (taskID, requestOptions) => {
        return createRetryablePromise((retry) => {
          return getAppTask(base)(taskID, requestOptions).then((response) => {
            return response.status !== "published" ? retry() : void 0;
          });
        });
      };
    };
    batch = (base) => {
      return (requests, requestOptions) => {
        const wait = (response, waitRequestOptions) => {
          return waitTask(base)(response.taskID, waitRequestOptions);
        };
        return createWaitablePromise(base.transporter.write({
          method: MethodEnum.Post,
          path: encode("1/indexes/%s/batch", base.indexName),
          data: {
            requests
          }
        }, requestOptions), wait);
      };
    };
    browseObjects = (base) => {
      return (requestOptions) => {
        return createBrowsablePromise({
          shouldStop: (response) => response.cursor === void 0,
          ...requestOptions,
          request: (data) => base.transporter.read({
            method: MethodEnum.Post,
            path: encode("1/indexes/%s/browse", base.indexName),
            data
          }, requestOptions)
        });
      };
    };
    browseRules = (base) => {
      return (requestOptions) => {
        const options = {
          hitsPerPage: 1e3,
          ...requestOptions
        };
        return createBrowsablePromise({
          shouldStop: (response) => response.hits.length < options.hitsPerPage,
          ...options,
          request(data) {
            return searchRules(base)("", { ...options, ...data }).then((response) => {
              return {
                ...response,
                hits: response.hits.map((rule) => {
                  delete rule._highlightResult;
                  return rule;
                })
              };
            });
          }
        });
      };
    };
    browseSynonyms = (base) => {
      return (requestOptions) => {
        const options = {
          hitsPerPage: 1e3,
          ...requestOptions
        };
        return createBrowsablePromise({
          shouldStop: (response) => response.hits.length < options.hitsPerPage,
          ...options,
          request(data) {
            return searchSynonyms(base)("", { ...options, ...data }).then((response) => {
              return {
                ...response,
                hits: response.hits.map((synonym) => {
                  delete synonym._highlightResult;
                  return synonym;
                })
              };
            });
          }
        });
      };
    };
    chunkedBatch = (base) => {
      return (bodies, action, requestOptions) => {
        const { batchSize, ...options } = requestOptions || {};
        const response = {
          taskIDs: [],
          objectIDs: []
        };
        const forEachBatch = (lastIndex = 0) => {
          const bodiesChunk = [];
          let index;
          for (index = lastIndex; index < bodies.length; index++) {
            bodiesChunk.push(bodies[index]);
            if (bodiesChunk.length === (batchSize || 1e3)) {
              break;
            }
          }
          if (bodiesChunk.length === 0) {
            return Promise.resolve(response);
          }
          return batch(base)(bodiesChunk.map((body2) => {
            return {
              action,
              body: body2
            };
          }), options).then((res) => {
            response.objectIDs = response.objectIDs.concat(res.objectIDs);
            response.taskIDs.push(res.taskID);
            index++;
            return forEachBatch(index);
          });
        };
        return createWaitablePromise(forEachBatch(), (chunkedBatchResponse, waitRequestOptions) => {
          return Promise.all(chunkedBatchResponse.taskIDs.map((taskID) => {
            return waitTask(base)(taskID, waitRequestOptions);
          }));
        });
      };
    };
    clearObjects = (base) => {
      return (requestOptions) => {
        return createWaitablePromise(base.transporter.write({
          method: MethodEnum.Post,
          path: encode("1/indexes/%s/clear", base.indexName)
        }, requestOptions), (response, waitRequestOptions) => waitTask(base)(response.taskID, waitRequestOptions));
      };
    };
    clearRules = (base) => {
      return (requestOptions) => {
        const { forwardToReplicas, ...options } = requestOptions || {};
        const mappedRequestOptions = createMappedRequestOptions(options);
        if (forwardToReplicas) {
          mappedRequestOptions.queryParameters.forwardToReplicas = 1;
        }
        return createWaitablePromise(base.transporter.write({
          method: MethodEnum.Post,
          path: encode("1/indexes/%s/rules/clear", base.indexName)
        }, mappedRequestOptions), (response, waitRequestOptions) => waitTask(base)(response.taskID, waitRequestOptions));
      };
    };
    clearSynonyms = (base) => {
      return (requestOptions) => {
        const { forwardToReplicas, ...options } = requestOptions || {};
        const mappedRequestOptions = createMappedRequestOptions(options);
        if (forwardToReplicas) {
          mappedRequestOptions.queryParameters.forwardToReplicas = 1;
        }
        return createWaitablePromise(base.transporter.write({
          method: MethodEnum.Post,
          path: encode("1/indexes/%s/synonyms/clear", base.indexName)
        }, mappedRequestOptions), (response, waitRequestOptions) => waitTask(base)(response.taskID, waitRequestOptions));
      };
    };
    deleteBy = (base) => {
      return (filters, requestOptions) => {
        return createWaitablePromise(base.transporter.write({
          method: MethodEnum.Post,
          path: encode("1/indexes/%s/deleteByQuery", base.indexName),
          data: filters
        }, requestOptions), (response, waitRequestOptions) => waitTask(base)(response.taskID, waitRequestOptions));
      };
    };
    deleteIndex = (base) => {
      return (requestOptions) => {
        return createWaitablePromise(base.transporter.write({
          method: MethodEnum.Delete,
          path: encode("1/indexes/%s", base.indexName)
        }, requestOptions), (response, waitRequestOptions) => waitTask(base)(response.taskID, waitRequestOptions));
      };
    };
    deleteObject = (base) => {
      return (objectID, requestOptions) => {
        return createWaitablePromise(deleteObjects(base)([objectID], requestOptions).then((response) => {
          return { taskID: response.taskIDs[0] };
        }), (response, waitRequestOptions) => waitTask(base)(response.taskID, waitRequestOptions));
      };
    };
    deleteObjects = (base) => {
      return (objectIDs, requestOptions) => {
        const objects = objectIDs.map((objectID) => {
          return { objectID };
        });
        return chunkedBatch(base)(objects, BatchActionEnum.DeleteObject, requestOptions);
      };
    };
    deleteRule = (base) => {
      return (objectID, requestOptions) => {
        const { forwardToReplicas, ...options } = requestOptions || {};
        const mappedRequestOptions = createMappedRequestOptions(options);
        if (forwardToReplicas) {
          mappedRequestOptions.queryParameters.forwardToReplicas = 1;
        }
        return createWaitablePromise(base.transporter.write({
          method: MethodEnum.Delete,
          path: encode("1/indexes/%s/rules/%s", base.indexName, objectID)
        }, mappedRequestOptions), (response, waitRequestOptions) => waitTask(base)(response.taskID, waitRequestOptions));
      };
    };
    deleteSynonym = (base) => {
      return (objectID, requestOptions) => {
        const { forwardToReplicas, ...options } = requestOptions || {};
        const mappedRequestOptions = createMappedRequestOptions(options);
        if (forwardToReplicas) {
          mappedRequestOptions.queryParameters.forwardToReplicas = 1;
        }
        return createWaitablePromise(base.transporter.write({
          method: MethodEnum.Delete,
          path: encode("1/indexes/%s/synonyms/%s", base.indexName, objectID)
        }, mappedRequestOptions), (response, waitRequestOptions) => waitTask(base)(response.taskID, waitRequestOptions));
      };
    };
    exists = (base) => {
      return (requestOptions) => {
        return getSettings(base)(requestOptions).then(() => true).catch((error) => {
          if (error.status !== 404) {
            throw error;
          }
          return false;
        });
      };
    };
    findAnswers = (base) => {
      return (query, queryLanguages, requestOptions) => {
        return base.transporter.read({
          method: MethodEnum.Post,
          path: encode("1/answers/%s/prediction", base.indexName),
          data: {
            query,
            queryLanguages
          },
          cacheable: true
        }, requestOptions);
      };
    };
    findObject = (base) => {
      return (callback, requestOptions) => {
        const { query, paginate, ...options } = requestOptions || {};
        let page = 0;
        const forEachPage = () => {
          return search(base)(query || "", { ...options, page }).then((result) => {
            for (const [position, hit] of Object.entries(result.hits)) {
              if (callback(hit)) {
                return {
                  object: hit,
                  position: parseInt(position, 10),
                  page
                };
              }
            }
            page++;
            if (paginate === false || page >= result.nbPages) {
              throw createObjectNotFoundError();
            }
            return forEachPage();
          });
        };
        return forEachPage();
      };
    };
    getObject = (base) => {
      return (objectID, requestOptions) => {
        return base.transporter.read({
          method: MethodEnum.Get,
          path: encode("1/indexes/%s/%s", base.indexName, objectID)
        }, requestOptions);
      };
    };
    getObjectPosition = () => {
      return (searchResponse, objectID) => {
        for (const [position, hit] of Object.entries(searchResponse.hits)) {
          if (hit.objectID === objectID) {
            return parseInt(position, 10);
          }
        }
        return -1;
      };
    };
    getObjects = (base) => {
      return (objectIDs, requestOptions) => {
        const { attributesToRetrieve, ...options } = requestOptions || {};
        const requests = objectIDs.map((objectID) => {
          return {
            indexName: base.indexName,
            objectID,
            ...attributesToRetrieve ? { attributesToRetrieve } : {}
          };
        });
        return base.transporter.read({
          method: MethodEnum.Post,
          path: "1/indexes/*/objects",
          data: {
            requests
          }
        }, options);
      };
    };
    getRule = (base) => {
      return (objectID, requestOptions) => {
        return base.transporter.read({
          method: MethodEnum.Get,
          path: encode("1/indexes/%s/rules/%s", base.indexName, objectID)
        }, requestOptions);
      };
    };
    getSettings = (base) => {
      return (requestOptions) => {
        return base.transporter.read({
          method: MethodEnum.Get,
          path: encode("1/indexes/%s/settings", base.indexName),
          data: {
            getVersion: 2
          }
        }, requestOptions);
      };
    };
    getSynonym = (base) => {
      return (objectID, requestOptions) => {
        return base.transporter.read({
          method: MethodEnum.Get,
          path: encode(`1/indexes/%s/synonyms/%s`, base.indexName, objectID)
        }, requestOptions);
      };
    };
    getTask = (base) => {
      return (taskID, requestOptions) => {
        return base.transporter.read({
          method: MethodEnum.Get,
          path: encode("1/indexes/%s/task/%s", base.indexName, taskID.toString())
        }, requestOptions);
      };
    };
    partialUpdateObject = (base) => {
      return (object, requestOptions) => {
        return createWaitablePromise(partialUpdateObjects(base)([object], requestOptions).then((response) => {
          return {
            objectID: response.objectIDs[0],
            taskID: response.taskIDs[0]
          };
        }), (response, waitRequestOptions) => waitTask(base)(response.taskID, waitRequestOptions));
      };
    };
    partialUpdateObjects = (base) => {
      return (objects, requestOptions) => {
        const { createIfNotExists, ...options } = requestOptions || {};
        const action = createIfNotExists ? BatchActionEnum.PartialUpdateObject : BatchActionEnum.PartialUpdateObjectNoCreate;
        return chunkedBatch(base)(objects, action, options);
      };
    };
    replaceAllObjects = (base) => {
      return (objects, requestOptions) => {
        const { safe, autoGenerateObjectIDIfNotExist, batchSize, ...options } = requestOptions || {};
        const operation = (from, to, type, operationRequestOptions) => {
          return createWaitablePromise(base.transporter.write({
            method: MethodEnum.Post,
            path: encode("1/indexes/%s/operation", from),
            data: {
              operation: type,
              destination: to
            }
          }, operationRequestOptions), (response, waitRequestOptions) => waitTask(base)(response.taskID, waitRequestOptions));
        };
        const randomSuffix = Math.random().toString(36).substring(7);
        const temporaryIndexName = `${base.indexName}_tmp_${randomSuffix}`;
        const saveObjectsInTemporary = saveObjects({
          appId: base.appId,
          transporter: base.transporter,
          indexName: temporaryIndexName
        });
        let responses = [];
        const copyWaitablePromise = operation(base.indexName, temporaryIndexName, "copy", {
          ...options,
          scope: ["settings", "synonyms", "rules"]
        });
        responses.push(copyWaitablePromise);
        const result = (safe ? copyWaitablePromise.wait(options) : copyWaitablePromise).then(() => {
          const saveObjectsWaitablePromise = saveObjectsInTemporary(objects, {
            ...options,
            autoGenerateObjectIDIfNotExist,
            batchSize
          });
          responses.push(saveObjectsWaitablePromise);
          return safe ? saveObjectsWaitablePromise.wait(options) : saveObjectsWaitablePromise;
        }).then(() => {
          const moveWaitablePromise = operation(temporaryIndexName, base.indexName, "move", options);
          responses.push(moveWaitablePromise);
          return safe ? moveWaitablePromise.wait(options) : moveWaitablePromise;
        }).then(() => Promise.all(responses)).then(([copyResponse, saveObjectsResponse, moveResponse]) => {
          return {
            objectIDs: saveObjectsResponse.objectIDs,
            taskIDs: [copyResponse.taskID, ...saveObjectsResponse.taskIDs, moveResponse.taskID]
          };
        });
        return createWaitablePromise(result, (_, waitRequestOptions) => {
          return Promise.all(responses.map((response) => response.wait(waitRequestOptions)));
        });
      };
    };
    replaceAllRules = (base) => {
      return (rules, requestOptions) => {
        return saveRules(base)(rules, {
          ...requestOptions,
          clearExistingRules: true
        });
      };
    };
    replaceAllSynonyms = (base) => {
      return (synonyms, requestOptions) => {
        return saveSynonyms(base)(synonyms, {
          ...requestOptions,
          clearExistingSynonyms: true
        });
      };
    };
    saveObject = (base) => {
      return (object, requestOptions) => {
        return createWaitablePromise(saveObjects(base)([object], requestOptions).then((response) => {
          return {
            objectID: response.objectIDs[0],
            taskID: response.taskIDs[0]
          };
        }), (response, waitRequestOptions) => waitTask(base)(response.taskID, waitRequestOptions));
      };
    };
    saveObjects = (base) => {
      return (objects, requestOptions) => {
        const { autoGenerateObjectIDIfNotExist, ...options } = requestOptions || {};
        const action = autoGenerateObjectIDIfNotExist ? BatchActionEnum.AddObject : BatchActionEnum.UpdateObject;
        if (action === BatchActionEnum.UpdateObject) {
          for (const object of objects) {
            if (object.objectID === void 0) {
              return createWaitablePromise(Promise.reject(createMissingObjectIDError()));
            }
          }
        }
        return chunkedBatch(base)(objects, action, options);
      };
    };
    saveRule = (base) => {
      return (rule, requestOptions) => {
        return saveRules(base)([rule], requestOptions);
      };
    };
    saveRules = (base) => {
      return (rules, requestOptions) => {
        const { forwardToReplicas, clearExistingRules, ...options } = requestOptions || {};
        const mappedRequestOptions = createMappedRequestOptions(options);
        if (forwardToReplicas) {
          mappedRequestOptions.queryParameters.forwardToReplicas = 1;
        }
        if (clearExistingRules) {
          mappedRequestOptions.queryParameters.clearExistingRules = 1;
        }
        return createWaitablePromise(base.transporter.write({
          method: MethodEnum.Post,
          path: encode("1/indexes/%s/rules/batch", base.indexName),
          data: rules
        }, mappedRequestOptions), (response, waitRequestOptions) => waitTask(base)(response.taskID, waitRequestOptions));
      };
    };
    saveSynonym = (base) => {
      return (synonym, requestOptions) => {
        return saveSynonyms(base)([synonym], requestOptions);
      };
    };
    saveSynonyms = (base) => {
      return (synonyms, requestOptions) => {
        const { forwardToReplicas, clearExistingSynonyms, replaceExistingSynonyms, ...options } = requestOptions || {};
        const mappedRequestOptions = createMappedRequestOptions(options);
        if (forwardToReplicas) {
          mappedRequestOptions.queryParameters.forwardToReplicas = 1;
        }
        if (replaceExistingSynonyms || clearExistingSynonyms) {
          mappedRequestOptions.queryParameters.replaceExistingSynonyms = 1;
        }
        return createWaitablePromise(base.transporter.write({
          method: MethodEnum.Post,
          path: encode("1/indexes/%s/synonyms/batch", base.indexName),
          data: synonyms
        }, mappedRequestOptions), (response, waitRequestOptions) => waitTask(base)(response.taskID, waitRequestOptions));
      };
    };
    search = (base) => {
      return (query, requestOptions) => {
        return base.transporter.read({
          method: MethodEnum.Post,
          path: encode("1/indexes/%s/query", base.indexName),
          data: {
            query
          },
          cacheable: true
        }, requestOptions);
      };
    };
    searchForFacetValues = (base) => {
      return (facetName, facetQuery, requestOptions) => {
        return base.transporter.read({
          method: MethodEnum.Post,
          path: encode("1/indexes/%s/facets/%s/query", base.indexName, facetName),
          data: {
            facetQuery
          },
          cacheable: true
        }, requestOptions);
      };
    };
    searchRules = (base) => {
      return (query, requestOptions) => {
        return base.transporter.read({
          method: MethodEnum.Post,
          path: encode("1/indexes/%s/rules/search", base.indexName),
          data: {
            query
          }
        }, requestOptions);
      };
    };
    searchSynonyms = (base) => {
      return (query, requestOptions) => {
        return base.transporter.read({
          method: MethodEnum.Post,
          path: encode("1/indexes/%s/synonyms/search", base.indexName),
          data: {
            query
          }
        }, requestOptions);
      };
    };
    setSettings = (base) => {
      return (settings, requestOptions) => {
        const { forwardToReplicas, ...options } = requestOptions || {};
        const mappedRequestOptions = createMappedRequestOptions(options);
        if (forwardToReplicas) {
          mappedRequestOptions.queryParameters.forwardToReplicas = 1;
        }
        return createWaitablePromise(base.transporter.write({
          method: MethodEnum.Put,
          path: encode("1/indexes/%s/settings", base.indexName),
          data: settings
        }, mappedRequestOptions), (response, waitRequestOptions) => waitTask(base)(response.taskID, waitRequestOptions));
      };
    };
    waitTask = (base) => {
      return (taskID, requestOptions) => {
        return createRetryablePromise((retry) => {
          return getTask(base)(taskID, requestOptions).then((response) => {
            return response.status !== "published" ? retry() : void 0;
          });
        });
      };
    };
    ApiKeyACLEnum = {
      AddObject: "addObject",
      Analytics: "analytics",
      Browser: "browse",
      DeleteIndex: "deleteIndex",
      DeleteObject: "deleteObject",
      EditSettings: "editSettings",
      Inference: "inference",
      ListIndexes: "listIndexes",
      Logs: "logs",
      Personalization: "personalization",
      Recommendation: "recommendation",
      Search: "search",
      SeeUnretrievableAttributes: "seeUnretrievableAttributes",
      Settings: "settings",
      Usage: "usage"
    };
    BatchActionEnum = {
      AddObject: "addObject",
      UpdateObject: "updateObject",
      PartialUpdateObject: "partialUpdateObject",
      PartialUpdateObjectNoCreate: "partialUpdateObjectNoCreate",
      DeleteObject: "deleteObject",
      DeleteIndex: "delete",
      ClearIndex: "clear"
    };
    ScopeEnum = {
      Settings: "settings",
      Synonyms: "synonyms",
      Rules: "rules"
    };
    StrategyEnum = {
      None: "none",
      StopIfEnoughMatches: "stopIfEnoughMatches"
    };
    SynonymEnum = {
      Synonym: "synonym",
      OneWaySynonym: "oneWaySynonym",
      AltCorrection1: "altCorrection1",
      AltCorrection2: "altCorrection2",
      Placeholder: "placeholder"
    };
  }
});

// node_modules/@algolia/logger-common/dist/logger-common.esm.js
var logger_common_esm_exports = {};
__export(logger_common_esm_exports, {
  LogLevelEnum: () => LogLevelEnum,
  createNullLogger: () => createNullLogger
});
function createNullLogger() {
  return {
    debug(_message, _args) {
      return Promise.resolve();
    },
    info(_message, _args) {
      return Promise.resolve();
    },
    error(_message, _args) {
      return Promise.resolve();
    }
  };
}
var LogLevelEnum;
var init_logger_common_esm = __esm({
  "node_modules/@algolia/logger-common/dist/logger-common.esm.js"() {
    "use strict";
    LogLevelEnum = {
      Debug: 1,
      Info: 2,
      Error: 3
    };
  }
});

// node_modules/@algolia/requester-node-http/dist/requester-node-http.esm.js
var requester_node_http_esm_exports = {};
__export(requester_node_http_esm_exports, {
  createNodeHttpRequester: () => createNodeHttpRequester
});
import * as http from "http";
import { Agent } from "http";
import * as https from "https";
import { Agent as Agent$1 } from "https";
import { parse as parse2 } from "url";
function createNodeHttpRequester({ agent: userGlobalAgent, httpAgent: userHttpAgent, httpsAgent: userHttpsAgent, requesterOptions = {} } = {}) {
  const httpAgent = userHttpAgent || userGlobalAgent || defaultHttpAgent;
  const httpsAgent = userHttpsAgent || userGlobalAgent || defaultHttpsAgent;
  return {
    send(request) {
      return new Promise((resolve) => {
        const url = parse2(request.url);
        const path = url.query === null ? url.pathname : `${url.pathname}?${url.query}`;
        const options = {
          ...requesterOptions,
          agent: url.protocol === "https:" ? httpsAgent : httpAgent,
          hostname: url.hostname,
          path,
          method: request.method,
          headers: {
            ...requesterOptions && requesterOptions.headers ? requesterOptions.headers : {},
            ...request.headers
          },
          ...url.port !== void 0 ? { port: url.port || "" } : {}
        };
        const req = (url.protocol === "https:" ? https : http).request(options, (response) => {
          let contentBuffers = [];
          response.on("data", (chunk) => {
            contentBuffers = contentBuffers.concat(chunk);
          });
          response.on("end", () => {
            clearTimeout(connectTimeout);
            clearTimeout(responseTimeout);
            resolve({
              status: response.statusCode || 0,
              content: Buffer.concat(contentBuffers).toString(),
              isTimedOut: false
            });
          });
        });
        const createTimeout = (timeout, content) => {
          return setTimeout(() => {
            req.abort();
            resolve({
              status: 0,
              content,
              isTimedOut: true
            });
          }, timeout * 1e3);
        };
        const connectTimeout = createTimeout(request.connectTimeout, "Connection timeout");
        let responseTimeout;
        req.on("error", (error) => {
          clearTimeout(connectTimeout);
          clearTimeout(responseTimeout);
          resolve({ status: 0, content: error.message, isTimedOut: false });
        });
        req.once("response", () => {
          clearTimeout(connectTimeout);
          responseTimeout = createTimeout(request.responseTimeout, "Socket timeout");
        });
        if (request.data !== void 0) {
          req.write(request.data);
        }
        req.end();
      });
    },
    destroy() {
      httpAgent.destroy();
      httpsAgent.destroy();
      return Promise.resolve();
    }
  };
}
var agentOptions, defaultHttpAgent, defaultHttpsAgent;
var init_requester_node_http_esm = __esm({
  "node_modules/@algolia/requester-node-http/dist/requester-node-http.esm.js"() {
    "use strict";
    agentOptions = { keepAlive: true };
    defaultHttpAgent = new Agent(agentOptions);
    defaultHttpsAgent = new Agent$1(agentOptions);
  }
});

// node_modules/algoliasearch/dist/algoliasearch.cjs.js
var require_algoliasearch_cjs = __commonJS({
  "node_modules/algoliasearch/dist/algoliasearch.cjs.js"(exports, module) {
    "use strict";
    var cacheCommon = (init_cache_common_esm(), __toCommonJS(cache_common_esm_exports));
    var cacheInMemory = (init_cache_in_memory_esm(), __toCommonJS(cache_in_memory_esm_exports));
    var clientAnalytics = (init_client_analytics_esm(), __toCommonJS(client_analytics_esm_exports));
    var clientCommon = (init_client_common_esm(), __toCommonJS(client_common_esm_exports));
    var clientPersonalization = (init_client_personalization_esm(), __toCommonJS(client_personalization_esm_exports));
    var clientSearch = (init_client_search_esm(), __toCommonJS(client_search_esm_exports));
    var loggerCommon = (init_logger_common_esm(), __toCommonJS(logger_common_esm_exports));
    var requesterNodeHttp = (init_requester_node_http_esm(), __toCommonJS(requester_node_http_esm_exports));
    var transporter = (init_transporter_esm(), __toCommonJS(transporter_esm_exports));
    function algoliasearch2(appId, apiKey, options) {
      const commonOptions = {
        appId,
        apiKey,
        timeouts: {
          connect: 2,
          read: 5,
          write: 30
        },
        requester: requesterNodeHttp.createNodeHttpRequester(),
        logger: loggerCommon.createNullLogger(),
        responsesCache: cacheCommon.createNullCache(),
        requestsCache: cacheCommon.createNullCache(),
        hostsCache: cacheInMemory.createInMemoryCache(),
        userAgent: transporter.createUserAgent(clientCommon.version).add({
          segment: "Node.js",
          version: process.versions.node
        })
      };
      const searchClientOptions = { ...commonOptions, ...options };
      const initPersonalization = () => (clientOptions) => {
        return clientPersonalization.createPersonalizationClient({
          ...commonOptions,
          ...clientOptions,
          methods: {
            getPersonalizationStrategy: clientPersonalization.getPersonalizationStrategy,
            setPersonalizationStrategy: clientPersonalization.setPersonalizationStrategy
          }
        });
      };
      return clientSearch.createSearchClient({
        ...searchClientOptions,
        methods: {
          search: clientSearch.multipleQueries,
          searchForFacetValues: clientSearch.multipleSearchForFacetValues,
          multipleBatch: clientSearch.multipleBatch,
          multipleGetObjects: clientSearch.multipleGetObjects,
          multipleQueries: clientSearch.multipleQueries,
          copyIndex: clientSearch.copyIndex,
          copySettings: clientSearch.copySettings,
          copyRules: clientSearch.copyRules,
          copySynonyms: clientSearch.copySynonyms,
          moveIndex: clientSearch.moveIndex,
          listIndices: clientSearch.listIndices,
          getLogs: clientSearch.getLogs,
          listClusters: clientSearch.listClusters,
          multipleSearchForFacetValues: clientSearch.multipleSearchForFacetValues,
          getApiKey: clientSearch.getApiKey,
          addApiKey: clientSearch.addApiKey,
          listApiKeys: clientSearch.listApiKeys,
          updateApiKey: clientSearch.updateApiKey,
          deleteApiKey: clientSearch.deleteApiKey,
          restoreApiKey: clientSearch.restoreApiKey,
          assignUserID: clientSearch.assignUserID,
          assignUserIDs: clientSearch.assignUserIDs,
          getUserID: clientSearch.getUserID,
          searchUserIDs: clientSearch.searchUserIDs,
          listUserIDs: clientSearch.listUserIDs,
          getTopUserIDs: clientSearch.getTopUserIDs,
          removeUserID: clientSearch.removeUserID,
          hasPendingMappings: clientSearch.hasPendingMappings,
          generateSecuredApiKey: clientSearch.generateSecuredApiKey,
          getSecuredApiKeyRemainingValidity: clientSearch.getSecuredApiKeyRemainingValidity,
          destroy: clientCommon.destroy,
          clearDictionaryEntries: clientSearch.clearDictionaryEntries,
          deleteDictionaryEntries: clientSearch.deleteDictionaryEntries,
          getDictionarySettings: clientSearch.getDictionarySettings,
          getAppTask: clientSearch.getAppTask,
          replaceDictionaryEntries: clientSearch.replaceDictionaryEntries,
          saveDictionaryEntries: clientSearch.saveDictionaryEntries,
          searchDictionaryEntries: clientSearch.searchDictionaryEntries,
          setDictionarySettings: clientSearch.setDictionarySettings,
          waitAppTask: clientSearch.waitAppTask,
          customRequest: clientSearch.customRequest,
          initIndex: (base) => (indexName) => {
            return clientSearch.initIndex(base)(indexName, {
              methods: {
                batch: clientSearch.batch,
                delete: clientSearch.deleteIndex,
                findAnswers: clientSearch.findAnswers,
                getObject: clientSearch.getObject,
                getObjects: clientSearch.getObjects,
                saveObject: clientSearch.saveObject,
                saveObjects: clientSearch.saveObjects,
                search: clientSearch.search,
                searchForFacetValues: clientSearch.searchForFacetValues,
                waitTask: clientSearch.waitTask,
                setSettings: clientSearch.setSettings,
                getSettings: clientSearch.getSettings,
                partialUpdateObject: clientSearch.partialUpdateObject,
                partialUpdateObjects: clientSearch.partialUpdateObjects,
                deleteObject: clientSearch.deleteObject,
                deleteObjects: clientSearch.deleteObjects,
                deleteBy: clientSearch.deleteBy,
                clearObjects: clientSearch.clearObjects,
                browseObjects: clientSearch.browseObjects,
                getObjectPosition: clientSearch.getObjectPosition,
                findObject: clientSearch.findObject,
                exists: clientSearch.exists,
                saveSynonym: clientSearch.saveSynonym,
                saveSynonyms: clientSearch.saveSynonyms,
                getSynonym: clientSearch.getSynonym,
                searchSynonyms: clientSearch.searchSynonyms,
                browseSynonyms: clientSearch.browseSynonyms,
                deleteSynonym: clientSearch.deleteSynonym,
                clearSynonyms: clientSearch.clearSynonyms,
                replaceAllObjects: clientSearch.replaceAllObjects,
                replaceAllSynonyms: clientSearch.replaceAllSynonyms,
                searchRules: clientSearch.searchRules,
                getRule: clientSearch.getRule,
                deleteRule: clientSearch.deleteRule,
                saveRule: clientSearch.saveRule,
                saveRules: clientSearch.saveRules,
                replaceAllRules: clientSearch.replaceAllRules,
                browseRules: clientSearch.browseRules,
                clearRules: clientSearch.clearRules
              }
            });
          },
          initAnalytics: () => (clientOptions) => {
            return clientAnalytics.createAnalyticsClient({
              ...commonOptions,
              ...clientOptions,
              methods: {
                addABTest: clientAnalytics.addABTest,
                getABTest: clientAnalytics.getABTest,
                getABTests: clientAnalytics.getABTests,
                stopABTest: clientAnalytics.stopABTest,
                deleteABTest: clientAnalytics.deleteABTest
              }
            });
          },
          initPersonalization,
          initRecommendation: () => (clientOptions) => {
            searchClientOptions.logger.info("The `initRecommendation` method is deprecated. Use `initPersonalization` instead.");
            return initPersonalization()(clientOptions);
          }
        }
      });
    }
    algoliasearch2.version = clientCommon.version;
    module.exports = algoliasearch2;
  }
});

// node_modules/algoliasearch/index.js
var require_algoliasearch = __commonJS({
  "node_modules/algoliasearch/index.js"(exports, module) {
    "use strict";
    var algoliasearch2 = require_algoliasearch_cjs();
    module.exports = algoliasearch2;
    module.exports.default = algoliasearch2;
  }
});

// node_modules/algoliasearch/lite.js
var require_lite = __commonJS({
  "node_modules/algoliasearch/lite.js"(exports, module) {
    "use strict";
    module.exports = require_algoliasearch();
  }
});

// src/lib/markdown-renderer/MarkdownRenderer.tsx
import { Box as Box6 } from "@vtex/brand-ui";
import { MDXRemote } from "next-mdx-remote";

// src/lib/markdown-renderer/components.tsx
import { useContext, useEffect as useEffect4, useRef as useRef2, useState as useState3 } from "react";
import { Box as Box5, Flex as Flex4 } from "@vtex/brand-ui";
import {
  UncontrolledReactSVGPanZoom
} from "react-svg-pan-zoom";
import mermaid2 from "mermaid";
import parse from "html-react-parser";
import { InView } from "react-intersection-observer";
import { CH } from "@code-hike/mdx/components";

// src/components/overview-card/styles.ts
var overviewCard = {
  alignItems: "flex-start",
  margin: "20px 0px",
  border: "1px solid #E7E9EE",
  borderRadius: "4px",
  padding: "18px 24px 4px",
  color: "#4A596B",
  ":active, :hover": {
    borderColor: "muted.2",
    boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3 ease-out",
    "*": {
      color: "#000711"
    }
  },
  ul: {
    borderLeft: "1px rgb(202, 203, 204) solid",
    fontSize: "0.9em",
    mt: "0",
    paddingLeft: "1.5em",
    listStyleType: "none",
    display: "block",
    textDecoration: "none"
  },
  "h3, h4": {
    color: "#4A596B",
    fontSize: "1.125em",
    fontWeight: "400",
    my: "0"
  }
};
var overviewIcon = {
  marginRight: "1.25em",
  marginTop: "0.375em"
};
var styles_default = {
  overviewCard,
  overviewIcon
};

// src/components/overview-card/index.tsx
import { Flex, Box } from "@vtex/brand-ui";

// src/components/overview-card/icons.tsx
import { Icon } from "@vtex/brand-ui";
import { jsx, jsxs } from "react/jsx-runtime";
var StorageUnit = (props) => /* @__PURE__ */ jsx(
  Icon,
  {
    ...props,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    size: 35,
    children: /* @__PURE__ */ jsxs(
      "g",
      {
        strokeLinecap: "square",
        strokeLinejoin: "miter",
        strokeWidth: "2",
        fill: "#4A596B",
        stroke: "#4A596B",
        children: [
          /* @__PURE__ */ jsx(
            "rect",
            {
              x: "15",
              y: "15",
              width: "18",
              height: "15",
              fill: "none",
              stroke: "#4A596B",
              strokeMiterlimit: "10"
            }
          ),
          /* @__PURE__ */ jsx(
            "polyline",
            {
              points: "2 12 24 2 46 12",
              fill: "none",
              strokeMiterlimit: "10",
              strokeLinecap: "butt"
            }
          ),
          /* @__PURE__ */ jsx(
            "line",
            {
              x1: "24",
              y1: "15",
              x2: "24",
              y2: "20",
              fill: "none",
              stroke: "#4A596B",
              strokeMiterlimit: "10"
            }
          ),
          /* @__PURE__ */ jsx(
            "rect",
            {
              x: "6",
              y: "30",
              width: "18",
              height: "15",
              fill: "none",
              stroke: "#4A596B",
              strokeMiterlimit: "10"
            }
          ),
          /* @__PURE__ */ jsx(
            "line",
            {
              x1: "15",
              y1: "30",
              x2: "15",
              y2: "35",
              fill: "none",
              stroke: "#4A596B",
              strokeMiterlimit: "10"
            }
          ),
          /* @__PURE__ */ jsx(
            "rect",
            {
              x: "24",
              y: "30",
              width: "18",
              height: "15",
              fill: "none",
              stroke: "#4A596B",
              strokeMiterlimit: "10"
            }
          ),
          /* @__PURE__ */ jsx(
            "line",
            {
              x1: "33",
              y1: "30",
              x2: "33",
              y2: "35",
              fill: "none",
              stroke: "#4A596B",
              strokeMiterlimit: "10"
            }
          )
        ]
      }
    )
  }
);
var Board = (props) => /* @__PURE__ */ jsx(
  Icon,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48",
    size: 35,
    children: /* @__PURE__ */ jsxs(
      "g",
      {
        strokeLinecap: "square",
        strokeLinejoin: "miter",
        strokeWidth: "2",
        fill: "#4A596B",
        stroke: "#4A596B",
        children: [
          /* @__PURE__ */ jsx(
            "rect",
            {
              x: "4",
              y: "4",
              width: "40",
              height: "40",
              fill: "none",
              stroke: "#4A596B",
              strokeMiterlimit: "10"
            }
          ),
          /* @__PURE__ */ jsx(
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
          /* @__PURE__ */ jsx(
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
          /* @__PURE__ */ jsx(
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
var Integration = (props) => /* @__PURE__ */ jsxs(
  Icon,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M18 17H20C20.552 17 21 17.448 21 18V20C21 20.552 20.552 21 20 21H18C17.448 21 17 20.552 17 20V18C17 17.448 17.448 17 18 17Z",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M4 3H6C6.552 3 7 3.448 7 4V6C7 6.552 6.552 7 6 7H4C3.448 7 3 6.552 3 6V4C3 3.448 3.448 3 4 3Z",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M11 10H13C13.552 10 14 10.448 14 11V13C14 13.552 13.552 14 13 14H11C10.448 14 10 13.552 10 13V11C10 10.448 10.448 10 11 10Z",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M11 5H19C20.105 5 21 5.895 21 7V10C21 11.105 20.105 12 19 12H17",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
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
var SearchList = (props) => /* @__PURE__ */ jsxs(
  Icon,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M18.98 6.98L21 9",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M18.9796 2.85437C20.1188 3.99353 20.1188 5.84047 18.9796 6.97963C17.8404 8.11879 15.9935 8.11879 14.8543 6.97963C13.7152 5.84047 13.7152 3.99353 14.8543 2.85437C15.9935 1.71521 17.8404 1.71521 18.9796 2.85437",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M11 7.5H4C3.448 7.5 3 7.052 3 6.5V4C3 3.448 3.448 3 4 3H11",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M5.25 14.5H3.75C3.336 14.5 3 14.164 3 13.75V12.25C3 11.836 3.336 11.5 3.75 11.5H5.25C5.664 11.5 6 11.836 6 12.25V13.75C6 14.164 5.664 14.5 5.25 14.5Z",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M9.222 13H21",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M5.25 21H3.75C3.336 21 3 20.664 3 20.25V18.75C3 18.336 3.336 18 3.75 18H5.25C5.664 18 6 18.336 6 18.75V20.25C6 20.664 5.664 21 5.25 21Z",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
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
var SwitchArrows = (props) => /* @__PURE__ */ jsxs(
  Icon,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M7 9.75L5 11.75L3 9.75",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M18.5 3C19.881 3 21 4.119 21 5.5C21 6.881 19.881 8 18.5 8C17.119 8 16 6.881 16 5.5C16 4.119 17.119 3 18.5 3Z",
          stroke: "#323232",
          strokeWidth: "1.5"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M16 5.5H7C5.895 5.5 5 6.395 5 7.5V11.75",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M17 14.25L19 12.25L21 14.25",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M5.5 21C4.119 21 3 19.881 3 18.5C3 17.119 4.119 16 5.5 16C6.881 16 8 17.119 8 18.5C8 19.881 6.881 21 5.5 21Z",
          stroke: "#4A596B",
          strokeWidth: "1.5"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M8 18.5H17C18.105 18.5 19 17.605 19 16.5V12.25",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var SearchDetails = (props) => /* @__PURE__ */ jsxs(
  Icon,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M15.456 9.75699L12.037 13.177L9.75703 10.897L7.47803 13.177",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M16.747 6.18703C19.663 9.10307 19.663 13.8309 16.747 16.7469C13.831 19.663 9.1031 19.663 6.18709 16.7469C3.27105 13.8309 3.27105 9.10304 6.18709 6.18703C9.10313 3.27099 13.831 3.27099 16.747 6.18703",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M20 20L16.75 16.75",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var List = (props) => /* @__PURE__ */ jsxs(
  Icon,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M11 12H21",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M6 14H4C3.448 14 3 13.552 3 13V11C3 10.448 3.448 10 4 10H6C6.552 10 7 10.448 7 11V13C7 13.552 6.552 14 6 14Z",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx(
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
var StoreCart = (props) => /* @__PURE__ */ jsxs(
  Icon,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M4.59999 14.95H11L10.3 18.45H5.29999L4.29999 13.45H3.04999",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
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
var GlobeCart = (props) => /* @__PURE__ */ jsxs(
  Icon,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M22 14H20.742L19.736 19.031H14.705L14 15.509H20.44",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
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
var PaymentHand = (props) => /* @__PURE__ */ jsxs(
  Icon,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M13 17H15.333C15.766 17 16.187 16.86 16.533 16.6L18.949 14.788C19.552 14.336 20.396 14.396 20.929 14.929V14.929C21.521 15.521 21.521 16.48 20.929 17.071L18.856 19.144C18.298 19.702 17.586 20.083 16.812 20.238L13.882 20.824C13.301 20.94 12.702 20.926 12.127 20.782L9.477 20.12C9.16 20.04 8.835 20 8.508 20H7",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M13 17H14.485C15.322 17 16 16.322 16 15.485V15.182C16 14.487 15.527 13.881 14.853 13.713L12.561 13.14C12.188 13.047 11.806 13 11.422 13V13C10.495 13 9.588 13.274 8.817 13.789L7 15",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M10.667 10H19.334C20.254 10 21 9.254 21 8.333V3.667C21 2.746 20.254 2 19.333 2H10.666C9.746 2 9 2.746 9 3.667V8.334C9 9.254 9.746 10 10.667 10Z",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
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
var ToStore = (props) => /* @__PURE__ */ jsxs(
  Icon,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M12 20.91H3",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M4.21997 10.78V20.91",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M20 13L20.02 10.78",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M16 21H17.5C18.881 21 20 19.881 20 18.5V18.5C20 17.119 18.881 16 17.5 16H13",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M15 18L13 16L15 14",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var ChangeCart = (props) => /* @__PURE__ */ jsxs(
  Icon,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M1.5 11.25L3 9.75L4.5 11.25",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M22.5 12.75L21 14.25L19.5 12.75",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M3.235 9.98499C3.086 10.634 3 11.306 3 12C3 16.971 7.029 21 12 21C15.052 21 17.744 19.478 19.371 17.155",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M20.765 14.015C20.914 13.366 21 12.694 21 12C21 7.029 16.971 3 12 3C8.94803 3 6.25603 4.522 4.62903 6.845",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M9.05 10.25H15.45L14.75 13.75H9.75L8.75 8.75H7.5",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M14.285 16.215C14.305 16.235 14.305 16.266 14.285 16.286C14.265 16.306 14.234 16.306 14.214 16.286C14.194 16.266 14.194 16.235 14.214 16.215C14.234 16.195 14.266 16.195 14.285 16.215",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
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
var Blocks = (props) => /* @__PURE__ */ jsxs(
  Icon,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      " ",
      /* @__PURE__ */ jsxs(
        "g",
        {
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeWidth: "2",
          fill: "#4A596B",
          stroke: "#4A596B",
          children: [
            " ",
            /* @__PURE__ */ jsx(
              "rect",
              {
                x: "4",
                y: "4",
                width: "40",
                height: "40",
                fill: "none",
                stroke: "#4A596B",
                strokeMiterlimit: "10"
              }
            ),
            " ",
            /* @__PURE__ */ jsx(
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
            /* @__PURE__ */ jsx(
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
            /* @__PURE__ */ jsx(
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
var StoreData = (props) => /* @__PURE__ */ jsxs(
  Icon,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M19.576 4.40599C20.236 5.06499 20.236 6.13399 19.576 6.79299C18.916 7.45199 17.847 7.45199 17.187 6.79299C16.527 6.13399 16.527 5.06499 17.187 4.40599C17.847 3.74699 18.916 3.74699 19.576 4.40599",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M4.42402 19.594C3.76402 18.935 3.76402 17.866 4.42402 17.207C5.08402 16.548 6.15302 16.548 6.81302 17.207C7.47302 17.866 7.47302 18.935 6.81302 19.594C6.15302 20.253 5.08402 20.253 4.42402 19.594",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M6.935 19.448C10.441 21.83 15.253 21.472 18.362 18.366C20.12 16.608 21 14.304 21 12C21 11.468 20.968 10.937 20.874 10.412",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M3.126 13.588C3.032 13.063 3 12.532 3 12C3 9.696 3.88 7.392 5.639 5.634C8.747 2.528 13.56 2.17 17.066 4.552",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
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
var FileConfiguration = (props) => /* @__PURE__ */ jsxs(
  Icon,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M17.659 15.167C18.949 15.167 19.993 16.211 19.993 17.501C19.993 18.791 18.949 19.835 17.659 19.835C16.369 19.835 15.325 18.789 15.325 17.501C15.325 16.213 16.369 15.167 17.659 15.167",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var Cart = (props) => /* @__PURE__ */ jsxs(
  Icon,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M15.006 16.542C14.88 16.542 14.777 16.644 14.779 16.771C14.779 16.897 14.881 17 15.008 17C15.135 17 15.237 16.898 15.237 16.771C15.235 16.644 15.132 16.542 15.006 16.542",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M9.74803 16.542C9.62203 16.542 9.51903 16.644 9.52103 16.771C9.52003 16.897 9.62303 17 9.74903 17C9.87503 17 9.97803 16.898 9.97803 16.771C9.97803 16.644 9.87503 16.542 9.74803 16.542",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M17 21H7C4.791 21 3 19.209 3 17V7C3 4.791 4.791 3 7 3H17C19.209 3 21 4.791 21 7V17C21 19.209 19.209 21 17 21Z",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M7.984 8.875H15.875C16.282 8.875 16.58 9.257 16.481 9.652L15.639 13.022C15.511 13.534 15.076 13.91 14.551 13.963L10.291 14.389C9.656 14.452 9.075 14.028 8.944 13.404L7.578 7H6.5",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var Platform = (props) => /* @__PURE__ */ jsx(
  Icon,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: /* @__PURE__ */ jsxs(
      "g",
      {
        strokeLinecap: "square",
        strokeWidth: "2",
        fill: "none",
        stroke: "#4A596B",
        strokeLinejoin: "miter",
        strokeMiterlimit: "10",
        children: [
          /* @__PURE__ */ jsx("rect", { x: "4", y: "15", width: "8", height: "7" }),
          /* @__PURE__ */ jsx("rect", { x: "12", y: "15", width: "8", height: "7" }),
          /* @__PURE__ */ jsx("rect", { x: "8", y: "8", width: "8", height: "7" }),
          /* @__PURE__ */ jsx(
            "polyline",
            {
              points: "1 7 12 2 23 7",
              "data-cap": "butt",
              strokeLinecap: "butt",
              stroke: "#4A596B"
            }
          ),
          /* @__PURE__ */ jsx("line", { x1: "12", y1: "8", x2: "12", y2: "10" }),
          /* @__PURE__ */ jsx("line", { x1: "16", y1: "15", x2: "16", y2: "17" }),
          /* @__PURE__ */ jsx("line", { x1: "8", y1: "15", x2: "8", y2: "17" })
        ]
      }
    )
  }
);
var RestApis = (props) => /* @__PURE__ */ jsx(
  Icon,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: /* @__PURE__ */ jsxs("g", { fill: "#4A596B", children: [
      /* @__PURE__ */ jsx("path", { d: "M17,17H15.858a3.915,3.915,0,0,0-.425-1.019l.81-.81a1,1,0,1,0-1.414-1.414l-.81.81A3.915,3.915,0,0,0,13,14.142V13a1,1,0,0,0-2,0v1.142a3.915,3.915,0,0,0-1.019.425l-.81-.81a1,1,0,1,0-1.414,1.414l.81.81A3.915,3.915,0,0,0,8.142,17H7a1,1,0,0,0,0,2H8.142a3.915,3.915,0,0,0,.425,1.019l-.81.81a1,1,0,1,0,1.414,1.414l.81-.81A3.915,3.915,0,0,0,11,21.858V23a1,1,0,0,0,2,0V21.858a3.915,3.915,0,0,0,1.019-.425l.81.81a1,1,0,1,0,1.414-1.414l-.81-.81A3.915,3.915,0,0,0,15.858,19H17a1,1,0,0,0,0-2Zm-5,3a2,2,0,1,1,2-2A2,2,0,0,1,12,20Z" }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M15,3a3,3,0,1,0-4,2.816V9a1,1,0,0,0,2,0V5.816A3,3,0,0,0,15,3Z",
          fill: "#4A596B"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M6.271,10.856,4,8.586V5.816a3,3,0,1,0-2,0V9a1,1,0,0,0,.293.707l2.564,2.564a1,1,0,1,0,1.414-1.415Z",
          fill: "#4A596B"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M24,3a3,3,0,1,0-4,2.816v2.77l-2.271,2.27a1,1,0,0,0,1.414,1.415l2.564-2.564A1,1,0,0,0,22,9V5.816A3,3,0,0,0,24,3Z",
          fill: "#4A596B"
        }
      )
    ] })
  }
);
var Catalog = (props) => /* @__PURE__ */ jsxs(
  Icon,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
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
var Orders = (props) => /* @__PURE__ */ jsxs(
  Icon,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M8 11H12",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var Checkout = (props) => /* @__PURE__ */ jsxs(
  Icon,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M17.109 19.267C16.907 19.267 16.743 19.431 16.745 19.633C16.745 19.835 16.909 19.999 17.111 19.999C17.313 19.999 17.477 19.835 17.477 19.633C17.476 19.431 17.312 19.267 17.109 19.267",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M8.697 19.267C8.495 19.267 8.331 19.431 8.333 19.633C8.331 19.836 8.496 20 8.698 20C8.9 20 9.064 19.836 9.064 19.634C9.064 19.431 8.9 19.267 8.697 19.267",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var Payments = (props) => /* @__PURE__ */ jsxs(
  Icon,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M9 15H1",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M7 13L9 15L7 17",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx(
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
var Promotions = (props) => /* @__PURE__ */ jsxs(
  Icon,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M9 15L15 9",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M9.249 9C9.111 9 8.999 9.112 9 9.25C9 9.388 9.112 9.5 9.25 9.5C9.388 9.5 9.5 9.388 9.5 9.25C9.5 9.112 9.388 9 9.249 9",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M14.749 14.5C14.611 14.5 14.499 14.612 14.5 14.75C14.5 14.888 14.612 15 14.75 15C14.888 15 15 14.888 15 14.75C15 14.612 14.888 14.5 14.749 14.5",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var Pricing = (props) => /* @__PURE__ */ jsxs(
  Icon,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M11.89 12.11L12.44 11.56",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M8.57 15.43L8.02 15.98",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M8.013 14.071C7.922 14.448 8.004 14.854 8.299 15.149L8.575 15.425L8.904 15.754C9.332 16.182 10.026 16.182 10.454 15.754C10.809 15.399 10.878 14.847 10.619 14.416L9.844 13.122C9.586 12.691 9.654 12.139 10.009 11.784C10.437 11.356 11.131 11.356 11.559 11.784L11.888 12.113L12.164 12.389C12.458 12.683 12.54 13.088 12.451 13.464",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
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
var AccountManagement = (props) => /* @__PURE__ */ jsxs(
  Icon,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M19 17.6V16.5C19 15.7 18.3 15 17.5 15C16.7 15 16 15.7 16 16.5V17.6",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M19 17.6H16C15.4 17.6 15 18 15 18.6V20C15 20.6 15.4 21 16 21H19C19.6 21 20 20.6 20 20V18.6C20 18 19.6 17.6 19 17.6Z",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var StoreSearch = (props) => /* @__PURE__ */ jsxs(
  Icon,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: [
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M18.853 15.006C20.336 16.489 20.176 18.99 18.375 20.255C17.229 21.059 15.628 21.059 14.482 20.255C12.68 18.991 12.521 16.489 14.004 15.006C15.344 13.667 17.515 13.667 18.853 15.006",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M21 22L18.852 19.852",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      " ",
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
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
var Subscriptions = (props) => /* @__PURE__ */ jsx(
  Icon,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: /* @__PURE__ */ jsxs("svg", { children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M4.5 12.75L3 14.25L1.5 12.75",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M19.5 11.25L21 9.75L22.5 11.25",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M19.371 6.845C17.744 4.522 15.052 3 12 3C7.029 3 3 7.029 3 12C3 12.694 3.086 13.366 3.235 14.015",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M4.629 17.155C6.256 19.478 8.948 21 12 21C16.971 21 21 16.971 21 12C21 11.306 20.914 10.634 20.765 9.98499",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M13.706 9.091V8.315C13.706 7.317 12.938 6.5 12 6.5C11.062 6.5 10.294 7.317 10.294 8.315V9.091",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M14.669 9.091H9.331C8.886 9.091 8.514 9.429 8.471 9.873L7.976 15.055C7.927 15.561 8.326 16 8.836 16H15.165C15.674 16 16.073 15.561 16.025 15.054L15.53 9.872C15.487 9.429 15.115 9.091 14.669 9.091Z",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ] })
  }
);
var Fulfillment = (props) => /* @__PURE__ */ jsx(
  Icon,
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "25",
    height: "25",
    children: /* @__PURE__ */ jsxs("svg", { children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M18.704 18.296C19.323 18.915 19.323 19.918 18.704 20.536C18.085 21.155 17.082 21.155 16.464 20.536C15.845 19.917 15.845 18.914 16.464 18.296C17.083 17.677 18.086 17.677 18.704 18.296",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M7.704 18.296C8.323 18.915 8.323 19.918 7.704 20.536C7.085 21.155 6.082 21.155 5.464 20.536C4.846 19.917 4.845 18.914 5.464 18.296C6.083 17.678 7.085 17.677 7.704 18.296",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M10 4H14C14.552 4 15 4.448 15 5V15H2",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M5 19.416H3C2.448 19.416 2 18.968 2 18.416V13",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M15 7H19.323C19.732 7 20.1 7.249 20.251 7.629L21.857 11.643C21.951 11.879 22 12.131 22 12.385V18.333C22 18.885 21.552 19.333 21 19.333H19.169",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M16 19.42H8.17",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M22 14H18V10H21.2",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M2 4H7",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M2 7H5",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M3 10H2",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ] })
  }
);

// src/components/overview-card/index.tsx
import Link from "next/link.js";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
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
  return IconsMap.find((icon4) => icon4.name === name)?.Icon;
};
var OverviewCard = ({ icon: icon4, link: link2, children }) => {
  const Icon68 = getIcon(icon4);
  return /* @__PURE__ */ jsx2(Link, { href: link2, children: /* @__PURE__ */ jsxs2(Flex, { sx: styles_default.overviewCard, children: [
    Icon68 && /* @__PURE__ */ jsx2(Icon68, { sx: styles_default.overviewIcon }),
    /* @__PURE__ */ jsx2(Box, { children })
  ] }) });
};
var overview_card_default = OverviewCard;

// src/components/youtube-frame/index.tsx
var import_prop_types = __toESM(require_prop_types());
import { jsx as jsx3 } from "react/jsx-runtime";
var YoutubeFrame = ({ embedId }) => /* @__PURE__ */ jsx3("div", { className: "video-responsive", children: /* @__PURE__ */ jsx3(
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
import { Box as Box2 } from "@vtex/brand-ui";

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
    lineHeight: "2.1em",
    boxSizing: "content-box"
  }
};
var styles_default2 = {
  steps
};

// src/components/steps/index.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var Steps = ({ children }) => {
  return /* @__PURE__ */ jsx4(Box2, { sx: styles_default2.steps, children });
};
var steps_default = Steps;

// src/components/lightbox/index.tsx
import { useEffect as useEffect2, useRef, useState } from "react";
import { Box as Box3, Button, Flex as Flex2 } from "@vtex/brand-ui";

// src/components/icons/close-icon.tsx
import { Icon as Icon2 } from "@vtex/brand-ui";
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
var CloseIcon = (props) => /* @__PURE__ */ jsxs3(
  Icon2,
  {
    ...props,
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx5(
        "path",
        {
          d: "M8 8L24 24",
          stroke: "currentcolor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx5(
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
import { useEffect } from "react";
function useClickOutside(ref, openModal) {
  useEffect(() => {
    function handleClickOutside(event) {
      const { body: body2, documentElement } = document;
      if (ref.current && event.target instanceof Node && !ref.current.contains(event.target)) {
        openModal({ modalToggle: false });
        const scrollTop = body2.getBoundingClientRect().top * -1;
        body2.classList.remove("modal-open");
        documentElement.scrollTop = scrollTop;
        body2.style.removeProperty("top");
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
  borderRadius: "5px",
  width: "fit-content",
  mt: "16px",
  mb: "24px",
  transition: "0.3s",
  ":hover": {
    boxShadow: "2px 4px 8px 2px rgb(0 0 0 / 10%)"
  },
  "> img": {
    maxWidth: "100%",
    display: "block",
    padding: "0",
    margin: "0",
    border: "1px solid #e7e9ed",
    borderRadius: "4px"
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
var styles_default3 = {
  imageContainer,
  container,
  modal,
  closeButton
};

// src/components/lightbox/index.tsx
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
function LightBox({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef();
  useEffect2(() => {
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
  return /* @__PURE__ */ jsxs4("div", { children: [
    isModalOpen && /* @__PURE__ */ jsxs4(Flex2, { sx: styles_default3.container, children: [
      /* @__PURE__ */ jsx6(
        Button,
        {
          sx: styles_default3.closeButton,
          "aria-label": "Close",
          size: "small",
          variant: "tertiary",
          icon: () => /* @__PURE__ */ jsx6(close_icon_default, { size: 24 }),
          onClick: () => setIsModalOpen(false)
        }
      ),
      /* @__PURE__ */ jsx6(Box3, { sx: styles_default3.modal, ref: modalRef, children })
    ] }),
    /* @__PURE__ */ jsx6(Box3, { sx: styles_default3.imageContainer, onClick: () => setIsModalOpen(true), children })
  ] });
}

// src/components/whats-next-card/index.tsx
import { Box as Box4, Flex as Flex3, IconCaret, Text, Link as Link2 } from "@vtex/brand-ui";

// src/components/whats-next-card/styles.ts
var container2 = {
  mt: "16px",
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
var imageTitle = {
  padding: "16px",
  fontSize: "16px",
  fontWeight: "400",
  color: "muted.0",
  ":after": {
    content: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='rgb(74 89 108)' %3E%3Cpath fill-rule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clip-rule='evenodd' /%3E%3C/svg%3E")`,
    position: "absolute",
    height: "16px",
    width: "16px",
    marginLeft: "3px",
    lineHeight: "30px"
  }
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
var styles_default4 = {
  container: container2,
  title,
  imageTitle,
  description,
  linkContainer,
  link
};

// src/components/whats-next-card/index.tsx
import Image from "next/image.js";
import { jsx as jsx7, jsxs as jsxs5 } from "react/jsx-runtime";
var WhatsNextCard = ({
  title: title5,
  description: description4,
  linkTitle,
  linkTo,
  image
}) => {
  return /* @__PURE__ */ jsx7(Link2, { href: linkTo, sx: styles_default4.container, children: image ? /* @__PURE__ */ jsxs5(Box4, { children: [
    /* @__PURE__ */ jsx7(
      Image,
      {
        src: image,
        alt: title5,
        width: 0,
        height: 0,
        sizes: "100vw",
        style: { width: "100%", height: "auto" }
      }
    ),
    /* @__PURE__ */ jsx7(Text, { sx: styles_default4.imageTitle, className: "title", children: title5 })
  ] }) : /* @__PURE__ */ jsxs5(Box4, { sx: { padding: "16px" }, children: [
    /* @__PURE__ */ jsx7(Text, { sx: styles_default4.title, className: "title", children: title5 }),
    description4 && /* @__PURE__ */ jsx7(Text, { sx: styles_default4.description, className: "description", children: description4 }),
    linkTitle && /* @__PURE__ */ jsxs5(Flex3, { sx: styles_default4.linkContainer, children: [
      /* @__PURE__ */ jsx7(Text, { sx: styles_default4.link, className: "link", children: linkTitle }),
      /* @__PURE__ */ jsx7(
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
import { createContext, useEffect as useEffect3, useState as useState2 } from "react";
import { SWRConfig } from "swr";
import { jsx as jsx8 } from "react/jsx-runtime";
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  setActiveSidebarElement: (_) => void 0,
  toggleSidebarElementStatus: () => void 0,
  openSidebarElement: () => void 0,
  closeSidebarElements: () => void 0,
  sidebarSections: [],
  setSidebarSections: () => void 0,
  hamburguerSections: [],
  setHamburguerSections: () => void 0,
  locale: "en"
});
var LibraryContextProvider = ({ children, ...props }) => {
  const [headingItems, setHeadingItems] = useState2([]);
  const [activeItem, setActiveItem] = useState2({
    item: "",
    subItem: ""
  });
  const [activeSectionName, setActiveSectionName] = useState2(
    props.sectionSelected
  );
  const [sidebarSectionHidden, setSidebarSectionHidden] = useState2(false);
  const [activeSidebarElement, setActiveSidebarElement] = useState2("");
  const [sidebarElementStatus, setSidebarElementStatus] = useState2(/* @__PURE__ */ new Map());
  const [sidebarDataMaster, setSidebarDataMaster] = useState2(props.fallback);
  const [isEditorPreview, setIsEditorPreview] = useState2(props.isPreview);
  const [sidebarSections, setSidebarSections] = useState2(props.sections);
  const [hamburguerSections, setHamburguerSections] = useState2(
    props.hamburguerMenuSections
  );
  const { locale: propsLocale, ...restProps } = props;
  const locale = propsLocale ?? "en";
  const fallback = restProps.fallback;
  useEffect3(() => {
    setSidebarDataMaster(props.fallback);
  }, [props.fallback]);
  useEffect3(() => {
    if (props.sectionSelected === "")
      setSidebarSectionHidden(true);
    else if (props.sectionSelected !== activeSectionName)
      setActiveSectionName(props.sectionSelected);
  }, [props.sectionSelected]);
  const toggleSidebarElementStatus = (title5) => {
    setSidebarElementStatus((sidebarElementStatus2) => {
      const open = sidebarElementStatus2.has(title5) === false ? true : !sidebarElementStatus2.get(title5);
      return new Map(sidebarElementStatus2.set(title5, open));
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
  const openSidebarElement = (title5) => {
    setSidebarElementStatus((sidebarElementStatus2) => {
      return new Map(sidebarElementStatus2.set(title5, true));
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
  return /* @__PURE__ */ jsx8(
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
        hamburguerSections,
        setHamburguerSections,
        locale,
        ...restProps
      },
      children: /* @__PURE__ */ jsx8(
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

// src/utils/string-utils.ts
var removeHTML = (str) => str.replace(/<\/?[^>]+>/g, "");
var slugify = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim();
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

// src/utils/mermaidInit.ts
import mermaid from "mermaid";
var mermaidInit = () => {
  mermaid.initialize({
    theme: "base",
    themeVariables: {
      primaryColor: "#FFFFFF",
      primaryTextColor: "#142032",
      primaryBorderColor: "#A1AAB7",
      labelBoxBorderColor: "#E31C58",
      labelTextColor: "#E31C58",
      labelBoxBkgColor: "#FFF3F6",
      lineColor: "#A1AAB7",
      mainBkg: "#F8F7FC"
    }
  });
};
var mermaidInit_default = mermaidInit;

// src/lib/markdown-renderer/styles.module.css
var styles_module_default = {
  img: "styles_module_img",
  heading: "styles_module_heading",
  code: "styles_module_code",
  blockquote: "styles_module_blockquote",
  blockquoteInfo: "styles_module_blockquoteInfo",
  blockquoteDanger: "styles_module_blockquoteDanger",
  blockquoteWarning: "styles_module_blockquoteWarning",
  blockquoteSuccess: "styles_module_blockquoteSuccess",
  flexWrap: "styles_module_flexWrap",
  svgContainer: "styles_module_svgContainer"
};

// src/messages/en.json
var en_default = {
  "feedback_section.question": "Was this helpful?",
  "feedback_section.response": "Thanks for the feedback!",
  "feedback_section.positive": "Yes",
  "feedback_section.negative": "No",
  "feedback_section.edit": "Suggest Edits (GitHub)",
  "feedback_modal.title": "Leave a Comment (Optional)",
  "feedback_modal.button": "Send Feedback",
  "search_input.empty": "No results found. Try different search terms.",
  "search_input.placeholder": "Search",
  "search_results.showing": "Showing",
  "search_results.results_for": "results for",
  "search_results.in": "in",
  "search_results.all_lowercase": "all results",
  "sidebar_search.placeholder": "Search in",
  "search_input.see_all": "See all results",
  "search_results.summary": 'Showing {count} results for "{keyword}" in {section}',
  "search_results.all": "All results",
  "search_card.in": "In",
  "image.error_loading": "An error occurred while loading the image",
  api_reference_sidebar_filter_clear: "Clear All",
  api_reference_sidebar_filter: "Filter By",
  "cookie_bar.title": "We use cookies",
  "cookie_bar.description": "This website uses cookies to improve navigation, analyze usage, and assist with our marketing efforts.",
  "cookie_bar.accept": "I agree",
  "cookie_bar.decline": "I decline"
};

// src/messages/es.json
var es_default = {
  "feedback_section.question": "\xBFTe ha parecido \xFAtil?",
  "feedback_section.response": "Gracias por tu feedback",
  "feedback_section.positive": "S\xED",
  "feedback_section.negative": "No",
  "feedback_section.edit": "Sugerir cambios (GitHub)",
  "feedback_modal.title": "Dar feedback (opcional)",
  "feedback_modal.button": "Enviar feedback",
  "search_input.empty": "No se encontraron resultados. Intenta utilizar otros t\xE9rminos.",
  "search_input.placeholder": "Buscar",
  "sidebar_search.placeholder": "Buscar en",
  "search_results.showing": "Mostrando",
  "search_results.results_for": "resultados para",
  "search_results.in": "en",
  "search_results.all_lowercase": "todos los resultados",
  "search_input.see_all": "Ver todos los resultados",
  "search_results.summary": 'Mostrando {count} resultados para "{keyword}" en {section}',
  "search_results.all": "Todos los resultados",
  "search_card.in": "En",
  "image.error_loading": "Se produjo un error al cargar la imagen",
  api_reference_sidebar_filter_clear: "Limpiar todo",
  api_reference_sidebar_filter: "Filtrar por",
  "cookie_bar.title": "Utilizamos cookies",
  "cookie_bar.description": "Este sitio web utiliza cookies para optimizar la navegaci\xF3n, analizar el uso e impulsar nuestros esfuerzos de marketing.",
  "cookie_bar.accept": "Acepto",
  "cookie_bar.decline": "Rechazo"
};

// src/messages/pt.json
var pt_default = {
  "feedback_section.question": "Isso foi \xFAtil?",
  "feedback_section.response": "Agradecemos pelo seu feedback.",
  "feedback_section.positive": "Sim",
  "feedback_section.negative": "N\xE3o",
  "feedback_section.edit": "Sugerir edi\xE7\xF5es (GitHub)",
  "feedback_modal.title": "Deixe um coment\xE1rio (opcional)",
  "feedback_modal.button": "Enviar feedback",
  "search_input.empty": "Nenhum resultado encontrado. Tente buscar por outros termos.",
  "search_input.placeholder": "Buscar",
  "sidebar_search.placeholder": "Buscar em",
  "search_results.showing": "Mostrando",
  "search_results.results_for": "resultados para",
  "search_results.in": "em",
  "search_results.all_lowercase": "todos os resultados",
  "search_input.see_all": "Ver todos os resultados",
  "search_results.summary": 'Mostrando {count} resultados para "{keyword}" em {section}',
  "search_results.all": "Todos os resultados",
  "search_card.in": "Em",
  "image.error_loading": "Ocorreu um erro ao carregar a imagem",
  api_reference_sidebar_filter_clear: "Limpar tudo",
  api_reference_sidebar_filter: "Filtrar por",
  "cookie_bar.title": "N\xF3s usamos cookies",
  "cookie_bar.description": "Este site utiliza cookies para melhorar a navega\xE7\xE3o, analisar a experi\xEAncia de uso e auxiliar em nossas a\xE7\xF5es de marketing.",
  "cookie_bar.accept": "Concordo",
  "cookie_bar.decline": "Discordo"
};

// src/utils/get-message.ts
var getMessages = () => {
  const messages2 = {
    en: en_default,
    es: es_default,
    pt: pt_default
  };
  return messages2;
};
var messages = getMessages();

// src/lib/markdown-renderer/components.tsx
import { jsx as jsx9, jsxs as jsxs6 } from "react/jsx-runtime";
mermaidInit_default();
var ObservableHeading = ({
  level,
  onEnterView,
  onLeaveView,
  ...headingProps
}) => {
  const [y, setY] = useState3(Infinity);
  const toSlugify = childrenToString(headingProps.children);
  const slug = slugify(toSlugify);
  return /* @__PURE__ */ jsx9(
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
      children: level === 2 ? /* @__PURE__ */ jsx9("h2", { id: slug, className: styles_module_default.heading, ...headingProps }) : /* @__PURE__ */ jsx9("h3", { id: slug, className: styles_module_default.heading, ...headingProps })
    }
  );
};
var Callout = ({ node, icon: icon4, ...props }) => {
  const blockquoteType = icon4 ? icon4 : "info";
  return /* @__PURE__ */ jsx9(
    "blockquote",
    {
      className: `${styles_module_default.blockquote} ${blockquoteType === "info" ? styles_module_default.blockquoteInfo : blockquoteType === "danger" ? styles_module_default.blockquoteDanger : blockquoteType === "warning" ? styles_module_default.blockquoteWarning : blockquoteType === "success" ? styles_module_default.blockquoteSuccess : ""}`,
      children: /* @__PURE__ */ jsx9("div", { ...props })
    }
  );
};
var MermaidDiagram = ({ node, ...props }) => {
  const viewerRef = useRef2(null);
  const ref = useRef2();
  const [diagram, setDiagram] = useState3("");
  const [width, setWidth] = useState3(0);
  const [height, setHeight] = useState3(0);
  useEffect4(() => {
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
  return /* @__PURE__ */ jsx9(Box5, { ref, className: styles_module_default.svgContainer, children: /* @__PURE__ */ jsx9(
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
      children: /* @__PURE__ */ jsx9("svg", { width, height, children: parse(diagram) })
    }
  ) });
};
var ImageComponent = ({ node, ...props }) => {
  const [srcHasError, setSrcHasError] = useState3(false);
  const { locale } = useContext(LibraryContext);
  const regularImg = (
    // eslint-disable-next-line @next/next/no-img-element
    /* @__PURE__ */ jsx9("img", { src: props.src, alt: props.alt, onError: () => setSrcHasError(true) })
  );
  const errorMessage = /* @__PURE__ */ jsxs6("blockquote", { className: `${styles_module_default.blockquote} ${styles_module_default.blockquoteWarning}`, children: [
    messages[locale]["image.error_loading"],
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
  return !srcHasError ? /* @__PURE__ */ jsx9(LightBox, { children: regularImg }) : errorMessage;
};
var components_default = {
  CH,
  OverviewCard: overview_card_default,
  WhatsNextCard: whats_next_card_default,
  YoutubeFrame: youtube_frame_default,
  Steps: steps_default,
  Flex: ({ node, ...props }) => /* @__PURE__ */ jsx9(Flex4, { className: styles_module_default.flexWrap, ...props }),
  table: ({ node, ...props }) => /* @__PURE__ */ jsx9("table", { ...props }),
  td: ({ node, ...props }) => /* @__PURE__ */ jsx9("td", { ...props }),
  img: ImageComponent,
  text: ({ node, ...props }) => {
    return /* @__PURE__ */ jsx9(Box5, { sx: { marginBlock: "1em" }, ...props });
  },
  blockquote: ({ ...props }) => {
    return /* @__PURE__ */ jsx9(Callout, { ...props });
  },
  code: ({ node, ...props }) => {
    return /* @__PURE__ */ jsx9("code", { className: styles_module_default.code, ...props });
  },
  pre: ({ ...props }) => {
    if (props.className && props.className === "mermaid")
      return /* @__PURE__ */ jsx9(MermaidDiagram, { ...props });
    return /* @__PURE__ */ jsx9("pre", { className: styles_module_default.pre, ...props });
  },
  h2: ({ node, ...props }) => {
    const { activeItem, setActiveItem, goToPreviousItem } = useContext(LibraryContext);
    return /* @__PURE__ */ jsx9(
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
    return /* @__PURE__ */ jsx9(
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
import { jsx as jsx10 } from "react/jsx-runtime";
var MDXRemote2 = MDXRemote;
var MarkdownRenderer = ({
  serialized,
  customComponents,
  scope
}) => {
  if (components_default && scope) {
    return /* @__PURE__ */ jsx10(Box6, { children: /* @__PURE__ */ jsx10(
      MDXRemote2,
      {
        components: { ...components_default, ...customComponents },
        lazy: true,
        ...serialized,
        scope
      }
    ) });
  }
  return /* @__PURE__ */ jsx10(Box6, { children: /* @__PURE__ */ jsx10(MDXRemote2, { components: components_default, lazy: true, ...serialized }) });
};
var MarkdownRenderer_default = MarkdownRenderer;

// src/lib/table-of-contents/TableOfContents.tsx
import { useContext as useContext2, useEffect as useEffect5 } from "react";
import Link3 from "next/link.js";
import { useRouter } from "next/router.js";
import { Box as Box7, Text as Text2 } from "@vtex/brand-ui";
import AnimateHeight from "react-animate-height";

// src/lib/table-of-contents/styles.ts
var itemsContainer = {
  position: "sticky",
  top: "calc(5rem + 32px)"
};
var tocTitle = {
  fontSize: "10px",
  fontWeight: "600",
  textTransform: "uppercase",
  mb: "6px",
  color: "muted.0"
};
var headings = {
  borderLeft: "1px solid #E7E9EE",
  mb: "16px"
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
var styles_default5 = { tocTitle, itemsContainer, item, subItemsContainer, headings };

// src/lib/table-of-contents/TableOfContents.tsx
import { jsx as jsx11, jsxs as jsxs7 } from "react/jsx-runtime";
var TableOfContents = ({ headingList, children }) => {
  const router = useRouter();
  const { headingItems, activeItem, setHeadingItems, setActiveItem } = useContext2(LibraryContext);
  useEffect5(() => {
    const headings2 = headingList ?? [];
    if (!headings2.length) {
      document.querySelectorAll("h2, h3").forEach((heading) => {
        const headingSlug = heading.id;
        const item2 = {
          title: removeHTML(heading.innerHTML).replace(":", ""),
          slug: headingSlug
        };
        if (heading.tagName === "H2") {
          headings2.push({ ...item2, children: [] });
        } else if (headings2.length > 0) {
          headings2[headings2.length - 1].children.push({ ...item2 });
        } else {
          headings2.push({ ...item2, children: [] });
        }
      });
      setHeadingItems(headings2);
    } else
      setHeadingItems(headings2);
  }, [router.asPath, headingList]);
  const Item = ({
    title: title5,
    slug,
    level,
    active
  }) => {
    return /* @__PURE__ */ jsx11(
      Link3,
      {
        href: `#${slug}`,
        onClick: () => {
          setActiveItem(({ item: item2 }) => ({
            item: level === 1 ? slug : item2,
            subItem: level === 1 ? "" : slug
          }));
        },
        children: /* @__PURE__ */ jsx11(Text2, { sx: styles_default5.item(level, active), children: title5 })
      }
    );
  };
  return /* @__PURE__ */ jsxs7(Box7, { sx: styles_default5.itemsContainer, "data-cy": "table-of-contents", children: [
    headingItems.length > 0 && /* @__PURE__ */ jsx11(Text2, { sx: styles_default5.tocTitle, children: "ON THIS PAGE" }),
    /* @__PURE__ */ jsx11(Box7, { sx: styles_default5.headings, children: headingItems.map((item2) => /* @__PURE__ */ jsxs7(Box7, { children: [
      /* @__PURE__ */ jsx11(
        Item,
        {
          title: item2.title,
          slug: item2.slug,
          level: 1,
          active: item2.slug === activeItem.item
        }
      ),
      /* @__PURE__ */ jsx11(
        AnimateHeight,
        {
          duration: 300,
          height: item2.slug === activeItem.item ? "auto" : 0,
          children: /* @__PURE__ */ jsx11(Box7, { sx: styles_default5.subItemsContainer, children: item2.children.map((subItem) => /* @__PURE__ */ jsx11(
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
    ] }, item2.slug)) }),
    children
  ] });
};
var TableOfContents_default = TableOfContents;

// src/lib/sidebar/index.tsx
import { useEffect as useEffect8, useRef as useRef4, useState as useState7, useContext as useContext6 } from "react";
import { Flex as Flex10, Text as Text6, Box as Box12 } from "@vtex/brand-ui";
import Link5 from "next/link.js";

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
  overflow: "hidden",
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
var styles_default6 = {
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
import { useEffect as useEffect6, useRef as useRef3, useState as useState4 } from "react";
import { Box as Box8, Flex as Flex5 } from "@vtex/brand-ui";

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
var styles_default7 = { tooltipContainer, caret, labelStyle };

// src/components/icons/caret.tsx
import { Icon as Icon3 } from "@vtex/brand-ui";
import { jsx as jsx12 } from "react/jsx-runtime";
var CaretIcon = (props) => /* @__PURE__ */ jsx12(
  Icon3,
  {
    ...props,
    width: "9",
    height: "4",
    viewBox: "0 0 9 4",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx12(
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
import { jsx as jsx13, jsxs as jsxs8 } from "react/jsx-runtime";
var Tooltip = ({ children, label: label2, placement, sx, isCard }) => {
  const box2 = useRef3();
  const [boxWidth, setBoxWidth] = useState4(0);
  const [boxHeight, setBoxHeight] = useState4(0);
  const [boxOffsetLeft, setBoxOffsetLeft] = useState4(0);
  const [boxOffsetTop, setBoxOffsetTop] = useState4(0);
  const [visible, setVisible] = useState4(false);
  useEffect6(() => {
    if (box2.current) {
      setBoxWidth(box2.current.clientWidth);
      setBoxHeight(box2.current.clientHeight);
      setBoxOffsetLeft(box2.current.offsetLeft);
      setBoxOffsetTop(box2.current.offsetTop);
    }
  }, [
    box2.current,
    box2.current?.clientWidth,
    box2.current?.clientHeight,
    box2.current?.offsetLeft,
    box2.current?.offsetTop
  ]);
  return /* @__PURE__ */ jsxs8(Box8, { children: [
    /* @__PURE__ */ jsx13(
      Box8,
      {
        ref: box2,
        onMouseEnter: () => setVisible(true),
        onMouseLeave: () => setVisible(false),
        children
      }
    ),
    visible && (isCard ?? true) && /* @__PURE__ */ jsxs8(
      Flex5,
      {
        sx: styles_default7.tooltipContainer(
          sx,
          placement || "top",
          boxWidth,
          boxHeight,
          boxOffsetLeft,
          boxOffsetTop
        ),
        children: [
          /* @__PURE__ */ jsx13(caret_default, { sx: styles_default7.caret(placement || "top") }),
          /* @__PURE__ */ jsx13(Box8, { sx: styles_default7.labelStyle(isCard ?? false), children: label2 })
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
import { useRouter as useRouter2 } from "next/router.js";
import { useEffect as useEffect7 } from "react";
var getIcon2 = (doc, sections) => {
  for (const section of sections) {
    return section.find((icon4) => icon4.title === doc)?.Icon;
  }
};
var updateOpenPage = ({
  parentsArray = [],
  context
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
  useEffect7(() => {
    closeSidebarElements(parentsArray);
    parentsArray.forEach((slug) => {
      openSidebarElement(slug);
    });
    setActiveSidebarElement(activeSlug?.replace("?endpoint=", "#"));
  }, [activeSidebarElement, router]);
};

// src/components/sidebar-section/index.tsx
import { Flex as Flex9, Box as Box11, Text as Text5, Button as Button3 } from "@vtex/brand-ui";
import { useContext as useContext5, useMemo, useState as useState6 } from "react";

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
var styles_default8 = {
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
import { Box as Box9, Flex as Flex7, Text as Text4 } from "@vtex/brand-ui";

// src/components/method-category/index.tsx
import { Flex as Flex6, Text as Text3 } from "@vtex/brand-ui";

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
var styles_default9 = {
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
    ...styles_default9.container,
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
    ...styles_default9.container,
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
    ...styles_default9.closeIcon,
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
import { Icon as Icon4 } from "@vtex/brand-ui";
import { jsx as jsx14, jsxs as jsxs9 } from "react/jsx-runtime";
var CloseFilterIcon = (props) => /* @__PURE__ */ jsxs9(
  Icon4,
  {
    ...props,
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx14("rect", { width: "12", height: "12", rx: "2", fill: "#2978B5" }),
      /* @__PURE__ */ jsx14(
        "path",
        {
          d: "M3 3L9 9",
          stroke: "#DEECF7",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx14(
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
import { jsx as jsx15, jsxs as jsxs10 } from "react/jsx-runtime";
var MethodCategory = ({
  method,
  active,
  origin,
  sx
}) => {
  return /* @__PURE__ */ jsxs10(Flex6, { className: "method-category", sx: categoryStyle(method, active, sx), children: [
    /* @__PURE__ */ jsx15(Text3, { sx: styles_default9.text, children: categoryText(method, origin) }),
    origin === "filter" && active && /* @__PURE__ */ jsx15(
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
import { useContext as useContext3, useState as useState5 } from "react";

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
var styles_default10 = {
  container: container4,
  text: text2,
  category,
  clear
};

// src/components/sidebar-section-filter/index.tsx
import { jsx as jsx16, jsxs as jsxs11 } from "react/jsx-runtime";
var SectionFilter = ({
  methodFilterList,
  setMethodFilter
}) => {
  const [activeFilters, setActiveFilters] = useState5([]);
  const { locale } = useContext3(LibraryContext);
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
    return /* @__PURE__ */ jsx16(
      Box9,
      {
        onClick: () => setFilter(methodFilter.name),
        children: /* @__PURE__ */ jsx16(
          method_category_default,
          {
            sx: styles_default10.category,
            active: methodFilter.active,
            method: methodFilter.name,
            origin: "filter"
          }
        )
      },
      `filter-category-${methodFilter.name}`
    );
  };
  return /* @__PURE__ */ jsxs11(Box9, { sx: styles_default10.container, children: [
    /* @__PURE__ */ jsx16(Text4, { sx: styles_default10.text, children: messages[locale]["api_reference_sidebar_filter"] }),
    /* @__PURE__ */ jsxs11(Flex7, { children: [
      methodFilterList.map((methodFilter) => /* @__PURE__ */ jsx16(
        MethodButton,
        {
          methodFilter
        },
        `filter-category-${methodFilter.name}`
      )),
      activeFilters.length > 1 && /* @__PURE__ */ jsx16(Text4, { onClick: () => setFilter(null), sx: styles_default10.clear, children: messages[locale]["api_reference_sidebar_filter_clear"] })
    ] })
  ] });
};
var sidebar_section_filter_default = SectionFilter;

// src/components/sidebar-elements/index.tsx
import { useRouter as useRouter3 } from "next/router.js";
import { Fragment, useContext as useContext4 } from "react";
import {
  Box as Box10,
  Flex as Flex8,
  Link as Link4,
  Button as Button2,
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
var styles_default11 = {
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
var styleByLevelNormal = (level, icon4) => {
  const ml = 8 + (icon4 ? (level - 1) * 20 + 6 : (level - 1) * 20 + 14);
  const borderLeft = icon4 ? "none" : level >= 2 ? "1px solid #E7E9EE" : "";
  const normal = {
    marginLeft: `${ml}px`,
    borderLeft
  };
  return normal;
};
var textStyle = (active, icon4) => {
  const ml = icon4 ? "4px" : "16px";
  if (active) {
    const textStyleActive = {
      ...styles_default11.elementActive,
      ml
    };
    return textStyleActive;
  }
  const textStyle2 = {
    ...styles_default11.elementText,
    ml
  };
  return textStyle2;
};

// src/components/sidebar-elements/index.tsx
import { jsx as jsx17, jsxs as jsxs12 } from "react/jsx-runtime";
var SidebarElements = ({ slugPrefix, items, subItemLevel }) => {
  const {
    isEditorPreview,
    activeSidebarElement,
    sidebarElementStatus,
    toggleSidebarElementStatus,
    sidebarDataMaster,
    locale
  } = useContext4(LibraryContext);
  const router = useRouter3();
  const handleClick = (e, pathSuffix, slug) => {
    e.preventDefault();
    const hasEndpointQuery = router.query.endpoint;
    const href = getHref(slugPrefix || "", pathSuffix, slug);
    const hrefWithoutLocale = href.replace(/^\/(en|pt|es)\//, "/");
    console.log("[SIDEBAR FIX v3] handleClick:", { href, hrefWithoutLocale, currentLocale: router.locale });
    router.push(hrefWithoutLocale, hrefWithoutLocale, { locale: router.locale }).then(() => {
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
    const validLocales = ["en", "pt", "es"];
    const localePrefix = router.locale && validLocales.includes(router.locale) ? `/${router.locale}` : "";
    const href = slugPrefix2 === "docs/api-reference" ? `/${slugPrefix2}/${slug}/${pathSuffix}` : `${localePrefix}/${slugPrefix2}/${slug}`;
    return href.replaceAll("//", "/");
  };
  const ElementRoot = ({
    slug,
    name,
    method,
    endpoint,
    children
  }) => {
    const localizedName = typeof name === "string" ? name : name[locale];
    const localizedSlug = typeof slug === "string" ? slug : slug[locale];
    const isExpandable = children.length > 0;
    const pathSuffix = method ? `#${method.toLowerCase()}-${endpoint}` : "";
    const activeItem = method ? `${localizedSlug}${pathSuffix}` : localizedSlug;
    return /* @__PURE__ */ jsx17(Box10, { sx: styles_default11.elementContainer, children: /* @__PURE__ */ jsxs12(Flex8, { sx: styleByLevelNormal(subItemLevel, isExpandable || false), children: [
      isExpandable && /* @__PURE__ */ jsx17(
        Button2,
        {
          "aria-label": sidebarElementStatus.has(localizedSlug) && sidebarElementStatus.get(localizedSlug) ? "Collapse category" : "Expand category",
          size: "regular",
          variant: "tertiary",
          sx: sidebarElementStatus.has(localizedSlug) && sidebarElementStatus.get(localizedSlug) ? styles_default11.arrowIconActive : styles_default11.arrowIcon,
          icon: () => /* @__PURE__ */ jsx17(
            IconCaret2,
            {
              direction: sidebarElementStatus.has(localizedSlug) && sidebarElementStatus.get(localizedSlug) ? "down" : "right",
              size: 24
            }
          ),
          onClick: () => toggleSidebarElementStatus(localizedSlug)
        }
      ),
      !checkDocumentationType(
        sidebarDataMaster,
        localizedSlug,
        "category"
      ) && !checkDocumentationType(sidebarDataMaster, localizedSlug, "link") ? /* @__PURE__ */ jsxs12(
        Link4,
        {
          sx: textStyle(activeSidebarElement === activeItem, isExpandable),
          onClick: (e) => {
            if (!isEditorPreview) {
              handleClick(e, pathSuffix, localizedSlug);
            }
            toggleSidebarElementStatus(activeItem);
          },
          href: getHref(slugPrefix || "", pathSuffix, localizedSlug),
          target: isEditorPreview === true ? "_blank" : "_self",
          children: [
            method && /* @__PURE__ */ jsx17(
              method_category_default,
              {
                sx: styles_default11.methodBox,
                active: activeSidebarElement === activeItem,
                origin: "sidebar",
                method
              }
            ),
            localizedName
          ]
        }
      ) : checkDocumentationType(
        sidebarDataMaster,
        localizedSlug,
        "link"
      ) ? /* @__PURE__ */ jsxs12(Link4, { href: localizedSlug, target: "_blank", sx: styles_default11.elementText, children: [
        /* @__PURE__ */ jsx17(IconExternalLink, { size: 16, sx: { marginRight: "10px" } }),
        localizedName
      ] }) : /* @__PURE__ */ jsxs12(
        Box10,
        {
          sx: textStyle(
            activeSidebarElement === localizedSlug,
            isExpandable
          ),
          onClick: () => {
            toggleSidebarElementStatus(localizedSlug);
          },
          children: [
            method && /* @__PURE__ */ jsx17(
              method_category_default,
              {
                sx: styles_default11.methodBox,
                active: activeSidebarElement === localizedSlug,
                origin: "sidebar",
                method
              }
            ),
            localizedName
          ]
        }
      )
    ] }) });
  };
  const ElementChildren = ({ slug, children }) => {
    const isExpandable = children.length > 0;
    const localizedSlug = typeof slug === "string" ? slug : slug[locale];
    return isExpandable && sidebarElementStatus.has(localizedSlug) && sidebarElementStatus.get(localizedSlug) ? /* @__PURE__ */ jsx17(Box10, { children: /* @__PURE__ */ jsx17(
      SidebarElements,
      {
        slugPrefix,
        items: children,
        subItemLevel: subItemLevel + 1
      },
      `${localizedSlug}sd`
    ) }) : null;
  };
  return /* @__PURE__ */ jsx17(Box10, { className: "sidebar-component", children: items?.map((item2, index) => {
    const key = typeof item2.slug === "string" ? String(item2.slug) + String(index) : String(item2.slug[locale]) + String(index);
    const slug = typeof item2.slug === "string" ? `${item2.slug}` : `${item2.slug[locale]}`;
    return /* @__PURE__ */ jsxs12(Fragment, { children: [
      /* @__PURE__ */ jsx17(ElementRoot, { ...item2, slug }),
      /* @__PURE__ */ jsx17(Box10, { children: /* @__PURE__ */ jsx17(ElementChildren, { ...item2, slug }) }),
      subItemLevel == 0 ? /* @__PURE__ */ jsx17(Box10, { sx: styles_default11.sectionDivider, children: /* @__PURE__ */ jsx17("hr", {}) }) : null
    ] }, String(key));
  }) });
};
var sidebar_elements_default = SidebarElements;

// src/components/icons/search-icon.tsx
import { Icon as Icon5 } from "@vtex/brand-ui";
import { jsx as jsx18 } from "react/jsx-runtime";
var SearchIcon = (props) => /* @__PURE__ */ jsx18(
  Icon5,
  {
    ...props,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx18(
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
import { Icon as Icon6 } from "@vtex/brand-ui";
import { jsx as jsx19, jsxs as jsxs13 } from "react/jsx-runtime";
var SideBarToggleIcon = (props) => /* @__PURE__ */ jsxs13(
  Icon6,
  {
    ...props,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx19(
        "path",
        {
          d: "M12 16.332L7 16.332",
          stroke: "#A1A8B3",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx19(
        "path",
        {
          d: "M10 12.168L7 12.168",
          stroke: "#A1A8B3",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx19(
        "path",
        {
          d: "M12 8L7 8",
          stroke: "#A1A8B3",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx19(
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
import { Icon as Icon7 } from "@vtex/brand-ui";
import { jsx as jsx20, jsxs as jsxs14 } from "react/jsx-runtime";
var ArrowLeftIcon = (props) => /* @__PURE__ */ jsxs14(
  Icon7,
  {
    ...props,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      " ",
      /* @__PURE__ */ jsx20(
        "path",
        {
          d: "M19.5195 12.0195L4.52953 12.0195",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx20(
        "path",
        {
          d: "M10.5176 18.0117L4.48058 11.9997L10.5176 5.98772",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var arrow_left_icon_default = ArrowLeftIcon;

// src/components/sidebar-section/index.tsx
import { Fragment as Fragment2, jsx as jsx21, jsxs as jsxs15 } from "react/jsx-runtime";
var SidebarSection = ({
  documentation: documentation2,
  name,
  categories,
  slugPrefix,
  isHamburgerMenu = false
}) => {
  const [searchValue, setSearchValue] = useState6("");
  const {
    isEditorPreview,
    sidebarSectionHidden,
    setSidebarSectionHidden,
    sidebarSections,
    locale
  } = useContext5(LibraryContext);
  const [methodFilterList, setMethodFilterList] = useState6([
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
          const hasInputFilter = searchValue === "" || (typeof endpoint.name === "string" ? endpoint.name : endpoint.name[locale]).toLowerCase().includes(searchValue.toLowerCase());
          return hasMethodFilter && hasInputFilter;
        });
        return subcategory;
      }).filter(
        (subcategory) => subcategory.children.length > 0 || subcategory.type === "markdown" && (typeof subcategory.name === "string" ? subcategory.name : subcategory.name[locale]).toLowerCase().includes(searchValue.toLowerCase())
      );
      return category2;
    }).filter((category2) => category2.children.length > 0);
    return filteredCategories;
  }, [filterStatus, methodFilterList, categories, searchValue]);
  const DocIcon = getIcon2(documentation2, sidebarSections);
  let localizedSectionTitle = "";
  if (!categories || categories.length <= 0) {
    return /* @__PURE__ */ jsx21(Fragment2, {});
  } else {
    localizedSectionTitle = typeof name === "string" ? name : name[locale];
  }
  return isHamburgerMenu ? /* @__PURE__ */ jsx21(
    Box11,
    {
      className: sidebarSectionHidden ? "active" : "",
      sx: styles_default8.sidebarContainerHamburger,
      children: /* @__PURE__ */ jsxs15(
        Box11,
        {
          className: sidebarSectionHidden ? "sidebarHide" : "",
          sx: styles_default8.sidebarContainerBoxHamburger,
          children: [
            /* @__PURE__ */ jsxs15(Flex9, { sx: styles_default8.sidebarContainerTitle, children: [
              /* @__PURE__ */ jsx21(
                Button3,
                {
                  sx: styles_default8.arrowButton,
                  "aria-label": "Go back",
                  size: "small",
                  variant: "tertiary",
                  icon: () => /* @__PURE__ */ jsx21(arrow_left_icon_default, { size: 24 }),
                  onClick: () => {
                    setSidebarSectionHidden(true);
                  }
                }
              ),
              DocIcon && /* @__PURE__ */ jsx21(DocIcon, {}),
              /* @__PURE__ */ jsx21(Text5, { sx: styles_default8.sidebarTitle, children: localizedSectionTitle })
            ] }),
            /* @__PURE__ */ jsxs15(Box11, { sx: styles_default8.sidebarContainerBody, children: [
              /* @__PURE__ */ jsxs15(Flex9, { sx: styles_default8.searchBox, children: [
                /* @__PURE__ */ jsx21(search_icon_default, { sx: styles_default8.searchIcon }),
                /* @__PURE__ */ jsx21(
                  "input",
                  {
                    style: styles_default8.searchInput,
                    className: "searchComponent",
                    type: "text",
                    placeholder: messages[locale]["sidebar_search.placeholder"] + " " + localizedSectionTitle,
                    value: searchValue,
                    onChange: (e) => setSearchValue(e.currentTarget.value)
                  }
                )
              ] }),
              documentation2 == "API Reference" && /* @__PURE__ */ jsx21(
                sidebar_section_filter_default,
                {
                  methodFilterList,
                  setMethodFilter: setMethodFilterList
                }
              )
            ] }),
            /* @__PURE__ */ jsx21(Box11, { sx: styles_default8.sidebarContainerBody, children: /* @__PURE__ */ jsx21(
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
  ) : /* @__PURE__ */ jsxs15(
    Box11,
    {
      className: sidebarSectionHidden ? "active" : "",
      sx: styles_default8.sidebarContainer,
      children: [
        /* @__PURE__ */ jsxs15(
          Box11,
          {
            className: sidebarSectionHidden ? "sidebarHide" : "",
            sx: styles_default8.sidebarContainerBox,
            "data-cy": "sidebar-section",
            children: [
              /* @__PURE__ */ jsxs15(Box11, { sx: styles_default8.sidebarContainerHeader, children: [
                isEditorPreview && /* @__PURE__ */ jsxs15(Text5, { sx: styles_default8.previewMode, children: [
                  /* @__PURE__ */ jsxs15(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "72",
                      height: "72",
                      viewBox: "0 0 72 72",
                      fill: "none",
                      children: [
                        /* @__PURE__ */ jsx21("circle", { cx: "36", cy: "36", r: "36", fill: "#FFB100" }),
                        /* @__PURE__ */ jsx21(
                          "path",
                          {
                            d: "M40.4202 22.6818H31.8152V42.6377H40.4202V22.6818Z",
                            fill: "white"
                          }
                        ),
                        /* @__PURE__ */ jsx21(
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
                /* @__PURE__ */ jsx21(Text5, { sx: styles_default8.sidebarTitle, children: localizedSectionTitle }),
                /* @__PURE__ */ jsxs15(Flex9, { sx: styles_default8.searchBox, children: [
                  /* @__PURE__ */ jsx21(search_icon_default, { sx: styles_default8.searchIcon }),
                  /* @__PURE__ */ jsx21(
                    "input",
                    {
                      style: styles_default8.searchInput,
                      className: "searchComponent",
                      type: "text",
                      placeholder: messages[locale]["sidebar_search.placeholder"] + " " + localizedSectionTitle,
                      value: searchValue,
                      onChange: (e) => setSearchValue(e.currentTarget.value)
                    }
                  )
                ] })
              ] }),
              documentation2 == "API Reference" && /* @__PURE__ */ jsx21(
                sidebar_section_filter_default,
                {
                  methodFilterList,
                  setMethodFilter: setMethodFilterList
                }
              ),
              /* @__PURE__ */ jsx21(Box11, { sx: styles_default8.sidebarContainerBody, children: /* @__PURE__ */ jsx21(
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
        /* @__PURE__ */ jsx21(
          Flex9,
          {
            className: "toggleIcon",
            sx: sidebarSectionHidden ? styles_default8.toggleIconBoxActive : styles_default8.toggleIconBox,
            children: /* @__PURE__ */ jsx21(
              sidebar_toggle_icon_default,
              {
                onClick: () => {
                  setSidebarSectionHidden(
                    (sidebarSectionHidden2) => !sidebarSectionHidden2
                  );
                },
                sx: sidebarSectionHidden ? styles_default8.toggleIcon : {}
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
import { Fragment as Fragment3, jsx as jsx22, jsxs as jsxs16 } from "react/jsx-runtime";
import { createElement } from "react";
var Sidebar = ({ parentsArray = [] }) => {
  const [expandDelayStatus, setExpandDelayStatus] = useState7(true);
  const context = useContext6(LibraryContext);
  const {
    isEditorPreview,
    setActiveSectionName,
    activeSectionName,
    sidebarSections,
    sidebarDataMaster
  } = context;
  const sidebarSectionContent = {
    ...Array.isArray(sidebarDataMaster) ? sidebarDataMaster?.find(
      (section) => section.documentation === activeSectionName
    ) : null
  };
  updateOpenPage({
    parentsArray,
    context
  });
  useEffect8(() => {
    let timer = void 0;
    if (sidebarSectionContent.categories?.length > 0)
      timer = setTimeout(
        () => setExpandDelayStatus && setExpandDelayStatus(false),
        5e3
      );
    else
      setExpandDelayStatus && setExpandDelayStatus(true);
    return () => {
      timer && clearTimeout(timer);
    };
  }, [activeSectionName]);
  const SideBarIcon = (sectionElement) => {
    const [iconTooltip2, setIconTooltip] = useState7(false);
    const [tooltipLabel, setTooltipLabel] = useState7(sectionElement.title);
    const titleRef = useRef4();
    useEffect8(() => {
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
    return /* @__PURE__ */ jsx22(Box12, { sx: styles_default6.linkContainer, children: /* @__PURE__ */ jsx22(
      tooltip_default,
      {
        sx: iconTooltipStyle(iconTooltip2),
        placement: "right",
        label: tooltipLabel,
        children: /* @__PURE__ */ jsx22(
          Link5,
          {
            href: !isEditorPreview ? sectionElement.link : "/",
            target: sectionElement?.isExternalLink == true ? "_blank" : "_self",
            onClick: (e) => {
              if (isEditorPreview) {
                e.preventDefault();
              }
              setActiveSectionName(sectionElement.id);
            },
            passHref: true,
            "aria-label": sectionElement.title,
            children: /* @__PURE__ */ jsxs16(
              Flex10,
              {
                sx: activeSectionName === sectionElement.id ? styles_default6.iconBoxActive : styles_default6.iconBox,
                children: [
                  /* @__PURE__ */ jsx22(
                    sectionElement.Icon,
                    {
                      sx: activeSectionName === sectionElement.id ? styles_default6.iconActive : styles_default6.icon
                    }
                  ),
                  /* @__PURE__ */ jsx22(
                    Text6,
                    {
                      className: expandDelayStatus ? "iconDescriptionExpanded" : "",
                      ref: titleRef,
                      sx: styles_default6.iconTitle,
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
  return /* @__PURE__ */ jsxs16(Flex10, { sx: styles_default6.sidebar, children: [
    /* @__PURE__ */ jsx22(
      Flex10,
      {
        className: expandDelayStatus ? "iconContainerExpanded" : "",
        sx: styles_default6.sidebarIcons,
        children: sidebarSections.map((section, id) => {
          return /* @__PURE__ */ jsxs16(Fragment3, { children: [
            id > 0 && /* @__PURE__ */ jsx22(Box12, { sx: styles_default6.sectionDivider, children: /* @__PURE__ */ jsx22("hr", {}) }, `${id}-divider`),
            /* @__PURE__ */ jsx22(Flex10, { sx: styles_default6.sidebarIconsContainer, children: section.map((element) => /* @__PURE__ */ createElement(
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
    activeSectionName ? /* @__PURE__ */ jsx22(sidebar_section_default, { ...sidebarSectionContent }) : null
  ] });
};
var sidebar_default = Sidebar;

// src/lib/hamburger-menu/index.tsx
import {
  Header,
  HamburgerMenu as VtexHamburgerMenu,
  Box as Box16,
  IconCaret as IconCaret4,
  Button as Button4
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
var styles_default12 = {
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
import { useContext as useContext10 } from "react";

// src/components/documentation-card/index.tsx
import Link6 from "next/link.js";
import { Box as Box13, Flex as Flex11, Text as Text7 } from "@vtex/brand-ui";

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
var styles_default13 = {
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
    ...styles_default13.cardContainer,
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
    ...styles_default13.titleContainer,
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
    ...styles_default13.title,
    ...titleAttributes
  };
  return cardTitle2;
};

// src/components/documentation-card/index.tsx
import { jsx as jsx23, jsxs as jsxs17 } from "react/jsx-runtime";
var DocumentationCard = ({
  title: title5,
  description: description4,
  link: link2,
  containerType,
  Icon: Icon68,
  onClick
}) => {
  return /* @__PURE__ */ jsx23(Link6, { href: link2, legacyBehavior: true, children: /* @__PURE__ */ jsx23("a", { onClick, style: { width: "100%" }, children: /* @__PURE__ */ jsxs17(Box13, { sx: cardContainer3(containerType), children: [
    /* @__PURE__ */ jsxs17(Flex11, { sx: titleContainer2(containerType), children: [
      /* @__PURE__ */ jsx23(Icon68, { sx: { color: "#4A596B" }, size: 24 }),
      /* @__PURE__ */ jsx23(Text7, { className: "title", sx: cardTitle(containerType), children: title5 })
    ] }),
    /* @__PURE__ */ jsx23(Text7, { className: "description", sx: styles_default13.description, children: description4 })
  ] }) }) });
};
var documentation_card_default = DocumentationCard;

// src/components/search-input/index.tsx
import { Configure, InstantSearch } from "react-instantsearch-dom";

// src/components/search-input/search-box.tsx
import { useRef as useRef5, useContext as useContext7 } from "react";
import { useRouter as useRouter4 } from "next/router.js";
import { Flex as Flex12 } from "@vtex/brand-ui";
import { connectSearchBox } from "react-instantsearch-dom";

// src/components/search-input/styles.ts
var resultsOuterContainer = {
  position: "relative"
};
var resultsInnerContainer = {
  top: 0,
  position: "absolute",
  width: ["288px", "458px", "458px", "288px", "416px", "544px"],
  border: "1px solid #B9B9B9",
  borderRadius: "0px 0px 4px 4px",
  background: "#FFFFFF"
};
var resultsBox = {
  padding: "16px"
};
var seeAll = {
  padding: "24px",
  borderTop: "1px solid #E7E9EE",
  color: "muted.0",
  cursor: "pointer",
  ":hover": {
    background: "#F8F7FC",
    borderTop: "1px solid #d0cdcd"
  }
};
var hitBox = {
  padding: "8px",
  cursor: "pointer",
  ":active, :hover": {
    backgroundColor: "#F8F7FC",
    borderRadius: "4px",
    ".hit-content-title": {
      color: "#000711"
    },
    ".hit-icon": {
      "> path": {
        stroke: "#000711"
      }
    }
  }
};
var hitIcon = {
  width: "16px",
  height: "16px",
  marginRight: "8px"
};
var hitContentContainer = {
  width: "100%"
};
var hitContent = {
  color: "muted.0",
  fontSize: ["14px", "16px"],
  lineHeight: ["20px", "22px"],
  width: "100%"
};
var hitContentSmall = {
  color: "muted.0",
  fontSize: ["14px", "16px"],
  lineHeight: ["20px", "22px"],
  width: "100%",
  whiteSpace: "pre",
  overflow: "hidden",
  textOverflow: "ellipsis"
};
var alignCenter = {
  alignItems: "center"
};
var hitBreadCrumb = {
  color: "muted.1",
  fontSize: "12px",
  lineHeight: "16px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
};
var hitBreadCrumbIn = {
  ...hitBreadCrumb,
  minWidth: "fit-content"
};
var hitBreadCrumbArrow = {
  width: "16px",
  height: "16px",
  color: "muted.2"
};
var searchInput2 = {
  width: "76px",
  background: "none",
  border: "#F4F4F4",
  color: "#545454",
  fontSize: ["14px"],
  flex: 0,
  transition: "flex 0.3s"
};
var searchIcon2 = {
  minWidth: "16px",
  minHeight: "16px",
  width: "16px",
  mr: "8px",
  flex: 0,
  maxWidth: "fit-content"
};
var searchContainer = {
  paddingLeft: "12px",
  alignItems: "center",
  justifyContent: "center",
  background: "#F4F4F4",
  width: "288px",
  height: "40px",
  borderRadius: "4px",
  transition: "all 0.3s ease-out",
  cursor: "pointer",
  ":hover": {
    transition: "all 0.3s ease-out",
    width: ["288px", "458px", "458px", "288px", "416px", "544px"],
    border: "1px solid #3B3B3B"
  },
  ":focus-within": {
    background: "#FFFFFF",
    width: ["288px", "458px", "458px", "288px", "416px", "544px"],
    transition: "all 0.3s ease-out",
    border: "1px solid #3B3B3B",
    boxShadow: "0px 0px 0px 1px #FFFFFF, 0px 0px 0px 3px #B9B9B9",
    flex: "auto",
    ".searchComponent": {
      flex: "1 !important"
    }
  },
  ".searchComponent": {
    ":placeholder-shown": {
      width: "76px"
    },
    ":not(:placeholder-shown)": {
      flex: "1 !important"
    }
  }
};
var noResults = {
  justifyContent: "center",
  alignContent: "center",
  padding: "12px"
};
var hitContentHighlighted = {
  ...hitContent,
  color: "#4A596B",
  width: "auto",
  background: "#FFE0EF"
};
var styles_default14 = {
  resultsOuterContainer,
  resultsInnerContainer,
  resultsBox,
  seeAll,
  hitBox,
  hitIcon,
  hitContentContainer,
  hitContent,
  hitContentSmall,
  hitBreadCrumb,
  hitBreadCrumbIn,
  hitBreadCrumbArrow,
  searchInput: searchInput2,
  searchIcon: searchIcon2,
  searchContainer,
  alignCenter,
  noResults,
  hitContentHighlighted
};

// src/components/search-input/search-box.tsx
import { jsx as jsx24, jsxs as jsxs18 } from "react/jsx-runtime";
var SearchBoxComponent = ({
  currentRefinement,
  refine,
  changeFocus
}) => {
  const router = useRouter4();
  const inputRef = useRef5(null);
  const { locale } = useContext7(LibraryContext);
  const handleClick = () => {
    if (inputRef.current != null)
      inputRef.current.focus();
  };
  const keyPressed = (e) => {
    if (e.key === "Enter") {
      router.push({
        pathname: "/search",
        query: { keyword: inputRef.current?.value }
      });
      inputRef.current?.blur();
      changeFocus(false);
    }
  };
  return /* @__PURE__ */ jsxs18(Flex12, { sx: styles_default14.searchContainer, onClick: handleClick, children: [
    /* @__PURE__ */ jsx24(search_icon_default, { sx: styles_default14.searchIcon }),
    /* @__PURE__ */ jsx24(
      "input",
      {
        style: styles_default14.searchInput,
        ref: inputRef,
        className: "searchComponent",
        type: "text",
        placeholder: messages[locale]["search_input.placeholder"],
        value: currentRefinement,
        "data-cy": "search",
        onKeyDown: (e) => keyPressed(e),
        onChange: (e) => refine(e.currentTarget.value)
      }
    )
  ] });
};
var SearchBox = connectSearchBox(SearchBoxComponent);
var search_box_default = SearchBox;

// src/components/search-input/results-box.tsx
import { useRouter as useRouter5 } from "next/router.js";
import Link7 from "next/link.js";
import {
  connectStateResults,
  connectHitInsights
} from "react-instantsearch-dom";
import aa from "search-insights";
import { Box as Box14, Flex as Flex14, IconCaret as IconCaret3, Text as Text9 } from "@vtex/brand-ui";

// src/components/icons/api-guides-icon.tsx
import { Icon as Icon8 } from "@vtex/brand-ui";
import { jsx as jsx25, jsxs as jsxs19 } from "react/jsx-runtime";
var APIGuidesIcon = (props) => /* @__PURE__ */ jsxs19(
  Icon8,
  {
    ...props,
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx25(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M24.5518 8.552L20.7812 4.78133C20.2812 4.28133 19.6025 4 18.8958 4H9.33317C7.85984 4 6.6665 5.19333 6.6665 6.66667V25.3333C6.6665 26.8067 7.85984 28 9.33317 28H22.6665C24.1398 28 25.3332 26.8067 25.3332 25.3333V10.4373C25.3332 9.73067 25.0518 9.052 24.5518 8.552V8.552Z",
          stroke: "#4A596B",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx25(
        "path",
        {
          d: "M25.3332 10.6667H19.9998C19.2638 10.6667 18.6665 10.0693 18.6665 9.33333V4",
          stroke: "#4A596B",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx25(
        "path",
        {
          d: "M10.6665 14.6667H18.6665",
          stroke: "#4A596B",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx25(
        "path",
        {
          d: "M10.6665 18.6667H18.6665",
          stroke: "#4A596B",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx25(
        "path",
        {
          d: "M10.6665 22.6667H16.4398",
          stroke: "#4A596B",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var api_guides_icon_default = APIGuidesIcon;

// src/components/icons/api-reference-icon.tsx
import { Icon as Icon9 } from "@vtex/brand-ui";
import { jsx as jsx26, jsxs as jsxs20 } from "react/jsx-runtime";
var APIReferenceIcon = (props) => /* @__PURE__ */ jsxs20(
  Icon9,
  {
    ...props,
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx26(
        "path",
        {
          d: "M24.7612 26.6668C26.4439 26.6668 27.8092 25.3028 27.8092 23.6188V17.5242L29.3332 16.0002L27.8092 14.4762V8.3815C27.8092 6.6975 26.4452 5.3335 24.7612 5.3335",
          stroke: "#4A596B",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx26(
        "path",
        {
          d: "M12 22.6668L20 9.3335",
          stroke: "#4A596B",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx26(
        "path",
        {
          d: "M7.2385 5.3335C5.5545 5.3335 4.1905 6.6975 4.1905 8.3815V14.4762L2.6665 16.0002L4.1905 17.5242V23.6188C4.1905 25.3028 5.5545 26.6668 7.2385 26.6668",
          stroke: "#4A596B",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var api_reference_icon_default = APIReferenceIcon;

// src/components/icons/app-development-icon.tsx
import { Icon as Icon10 } from "@vtex/brand-ui";
import { jsx as jsx27, jsxs as jsxs21 } from "react/jsx-runtime";
var AppDevelopmentIcon = (props) => /* @__PURE__ */ jsxs21(
  Icon10,
  {
    ...props,
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx27(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M4 9.36533L15.9827 14.732L28 9.36533L16.0173 4L4 9.36533Z",
          stroke: "#4A596B",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx27(
        "path",
        {
          d: "M20.5813 19.312L28 22.6347L15.9827 28L4 22.6347L11.4187 19.3213",
          stroke: "#4A596B",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx27(
        "path",
        {
          d: "M20.5813 12.6787L28 16L15.9827 21.3654L4 16L11.4187 12.688",
          stroke: "#4A596B",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var app_development_icon_default = AppDevelopmentIcon;

// src/components/icons/release-notes-icon.tsx
import { Icon as Icon11 } from "@vtex/brand-ui";
import { jsx as jsx28, jsxs as jsxs22 } from "react/jsx-runtime";
var ReleaseNotesIcon = (props) => /* @__PURE__ */ jsxs22(
  Icon11,
  {
    ...props,
    viewBox: "0 0 24 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx28(
        "path",
        {
          d: "M10 8.5V16.5",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx28(
        "path",
        {
          d: "M14 8.5V16.5",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx28(
        "path",
        {
          d: "M8 14.5H16",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx28(
        "path",
        {
          d: "M8 10.5H16",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx28(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M21 7.5V17.5C21 19.709 19.209 21.5 17 21.5H7C4.791 21.5 3 19.709 3 17.5V7.5C3 5.291 4.791 3.5 7 3.5H17C19.209 3.5 21 5.291 21 7.5Z",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var release_notes_icon_default = ReleaseNotesIcon;

// src/components/icons/storefront-development-icon.tsx
import { Icon as Icon12 } from "@vtex/brand-ui";
import { jsx as jsx29, jsxs as jsxs23 } from "react/jsx-runtime";
var StorefrontDevelopmentIcon = (props) => /* @__PURE__ */ jsxs23(
  Icon12,
  {
    ...props,
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx29(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M29.3332 6.67107V25.3324C29.3332 26.8057 28.1398 27.9991 26.6665 27.9991H5.33317C3.85984 27.9991 2.6665 26.8057 2.6665 25.3324V6.7164C2.6665 5.24573 3.85717 4.0524 5.32784 4.04973L26.6612 4.0044C28.1358 4.00173 29.3332 5.1964 29.3332 6.67107Z",
          stroke: "#4A596B",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx29(
        "path",
        {
          d: "M10.6667 7.98568C10.6627 7.98568 10.66 7.98835 10.66 7.99235C10.66 7.99635 10.6627 7.99902 10.6667 7.99902C10.6707 7.99902 10.6733 7.99635 10.6733 7.99235C10.6733 7.98835 10.6707 7.98568 10.6667 7.98568",
          stroke: "#4A596B",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx29(
        "path",
        {
          d: "M14.673 7.99252C14.669 7.99252 14.6663 7.99519 14.6663 7.99919C14.6663 8.00319 14.669 8.00585 14.673 8.00585C14.677 8.00585 14.6797 8.00319 14.6797 7.99919C14.6797 7.99519 14.677 7.99252 14.673 7.99252",
          stroke: "#4A596B",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx29(
        "path",
        {
          d: "M6.66667 7.99887C6.66267 7.99887 6.66 8.00153 6.66 8.00553C6.66 8.00953 6.66267 8.0122 6.66667 8.0122C6.67067 8.0122 6.67333 8.00953 6.67333 8.00553C6.67333 8.00153 6.67067 7.99887 6.66667 7.99887",
          stroke: "#4A596B",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx29(
        "path",
        {
          d: "M12.0667 14.999H20.6L19.6667 19.6657H13L11.6667 12.999H10",
          stroke: "#4A596B",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx29(
        "path",
        {
          d: "M19.0468 22.952C19.0728 22.9781 19.0728 23.0203 19.0468 23.0463C19.0208 23.0724 18.9786 23.0724 18.9525 23.0463C18.9265 23.0203 18.9265 22.9781 18.9525 22.952C18.9786 22.926 19.0208 22.926 19.0468 22.952",
          stroke: "#4A596B",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx29(
        "path",
        {
          d: "M13.7138 22.952C13.7398 22.9781 13.7398 23.0203 13.7138 23.0463C13.6878 23.0724 13.6456 23.0724 13.6195 23.0463C13.5935 23.0203 13.5935 22.9781 13.6195 22.952C13.6456 22.926 13.6878 22.926 13.7138 22.952",
          stroke: "#4A596B",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var storefront_development_icon_default = StorefrontDevelopmentIcon;

// src/components/icons/vtex-io-apps-icon.tsx
import { Icon as Icon13 } from "@vtex/brand-ui";
import { jsx as jsx30, jsxs as jsxs24 } from "react/jsx-runtime";
var VTEXIOAppsIcon = (props) => /* @__PURE__ */ jsxs24(
  Icon13,
  {
    ...props,
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx30(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M10.3333 15.999H6.66667C5.19333 15.999 4 14.8057 4 13.3324V6.66569C4 5.19236 5.19333 3.99902 6.66667 3.99902H10.3333C11.8067 3.99902 13 5.19236 13 6.66569V13.3324C13 14.8057 11.8067 15.999 10.3333 15.999Z",
          stroke: "#4A596B",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx30(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M10.3333 27.999H6.66667C5.19333 27.999 4 26.8057 4 25.3324V24.6657C4 23.1924 5.19333 21.999 6.66667 21.999H10.3333C11.8067 21.999 13 23.1924 13 24.6657V25.3324C13 26.8057 11.8067 27.999 10.3333 27.999Z",
          stroke: "#4A596B",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx30(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M21.6667 15.999H25.3333C26.8067 15.999 28 17.1924 28 18.6657V25.3324C28 26.8057 26.8067 27.999 25.3333 27.999H21.6667C20.1933 27.999 19 26.8057 19 25.3324V18.6657C19 17.1924 20.1933 15.999 21.6667 15.999Z",
          stroke: "#4A596B",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx30(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M21.6667 3.99902H25.3333C26.8067 3.99902 28 5.19236 28 6.66569V7.33236C28 8.80569 26.8067 9.99902 25.3333 9.99902H21.6667C20.1933 9.99902 19 8.80569 19 7.33236V6.66569C19 5.19236 20.1933 3.99902 21.6667 3.99902Z",
          stroke: "#4A596B",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var vtex_io_apps_icon_default = VTEXIOAppsIcon;

// src/components/icons/troubleshooting-icon.tsx
import { Icon as Icon14 } from "@vtex/brand-ui";
import { jsx as jsx31, jsxs as jsxs25 } from "react/jsx-runtime";
var TroubleshootingIcon = (props) => /* @__PURE__ */ jsxs25(
  Icon14,
  {
    ...props,
    viewBox: "0 0 36 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx31(
        "path",
        {
          d: "M16,11.4,13.734,9.331A6.487,6.487,0,0,0,5.366,1.366L9,5,5,9,1.366,5.366a6.49,6.49,0,0,0,7.965,8.368L11.2,15.779",
          fillRule: "evenodd",
          clipRule: "evenodd",
          stroke: "#4A596B",
          strokeWidth: "2"
        }
      ),
      /* @__PURE__ */ jsx31(
        "path",
        {
          d: "M18.642,23.943l5.842,6.4a2,2,0,0,0,2.892.066l3.038-3.038a2,2,0,0,0-.066-2.892L23.6,18.325",
          fillRule: "evenodd",
          clipRule: "evenodd",
          stroke: "#4A596B",
          strokeWidth: "2"
        }
      ),
      /* @__PURE__ */ jsx31(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          stroke: "#4A596B",
          strokeWidth: "2",
          d: "M30.634,5.366,27,9,23,5l3.634-3.634a6.49,6.49,0,0,0-8.368,7.965L1.652,24.484a2,2,0,0,0-.066,2.892l3.038,3.038a2,2,0,0,0,2.892-.066L22.669,13.734a6.487,6.487,0,0,0,7.965-8.368Z"
        }
      )
    ]
  }
);
var troubleshooting_icon_default = TroubleshootingIcon;

// src/components/icons/added-icon.tsx
import { Icon as Icon15 } from "@vtex/brand-ui";
import { jsx as jsx32, jsxs as jsxs26 } from "react/jsx-runtime";
var AddedIcon = (props) => /* @__PURE__ */ jsxs26(
  Icon15,
  {
    ...props,
    viewBox: "0 0 16 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx32("circle", { cx: "8", cy: "8", r: "8", fill: "#DFF1E0" }),
      /* @__PURE__ */ jsxs26("g", { clipPath: "url(#clip0_2354_76889)", children: [
        /* @__PURE__ */ jsx32(
          "path",
          {
            d: "M4.33398 8H11.6673",
            stroke: "#38853C",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx32(
          "path",
          {
            d: "M8 4.33594V11.6693",
            stroke: "#38853C",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx32(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.93359 8.00026C3.93359 7.77935 4.11268 7.60026 4.33359 7.60026H11.6669C11.8878 7.60026 12.0669 7.77935 12.0669 8.00026C12.0669 8.22117 11.8878 8.40026 11.6669 8.40026H4.33359C4.11268 8.40026 3.93359 8.22117 3.93359 8.00026Z",
            fill: "#38853C"
          }
        ),
        /* @__PURE__ */ jsx32(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.00026 3.93359C8.22117 3.93359 8.40026 4.11268 8.40026 4.33359V11.6669C8.40026 11.8878 8.22117 12.0669 8.00026 12.0669C7.77935 12.0669 7.60026 11.8878 7.60026 11.6669V4.33359C7.60026 4.11268 7.77935 3.93359 8.00026 3.93359Z",
            fill: "#38853C"
          }
        ),
        /* @__PURE__ */ jsx32(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.93359 8.00026C3.93359 7.77935 4.11268 7.60026 4.33359 7.60026H11.6669C11.8878 7.60026 12.0669 7.77935 12.0669 8.00026C12.0669 8.22117 11.8878 8.40026 11.6669 8.40026H4.33359C4.11268 8.40026 3.93359 8.22117 3.93359 8.00026Z",
            stroke: "#38853C",
            strokeWidth: "0.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx32(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.00026 3.93359C8.22117 3.93359 8.40026 4.11268 8.40026 4.33359V11.6669C8.40026 11.8878 8.22117 12.0669 8.00026 12.0669C7.77935 12.0669 7.60026 11.8878 7.60026 11.6669V4.33359C7.60026 4.11268 7.77935 3.93359 8.00026 3.93359Z",
            stroke: "#38853C",
            strokeWidth: "0.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ] }),
      /* @__PURE__ */ jsx32("defs", { children: /* @__PURE__ */ jsx32("clipPath", { id: "clip0_2354_76889", children: /* @__PURE__ */ jsx32(
        "rect",
        {
          width: "10.6667",
          height: "10.6667",
          fill: "white",
          transform: "translate(2.66699 3.66504)"
        }
      ) }) })
    ]
  }
);
var added_icon_default = AddedIcon;

// src/components/icons/deprecated-icon.tsx
import { Icon as Icon16 } from "@vtex/brand-ui";
import { jsx as jsx33, jsxs as jsxs27 } from "react/jsx-runtime";
var DeprecatedIcon = (props) => /* @__PURE__ */ jsxs27(
  Icon16,
  {
    ...props,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx33("circle", { cx: "8", cy: "8", r: "8", fill: "#E7E9EE" }),
      /* @__PURE__ */ jsx33(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M3.8335 8C3.8335 7.72386 4.05735 7.5 4.3335 7.5H11.6668C11.943 7.5 12.1668 7.72386 12.1668 8C12.1668 8.27614 11.943 8.5 11.6668 8.5H4.3335C4.05735 8.5 3.8335 8.27614 3.8335 8Z",
          fill: "black"
        }
      )
    ]
  }
);
var deprecated_icon_default = DeprecatedIcon;

// src/components/icons/fixed-icon.tsx
import { Icon as Icon17 } from "@vtex/brand-ui";
import { jsx as jsx34, jsxs as jsxs28 } from "react/jsx-runtime";
var FixedIcon = (props) => /* @__PURE__ */ jsxs28(
  Icon17,
  {
    ...props,
    viewBox: "0 0 16 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx34("circle", { cx: "8", cy: "8", r: "8", fill: "#DEECF7" }),
      /* @__PURE__ */ jsx34(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12.0206 5.31442C12.2158 5.50969 12.2158 5.82627 12.0205 6.02153L7.35387 10.688C7.15861 10.8832 6.84205 10.8832 6.64679 10.688L4.31345 8.35487C4.11818 8.15962 4.11817 7.84304 4.31342 7.64776C4.50868 7.45249 4.82526 7.45248 5.02053 7.64773L7.00032 9.62734L11.3134 5.31441C11.5087 5.11915 11.8253 5.11916 12.0206 5.31442Z",
          fill: "#2953B2",
          stroke: "#2953B2",
          strokeWidth: "0.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var fixed_icon_default = FixedIcon;

// src/components/icons/improved-icon.tsx
import { Icon as Icon18 } from "@vtex/brand-ui";
import { jsx as jsx35, jsxs as jsxs29 } from "react/jsx-runtime";
var ImprovedIcon = (props) => /* @__PURE__ */ jsxs29(
  Icon18,
  {
    ...props,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx35("circle", { cx: "8.5", cy: "8", r: "8", fill: "#FFEBD7" }),
      /* @__PURE__ */ jsx35(
        "path",
        {
          d: "M12.5 10L8.49511 6L4.5 10",
          stroke: "#D56A00",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var improved_icon_default = ImprovedIcon;

// src/components/icons/removed-icon.tsx
import { Icon as Icon19 } from "@vtex/brand-ui";
import { jsx as jsx36, jsxs as jsxs30 } from "react/jsx-runtime";
var RemovedIcon = (props) => /* @__PURE__ */ jsxs30(
  Icon19,
  {
    ...props,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx36("circle", { cx: "8.5", cy: "8", r: "8", fill: "#F8E3E3" }),
      /* @__PURE__ */ jsx36(
        "path",
        {
          d: "M5.83203 5.33594L11.1654 10.6693",
          stroke: "#CC3D3D",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx36(
        "path",
        {
          d: "M11.1654 5.33594L5.83203 10.6693",
          stroke: "#CC3D3D",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var removed_icon_default = RemovedIcon;

// src/utils/search-utils.ts
var getBreadcrumbs = (hit) => {
  const breadcrumbs = [];
  if (hit.doctype === "API Reference" && hit.doccategory)
    breadcrumbs.push(hit.doccategory);
  breadcrumbs.push(hit.doctitle);
  return breadcrumbs;
};
var getRelativeURL = (url) => {
  const relativeURL = url.replace(/^(?:\/\/|[^/]+)*\//, "");
  return "/" + relativeURL;
};
var getIconFromSection = (sections, id) => {
  return sections.flat().find((section) => section.id === id)?.Icon;
};
var actions = [
  {
    type: "added",
    title: "Added",
    Icon: added_icon_default
  },
  {
    type: "deprecated",
    title: "Deprecated",
    Icon: deprecated_icon_default
  },
  {
    type: "fixed",
    title: "Fixed",
    Icon: fixed_icon_default
  },
  {
    type: "improved",
    title: "Improved",
    Icon: improved_icon_default
  },
  {
    type: "removed",
    title: "Removed",
    Icon: removed_icon_default
  }
];
var getAction = (actionType) => {
  return actions.find((action) => action.type === actionType);
};
var getTitleById = (sections, id) => {
  return sections.flat().find((item2) => item2.id === id)?.title || id;
};

// src/components/search-input/customHighlight.tsx
import { useEffect as useEffect9, useRef as useRef6, useState as useState8 } from "react";
import { connectHighlight } from "react-instantsearch-dom";
import { Flex as Flex13, Text as Text8 } from "@vtex/brand-ui";
import { jsx as jsx37 } from "react/jsx-runtime";
var Highlight = ({
  highlight,
  attribute,
  hit,
  searchPage
}) => {
  const [parsedHit, setParsedHit] = useState8([]);
  const textContainer = useRef6(null);
  const hitHighlights = highlight({
    highlightProperty: "_highlightResult",
    attribute: hit.type != "content" ? `hierarchy.${hit.type}` : attribute,
    hit
  });
  const maxDescriptionSize = 700;
  const ellipsedContent = [];
  if (searchPage) {
    let charCount = 0;
    hitHighlights.forEach((part) => {
      if (maxDescriptionSize - charCount <= 0)
        return;
      if (part.value.length + charCount >= maxDescriptionSize) {
        part.value = part.value.slice(0, maxDescriptionSize - charCount - 3) + "...";
      }
      charCount += part.value.length;
      ellipsedContent.push(part);
    });
  }
  useEffect9(() => {
    if (searchPage)
      return;
    const titleSize = textContainer.current ? textContainer.current.offsetWidth / 7.75 : 40;
    const highlightParts = [];
    let highlightCount = 0, highlightLength = 0;
    hitHighlights.forEach((match, index) => {
      const isBetween = index > 0 && index < hitHighlights.length - 1 ? true : false;
      if (match.isHighlighted) {
        if (isBetween)
          highlightCount++;
        highlightCount++;
        highlightLength += match.value.length;
      } else {
        highlightParts.push({
          index,
          isBetween,
          size: match.value.length
        });
      }
    });
    highlightParts.sort(
      (a, b) => a.size - b.size
    );
    let sizeRemaining = titleSize - highlightLength;
    let size = sizeRemaining / (highlightCount || 1);
    highlightParts.forEach((match) => {
      const value = hitHighlights[match.index].value;
      if (match.isBetween) {
        if (match.size >= size * 2) {
          const reticences = (size * 2 - 3) / 2;
          hitHighlights[match.index].value = value.slice(0, reticences) + "..." + value.slice(value.length - reticences);
          sizeRemaining -= size * 2;
        } else {
          sizeRemaining -= match.size;
        }
        highlightCount -= 2;
      } else {
        if (match.size >= size) {
          if (match.index === 0)
            hitHighlights[match.index].value = "..." + value.slice(value.length - (size - 3));
          else
            hitHighlights[match.index].value = value.slice(0, size - 3) + "...";
          sizeRemaining -= size;
        } else {
          sizeRemaining -= match.size;
        }
        highlightCount -= 1;
      }
      size = sizeRemaining / highlightCount;
      hitHighlights[match.index].value = hitHighlights[match.index].value.replace(/\s+/g, "\xA0");
    });
    setParsedHit(hitHighlights);
  }, [hit, textContainer.current]);
  return /* @__PURE__ */ jsx37(
    Flex13,
    {
      ref: textContainer,
      className: "hit-content-title",
      sx: styles_default14.hitContentContainer,
      children: /* @__PURE__ */ jsx37(Text8, { sx: searchPage ? styles_default14.hitContent : styles_default14.hitContentSmall, children: (searchPage ? ellipsedContent : parsedHit).map(
        (part, index) => part.isHighlighted ? /* @__PURE__ */ jsx37("mark", { style: styles_default14.hitContentHighlighted, children: part.value }, index) : part.value
      ) })
    }
  );
};
var connectedHighlight = connectHighlight(Highlight);
var customHighlight_default = connectedHighlight;

// src/components/search-input/results-box.tsx
import { useContext as useContext8 } from "react";
import { Fragment as Fragment4, jsx as jsx38, jsxs as jsxs31 } from "react/jsx-runtime";
var Hit2 = ({ hit, insights }) => {
  const { sidebarSections } = useContext8(LibraryContext);
  const breadcrumbsList = getBreadcrumbs(hit);
  const DocIcon = getIconFromSection(sidebarSections, hit.doctype);
  return /* @__PURE__ */ jsx38(Link7, { href: getRelativeURL(hit.url), legacyBehavior: true, children: /* @__PURE__ */ jsx38(
    "a",
    {
      onClick: () => insights("clickedObjectIDsAfterSearch", {
        eventName: "Search in top bar",
        objectIDs: [hit.objectID]
      }),
      children: /* @__PURE__ */ jsxs31(Box14, { sx: styles_default14.hitBox, children: [
        /* @__PURE__ */ jsxs31(Flex14, { children: [
          DocIcon && /* @__PURE__ */ jsx38(DocIcon, { className: "hit-icon", sx: styles_default14.hitIcon }),
          /* @__PURE__ */ jsx38(Text9, { sx: styles_default14.hitContent, children: /* @__PURE__ */ jsx38(customHighlight_default, { hit, attribute: "content" }) })
        ] }),
        /* @__PURE__ */ jsxs31(Flex14, { sx: styles_default14.alignCenter, children: [
          /* @__PURE__ */ jsx38(Text9, { sx: styles_default14.hitBreadCrumbIn, children: `In ${hit.doctype}` }),
          breadcrumbsList.length > 0 && /* @__PURE__ */ jsx38(IconCaret3, { direction: "right", sx: styles_default14.hitBreadCrumbArrow }),
          breadcrumbsList.map((filter, index) => /* @__PURE__ */ jsxs31(Flex14, { sx: styles_default14.alignCenter, children: [
            /* @__PURE__ */ jsx38(Text9, { sx: styles_default14.hitBreadCrumb, children: filter }),
            index < breadcrumbsList.length - 1 ? /* @__PURE__ */ jsx38(IconCaret3, { direction: "right", sx: styles_default14.hitBreadCrumbArrow }) : null
          ] }, `${filter}${index}`))
        ] })
      ] })
    }
  ) });
};
var HitWithInsights = connectHitInsights(aa)(Hit2);
var HitsBox = connectStateResults(
  ({ searchState, searchResults, changeFocus }) => {
    const router = useRouter5();
    const { locale } = useContext8(LibraryContext);
    const seeAllSubmit = (keyword) => {
      router.push({
        pathname: "/search",
        query: { keyword }
      });
      changeFocus(false);
    };
    const setQueryIDAndPosition = (hit, index) => {
      return {
        ...hit,
        __queryID: searchResults.queryID || "",
        __position: searchResults.hitsPerPage * searchResults.page + index + 1
      };
    };
    return /* @__PURE__ */ jsx38(Fragment4, { children: searchResults && /* @__PURE__ */ jsx38(Box14, { sx: styles_default14.resultsOuterContainer, children: /* @__PURE__ */ jsxs31(Box14, { sx: styles_default14.resultsInnerContainer, children: [
      /* @__PURE__ */ jsx38(Box14, { sx: searchResults.hits.length && styles_default14.resultsBox, children: searchResults.hits.map(
        (searchResult, index) => index < 7 && /* @__PURE__ */ jsx38(
          Box14,
          {
            onClick: () => changeFocus(false),
            children: /* @__PURE__ */ jsx38(
              HitWithInsights,
              {
                hit: setQueryIDAndPosition(searchResult, index)
              }
            )
          },
          `matched-result-${index}`
        )
      ) }),
      searchResults.hits.length > 7 && /* @__PURE__ */ jsx38(
        Box14,
        {
          sx: styles_default14.seeAll,
          onClick: () => seeAllSubmit(searchState.query || ""),
          children: /* @__PURE__ */ jsx38(Text9, { children: messages[locale]["search_input.see_all"] || "See all results" })
        }
      ),
      !searchResults.hits.length && /* @__PURE__ */ jsx38(Flex14, { sx: styles_default14.noResults, children: /* @__PURE__ */ jsx38(Text9, { children: messages[locale]["search_input.empty"] || "No results found. Try different search terms." }) })
    ] }) }) });
  }
);
var results_box_default = HitsBox;

// src/components/search-input/index.tsx
import { Box as Box15 } from "@vtex/brand-ui";
import { useContext as useContext9, useRef as useRef7, useState as useState9 } from "react";

// src/utils/config/search-config.ts
var import_lite = __toESM(require_lite());
import aa2 from "search-insights";
var searchClient = {};
var searchIndex = "";
var createAlgoliaClient = (config) => {
  const {
    apiKey,
    appId,
    index,
    algoliaOptions,
    customOptions,
    instantSearchConfigs,
    useLanguageFilter = true
  } = config;
  searchIndex = index;
  aa2("init", {
    appId: appId || "",
    apiKey: apiKey || "",
    useCookie: false
  });
  aa2("getUserToken", null, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
  const algoliaClient = (0, import_lite.default)(appId || "", apiKey || "", algoliaOptions);
  searchClient = {
    ...algoliaClient,
    ...customOptions,
    instantSearchConfigs,
    useLanguageFilter,
    search(requests) {
      if (requests.every(({ params }) => !params?.query))
        return;
      return algoliaClient.search(requests);
    }
  };
};
var search_config_default = createAlgoliaClient;

// src/components/search-input/index.tsx
import { jsx as jsx39, jsxs as jsxs32 } from "react/jsx-runtime";
function SearchInput() {
  const { locale } = useContext9(LibraryContext);
  const [focusOut, setfocusOut] = useState9({
    modaltoggle: true
  });
  const resultsBox2 = useRef7();
  useClickOutside(resultsBox2, setfocusOut);
  const changeFocus = (value) => {
    setfocusOut({ modaltoggle: value });
  };
  return /* @__PURE__ */ jsxs32(InstantSearch, { searchClient, indexName: searchIndex, children: [
    searchClient.instantSearchConfigs && /* @__PURE__ */ jsx39(Configure, { ...searchClient.instantSearchConfigs }),
    searchClient.useLanguageFilter && /* @__PURE__ */ jsx39(
      Configure,
      {
        clickAnalytics: true,
        facetFilters: [`language:${locale}`]
      }
    ),
    !searchClient.useLanguageFilter && /* @__PURE__ */ jsx39(Configure, { clickAnalytics: true }),
    /* @__PURE__ */ jsxs32(Box15, { onFocus: () => setfocusOut({ modaltoggle: true }), ref: resultsBox2, children: [
      /* @__PURE__ */ jsx39(search_box_default, { changeFocus }),
      focusOut.modaltoggle && /* @__PURE__ */ jsx39(results_box_default, { changeFocus })
    ] })
  ] });
}

// src/lib/hamburger-menu/index.tsx
import { jsx as jsx40, jsxs as jsxs33 } from "react/jsx-runtime";
var HamburgerMenu = ({ parentsArray = [] }) => {
  const context = useContext10(LibraryContext);
  const {
    sidebarDataMaster,
    sidebarSectionHidden,
    activeSectionName,
    setActiveSectionName,
    setSidebarSectionHidden,
    hamburguerSections
  } = context;
  const isDocument = (sections, documentID) => {
    let isDoc = false;
    if (Array.isArray(sections)) {
      isDoc = sections.find((section) => section.documentation === documentID);
    }
    return isDoc;
  };
  updateOpenPage({ parentsArray, context });
  return /* @__PURE__ */ jsx40(Header.ActionButton, { children: /* @__PURE__ */ jsx40(VtexHamburgerMenu, { sx: styles_default12.hamburgerContainer, children: /* @__PURE__ */ jsx40(VtexHamburgerMenu.Menu, { sx: styles_default12.innerHambugerContainer, children: /* @__PURE__ */ jsxs33(Box16, { sx: styles_default12.menuContainer, children: [
    /* @__PURE__ */ jsxs33(Box16, { sx: styles_default12.cardContainer, children: [
      /* @__PURE__ */ jsx40(Box16, { sx: styles_default12.hamburgerSearchContainer, children: /* @__PURE__ */ jsx40(SearchInput, {}) }),
      hamburguerSections.map((section, id) => /* @__PURE__ */ jsx40(
        Box16,
        {
          sx: id > 0 ? styles_default12.updatesContainer : styles_default12.documentationContainer,
          "data-cy": "dropdown-menu-first-section",
          children: section.map((card) => /* @__PURE__ */ jsxs33(Box16, { sx: styles_default12.innerCardContainer, children: [
            /* @__PURE__ */ jsx40(documentation_card_default, { containerType: "mobile", ...card }),
            isDocument(sidebarDataMaster, card.id) ? /* @__PURE__ */ jsx40(
              Button4,
              {
                "aria-label": "Open sidebar",
                size: "regular",
                variant: "tertiary",
                icon: () => /* @__PURE__ */ jsx40(IconCaret4, { direction: "right", size: 32 }),
                sx: activeSectionName === card.id && !sidebarSectionHidden ? styles_default12.arrowIconActive : styles_default12.arrowIcon,
                onClick: () => {
                  setActiveSectionName(card.id);
                  setSidebarSectionHidden(false);
                }
              }
            ) : null
          ] }, card.title))
        },
        id
      ))
    ] }),
    /* @__PURE__ */ jsx40(
      Box16,
      {
        className: sidebarSectionHidden || !activeSectionName ? "" : "menuHidden",
        sx: styles_default12.sideMenuContainer,
        children: activeSectionName ? /* @__PURE__ */ jsx40(
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
import { Flex as Flex16, Text as Text11, Link as Link8 } from "@vtex/brand-ui";

// src/components/icons/edit-icon.tsx
import { Icon as Icon20 } from "@vtex/brand-ui";
import { jsx as jsx41, jsxs as jsxs34 } from "react/jsx-runtime";
var EditIcon = (props) => /* @__PURE__ */ jsxs34(
  Icon20,
  {
    ...props,
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx41(
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
      /* @__PURE__ */ jsx41(
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
import { Icon as Icon21 } from "@vtex/brand-ui";
import { jsx as jsx42, jsxs as jsxs35 } from "react/jsx-runtime";
var LikeIcon = (props) => /* @__PURE__ */ jsxs35(
  Icon21,
  {
    ...props,
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx42(
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
      /* @__PURE__ */ jsx42(
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
import { Icon as Icon22 } from "@vtex/brand-ui";
import { jsx as jsx43, jsxs as jsxs36 } from "react/jsx-runtime";
var LikeSelectedIcon = (props) => /* @__PURE__ */ jsxs36(
  Icon22,
  {
    ...props,
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx43(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M8 10.5719L11.649 5.82094C12.328 4.93594 13.654 4.91394 14.363 5.77494C14.628 6.09594 14.772 6.49994 14.772 6.91594V10.1869H17.868C18.469 10.1869 19.03 10.4869 19.364 10.9859L19.693 11.4769C19.988 11.9179 20.074 12.4669 19.927 12.9759L18.568 17.6979C18.346 18.4689 17.641 18.9999 16.839 18.9999H10.55C10.05 18.9999 9.572 18.7919 9.232 18.4259L8 17.0999",
          fill: "#A1A8B3"
        }
      ),
      /* @__PURE__ */ jsx43(
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
import { useContext as useContext11, useEffect as useEffect10, useState as useState11 } from "react";

// src/lib/feedback-section/styles.ts
var container5 = ({ small } = {}) => ({
  width: "100%",
  flexDirection: small ? "column" : ["column", "row"],
  alignItems: small ? "flex-start" : "center",
  alignContent: ["initial", "space-between"],
  justifyContent: ["initial", "space-between"],
  marginTop: small ? "0px" : "32px",
  marginBottom: small ? "0px" : "16px",
  gap: small ? "8px" : "0px"
});
var question = ({ small } = {}) => ({
  fontSize: small ? "12px" : "16px",
  lineHeight: "18px",
  color: "#4A596B"
});
var iconsContainer = ({ small } = {}) => ({
  display: "flex",
  alignItems: "center",
  gap: small ? "0px" : "4px",
  ml: small ? "3px" : "6px"
});
var likeContainer = {
  paddingBottom: ["16px", "0"],
  borderBottom: ["1px solid #E7E9EE", "none"],
  mt: ["8px", "0"],
  mb: ["16px", "0"],
  width: ["100%", "auto"],
  justifyContent: ["center", "initial"],
  alignItems: "center"
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
var box = ({ small } = {}) => ({
  alignItems: "center",
  color: "muted.0",
  fontSize: small ? "12px" : "16px",
  lineHeight: "22px"
});
var disabled = {
  display: "none !important"
};
var editContainer = ({ small } = {}) => ({
  ...box({ small }),
  ...button,
  ":hover": {
    color: "#000711 !important"
  },
  // ml: ['0', 'auto'],
  color: "#4A596B !important",
  display: "flex"
});
var editIcon = { mr: "4px" };
var shareButton = {
  // ml: ['0', 'auto'],
};
var styles_default15 = {
  disabled,
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
  selectedButton,
  shareButton,
  iconsContainer
};

// src/components/share-button/index.tsx
import { Box as Box17, Button as Button5, Flex as Flex15, Text as Text10 } from "@vtex/brand-ui";

// src/components/icons/facebook-icon.tsx
import { Icon as Icon23 } from "@vtex/brand-ui";
import { jsx as jsx44 } from "react/jsx-runtime";
var FacebookIcon = (props) => /* @__PURE__ */ jsx44(
  Icon23,
  {
    ...props,
    viewBox: "0 0 8 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx44(
      "path",
      {
        d: "M7.47581 8.93204L7.89039 6.05825H5.29681V4.19417C5.29681 3.40778 5.65844 2.64078 6.8201 2.64078H8V0.194175C8 0.194175 6.92967 0 5.90684 0C3.76989 0 2.37444 1.37668 2.37444 3.86796V6.05825H0V8.93204H2.37444V15.8796C2.85114 15.9592 3.33882 16 3.83563 16C4.33243 16 4.82011 15.9592 5.29681 15.8796V8.93204H7.47581Z",
        fill: "currentcolor"
      }
    )
  }
);
var facebook_icon_default = FacebookIcon;

// src/components/icons/linkedin-icon.tsx
import { Icon as Icon24 } from "@vtex/brand-ui";
import { jsx as jsx45 } from "react/jsx-runtime";
var LinkedinIcon = (props) => /* @__PURE__ */ jsx45(
  Icon24,
  {
    ...props,
    viewBox: "0 0 26 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx45(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.49092 2.79706C6.49092 4.35191 5.32054 5.59605 3.4413 5.59605H3.40686C1.59747 5.59605 0.427734 4.35191 0.427734 2.79706C0.427734 1.20932 1.6331 0 3.47682 0C5.32054 0 6.45594 1.20932 6.49092 2.79706ZM6.13595 7.80637V23.9997H0.746429V7.80637H6.13595ZM25.5724 23.9996L25.5726 14.7149C25.5726 9.74099 22.9138 7.42607 19.3673 7.42607C16.5058 7.42607 15.2247 8.9978 14.5093 10.1004V7.80675H9.11917C9.1902 9.32624 9.11917 24 9.11917 24H14.5093V14.9564C14.5093 14.4724 14.5443 13.9896 14.6868 13.6431C15.0763 12.6763 15.9632 11.6752 17.4522 11.6752C19.4032 11.6752 20.1831 13.1601 20.1831 15.3362V23.9996H25.5724Z",
        fill: "currentcolor"
      }
    )
  }
);
var linkedin_icon_default = LinkedinIcon;

// src/components/icons/share-icon.tsx
import { Icon as Icon25 } from "@vtex/brand-ui";
import { jsx as jsx46, jsxs as jsxs37 } from "react/jsx-runtime";
var ShareIcon = (props) => /* @__PURE__ */ jsxs37(
  Icon25,
  {
    ...props,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx46("path", { d: "m0 0h24v24h-24z", opacity: "0", stroke: "currentColor" }),
      /* @__PURE__ */ jsx46("path", { d: "m18 15a3 3 0 0 0 -2.1.86l-7.9-3.52c0-.12 0-.22 0-.34s0-.22 0-.33l7.9-3.53a3 3 0 1 0 -.9-2.14v.34l-7.9 3.52a3 3 0 1 0 0 4.28l7.9 3.53v.33a3 3 0 1 0 3-3z", fill: "currentColor" })
    ]
  }
);
var share_icon_default = ShareIcon;

// src/components/icons/twitter-icon.tsx
import { Icon as Icon26 } from "@vtex/brand-ui";
import { jsx as jsx47 } from "react/jsx-runtime";
var TwitterIcon = (props) => /* @__PURE__ */ jsx47(
  Icon26,
  {
    ...props,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx47(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.99386 8.11479L0 0.666748H4.74756L8.44753 5.27015L12.4004 0.687475H15.0151L9.71175 6.84307L16 14.6667H11.2666L7.2603 9.68846L2.98317 14.6529H0.354296L5.99386 8.11479ZM11.9565 13.2868L2.91105 2.04674H4.0571L13.0912 13.2868H11.9565Z",
        fill: "currentcolor"
      }
    )
  }
);
var twitter_icon_default = TwitterIcon;

// src/components/share-button/index.tsx
import { useRef as useRef8, useState as useState10 } from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton
} from "react-share";

// src/components/share-button/styles.ts
var container6 = {
  position: "relative",
  height: "24px"
};
var button2 = {
  cursor: "pointer",
  textTransform: "none",
  fontSize: "16px",
  lineHeight: "18px",
  color: "#4A596B",
  width: "24px",
  height: "24px",
  transition: "0.3s",
  ":hover": {
    color: "#000711 !important",
    textDecoration: "none"
  },
  alignItems: "start"
};
var shareIcon = {
  marginRight: "4px"
};
var innerButton = {
  gap: "16px",
  color: "#A1AAB7",
  cursor: "pointer",
  transition: "0.3s",
  ":hover": {
    color: "#4A4A4A"
  },
  alignItems: "center"
};
var innerContainer = {
  position: "absolute",
  backgroundColor: "white",
  flexDirection: "column",
  top: "100%",
  right: "0",
  mt: "8px",
  padding: "16px",
  gap: "16px",
  boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.1)",
  borderRadius: "5px",
  ":before": {
    content: "''",
    position: "absolute",
    top: "-8px",
    right: "8px",
    borderLeft: "8px solid transparent",
    borderRight: "8px solid transparent",
    borderBottom: "8px solid white",
    boxShadow: "0 16px 10px -17px rgba(0, 0, 0, 0.5)"
  }
};
var divider = {
  borderBottom: "1px solid #E7E9EE"
};
var styles_default16 = {
  container: container6,
  button: button2,
  shareIcon,
  innerButton,
  innerContainer,
  divider
};

// src/components/icons/email-icon.tsx
import { Icon as Icon27 } from "@vtex/brand-ui";
import { jsx as jsx48 } from "react/jsx-runtime";
var EmailIcon = (props) => /* @__PURE__ */ jsx48(
  Icon27,
  {
    ...props,
    width: "25",
    height: "25",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx48(
      "path",
      {
        d: "M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24H18V21.6H12C6.792 21.6 2.4 17.208 2.4 12C2.4 6.792 6.792 2.4 12 2.4C17.208 2.4 21.6 6.792 21.6 12V13.716C21.6 14.664 20.748 15.6 19.8 15.6C18.852 15.6 18 14.664 18 13.716V12C18 8.688 15.312 6 12 6C8.688 6 6 8.688 6 12C6 15.312 8.688 18 12 18C13.656 18 15.168 17.328 16.248 16.236C17.028 17.304 18.372 18 19.8 18C22.164 18 24 16.08 24 13.716V12C24 5.376 18.624 0 12 0ZM12 15.6C10.008 15.6 8.4 13.992 8.4 12C8.4 10.008 10.008 8.4 12 8.4C13.992 8.4 15.6 10.008 15.6 12C15.6 13.992 13.992 15.6 12 15.6Z",
        fill: "currentcolor"
      }
    )
  }
);
var email_icon_default = EmailIcon;

// src/components/icons/link-icon.tsx
import { Icon as Icon28 } from "@vtex/brand-ui";
import { jsx as jsx49, jsxs as jsxs38 } from "react/jsx-runtime";
var LinkIcon = (props) => /* @__PURE__ */ jsxs38(
  Icon28,
  {
    ...props,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx49(
        "path",
        {
          d: "M6.6665 8.66672C6.95281 9.04948 7.31808 9.36618 7.73754 9.59535C8.157 9.82452 8.62084 9.9608 9.0976 9.99495C9.57437 10.0291 10.0529 9.9603 10.5007 9.79325C10.9486 9.62619 11.3552 9.36477 11.6932 9.02672L13.6932 7.02672C14.3004 6.39805 14.6363 5.55604 14.6288 4.68205C14.6212 3.80806 14.2706 2.97202 13.6526 2.354C13.0345 1.73597 12.1985 1.38541 11.3245 1.37781C10.4505 1.37022 9.60851 1.7062 8.97984 2.31339L7.83317 3.45339",
          stroke: "currentcolor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx49(
        "path",
        {
          d: "M9.33347 7.33332C9.04716 6.95057 8.68189 6.63387 8.26243 6.40469C7.84297 6.17552 7.37913 6.03924 6.90237 6.0051C6.4256 5.97095 5.94707 6.03974 5.49924 6.2068C5.0514 6.37386 4.64472 6.63527 4.3068 6.97332L2.3068 8.97332C1.69961 9.60199 1.36363 10.444 1.37122 11.318C1.37881 12.192 1.72938 13.028 2.3474 13.646C2.96543 14.2641 3.80147 14.6146 4.67546 14.6222C5.54945 14.6298 6.39146 14.2938 7.02013 13.6867L8.16013 12.5467",
          stroke: "currentcolor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var link_icon_default = LinkIcon;

// src/components/share-button/index.tsx
import { jsx as jsx50, jsxs as jsxs39 } from "react/jsx-runtime";
var ShareButton = ({ url, sx = {} }) => {
  const [isOpen, setIsOpen] = useState10(false);
  const containerRef = useRef8();
  useClickOutside(containerRef, () => setIsOpen(false));
  const handleCopyLink = async () => {
    try {
      if (window)
        await navigator.clipboard.writeText(window.location.href);
    } catch (error) {
      console.error("Error copying link to clipboard:", error);
    }
  };
  return /* @__PURE__ */ jsxs39(Flex15, { sx: { ...styles_default16.container, ...sx }, ref: containerRef, children: [
    /* @__PURE__ */ jsxs39(
      Button5,
      {
        sx: styles_default16.button,
        variant: "tertiary",
        onClick: () => setIsOpen(!isOpen),
        children: [
          /* @__PURE__ */ jsx50(share_icon_default, { sx: styles_default16.shareIcon, size: 24 }),
          " Share"
        ]
      }
    ),
    isOpen && /* @__PURE__ */ jsxs39(Flex15, { sx: styles_default16.innerContainer, children: [
      /* @__PURE__ */ jsxs39(Flex15, { sx: styles_default16.innerButton, onClick: handleCopyLink, children: [
        /* @__PURE__ */ jsx50(link_icon_default, { size: 16 }),
        /* @__PURE__ */ jsx50(Text10, { children: "Copy link" })
      ] }),
      /* @__PURE__ */ jsx50(Box17, { sx: styles_default16.divider }),
      /* @__PURE__ */ jsx50(EmailShareButton, { url, children: /* @__PURE__ */ jsxs39(Flex15, { sx: styles_default16.innerButton, onClick: handleCopyLink, children: [
        /* @__PURE__ */ jsx50(email_icon_default, { size: 16 }),
        /* @__PURE__ */ jsx50(Text10, { children: "E-mail" })
      ] }) }),
      /* @__PURE__ */ jsx50(TwitterShareButton, { url, children: /* @__PURE__ */ jsxs39(Flex15, { sx: styles_default16.innerButton, children: [
        /* @__PURE__ */ jsx50(twitter_icon_default, { size: 16 }),
        /* @__PURE__ */ jsx50(Text10, { children: "Twitter" })
      ] }) }),
      /* @__PURE__ */ jsx50(FacebookShareButton, { url, children: /* @__PURE__ */ jsxs39(Flex15, { sx: styles_default16.innerButton, children: [
        /* @__PURE__ */ jsx50(facebook_icon_default, { size: 16 }),
        /* @__PURE__ */ jsx50(Text10, { children: "Facebook" })
      ] }) }),
      /* @__PURE__ */ jsx50(LinkedinShareButton, { url, children: /* @__PURE__ */ jsxs39(Flex15, { sx: styles_default16.innerButton, children: [
        /* @__PURE__ */ jsx50(linkedin_icon_default, { size: 16 }),
        /* @__PURE__ */ jsx50(Text10, { children: "LinkedIn" })
      ] }) })
    ] })
  ] });
};
var share_button_default = ShareButton;

// src/lib/feedback-section/index.tsx
import { jsx as jsx51, jsxs as jsxs40 } from "react/jsx-runtime";
var FeedbackSection = ({
  slug,
  urlToEdit,
  suggestEdits = true,
  shareButton: shareButton2 = false,
  sendFeedback,
  small = false
}) => {
  const [feedback, setFeedback] = useState11(void 0);
  const { locale } = useContext11(LibraryContext);
  useEffect10(() => {
    setFeedback(void 0);
  }, [slug]);
  const handleSend = async (liked) => {
    if (feedback !== void 0)
      return;
    setFeedback(liked);
    try {
      await sendFeedback(liked);
    } catch (e) {
      setFeedback(void 0);
    }
  };
  return /* @__PURE__ */ jsxs40(Flex16, { sx: styles_default15.container({ small }), "data-cy": "feedback-section", children: [
    /* @__PURE__ */ jsxs40(Flex16, { sx: styles_default15.likeContainer, children: [
      /* @__PURE__ */ jsx51(Text11, { sx: styles_default15.question({ small }), children: feedback !== void 0 ? messages[locale]["feedback_section.response"] : messages[locale]["feedback_section.question"] }),
      /* @__PURE__ */ jsxs40(Flex16, { sx: styles_default15.iconsContainer({ small }), children: [
        /* @__PURE__ */ jsxs40(
          Flex16,
          {
            sx: feedback === void 0 ? styles_default15.button : feedback === true ? styles_default15.selectedButton : styles_default15.disabled,
            onClick: () => handleSend(true),
            role: "button",
            "aria-pressed": feedback === true,
            "data-cy": "feedback-section-like",
            children: [
              feedback === true ? /* @__PURE__ */ jsx51(like_selected_icon_default, { size: small ? 18 : 24, sx: styles_default15.likeIcon }) : /* @__PURE__ */ jsx51(like_icon_default, { size: small ? 18 : 24, sx: styles_default15.likeIcon }),
              !small && /* @__PURE__ */ jsx51(Text11, { children: messages[locale]["feedback_section.positive"] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs40(
          Flex16,
          {
            sx: feedback === void 0 ? styles_default15.button : feedback === false ? styles_default15.selectedButton : styles_default15.disabled,
            onClick: () => handleSend(false),
            role: "button",
            "aria-pressed": feedback === false,
            "data-cy": "feedback-section-dislike",
            children: [
              feedback === false ? /* @__PURE__ */ jsx51(
                like_selected_icon_default,
                {
                  size: small ? 18 : 24,
                  sx: styles_default15.dislikeIcon
                }
              ) : /* @__PURE__ */ jsx51(like_icon_default, { size: small ? 18 : 24, sx: styles_default15.dislikeIcon }),
              !small && /* @__PURE__ */ jsx51(Text11, { children: messages[locale]["feedback_section.negative"] })
            ]
          }
        )
      ] })
    ] }),
    suggestEdits && /* @__PURE__ */ jsxs40(
      Link8,
      {
        target: "_blank",
        rel: "noopener noreferrer",
        href: urlToEdit,
        sx: styles_default15.editContainer({ small }),
        children: [
          /* @__PURE__ */ jsx51(edit_icon_default, { size: small ? 18 : 24, sx: styles_default15.editIcon }),
          /* @__PURE__ */ jsx51(Text11, { children: messages[locale]["feedback_section.edit"] })
        ]
      }
    ),
    shareButton2 && /* @__PURE__ */ jsx51(share_button_default, { url: window.location.href, sx: styles_default15.shareButton })
  ] });
};
var feedback_section_default = FeedbackSection;

// src/lib/search/index.tsx
import { Box as Box23, Flex as Flex21 } from "@vtex/brand-ui";

// src/components/search-sections/index.tsx
import { Box as Box19 } from "@vtex/brand-ui";

// src/components/search-section/index.tsx
import { Box as Box18, Flex as Flex17, Text as Text12 } from "@vtex/brand-ui";
import { useContext as useContext12, useEffect as useEffect11 } from "react";

// src/components/search-section/styles.ts
var sectionContainer = {
  justifyContent: "space-between",
  padding: "8px",
  mb: "8px",
  cursor: "pointer",
  ":active, :hover": {
    backgroundColor: "#F8F7FC",
    borderRadius: "4px",
    ".search-section-title": {
      color: "#000711"
    },
    ".search-section-count": {
      background: "#E7E9EE"
    }
  }
};
var sectionIconTitleBox = {
  alignItems: "center"
};
var sectionIcon = {
  width: "16px",
  height: "16px",
  minWidth: "16px",
  minHeight: "16px",
  mr: "8px"
};
var sectionTitle = {
  fontSize: "12px",
  lineHeight: "16px"
};
var sectionTitleActive = {
  ...sectionTitle,
  color: "#142032",
  fontWeight: "600"
};
var sectionCount = {
  background: "#F8F7FC",
  borderRadius: "24px",
  width: "auto",
  textAlign: "center",
  px: "8px",
  fontSize: "12px",
  lineHeight: "16px"
};
var allResultsText = {
  ...sectionTitle,
  ml: "24px"
};
var allResultsTextActive = {
  ...allResultsText,
  fontWeight: "bold",
  color: "#0C1522"
};
var styles_default17 = {
  sectionContainer,
  sectionIconTitleBox,
  sectionIcon,
  sectionTitle,
  sectionTitleActive,
  sectionCount,
  allResultsText,
  allResultsTextActive
};

// src/components/search-section/index.tsx
import { useRouter as useRouter6 } from "next/router.js";

// src/utils/context/search.tsx
import {
  createContext as createContext2,
  useState as useState12
} from "react";
import { jsx as jsx52 } from "react/jsx-runtime";
var SearchContext = createContext2({
  filterSelectedSection: "",
  changeFilterSelectedSection: () => void 0,
  ocurrenceCount: {},
  updateOcurrenceCount: () => void 0
});
var SearchContextProvider = ({ children }) => {
  const [filterSelectedSection, changeFilterSelectedSection] = useState12("");
  const [ocurrenceCount, changeOcurrenceCount] = useState12({});
  const updateOcurrenceCount = (resultsData) => {
    changeOcurrenceCount(resultsData);
  };
  return /* @__PURE__ */ jsx52(
    SearchContext.Provider,
    {
      value: {
        filterSelectedSection,
        changeFilterSelectedSection,
        ocurrenceCount,
        updateOcurrenceCount
      },
      children
    }
  );
};
var search_default = SearchContextProvider;

// src/components/search-section/index.tsx
import { jsx as jsx53, jsxs as jsxs41 } from "react/jsx-runtime";
var SearchSection = ({ dataElement, index }) => {
  const router = useRouter6();
  const { filterSelectedSection, ocurrenceCount, changeFilterSelectedSection } = useContext12(SearchContext);
  const { locale } = useContext12(LibraryContext);
  const updateFilter = (value) => {
    router.query.filter = value;
    changeFilterSelectedSection(value);
  };
  useEffect11(() => {
    updateFilter("");
  }, [router.query]);
  return !dataElement ? /* @__PURE__ */ jsxs41(Flex17, { sx: styles_default17.sectionContainer, onClick: () => updateFilter(""), children: [
    /* @__PURE__ */ jsx53(
      Text12,
      {
        className: "search-section-title",
        sx: filterSelectedSection ? styles_default17.allResultsText : styles_default17.allResultsTextActive,
        children: messages[locale]["search_results.all"] || "All results"
      }
    ),
    /* @__PURE__ */ jsx53(Box18, { className: "search-section-count", sx: styles_default17.sectionCount, children: ocurrenceCount[""] })
  ] }) : /* @__PURE__ */ jsxs41(
    Flex17,
    {
      sx: styles_default17.sectionContainer,
      onClick: () => updateFilter(dataElement.id),
      children: [
        /* @__PURE__ */ jsxs41(Flex17, { sx: styles_default17.sectionIconTitleBox, children: [
          /* @__PURE__ */ jsx53(dataElement.Icon, { sx: styles_default17.sectionIcon }),
          /* @__PURE__ */ jsx53(
            Text12,
            {
              className: "search-section-title",
              sx: filterSelectedSection === dataElement.id ? styles_default17.sectionTitleActive : styles_default17.sectionTitle,
              children: dataElement.title
            }
          )
        ] }),
        /* @__PURE__ */ jsx53(Box18, { className: "search-section-count", sx: styles_default17.sectionCount, children: ocurrenceCount[dataElement.id] || 0 })
      ]
    },
    `search-section-${dataElement.id}${index}`
  );
};
var search_section_default = SearchSection;

// src/components/search-sections/styles.ts
var container7 = {
  display: ["none", "none", "none", "initial"],
  height: "100%",
  width: "242px",
  border: "1px solid #E7E9EE",
  borderRadius: "4px",
  mr: ["32px", "32px", "32px", "32px", "32px", "32px", "64px"],
  mt: "96px"
};
var notesSection = {
  px: "8px",
  paddingTop: "8px"
};
var docsSection = {
  ...notesSection,
  borderBottom: "1px solid #E7E9EE"
};
var styles_default18 = {
  container: container7,
  notesSection,
  docsSection
};

// src/components/search-sections/index.tsx
import { useContext as useContext13 } from "react";
import { jsx as jsx54, jsxs as jsxs42 } from "react/jsx-runtime";
var SearchSections = () => {
  const { sidebarSections } = useContext13(LibraryContext);
  const internalOnlySections = sidebarSections.map(
    (section) => section.filter((item2) => !item2.isExternalLink)
  );
  return /* @__PURE__ */ jsx54(Box19, { sx: styles_default18.container, children: internalOnlySections.map((sections, id) => /* @__PURE__ */ jsxs42(
    Box19,
    {
      sx: id < internalOnlySections.length - 1 ? styles_default18.docsSection : styles_default18.notesSection,
      children: [
        id === 0 && /* @__PURE__ */ jsx54(search_section_default, { dataElement: null }),
        sections.map((section, index) => /* @__PURE__ */ jsx54(
          search_section_default,
          {
            dataElement: section,
            index
          },
          `search-section-docs-${section.id}`
        ))
      ]
    },
    `search-section-${id}`
  )) });
};
var search_sections_default = SearchSections;

// src/components/search-results/index.tsx
import { useRouter as useRouter7 } from "next/router.js";
import { useContext as useContext16, useState as useState14 } from "react";
import { Box as Box22, Text as Text14 } from "@vtex/brand-ui";
import { Configure as Configure2, InstantSearch as InstantSearch2 } from "react-instantsearch-dom";

// src/components/search-results/infiniteHits.tsx
import { useContext as useContext15, useEffect as useEffect12, useMemo as useMemo2, useRef as useRef10 } from "react";
import {
  connectInfiniteHits,
  connectStateResults as connectStateResults2
} from "react-instantsearch-dom";

// src/components/search-card/index.tsx
import { Box as Box20, Flex as Flex18, Text as Text13, IconCaret as IconCaret5, Tooltip as Tooltip2 } from "@vtex/brand-ui";

// src/components/search-card/styles.ts
var container8 = {
  justifyContent: "space-between",
  borderRadius: "9px",
  border: "1px solid #DDDDDD",
  width: "100%",
  mb: "18px",
  paddingTop: "26px",
  paddingBottom: "10px",
  paddingLeft: ["13px", "44px"],
  paddingRight: ["13px", "34px"],
  background: "#FFFFFF",
  cursor: "pointer"
};
var containerActive = (method) => {
  const methodCategory = method ? methodsColors[method] : "";
  return {
    ...container8,
    ":hover": {
      background: "#F8F7FC",
      ".searchCardTitle, .searchCardDescription": {
        color: "#142032"
      },
      ".method-category": {
        ...methodCategory
      }
    }
  };
};
var title3 = {
  display: "flex",
  alignItems: "flex-start",
  fontSize: ["16px", "18px"],
  lineHeight: ["22px", "24px"],
  color: "muted.0"
};
var httpMethod = {
  mr: "4px"
};
var icon2 = {
  width: "24px",
  height: "24px",
  mr: "8px",
  path: {
    stroke: "#A1A8B3"
  }
};
var description3 = {
  fontSize: "16px",
  lineHeight: "22px",
  paddingLeft: "32px",
  color: "muted.0",
  mt: "4px",
  mb: "8px"
};
var descriptionToggle = {
  height: "auto",
  minWidth: "auto"
};
var descriptionExpandedItem = {
  mt: "24px"
};
var breadcrumbsContainer = {
  display: ["none", "flex"],
  paddingLeft: "32px",
  alignItems: "center"
};
var alignCenter2 = {
  alignItems: "center"
};
var documentation = {
  ...alignCenter2,
  minWidth: "max-content"
};
var breadcrumb = {
  color: "muted.1",
  fontSize: "16px",
  lineHeight: "18px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
};
var lastBreadcrumb = {
  ...breadcrumb,
  margin: "auto 0",
  display: "block",
  overflow: "hidden",
  maxWidth: "max-content",
  whiteSpace: "nowrap"
};
var breadcrumbsIn = {
  ...breadcrumb,
  mr: "4px",
  minWidth: "fit-content"
};
var breadcrumbsArrow = {
  width: "16px",
  height: "16px",
  color: "muted.2"
};
var actionContainer = {
  paddingLeft: "32px",
  alignItems: "center"
};
var actionIcon = {
  minWidth: "16px",
  minHeight: "16px",
  width: "16px",
  height: "16px",
  mr: "8px"
};
var styles_default19 = {
  containerActive,
  title: title3,
  httpMethod,
  icon: icon2,
  description: description3,
  descriptionToggle,
  descriptionExpandedItem,
  breadcrumbsContainer,
  alignCenter: alignCenter2,
  documentation,
  breadcrumb,
  lastBreadcrumb,
  breadcrumbsIn,
  breadcrumbsArrow,
  actionContainer,
  actionIcon
};

// src/components/search-card/index.tsx
import Link9 from "next/link.js";
import { useState as useState13 } from "react";
import { useContext as useContext14 } from "react";

// src/components/icons/expanded-results-icon.tsx
import { Icon as Icon29 } from "@vtex/brand-ui";
import { jsx as jsx55, jsxs as jsxs43 } from "react/jsx-runtime";
var ExpandedResultsIcon = ({ active }) => active ? /* @__PURE__ */ jsxs43(Icon29, { viewBox: "0 0 19 13", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ jsx55(
    "path",
    {
      d: "M18.8728 6.03784C18.265 5.00744 14.9223 -0.163132 9.2436 0.00396015C3.99219 0.133921 0.953397 4.6454 0.127225 6.03784C0.0438786 6.17895 0 6.33903 0 6.50198C0 6.66493 0.0438786 6.82501 0.127225 6.96612C0.725488 7.97796 3.92572 13 9.51899 13H9.7564C15.0078 12.87 18.0561 8.35856 18.8728 6.96612C18.9561 6.82501 19 6.66493 19 6.50198C19 6.33903 18.9561 6.17895 18.8728 6.03784ZM9.70892 11.1434C5.61604 11.2363 2.9476 7.81087 2.11194 6.50198C3.06156 5.00744 5.54007 1.95337 9.33856 1.86054C13.4124 1.75843 16.0904 5.19309 16.9355 6.50198C15.9574 7.99652 13.5074 11.0506 9.70892 11.1434Z",
      fill: "#EE2565"
    }
  ),
  /* @__PURE__ */ jsx55(
    "path",
    {
      d: "M9.49977 3.25293C8.84241 3.25293 8.19981 3.44348 7.65323 3.80049C7.10665 4.15749 6.68065 4.66492 6.42909 5.2586C6.17753 5.85228 6.11171 6.50554 6.23995 7.13579C6.3682 7.76604 6.68475 8.34495 7.14957 8.79934C7.6144 9.25372 8.20662 9.56316 8.85135 9.68852C9.49608 9.81388 10.1644 9.74954 10.7717 9.50363C11.379 9.25772 11.8981 8.84129 12.2633 8.30699C12.6285 7.7727 12.8234 7.14453 12.8234 6.50194C12.8234 5.64025 12.4733 4.81385 11.85 4.20454C11.2267 3.59524 10.3813 3.25293 9.49977 3.25293ZM9.49977 7.89437C9.21804 7.89437 8.94264 7.81271 8.70839 7.65971C8.47415 7.5067 8.29157 7.28923 8.18376 7.0348C8.07595 6.78037 8.04774 6.50039 8.1027 6.23029C8.15767 5.96018 8.29333 5.71208 8.49254 5.51734C8.69175 5.32261 8.94556 5.18999 9.22187 5.13626C9.49819 5.08253 9.78459 5.11011 10.0449 5.2155C10.3052 5.32089 10.5276 5.49936 10.6841 5.72835C10.8407 5.95733 10.9242 6.22654 10.9242 6.50194C10.9242 6.87124 10.7741 7.22541 10.507 7.48654C10.2399 7.74767 9.87755 7.89437 9.49977 7.89437Z",
      fill: "#EE2565"
    }
  )
] }) : /* @__PURE__ */ jsxs43(Icon29, { viewBox: "0 0 23 23", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ jsx55(
    "path",
    {
      d: "M4.51334 3.15293C4.42398 3.06358 4.31791 2.9927 4.20116 2.94434C4.08441 2.89598 3.95929 2.87109 3.83292 2.87109C3.70656 2.87109 3.58143 2.89598 3.46468 2.94434C3.34794 2.9927 3.24186 3.06358 3.1525 3.15293C2.97205 3.33339 2.87067 3.57814 2.87067 3.83335C2.87067 4.08855 2.97205 4.33331 3.1525 4.51377L8.54792 9.90918C8.20657 10.5442 8.0789 11.2723 8.18384 11.9856C8.28878 12.6988 8.62074 13.3593 9.13053 13.8691C9.64031 14.3789 10.3008 14.7108 11.0141 14.8158C11.7273 14.9207 12.4554 14.793 13.0904 14.4517L18.4858 19.8471C18.5749 19.9369 18.6809 20.0082 18.7977 20.0569C18.9145 20.1055 19.0397 20.1306 19.1663 20.1306C19.2928 20.1306 19.418 20.1055 19.5348 20.0569C19.6516 20.0082 19.7576 19.9369 19.8467 19.8471C19.9365 19.758 20.0078 19.652 20.0564 19.5352C20.1051 19.4185 20.1301 19.2932 20.1301 19.1667C20.1301 19.0402 20.1051 18.9149 20.0564 18.7981C20.0078 18.6813 19.9365 18.5754 19.8467 18.4863L4.51334 3.15293ZM11.4996 12.9375C11.1183 12.9375 10.7527 12.7861 10.4831 12.5165C10.2135 12.2469 10.0621 11.8813 10.0621 11.5C10.0621 11.5 10.0621 11.4521 10.0621 11.4329L11.5571 12.9279L11.4996 12.9375Z",
      fill: "#CCCED8"
    }
  ),
  /* @__PURE__ */ jsx55(
    "path",
    {
      d: "M11.71 16.2917C7.58919 16.3875 4.88669 12.8513 4.04336 11.5C4.64372 10.5424 5.36525 9.66623 6.19002 8.89336L4.79086 7.54211C3.70921 8.56127 2.78258 9.73328 2.04044 11.0209C1.95633 11.1665 1.91205 11.3318 1.91205 11.5C1.91205 11.6683 1.95633 11.8335 2.04044 11.9792C2.64419 13.0238 5.87378 18.2084 11.5184 18.2084H11.7579C12.8193 18.1769 13.867 17.9596 14.8534 17.5663L13.3392 16.0521C12.8067 16.1922 12.2603 16.2725 11.71 16.2917Z",
      fill: "#CCCED8"
    }
  ),
  /* @__PURE__ */ jsx55(
    "path",
    {
      d: "M20.9587 11.0209C20.3453 9.9571 16.9624 4.61919 11.2412 4.79169C10.1798 4.82317 9.1321 5.04049 8.14575 5.43377L9.65992 6.94794C10.1924 6.80786 10.7388 6.7275 11.2891 6.70835C15.4003 6.60294 18.1028 10.1488 18.9558 11.5C18.3406 12.4606 17.6028 13.3368 16.7612 14.1067L18.2083 15.4579C19.3035 14.4415 20.2431 13.2693 20.997 11.9792C21.0754 11.8302 21.1131 11.6631 21.1063 11.4949C21.0996 11.3266 21.0487 11.1631 20.9587 11.0209Z",
      fill: "#CCCED8"
    }
  )
] });
var expanded_results_icon_default = ExpandedResultsIcon;

// src/components/search-card/index.tsx
import { jsx as jsx56, jsxs as jsxs44 } from "react/jsx-runtime";
var SearchCard = ({
  Icon: Icon68,
  title: title5,
  method,
  breadcrumbs,
  actionType,
  url,
  hit
}) => {
  const actionValue = actionType ? getAction(actionType) : null;
  const [toggleChildResults, setToggleChildResults] = useState13(false);
  const { locale } = useContext14(LibraryContext);
  return /* @__PURE__ */ jsx56(Link9, { href: url, legacyBehavior: true, children: /* @__PURE__ */ jsxs44(Flex18, { sx: styles_default19.containerActive(method), children: [
    /* @__PURE__ */ jsxs44(Box20, { children: [
      /* @__PURE__ */ jsxs44(Text13, { className: "searchCardTitle", sx: styles_default19.title, children: [
        Icon68 && /* @__PURE__ */ jsx56(Icon68, { sx: styles_default19.icon }),
        method ? /* @__PURE__ */ jsx56(
          method_category_default,
          {
            sx: styles_default19.httpMethod,
            origin: "search",
            method,
            active: false
          }
        ) : null,
        title5 === "overview" && `${hit.doccategory} `,
        title5
      ] }),
      /* @__PURE__ */ jsxs44(Text13, { className: "searchCardDescription", sx: styles_default19.description, children: [
        /* @__PURE__ */ jsx56(Flex18, { children: /* @__PURE__ */ jsx56(
          customHighlight_default,
          {
            hit,
            attribute: "content",
            ...{ searchPage: true }
          }
        ) }),
        toggleChildResults && hit.filteredMatches?.map((childHit, index) => /* @__PURE__ */ jsx56(
          Box20,
          {
            sx: styles_default19.descriptionExpandedItem,
            children: /* @__PURE__ */ jsx56(
              customHighlight_default,
              {
                hit: childHit,
                attribute: "content",
                ...{ searchPage: true }
              }
            )
          },
          `search-card-${hit.objectID}-${index}`
        ))
      ] }),
      breadcrumbs ? /* @__PURE__ */ jsxs44(Box20, { sx: styles_default19.breadcrumbsContainer, children: [
        /* @__PURE__ */ jsx56(Text13, { sx: styles_default19.breadcrumbsIn, children: messages[locale]["search_card.in"] || "In" }),
        breadcrumbs.map((breadcrumb2, index) => /* @__PURE__ */ jsxs44(
          Flex18,
          {
            sx: index === 0 ? styles_default19.documentation : styles_default19.alignCenter,
            children: [
              /* @__PURE__ */ jsx56(Tooltip2, { label: breadcrumb2, placement: "top", children: /* @__PURE__ */ jsx56(Text13, { sx: styles_default19.breadcrumb, children: breadcrumb2 }) }),
              index < breadcrumbs.length - 1 ? /* @__PURE__ */ jsx56(IconCaret5, { direction: "right", sx: styles_default19.breadcrumbsArrow }) : null
            ]
          },
          `${breadcrumb2}${index}`
        ))
      ] }) : null,
      actionValue ? /* @__PURE__ */ jsxs44(Flex18, { sx: styles_default19.actionContainer, children: [
        /* @__PURE__ */ jsx56(actionValue.Icon, { sx: styles_default19.actionIcon }),
        " ",
        /* @__PURE__ */ jsx56(Text13, { children: actionValue?.title })
      ] }) : null
    ] }),
    hit.filteredMatches && hit.filteredMatches.length > 0 && /* @__PURE__ */ jsx56(
      Box20,
      {
        sx: styles_default19.descriptionToggle,
        onClick: (event) => {
          setToggleChildResults(!toggleChildResults);
          event.stopPropagation();
        },
        children: /* @__PURE__ */ jsx56(expanded_results_icon_default, { active: toggleChildResults })
      }
    )
  ] }) });
};
var search_card_default = SearchCard;

// src/components/search-results/infiniteHits.tsx
import { Box as Box21, Flex as Flex19 } from "@vtex/brand-ui";
import { jsx as jsx57, jsxs as jsxs45 } from "react/jsx-runtime";
var HitCard = ({ hit }) => {
  const { sidebarSections } = useContext15(LibraryContext);
  const breadcrumbTitle = getTitleById(sidebarSections, hit.doctype);
  const breadcrumbs = [
    breadcrumbTitle,
    ...hit.doccategory ? [hit.doccategory] : [],
    ,
    hit.doctitle
  ];
  const DocIcon = getIconFromSection(sidebarSections, hit.doctype);
  return /* @__PURE__ */ jsx57(
    search_card_default,
    {
      doc: hit.doctype,
      Icon: DocIcon,
      title: hit.doctitle,
      method: hit.method || void 0,
      breadcrumbs: breadcrumbs || [],
      actionType: hit.actiontype || void 0,
      url: getRelativeURL(hit.url),
      hit
    }
  );
};
var StateResults = connectStateResults2(
  ({ searchResults }) => {
    const { updateOcurrenceCount } = useContext15(SearchContext);
    useEffect12(() => {
      if (!searchResults)
        return;
      const results = searchResults;
      const isFilteringByDoctype = typeof results?._state.filters === "string" && results._state.filters.includes("doctype:");
      const facets = results?.facets;
      const doctypeFacet = facets?.find((facet) => facet.name === "doctype");
      const nbHits = results?.nbHits ?? 0;
      const formattedFacets = {};
      if (doctypeFacet?.data) {
        Object.entries(doctypeFacet.data).forEach(([key, value]) => {
          if (typeof value === "number") {
            formattedFacets[key] = value;
          }
        });
      }
      formattedFacets[""] = nbHits;
      if (!isFilteringByDoctype) {
        updateOcurrenceCount(formattedFacets);
      }
    }, [searchResults?.queryID]);
    return null;
  }
);
var InfiniteHits = ({ hits, hasMore, refineNext }) => {
  const scrollRef = useRef10(null);
  function onSentinelIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting && hasMore) {
        refineNext();
      }
    });
  }
  const filteredResult = useMemo2(() => {
    const mergeHits = [];
    hits.forEach((hit) => {
      const alreadyExists = mergeHits.findIndex(
        (e) => e.url_without_anchor === hit.url_without_anchor
      );
      const filteredHit = { ...hit, filteredMatches: [] };
      if (alreadyExists >= 0) {
        mergeHits[alreadyExists].filteredMatches?.push(filteredHit);
      } else
        mergeHits.push(filteredHit);
    });
    return mergeHits;
  }, [hits]);
  useEffect12(() => {
    const observer = new IntersectionObserver(onSentinelIntersection, {});
    if (scrollRef.current)
      observer.observe(scrollRef.current);
    return () => {
      observer.disconnect();
    };
  }, [hits]);
  return /* @__PURE__ */ jsxs45(Box21, { children: [
    /* @__PURE__ */ jsx57(StateResults, {}),
    filteredResult.map((hit, index) => /* @__PURE__ */ jsx57(Flex19, { children: /* @__PURE__ */ jsx57(HitCard, { hit }, index) }, hit.objectID)),
    /* @__PURE__ */ jsx57("span", { ref: scrollRef })
  ] });
};
var infiniteHits_default = connectInfiniteHits(InfiniteHits);

// src/components/search-results/styles.ts
var resultContainer = {
  width: ["80%", "544px", "544px", "544px", "720px", "720px", "1400px"],
  paddingTop: ["32px", "32px", "32px", "64px"],
  hr: {
    marginTop: "16px",
    marginBottom: "32px",
    borderTop: "none",
    borderColor: "#DDDDDD",
    display: ["none", "none", "none", "block"]
  }
};
var resultText = {
  mb: "16px",
  fontSize: "16px",
  lineHeight: "22px",
  display: ["none", "none", "none", "initial"]
};
var paginationContainer = {
  mt: ["48px", "115px"],
  mb: "34px",
  justifyContent: "center"
};
var paginationLink = {
  fontSize: "16px",
  lineHeight: "20px",
  color: "#EE2565",
  cursor: "pointer"
};
var paginationLinkDisabled = {
  ...paginationLink,
  color: "muted.1"
};
var paginationNumber = {
  display: "flex",
  fontSize: ["14px", "16px"],
  lineHeight: "20px",
  color: "#4A596B",
  mx: ["18px", "27px"]
};
var paginationActualNumber = {
  fontWeight: "700",
  mx: "4px"
};
var noResults2 = {
  justifyContent: "center",
  alignContent: "center",
  padding: "12px"
};
var styles_default20 = {
  resultContainer,
  resultText,
  paginationContainer,
  paginationLink,
  paginationLinkDisabled,
  paginationNumber,
  paginationActualNumber,
  noResults: noResults2
};

// src/components/search-results/index.tsx
import { jsx as jsx58, jsxs as jsxs46 } from "react/jsx-runtime";
var SearchResults = () => {
  const router = useRouter7();
  const { filterSelectedSection, ocurrenceCount } = useContext16(SearchContext);
  const { locale } = useContext16(LibraryContext);
  const filters = [
    `language:${locale}`,
    filterSelectedSection ? `doctype:"${filterSelectedSection}"` : ""
  ].filter(Boolean).join(" AND ");
  const [prevFilter, setPrevFilter] = useState14("");
  const [searchState, setSearchState] = useState14({});
  const updateSearchState = (currentState) => {
    const page = filters !== prevFilter ? 1 : currentState.page || 1;
    setPrevFilter(filters);
    setSearchState({
      ...currentState,
      page
    });
  };
  return /* @__PURE__ */ jsxs46(Box22, { sx: styles_default20.resultContainer, children: [
    /* @__PURE__ */ jsx58(Text14, { sx: styles_default20.resultText, children: `${messages[locale]["search_results.showing"] || "Showing"} ${ocurrenceCount[filterSelectedSection] === void 0 ? "" : ocurrenceCount[filterSelectedSection]} ${messages[locale]["search_results.results_for"] || "results for"} ${router.query.keyword} ${messages[locale]["search_results.in"] || "in"} ${!filterSelectedSection ? messages[locale]["search_results.all_lowercase"] || "all results" : filterSelectedSection}` }),
    /* @__PURE__ */ jsx58("hr", {}),
    /* @__PURE__ */ jsx58(Box22, { children: /* @__PURE__ */ jsxs46(
      InstantSearch2,
      {
        searchClient,
        indexName: searchIndex,
        searchState,
        onSearchStateChange: (currentState) => updateSearchState(currentState),
        children: [
          /* @__PURE__ */ jsx58(
            Configure2,
            {
              filters,
              query: router.query.keyword,
              clickAnalytics: true,
              hitsPerPage: 6,
              facets: ["doctype", "language"],
              facetingAfterDistinct: true
            }
          ),
          /* @__PURE__ */ jsx58(infiniteHits_default, {})
        ]
      }
    ) })
  ] });
};
var search_results_default = SearchResults;

// src/components/search-filter-tab-bar/index.tsx
import { useContext as useContext17 } from "react";
import { Flex as Flex20, Text as Text15 } from "@vtex/brand-ui";

// src/components/search-filter-tab-bar/styles.ts
var container9 = {
  display: ["flex", "flex", "flex", "none"],
  overflowX: "scroll",
  scrollbarWidth: "none",
  "::-webkit-scrollbar": {
    display: "none"
  }
};
var tab = (active) => ({
  pt: "8px",
  pb: "14px",
  px: "24px",
  cursor: "pointer",
  justifyContent: "center",
  alignItems: "center",
  borderBottom: `${active ? 2 : 1}px solid #${active ? "D71D55" : "DDDDDD"}`,
  minWidth: "max-content"
});
var tabTitle = (active) => ({
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "16.38px",
  whiteSpace: "nowrap",
  color: `#${active ? "D71D55" : "545454"}`
});
var tabCount = {
  px: "8px",
  ml: "2px",
  fontSize: "12px",
  fontWeight: "400",
  lineHeight: "16px",
  borderRadius: "24px",
  backgroundColor: "#F8F7FC"
};
var styles_default21 = { container: container9, tab, tabTitle, tabCount };

// src/components/search-filter-tab-bar/index.tsx
import { jsx as jsx59, jsxs as jsxs47 } from "react/jsx-runtime";
var SearchFilterTab = ({ filter }) => {
  const { filterSelectedSection, changeFilterSelectedSection, ocurrenceCount } = useContext17(SearchContext);
  const { locale } = useContext17(LibraryContext);
  return /* @__PURE__ */ jsxs47(
    Flex20,
    {
      sx: styles_default21.tab(filterSelectedSection === filter),
      onClick: () => changeFilterSelectedSection(filter),
      children: [
        /* @__PURE__ */ jsx59(Text15, { sx: styles_default21.tabTitle(filterSelectedSection === filter), children: filter || messages[locale]["search_results.all"] || "All results" }),
        /* @__PURE__ */ jsx59(Text15, { sx: styles_default21.tabCount, children: ocurrenceCount[filter] || 0 })
      ]
    }
  );
};
var SearchFilterTabBar = () => {
  const { sidebarSections } = useContext17(LibraryContext);
  return /* @__PURE__ */ jsxs47(Flex20, { sx: styles_default21.container, children: [
    /* @__PURE__ */ jsx59(SearchFilterTab, { filter: "" }),
    sidebarSections.flat().map((section) => {
      return /* @__PURE__ */ jsx59(SearchFilterTab, { filter: section.id }, section.id);
    })
  ] });
};
var search_filter_tab_bar_default = SearchFilterTabBar;

// src/lib/search/styles.ts
var searchBarContainer = {
  display: ["flex", "flex", "flex", "none"],
  justifyContent: "center",
  py: "16px"
};
var body = {
  background: "#FFFFFF",
  justifyContent: "center"
};
var styles_default22 = {
  searchBarContainer,
  body
};

// src/lib/search/index.tsx
import { jsx as jsx60, jsxs as jsxs48 } from "react/jsx-runtime";
var Search = () => {
  return /* @__PURE__ */ jsxs48(search_default, { children: [
    /* @__PURE__ */ jsxs48(Box23, { children: [
      /* @__PURE__ */ jsx60(Flex21, { sx: styles_default22.searchBarContainer, children: /* @__PURE__ */ jsx60(SearchInput, {}) }),
      /* @__PURE__ */ jsx60(search_filter_tab_bar_default, {})
    ] }),
    /* @__PURE__ */ jsxs48(Flex21, { sx: styles_default22.body, children: [
      /* @__PURE__ */ jsx60(search_sections_default, {}),
      /* @__PURE__ */ jsx60(search_results_default, {})
    ] })
  ] });
};
var search_default2 = Search;

// src/lib/cookie-bar/index.tsx
import { useContext as useContext18 } from "react";
import { CookieConsent } from "react-cookie-consent";

// src/lib/cookie-bar/styles.ts
var bar = {
  backgroundColor: "#FFF",
  borderRadius: "8px",
  color: "#5E6E84",
  padding: "20px",
  width: "80%",
  left: "50%",
  transform: "translateX(-50%)",
  maxWidth: "1280px",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
};
var barContent = {
  display: "flex",
  flex: "1 0 300px",
  flexDirection: "column",
  maxWidth: "100%"
};
var title4 = {
  color: "#5E6E84",
  marginBottom: "10px",
  lineHeight: "28px",
  fontSize: "25px",
  fontWeight: "400"
};
var buttonContainer = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  justifyContent: "center",
  margin: "15px"
};
var acceptButton = {
  background: "#F71963",
  color: "#FFF",
  padding: "7px 16px",
  borderRadius: "2px",
  margin: "0",
  height: "32px",
  fontWeight: "400",
  ":hover": {
    opacity: "0.7"
  }
};
var declineButton = {
  border: "1px solid #F71963",
  background: "#FFF",
  color: "#F71963",
  borderRadius: "2px",
  fontWeight: "400",
  margin: "0",
  height: "32px",
  ":hover": {
    opacity: "0.7"
  }
};
var styles_default23 = {
  bar,
  barContent,
  title: title4,
  acceptButton,
  declineButton,
  buttonContainer
};

// src/lib/cookie-bar/index.tsx
import { Flex as Flex22, Text as Text16 } from "@vtex/brand-ui";
import aa3 from "search-insights";
import { jsx as jsx61, jsxs as jsxs49 } from "react/jsx-runtime";
var Button6 = ({ children, style, ...props }) => {
  return /* @__PURE__ */ jsx61(Flex22, { sx: style, ...props, children });
};
var CookieBar = ({ onAccept }) => {
  const { locale } = useContext18(LibraryContext);
  return /* @__PURE__ */ jsxs49(
    CookieConsent,
    {
      enableDeclineButton: true,
      buttonStyle: styles_default23.acceptButton,
      declineButtonStyle: styles_default23.declineButton,
      style: styles_default23.bar,
      onAccept: () => {
        aa3("init", {
          partial: true,
          useCookie: true
        });
        onAccept();
      },
      declineButtonText: messages[locale]["cookie_bar.decline"],
      buttonText: messages[locale]["cookie_bar.accept"],
      ButtonComponent: Button6,
      customButtonWrapperAttributes: { style: styles_default23.buttonContainer },
      customContentAttributes: { style: styles_default23.barContent },
      children: [
        /* @__PURE__ */ jsx61(Text16, { sx: styles_default23.title, children: messages[locale]["cookie_bar.title"] }),
        /* @__PURE__ */ jsx61(Text16, { children: messages[locale]["cookie_bar.description"] })
      ]
    }
  );
};
var cookie_bar_default = CookieBar;

// src/components/copy-link-button/index.tsx
import { Button as Button7 } from "@vtex/brand-ui";

// src/components/icons/copy-icon.tsx
import { Icon as Icon30 } from "@vtex/brand-ui";
import { jsx as jsx62, jsxs as jsxs50 } from "react/jsx-runtime";
var CopyIcon = (props) => /* @__PURE__ */ jsxs50(
  Icon30,
  {
    ...props,
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx62(
        "path",
        {
          d: "M12.5 5.625H6.875C6.18464 5.625 5.625 6.18464 5.625 6.875V12.5C5.625 13.1904 6.18464 13.75 6.875 13.75H12.5C13.1904 13.75 13.75 13.1904 13.75 12.5V6.875C13.75 6.18464 13.1904 5.625 12.5 5.625Z",
          stroke: "currentcolor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx62(
        "path",
        {
          d: "M3.125 9.375H2.5C2.16848 9.375 1.85054 9.2433 1.61612 9.00888C1.3817 8.77446 1.25 8.45652 1.25 8.125V2.5C1.25 2.16848 1.3817 1.85054 1.61612 1.61612C1.85054 1.3817 2.16848 1.25 2.5 1.25H8.125C8.45652 1.25 8.77446 1.3817 9.00888 1.61612C9.2433 1.85054 9.375 2.16848 9.375 2.5V3.125",
          stroke: "currentcolor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var copy_icon_default = CopyIcon;

// src/components/copy-link-button/index.tsx
import { useState as useState15 } from "react";

// src/components/copy-link-button/styles.ts
var copyIcon = {
  marginRight: "4px"
};
var copyLinkButton = {
  textTransform: "none",
  color: "#3F3F3F",
  fontWeight: "100",
  fontSize: "12px",
  lineHeight: "18px",
  height: "none",
  padding: "8px 5px 8px 8px",
  border: "1px solid #A1AAB7",
  backgroundColor: "white",
  ":hover": {
    backgroundColor: "#EFEFEF"
  }
};
var styles_default24 = {
  copyIcon,
  copyLinkButton
};

// src/components/copy-link-button/index.tsx
import { jsx as jsx63 } from "react/jsx-runtime";
var CopyLinkButton = () => {
  const [tooltipText, setTooltipText] = useState15("Copy");
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setTooltipText("Copy");
    setTimeout(() => {
      setTooltipText("Copied!");
    }, 2e3);
  };
  return /* @__PURE__ */ jsx63(tooltip_default, { label: tooltipText, placement: "bottom", children: /* @__PURE__ */ jsx63(Button7, { onClick: handleCopy, sx: styles_default24.copyLinkButton, children: /* @__PURE__ */ jsx63(copy_icon_default, { sx: styles_default24.copyIcon, size: 16 }) }) });
};
var copy_link_button_default = CopyLinkButton;

// src/components/input/index.tsx
import { useState as useState16, useEffect as useEffect13 } from "react";

// src/components/input/styles.ts
var input = {
  background: "none",
  border: "#F4F4F4",
  color: "#545454",
  fontSize: ["14px"],
  width: "100%",
  transition: "flex 0.3s",
  outline: "none"
};
var icon3 = {
  minWidth: "16px",
  minHeight: "16px",
  width: "16px",
  mr: "8px",
  flex: 0,
  maxWidth: "fit-content"
};
var container10 = {
  paddingLeft: "12px",
  alignItems: "center",
  justifyContent: "center",
  background: "#F4F4F4",
  width: "100%",
  height: "40px",
  borderRadius: "4px",
  transition: "all 0.3s ease-out",
  cursor: "pointer",
  border: "1px solid #F4F4F4",
  ":hover": {
    transition: "all 0.3s ease-out",
    border: "1px solid #3B3B3B"
  }
};
var styles_default25 = { container: container10, input, icon: icon3 };

// src/components/input/index.tsx
import { Flex as Flex23 } from "@vtex/brand-ui";
import { jsx as jsx64, jsxs as jsxs51 } from "react/jsx-runtime";
var Input = ({ value, onChange, placeholder = "", Icon: Icon68 }) => {
  const [inputValue, setInputValue] = useState16(value ?? "");
  useEffect13(() => {
    if (inputValue !== value)
      setInputValue(value);
  }, [value]);
  return /* @__PURE__ */ jsxs51(Flex23, { sx: styles_default25.container, children: [
    Icon68 && /* @__PURE__ */ jsx64(Icon68, { sx: styles_default25.icon }),
    /* @__PURE__ */ jsx64(
      "input",
      {
        style: styles_default25.input,
        value: inputValue,
        placeholder,
        onChange: (e) => {
          setInputValue(e.currentTarget.value);
          onChange(e.currentTarget.value);
        }
      }
    )
  ] });
};
var input_default = Input;

// src/utils/get-days-elapsed.ts
var getDaysElapsed = (date) => {
  const msInDay = 1e3 * 60 * 60 * 24;
  const msElapsed = (/* @__PURE__ */ new Date()).getTime() - date.getTime();
  return Math.floor(msElapsed / msInDay);
};

// src/components/icons/gear-troubleshooting-icon.tsx
import { Icon as Icon31 } from "@vtex/brand-ui";
import { jsx as jsx65, jsxs as jsxs52 } from "react/jsx-runtime";
var GearTroubleshootingIcon = (props) => {
  return /* @__PURE__ */ jsxs52(
    Icon31,
    {
      ...props,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx65(
          "path",
          {
            d: "M17.8404 9.42954C18.2229 9.00197 18.9342 8.46816 18.9962 7.87786C19.063 7.2423 17.8607 5.16896 17.2775 4.93176C16.6221 4.66521 15.5159 5.22824 14.8633 5.41204C13.9538 5.62179 12.9047 5.05365 12.5708 4.18302C12.373 3.59238 12.2403 2.55197 11.7172 2.17424C11.1959 1.79774 8.80418 1.79774 8.28284 2.17424C7.75979 2.55197 7.62703 3.59238 7.42927 4.18302C7.09533 5.05365 6.04632 5.62179 5.13676 5.41204C4.48421 5.22824 3.37798 4.66521 2.72262 4.93176C2.13942 5.16896 0.937071 7.2423 1.00384 7.87786C1.0817 8.61902 2.16084 9.43088 2.63551 9.96156C3.17336 10.6425 3.17338 11.819 2.63554 12.4999C2.16086 13.0306 1.0817 13.8425 1.00384 14.5836C0.93707 15.2192 2.13942 17.2925 2.72262 17.5297C3.37797 17.7963 4.48418 17.2332 5.13672 17.0494C6.0463 16.8396 7.0953 17.4078 7.42924 18.2785C7.62701 18.8691 7.75977 19.9096 8.28284 20.2873C8.46309 20.4175 8.68756 20.4504 9.05686 20.4587",
            stroke: "currentcolor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx65(
          "path",
          {
            d: "M12.201 8.86537C9.28547 6.15174 4.92127 10.5159 7.63491 13.4314",
            stroke: "currentcolor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx65(
          "path",
          {
            d: "M20.25 20.2499L22.8462 22.846",
            stroke: "currentcolor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx65(
          "path",
          {
            d: "M21.6922 16.4999C21.6922 13.6323 19.3676 11.3076 16.4999 11.3076C13.6323 11.3076 11.3076 13.6323 11.3076 16.4999C11.3076 19.3676 13.6323 21.6922 16.4999 21.6922C19.3676 21.6922 21.6922 19.3676 21.6922 16.4999Z",
            stroke: "currentcolor",
            strokeWidth: "1.5",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx65(
          "path",
          {
            d: "M16.4089 13.4053V17.0653",
            stroke: "currentcolor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx65(
          "path",
          {
            d: "M16.4089 19.0988V19.0989",
            stroke: "currentcolor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        )
      ]
    }
  );
};
var gear_troubleshooting_icon_default = GearTroubleshootingIcon;

// src/components/icons/documentation-updates-icon.tsx
import { Icon as Icon32 } from "@vtex/brand-ui";
import { jsx as jsx66, jsxs as jsxs53 } from "react/jsx-runtime";
var DocumentationUpdatesIcon = (props) => /* @__PURE__ */ jsxs53(
  Icon32,
  {
    ...props,
    viewBox: "0 0 24 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx66(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M18.414 6.91205L15.586 4.08405C15.211 3.70905 14.702 3.49805 14.172 3.49805H7C5.895 3.49805 5 4.39305 5 5.49805V19.498C5 20.603 5.895 21.498 7 21.498H17C18.105 21.498 19 20.603 19 19.498V8.32605C19 7.79605 18.789 7.28705 18.414 6.91205V6.91205Z",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx66(
        "path",
        {
          d: "M19 8.49805H15C14.448 8.49805 14 8.05005 14 7.49805V3.49805",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx66(
        "path",
        {
          d: "M9.5 17.498H14.5",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx66(
        "path",
        {
          d: "M14 11.998L11.5 14.498L10 12.998",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var documentation_updates_icon_default = DocumentationUpdatesIcon;

// src/components/icons/helpcenter-icon.tsx
import { Icon as Icon33 } from "@vtex/brand-ui";
import { jsx as jsx67, jsxs as jsxs54 } from "react/jsx-runtime";
var HelpCenterIcon = (props) => /* @__PURE__ */ jsxs54(
  Icon33,
  {
    ...props,
    viewBox: "0 0 64 65",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      " ",
      /* @__PURE__ */ jsx67(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M53.3332 54.3317V16.4064C53.3332 13.7877 51.2105 11.665 48.5918 11.665H15.4078C12.7892 11.665 10.6665 13.7877 10.6665 16.4064V44.8517C10.6665 47.4704 12.7892 49.593 15.4078 49.593H44.4452L53.3332 54.3317Z",
          stroke: "#4A596B",
          strokeWidth: "3",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx67(
        "path",
        {
          d: "M42.3575 35.665C36.5522 41.4704 27.1388 41.4704 21.3335 35.665",
          stroke: "#4A596B",
          strokeWidth: "3",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx67(
        "path",
        {
          d: "M26.6668 22.3311V24.9977",
          stroke: "#4A596B",
          strokeWidth: "3",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx67(
        "path",
        {
          d: "M37.3333 22.3311V24.9977",
          stroke: "#4A596B",
          strokeWidth: "3",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var helpcenter_icon_default = HelpCenterIcon;

// src/components/icons/developer-portal-icon.tsx
import { Icon as Icon34 } from "@vtex/brand-ui";
import { jsx as jsx68, jsxs as jsxs55 } from "react/jsx-runtime";
var DeveloperPortalIcon = (props) => /* @__PURE__ */ jsxs55(
  Icon34,
  {
    ...props,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx68(
        "rect",
        {
          x: "3",
          y: "3",
          width: "18",
          height: "19",
          rx: "2",
          stroke: "currentcolor",
          strokeWidth: "1.5"
        }
      ),
      /* @__PURE__ */ jsx68("path", { d: "M3 7L21 7", stroke: "#4A596B", strokeWidth: "1.5" }),
      /* @__PURE__ */ jsx68(
        "path",
        {
          d: "M15 16.375L17 14.875L15 13.375",
          stroke: "currentcolor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx68(
        "path",
        {
          d: "M9 13.375L7 14.875L9 16.375",
          stroke: "currentcolor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx68(
        "path",
        {
          d: "M10.5644 17.8947L13.5 11.5",
          stroke: "currentcolor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var developer_portal_icon_default = DeveloperPortalIcon;

// src/components/icons/faq-icon.tsx
import { Icon as Icon35 } from "@vtex/brand-ui";
import { jsx as jsx69, jsxs as jsxs56 } from "react/jsx-runtime";
var FAQIcon = (props) => /* @__PURE__ */ jsxs56(
  Icon35,
  {
    ...props,
    viewBox: "0 0 24 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx69(
        "path",
        {
          d: "M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9948 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C17.5222 2 22 6.28357 22 11.5667Z",
          stroke: "currentcolor",
          strokeWidth: "2",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx69(
        "path",
        {
          d: "M10 9.84615C10 8.82655 10.8954 8 12 8C13.1046 8 14 8.82655 14 9.84615C14 10.2137 13.8837 10.5561 13.6831 10.8438C13.0854 11.7012 12 12.5189 12 13.5385V14",
          stroke: "currentcolor",
          strokeWidth: "2",
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ jsx69(
        "path",
        {
          d: "M12 16.5H12.009",
          stroke: "currentcolor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var faq_icon_default = FAQIcon;

// src/components/icons/known-issues-icon.tsx
import { Icon as Icon36 } from "@vtex/brand-ui";
import { jsx as jsx70, jsxs as jsxs57 } from "react/jsx-runtime";
var KnownIssueIcon = (props) => /* @__PURE__ */ jsxs57(
  Icon36,
  {
    ...props,
    viewBox: "0 0 256 256",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx70("rect", { width: "16rem", height: "16rem", fill: "none" }),
      /* @__PURE__ */ jsx70(
        "line",
        {
          x1: "104",
          y1: "104",
          x2: "104",
          y2: "208",
          fill: "none",
          stroke: "#4A596B",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "18"
        }
      ),
      /* @__PURE__ */ jsx70(
        "line",
        {
          x1: "32",
          y1: "104",
          x2: "224",
          y2: "104",
          fill: "none",
          stroke: "#4A596B",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "18"
        }
      ),
      /* @__PURE__ */ jsx70(
        "rect",
        {
          x: "32",
          y: "48",
          width: "192",
          height: "160",
          rx: "8",
          strokeWidth: "18",
          stroke: "#4A596B",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          fill: "none"
        }
      )
    ]
  }
);
var known_issues_icon_default = KnownIssueIcon;

// src/components/icons/megaphone-icon.tsx
import { Icon as Icon37 } from "@vtex/brand-ui";
import { jsx as jsx71, jsxs as jsxs58 } from "react/jsx-runtime";
var MegaphoneIcon = (props) => /* @__PURE__ */ jsxs58(
  Icon37,
  {
    ...props,
    viewBox: "0 0 24 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx71(
        "path",
        {
          d: "M8.39317 5.82935H5.00293C4.72679 5.82935 4.50293 6.0532 4.50293 6.32935V12.3537C4.50293 12.6299 4.72679 12.8537 5.00293 12.8537H8.39317C8.66932 12.8537 8.89317 12.6299 8.89317 12.3537V6.32935C8.89317 6.0532 8.66932 5.82935 8.39317 5.82935Z",
          stroke: "#4A596B",
          strokeWidth: "1.5"
        }
      ),
      /* @__PURE__ */ jsx71(
        "path",
        {
          d: "M15.5853 1.49929L8.89355 5.82927V12.8537L15.5853 17.1836C15.918 17.3989 16.357 17.1601 16.357 16.7639V1.91907C16.357 1.52282 15.918 1.28402 15.5853 1.49929Z",
          stroke: "#4A596B",
          strokeWidth: "1.5"
        }
      ),
      /* @__PURE__ */ jsx71(
        "path",
        {
          d: "M2.36914 6.70728H4.00329C4.27943 6.70728 4.50329 6.93113 4.50329 7.20728V11.4756C4.50329 11.7517 4.27943 11.9756 4.00329 11.9756H2.36914C2.093 11.9756 1.86914 11.7517 1.86914 11.4756V7.20728C1.86914 6.93113 2.093 6.70728 2.36914 6.70728Z",
          stroke: "#4A596B",
          strokeWidth: "1.5"
        }
      ),
      /* @__PURE__ */ jsx71(
        "path",
        {
          d: "M2.90474 16.9811L5.38122 12.8536H8.47085C8.85476 12.8536 9.09544 13.2684 8.90497 13.6017L5.96908 18.7395C5.88688 18.8834 5.70362 18.9333 5.55977 18.8511L3.01314 17.3959C2.86712 17.3125 2.81821 17.1253 2.90474 16.9811Z",
          stroke: "#4A596B",
          strokeWidth: "1.5"
        }
      ),
      /* @__PURE__ */ jsx71(
        "path",
        {
          d: "M20.789 5C21.8086 6.16449 22.3813 7.74366 22.3813 9.39024C22.3813 11.0368 21.8086 12.616 20.789 13.7805M18.8691 7.19202C19.3789 7.77426 19.6653 8.56385 19.6653 9.38714C19.6653 10.2104 19.3789 11 18.8691 11.5823",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var megaphone_icon_default = MegaphoneIcon;

// src/components/icons/graph-icon.tsx
import { Icon as Icon38 } from "@vtex/brand-ui";
import { jsx as jsx72, jsxs as jsxs59 } from "react/jsx-runtime";
var GraphIcon = (props) => /* @__PURE__ */ jsxs59(
  Icon38,
  {
    ...props,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx72(
        "path",
        {
          d: "M15.5993 9.03607H12.749L10.6112 11.2461L6.33574 6.82608L4.19799 9.03607H1.34766",
          stroke: "currentcolor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx72(
        "path",
        {
          d: "M1 14V3C1 1.89543 1.89543 1 3 1H14C15.1046 1 16 1.89543 16 3V14C16 15.1046 15.1046 16 14 16H3C1.89543 16 1 15.1046 1 14Z",
          stroke: "currentcolor",
          strokeWidth: "1.5"
        }
      )
    ]
  }
);
var graph_icon_default = GraphIcon;

// src/components/icons/warning-icon.tsx
import { Icon as Icon39 } from "@vtex/brand-ui";
import { jsx as jsx73, jsxs as jsxs60 } from "react/jsx-runtime";
var WarningIcon = (props) => /* @__PURE__ */ jsxs60(
  Icon39,
  {
    ...props,
    viewBox: "0 0 18 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx73(
        "path",
        {
          d: "M7.71758 1.89497L1.36508 12.5C1.2341 12.7268 1.1648 12.9839 1.16407 13.2459C1.16334 13.5078 1.23119 13.7653 1.3609 13.9929C1.4906 14.2204 1.67762 14.41 1.90336 14.5429C2.12909 14.6757 2.38568 14.7471 2.64758 14.75H15.3526C15.6145 14.7471 15.8711 14.6757 16.0968 14.5429C16.3225 14.41 16.5096 14.2204 16.6393 13.9929C16.769 13.7653 16.8368 13.5078 16.8361 13.2459C16.8354 12.9839 16.766 12.7268 16.6351 12.5L10.2826 1.89497C10.1489 1.67455 9.96062 1.49231 9.73597 1.36583C9.51133 1.23936 9.25788 1.17291 9.00008 1.17291C8.74227 1.17291 8.48882 1.23936 8.26418 1.36583C8.03953 1.49231 7.85128 1.67455 7.71758 1.89497Z",
          stroke: "currentcolor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx73(
        "path",
        {
          d: "M9 5.75V8.75",
          stroke: "currentcolor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx73(
        "path",
        {
          d: "M9 11.75H9.0075",
          stroke: "currentcolor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var warning_icon_default = WarningIcon;

// src/components/icons/paper-icon.tsx
import { Icon as Icon40 } from "@vtex/brand-ui";
import { jsx as jsx74, jsxs as jsxs61 } from "react/jsx-runtime";
var PaperIcon = (props) => /* @__PURE__ */ jsxs61(
  Icon40,
  {
    ...props,
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx74(
        "path",
        {
          d: "M10.5 1.5H4.5C4.10218 1.5 3.72064 1.65804 3.43934 1.93934C3.15804 2.22064 3 2.60218 3 3V15C3 15.3978 3.15804 15.7794 3.43934 16.0607C3.72064 16.342 4.10218 16.5 4.5 16.5H13.5C13.8978 16.5 14.2794 16.342 14.5607 16.0607C14.842 15.7794 15 15.3978 15 15V6L10.5 1.5Z",
          stroke: "currentcolor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx74(
        "path",
        {
          d: "M10.5 1.5V6H15",
          stroke: "currentcolor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx74(
        "path",
        {
          d: "M12 9.75H6",
          stroke: "currentcolor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx74(
        "path",
        {
          d: "M12 12.75H6",
          stroke: "currentcolor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx74(
        "path",
        {
          d: "M7.5 6.75H6.75H6",
          stroke: "currentcolor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var paper_icon_default = PaperIcon;

// src/components/icons/start-here-icon.tsx
import { Icon as Icon41 } from "@vtex/brand-ui";
import { jsx as jsx75, jsxs as jsxs62 } from "react/jsx-runtime";
var StartHereIcon = (props) => /* @__PURE__ */ jsxs62(
  Icon41,
  {
    ...props,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx75(
        "path",
        {
          d: "M4 15.35C4 15.35 4.95 14.4 7.8 14.4C10.65 14.4 12.55 16.3 15.4 16.3C18.25 16.3 19.2 15.35 19.2 15.35V3.95C19.2 3.95 18.25 4.9 15.4 4.9C12.55 4.9 10.65 3 7.8 3C4.95 3 4 3.95 4 3.95V15.35Z",
          stroke: "#4A596B",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx75(
        "path",
        {
          d: "M4 22V15.35",
          stroke: "#4A596B",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var start_here_icon_default = StartHereIcon;

// src/components/icons/tutorials-icon.tsx
import { Icon as Icon42 } from "@vtex/brand-ui";
import { jsx as jsx76, jsxs as jsxs63 } from "react/jsx-runtime";
var TutorialsIcon = (props) => /* @__PURE__ */ jsxs63(
  Icon42,
  {
    ...props,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx76(
        "path",
        {
          d: "M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20",
          stroke: "#4A596B",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx76(
        "path",
        {
          d: "M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z",
          stroke: "#4A596B",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx76(
        "path",
        {
          d: "M17 9H8",
          stroke: "#4A596B",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx76(
        "path",
        {
          d: "M15 13H8",
          stroke: "#4A596B",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx76(
        "path",
        {
          d: "M12 5H10H8",
          stroke: "#4A596B",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx76(
        "path",
        {
          d: "M16 5H15.5H15",
          stroke: "#4A596B",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var tutorials_icon_default = TutorialsIcon;

// src/components/icons/announcement-icon.tsx
import { Icon as Icon43 } from "@vtex/brand-ui";
import { jsx as jsx77, jsxs as jsxs64 } from "react/jsx-runtime";
var AnnouncementIcon = (props) => /* @__PURE__ */ jsxs64(
  Icon43,
  {
    ...props,
    viewBox: "0 0 256 256",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx77("rect", { width: "16rem", height: "16rem", fill: "none" }),
      /* @__PURE__ */ jsx77(
        "path",
        {
          d: "M56.20305,104A71.899,71.899,0,0,1,128.5484,32.002c39.58967.29432,71.25651,33.20133,71.25651,72.90185V112c0,35.81563,7.49325,56.59893,14.093,67.95814A7.999,7.999,0,0,1,207.01628,192H48.98365A7.99908,7.99908,0,0,1,42.103,179.95641c6.60328-11.35959,14.1-32.1426,14.1-67.95641Z",
          fill: "none",
          stroke: "#4A596B",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "18"
        }
      ),
      /* @__PURE__ */ jsx77(
        "path",
        {
          d: "M96,192v8a32,32,0,0,0,64,0v-8",
          fill: "none",
          stroke: "#4A596B",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "18"
        }
      )
    ]
  }
);
var announcement_icon_default = AnnouncementIcon;

// src/components/icons/vtex-devportal-icon.tsx
import { Icon as Icon44 } from "@vtex/brand-ui";
import { jsx as jsx78, jsxs as jsxs65 } from "react/jsx-runtime";
var VTEXDevPortalIcon = (props) => /* @__PURE__ */ jsxs65(
  Icon44,
  {
    ...props,
    viewBox: "0 0 204 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx78("g", { clipPath: "url(#clip0_2044_123231)", children: /* @__PURE__ */ jsx78(
        "path",
        {
          d: "M33.5348 0.751221H6.47098C4.37195 0.751221 3.01813 2.95123 3.99934 4.77234L6.70696 9.82013H1.80094C0.80732 9.82013 0 10.6146 0 11.5924C0 11.8857 0.0745218 12.1668 0.211145 12.4235L8.91778 28.6424C9.38975 29.5102 10.4827 29.8402 11.3522 29.3757C11.6751 29.2046 11.9359 28.9479 12.0974 28.6424L14.4572 24.2668L17.4257 29.7913C18.469 31.7346 21.3008 31.7346 22.3441 29.7913L35.9319 4.67456C36.8883 2.89011 35.5718 0.751221 33.5348 0.751221ZM21.3753 11.4824L15.5254 22.3235C15.2149 22.8979 14.4821 23.1179 13.8983 22.8124C13.6872 22.7024 13.5133 22.5313 13.4015 22.3235L7.61365 11.5312C7.30314 10.9568 7.5267 10.2357 8.11046 9.93013C8.28434 9.84457 8.47065 9.79568 8.66937 9.79568H20.3445C20.9903 9.79568 21.512 10.309 21.512 10.9446C21.512 11.1279 21.4623 11.3235 21.3753 11.4824ZM62.3251 12.4112H59.3691V22.3968C59.3691 22.5802 59.2076 22.739 59.0213 22.739H56.7359C56.5496 22.739 56.3882 22.5802 56.3882 22.3968V12.4112H53.4073C53.221 12.4235 53.072 12.2768 53.0595 12.0935V12.0812V10.309C53.0595 10.1257 53.2086 9.97902 53.3949 9.97902H53.4073H62.3251C62.5114 9.96679 62.6853 10.1135 62.6853 10.309V12.0812C62.6729 12.2646 62.5114 12.4112 62.3251 12.4112ZM71.8266 22.6657C71.218 22.7513 70.1871 22.8857 68.3117 22.8857C66.0636 22.8857 64.0764 22.3235 64.0764 19.1946V13.499C64.0764 10.3824 66.076 9.83235 68.3241 9.83235C70.1996 9.83235 71.218 9.96679 71.8266 10.0524C72.075 10.089 72.1744 10.1746 72.1744 10.3946V11.9957C72.1744 12.179 72.0129 12.3379 71.8266 12.3379H68.1502C67.3305 12.3379 67.0324 12.6068 67.0324 13.499V15.0635H71.6776C71.8639 15.0635 72.0253 15.2224 72.0253 15.4057V17.0313C72.0253 17.2146 71.8639 17.3735 71.6776 17.3735H67.0324V19.1946C67.0324 20.0868 67.3305 20.3557 68.1502 20.3557H71.8266C72.0129 20.3557 72.1744 20.5146 72.1744 20.6979V22.299C72.1744 22.519 72.075 22.629 71.8266 22.6657ZM84.9797 22.7268H82.21C81.9864 22.7268 81.8746 22.6535 81.7629 22.4702L79.3533 18.7179L77.1798 22.3846C77.0556 22.5924 76.9314 22.7268 76.7451 22.7268H74.1616C73.9877 22.7268 73.9008 22.629 73.9008 22.5068C73.9008 22.4702 73.9132 22.4213 73.9381 22.3846L77.7138 16.1879L73.9008 10.309C73.876 10.2724 73.8635 10.2479 73.8635 10.2112C73.876 10.0768 73.9877 9.97902 74.1244 9.99124H76.9314C77.1177 9.99124 77.2667 10.1624 77.3661 10.3212L79.6017 13.7801L81.7629 10.3212C81.8498 10.1624 82.0113 9.99124 82.1976 9.99124H84.781C84.9176 9.99124 85.0294 10.089 85.0418 10.2112C85.0418 10.2479 85.0294 10.2846 85.0046 10.309L81.2039 16.2246L85.166 22.3846C85.1909 22.4335 85.2157 22.4946 85.2157 22.5557C85.2033 22.6657 85.1163 22.7268 84.9797 22.7268ZM51.3455 10.0157C51.3704 10.0157 51.3828 10.0157 51.4076 10.0279C51.5567 10.0646 51.6436 10.199 51.6064 10.3457C51.6064 10.3457 48.5882 20.8813 48.5385 21.0157C48.1287 22.2379 47.0605 22.8735 45.8558 22.8735C44.5765 22.8735 43.5828 22.2746 43.173 21.0157C43.1357 20.9057 40.0431 10.3457 40.0431 10.3457C40.0431 10.3212 40.0306 10.309 40.0306 10.2846C40.0306 10.1379 40.1548 10.0157 40.3039 10.0157H42.8004C42.9246 10.0157 43.0364 10.1012 43.0612 10.2235L45.5949 19.439C45.6322 19.6224 45.6819 19.6957 45.8433 19.6957C46.0048 19.6957 46.0545 19.6224 46.0918 19.439L48.6255 10.2235C48.6503 10.1012 48.7621 10.0157 48.8863 10.0157H51.3455Z",
          fill: "#E31C58"
        }
      ) }),
      /* @__PURE__ */ jsx78(
        "path",
        {
          d: "M98.7088 0.751221H97.2158V31.2488H98.7088V0.751221Z",
          fill: "#E31C58"
        }
      ),
      /* @__PURE__ */ jsx78(
        "path",
        {
          d: "M112.221 21.5H116.037C120.393 21.5 122.661 19.34 122.661 15.362C122.661 11.402 120.393 9.26 116.037 9.26H112.221V21.5ZM114.003 19.988V10.772H115.947C119.385 10.772 120.789 12.464 120.789 15.362C120.789 18.278 119.385 19.988 115.947 19.988H114.003ZM128.357 21.68C130.481 21.68 131.885 20.618 132.227 18.89L130.697 18.512C130.463 19.736 129.581 20.294 128.411 20.294C126.683 20.294 125.891 19.088 125.855 17.162H132.263C132.263 17.072 132.281 17.036 132.281 16.73C132.281 13.958 130.841 12.41 128.429 12.41C125.693 12.41 124.127 14.39 124.127 17.18C124.127 19.88 125.603 21.68 128.357 21.68ZM125.945 16.01C126.197 14.552 127.025 13.76 128.339 13.76C129.707 13.76 130.463 14.624 130.517 16.01H125.945ZM136.207 21.5H138.817L141.805 12.608H140.023L137.575 20.366L135.145 12.608H133.255L136.207 21.5ZM147.025 21.68C149.149 21.68 150.553 20.618 150.895 18.89L149.365 18.512C149.131 19.736 148.249 20.294 147.079 20.294C145.351 20.294 144.559 19.088 144.523 17.162H150.931C150.931 17.072 150.949 17.036 150.949 16.73C150.949 13.958 149.509 12.41 147.097 12.41C144.361 12.41 142.795 14.39 142.795 17.18C142.795 19.88 144.271 21.68 147.025 21.68ZM144.613 16.01C144.865 14.552 145.693 13.76 147.007 13.76C148.375 13.76 149.131 14.624 149.185 16.01H144.613ZM153.102 21.5H154.758V9.26H153.102V21.5ZM161.425 21.68C163.873 21.68 165.799 20.078 165.799 17.054C165.799 14.012 163.873 12.41 161.425 12.41C158.995 12.41 157.033 14.012 157.033 17.054C157.033 20.078 158.995 21.68 161.425 21.68ZM158.779 17.054C158.779 15.02 159.841 13.886 161.425 13.886C163.027 13.886 164.071 15.02 164.071 17.054C164.071 19.07 163.027 20.222 161.425 20.222C159.841 20.222 158.779 19.07 158.779 17.054ZM167.991 24.848H169.647V18.854H169.665C170.061 21.032 171.195 21.68 172.761 21.68C174.813 21.68 176.433 20.186 176.433 17.108C176.433 14.012 174.741 12.446 172.653 12.446C171.051 12.446 170.133 13.346 169.665 14.984H169.629V12.608H167.991V24.848ZM169.683 17.108C169.683 14.966 170.745 13.886 172.185 13.886C173.643 13.886 174.687 14.948 174.687 17.108C174.687 19.196 173.679 20.222 172.185 20.222C170.709 20.222 169.683 19.196 169.683 17.108ZM182.427 21.68C184.551 21.68 185.955 20.618 186.297 18.89L184.767 18.512C184.533 19.736 183.651 20.294 182.481 20.294C180.753 20.294 179.961 19.088 179.925 17.162H186.333C186.333 17.072 186.351 17.036 186.351 16.73C186.351 13.958 184.911 12.41 182.499 12.41C179.763 12.41 178.197 14.39 178.197 17.18C178.197 19.88 179.673 21.68 182.427 21.68ZM180.015 16.01C180.267 14.552 181.095 13.76 182.409 13.76C183.777 13.76 184.533 14.624 184.587 16.01H180.015ZM188.505 21.5H190.161V16.784C190.161 15.056 191.079 14.084 192.717 14.084C193.059 14.084 193.473 14.12 193.725 14.174L193.635 12.518C193.383 12.464 193.005 12.428 192.717 12.428C191.421 12.428 190.593 13.004 190.107 15.182H190.053V12.608H188.505V21.5ZM198.692 21.68C200.996 21.68 202.454 20.636 202.454 18.71C202.454 16.892 200.942 16.532 199.448 16.28L198.134 16.082C197.27 15.938 196.676 15.722 196.676 14.966C196.676 14.156 197.396 13.724 198.404 13.724C199.556 13.724 200.33 14.282 200.474 15.452L202.112 15.092C201.896 13.328 200.348 12.428 198.476 12.428C196.478 12.428 195.002 13.418 195.002 15.092C195.002 16.694 196.28 17.216 197.504 17.414L198.944 17.63C200.078 17.81 200.762 18.062 200.762 18.908C200.762 19.808 200.042 20.348 198.656 20.348C197.414 20.348 196.55 19.736 196.406 18.368L194.696 18.728C194.84 20.672 196.442 21.68 198.692 21.68Z",
          fill: "#E31C58"
        }
      ),
      /* @__PURE__ */ jsx78("defs", { children: /* @__PURE__ */ jsx78("clipPath", { id: "clip0_2044_123231", children: /* @__PURE__ */ jsx78(
        "rect",
        {
          width: "85.2157",
          height: "30.4976",
          fill: "white",
          transform: "translate(0 0.751221)"
        }
      ) }) })
    ]
  }
);
var vtex_devportal_icon_default = VTEXDevPortalIcon;

// src/components/icons/vtex-helpcenter-icon.tsx
import { Icon as Icon45 } from "@vtex/brand-ui";
import { jsx as jsx79, jsxs as jsxs66 } from "react/jsx-runtime";
var VTEXHelpCenterIcon = (props) => /* @__PURE__ */ jsxs66(
  Icon45,
  {
    ...props,
    viewBox: "0 0 208 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx79(
        "path",
        {
          d: "M33.5348 0H6.47098C4.37195 0 3.01813 2.2 3.99934 4.02112L6.70696 9.06891H1.80094C0.80732 9.06891 0 9.86335 0 10.8411C0 11.1345 0.0745218 11.4156 0.211145 11.6722L8.91778 27.8912C9.38975 28.7589 10.4827 29.0889 11.3522 28.6245C11.6751 28.4534 11.9359 28.1967 12.0974 27.8912L14.4572 23.5156L17.4257 29.0401C18.469 30.9834 21.3008 30.9834 22.3441 29.0401L35.9319 3.92334C36.8883 2.13889 35.5718 0 33.5348 0ZM21.3753 10.7311L15.5254 21.5723C15.2149 22.1467 14.4821 22.3667 13.8983 22.0612C13.6872 21.9512 13.5133 21.78 13.4015 21.5723L7.61365 10.78C7.30314 10.2056 7.5267 9.48446 8.11046 9.17891C8.28434 9.09335 8.47065 9.04446 8.66937 9.04446H20.3445C20.9903 9.04446 21.512 9.5578 21.512 10.1934C21.512 10.3767 21.4623 10.5722 21.3753 10.7311ZM62.3251 11.66H59.3691V21.6456C59.3691 21.8289 59.2076 21.9878 59.0213 21.9878H56.7359C56.5496 21.9878 56.3882 21.8289 56.3882 21.6456V11.66H53.4073C53.221 11.6722 53.072 11.5256 53.0595 11.3422V11.33V9.5578C53.0595 9.37446 53.2086 9.2278 53.3949 9.2278H53.4073H62.3251C62.5114 9.21557 62.6853 9.36224 62.6853 9.5578V11.33C62.6729 11.5134 62.5114 11.66 62.3251 11.66ZM71.8266 21.9145C71.218 22 70.1871 22.1345 68.3117 22.1345C66.0636 22.1345 64.0764 21.5723 64.0764 18.4434V12.7478C64.0764 9.63113 66.076 9.08113 68.3241 9.08113C70.1996 9.08113 71.218 9.21557 71.8266 9.30113C72.075 9.3378 72.1744 9.42335 72.1744 9.64335V11.2445C72.1744 11.4278 72.0129 11.5867 71.8266 11.5867H68.1502C67.3305 11.5867 67.0324 11.8556 67.0324 12.7478V14.3123H71.6776C71.8639 14.3123 72.0253 14.4711 72.0253 14.6545V16.28C72.0253 16.4634 71.8639 16.6223 71.6776 16.6223H67.0324V18.4434C67.0324 19.3356 67.3305 19.6045 68.1502 19.6045H71.8266C72.0129 19.6045 72.1744 19.7634 72.1744 19.9467V21.5478C72.1744 21.7678 72.075 21.8778 71.8266 21.9145ZM84.9797 21.9756H82.21C81.9864 21.9756 81.8746 21.9023 81.7629 21.7189L79.3533 17.9667L77.1798 21.6334C77.0556 21.8412 76.9314 21.9756 76.7451 21.9756H74.1616C73.9877 21.9756 73.9008 21.8778 73.9008 21.7556C73.9008 21.7189 73.9132 21.67 73.9381 21.6334L77.7138 15.4367L73.9008 9.5578C73.876 9.52113 73.8636 9.49669 73.8636 9.46002C73.876 9.32557 73.9878 9.2278 74.1244 9.24002H76.9314C77.1177 9.24002 77.2667 9.41113 77.3661 9.57002L79.6017 13.0289L81.7629 9.57002C81.8498 9.41113 82.0113 9.24002 82.1976 9.24002H84.781C84.9176 9.24002 85.0294 9.3378 85.0418 9.46002C85.0418 9.49669 85.0294 9.53335 85.0046 9.5578L81.2039 15.4734L85.166 21.6334C85.1909 21.6823 85.2157 21.7434 85.2157 21.8045C85.2033 21.9145 85.1163 21.9756 84.9797 21.9756ZM51.3455 9.26446C51.3704 9.26446 51.3828 9.26446 51.4076 9.27669C51.5567 9.31335 51.6436 9.4478 51.6064 9.59446C51.6064 9.59446 48.5882 20.13 48.5385 20.2645C48.1287 21.4867 47.0605 22.1223 45.8558 22.1223C44.5765 22.1223 43.5828 21.5234 43.173 20.2645C43.1357 20.1545 40.0431 9.59446 40.0431 9.59446C40.0431 9.57002 40.0306 9.5578 40.0306 9.53335C40.0306 9.38669 40.1548 9.26446 40.3039 9.26446H42.8004C42.9246 9.26446 43.0364 9.35002 43.0612 9.47224L45.5949 18.6878C45.6322 18.8711 45.6819 18.9445 45.8433 18.9445C46.0048 18.9445 46.0545 18.8711 46.0917 18.6878L48.6255 9.47224C48.6503 9.35002 48.7621 9.26446 48.8863 9.26446H51.3455Z",
          fill: "#E31C58"
        }
      ),
      /* @__PURE__ */ jsx79("path", { d: "M98.7078 0H97.2148V30.4976H98.7078V0Z", fill: "#E31C58" }),
      /* @__PURE__ */ jsx79(
        "path",
        {
          d: "M120.139 20.748V8.50805H121.921V20.748H120.139ZM112.219 20.748V8.50805H114.001V20.748H112.219ZM112.741 15.222V13.746H120.931V15.222H112.741ZM128.144 20.928C127.46 20.928 126.854 20.82 126.326 20.604C125.798 20.388 125.354 20.082 124.994 19.686C124.634 19.29 124.364 18.816 124.184 18.264C124.004 17.712 123.914 17.1 123.914 16.428C123.914 15.492 124.082 14.67 124.418 13.962C124.754 13.242 125.24 12.678 125.876 12.27C126.524 11.862 127.304 11.658 128.216 11.658C129.02 11.658 129.71 11.826 130.286 12.162C130.862 12.498 131.3 12.99 131.6 13.638C131.912 14.274 132.068 15.054 132.068 15.978C132.068 16.134 132.062 16.236 132.05 16.284C132.05 16.32 132.05 16.362 132.05 16.41H125.408V15.258H130.754L130.304 15.708C130.34 15.156 130.28 14.682 130.124 14.286C129.968 13.878 129.722 13.566 129.386 13.35C129.05 13.122 128.63 13.008 128.126 13.008C127.586 13.008 127.13 13.14 126.758 13.404C126.398 13.656 126.122 14.028 125.93 14.52C125.738 15 125.642 15.594 125.642 16.302C125.642 16.806 125.69 17.256 125.786 17.652C125.894 18.048 126.05 18.39 126.254 18.678C126.47 18.954 126.734 19.17 127.046 19.326C127.37 19.47 127.754 19.542 128.198 19.542C128.594 19.542 128.948 19.482 129.26 19.362C129.572 19.23 129.836 19.032 130.052 18.768C130.268 18.504 130.412 18.168 130.484 17.76L132.014 18.138C131.906 18.714 131.678 19.212 131.33 19.632C130.994 20.04 130.556 20.358 130.016 20.586C129.476 20.814 128.852 20.928 128.144 20.928ZM134.221 20.748V8.50805H135.877V20.748H134.221ZM138.44 24.096V11.856H140.078V14.232H140.114C140.354 13.416 140.708 12.792 141.176 12.36C141.656 11.916 142.298 11.694 143.102 11.694C143.63 11.694 144.122 11.796 144.578 12C145.034 12.192 145.43 12.48 145.766 12.864C146.114 13.248 146.384 13.734 146.576 14.322C146.78 14.898 146.882 15.576 146.882 16.356C146.882 17.376 146.72 18.228 146.396 18.912C146.072 19.584 145.628 20.088 145.064 20.424C144.512 20.76 143.894 20.928 143.21 20.928C142.694 20.928 142.226 20.844 141.806 20.676C141.386 20.508 141.032 20.22 140.744 19.812C140.456 19.392 140.246 18.822 140.114 18.102H140.096V24.096H138.44ZM142.634 19.47C143.138 19.47 143.576 19.356 143.948 19.128C144.32 18.9 144.608 18.558 144.812 18.102C145.028 17.634 145.136 17.052 145.136 16.356C145.136 15.816 145.076 15.348 144.956 14.952C144.836 14.544 144.662 14.208 144.434 13.944C144.206 13.668 143.936 13.464 143.624 13.332C143.324 13.2 142.994 13.134 142.634 13.134C142.154 13.134 141.722 13.254 141.338 13.494C140.966 13.734 140.672 14.094 140.456 14.574C140.24 15.042 140.132 15.636 140.132 16.356C140.132 16.872 140.192 17.328 140.312 17.724C140.432 18.108 140.6 18.432 140.816 18.696C141.044 18.96 141.308 19.158 141.608 19.29C141.92 19.41 142.262 19.47 142.634 19.47ZM158.704 20.946C157.888 20.946 157.138 20.808 156.454 20.532C155.782 20.256 155.194 19.848 154.69 19.308C154.198 18.768 153.814 18.108 153.538 17.328C153.274 16.548 153.142 15.654 153.142 14.646C153.142 13.638 153.28 12.744 153.556 11.964C153.832 11.172 154.222 10.512 154.726 9.98405C155.242 9.44405 155.848 9.03605 156.544 8.76005C157.24 8.48405 158.008 8.34605 158.848 8.34605C159.748 8.34605 160.558 8.52605 161.278 8.88605C161.998 9.23405 162.598 9.74405 163.078 10.416C163.558 11.076 163.876 11.88 164.032 12.828L162.25 13.188C162.118 12.456 161.896 11.85 161.584 11.37C161.284 10.89 160.894 10.536 160.414 10.308C159.934 10.068 159.376 9.94805 158.74 9.94805C157.972 9.94805 157.306 10.134 156.742 10.506C156.178 10.878 155.74 11.412 155.428 12.108C155.116 12.804 154.96 13.65 154.96 14.646C154.96 15.618 155.116 16.458 155.428 17.166C155.74 17.862 156.178 18.402 156.742 18.786C157.318 19.158 157.984 19.344 158.74 19.344C159.376 19.344 159.946 19.218 160.45 18.966C160.954 18.702 161.362 18.306 161.674 17.778C161.998 17.25 162.202 16.584 162.286 15.78L164.086 16.194C163.966 17.214 163.654 18.078 163.15 18.786C162.658 19.494 162.028 20.034 161.26 20.406C160.492 20.766 159.64 20.946 158.704 20.946ZM169.751 20.928C169.067 20.928 168.461 20.82 167.933 20.604C167.405 20.388 166.961 20.082 166.601 19.686C166.241 19.29 165.971 18.816 165.791 18.264C165.611 17.712 165.521 17.1 165.521 16.428C165.521 15.492 165.689 14.67 166.025 13.962C166.361 13.242 166.847 12.678 167.483 12.27C168.131 11.862 168.911 11.658 169.823 11.658C170.627 11.658 171.317 11.826 171.893 12.162C172.469 12.498 172.907 12.99 173.207 13.638C173.519 14.274 173.675 15.054 173.675 15.978C173.675 16.134 173.669 16.236 173.657 16.284C173.657 16.32 173.657 16.362 173.657 16.41H167.015V15.258H172.361L171.911 15.708C171.947 15.156 171.887 14.682 171.731 14.286C171.575 13.878 171.329 13.566 170.993 13.35C170.657 13.122 170.237 13.008 169.733 13.008C169.193 13.008 168.737 13.14 168.365 13.404C168.005 13.656 167.729 14.028 167.537 14.52C167.345 15 167.249 15.594 167.249 16.302C167.249 16.806 167.297 17.256 167.393 17.652C167.501 18.048 167.657 18.39 167.861 18.678C168.077 18.954 168.341 19.17 168.653 19.326C168.977 19.47 169.361 19.542 169.805 19.542C170.201 19.542 170.555 19.482 170.867 19.362C171.179 19.23 171.443 19.032 171.659 18.768C171.875 18.504 172.019 18.168 172.091 17.76L173.621 18.138C173.513 18.714 173.285 19.212 172.937 19.632C172.601 20.04 172.163 20.358 171.623 20.586C171.083 20.814 170.459 20.928 169.751 20.928ZM175.829 20.748V11.856H177.395V14.106H177.449C177.569 13.554 177.755 13.098 178.007 12.738C178.259 12.378 178.577 12.108 178.961 11.928C179.345 11.748 179.783 11.658 180.275 11.658C180.767 11.658 181.205 11.73 181.589 11.874C181.973 12.018 182.297 12.24 182.561 12.54C182.825 12.828 183.023 13.2 183.155 13.656C183.299 14.1 183.371 14.628 183.371 15.24V20.748H181.715V15.33C181.715 14.874 181.637 14.484 181.481 14.16C181.337 13.824 181.115 13.572 180.815 13.404C180.515 13.224 180.137 13.134 179.681 13.134C178.949 13.134 178.397 13.332 178.025 13.728C177.665 14.112 177.485 14.646 177.485 15.33V20.748H175.829ZM188.749 20.928C188.269 20.928 187.849 20.862 187.489 20.73C187.141 20.598 186.871 20.376 186.679 20.064C186.487 19.74 186.391 19.302 186.391 18.75V12.9L187.687 11.856H190.549V13.242H184.897V12.234C185.233 12.138 185.521 12.018 185.761 11.874C186.001 11.73 186.199 11.55 186.355 11.334C186.523 11.106 186.655 10.836 186.751 10.524C186.847 10.2 186.913 9.82205 186.949 9.39005H188.047V18.39C188.047 18.822 188.143 19.116 188.335 19.272C188.527 19.416 188.809 19.488 189.181 19.488C189.469 19.488 189.739 19.464 189.991 19.416C190.255 19.356 190.477 19.302 190.657 19.254L190.441 20.712C190.213 20.772 189.949 20.82 189.649 20.856C189.361 20.904 189.061 20.928 188.749 20.928ZM196.259 20.928C195.575 20.928 194.969 20.82 194.441 20.604C193.913 20.388 193.469 20.082 193.109 19.686C192.749 19.29 192.479 18.816 192.299 18.264C192.119 17.712 192.029 17.1 192.029 16.428C192.029 15.492 192.197 14.67 192.533 13.962C192.869 13.242 193.355 12.678 193.991 12.27C194.639 11.862 195.419 11.658 196.331 11.658C197.135 11.658 197.825 11.826 198.401 12.162C198.977 12.498 199.415 12.99 199.715 13.638C200.027 14.274 200.183 15.054 200.183 15.978C200.183 16.134 200.177 16.236 200.165 16.284C200.165 16.32 200.165 16.362 200.165 16.41H193.523V15.258H198.869L198.419 15.708C198.455 15.156 198.395 14.682 198.239 14.286C198.083 13.878 197.837 13.566 197.501 13.35C197.165 13.122 196.745 13.008 196.241 13.008C195.701 13.008 195.245 13.14 194.873 13.404C194.513 13.656 194.237 14.028 194.045 14.52C193.853 15 193.757 15.594 193.757 16.302C193.757 16.806 193.805 17.256 193.901 17.652C194.009 18.048 194.165 18.39 194.369 18.678C194.585 18.954 194.849 19.17 195.161 19.326C195.485 19.47 195.869 19.542 196.313 19.542C196.709 19.542 197.063 19.482 197.375 19.362C197.687 19.23 197.951 19.032 198.167 18.768C198.383 18.504 198.527 18.168 198.599 17.76L200.129 18.138C200.021 18.714 199.793 19.212 199.445 19.632C199.109 20.04 198.671 20.358 198.131 20.586C197.591 20.814 196.967 20.928 196.259 20.928ZM202.337 20.748V11.856H203.885V14.43H203.939C204.107 13.698 204.311 13.134 204.551 12.738C204.791 12.342 205.073 12.066 205.397 11.91C205.733 11.754 206.117 11.676 206.549 11.676C206.693 11.676 206.849 11.688 207.017 11.712C207.197 11.724 207.347 11.742 207.467 11.766L207.557 13.422C207.437 13.398 207.281 13.38 207.089 13.368C206.897 13.344 206.717 13.332 206.549 13.332C206.009 13.332 205.547 13.44 205.163 13.656C204.779 13.86 204.485 14.166 204.281 14.574C204.089 14.97 203.993 15.456 203.993 16.032V20.748H202.337Z",
          fill: "#E31D58"
        }
      )
    ]
  }
);
var vtex_helpcenter_icon_default = VTEXHelpCenterIcon;

// src/components/icons/info-icon.tsx
import { Icon as Icon46 } from "@vtex/brand-ui";
import { jsx as jsx80, jsxs as jsxs67 } from "react/jsx-runtime";
var InfoIcon = (props) => /* @__PURE__ */ jsxs67(
  Icon46,
  {
    ...props,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx80(
        "path",
        {
          d: "M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z",
          fill: "#ECEFF2"
        }
      ),
      /* @__PURE__ */ jsx80(
        "path",
        {
          d: "M9.5 12.2231C9.5 12.3615 9.35714 12.5 9.21429 12.5H6.78571C6.64286 12.5 6.5 12.3615 6.5 12.2231V11.6692C6.5 11.5307 6.64286 11.3923 6.78571 11.3923H7.21429V8.06901H6.78571C6.64286 8.06901 6.5 7.93054 6.5 7.79207V7.09973C6.5 6.96126 6.64286 6.82279 6.78571 6.82279H8.5C8.64286 6.82279 8.78571 6.96126 8.78571 7.09973V11.2538H9.21429C9.35714 11.2538 9.5 11.3923 9.5 11.5307V12.2231V12.2231Z",
          fill: "#5B6E84"
        }
      ),
      /* @__PURE__ */ jsx80(
        "path",
        {
          d: "M8.0714 5.43856C8.62368 5.43856 9.0714 5.0046 9.0714 4.46928C9.0714 3.93396 8.62368 3.5 8.0714 3.5C7.51911 3.5 7.0714 3.93396 7.0714 4.46928C7.0714 5.0046 7.51911 5.43856 8.0714 5.43856Z",
          fill: "#5B6E84"
        }
      )
    ]
  }
);
var info_icon_default = InfoIcon;

// src/components/icons/new-icon.tsx
import { Icon as Icon47 } from "@vtex/brand-ui";
import { jsx as jsx81, jsxs as jsxs68 } from "react/jsx-runtime";
var NewIcon = (props) => /* @__PURE__ */ jsxs68(
  Icon47,
  {
    ...props,
    viewBox: "0 0 17 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx81("circle", { cx: "8.50146", cy: "8", r: "8", fill: "#F71963" }),
      /* @__PURE__ */ jsxs68("g", { clipPath: "url(#clip0_462_17766)", children: [
        /* @__PURE__ */ jsx81(
          "path",
          {
            d: "M12.6681 6L8.7098 9.95833L6.62646 7.875L3.50146 11",
            stroke: "#FFF3F6",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx81(
          "path",
          {
            d: "M10.1685 6H12.6685V8.5",
            stroke: "#FFF3F6",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ] }),
      /* @__PURE__ */ jsx81("defs", { children: /* @__PURE__ */ jsx81("clipPath", { id: "clip0_462_17766", children: /* @__PURE__ */ jsx81(
        "rect",
        {
          width: "11",
          height: "9",
          fill: "white",
          transform: "translate(2.50146 4)"
        }
      ) }) })
    ]
  }
);
var new_icon_default = NewIcon;

// src/components/icons/github-icon.tsx
import { Icon as Icon48 } from "@vtex/brand-ui";
import { jsx as jsx82 } from "react/jsx-runtime";
var GithubIcon = (props) => /* @__PURE__ */ jsx82(
  Icon48,
  {
    ...props,
    viewBox: "0 0 64 65",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx82(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14.4 16.7314C10.6667 20.7314 8 26.3314 8 33.5314C8 38.8647 9.86667 43.9314 12.8 47.9314C16.2667 52.4647 21.3333 55.1314 24 56.198V54.3314C24 54.3314 24 50.0647 26.4 46.3314C21.0667 46.0647 16.8 40.998 16.8 35.1314C16.8 32.998 17.6 31.1314 18.9333 29.5314L19.2 24.4647C19.2 23.1314 20.5333 22.3314 21.8667 22.598L27.4667 24.7314C29.0667 24.4647 30.6667 24.198 32.5333 24.198C34.4 24.198 36 24.4647 37.6 24.7314L42.4 22.3314C43.7333 21.798 45.0667 22.8647 45.0667 24.198L45.3333 29.2647C46.6667 30.8647 47.4667 32.998 47.4667 34.8647C47.4667 40.7314 43.2 45.5314 37.8667 46.0647C40.2667 49.798 40.2667 54.0647 40.2667 54.0647V55.9314C42.9333 54.8647 48 52.198 51.4667 47.6647C54.4 43.9314 56.2667 38.598 56.2667 33.2647C56.2667 26.0647 53.6 20.4647 49.8667 16.4647C44.8 11.398 37.8667 8.99805 32 8.99805C26.1333 8.99805 19.2 11.398 14.4 16.7314V16.7314Z",
        stroke: "#4A596B",
        strokeWidth: "3",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var github_icon_default = GithubIcon;

// src/components/icons/community-icon.tsx
import { Icon as Icon49 } from "@vtex/brand-ui";
import { jsx as jsx83, jsxs as jsxs69 } from "react/jsx-runtime";
var CommunityIcon = (props) => /* @__PURE__ */ jsxs69(
  Icon49,
  {
    ...props,
    viewBox: "0 0 64 65",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      " ",
      /* @__PURE__ */ jsx83(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M50.6667 56.998H29.3333C26.3867 56.998 24 54.6114 24 51.6647V30.3314C24 27.3847 26.3867 24.998 29.3333 24.998H50.6667C53.6133 24.998 56 27.3847 56 30.3314V51.6647C56 54.6114 53.6133 56.998 50.6667 56.998Z",
          stroke: "#4A596B",
          strokeWidth: "3",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx83(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M34.6667 40.998H13.3333C10.3867 40.998 8 38.6114 8 35.6647V14.3314C8 11.3847 10.3867 8.99805 13.3333 8.99805H34.6667C37.6133 8.99805 40 11.3847 40 14.3314V35.6647C40 38.6114 37.6133 40.998 34.6667 40.998Z",
          stroke: "#4A596B",
          strokeWidth: "3",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var community_icon_default = CommunityIcon;

// src/components/icons/facebook-circle-icon.tsx
import { Icon as Icon50 } from "@vtex/brand-ui";
import { jsx as jsx84, jsxs as jsxs70 } from "react/jsx-runtime";
var FacebookCircleIcon = (props) => /* @__PURE__ */ jsxs70(
  Icon50,
  {
    ...props,
    viewBox: "0 0 33 33",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx84(
        "path",
        {
          d: "M31.5501 16.8379C31.5501 25.3976 24.6 32.3379 16.025 32.3379C7.45006 32.3379 0.5 25.3976 0.5 16.8379C0.5 8.27821 7.45006 1.33789 16.025 1.33789C24.6 1.33789 31.5501 8.27821 31.5501 16.8379Z",
          stroke: "#4D596A"
        }
      ),
      /* @__PURE__ */ jsx84("g", { clipPath: "url(#clip0_311_37415)", children: /* @__PURE__ */ jsx84(
        "path",
        {
          d: "M17.5268 17.9629H19.4047L20.1559 14.9629H17.5268V13.4629C17.5268 12.6904 17.5268 11.9629 19.0291 11.9629H20.1559V9.44289C19.911 9.41064 18.9863 9.33789 18.0098 9.33789C15.9703 9.33789 14.5221 10.5806 14.5221 12.8629V14.9629H12.2686V17.9629H14.5221V24.3379H17.5268V17.9629Z",
          fill: "#CCCED7"
        }
      ) }),
      /* @__PURE__ */ jsx84("defs", { children: /* @__PURE__ */ jsx84("clipPath", { id: "clip0_311_37415", children: /* @__PURE__ */ jsx84(
        "rect",
        {
          width: "18.0282",
          height: "18",
          fill: "white",
          transform: "translate(7.01074 7.83789)"
        }
      ) }) })
    ]
  }
);
var facebook_circle_icon_default = FacebookCircleIcon;

// src/components/icons/linkedin-circle-icon.tsx
import { Icon as Icon51 } from "@vtex/brand-ui";
import { jsx as jsx85, jsxs as jsxs71 } from "react/jsx-runtime";
var LinkedinCircleIcon = (props) => /* @__PURE__ */ jsxs71(
  Icon51,
  {
    ...props,
    viewBox: "0 0 33 33",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx85(
        "path",
        {
          d: "M31.7005 16.8379C31.7005 25.3976 24.7504 32.3379 16.1754 32.3379C7.60045 32.3379 0.650391 25.3976 0.650391 16.8379C0.650391 8.27821 7.60045 1.33789 16.1754 1.33789C24.7504 1.33789 31.7005 8.27821 31.7005 16.8379Z",
          stroke: "#4D596A"
        }
      ),
      /* @__PURE__ */ jsx85("g", { clipPath: "url(#clip0_311_37418)", children: /* @__PURE__ */ jsx85(
        "path",
        {
          d: "M20.9353 21.5921H18.9334V18.4594C18.9334 17.7124 18.9184 16.7509 17.8893 16.7509C16.8459 16.7509 16.6866 17.5639 16.6866 18.4046V21.5921H14.684V15.1504H16.607V16.0279H16.6333C16.9022 15.5224 17.5557 14.9876 18.5323 14.9876C20.5604 14.9876 20.936 16.3211 20.936 18.0559V21.5921H20.9353ZM12.423 14.2691C12.2701 14.2693 12.1188 14.2394 11.9776 14.1811C11.8363 14.1228 11.708 14.0372 11.6 13.9293C11.492 13.8213 11.4064 13.6932 11.348 13.5521C11.2897 13.4111 11.2599 13.26 11.2601 13.1074C11.2603 12.8778 11.3286 12.6533 11.4565 12.4625C11.5844 12.2717 11.7661 12.123 11.9787 12.0352C12.1912 11.9475 12.425 11.9247 12.6506 11.9696C12.8761 12.0145 13.0832 12.1252 13.2457 12.2877C13.4082 12.4502 13.5189 12.6571 13.5636 12.8824C13.6083 13.1076 13.5851 13.341 13.497 13.5531C13.4088 13.7652 13.2597 13.9464 13.0684 14.0739C12.8771 14.2013 12.6529 14.2693 12.423 14.2691ZM13.4265 21.5921H11.4186V15.1504H13.4273V21.5921H13.4265ZM21.9381 10.0879H10.4143C9.86146 10.0879 9.41602 10.5229 9.41602 11.0606V22.6151C9.41602 23.1529 9.86221 23.5879 10.4136 23.5879H21.9351C22.4864 23.5879 22.9371 23.1529 22.9371 22.6151V11.0606C22.9371 10.5229 22.4864 10.0879 21.9351 10.0879H21.9381Z",
          fill: "#C5C7D1"
        }
      ) }),
      /* @__PURE__ */ jsx85("defs", { children: /* @__PURE__ */ jsx85("clipPath", { id: "clip0_311_37418", children: /* @__PURE__ */ jsx85(
        "rect",
        {
          width: "18.0282",
          height: "18",
          fill: "white",
          transform: "translate(7.16211 7.83789)"
        }
      ) }) })
    ]
  }
);
var linkedin_circle_icon_default = LinkedinCircleIcon;

// src/components/icons/twitter-circle-icon.tsx
import { Icon as Icon52 } from "@vtex/brand-ui";
import { jsx as jsx86, jsxs as jsxs72 } from "react/jsx-runtime";
var TwitterCircleIcon = (props) => /* @__PURE__ */ jsxs72(
  Icon52,
  {
    ...props,
    viewBox: "0 0 33 33",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx86(
        "path",
        {
          d: "M9.95605 9.54247C9.95868 9.54614 10.0339 9.65531 10.1232 9.78548C10.2126 9.91512 10.3477 10.1114 10.4234 10.2211C10.5874 10.4594 10.9296 10.9554 11.2356 11.3995C11.3581 11.5769 11.5463 11.8498 11.6535 12.0057C11.8307 12.2629 11.9773 12.4754 12.3842 13.0659C12.4599 13.1756 12.6245 13.4139 12.7496 13.596C12.8752 13.7776 12.9872 13.9409 12.9993 13.9582C13.0214 13.9902 13.0524 14.0348 13.607 14.84C13.7762 15.0851 14.0433 15.4724 14.2005 15.7008C14.3582 15.9285 14.5006 16.1359 14.518 16.1611C14.5469 16.2036 14.5485 16.2078 14.5411 16.2162C14.5364 16.2214 14.3713 16.4135 14.1742 16.6429C13.9771 16.8723 13.6816 17.216 13.5176 17.4061C13.3541 17.5966 13.1323 17.8538 13.0256 17.9782C12.9183 18.1026 12.708 18.3471 12.5577 18.5219C12.2191 18.915 11.0747 20.2451 10.6316 20.76C10.4507 20.9704 10.2215 21.2371 10.1227 21.352C10.0233 21.467 9.94238 21.562 9.94238 21.5635C9.94238 21.5651 10.1674 21.5656 10.4428 21.5651L10.9433 21.5635L11.1541 21.3189C11.7402 20.6382 11.8911 20.4629 12.084 20.2382C12.1997 20.1039 12.3369 19.9443 12.3895 19.884C12.4415 19.8231 12.9409 19.2436 13.4987 18.5954C14.0564 17.9472 14.621 17.2916 14.7524 17.1389C14.8844 16.9856 14.9943 16.8612 14.9974 16.8618C15 16.8623 15.0163 16.8838 15.0337 16.909C15.0742 16.9673 15.3391 17.352 15.6645 17.8238C15.8028 18.0243 16.0562 18.3918 16.227 18.64C16.3984 18.8883 16.6113 19.1974 16.7012 19.3276C16.7905 19.4572 16.9793 19.7312 17.1207 19.9364C17.2621 20.1411 17.3872 20.3233 17.3993 20.3406C17.4114 20.3579 17.5239 20.5206 17.649 20.7028C17.7741 20.8844 17.9134 21.0864 17.9581 21.1515C18.0033 21.2166 18.0764 21.3226 18.1211 21.3877C18.1663 21.4528 18.212 21.5194 18.2241 21.5362L18.2451 21.5662H19.9794H21.7136L21.7042 21.552C21.6994 21.5436 21.6069 21.4098 21.4997 21.2539C21.3924 21.098 21.2279 20.8592 21.1343 20.7237C20.7537 20.1716 20.5051 19.811 20.3784 19.6268C20.3043 19.5197 20.1529 19.3003 20.0414 19.1386C19.8233 18.8216 19.8054 18.7959 19.4179 18.2343C19.2765 18.0285 19.143 17.8354 19.1215 17.8039C19.1004 17.7729 19.0442 17.6921 18.9974 17.6244C18.9506 17.5567 18.8492 17.4087 18.7713 17.2964C18.6941 17.1835 18.6184 17.0738 18.6031 17.0523C18.5879 17.0308 18.5232 16.9363 18.4586 16.8423C18.3939 16.7484 18.3313 16.6576 18.3193 16.6403C18.3072 16.6229 18.2083 16.4802 18.1 16.3227C17.9918 16.1653 17.803 15.8913 17.6805 15.7139C17.3367 15.2158 17.2384 15.073 17.0755 14.8358L16.9241 14.6164L17.0834 14.4316C17.1706 14.3298 17.4335 14.0248 17.6669 13.7535C17.9008 13.4821 18.2115 13.1205 18.3582 12.9504C18.7955 12.4429 19.4116 11.727 20.3668 10.6174C20.8625 10.0416 21.2752 9.56241 21.2836 9.55349L21.2983 9.53617H20.7963H20.2948L19.869 10.028C19.4879 10.4683 19.0999 10.9192 17.0408 13.3126C16.7327 13.6706 16.4788 13.964 16.4772 13.9645C16.4757 13.965 16.4552 13.9377 16.4326 13.9041C16.4094 13.8705 16.2549 13.6454 16.0882 13.4045C15.9221 13.1635 15.7108 12.8565 15.6183 12.7221C15.5257 12.5878 15.4011 12.4072 15.3412 12.3206C15.2818 12.234 15.1041 11.9763 14.947 11.7485C14.7898 11.5202 14.6515 11.3197 14.6394 11.3024C14.6273 11.285 14.5285 11.1423 14.4202 10.9848C14.1463 10.5875 13.7994 10.0836 13.6679 9.89308C13.607 9.8049 13.5271 9.68891 13.4897 9.63432L13.4219 9.53617H11.6871C10.3004 9.53617 9.9529 9.53774 9.95605 9.54247ZM13.1917 10.587C13.2937 10.735 13.3867 10.8704 13.3988 10.8877C13.4203 10.9187 13.5581 11.1186 13.8472 11.5385C13.9271 11.654 14.0018 11.7627 14.0139 11.78C14.0259 11.7973 14.1248 11.9401 14.2331 12.0975C14.4507 12.414 14.7114 12.7919 15.3796 13.7614C15.6256 14.1177 15.8832 14.492 15.9526 14.5933C16.0667 14.7591 16.2796 15.0678 16.4741 15.3491C16.514 15.4068 16.6618 15.6204 16.8016 15.8241C16.9419 16.0277 17.0665 16.2083 17.0786 16.2256C17.0907 16.2429 17.2164 16.4245 17.3572 16.6298C17.4987 16.8345 17.7005 17.1273 17.8057 17.2806C18.1847 17.8296 18.611 18.4484 19.0557 19.094C19.1803 19.2746 19.3953 19.5864 19.5336 19.7869C19.6719 19.9874 19.8364 20.2262 19.899 20.317C19.9615 20.4078 20.0577 20.5474 20.1124 20.6266C20.1676 20.7059 20.2138 20.7741 20.2159 20.7778C20.2196 20.7825 20.063 20.7841 19.44 20.7841H18.6599L18.5742 20.6592C18.499 20.5505 18.252 20.1921 17.741 19.4509C17.6621 19.337 17.4745 19.0641 17.3231 18.8447C16.9362 18.2836 16.7984 18.0837 16.5976 17.7924C16.5014 17.6522 16.4126 17.5236 16.4005 17.5063C16.3705 17.4633 15.8548 16.7148 15.6624 16.4356C15.5005 16.1999 15.1467 15.6871 14.9785 15.4436C14.8413 15.2452 14.589 14.8793 14.2562 14.3965C14.1006 14.1697 13.9629 13.9703 13.9508 13.9529C13.9387 13.9356 13.8525 13.8102 13.7589 13.6748C13.3925 13.1425 12.8079 12.2954 12.7785 12.2524C12.7664 12.235 12.6933 12.1285 12.6155 12.0162C12.5382 11.9033 12.4625 11.7936 12.4473 11.7721C12.391 11.6913 12.0083 11.1354 11.715 10.7093C11.6351 10.5938 11.5626 10.4888 11.5536 10.4757C11.5447 10.4626 11.5163 10.4221 11.4911 10.3849L11.4453 10.3182H12.226H13.0061L13.1917 10.587Z",
          fill: "#C5C7D1"
        }
      ),
      /* @__PURE__ */ jsx86(
        "path",
        {
          d: "M31.7002 15.8379C31.7002 23.9917 24.7819 30.6394 16.2002 30.6394C7.61851 30.6394 0.700195 23.9917 0.700195 15.8379C0.700195 7.68404 7.61851 1.03638 16.2002 1.03638C24.7819 1.03638 31.7002 7.68404 31.7002 15.8379Z",
          stroke: "#4D596A"
        }
      )
    ]
  }
);
var twitter_circle_icon_default = TwitterCircleIcon;

// src/components/icons/youtube-icon.tsx
import { Icon as Icon53 } from "@vtex/brand-ui";
import { jsx as jsx87, jsxs as jsxs73 } from "react/jsx-runtime";
var YoutubeIcon = (props) => /* @__PURE__ */ jsxs73(
  Icon53,
  {
    ...props,
    viewBox: "0 0 33 33",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx87(
        "path",
        {
          d: "M31.6507 16.8379C31.6507 25.3976 24.7006 32.3379 16.1256 32.3379C7.55065 32.3379 0.600586 25.3976 0.600586 16.8379C0.600586 8.27821 7.55065 1.33789 16.1256 1.33789C24.7006 1.33789 31.6507 8.27821 31.6507 16.8379Z",
          stroke: "#4D596A"
        }
      ),
      /* @__PURE__ */ jsx87(
        "path",
        {
          d: "M31.6507 16.8379C31.6507 25.3976 24.7006 32.3379 16.1256 32.3379C7.55065 32.3379 0.600586 25.3976 0.600586 16.8379C0.600586 8.27821 7.55065 1.33789 16.1256 1.33789C24.7006 1.33789 31.6507 8.27821 31.6507 16.8379Z",
          stroke: "#4D596A"
        }
      ),
      /* @__PURE__ */ jsx87("g", { clipPath: "url(#clip0_311_37417)", children: /* @__PURE__ */ jsx87(
        "path",
        {
          d: "M22.4973 13.17C22.8024 14.358 22.8024 16.838 22.8024 16.838C22.8024 16.838 22.8024 19.318 22.4973 20.506C22.3277 21.1626 21.8316 21.6793 21.2033 21.854C20.0622 22.1713 16.1253 22.1713 16.1253 22.1713C16.1253 22.1713 12.1905 22.1713 11.0474 21.854C10.4164 21.6766 9.92098 21.1606 9.75339 20.506C9.44824 19.318 9.44824 16.838 9.44824 16.838C9.44824 16.838 9.44824 14.358 9.75339 13.17C9.92298 12.5133 10.4191 11.9966 11.0474 11.822C12.1905 11.5046 16.1253 11.5046 16.1253 11.5046C16.1253 11.5046 20.0622 11.5046 21.2033 11.822C21.8343 11.9993 22.3297 12.5153 22.4973 13.17ZM14.7899 19.1713L18.7962 16.838L14.7899 14.5046V19.1713Z",
          fill: "#C5C7D1"
        }
      ) }),
      /* @__PURE__ */ jsx87("defs", { children: /* @__PURE__ */ jsx87("clipPath", { id: "clip0_311_37417", children: /* @__PURE__ */ jsx87(
        "rect",
        {
          width: "16.025",
          height: "16",
          fill: "white",
          transform: "translate(8.11328 8.83789)"
        }
      ) }) })
    ]
  }
);
var youtube_icon_default = YoutubeIcon;

// src/components/icons/instagram-icon.tsx
import { Icon as Icon54 } from "@vtex/brand-ui";
import { jsx as jsx88, jsxs as jsxs74 } from "react/jsx-runtime";
var IgIcon = (props) => /* @__PURE__ */ jsxs74(
  Icon54,
  {
    ...props,
    viewBox: "0 0 33 33",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx88(
        "path",
        {
          d: "M31.5999 16.8379C31.5999 25.3976 24.6498 32.3379 16.0748 32.3379C7.49986 32.3379 0.549805 25.3976 0.549805 16.8379C0.549805 8.27821 7.49986 1.33789 16.0748 1.33789C24.6498 1.33789 31.5999 8.27821 31.5999 16.8379Z",
          stroke: "#4D596A"
        }
      ),
      /* @__PURE__ */ jsx88("g", { clipPath: "url(#clip0_311_37416)", children: /* @__PURE__ */ jsx88(
        "path",
        {
          d: "M16.0742 14.5879C15.4766 14.5879 14.9034 14.8249 14.4808 15.2469C14.0581 15.6689 13.8207 16.2412 13.8207 16.8379C13.8207 17.4346 14.0581 18.0069 14.4808 18.4289C14.9034 18.8508 15.4766 19.0879 16.0742 19.0879C16.6719 19.0879 17.2451 18.8508 17.6677 18.4289C18.0903 18.0069 18.3278 17.4346 18.3278 16.8379C18.3278 16.2412 18.0903 15.6689 17.6677 15.2469C17.2451 14.8249 16.6719 14.5879 16.0742 14.5879ZM16.0742 13.0879C17.0704 13.0879 18.0257 13.483 18.73 14.1862C19.4344 14.8895 19.8301 15.8433 19.8301 16.8379C19.8301 17.8325 19.4344 18.7863 18.73 19.4895C18.0257 20.1928 17.0704 20.5879 16.0742 20.5879C15.0781 20.5879 14.1228 20.1928 13.4184 19.4895C12.7141 18.7863 12.3184 17.8325 12.3184 16.8379C12.3184 15.8433 12.7141 14.8895 13.4184 14.1862C14.1228 13.483 15.0781 13.0879 16.0742 13.0879ZM20.9569 12.9004C20.9569 13.149 20.8579 13.3875 20.6819 13.5633C20.5058 13.7391 20.2669 13.8379 20.0179 13.8379C19.7689 13.8379 19.53 13.7391 19.3539 13.5633C19.1779 13.3875 19.0789 13.149 19.0789 12.9004C19.0789 12.6518 19.1779 12.4133 19.3539 12.2375C19.53 12.0617 19.7689 11.9629 20.0179 11.9629C20.2669 11.9629 20.5058 12.0617 20.6819 12.2375C20.8579 12.4133 20.9569 12.6518 20.9569 12.9004ZM16.0742 10.8379C14.2158 10.8379 13.9124 10.8431 13.0478 10.8814C12.4588 10.9091 12.0637 10.9879 11.6971 11.1304C11.3711 11.2564 11.136 11.4071 10.8859 11.6576C10.6508 11.8844 10.47 12.1613 10.3571 12.4676C10.2143 12.8351 10.1355 13.2289 10.1084 13.8161C10.0694 14.6441 10.0648 14.9336 10.0648 16.8379C10.0648 18.6934 10.0701 18.9964 10.1084 19.8596C10.1362 20.4469 10.2151 20.8421 10.3571 21.2074C10.4848 21.5336 10.635 21.7684 10.8844 22.0174C11.1375 22.2694 11.3726 22.4201 11.6956 22.5446C12.0667 22.6879 12.4618 22.7674 13.0478 22.7944C13.8771 22.8334 14.167 22.8379 16.0742 22.8379C17.9326 22.8379 18.2361 22.8326 19.1007 22.7944C19.6881 22.7666 20.084 22.6879 20.4506 22.5461C20.7758 22.4194 21.0125 22.2686 21.2618 22.0196C21.515 21.7669 21.666 21.5321 21.7907 21.2096C21.9334 20.8399 22.013 20.4446 22.0401 19.8596C22.0791 19.0316 22.0836 18.7421 22.0836 16.8379C22.0836 14.9824 22.0784 14.6794 22.0401 13.8161C22.0123 13.2296 21.9334 12.8336 21.7907 12.4676C21.6775 12.1616 21.497 11.8849 21.2626 11.6576C21.0355 11.4228 20.7582 11.2423 20.4513 11.1296C20.0833 10.9871 19.6881 10.9084 19.1007 10.8814C18.2714 10.8424 17.9815 10.8379 16.0742 10.8379ZM16.0742 9.33789C18.1152 9.33789 18.3698 9.34539 19.1706 9.38289C19.9706 9.42039 20.5152 9.54564 20.9944 9.73164C21.4902 9.92214 21.9079 10.1801 22.3255 10.5964C22.7075 10.9713 23.003 11.4248 23.1916 11.9254C23.3771 12.4031 23.5033 12.9476 23.5409 13.7464C23.5762 14.5459 23.586 14.8001 23.586 16.8379C23.586 18.8756 23.5785 19.1299 23.5409 19.9294C23.5033 20.7281 23.3771 21.2719 23.1916 21.7504C23.0036 22.2512 22.7079 22.7049 22.3255 23.0794C21.9499 23.4606 21.4957 23.7557 20.9944 23.9441C20.5159 24.1294 19.9706 24.2554 19.1706 24.2929C18.3698 24.3281 18.1152 24.3379 16.0742 24.3379C14.0333 24.3379 13.7787 24.3304 12.9779 24.2929C12.1779 24.2554 11.6333 24.1294 11.154 23.9441C10.6525 23.7562 10.1982 23.4611 9.82297 23.0794C9.44093 22.7045 9.14536 22.251 8.95687 21.7504C8.77058 21.2726 8.64513 20.7281 8.60757 19.9294C8.57227 19.1299 8.5625 18.8756 8.5625 16.8379C8.5625 14.8001 8.57001 14.5459 8.60757 13.7464C8.64513 12.9469 8.77058 12.4039 8.95687 11.9254C9.14484 11.4245 9.44047 10.9709 9.82297 10.5964C10.1983 10.2148 10.6526 9.91969 11.154 9.73164C11.6333 9.54564 12.1771 9.42039 12.9779 9.38289C13.7787 9.34764 14.0333 9.33789 16.0742 9.33789Z",
          fill: "#C5C7D1"
        }
      ) }),
      /* @__PURE__ */ jsx88("defs", { children: /* @__PURE__ */ jsx88("clipPath", { id: "clip0_311_37416", children: /* @__PURE__ */ jsx88(
        "rect",
        {
          width: "18.0282",
          height: "18",
          fill: "white",
          transform: "translate(7.06055 7.83789)"
        }
      ) }) })
    ]
  }
);
var instagram_icon_default = IgIcon;

// src/components/icons/chatgpt-icon.tsx
import { Icon as Icon55 } from "@vtex/brand-ui";
import { jsx as jsx89 } from "react/jsx-runtime";
var ChatGPTIcon = (props) => /* @__PURE__ */ jsx89(
  Icon55,
  {
    ...props,
    fill: "currentColor",
    "fill-rule": "evenodd",
    height: "64",
    viewBox: "0 0 24 24",
    width: "64",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx89("path", { d: "M21.55 10.004a5.416 5.416 0 00-.478-4.501c-1.217-2.09-3.662-3.166-6.05-2.66A5.59 5.59 0 0010.831 1C8.39.995 6.224 2.546 5.473 4.838A5.553 5.553 0 001.76 7.496a5.487 5.487 0 00.691 6.5 5.416 5.416 0 00.477 4.502c1.217 2.09 3.662 3.165 6.05 2.66A5.586 5.586 0 0013.168 23c2.443.006 4.61-1.546 5.361-3.84a5.553 5.553 0 003.715-2.66 5.488 5.488 0 00-.693-6.497v.001zm-8.381 11.558a4.199 4.199 0 01-2.675-.954c.034-.018.093-.05.132-.074l4.44-2.53a.71.71 0 00.364-.623v-6.176l1.877 1.069c.02.01.033.029.036.05v5.115c-.003 2.274-1.87 4.118-4.174 4.123zM4.192 17.78a4.059 4.059 0 01-.498-2.763c.032.02.09.055.131.078l4.44 2.53c.225.13.504.13.73 0l5.42-3.088v2.138a.068.068 0 01-.027.057L9.9 19.288c-1.999 1.136-4.552.46-5.707-1.51h-.001zM3.023 8.216A4.15 4.15 0 015.198 6.41l-.002.151v5.06a.711.711 0 00.364.624l5.42 3.087-1.876 1.07a.067.067 0 01-.063.005l-4.489-2.559c-1.995-1.14-2.679-3.658-1.53-5.63h.001zm15.417 3.54l-5.42-3.088L14.896 7.6a.067.067 0 01.063-.006l4.489 2.557c1.998 1.14 2.683 3.662 1.529 5.633a4.163 4.163 0 01-2.174 1.807V12.38a.71.71 0 00-.363-.623zm1.867-2.773a6.04 6.04 0 00-.132-.078l-4.44-2.53a.731.731 0 00-.729 0l-5.42 3.088V7.325a.068.068 0 01.027-.057L14.1 4.713c2-1.137 4.555-.46 5.707 1.513.487.833.664 1.809.499 2.757h.001zm-11.741 3.81l-1.877-1.068a.065.065 0 01-.036-.051V6.559c.001-2.277 1.873-4.122 4.181-4.12.976 0 1.92.338 2.671.954-.034.018-.092.05-.131.073l-4.44 2.53a.71.71 0 00-.365.623l-.003 6.173v.002zm1.02-2.168L12 9.25l2.414 1.375v2.75L12 14.75l-2.415-1.375v-2.75z" })
  }
);
var chatgpt_icon_default = ChatGPTIcon;

// src/components/icons/claude-icon.tsx
import { Icon as Icon56 } from "@vtex/brand-ui";
import { jsx as jsx90, jsxs as jsxs75 } from "react/jsx-runtime";
var ClaudeIcon = (props) => /* @__PURE__ */ jsxs75(
  Icon56,
  {
    ...props,
    fill: "currentColor",
    "fill-rule": "evenodd",
    height: "64",
    viewBox: "0 0 24 24",
    width: "64",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx90("title", { children: "Claude" }),
      /* @__PURE__ */ jsx90("path", { d: "M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z" })
    ]
  }
);
var claude_icon_default = ClaudeIcon;

// src/components/icons/gemini-icon.tsx
import { Icon as Icon57 } from "@vtex/brand-ui";
import { jsx as jsx91 } from "react/jsx-runtime";
var GeminiIcon = (props) => /* @__PURE__ */ jsx91(
  Icon57,
  {
    ...props,
    fill: "currentColor",
    "fill-rule": "evenodd",
    height: "64",
    viewBox: "0 0 24 24",
    width: "64",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx91("path", { d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z" })
  }
);
var gemini_icon_default = GeminiIcon;

// src/components/icons/copilot-icon.tsx
import { Icon as Icon58 } from "@vtex/brand-ui";
import { jsx as jsx92 } from "react/jsx-runtime";
var CopilotIcon = (props) => /* @__PURE__ */ jsx92(
  Icon58,
  {
    ...props,
    fill: "currentColor",
    "fill-rule": "evenodd",
    height: "64",
    viewBox: "0 0 24 24",
    width: "64",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx92("path", { d: "M9 23l.073-.001a2.53 2.53 0 01-2.347-1.838l-.697-2.433a2.529 2.529 0 00-2.426-1.839h-.497l-.104-.002c-4.485 0-2.935-5.278-1.75-9.225l.162-.525C2.412 3.99 3.883 1 6.25 1h8.86c1.12 0 2.106.745 2.422 1.829l.715 2.453a2.53 2.53 0 002.247 1.823l.147.005.534.001c3.557.115 3.088 3.745 2.156 7.206l-.113.413c-.154.548-.315 1.089-.47 1.607l-.163.525C21.588 20.01 20.116 23 17.75 23h-8.75zm8.22-15.89l-3.856.001a2.526 2.526 0 00-2.35 1.615L9.21 15.04a2.529 2.529 0 01-2.43 1.847l3.853.002c1.056 0 1.992-.661 2.361-1.644l1.796-6.287a2.529 2.529 0 012.43-1.848z" })
  }
);
var copilot_icon_default = CopilotIcon;

// src/components/icons/grid-icon.tsx
import { Icon as Icon59 } from "@vtex/brand-ui";
import { jsx as jsx93, jsxs as jsxs76 } from "react/jsx-runtime";
var GridIcon = (props) => /* @__PURE__ */ jsxs76(
  Icon59,
  {
    ...props,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx93(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M5 14C3.895 14 3 13.105 3 12C3 10.895 3.895 10 5 10C6.105 10 7 10.895 7 12C7 13.105 6.105 14 5 14Z",
          fill: "#4A596B"
        }
      ),
      /* @__PURE__ */ jsx93(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12 14C10.895 14 10 13.105 10 12C10 10.895 10.895 10 12 10C13.105 10 14 10.895 14 12C14 13.105 13.105 14 12 14Z",
          fill: "#4A596B"
        }
      ),
      /* @__PURE__ */ jsx93(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M19 14C17.895 14 17 13.105 17 12C17 10.895 17.895 10 19 10C20.105 10 21 10.895 21 12C21 13.105 20.105 14 19 14Z",
          fill: "#4A596B"
        }
      ),
      /* @__PURE__ */ jsx93(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M5 21C3.895 21 3 20.105 3 19C3 17.895 3.895 17 5 17C6.105 17 7 17.895 7 19C7 20.105 6.105 21 5 21Z",
          fill: "#4A596B"
        }
      ),
      /* @__PURE__ */ jsx93(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12 21C10.895 21 10 20.105 10 19C10 17.895 10.895 17 12 17C13.105 17 14 17.895 14 19C14 20.105 13.105 21 12 21Z",
          fill: "#4A596B"
        }
      ),
      /* @__PURE__ */ jsx93(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M19 21C17.895 21 17 20.105 17 19C17 17.895 17.895 17 19 17C20.105 17 21 17.895 21 19C21 20.105 20.105 21 19 21Z",
          fill: "#4A596B"
        }
      ),
      /* @__PURE__ */ jsx93(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M5 7C3.895 7 3 6.105 3 5C3 3.895 3.895 3 5 3C6.105 3 7 3.895 7 5C7 6.105 6.105 7 5 7Z",
          fill: "#4A596B"
        }
      ),
      /* @__PURE__ */ jsx93(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12 7C10.895 7 10 6.105 10 5C10 3.895 10.895 3 12 3C13.105 3 14 3.895 14 5C14 6.105 13.105 7 12 7Z",
          fill: "#4A596B"
        }
      ),
      /* @__PURE__ */ jsx93(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M19 7C17.895 7 17 6.105 17 5C17 3.895 17.895 3 19 3C20.105 3 21 3.895 21 5C21 6.105 20.105 7 19 7Z",
          fill: "#4A596B"
        }
      )
    ]
  }
);
var grid_icon_default = GridIcon;

// src/components/icons/trashcan-icon.tsx
import { Icon as Icon60 } from "@vtex/brand-ui";
import { jsx as jsx94, jsxs as jsxs77 } from "react/jsx-runtime";
var TrashcanIcon = (props) => /* @__PURE__ */ jsxs77(
  Icon60,
  {
    ...props,
    viewBox: "0 0 19 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx94(
        "path",
        {
          d: "M4.25 5.25H14.75",
          stroke: "currentcolor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx94(
        "path",
        {
          d: "M14 5.25V13.5C14 14.3288 13.3288 15 12.5 15H6.5C5.67125 15 5 14.3288 5 13.5V5.25",
          stroke: "currentcolor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx94(
        "path",
        {
          d: "M11.75 2.8125H7.25",
          stroke: "currentcolor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx94(
        "path",
        {
          d: "M8 8.25V12",
          stroke: "currentcolor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx94(
        "path",
        {
          d: "M11 8.25V12",
          stroke: "currentcolor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var trashcan_icon_default = TrashcanIcon;

// src/components/icons/filter-icon.tsx
import { Icon as Icon61 } from "@vtex/brand-ui";
import { jsx as jsx95, jsxs as jsxs78 } from "react/jsx-runtime";
var FilterIcon = (props) => /* @__PURE__ */ jsxs78(
  Icon61,
  {
    ...props,
    viewBox: "0 0 16 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx95(
        "path",
        {
          d: "M3.33333 4.5V2.5",
          stroke: "currentcolor",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx95(
        "path",
        {
          d: "M3.33333 14.4998V7.1665",
          stroke: "currentcolor",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx95(
        "path",
        {
          d: "M7.99984 9.83333V2.5",
          stroke: "currentcolor",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx95(
        "path",
        {
          d: "M7.99984 14.5V12.5",
          stroke: "currentcolor",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx95(
        "path",
        {
          d: "M12.6668 4.5V2.5",
          stroke: "currentcolor",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx95(
        "path",
        {
          d: "M12.6668 14.4998V7.1665",
          stroke: "currentcolor",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx95(
        "path",
        {
          d: "M4.27614 4.89052C4.79684 5.41122 4.79684 6.25544 4.27614 6.77614C3.75545 7.29684 2.91122 7.29684 2.39052 6.77614C1.86983 6.25545 1.86983 5.41122 2.39052 4.89052C2.91122 4.36983 3.75544 4.36983 4.27614 4.89052",
          stroke: "currentcolor",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx95(
        "path",
        {
          d: "M8.94265 10.224C9.46335 10.7447 9.46335 11.5889 8.94265 12.1096C8.42195 12.6303 7.57773 12.6303 7.05703 12.1096C6.53633 11.5889 6.53633 10.7447 7.05703 10.224C7.57773 9.70332 8.42195 9.70332 8.94265 10.224",
          stroke: "currentcolor",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx95(
        "path",
        {
          d: "M13.6096 4.89052C14.1303 5.41122 14.1303 6.25544 13.6096 6.77614C13.0889 7.29684 12.2447 7.29684 11.724 6.77614C11.2033 6.25545 11.2033 5.41122 11.724 4.89052C12.2447 4.36983 13.0889 4.36983 13.6096 4.89052",
          stroke: "currentcolor",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var filter_icon_default = FilterIcon;

// src/components/icons/menu-icon.tsx
import { Icon as Icon62 } from "@vtex/brand-ui";
import { jsx as jsx96, jsxs as jsxs79 } from "react/jsx-runtime";
var MenuIcon = (props) => /* @__PURE__ */ jsxs79(
  Icon62,
  {
    ...props,
    width: "25",
    height: "24",
    viewBox: "0 0 25 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx96(
        "path",
        {
          d: "M10.002 12H17.501",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx96(
        "path",
        {
          d: "M10.002 15.484H17.501",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx96(
        "path",
        {
          d: "M10.002 8.48401H17.501",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx96(
        "path",
        {
          d: "M7.54978 8.434C7.52178 8.434 7.49978 8.457 7.49978 8.485C7.49978 8.513 7.52278 8.535 7.55078 8.535C7.57878 8.535 7.60178 8.512 7.60178 8.485C7.60078 8.457 7.57778 8.434 7.54978 8.434",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx96(
        "path",
        {
          d: "M7.54978 11.949C7.52178 11.949 7.49978 11.972 7.49978 12C7.49978 12.028 7.52278 12.051 7.55078 12.051C7.57878 12.051 7.60178 12.028 7.60178 12C7.60178 11.972 7.57778 11.949 7.54978 11.949",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx96(
        "path",
        {
          d: "M7.54978 15.434C7.52178 15.434 7.49978 15.457 7.49978 15.485C7.49978 15.513 7.52278 15.535 7.55078 15.535C7.57878 15.535 7.60178 15.512 7.60178 15.485C7.60078 15.457 7.57778 15.434 7.54978 15.434",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx96(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M21.5 7V17C21.5 19.209 19.709 21 17.5 21H7.5C5.291 21 3.5 19.209 3.5 17V7C3.5 4.791 5.291 3 7.5 3H17.5C19.709 3 21.5 4.791 21.5 7Z",
          stroke: "#323232",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var menu_icon_default = MenuIcon;

// src/components/icons/checkbox.tsx
import { Icon as Icon63 } from "@vtex/brand-ui";
import { Fragment as Fragment5, jsx as jsx97, jsxs as jsxs80 } from "react/jsx-runtime";
var CheckboxIcon = (props) => /* @__PURE__ */ jsx97(
  Icon63,
  {
    ...props,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: !props.checked ? /* @__PURE__ */ jsxs80(Fragment5, { children: [
      /* @__PURE__ */ jsx97(
        "rect",
        {
          x: "0.5",
          y: "0.5",
          width: "19",
          height: "19",
          rx: "3.5",
          fill: "white",
          fillOpacity: "0.01"
        }
      ),
      /* @__PURE__ */ jsx97(
        "rect",
        {
          x: "0.5",
          y: "0.5",
          width: "19",
          height: "19",
          rx: "3.5",
          stroke: "#B9B9B9"
        }
      )
    ] }) : /* @__PURE__ */ jsxs80(Fragment5, { children: [
      /* @__PURE__ */ jsx97("rect", { width: "20", height: "20", rx: "4", fill: "#0C1522" }),
      /* @__PURE__ */ jsx97(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M16.0303 5.96968C16.3232 6.26258 16.3232 6.73746 16.0303 7.03034L9.03032 14.03C8.73743 14.3229 8.26259 14.3229 7.96969 14.03L4.46969 10.5304C4.17679 10.2375 4.17677 9.7626 4.46965 9.46969C4.76253 9.17679 5.2374 9.17677 5.53031 9.46965L8.49999 12.4391L14.9697 5.96966C15.2626 5.67677 15.7375 5.67678 16.0303 5.96968Z",
          fill: "white"
        }
      )
    ] })
  }
);
var checkbox_default = CheckboxIcon;

// src/components/icons/resize-icon.tsx
import { Icon as Icon64 } from "@vtex/brand-ui";
import { jsx as jsx98 } from "react/jsx-runtime";
var ResizeIcon = (props) => /* @__PURE__ */ jsx98(
  Icon64,
  {
    ...props,
    viewBox: "0 0 29.96 122.88",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx98(
      "path",
      {
        fillRule: "evenodd",
        d: "M15,0A15,15,0,1,1,0,15,15,15,0,0,1,15,0Zm0,92.93a15,15,0,1,1-15,15,15,15,0,0,1,15-15Zm0-46.47a15,15,0,1,1-15,15,15,15,0,0,1,15-15Z"
      }
    )
  }
);
var resize_icon_default = ResizeIcon;

// src/components/icons/arrow-right-icon.tsx
import { Icon as Icon65 } from "@vtex/brand-ui";
import { jsx as jsx99, jsxs as jsxs81 } from "react/jsx-runtime";
var ArrowRightIcon = (props) => /* @__PURE__ */ jsxs81(
  Icon65,
  {
    ...props,
    viewBox: "0 0 17 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      " ",
      /* @__PURE__ */ jsx99(
        "path",
        {
          d: "M3.48682 8.9847H13.4801",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx99(
        "path",
        {
          d: "M9.48877 4.99023L13.5134 8.99823L9.48877 13.0062",
          stroke: "#4A596B",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var arrow_right_icon_default = ArrowRightIcon;

// src/components/icons/long-arrow-icon.tsx
import { Icon as Icon66 } from "@vtex/brand-ui";
import { jsx as jsx100, jsxs as jsxs82 } from "react/jsx-runtime";
var LongArrowIcon = (props) => /* @__PURE__ */ jsxs82(
  Icon66,
  {
    ...props,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx100(
        "path",
        {
          d: "M17.4431 6.05859L6 17.5017",
          stroke: "#4A596B",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx100(
        "path",
        {
          d: "M9.4082 6L17.4415 6.05664L17.4993 14.0911",
          stroke: "#4A596B",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var long_arrow_icon_default = LongArrowIcon;

// src/components/icons/vtex-logo-footer.tsx
import { Icon as Icon67 } from "@vtex/brand-ui";
import { jsx as jsx101, jsxs as jsxs83 } from "react/jsx-runtime";
var VTEXLogoFooter = (props) => /* @__PURE__ */ jsxs83(
  Icon67,
  {
    ...props,
    viewBox: "0 0 61 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx101(
        "path",
        {
          d: "M23.667 0.000165906H4.55235C3.47417 -0.0137423 2.59101 0.848566 2.57987 1.92506C2.57708 2.25886 2.65788 2.58709 2.81668 2.87916L4.72787 6.49529H1.2621C0.560025 6.50086 -0.00553116 7.07387 4.08212e-05 7.77763C0.00282681 7.98069 0.0529747 8.18097 0.147698 8.36177L6.28245 19.9723C6.6112 20.5926 7.38013 20.8291 8.0042 20.5008C8.22986 20.3812 8.41374 20.1976 8.53354 19.9723L10.2051 16.8374L12.3002 20.7957C12.81 21.7526 13.9997 22.117 14.9608 21.6079C15.3063 21.4243 15.5905 21.1406 15.7743 20.7957L25.3386 2.80684C25.8345 1.87499 25.4779 0.717829 24.5446 0.222697C24.2744 0.0808334 23.9735 0.00294754 23.667 0.000165906ZM15.075 7.68583L10.9462 15.4466C10.7428 15.8611 10.2413 16.0308 9.82624 15.8249C9.66186 15.7442 9.52813 15.6107 9.44734 15.4466L5.3575 7.71921C5.13184 7.31866 5.27392 6.80962 5.67511 6.58152C5.80884 6.50642 5.96206 6.47026 6.11529 6.47582H14.3451C14.8076 6.48417 15.1726 6.86525 15.1642 7.327C15.1614 7.45218 15.1308 7.57457 15.075 7.68583Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ jsx101(
        "path",
        {
          d: "M43.5224 8.27831H41.3772V15.6246C41.3772 15.7637 41.263 15.8777 41.1237 15.8777H39.466C39.3267 15.8777 39.2125 15.7637 39.2125 15.6246V8.27831H37.0533C36.9196 8.28387 36.8054 8.18095 36.7998 8.04743C36.7998 8.04465 36.7998 8.04187 36.7998 8.03908V6.73728C36.8026 6.60376 36.9112 6.49527 37.045 6.49806C37.0478 6.49806 37.0505 6.49806 37.0533 6.49806H43.5224C43.6645 6.48415 43.7871 6.58985 43.801 6.72893C43.801 6.73171 43.801 6.7345 43.801 6.73728V8.03908C43.7926 8.18095 43.6701 8.28665 43.5308 8.27831C43.528 8.27831 43.5252 8.27831 43.5224 8.27831Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ jsx101(
        "path",
        {
          d: "M50.3883 15.8056C49.5442 15.9252 48.6944 15.9808 47.8419 15.9697C46.2149 15.9697 44.7773 15.5524 44.7773 13.2604V9.08791C44.7773 6.79584 46.2288 6.39251 47.8559 6.39251C48.7028 6.38138 49.5525 6.43701 50.3911 6.55662C50.5666 6.58166 50.6419 6.64563 50.6419 6.80975V7.98082C50.6391 8.11712 50.5276 8.22839 50.3911 8.23117H47.7305C47.1371 8.23117 46.9226 8.43423 46.9226 9.08791V10.234H50.288C50.4273 10.234 50.5416 10.348 50.5416 10.4871V11.6832C50.5416 11.8223 50.4301 11.9335 50.2908 11.9335H50.288H46.9198V13.2687C46.9198 13.9252 47.1343 14.1255 47.7277 14.1255H50.3883C50.5276 14.1282 50.6391 14.2395 50.6391 14.3786V15.5497C50.6391 15.7054 50.5638 15.7805 50.3883 15.8056Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ jsx101(
        "path",
        {
          d: "M59.93 15.8833H57.9185C57.7792 15.8945 57.6483 15.8194 57.587 15.6942L55.8429 12.9292L54.2633 15.633C54.1741 15.7832 54.0878 15.8833 53.9485 15.8833H52.0846C51.9927 15.8945 51.9091 15.8305 51.898 15.7415C51.898 15.7359 51.8952 15.7276 51.8952 15.7192C51.898 15.6886 51.9063 15.6608 51.9203 15.633L54.6645 11.0711L51.8952 6.73732C51.8813 6.71507 51.8729 6.69004 51.8701 6.66222C51.8785 6.56486 51.9621 6.49254 52.0596 6.4981H54.0989C54.2382 6.4981 54.3385 6.62328 54.4137 6.73732L56.0324 9.29087L57.5981 6.73732C57.6566 6.60937 57.7764 6.51757 57.9157 6.4981H59.7879C59.8854 6.49254 59.969 6.56486 59.9774 6.66222C59.9746 6.69004 59.9662 6.71507 59.9523 6.73732L57.1858 11.0989L60.0554 15.633C60.0777 15.6719 60.0916 15.7137 60.0944 15.7582C60.0944 15.8333 60.0303 15.8833 59.93 15.8833Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ jsx101(
        "path",
        {
          d: "M33.7975 6.49536C33.7056 6.49536 33.6248 6.55934 33.6053 6.65113L31.7666 13.4383C31.7415 13.5774 31.7053 13.6275 31.591 13.6275C31.4768 13.6275 31.4378 13.5774 31.4127 13.4383L29.5768 6.65113C29.5573 6.55934 29.4765 6.49536 29.3845 6.49536H27.5681C27.4594 6.49536 27.373 6.58159 27.373 6.69008C27.373 6.70398 27.3758 6.72067 27.3786 6.73458C27.3786 6.73458 29.6213 14.5232 29.6464 14.5927C29.8916 15.4522 30.7051 16.0225 31.5966 15.9641C32.4826 16.0002 33.2794 15.4383 33.5468 14.5955C33.583 14.4898 35.7756 6.73458 35.7756 6.73458C35.8007 6.62888 35.7338 6.52596 35.6307 6.50092C35.6168 6.49814 35.6001 6.49536 35.5862 6.49536H33.7975Z",
          fill: "white"
        }
      )
    ]
  }
);
var vtex_logo_footer_default = VTEXLogoFooter;
export {
  api_guides_icon_default as APIGuidesIcon,
  api_reference_icon_default as APIReferenceIcon,
  added_icon_default as AddedIcon,
  announcement_icon_default as AnnouncementIcon,
  app_development_icon_default as AppDevelopmentIcon,
  arrow_left_icon_default as ArrowLeftIcon,
  arrow_right_icon_default as ArrowRightIcon,
  caret_default as CaretIcon,
  chatgpt_icon_default as ChatGPTIcon,
  checkbox_default as CheckboxIcon,
  claude_icon_default as ClaudeIcon,
  close_filter_icon_default as CloseFilterIcon,
  close_icon_default as CloseIcon,
  community_icon_default as CommunityIcon,
  cookie_bar_default as CookieBar,
  copilot_icon_default as CopilotIcon,
  copy_icon_default as CopyIcon,
  copy_link_button_default as CopyLinkButton,
  deprecated_icon_default as DeprecatedIcon,
  developer_portal_icon_default as DeveloperPortalIcon,
  documentation_updates_icon_default as DocumentationUpdatesIcon,
  edit_icon_default as EditIcon,
  email_icon_default as EmailIcon,
  expanded_results_icon_default as ExpandedResultsIcon,
  faq_icon_default as FAQIcon,
  facebook_circle_icon_default as FacebookCircleIcon,
  facebook_icon_default as FacebookIcon,
  feedback_section_default as FeedbackSection,
  filter_icon_default as FilterIcon,
  fixed_icon_default as FixedIcon,
  gear_troubleshooting_icon_default as GearTroubleshootingIcon,
  gemini_icon_default as GeminiIcon,
  github_icon_default as GithubIcon,
  graph_icon_default as GraphIcon,
  grid_icon_default as GridIcon,
  hamburger_menu_default as HamburgerMenu,
  helpcenter_icon_default as HelpCenterIcon,
  improved_icon_default as ImprovedIcon,
  info_icon_default as InfoIcon,
  input_default as Input,
  instagram_icon_default as InstagramIcon,
  known_issues_icon_default as KnownIssuesIcon,
  LibraryContext,
  libraryContext_default as LibraryContextProvider,
  like_icon_default as LikeIcon,
  like_selected_icon_default as LikeSelectedIcon,
  link_icon_default as LinkIcon,
  linkedin_circle_icon_default as LinkedinCircleIcon,
  linkedin_icon_default as LinkedinIcon,
  long_arrow_icon_default as LongArrowIcon,
  MarkdownRenderer_default as MarkdownRenderer,
  megaphone_icon_default as MegaphoneIcon,
  menu_icon_default as MenuIcon,
  new_icon_default as NewIcon,
  paper_icon_default as PaperIcon,
  release_notes_icon_default as ReleaseNotesIcon,
  removed_icon_default as RemovedIcon,
  resize_icon_default as ResizeIcon,
  search_default2 as Search,
  search_config_default as SearchConfig,
  search_icon_default as SearchIcon,
  SearchInput,
  share_button_default as ShareButton,
  share_icon_default as ShareIcon,
  sidebar_toggle_icon_default as SideBarToggleIcon,
  sidebar_default as Sidebar,
  start_here_icon_default as StartHereIcon,
  storefront_development_icon_default as StorefrontDevelopmentIcon,
  TableOfContents_default as TableOfContents,
  trashcan_icon_default as TrashcanIcon,
  troubleshooting_icon_default as TroubleshootingIcon,
  tutorials_icon_default as TutorialsIcon,
  twitter_circle_icon_default as TwitterCircleIcon,
  twitter_icon_default as TwitterIcon,
  vtex_devportal_icon_default as VTEXDevPortalIcon,
  vtex_helpcenter_icon_default as VTEXHelpCenterIcon,
  vtex_io_apps_icon_default as VTEXIOAppsIcon,
  vtex_logo_footer_default as VTEXLogoFooter,
  warning_icon_default as WarningIcon,
  youtube_icon_default as YoutubeIcon,
  getDaysElapsed
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