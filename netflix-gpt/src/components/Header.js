import {signOut} from "firebase/auth";
import { auth } from '../utils/firebase.js';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice.js";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
     const dispatch = useDispatch();

    const handleSignOut = () => {
        // sign out logic

signOut(auth).then(() => {
  // Sign-out successful.
  dispatch(removeUser());
  
  navigate("/");
}).catch((error) => {
  // An error happened.
  navigate("/error");
});
    }   

  return (
    
    <div className="absolute w-screen z-10 px-8 py-2 bg-gradient-to-b from-black flex justify-between items-center">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
      alt="Netflix Logo"
        className="w-44"
    />

  {user && (<div className="flex p-2 ">
        <img
          src="https://occ-0-5690-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABeuqjuQsRgqEDlibtJTI5BMf8IxhLlLOeIT6xI4TL57mqv7XHja43gx02S8pZVe8JNGRQXjnrUk1VcsTXqi83tFKPI6OR3k.png?r=bd7"
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
