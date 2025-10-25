import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="flex-shrink-0 w-32 h-48">
      <img src={IMG_CDN_URL + posterPath} alt="Movie Poster" 
      className="w-full h-full object-cover rounded-md" />
    </div>
  );
};

export default MovieCard;
