import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import lang from '../utils/languageConstants';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const showGptSearch = useSelector(store=>store.gpt.showGptSearch);

    const handleSignOut = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            navigate("/error");
            // An error happened.
        });
    }

    //always put onAuthStateChanged inside header(common) component because it was always presnt on every page , prevent access of unauthorised user on browse page
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                //signin/signup
                // const uid = user.uid;
                const {uid,email,displayName, photoURL} = user;
                dispatch(addUser({uid : uid , email : email , displayName : displayName , photoURL : photoURL}));
                navigate("/browse");   
            } else {
              // User is signed out
                dispatch(removeUser());
                navigate("/");
            }
        });

        //unsubscribe when component unmounts 
        return () => unsubscribe();
    } , []);

    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView());
    }

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    }

    return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-44' src={LOGO} alt="logo" />
        {user && <div className='flex p-2'>
            {showGptSearch && <select className='rounded-md bg-gray-900 text-white' onChange={handleLanguageChange}>
                {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option> )}
            </select>}

            <button className='py-2 px-4 mx-4 my-2 bg-white rounded-md font-bold border-black border-[1px] hover:bg-gray-200' onClick={handleGptSearchClick}>
                {showGptSearch ? "Homepage" : "GPT Search"}
            </button>
            <img className='w-10 h-10 rounded-md' src={user?.photoURL} alt="usericon" />
            <button onClick={handleSignOut} className='font-bold text-white rounded-md'>(Sign Out)</button>
        </div>}
    </div>
    )
}

export default Header