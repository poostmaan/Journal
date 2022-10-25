// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// FIRESTORE
// REAL - TIME DATABASE
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL5Q2jnBUmHo6oKQuvXjZo4SdDMB_Rm6k",
  authDomain: "react-cursos-fc7ae.firebaseapp.com",
  projectId: "react-cursos-fc7ae",
  storageBucket: "react-cursos-fc7ae.appspot.com",
  messagingSenderId: "480286822523",
  appId: "1:480286822523:web:11a801e1f2365d382112de"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp ); 
export const FirebaseDB = getFirestore( FirebaseApp ); 