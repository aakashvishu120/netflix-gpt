import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {

    return (Array.isArray(movies) && movies.length &&
        <div className='px-6 '>
            <h1 className='text-white text-lg md:text-3xl py-4'>{title}</h1>
            <div className='flex overflow-x-scroll'>
                <div className='flex'>
                    {movies?.map(movie => <MovieCard key={movie.id} p={movie?.poster_path} posterPath={movie?.poster_path } /> )}
                </div>
            </div>
        </div>
    )
}

export default MovieList;