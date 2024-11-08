// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZb8hb7Ay2T5Akaw4LZsZi4QFVVvMUwDM",
  authDomain: "simple-firebase-d6f18.firebaseapp.com",
  projectId: "simple-firebase-d6f18",
  storageBucket: "simple-firebase-d6f18.firebasestorage.app",
  messagingSenderId: "852936837904",
  appId: "1:852936837904:web:401f66130e3fa3e5c7b395",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
