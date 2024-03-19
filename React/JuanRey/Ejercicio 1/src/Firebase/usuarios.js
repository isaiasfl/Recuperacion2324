import {
    GoogleAuthProvider,
    browserSessionPersistence,
    getAuth,
    setPersistence,
    signInWithPopup,
    signOut,
  } from "firebase/auth";
  
  import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    updateDoc,
  } from "firebase/firestore";
  import { db } from "./firebase";
  
  const usersCollection = collection(db, "usuarios");

