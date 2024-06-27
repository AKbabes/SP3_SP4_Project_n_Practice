// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth" 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfv6q6Kvbk8DjGXs8mnvSuvYKHJMIj7Ls",
  authDomain: "wedding-photographer-5985a.firebaseapp.com",
  projectId: "wedding-photographer-5985a",
  storageBucket: "wedding-photographer-5985a.appspot.com",
  messagingSenderId: "1001609236477",
  appId: "1:1001609236477:web:fb9e7cbe4545a1eeaf1394"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;