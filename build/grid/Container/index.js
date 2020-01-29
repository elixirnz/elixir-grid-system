"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _throttle = _interopRequireDefault(require("lodash/throttle"));

var _style = _interopRequireWildcard(require("./style"));

var _config = require("../../config");

var _utils = require("../../utils");

var _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var Container = (0, _config.ScreenContextConsumer)(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Container, _React$Component);

  function Container(props) {
    var _this;

    _classCallCheck(this, Container);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Container).call(this, props));

    _this.componentDidMount = function () {
      _this.setScreenClass();

      _this.eventListener = (0, _throttle["default"])(_this.setScreenClass, 100);
      window.addEventListener('resize', _this.eventListener);
    };

    _this.componentWillUnmount = function () {
      _this.eventListener.cancel();

      window.removeEventListener('resize', _this.eventListener);
    };

    _this.setScreenClass = function () {
      _this.setState({
        screenClass: (0, _utils.getScreenClass)()
      });
    };

    _this.render = function () {
      var _this$props = _this.props,
          children = _this$props.children,
          fluid = _this$props.fluid,
          xs = _this$props.xs,
          sm = _this$props.sm,
          md = _this$props.md,
          lg = _this$props.lg,
          xl = _this$props.xl,
          style = _this$props.style,
          component = _this$props.component,
          otherProps = _objectWithoutProperties(_this$props, ["children", "fluid", "xs", "sm", "md", "lg", "xl", "style", "component"]);

      var theStyle = (0, _style["default"])({
        fluid: fluid,
        xs: xs,
        sm: sm,
        md: md,
        lg: lg,
        xl: xl,
        screenClass: !_this.props.rect ? _this.state.screenClass : (0, _utils.getScreenClass)(_this.props.rect),
        containerWidths: (0, _config.getConfiguration)().containerWidths,
        gutterWidth: (0, _config.getConfiguration)().gutterWidth,
        moreStyle: style
      });
      return (0, _react.createElement)(component, _objectSpread({
        style: theStyle
      }, otherProps), _react["default"].createElement(_react["default"].Fragment, null, children, _react["default"].createElement("span", {
        style: (0, _style.getAfterStyle)()
      })));
    };

    _this.state = {
      screenClass: (0, _config.getConfiguration)().defaultScreenClass
    };
    return _this;
  }

  return Container;
}(_react["default"].Component), _class2.propTypes = {
  /**
   * Content of the component
   */
  children: _propTypes["default"].node.isRequired,

  /**
   * True makes the container full-width, false fixed-width
   */
  fluid: _propTypes["default"].bool,

  /**
   * This is in combination with fluid enabled
   * True makes container fluid only in xs, not present means fluid everywhere
   */
  xs: _propTypes["default"].bool,

  /**
   * This is in combination with fluid enabled
   * True makes container fluid only in sm, not present means fluid everywhere
   */
  sm: _propTypes["default"].bool,

  /**
   * This is in combination with fluid enabled
   * True makes container fluid only in md, not present means fluid everywhere
   */
  md: _propTypes["default"].bool,

  /**
   * This is in combination with fluid enabled
   * True makes container fluid only in lg, not present means fluid everywhere
   */
  lg: _propTypes["default"].bool,

  /**
   * This is in combination with fluid enabled
   * True makes container fluid only in xl, not present means fluid everywhere
   */
  xl: _propTypes["default"].bool,

  /**
   * Optional styling
   */
  style: _propTypes["default"].objectOf(_propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])),

  /**
   * Use your own component
   */
  component: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string])
}, _class2.defaultProps = {
  fluid: false,
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
  style: {},
  component: 'div'
}, _temp)) || _class;

exports["default"] = Container;