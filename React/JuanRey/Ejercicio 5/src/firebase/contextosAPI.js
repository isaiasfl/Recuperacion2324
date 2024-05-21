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

  // ---------- Dados de la colección ---------
const contextProducts = collection(db, "contextproduct");

  /// ----------- Añadir productos ----------
export const addProducto = async (productoData) => {
    try {
        const docRef = await addDoc(contextProducts, productoData);
        return docRef.id;
        } catch (error) {
        console.log("Error al añadir un producto", error);
        throw error;
        }
    };

  // ------------- Cargar Productos -------------

export const getProductos = async () => {
    try {
        const data = await getDocs(contextProducts);
        return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        } catch (error) {
        console.log("Error al Obtener los productos", error);
        throw error;
        }
    };

  // cargar datos de un producto cuyo id es ...

export const getProductById = async (productId) => {
    try {
        const productDocRef = doc(contextProducts, productId);
        const productDoc = await getDoc(productDocRef);
        console.log("ProductDoc --> ", productDoc);
        if (productDoc.exists()) {
            return { ...productDoc.data(), id: productDoc.id };
        } else {
            console.error("El producto con id dado no existe");
            return null;
        }
        } catch (error) {
        console.log("Error al Obtener el producto", error);
        throw error;
        }
    };

  // --------------- Eliminar Productos ------------
export const deleteProducto = async (id) => {
    try {
      // seleccionar el documento con ese id
        const productDocRef = doc(contextProducts, id);
        // borrar el documento seleccionado
        await deleteDoc(productDocRef);
        } catch (error) {
        console.error("Error deleting", error);
        throw error;
        }
    };

  // ---- Edit product by id ----

export const editProduct = async (idProduct, newData) => {
    try {
        const productDocRef = doc(contextProducts, idProduct);
        await updateDoc(productDocRef, newData);
        } catch (error) {
        console.log("Error updating product", error);
        throw error;
        }
    };
