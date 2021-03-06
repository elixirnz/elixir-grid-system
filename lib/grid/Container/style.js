"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAfterStyle = exports.default = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(_ref) {
  var fluid = _ref.fluid,
      xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      xl = _ref.xl,
      screenClass = _ref.screenClass,
      containerWidths = _ref.containerWidths,
      gutterWidth = _ref.gutterWidth,
      moreStyle = _ref.moreStyle;

  var styles = _objectSpread({
    boxSizing: 'border-box',
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: "".concat(gutterWidth / 2, "px"),
    paddingRight: "".concat(gutterWidth / 2, "px")
  }, moreStyle);

  if (fluid && !sm && !md && !lg && !xl) {
    return styles;
  }

  if (screenClass === 'sm' && containerWidths[0] && !sm && !xs) {
    styles.maxWidth = "".concat(containerWidths[0], "px");
  }

  if (screenClass === 'md' && containerWidths[1] && !md) {
    styles.maxWidth = "".concat(containerWidths[1], "px");
  }

  if (screenClass === 'lg' && containerWidths[2] && !lg) {
    styles.maxWidth = "".concat(containerWidths[2], "px");
  }

  if (screenClass === 'xl' && containerWidths[3] && !xl) {
    styles.maxWidth = "".concat(containerWidths[3], "px");
  }

  return styles;
};

exports.default = _default;

var getAfterStyle = function getAfterStyle() {
  return {
    display: 'table',
    clear: 'both'
  };
};

exports.getAfterStyle = getAfterStyle;