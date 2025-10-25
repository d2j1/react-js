import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice.js';
import { API_OPTIONS } from '../utils/constants.js';



const useNowPlayingMovies = () => {

     const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(addNowPlayingMovies(data.results));
      return data.results;
    } catch (error) {
      console.error('Error fetching now playing movies:', error);
      return [];
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

}

export default useNowPlayingMovies;;