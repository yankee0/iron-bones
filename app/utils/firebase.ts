// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb8RU6_EB_OxmLS1cWB7mE-7dBpIXAVzw",
  authDomain: "iron-bones.firebaseapp.com",
  projectId: "iron-bones",
  storageBucket: "iron-bones.appspot.com",
  messagingSenderId: "105966660324",
  appId: "1:105966660324:web:0cd8937f2a7e64daa4daf1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
