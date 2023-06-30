// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "flats-af6d2.firebaseapp.com",
  projectId: "flats-af6d2",
  storageBucket: "flats-af6d2.appspot.com",
  messagingSenderId: "110835060761",
  appId: "1:110835060761:web:a3fe0d2aa1a343ab0d9a88",
};

// Initialize Firebase
const fireApp = initializeApp(firebaseConfig);
//initialize DB
export const db = getFirestore(fireApp);
//export
export const auth = getAuth(fireApp);

export const storage = getStorage(fireApp);
