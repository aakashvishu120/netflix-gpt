import React from 'react'

const VideoTitle = ({title, overview}) => {
    return (
    <div className='w-screen pt-[35%] md:pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black aspect-video'>
        <h1 className='text-lg md:text-6xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
        <div className=''>
            <button className='bg-white font-semibold text-lg text-black md:p-2 px-2 py-1  text-sm md:text-lg md:w-32 w-26 my-2 md:0 rounded-md border-2 hover:bg-opacity-80'> 
            <svg className="w-[40px] h-[25px] inline dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="5 5 15 15">
            <path fillRule="evenodd" d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z" clipRule="evenodd"/>
            </svg>
            Play</button>


            <button className='hidden md:inline-block bg-gray-400 bg-opacity-50 font-semibold text-lg text-white p-2 mx-2 w-44 rounded-md border-2 border-gray-500 hover:bg-opacity-80'>
            <svg className="w-[40px] h-[25px] inline dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="5 2 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>

            
            More Info</button>
        </div>
    </div>
    )
}

export default VideoTitle