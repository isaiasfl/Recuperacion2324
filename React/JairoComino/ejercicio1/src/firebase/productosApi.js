import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore"
import { GoogleAuthProvider, browserSessionPersistence, getAuth, setPersistence, signInWithPopup, signOut } from "firebase/auth";
import { db } from "./firebase";

//---------------------| DATOS DE LA COLECCION |--------------------------------
const productosCollection = collection(db, "inventario");


// ---------------------| AÑADIR EL PRODUCTO !------------------

export const addProduct = async (productoData) => {
    try {
        const docRef = await addDoc(productosCollection, productoData)
        return docRef.id
    } catch (error) {
        console.log("Error al añadir un producto", error)
        throw error
    }
}

// ----------------------| CARGAR PRODUCTOS |--------------------------------

export const getProductos = async () => {
    try {
        const data = await getDocs(productosCollection)
        return data.docs.map(doc => ({ ...doc.data(), id:doc.id }))
    } catch (error) {
        console.log("Error al añadir un producto", error)
        throw error
    }
}

// ----------------------| CARGAR DATOS DE UN PRODUCTO SEGUN ID |--------------------------------

export const getProductById = async (id) => {
    try {
        const productDocRef = doc(productosCollection, id);
        const productDoc = await getDoc(productDocRef);
        if (productDoc.exists()) {
            return { ...productDoc.data(), id: productDoc.id }
        }
        else{
            console.error("El product con id dado no existe");
            return null;
        }
    } catch (error) {
        console.log("Error al traer un producto", error)
        throw error
    }
}

// ----------------------| BORRAR PRODUCTOS |--------------------------------

export const deleteProducto = async (id) => {
    try {
        // Seleccionar el documento con ese id
        const productDocRef = doc(productosCollection, id);
        // Borrar el documento seleccionado con ese id
        await deleteDoc(productDocRef);
    } catch (error) {
        console.error("Error al borrar un producto", error)
        throw error
    }
}

// ----------------------| EDITAR PRODUCTOS BY ID |--------------------------------

export const editProduct = async (idProduct, newData) => {
    try {
        const productDocRef = doc(productosCollection, idProduct);
        await updateDoc(productDocRef, newData);
    } catch (error) {
        console.error("Error updating product", error);
    }
}
// ----------------------| INICIAR SESION GOOGLE |--------------------------------

export const signWithGoogle = async (signIn, setError, navigate) => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
        await setPersistence(auth, browserSessionPersistence);
        const result = await signInWithPopup(auth, provider)
        // Result trae toda la informacion de la cuenta seleccionada
        const user = result.user;
        // Aqui mando el usuario al contexto global
        signIn(user)
        navigate("/"); 
    } catch (error) {
        setError(`Error al iniciar sesion: ${error}`);
    }
}

// ----------------------| CERRAR SESION GOOGLE |--------------------------------

export const cerrarSesion = async () => {
    const auth = getAuth();
    try {
        await signOut(auth);
        return true;
    } catch (error) {
        console.error("Error signing out", error);
    }
}