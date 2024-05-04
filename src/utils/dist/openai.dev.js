"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _openai = _interopRequireDefault(require("openai"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var openai = new _openai["default"]({
  apiKey: _constants.OPENAI_KEY,
  // This is the default and can be omitted
  dangerouslyAllowBrowser: true
});
var _default = openai;
exports["default"] = _default;