"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UPCOMING_MOVIES = exports.TOP_RATED_MOVIES = exports.POPULAR_MOVIES = exports.NOW_PLAYING_MOVIES_URL = exports.IMG_CDN_URL = exports.API_OPTIONS = exports.USER_AVATAR = exports.LOGO = void 0;
var LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"; // export const USER_AVATAR = "https://avatars.githubusercontent.com/u/63881556?v=4";

exports.LOGO = LOGO;
var USER_AVATAR = "https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfjwXqIYd3kCEU6KWsiHSHvkft8VhZg0yyD50a_pHXku4dz9VgxWwfA2ontwogStpj1NE9NJMt7sCpSKFEY2zmgqqQfcw1FMWwB9.png?r=229";
exports.USER_AVATAR = USER_AVATAR;
var API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzJkNDQ5MmE3OTE4YWExYzA0MTM0ZWVmYzQyMmM3YSIsInN1YiI6IjY2MmU1ZDM2NWE3ODg0MDEyN2MxY2Y0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jfYc9uhPohwN_cdrG1gNcZlIqiALxOONcvXbax3erB8'
  }
};
exports.API_OPTIONS = API_OPTIONS;
var IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
exports.IMG_CDN_URL = IMG_CDN_URL;
var NOW_PLAYING_MOVIES_URL = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
exports.NOW_PLAYING_MOVIES_URL = NOW_PLAYING_MOVIES_URL;
var POPULAR_MOVIES = "https://api.themoviedb.org/3/movie/popular?page=1";
exports.POPULAR_MOVIES = POPULAR_MOVIES;
var TOP_RATED_MOVIES = "https://api.themoviedb.org/3/movie/top_rated?page=1";
exports.TOP_RATED_MOVIES = TOP_RATED_MOVIES;
var UPCOMING_MOVIES = "https://api.themoviedb.org/3/movie/upcoming?page=1";
exports.UPCOMING_MOVIES = UPCOMING_MOVIES;