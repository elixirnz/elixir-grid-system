"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.NoGutterContext = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _config = require("../../config");

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var NoGutterContext = _react["default"].createContext(false);

exports.NoGutterContext = NoGutterContext;

var Row =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Row, _React$Component);

  function Row() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Row);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Row)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.render = function () {
      var _this$props = _this.props,
          children = _this$props.children,
          style = _this$props.style,
          align = _this$props.align,
          justify = _this$props.justify,
          debug = _this$props.debug,
          nogutter = _this$props.nogutter,
          component = _this$props.component,
          otherProps = _objectWithoutProperties(_this$props, ["children", "style", "align", "justify", "debug", "nogutter", "component"]);

      var theStyle = (0, _style["default"])({
        gutterWidth: nogutter ? 0 : (0, _config.getConfiguration)().gutterWidth,
        align: align,
        justify: justify,
        debug: debug,
        moreStyle: style
      });
      return _react["default"].createElement(component, _objectSpread({
        style: theStyle
      }, otherProps), _react["default"].createElement(NoGutterContext.Provider, {
        value: nogutter
      }, children));
    };

    return _this;
  }

  return Row;
}(_react["default"].Component);

exports["default"] = Row;
Row.propTypes = {
  /**
   * Content of the element
   */
  children: _propTypes["default"].node.isRequired,

  /**
   * Vertical column alignment
   */
  align: _propTypes["default"].oneOf(['normal', 'start', 'center', 'end']),

  /**
   * Horizontal column alignment
   */
  justify: _propTypes["default"].oneOf(['start', 'center', 'end', 'between', 'around', 'initial', 'inherit']),

  /**
   * No gutter for this row
   */
  nogutter: _propTypes["default"].bool,

  /**
   * Optional styling
   */
  style: _propTypes["default"].objectOf(_propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])),

  /**
   * Set to apply some debug styling
   */
  debug: _propTypes["default"].bool,

  /**
   * Use your own component
   */
  component: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string])
};
Row.defaultProps = {
  align: 'normal',
  justify: 'start',
  nogutter: false,
  style: {},
  debug: false,
  component: 'div'
};