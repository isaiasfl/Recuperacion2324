
const Blog = () => {
  const comentarios = new Map();
  const respuestas = new Map();
  const likes = new Map();

  let contadorId = 1;

  const agregarComentario = (contenido) => {
    const id = contadorId++;
    const fecha = new Date();
    comentarios.set(id, { id, contenido, fecha, likes: 0 });
    respuestas.set(id, new Set());
    likes.set(id, 0);
    console.log(`Comentario agregado con ID ${id}.`);
  };

  const responderComentario = (idComentario, contenido) => {
    if (comentarios.has(idComentario)) {
      const idRespuesta = contadorId++;
      const fecha = new Date();
      comentarios.set(idRespuesta, { id: idRespuesta, contenido, fecha, likes: 0 });
      respuestas.get(idComentario).add(idRespuesta);
      likes.set(idRespuesta, 0);
      console.log(`Respuesta agregada con ID ${idRespuesta} al comentario ${idComentario}.`);
    } else {
      console.log(`El comentario con ID ${idComentario} no existe.`);
    }
  };

  const obtenerRespuestas = (idComentario) => {
    if (respuestas.has(idComentario)) {
      const idsRespuestas = respuestas.get(idComentario);
      const respuestasComentario = Array.from(idsRespuestas).map(id => comentarios.get(id));
      console.log(`Respuestas al comentario ${idComentario}:`, respuestasComentario);
      return respuestasComentario;
    } else {
      console.log(`El comentario con ID ${idComentario} no existe.`);
      return [];
    }
  };

  const darMeGusta = (idComentario) => {
    if (comentarios.has(idComentario)) {
      const nuevoLikes = (likes.get(idComentario) || 0) + 1;
      likes.set(idComentario, nuevoLikes);
      comentarios.get(idComentario).likes = nuevoLikes;
      console.log(`Me gusta dado al comentario ${idComentario}. Total de likes: ${nuevoLikes}`);
    } else {
      console.log(`El comentario con ID ${idComentario} no existe.`);
    }
  };

  const listarComentariosPorFecha = () => {
    const comentariosOrdenados = Array.from(comentarios.values()).sort((a, b) => a.fecha - b.fecha);
    console.log("Comentarios ordenados por fecha:", comentariosOrdenados);
    return comentariosOrdenados;
  };

  return {
    agregarComentario,
    responderComentario,
    obtenerRespuestas,
    darMeGusta,
    listarComentariosPorFecha
  };
};

// Ejemplo de uso
const sistemaComentarios = Blog();

sistemaComentarios.agregarComentario('Este es el primer comentario.');
sistemaComentarios.agregarComentario('Este es el segundo comentario.');

sistemaComentarios.responderComentario(1, 'Esta es una respuesta al primer comentario.');
sistemaComentarios.responderComentario(1, 'Esta es otra respuesta al primer comentario.');

sistemaComentarios.darMeGusta(1);
sistemaComentarios.darMeGusta(1);
sistemaComentarios.darMeGusta(2);

sistemaComentarios.obtenerRespuestas(1);

sistemaComentarios.listarComentariosPorFecha();
