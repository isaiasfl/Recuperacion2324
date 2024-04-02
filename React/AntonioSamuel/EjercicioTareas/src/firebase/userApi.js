import { collection, query, where, getDocs } from "firebase/firestore"
import { db } from "./firebase";

//---------------------| DATOS DE LA COLECCION |--------------------------------
const userCollection = collection(db, "usuarios");

// ----------------------| CARGAR DATOS DE UN USUARIO |--------------------------------

export const getUserByUsernamePassword = async (username, password) => {
    try {
        // Crear una consulta para buscar el usuario por username y password
        const q = query(userCollection, 
                        where('username', '==', username),
                        where('password', '==', password));

        // Ejecutar la consulta y obtener los documentos resultantes
        const results = await getDocs(q);

        // Verificar si se encontraron documentos
        if (!results.empty) {
            // Extraer el primer documento (suponiendo que username y password son únicos)
            const userDoc = results.docs[0];
            // Obtener los datos del documento y devolverlos
            return { ...userDoc.data(), id: userDoc.id };
        } else {
            console.error("El usuario no existe");
            return null;
        }
    } catch (error) {
        console.error("Error al sacar el usuario", error);
        throw error;
    }
}