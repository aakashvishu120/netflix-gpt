"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.addTrailerVideo = exports.addNowPlayingMovies = void 0;

var _toolkit = require("@reduxjs/toolkit");

var moviesSlice = (0, _toolkit.createSlice)({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null
  },
  reducers: {
    addNowPlayingMovies: function addNowPlayingMovies(state, action) {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: function addTrailerVideo(state, action) {
      state.trailerVideo = action.payload;
    }
  }
});
var _moviesSlice$actions = moviesSlice.actions,
    addNowPlayingMovies = _moviesSlice$actions.addNowPlayingMovies,
    addTrailerVideo = _moviesSlice$actions.addTrailerVideo;
exports.addTrailerVideo = addTrailerVideo;
exports.addNowPlayingMovies = addNowPlayingMovies;
var _default = moviesSlice.reducer;
exports["default"] = _default;