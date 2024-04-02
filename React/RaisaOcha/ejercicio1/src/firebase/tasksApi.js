import {
  GoogleAuthProvider,
  browserSessionPersistence,
  getAuth,
  setPersistence,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// import { collection } from "firebase/firestore";
// import { db } from "./firebase";

// const userTasksCollection = collection(db, "react1recuperacion");

// --- Validar la entrada con Google.

export const signInWithGoogle = async (signInFirebase, setError, navigate) => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  try {
    await setPersistence(auth, browserSessionPersistence);
    const result = await signInWithPopup(auth, provider);
    console.log("result--->", result);
    const user = result._tokenResponse;
    signInFirebase(user);
    console.log("usuario: -->", user);
    navigate("/");
  } catch (error) {
    setError("Error al iniciar sesión con Google");
  }
};

// ------------ Cerrar sesión en Google ------------

export const cerrarSesion = async () => {
  const auth = getAuth();
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    console.log("Error al iniciar sesión con Google", error);
    return false;
  }
};
