export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

// export const USER_AVATAR = "https://avatars.githubusercontent.com/u/63881556?v=4";
export const USER_AVATAR = "https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfjwXqIYd3kCEU6KWsiHSHvkft8VhZg0yyD50a_pHXku4dz9VgxWwfA2ontwogStpj1NE9NJMt7sCpSKFEY2zmgqqQfcw1FMWwB9.png?r=229";

export const BACKGROUND_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_KEY
    }
};

export const RAPID_API_OPTIONS  = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_KEY,
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const NOW_PLAYING_MOVIES_URL = 'https://api.themoviedb.org/3/movie/now_playing?page=1';

export const POPULAR_MOVIES = "https://api.themoviedb.org/3/movie/popular?page=1";

export const TOP_RATED_MOVIES = "https://api.themoviedb.org/3/movie/top_rated?page=1";

export const UPCOMING_MOVIES = "https://api.themoviedb.org/3/movie/upcoming?page=1";

export const SUPPORTED_LANGUAGES = [
    {identifier : "en" , name:"English" },
    {identifier : "hindi" , name:"Hindi" },
    {identifier : "spanish" , name:"Spanish" },
    {identifier : "fr" , name:"French" },
];

export const NO_IMAGE = 'https://cdn.pixabay.com/photo/2015/12/22/04/00/photo-1103594_1280.png';

export const RAPID_SEARCH_API = 'https://streaming-availability.p.rapidapi.com/search/title';

export const TMDB_SEARCH_API = "https://api.themoviedb.org/3/search/movie";
