// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDiCX6pqsslwsrBrXkEc9kpGXlqD66vvSw",
    authDomain: "inventariotienda-60bf6.firebaseapp.com",
    projectId: "inventariotienda-60bf6",
    storageBucket: "inventariotienda-60bf6.appspot.com",
    messagingSenderId: "600321878714",
    appId: "1:600321878714:web:e077349aeb278f795b7083",
    measurementId: "G-WSTH5GLDWP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };