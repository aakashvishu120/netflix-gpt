import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { signInWithEmailAndPassword , createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BACKGROUND_IMAGE, USER_AVATAR } from '../utils/constants';


const Login = () => {
    const [isSignInForm , setIsSignInForm] = useState(true);
    const [errorMessage , setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);


    const handleButtonClick = () => {
        //validate the form data
        const message = checkValidData(email.current.value , password.current.value);
        setErrorMessage(message);
        if(message) return;

        if(!isSignInForm){
            //signup logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;

                updateProfile(user, {
                    displayName: name.current.value, 
                    photoURL: USER_AVATAR
                    }).then(() => {
                        const {uid,email,displayName, photoURL} = auth.currentUser;  //user won't place has because it hasn't updated till at point
                        dispatch(addUser({uid : uid , email : email , displayName : displayName , photoURL : photoURL}));
                    }).catch((error) => {
                        setErrorMessage(error.message);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + " - " + errorMessage);
            });
        }
        else{
            //signin logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + " - " + errorMessage);
            });
        }

    }

    return (
        <div>
            <Header/>
            <div className='absolute'>
                <img className='min-w-[1320px]' src={BACKGROUND_IMAGE} alt="bgImage" />
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className='max-w-[400px] h-[600px] absolute p-12 bg-black/80 my-28 mx-auto left-0 right-0 text-white rounded-md'>
                <h1 className='font-bold text-3xl py-4 m-2'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                {!isSignInForm && <input ref={name} type="text" placeholder='Full Name' className='p-4 m-2 w-full bg-black/30 rounded-md focus:border-white border-2 border-solid' />}

                <input ref={email} type="text" placeholder='Email' className='p-4 m-2 w-full bg-black/30 rounded-md focus:border-white border-2 border-solid' />

                <input ref={password} type="password" placeholder='Password' className='p-4 m-2 w-full bg-black/30 rounded-md focus:border-white border-2 border-solid' />
                <p className='m-2 text-red-500'>{errorMessage}</p>

                <button className='py-2 m-2 bg-red-600 rounded-md w-full' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>

                <p onClick={toggleSignInForm}  className='py-4 m-2 cursor-pointer hover:underline'>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"} </p>
            </form>
        </div>
    )
}

export default Login;