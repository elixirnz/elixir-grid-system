"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScreenClass = exports.screenClasses = void 0;

var _config = require("./config");

/* global window */

/* eslint "no-console": "off" */
var getViewPort = function getViewPort(rect) {
  if (rect && rect.width) {
    return rect.width;
  }

  if (typeof window !== 'undefined' && window.innerWidth) {
    return window.innerWidth;
  }

  return null;
};

var screenClasses = ['xs', 'sm', 'md', 'lg', 'xl'];
exports.screenClasses = screenClasses;

var getScreenClass = function getScreenClass(rect) {
  var _getConfiguration = (0, _config.getConfiguration)(),
      breakpoints = _getConfiguration.breakpoints,
      defaultScreenClass = _getConfiguration.defaultScreenClass;

  var screenClass = defaultScreenClass;
  var viewport = getViewPort(rect);

  if (viewport) {
    screenClass = 'xs';
    if (breakpoints[0] && viewport >= breakpoints[0]) screenClass = 'sm';
    if (breakpoints[1] && viewport >= breakpoints[1]) screenClass = 'md';
    if (breakpoints[2] && viewport >= breakpoints[2]) screenClass = 'lg';
    if (breakpoints[3] && viewport >= breakpoints[3]) screenClass = 'xl';
  }

  return screenClass;
};

exports.getScreenClass = getScreenClass;