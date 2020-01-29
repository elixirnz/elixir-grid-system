"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _throttle = _interopRequireDefault(require("lodash/throttle"));

var style = _interopRequireWildcard(require("./style"));

var _config = require("../../config");

var _utils = require("../../utils");

var _class, _class2, _temp;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Hidden = (0, _config.ScreenContextConsumer)(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Hidden, _React$Component);

  function Hidden(props) {
    var _this;

    _classCallCheck(this, Hidden);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Hidden).call(this, props));

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
      if (style.hidden({
        screenClass: !_this.props.rect ? _this.state.screenClass : (0, _utils.getScreenClass)(_this.props.rect),
        xs: _this.props.xs,
        sm: _this.props.sm,
        md: _this.props.md,
        lg: _this.props.lg,
        xl: _this.props.xl
      })) return false;
      return _react["default"].createElement(_react["default"].Fragment, null, _this.props.children);
    };

    _this.state = {
      screenClass: (0, _config.getConfiguration)().defaultScreenClass
    };
    return _this;
  }

  return Hidden;
}(_react["default"].Component), _class2.propTypes = {
  /**
   * Content of the component
   */
  children: _propTypes["default"].node.isRequired,

  /**
   * Hide on extra small devices
   */
  xs: _propTypes["default"].bool,

  /**
   * Hide on small devices
   */
  sm: _propTypes["default"].bool,

  /**
   * Hide on medium devices
   */
  md: _propTypes["default"].bool,

  /**
   * Hide on large devices
   */
  lg: _propTypes["default"].bool,

  /**
   * Hide on xlarge devices
   */
  xl: _propTypes["default"].bool
}, _class2.defaultProps = {
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false
}, _temp)) || _class;

exports["default"] = Hidden;