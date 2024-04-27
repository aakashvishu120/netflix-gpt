import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
    const [isSignInForm , setIsSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    return (
        <div>
            <Header/>
            <div className='absolute'>
                <img className='' src="https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bgImage" />
            </div>
            <form className='max-w-[400px] h-[600px] absolute p-12 bg-black/80 my-28 mx-auto left-0 right-0 text-white rounded-md'>
                <h1 className='font-bold text-3xl py-4 m-2'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                {!isSignInForm && <input type="text" placeholder='Full Name' className='p-4 m-2 w-full bg-black/30 rounded-md focus:border-white border-2 border-solid' />}

                <input type="text" placeholder='Email or mobile number' className='p-4 m-2 w-full bg-black/30 rounded-md focus:border-white border-2 border-solid' />

                <input type="password" placeholder='Password' className='p-4 m-2 w-full bg-black/30 rounded-md focus:border-white border-2 border-solid' />

                <button className='py-2 m-2 bg-red-600 rounded-md w-full'>{isSignInForm ? "Sign In" : "Sign Up"}</button>

                <p onClick={toggleSignInForm}  className='py-4 m-2 cursor-pointer hover:underline'>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"} </p>
            </form>
        </div>
    )
}

export default Login;