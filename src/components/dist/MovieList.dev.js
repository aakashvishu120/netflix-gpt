"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _MovieCard = _interopRequireDefault(require("./MovieCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MovieList = function MovieList(_ref) {
  var title = _ref.title,
      movies = _ref.movies;
  console.log("inside movieList");
  console.log(movies); // return (
  //     <div>
  //         <div>
  //             <h1>{title}</h1>
  //             <div>
  //                 {movies.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} /> )}
  //             </div>
  //         </div>
  //     </div>
  // )
  // return <h1>aakash</h1>
};

var _default = MovieList;
exports["default"] = _default;