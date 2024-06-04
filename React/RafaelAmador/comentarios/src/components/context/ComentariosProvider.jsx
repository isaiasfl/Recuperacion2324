import  { createContext, useState, useContext } from 'react';

const ComentariosContext = createContext();

export const ComentariosProvider = ({ children }) => {
  const [comentarios, setComentarios] = useState(new Map());
  const [idCounter, setIdCounter] = useState(0);

  const addComentario = (contenido) => {
    const id = idCounter + 1;
    setIdCounter(id);
    const comentario = {
      id,
      contenido,
      fechaCreacion: new Date(),
      respuestas: new Set(),
    };
    setComentarios(prev => new Map(prev).set(id, comentario));
    return id;
  };

  const responderComentario = (id, respuesta) => {
    setComentarios(prev => {
      const newComentarios = new Map(prev);
      const comentario = newComentarios.get(id);
      if (comentario) {
        const respuestaId = addComentario(respuesta);
        comentario.respuestas.add(respuestaId);
        newComentarios.set(id, comentario);
      } else {
        console.log('El comentario no existe');
        return prev;
      }
      return new Map(new Map(newComentarios));
    });
  };

  const obtenerRespuestas = (id) => {
    const comentario = comentarios.get(id);
    if (comentario) {
      return Array.from(comentario.respuestas).map(respuestaId => comentarios.get(respuestaId));
    } else {
      console.log('Comentario no encontrado');
      return [];
    }
  };

  const obtenerPorOrden = () => {
    return Array.from(comentarios.values()).sort((a, b) => a.fechaCreacion - b.fechaCreacion);
  };

  return (
    <ComentariosContext.Provider value={{ addComentario, responderComentario, obtenerRespuestas, obtenerPorOrden }}>
      {children}
    </ComentariosContext.Provider>
  );
};

export const useComentarios = () => useContext(ComentariosContext);