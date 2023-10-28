// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfP4JENDZ2CAh0zyuMsgPMHknrXz4UIak",
  authDomain: "coder-firebase-c6329.firebaseapp.com",
  projectId: "coder-firebase-c6329",
  storageBucket: "coder-firebase-c6329.appspot.com",
  messagingSenderId: "791812875319",
  appId: "1:791812875319:web:ccba266a6d15ad019b8bb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db =getFirestore(app)