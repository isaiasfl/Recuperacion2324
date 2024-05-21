// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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
export const db = getFirestore();
export default app;