"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _reactRedux = require("react-redux");

var _constants = require("../utils/constants");

var _moviesSlice = require("../utils/moviesSlice");

var useNowPlayingMovies = function useNowPlayingMovies() {
  //Fetch Data from TMDb API and update store
  var dispatch = (0, _reactRedux.useDispatch)(); //when user flow is back and forth then avoid calling api every time //memoization

  var nowPlayingMovies = (0, _reactRedux.useSelector)(function (store) {
    return store.movies.nowPlayingMovies;
  });

  var getNowPlayingMovies = function getNowPlayingMovies() {
    var data, json;
    return regeneratorRuntime.async(function getNowPlayingMovies$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', _constants.API_OPTIONS));

          case 2:
            data = _context.sent;
            _context.next = 5;
            return regeneratorRuntime.awrap(data.json());

          case 5:
            json = _context.sent;
            dispatch((0, _moviesSlice.addNowPlayingMovies)(json.results));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  (0, _react.useEffect)(function () {
    if (!nowPlayingMovies) {
      getNowPlayingMovies();
    }
  }, []);
};

var _default = useNowPlayingMovies;
exports["default"] = _default;