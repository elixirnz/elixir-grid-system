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

var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Viewport =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Viewport, _React$Component);

  function Viewport(props, context) {
    var _this;

    _classCallCheck(this, Viewport);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Viewport).call(this, props, context));
    _this.state = {
      top: 0,
      left: 0,
      width: 0,
      height: 0,
      isSet: false
    };

    _this.componentDidMount = function () {
      _this.resizeObserver = new _resizeObserverPolyfill["default"](function (entries) {
        var e = entries && entries[0];
        if (!e) return;
        var _e$contentRect = e.contentRect,
            top = _e$contentRect.top,
            left = _e$contentRect.left,
            width = _e$contentRect.width,
            height = _e$contentRect.height;

        _this.setState({
          top: top,
          left: left,
          width: width,
          height: height,
          isSet: true
        });
      });

      _this.resizeObserver.observe(document.querySelector("#" + _this.ElementId));
    };

    _this.componentWillUnmount = function () {
      if (_this.resizeObserver) {
        _this.resizeObserver.disconnect();
      }
    };

    _this.render = function () {
      return _react["default"].createElement("div", _extends({
        id: _this.ElementId
      }, _this.props), _react["default"].createElement(_config.ScreenContext.Provider, {
        value: _this.state
      }, _this.props.children));
    };

    _this.ElementId = "VP".concat(Date.now()).concat(Math.floor(Math.random() * 10000000));
    return _this;
  }

  return Viewport;
}(_react["default"].Component);

exports["default"] = Viewport;
Viewport.propTypes = {
  /**
   * 
   */
};