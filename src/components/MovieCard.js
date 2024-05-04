import React from 'react'
import { IMG_CDN_URL, NO_IMAGE } from '../utils/constants'

const MovieCard = ({posterPath}) => {
    return (
    <div className='w-36 md:w-48 pr-4'>
        <img src={posterPath===null ? NO_IMAGE : IMG_CDN_URL+ posterPath} alt="Movie Card" className='rounded-md w-30' />
    </div>
    )
}

export default MovieCard