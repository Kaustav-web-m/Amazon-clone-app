// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
//import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyBMb9QNZo4ofu2esj8fBQcqFCqs59CpJD8",
  authDomain: "clone-26033.firebaseapp.com",
  projectId: "clone-26033",
  storageBucket: "clone-26033.appspot.com",
  messagingSenderId: "596269008152",
  appId: "1:596269008152:web:8a3b074bd220aa4d738a6d",
  measurementId: "G-NXH0199LQB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();  // real time database in firebase
const auth = firebase.auth();

export {db,auth};


/*// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMb9QNZo4ofu2esj8fBQcqFCqs59CpJD8",
  authDomain: "clone-26033.firebaseapp.com",
  projectId: "clone-26033",
  storageBucket: "clone-26033.appspot.com",
  messagingSenderId: "596269008152",
  appId: "1:596269008152:web:8a3b074bd220aa4d738a6d",
  measurementId: "G-NXH0199LQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);*/