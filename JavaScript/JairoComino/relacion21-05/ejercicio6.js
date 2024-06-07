
//## Ejercicio 6: Sistema de Comentarios de un Blog

// Crea un sistema de comentarios para un blog que permita agregar comentarios, responder a comentarios, 
// dar "me gusta" a comentarios, y listar comentarios por número de "me gusta". Debes utilizar Map y Set para 
// gestionar la información a través de la función createSystemComment() con las siguientes opciones:

// 1. Añadir un nuevo comentario.
// 2. Responder a un comentario existente.
// 3. Obtener todas las respuestas de un comentario específico.
// 4. Obtener todos los comentarios ordenados por fecha de creación.


const createSystemComment = () =>{
    const comentarios = new Map()
    let idCounter = 0

    const addComentario = (contenido) =>{
        idCounter++;
        const comentario={
            contenido,
            fechaCreacion: new Date(),
            respuestas: new Set()
        }
        comentarios.set(idCounter, {comentario})
        return comentarios
    }
    const responderComentario = (id, respuesta) =>{
        const comentario = comentarios.get(id)
        if(comentario){
            const comentarioRespuesta = addComentario(respuesta)
            comentario.respuestas.add(comentarioRespuesta)
            return comentarios
        }else{
            console.log("el comentario no existe");
            return null
        }
    }
    const obtenerRespuestas = (id) => {
        const comentario = comentarios.get(id);
        if (comentario) {
            return Array.from(comentario.respuestas).map(id => comentarios.get(id));
        } else {
            console.log("comentario no encontrado");
            return [];
        }
    };
    const obtenerPorOrden = () => {
        return Array.from(comentarios.values()).sort((a, b) => a.fechaCreacion - b.fechaCreacion);
    }
    return [
        addComentario,
        responderComentario,
        obtenerRespuestas,
        obtenerPorOrden,
    ]

}