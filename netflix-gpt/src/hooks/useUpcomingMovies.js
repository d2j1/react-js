import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../utils/movieSlice.js';
import { API_OPTIONS } from '../utils/constants.js';

const useUpcomingMovies = () => {

     const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        API_OPTIONS
      );
      const data = await response.json();
      
      dispatch(addUpcomingMovies(data.results));
      return data.results;
    } catch (error) {
      console.error('Error fetching upcoming movies:', error);
      return [];
    }
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);

}

export default useUpcomingMovies;