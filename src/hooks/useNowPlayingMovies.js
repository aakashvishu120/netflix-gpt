
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addNowPlayingMovies } from '../utils/moviesSlice';

const useNowPlayingMovies = () => {
    //Fetch Data from TMDb API and update store
    const dispatch = useDispatch();

    //when user flow is back and forth then avoid calling api every time //memoization
    const nowPlayingMovies = useSelector(store=> store.movies.nowPlayingMovies);

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(()=>{
        if(!nowPlayingMovies){
            getNowPlayingMovies();
        }
    },[]);
}

export default useNowPlayingMovies;