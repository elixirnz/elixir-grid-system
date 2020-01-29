"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _throttle = _interopRequireDefault(require("lodash/throttle"));

var _config = require("../../config");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ScreenClassRender =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ScreenClassRender, _React$Component);

  function ScreenClassRender(props) {
    var _this;

    _classCallCheck(this, ScreenClassRender);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScreenClassRender).call(this, props));

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
      return _react["default"].createElement(_react["default"].Fragment, null, _this.props.render(_this.state.screenClass));
    };

    _this.state = {
      screenClass: (0, _config.getConfiguration)().defaultScreenClass
    };
    return _this;
  }

  return ScreenClassRender;
}(_react["default"].Component);

exports["default"] = ScreenClassRender;
ScreenClassRender.propTypes = {
  /**
   * The function which return value will be rendered.
   * Will be called with one argument: the screen class.
   */
  render: _propTypes["default"].func.isRequired
};