import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";


const GptSearchBar = () => {

    const langKey = useSelector((store) => store.config.lang);

    return (
        <div className="pt-[20%] flex justify-center items-center">
            <form className=" w-1/2 grid grid-cols-12 bg-black">
                <input
                    type="text"
                    placeholder={lang[langKey].gptSearchPlaceholder}
                    className="p-4 m-2  col-span-8 rounded border-black"
                />
                <button className=" bg-red-600 text-white rounded col-span-4" type="submit">{lang[langKey].search}</button>
            </form>
        </div>
    );
}
export default GptSearchBar;
