"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TMDB_SEARCH_API = exports.RAPID_SEARCH_API = exports.NO_IMAGE = exports.OPENAI_KEY = exports.SUPPORTED_LANGUAGES = exports.UPCOMING_MOVIES = exports.TOP_RATED_MOVIES = exports.POPULAR_MOVIES = exports.NOW_PLAYING_MOVIES_URL = exports.IMG_CDN_URL = exports.RAPID_API_OPTIONS = exports.API_OPTIONS = exports.BACKGROUND_IMAGE = exports.USER_AVATAR = exports.LOGO = void 0;
var LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"; // export const USER_AVATAR = "https://avatars.githubusercontent.com/u/63881556?v=4";

exports.LOGO = LOGO;
var USER_AVATAR = "https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfjwXqIYd3kCEU6KWsiHSHvkft8VhZg0yyD50a_pHXku4dz9VgxWwfA2ontwogStpj1NE9NJMt7sCpSKFEY2zmgqqQfcw1FMWwB9.png?r=229";
exports.USER_AVATAR = USER_AVATAR;
var BACKGROUND_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_large.jpg";
exports.BACKGROUND_IMAGE = BACKGROUND_IMAGE;
var API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
  }
};
exports.API_OPTIONS = API_OPTIONS;
var RAPID_API_OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_KEY,
    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
  }
};
exports.RAPID_API_OPTIONS = RAPID_API_OPTIONS;
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
var SUPPORTED_LANGUAGES = [{
  identifier: "en",
  name: "English"
}, {
  identifier: "hindi",
  name: "Hindi"
}, {
  identifier: "spanish",
  name: "Spanish"
}, {
  identifier: "fr",
  name: "French"
}];
exports.SUPPORTED_LANGUAGES = SUPPORTED_LANGUAGES;
var OPENAI_KEY = "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";
exports.OPENAI_KEY = OPENAI_KEY;
var NO_IMAGE = 'https://cdn.pixabay.com/photo/2015/12/22/04/00/photo-1103594_1280.png';
exports.NO_IMAGE = NO_IMAGE;
var RAPID_SEARCH_API = 'https://streaming-availability.p.rapidapi.com/search/title';
exports.RAPID_SEARCH_API = RAPID_SEARCH_API;
var TMDB_SEARCH_API = "https://api.themoviedb.org/3/search/movie";
exports.TMDB_SEARCH_API = TMDB_SEARCH_API;