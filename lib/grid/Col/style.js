"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../../utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var hasWidth = function hasWidth(widths) {
  return Object.keys(widths).reduce(function (acc, cur) {
    return acc || widths[cur];
  }, false);
};

var getWidth = function getWidth(width, gridColumns) {
  if (typeof width !== 'number') return undefined;
  var normalizedWidth = Math.max(0, Math.min(gridColumns, width));
  return "".concat(100 / gridColumns * normalizedWidth, "%");
};

var _default = function _default(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? {} : _ref$width,
      _ref$offset = _ref.offset,
      offset = _ref$offset === void 0 ? {} : _ref$offset,
      _ref$pull = _ref.pull,
      pull = _ref$pull === void 0 ? {} : _ref$pull,
      _ref$push = _ref.push,
      push = _ref$push === void 0 ? {} : _ref$push,
      debug = _ref.debug,
      screenClass = _ref.screenClass,
      gutterWidth = _ref.gutterWidth,
      moreStyle = _ref.moreStyle,
      gridColumns = _ref.gridColumns;

  var styles = _objectSpread({
    boxSizing: 'border-box',
    minHeight: '1px',
    position: 'relative',
    paddingLeft: "".concat(gutterWidth / 2, "px"),
    paddingRight: "".concat(gutterWidth / 2, "px"),
    width: '100%'
  }, moreStyle);

  if (debug) {
    styles.outline = '1px solid silver';
    styles.background = 'rgba(0,0,0,.05)';
  }

  styles.flexBasis = '100%';
  styles.flexGrow = 0;
  styles.flexShrink = 0;
  styles.maxWidth = '100%';
  styles.marginLeft = '0%';
  styles.right = 'auto';
  styles.left = 'auto';

  _utils.screenClasses.forEach(function (size, index) {
    if (_utils.screenClasses.indexOf(screenClass) >= index) {
      styles.flexBasis = getWidth(width[size], gridColumns) || styles.flexBasis;
      styles.maxWidth = getWidth(width[size], gridColumns) || styles.maxWidth;
      styles.marginLeft = getWidth(offset[size], gridColumns) || styles.marginLeft;
      styles.right = getWidth(pull[size], gridColumns) || styles.right;
      styles.left = getWidth(push[size], gridColumns) || styles.left;
    }
  });

  if (!hasWidth(width)) {
    styles.flexBasis = 0;
    styles.flexGrow = 1;
  }

  return styles;
};

exports.default = _default;