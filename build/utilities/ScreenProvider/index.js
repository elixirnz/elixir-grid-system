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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ScreenProvider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ScreenProvider, _React$Component);

  function ScreenProvider() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ScreenProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ScreenProvider)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      top: 0,
      left: 0,
      width: 0,
      height: 0,
      isSet: false
    };

    _this.componentDidMount = function () {
      if (_this.props.screenElement) {
        _this.resizeObserver = new _resizeObserverPolyfill["default"](function (entries) {
          var e = entries && entries[0];
          if (!e) return;

          _this.setState(_objectSpread({}, e.contentRect, {
            isSet: true
          }));
        });

        _this.resizeObserver.observe(_this.props.screenElement);
      } else {
        _this.resizer = function () {
          _this.setState({
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
            isSet: true
          });
        };

        window.addEventListener('resize', _this.resizer);

        _this.resizer();
      }
    };

    _this.componentWillUnmount = function () {
      if (_this.resizeObserver) {
        _this.resizeObserver.disconnect();
      } else {
        window.removeEventListener('resize', _this.resizer);
        delete _this.resizer;
      }
    };

    _this.render = function () {
      return _react["default"].createElement(_config.ScreenContext.Provider, {
        rect: _this.state
      }, _react["default"].createElement(_config.ScreenContext.Consumer, null, _this.props.children));
    };

    return _this;
  }

  return ScreenProvider;
}(_react["default"].Component);

exports["default"] = ScreenProvider;
ScreenProvider.propTypes = {
  /**
   * 
   */
  screenElement: _propTypes["default"].func.isRequired
};