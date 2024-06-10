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
  const compras = collection(db, "compras");
  
  export const addCompra = async (carro, precioTotal) =>{
    try {
        const docRef = await addDoc(compras, {carro, precioTotal});
        console.log("compra realizada ", docRef.id);
        return docRef.id;
    } catch (error) {
        console.error("Error al realizar compra: ", error.message);
        throw new Error("No se pudo realizar la compra: " + error.message);
    }
  }

  