import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";


const GptSearchBar = () => {

    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);

    const handleGptSearchClick = (e) => {
        e.preventDefault();
        console.log("Searching for: ", searchText.current.value);
    }


    return (
        <div className="pt-[20%] flex justify-center items-center">
            <form className=" w-1/2 grid grid-cols-12 bg-black">
                <input
                    type="text"
                    placeholder={lang[langKey].gptSearchPlaceholder}
                    className="p-4 m-2  col-span-8 rounded border-black"
                    ref={searchText}
                />
                <button className=" bg-red-600 text-white rounded col-span-4" type="submit" onClick={handleGptSearchClick} >{lang[langKey].search}</button>
            </form>
        </div>
    );
}
export default GptSearchBar;
