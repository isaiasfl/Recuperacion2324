
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

// ---------- Dados de la colección ---------
const usuariosCollection = collection(db, "Usuarios");

/// ----------- Añadir usuarios ----------
export const addUsuario = async (usuarioData) => {
  try {
    console.log("estoy en addUsuario");
    const docRef = await addDoc(usuariosCollection, usuarioData);
    console.log("docref",docRef);
    return docRef.id;
  } catch (error) {
    console.log("Error al añadir un usuario", error);
    throw error;
  }
};


///comprueba si esta el objeto en la base de datos

export const findUser= async (usuarioData)=>{
console.log("estoy en findUser");
  try {
    // Construir la consulta para verificar si el usuario existe
    const q = query(usuariosCollection, 
      where("name", "==", usuarioData.name),
      where("password", "==", usuarioData.password)
      ); 
      

    // Ejecutar la consulta
    const querySnapshot = await getDocs(q);
      console.log(querySnapshot);
    // Verificar si hay algún documento que cumpla con la consulta
    return querySnapshot.size > 0
    
} catch (error) {
    // Manejar errores, como conexión perdida, permisos insuficientes, etc.
    console.error("Error al buscar usuario:", error);
    throw error;
}
}


// ------------- Cargar Usuarios -------------

export const getUsuarios = async () => {
  try {
    const data = await getDocs(usuariosCollection);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (error) {
    console.log("Error al Obtener los usuarios", error);
    throw error;
  }
};

// cargar datos de un usuario cuyo id es ...

export const getUsuarioById = async (usuarioId) => {
  try {
    const usuarioDocRef = doc(usuariosCollection, usuarioId);
    const usuarioDoc = await getDoc(usuarioDocRef);
    console.log("UsuarioDoc --> ", usuarioDoc);
    if (usuarioDoc.exists()) {
      return { ...usuarioDoc.data(), id: usuarioDoc.id };
    } else {
      console.error("El usuario con id dado no existe");
      return null;
    }
  } catch (error) {
    console.log("Error al Obtener el usuario", error);
    throw error;
  }
};

// --------------- Eliminar Usuarios ------------

export const deleteUsuario = async (id) => {
  try {
    // seleccionar el documento con ese id
    const usuarioDocRef = doc(usuariosCollection, id);
    // borrar el documento seleccionado
    await deleteDoc(usuarioDocRef);
  } catch (error) {
    console.error("Error deleting", error);
    throw error;
  }
};

// ---- Edit usuario by id ----

export const editUsuario = async (idUsuario, newData) => {
  try {
    const usuarioDocRef = doc(usuariosCollection, idUsuario);
    await updateDoc(usuarioDocRef, newData);
  } catch (error) {
    console.log("Error updating usuario", error);
    throw error;
  }
};

