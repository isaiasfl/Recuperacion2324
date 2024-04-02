// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyC6rQeCy-HXy_SCUIVHNEs_7jflxfKxNbM",
  authDomain: "tareas-3b578.firebaseapp.com",
  projectId: "tareas-3b578",
  storageBucket: "tareas-3b578.appspot.com",
  messagingSenderId: "899486026644",
  appId: "1:899486026644:web:28228e904cf401ad189d81",
  measurementId: "G-CGLNZM2VTV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;