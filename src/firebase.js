/** @format */

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const storage = firebase.storage().ref();//new

const firebaseConfig = {
  apiKey: "AIzaSyDz10EPqoZ26auNpeDEyQCU0TTJoWX1eJU",
  authDomain: "react-clone-29c2e.firebaseapp.com",
  databaseURL: "https://react-clone-29c2e-default-rtdb.firebaseio.com",
  projectId: "react-clone-29c2e",
  storageBucket: "react-clone-29c2e.appspot.com",
  messagingSenderId: "1006642194851",
  appId: "1:1006642194851:web:0cc3e9762399198efd5216",
  measurementId: "G-1S1F5VNV7J",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
