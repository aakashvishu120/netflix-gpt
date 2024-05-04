import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS, RAPID_API_OPTIONS, RAPID_SEARCH_API, TMDB_SEARCH_API } from '../utils/constants'
import { addGptMovieResult } from '../utils/gptSlice'

const GptSearchBar = () => {
    const langKey = useSelector(store=>store.config.lang);      //fetching from redux store
    const searchText = useRef(null)
    const dispatch = useDispatch();

    const searchMovieTMDB = async (movie) => {

        const searchURL =  TMDB_SEARCH_API+"?query="+movie+"&include_adult=false&language=en-US&page=1";
        const data = await fetch(searchURL, API_OPTIONS);
        const json = await data.json();
        return json.results;
    }

    const handleGptSearchClick = async () => {
        const searchInput = searchText.current.value;
        //rapid api
        const url = RAPID_SEARCH_API+'?title='+ searchInput + '&country=IN&show_type=all&output_language=en';
        const response = await fetch(url, RAPID_API_OPTIONS);
        const output = await response.json();
        const result = output.result;

        //object is not compatible for map function make it compatible by converting it into array
        const pluck = (arr, ...keys) => keys.length > 1 ?
            arr.map(i => keys.map(k => i[k])) : arr.map(i => i[keys[0]]);
        const title = pluck(result, 'title');

        const promiseArray = title.map((movie) => searchMovieTMDB(movie));
        const tmdbResults = await Promise.all(promiseArray);
        
        dispatch(addGptMovieResult({movieNames : title, movieResults: tmdbResults}));   //inserting into redux store
    }

    return (
    <div className='pt-[10%] flex justify-center'>
        <form className='bg-black w-1/2 grid grid-cols-12 rounded-lg' 
        onSubmit={(e)=>e.preventDefault()}>
        <input ref={searchText} type="text" className='p-4 m-4 col-span-9 rounded-md' placeholder={lang[langKey].gptSearchPlaceHolder} />
        <button className='col-span-3 m-4 py-2 px-4 bg-red-600 text-white rounded-lg' onClick={handleGptSearchClick}>{lang[langKey].search}</button>
        </form>
    </div>
    )
}

export default GptSearchBar