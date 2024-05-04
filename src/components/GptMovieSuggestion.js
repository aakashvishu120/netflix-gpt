import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestion = () => {

    // const {movieNames, movieResults}=useSelector(store => store.gpt);
    const gpt =useSelector(store => store.gpt);
    const movieResults = gpt.movieResults;
    const movieNames = gpt.movieNames;

    if(!movieNames) return null;
    if(!movieResults) return null;

    return (movieResults &&
    <div className='p-4 m-4 bg-black bg-opacity-80 text-white'>
        <div>
            {movieNames?.map((movieName,index) => <MovieList key={movieName} title={movieName} movies={movieResults[index]} />)}
        </div>
    </div>
    )
}

export default GptMovieSuggestion