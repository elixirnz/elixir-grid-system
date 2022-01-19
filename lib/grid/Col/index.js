"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _throttle = _interopRequireDefault(require("lodash/throttle"));

var _style = _interopRequireDefault(require("./style"));

var _config = require("../../config");

var _utils = require("../../utils");

var _Row = require("../Row");

var _excluded = ["children", "xs", "sm", "md", "lg", "xl", "offset", "pull", "push", "debug", "style", "component"];

var _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Col = (0, _config.ScreenContextConsumer)(_class = (_temp = _class2 = /*#__PURE__*/function (_React$Component) {
  _inherits(Col, _React$Component);

  var _super = _createSuper(Col);

  function Col(props, context) {
    var _this;

    _classCallCheck(this, Col);

    _this = _super.call(this, props, context);

    _this.componentDidMount = function () {
      _this.setScreenClass();

      _this.eventListener = (0, _throttle.default)(_this.setScreenClass, 100);
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

    _this.renderCol = function (nogutter) {
      var _this$props = _this.props,
          children = _this$props.children,
          xs = _this$props.xs,
          sm = _this$props.sm,
          md = _this$props.md,
          lg = _this$props.lg,
          xl = _this$props.xl,
          offset = _this$props.offset,
          pull = _this$props.pull,
          push = _this$props.push,
          debug = _this$props.debug,
          style = _this$props.style,
          component = _this$props.component,
          otherProps = _objectWithoutProperties(_this$props, _excluded);

      var theStyle = (0, _style.default)({
        width: {
          xs: xs,
          sm: sm,
          md: md,
          lg: lg,
          xl: xl
        },
        offset: offset,
        pull: pull,
        push: push,
        debug: debug,
        screenClass: !_this.props.rect ? _this.state.screenClass : (0, _utils.getScreenClass)(_this.props.rect),
        gutterWidth: nogutter ? 0 : (0, _config.getConfiguration)().gutterWidth,
        gridColumns: (0, _config.getConfiguration)().gridColumns,
        moreStyle: style
      });
      return /*#__PURE__*/(0, _react.createElement)(component, _objectSpread(_objectSpread({
        style: theStyle
      }, otherProps), {}, {
        children: children
      }));
    };

    _this.render = function () {
      return /*#__PURE__*/_react.default.createElement(_Row.NoGutterContext.Consumer, null, function (nogutter) {
        return _this.renderCol(nogutter);
      });
    };

    _this.state = {
      screenClass: (0, _config.getConfiguration)().defaultScreenClass
    };
    return _this;
  }

  return _createClass(Col);
}(_react.default.Component), _class2.propTypes = {
  /**
   * Content of the column
   */
  children: _propTypes.default.node,

  /**
   * The width of the column for screenclass `xs`, between 0 and 12
   */
  xs: _propTypes.default.number,

  /**
   * The width of the column for screenclass `sm`, between 0 and 12
   */
  sm: _propTypes.default.number,

  /**
   * The width of the column for screenclass `md`, between 0 and 12
   */
  md: _propTypes.default.number,

  /**
   * The width of the column for screenclass `lg`, between 0 and 12
   */
  lg: _propTypes.default.number,

  /**
   * The width of the column for screenclass `xl`, between 0 and 12
   */
  xl: _propTypes.default.number,

  /**
   * The offset of this column for all screenclasses
   */
  offset: _propTypes.default.shape({
    xs: _propTypes.default.number,
    sm: _propTypes.default.number,
    md: _propTypes.default.number,
    lg: _propTypes.default.number,
    xl: _propTypes.default.number
  }),

  /**
  * The amount this column is pushed to the right for all screenclasses
  */
  push: _propTypes.default.shape({
    xs: _propTypes.default.number,
    sm: _propTypes.default.number,
    md: _propTypes.default.number,
    lg: _propTypes.default.number,
    xl: _propTypes.default.number
  }),

  /**
   * The amount this column is pulled to the left for all screenclasses
   */
  pull: _propTypes.default.shape({
    xs: _propTypes.default.number,
    sm: _propTypes.default.number,
    md: _propTypes.default.number,
    lg: _propTypes.default.number,
    xl: _propTypes.default.number
  }),

  /**
   * Optional styling
   */
  style: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])),

  /**
   * Set to apply some debug styling
   */
  debug: _propTypes.default.bool,

  /**
   * Use your own component
   */
  component: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string])
}, _class2.defaultProps = {
  children: null,
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null,
  offset: {},
  push: {},
  pull: {},
  style: {},
  debug: false,
  component: 'div'
}, _temp)) || _class;

exports.default = Col;