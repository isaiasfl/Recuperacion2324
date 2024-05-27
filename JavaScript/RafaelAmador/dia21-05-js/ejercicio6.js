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