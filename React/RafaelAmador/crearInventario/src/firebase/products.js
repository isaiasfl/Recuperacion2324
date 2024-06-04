import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query, updateDoc, where } from "firebase/firestore";
import { db } from "./firebase";

export async function insertarProducto(product) {
    try {
        const docRef = await addDoc(collection(db, "productos"), product);
        console.log("Producto insertado con ID: ", docRef.id);
        return docRef.id;
    } catch (error) {
        console.error("Error al insertar el producto: ", error.message);
        throw new Error("No se pudo insertar el producto en Firebase: " + error.message);
    }
}

export async function obtenerProductos() {
    try {
        const sacarProductos = await getDocs(collection(db, "productos"));
        const productos = sacarProductos.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        return productos;
    } catch (error) {
        console.error("Error al obtener los productos: ", error);
        throw new Error("No se pudo obtener los productos de Firebase.");
    }
}

export async function borrarProducto(id) {
    try {
        await deleteDoc(doc(db, "productos", id));
        console.log("Producto eliminado con ID: ", id);
    } catch (error) {
        console.error("Error al eliminar el producto: ", error);
        throw new Error("No se pudo eliminar el producto en Firebase.");
    }
}

export async function actualizarProducto(id, product) {
    try {
        await updateDoc(doc(db, "productos", id), product);
        console.log("Producto actualizado con ID: ", id);
    } catch (error) {
        console.error("Error al actualizar el producto: ", error);
        throw new Error("No se pudo actualizar el producto en Firebase.");
    }
}

export async function buscarProductosPorCategoria(categoria) {
    try {
        const q = query(collection(db, "productos"), where("categoria", "==", categoria));
        const querySnapshot = await getDocs(q);
        const productos = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        return productos;
    } catch (error) {
        console.error("Error al buscar productos:", error);
        throw new Error("No se pudo buscar los productos en Firebase: " + error.message);
    }
}
export async function obtenerProductosOrdenadosPorPrecio() {
  try {
      const q = query(collection(db, "productos"), orderBy("precio"));
      const querySnapshot = await getDocs(q);
      const productos = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
      }));
      return productos;
  } catch (error) {
      console.error("Error al obtener los productos ordenados por precio:", error);
      throw new Error("No se pudo obtener los productos ordenados por precio de Firebase: " + error.message);
  }
}