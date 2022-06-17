// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjQL6pHrsBXNCV-2pJWY7kwZimpVBEGvI",
  authDomain: "origin-cloud-d5fd4.firebaseapp.com",
  projectId: "origin-cloud-d5fd4",
  storageBucket: "origin-cloud-d5fd4.appspot.com",
  messagingSenderId: "1003759300655",
  appId: "1:1003759300655:web:3dc1b00ad9511cef8ed6da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;