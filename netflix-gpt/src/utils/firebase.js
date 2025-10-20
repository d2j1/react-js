import { getAuth} from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOICng8ibEkiDGWivuTYJcWDgqn4dq11U",
  authDomain: "netflixgpt-7cec7.firebaseapp.com",
  projectId: "netflixgpt-7cec7",
  storageBucket: "netflixgpt-7cec7.firebasestorage.app",
  messagingSenderId: "592803669023",
  appId: "1:592803669023:web:cca54f24657b04c8d9612a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// We need this auth object in all of the firebase apis
// so keeping it here and exporting to use at all the places.
// instead of creating multiple instances.
export const auth = getAuth(app);