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
  const hall = collection(db, "EquipoCampeon");
  
  export const addHall = async (equipo) =>{
    try {
        const docRef = await addDoc(hall, {equipo});
        console.log("Tu equipo ha ganado ", docRef.id);
        return docRef.id;
    } catch (error) {
        console.error("Error al subir al hall: ", error.message);
        throw new Error("Error al subir al hall: " + error.message);
    }
  }

  