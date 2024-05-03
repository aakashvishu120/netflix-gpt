"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.addUpcomingMovies = exports.addTopRatedMovies = exports.addPopularMovies = exports.addTrailerVideo = exports.addNowPlayingMovies = void 0;

var _toolkit = require("@reduxjs/toolkit");

var moviesSlice = (0, _toolkit.createSlice)({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    trailerVideo: null
  },
  reducers: {
    addNowPlayingMovies: function addNowPlayingMovies(state, action) {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: function addPopularMovies(state, action) {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: function addTopRatedMovies(state, action) {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: function addUpcomingMovies(state, action) {
      state.upcomingMovies = action.payload;
    },
    addTrailerVideo: function addTrailerVideo(state, action) {
      state.trailerVideo = action.payload;
    }
  }
});
var _moviesSlice$actions = moviesSlice.actions,
    addNowPlayingMovies = _moviesSlice$actions.addNowPlayingMovies,
    addTrailerVideo = _moviesSlice$actions.addTrailerVideo,
    addPopularMovies = _moviesSlice$actions.addPopularMovies,
    addTopRatedMovies = _moviesSlice$actions.addTopRatedMovies,
    addUpcomingMovies = _moviesSlice$actions.addUpcomingMovies;
exports.addUpcomingMovies = addUpcomingMovies;
exports.addTopRatedMovies = addTopRatedMovies;
exports.addPopularMovies = addPopularMovies;
exports.addTrailerVideo = addTrailerVideo;
exports.addNowPlayingMovies = addNowPlayingMovies;
var _default = moviesSlice.reducer;
exports["default"] = _default;