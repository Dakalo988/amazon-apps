import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjm4PhcA2LuK7HcEfIVdbaryP_kJrjogg",
  authDomain: "clone-add08.firebaseapp.com",
  projectId: "clone-add08",
  storageBucket: "clone-add08.appspot.com",
  messagingSenderId: "226322814976",
  appId: "1:226322814976:web:39e13a164b90a965d9e0e5",
  measurementId: "G-NJ2TLMCQPP",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
