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
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

// ---------- Datos de la colección ---------
const usuarios = collection(db, "usuarios");

export const singInWithGoogle = async (signInFirebase, setError, navigate) => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  try {
    await setPersistence(auth, browserSessionPersistence);
    const result = await signInWithPopup(auth, provider);
   
    const user = result.user;
    // aquí mando el usuario al contexto global
    signInFirebase(user);
    console.log(user);
    navigate("/");
  } catch (error) {
    setError(`Error  al iniciar sesión: ${error}`);
  }
};

export const cerrarSesion = async () => {
  const auth = getAuth();
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    console.error("Error al cerrar sesión", error);
    return false;
  }
};