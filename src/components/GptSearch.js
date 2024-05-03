import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BACKGROUND_IMAGE } from '../utils/constants'

const GptSearch = () => {
    return (
    <div>
        <div className='absolute -z-10'>
                <img className='min-w-[1320px]' src={BACKGROUND_IMAGE} alt="bgImage" />
        </div>

        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>
    )
}

export default GptSearch