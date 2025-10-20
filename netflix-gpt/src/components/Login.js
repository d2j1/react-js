

import Header from './Header';
import { useState, useRef } from 'react';
import { checkValidData } from '../utils/validation.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase.js';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice.js';


const Login = () => {

        const [isSignin, setIsSignin] = useState(true);
        const [errorMessage, setErrorMessage] = useState("");
        const emailRef =  useRef(null);
        const passwordRef =  useRef(null);
        const nameRef =  useRef(null);
        const navigate = useNavigate();
        const dispatch = useDispatch();

    const toggleSignInForm = () => {
        setIsSignin(!isSignin);
    }

    const handleButtonClick = (e) => {
   
        e.preventDefault();

        const email = emailRef?.current?.value;
        const password = passwordRef?.current?.value;
        const name = nameRef?.current?.value;

      
        // validation
        const message = checkValidData(email, password);

        if(message){
            setErrorMessage(message);
            return;
        }
        
        // data is valid now sign in or sign up
        setErrorMessage("");

        if(!isSignin){
            // sign up logic
            
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    // const user = userCredential.user;

     updateProfile(auth.currentUser, {
  displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(() => {
  // Profile updated!
  const user = auth.currentUser;

    dispatch(addUser({
        uid: user.uid,
        email: user.email,
        displayName: name
    }));

    navigate("/browse");
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});

  
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
    // ..
  });

        } else {
            // sign in logic
            
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    
    navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
  });
        }



    } 


  return (
    <>
    <Header/>
    <div > 
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/024bfb98-9e9d-441d-9c5f-d2c798d8e42f/web/IN-en-20251013-TRIFECTA-perspective_b6324826-0535-47c5-be5f-4f50e9663eaf_large.jpg"
          alt="Login background"
          className="absolute w-full h-screen object-cover"
        />

    <form className="absolute p-12 bg-black w-3/12 my-28 mx-auto right-0 left-0 text-white flex flex-col items-center bg-opacity-80">
        <h1 className="text-3xl font-bold mb-4">{ isSignin? "Sign In" : "Sign Up"}</h1>
        { !isSignin && ( <input ref={nameRef} type="text" placeholder="Full Name"className="py-2 my-2 w-full placeholder:p-1 bg-gray-800"/> )}
        <input 
        ref={emailRef}
        type="text" placeholder="Email Address"
        className="py-2 my-2 w-full placeholder:p-1 bg-gray-800"/>
        <input 
        ref={passwordRef}
        type="password" placeholder="Password"className="py-2 my-2 w-full placeholder:p-1 bg-gray-800"/>
        { errorMessage && <p className="py-2  text-red-500 text-sm">{errorMessage}</p> }
        <button className="py-3 my-2 bg-red-700 rounded-md w-full" onClick={handleButtonClick}>{ isSignin? "Sign In" : "Sign Up"}</button>
        <p className="text-sm">{isSignin? "New to Netflix?":"Already have an account?" } <span onClick={toggleSignInForm} className="text-white font-semibold cursor-pointer">{ isSignin? "Sign Up Now" : "Sign In Now"}</span></p>
    </form>
    </div>
    </>
  );
}

export default Login;
