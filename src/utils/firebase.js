// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-168bf.firebaseapp.com",
  projectId: "blog-168bf",
  storageBucket: "blog-168bf.appspot.com",
  messagingSenderId: "305441861741",
  appId: "1:305441861741:web:6354434094559c607fcf64",
  measurementId: "G-2EF6CV5PQS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
