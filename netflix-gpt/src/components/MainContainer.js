import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if( movies === null ) {
        return;
    }

    const mainMovie = movies && movies.length > 0 ? movies[0] : null;

    const {original_title, overview, id} = mainMovie || {};

  return (
    <div className=" relative w-full overflow-x-hidden">
        <VideoTitle  title={original_title} overview={overview} />
        <VideoBackground movieId={id}/>

    </div>
  );
}

export default MainContainer;
