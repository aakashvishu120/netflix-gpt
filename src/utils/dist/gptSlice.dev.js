"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.toggleGptSearchView = void 0;

var _toolkit = require("@reduxjs/toolkit");

var gptSlice = (0, _toolkit.createSlice)({
  name: "gpt",
  initialState: {
    showGptSearch: false
  },
  reducers: {
    toggleGptSearchView: function toggleGptSearchView(state) {
      state.showGptSearch = !state.showGptSearch;
    }
  }
});
var toggleGptSearchView = gptSlice.actions.toggleGptSearchView;
exports.toggleGptSearchView = toggleGptSearchView;
var _default = gptSlice.reducer;
exports["default"] = _default;