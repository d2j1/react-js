import GptSearchBar from "./GptSearchBar.js";
import GptMovieSuggestions from "./GptMovieSuggestions.js";
import { BG_URL } from "../utils/constants.js";

const GptSearch = () => {
    return (
        <div>
        <img
          src={BG_URL}
          alt="Login background"
          className="absolute w-full h-screen object-cover"
        />
        <div className="relative z-1">
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    </div>
    );
}
export default GptSearch;