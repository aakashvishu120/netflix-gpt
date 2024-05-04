import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BACKGROUND_IMAGE } from '../utils/constants'

const GptSearch = () => {
    return (
        <>
        <div className='fixed -z-10'>
                <img className='h-screen object-cover md:h-auto md:min-w-[1320px]' src={BACKGROUND_IMAGE} alt="bgImage" />
        </div>

        <div className=''>
            <GptSearchBar/>
            <GptMovieSuggestion/>
        </div>
    </>
    )
}

export default GptSearch