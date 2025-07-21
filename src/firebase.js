// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1ztygCrhRh5a7NEky-asQ6R3UhUnu4hE",
  authDomain: "bookdonalds-7f6ab.firebaseapp.com",
  databaseURL: "https://bookdonalds-7f6ab-default-rtdb.firebaseio.com",
  projectId: "bookdonalds-7f6ab",
  storageBucket: "bookdonalds-7f6ab.firebasestorage.app",
  messagingSenderId: "80952970577",
  appId: "1:80952970577:web:0855ec0b94edb02bdb5770",
  measurementId: "G-HV4WC3Q1E3"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)
