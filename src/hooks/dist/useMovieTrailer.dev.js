"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _constants = require("../utils/constants");

var _moviesSlice = require("../utils/moviesSlice");

var _react = require("react");

var useMovieTrailer = function useMovieTrailer(movieId) {
  var dispatch = (0, _reactRedux.useDispatch)(); //memoization

  var trailerVideo = (0, _reactRedux.useSelector)(function (store) {
    return store.movies.trailerVideo;
  });

  var getMovieVideos = function getMovieVideos() {
    var data, json, filterData, trailer;
    return regeneratorRuntime.async(function getMovieVideos$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', _constants.API_OPTIONS));

          case 2:
            data = _context.sent;
            _context.next = 5;
            return regeneratorRuntime.awrap(data.json());

          case 5:
            json = _context.sent;
            filterData = json.results.filter(function (video) {
              return video.type === "Trailer";
            });
            trailer = filterData.length ? filterData[0] : json.results[0];
            dispatch((0, _moviesSlice.addTrailerVideo)(trailer));

          case 9:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  (0, _react.useEffect)(function () {
    !trailerVideo && getMovieVideos();
  }, []);
};

var _default = useMovieTrailer;
exports["default"] = _default;