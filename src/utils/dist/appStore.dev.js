"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _userSlice = _interopRequireDefault(require("./userSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var appStore = (0, _toolkit.configureStore)({
  reducer: {
    user: _userSlice["default"]
  }
});
var _default = appStore;
exports["default"] = _default;