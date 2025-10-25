import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../utils/movieSlice.js';
import { API_OPTIONS } from '../utils/constants.js';



const useTopRatedMovies = () => {

     const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        API_OPTIONS
      );
      const data = await response.json();
      
      dispatch(addTopRatedMovies(data.results));
      return data.results;
    } catch (error) {
      console.error('Error fetching top rated movies:', error);
      return [];
    }
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);

}

export default useTopRatedMovies;