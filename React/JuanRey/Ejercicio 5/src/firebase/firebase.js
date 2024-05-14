// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6oSFJq8GRz3cRBOgl2nYndZ68WA33CnQ",
  authDomain: "proyectocontextos.firebaseapp.com",
  projectId: "proyectocontextos",
  storageBucket: "proyectocontextos.appspot.com",
  messagingSenderId: "109104364682",
  appId: "1:109104364682:web:d55f816ebda9d6bee68173",
  measurementId: "G-8NFDM133QN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);