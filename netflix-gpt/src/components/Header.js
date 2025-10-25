import {signOut} from "firebase/auth";
import { auth } from '../utils/firebase.js';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice.js";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {addUser } from "../utils/userSlice.js";
import { netflixLogo, profileLogo } from "../utils/constants.js";   
import { toggleGptSearchView } from "../utils/GptSlice.js";
import { SUPPORTED_LANGUAGES } from "../utils/constants.js";
import { changeLanguage } from "../utils/configSlice.js";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
     const dispatch = useDispatch();
    const gpt = useSelector((store) => store.gpt);

    const handleSignOut = () => {
        // sign out logic

signOut(auth).then(() => {
//   // Sign-out successful.
//   dispatch(removeUser());
  
//   navigate("/");
}).catch((error) => {
  // An error happened.
  navigate("/error");
});
    }   

const handleGptSearchClick = () => {
  dispatch(toggleGptSearchView() );
}

const handleLanguageChange = (e) => {
  const selectedLang = e.target.value;
  dispatch(changeLanguage(selectedLang));
};

useEffect(() => {

       const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {uid, email, displayName} = user;
    dispatch(addUser({
        uid: uid,
        email: email,
        displayName: displayName
    }));
    navigate("/browse");
  } else {
    // User is signed out
    dispatch(removeUser());
    navigate("/");
  }
}); 

// unsubscribe on unmount
return () => unsubscribe();
    }, []);

  return (
    
    <div className="absolute w-screen z-10 px-8 py-2 bg-gradient-to-b from-black flex justify-between items-center">
    <img
      src={netflixLogo}
      alt="Netflix Logo"
        className="w-44"
    />

     <button className="px-4 py-2 my-2 mx-4 bg-purple-800 text-white rounded-md"
    onClick={handleGptSearchClick}
    > { gpt.isGptSearchView ? "Home" : "Gpt Search" } </button>

    {gpt.isGptSearchView && (
      <select className="bg-black text-white border-white border-2 rounded px-2 py-1"
        onChange={handleLanguageChange}
      >
        {SUPPORTED_LANGUAGES.map((lang) => (
          <option key={lang.identifier} value={lang.identifier}>
          {lang.name}
        </option>
        
      ))}
       </select>
    )}
   
  {user && (<div className="flex p-2 ">
        <img
          src={profileLogo}
          alt="account"
          className=""
        />
        <button onClick={handleSignOut} className="bg-red-600 px-4 py-1 rounded text-white ml-4">Sign Out</button>
    </div>
  )}
    </div>
  
  );
}

export default Header;
