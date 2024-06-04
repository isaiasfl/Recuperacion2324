// Ejercicio 6: Sistema de Comentarios de un Blog

// Crea un sistema de comentarios para un blog que permita agregar comentarios, responder a comentarios, 
// dar "me gusta" a comentarios, y listar comentarios por número de "me gusta". 
// Debes utilizar Map y Set para gestionar la información a través de la función createSystemComment() con las siguientes opciones:

// 1. Añadir un nuevo comentario.
// 2. Responder a un comentario existente.
// 3. Obtener todas las respuestas de un comentario específico.
// 4. Obtener todos los comentarios ordenados por fecha de creación.

function createSystemComment() {
    
    // Estructura Map donde se guardan los comentarios y respuestas
    const comentarios = new Map();

    // 1. Añadir un nuevo comentario.
    const addComment = (id, text, fechaCreacion, likes = 0, respuestas = []) => {
        if (comentarios.has(id)) {
            throw new Error("El comentario ya existe")
        }
        comentarios.set(id, {text, fechaCreacion, likes, respuestas})
    }

    // 2. Responder a un comentario existente.
    const responderComentario = (idComentario, idRespuesta, texto) => {
        if (!comentarios.has(idComentario)) {
            throw new Error("No puedes responder a un comentario que no existe")
        }
        const comentario = comentarios.get(idComentario)
        const respuesta = {
            idRespuesta,
            texto
        };
        comentario.respuestas.push(respuesta);
        comentarios.set(idComentario, comentario)
    }

    // 3. Obtener todas las respuestas de un comentario específico.
    const getRespuestasComment = (idComentario) => {
        if (!comentarios.has(idComentario)) {
            throw new Error("El comentario no existe")
        }
        const comentario = comentarios.get(idComentario)
        return comentario.respuestas
    }

    // 4. Obtener todos los comentarios ordenados por fecha de creación.
    const getCommentsOrderByDate = () => {
        return [...comentarios.values()].sort((a, b) => a.fechaCreacion - b.fechaCreacion)
    }

    // 5. Dar likes a comentarios
    const darLike = (idComentario) => {
        if (!comentarios.has(idComentario)) {
            throw new Error("El comentario no existe")
        }
        const comentario = comentarios.get(idComentario)
        comentario.likes = (comentario.likes || 0) + 1;
        comentarios.set(idComentario, comentario)
    }

    // 6. Listar comentarios por numero de likes
    const getCommentsByLikesNumber = () => {
        return [...comentarios.values()].sort((a, b) => b.likes - a.likes) 
    }

    // DEVOLVER EL MAP
    const returnMap = () => {
        return comentarios
    }

    return {
        addComment,
        responderComentario,
        getRespuestasComment,
        getCommentsOrderByDate,
        darLike,
        getCommentsByLikesNumber,
        returnMap
    }
}

// -----------| PRUEBAS |-------------
const comentarios = createSystemComment();

console.log('----- AÑADIR COMENTARIOS -----')
comentarios.addComment(1, "Este es el primer comentario", "28-05-2024");
comentarios.addComment(2, "hola hola", "27-05-2024");
comentarios.addComment(3, "Estoy escribiendo mi comentario", "20-05-2024");
comentarios.addComment(4, "sddfgnhm", "22-05-2024");
// console.log(comentarios.returnMap())

console.log('----- RESPONDER A COMENTARIO -----')
comentarios.responderComentario(1, 1, 'Esta es mi respuesta');
comentarios.responderComentario(3, 1, 'Genial!!!');
// console.log(comentarios.returnMap())

console.log('----- OBTENER LAS RESPUESTAS DE UN COMENTARIO -----')
// console.log(comentarios.getRespuestasComment(3))

console.log('----- OBTENER COMENTARIOS ORDENADOS POR FECHA -----')
// console.log(comentarios.getCommentsOrderByDate())

console.log('----- DAR LIKE A UN COMENTARIO -----')
comentarios.darLike(1)
comentarios.darLike(1)
comentarios.darLike(1)
comentarios.darLike(3)
comentarios.darLike(3)
comentarios.darLike(2)
// console.log(comentarios.returnMap())

console.log('----- OBTENER COMENTARIOS POR NUMERO DE LIKES -----')
console.log(comentarios.getCommentsByLikesNumber());