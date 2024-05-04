"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _reactRedux = require("react-redux");

var _constants = require("../utils/constants");

var _moviesSlice = require("../utils/moviesSlice");

var useUpcomingMovies = function useUpcomingMovies() {
  //Fetch Data from TMDb API and update store
  var dispatch = (0, _reactRedux.useDispatch)();
  var upcomingMovies = (0, _reactRedux.useSelector)(function (store) {
    return store.movies.upcomingMovies;
  });

  var getUpcomingMovies = function getUpcomingMovies() {
    var data, json;
    return regeneratorRuntime.async(function getUpcomingMovies$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', _constants.API_OPTIONS));

          case 2:
            data = _context.sent;
            _context.next = 5;
            return regeneratorRuntime.awrap(data.json());

          case 5:
            json = _context.sent;
            dispatch((0, _moviesSlice.addUpcomingMovies)(json.results));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  (0, _react.useEffect)(function () {
    !upcomingMovies && getUpcomingMovies();
  }, []);
};

var _default = useUpcomingMovies;
exports["default"] = _default;