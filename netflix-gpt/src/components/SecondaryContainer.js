import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {

  const nowPlayingmovies = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
 const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);

  return (
    <div className="bg-black ">
      <div className="-mt-40 relative z-10 pl-12">
      { nowPlayingmovies && <MovieList  title={"Now Playing"} movies={nowPlayingmovies}/> }
      { popularMovies && <MovieList  title={"Popular"} movies={popularMovies}/> }
      { topRatedMovies && <MovieList  title={"Top Rated"} movies={topRatedMovies}/> }
      { upcomingMovies && <MovieList  title={"Upcoming"} movies={upcomingMovies}/> }
      </div>
    </div>
  );
}

export default SecondaryContainer;
