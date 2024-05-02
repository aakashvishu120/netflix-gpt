"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _userSlice = _interopRequireDefault(require("./userSlice"));

var _moviesSlice = _interopRequireDefault(require("./moviesSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var appStore = (0, _toolkit.configureStore)({
  reducer: {
    user: _userSlice["default"],
    movies: _moviesSlice["default"]
  }
});
var _default = appStore;
exports["default"] = _default;