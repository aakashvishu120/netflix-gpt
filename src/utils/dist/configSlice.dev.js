"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.changeLanguage = void 0;

var _toolkit = require("@reduxjs/toolkit");

var configSlice = (0, _toolkit.createSlice)({
  name: "config",
  initialState: {
    lang: "en"
  },
  reducers: {
    changeLanguage: function changeLanguage(state, action) {
      state.lang = action.payload;
    }
  }
});
var changeLanguage = configSlice.actions.changeLanguage;
exports.changeLanguage = changeLanguage;
var _default = configSlice.reducer;
exports["default"] = _default;