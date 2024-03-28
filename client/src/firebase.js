// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-c63c4.firebaseapp.com",
  projectId: "real-estate-c63c4",
  storageBucket: "real-estate-c63c4.appspot.com",
  messagingSenderId: "79999589827",
  appId: "1:79999589827:web:494ffb9fcf4b25afc0f176"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);