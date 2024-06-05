/**
 * Ejercicio 6: Sistema de Comentarios de un Blog
    Crea un sistema de comentarios para un blog que permita agregar comentarios, responder a comentarios, dar "me gusta" a comentarios, 
    y listar comentarios por número de "me gusta". Debes utilizar Map y Set para gestionar la información a través de 
    la función createSystemComment() con las siguientes opciones:

    Añadir un nuevo comentario.
    Responder a un comentario existente.
    Obtener todas las respuestas de un comentario específico.
    Obtener todos los comentarios ordenados por fecha de creación.
 */

function createSystemComment(){
   const comentarios = new Map();
   let comentarioId = 0;

   const añadirComentario=(comentario)=>{
      const fecha = new Date();
      const id = comentarioId++;
      comentarios.set(id, { comentario, fecha, meGusta: new Set(), respuestas: new Set() });
         return `Comentario con ID "${id}" añadido exitosamente.`;
   };

   const responderComentario=(idComentario, respuesta)=>{
      if (comentarios.has(idComentario)) {
         const idRespuesta = comentarioId++;
         const fecha = new Date();
         comentarios.set(idRespuesta, { comentario: respuesta, fecha, meGusta: new Set(), respuestas: new Set() });
         comentarios.get(idComentario).respuestas.add(idRespuesta);
         return `Respuesta añadida al comentario con ID "${idComentario}".`;
      } else {
         return `No se encontró un comentario con ID "${idComentario}".`;
      }
   };

   const obtenerRespuestas=(idComentario)=> {
      if (comentarios.has(idComentario)) {
         const respuestas = Array.from(comentarios.get(idComentario).respuestas).map(id => ({
            id,
            ...comentarios.get(id)
         }));
         return respuestas;
      } else {
         return `No se encontró un comentario con ID "${idComentario}".`;
      }
   };

   const darMeGusta=(idComentario, usuario)=> {
      if(comentarios.has(idComentario)) {
         comentarios.get(idComentario).meGusta.add(usuario);
         return `El usuario "${usuario}" ha dado me gusta al comentario "${idComentario}"`;
      }else{
         return `No se ha encontrado el comentario "${idComentario}`;
      }
   };

   const obtenerComentariosPorFecha=()=>{
      const listaComentarios = Array.from(comentarios.entries()).map(([id, comentario])=> ({id, ...comentario}));
      listaComentarios.sort((a, b) => a.fecha - b.fecha);
      return listaComentarios;
   }

   const obtenerComentariosPorMeGusta=()=>{
      const listaComentarios = Array.from(comentarios.entries()).map(([id, comentario])=> ({id, ...comentario, meGustaCount: comentario.meGusta.size}));
      listaComentarios.sort((a, b) => b.meGustaCount - a.meGustaCount);
      return listaComentarios;
   }

   return {
      añadirComentario,
      responderComentario,
      obtenerRespuestas,
      darMeGusta,
      obtenerComentariosPorFecha,
      obtenerComentariosPorMeGusta,
   }
}

//Ejemplos de uso
const sistemaComentarios = createSystemComment();

// Añadir comentarios
console.log(sistemaComentarios.añadirComentario('Este es el primer comentario.'));
console.log(sistemaComentarios.añadirComentario('Este es el segundo comentario.'));
console.log(sistemaComentarios.añadirComentario('Este es el tercer comentario.'));

// Responder comentarios
console.log(sistemaComentarios.responderComentario(0, 'Esta es una respuesta al primer comentario.'));
console.log(sistemaComentarios.responderComentario(1, 'Esta es una respuesta al segundo comentario.'));

// Dar "me gusta" a un comentario
console.log(sistemaComentarios.darMeGusta(0, 'usuario1'));
console.log(sistemaComentarios.darMeGusta(0, 'usuario2'));
console.log(sistemaComentarios.darMeGusta(1, 'usuario3'));

// Obtener todas las respuestas de un comentario específico
console.log(sistemaComentarios.obtenerRespuestas(0));

// Obtener todos los comentarios ordenados por fecha de creación
console.log(sistemaComentarios.obtenerComentariosPorFecha());

// Obtener comentarios ordenados por número de "me gusta"
console.log(sistemaComentarios.obtenerComentariosPorMeGusta());