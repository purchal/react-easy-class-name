import React from 'react';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var domAttributes = ["onChange", "onInput", "onSubmit", "onClick", "onContextMenu", "onDoubleClick", "onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onDragStart", "onDrop", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onSelect", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onTransitionEnd", "acceptCharset", "allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "classID", "className", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "dateTime", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "htmlFor", "httpEquiv", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"];

var domElements = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", // SVG
"circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"];

var STRINGIFIED_DATA_TYPES = ["boolean", "number"];
var SKIPPED_DOM_PROPS = ["className"];

var asString = function asString(str, exprs) {
  return function (_ref) {
    var shallowProps = _ref.shallowProps,
        props = _objectWithoutProperties(_ref, ["shallowProps"]);

    if (!Array.isArray(str)) {
      return Object.keys(str).reduce(function (acc, key) {
        if (props[key]) acc.push(str[key]);
        return acc;
      }, []).join(" ");
    }

    var interpolated = exprs.map(function (ex) {
      if (typeof ex === "function") return ex(_objectSpread2({}, props, {}, shallowProps));
      if (_typeof(ex) === "object") return Object.keys(ex).reduce(function (acc, key) {
        if (props[key]) acc.push(ex[key]);
        return acc;
      }, []).join(" ");
      return ex;
    });
    var classNames = [].concat(_toConsumableArray(str), _toConsumableArray(interpolated));
    if (props.className) classNames.push(props.className);
    return classNames.filter(function (str) {
      return !!str;
    }).join(" ").replace(/\s+/g, " ").trim();
  };
};

var className = function className(Tag) {
  return function (str) {
    for (var _len = arguments.length, exprs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      exprs[_key - 1] = arguments[_key];
    }

    var classNameString = asString(str, exprs);
    return function (_ref2) {
      var shallowProps = _ref2.shallowProps,
          props = _objectWithoutProperties(_ref2, ["shallowProps"]);

      var domProps = Object.keys(props).reduce(function (acc, key) {
        if (SKIPPED_DOM_PROPS.includes(key)) return acc;
        var keyToUse = domAttributes.includes(key) ? key : key.toLowerCase();
        var domValue = STRINGIFIED_DATA_TYPES.includes(_typeof(props[key])) && !domAttributes.includes(key) ? props[key].toString() : props[key];
        acc[keyToUse] = domValue;
        return acc;
      }, {});
      return React.createElement(Tag, _extends({}, domProps, {
        className: classNameString(_objectSpread2({
          shallowProps: shallowProps
        }, props))
      }));
    };
  };
};

domElements.forEach(function (el) {
  className[el] = className(el);
});

export default className;
export { asString };
