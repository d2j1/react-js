import { useState } from "react";

const Header = () => {

    const [isSignin, setIsSignin] = useState(true);

    const toggleSignInForm = () => {
        setIsSignin(!isSignin);
    }


  return (
    <>
    <div className="absolute z-10">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
      alt="Netflix Logo"
      className="w-44 px-8 py-2 bg-gradient-to-b from-black"
    />
    </div>

    <form className="absolute p-12 bg-black w-3/12 my-28 mx-auto right-0 left-0 text-white flex flex-col items-center bg-opacity-80">
        <h1 className="text-3xl font-bold mb-4">{ isSignin? "Sign In" : "Sign Up"}</h1>
        { !isSignin && ( <input type="text" placeholder="Full Name"className="py-2 my-2 w-full placeholder:p-1 bg-gray-800"/> )}
        <input type="text" placeholder="Email Address"className="py-2 my-2 w-full placeholder:p-1 bg-gray-800"/>
        <input type="password" placeholder="Password"className="py-2 my-2 w-full placeholder:p-1 bg-gray-800"/>
        <button className="py-3 my-2 bg-red-700 rounded-md w-full">{ isSignin? "Sign In" : "Sign Up"}</button>
        <p className="text-sm">{isSignin? "Already have an account?" : "New to Netflix?" } <span onClick={toggleSignInForm} className="text-white font-semibold cursor-pointer">{ isSignin? "Sign In Now" : "Sign Up Now"}</span></p>
    </form>
        </>
  );
}

export default Header;
