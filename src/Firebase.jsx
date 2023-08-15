import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfEF6LxcvV34UTfNnoNDow1UyePW0mzUs",
  authDomain: "clone-c66fe.firebaseapp.com",
  projectId: "clone-c66fe",
  storageBucket: "clone-c66fe.appspot.com",
  messagingSenderId: "415755708013",
  appId: "1:415755708013:web:8982ed204a9bfc861a0164",
  measurementId: "G-SBZRDJ1C40",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
