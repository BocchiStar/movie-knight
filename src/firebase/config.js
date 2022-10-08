// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxfnxCu9WvS3ihGpGlVhTRxLd1vyO5Hp0",
  authDomain: "movie-night-ba07d.firebaseapp.com",
  projectId: "movie-night-ba07d",
  storageBucket: "movie-night-ba07d.appspot.com",
  messagingSenderId: "475526878320",
  appId: "1:475526878320:web:57d0007eac287bebf550b5",
  measurementId: "G-FN0CFEVJY1"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const projectFirestore =  firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };