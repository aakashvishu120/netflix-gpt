"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.addGptMovieResult = exports.toggleGptSearchView = void 0;

var _toolkit = require("@reduxjs/toolkit");

var gptSlice = (0, _toolkit.createSlice)({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames: null,
    movieResults: null
  },
  reducers: {
    toggleGptSearchView: function toggleGptSearchView(state) {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: function addGptMovieResult(state, action) {
      var _action$payload = action.payload,
          movieNames = _action$payload.movieNames,
          movieResults = _action$payload.movieResults;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    }
  }
});
var _gptSlice$actions = gptSlice.actions,
    toggleGptSearchView = _gptSlice$actions.toggleGptSearchView,
    addGptMovieResult = _gptSlice$actions.addGptMovieResult;
exports.addGptMovieResult = addGptMovieResult;
exports.toggleGptSearchView = toggleGptSearchView;
var _default = gptSlice.reducer;
exports["default"] = _default;