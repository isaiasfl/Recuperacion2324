import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const apiKey = import.meta.env.VITE_FIREBASE_APIKEY;
const authDomain = import.meta.env.VITE_FIREBASE_AUTHDOMAIN;
const projectId = "tareas-e5780";
const storageBucket = import.meta.env.VITE_FIREBASE_STORAGEBUCKET;
const messagingSenderId = import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID;
const appId = import.meta.env.VITE_FIREBASE_APPID;

// VITE_FIREBASE_APIKEY="AIzaSyB8pNz8NzqBQbdynXmOZaQnp-Ng9TtyJxk"
// VITE_FIREBASE_AUTHDOMAIN="tareas-e5780.firebaseapp.com"
// VITE_FIREBASE_PROJECTID="tareas-e5780"
// VITE_FIREBASE_STORAGEBUCKET="tareas-e5780.appspot.com"
// VITE_FIREBASE_MESSAGINGSENDERID="566326879649"
// VITE_FIREBASE_APPID="1:566326879649:web:329fa90e9f424af98817e0"

const firebaseConfig = {
  
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;
