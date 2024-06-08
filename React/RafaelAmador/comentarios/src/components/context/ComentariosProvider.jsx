import { createContext, useState, useContext } from 'react';

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
      respuestas: [],
    };
    setComentarios(prev => new Map(prev).set(id, comentario));
    return id;
  };

  const responderComentario = (id, contenido) => {
    setComentarios(prev => {
      const newComentarios = new Map(prev);
      const comentario = newComentarios.get(id);
      if (comentario) {
        const respuesta = {
          id: idCounter + 1,
          contenido,
          fechaCreacion: new Date(),
        };
        setIdCounter(prevCounter => prevCounter + 1);
        comentario.respuestas.push(respuesta);
        newComentarios.set(id, comentario);
      } else {
        console.log('El comentario no existe');
      }
      return newComentarios;
    });
  };

  const obtenerRespuestas = (id) => {
    const comentario = comentarios.get(id);
    if (comentario) {
      return comentario.respuestas;
    } else {
      console.log('Comentario no encontrado');
      return [];
    }
  };

  const obtenerPorOrden = () => {
    return Array.from(comentarios.values()).sort((a, b) => b.fechaCreacion - a.fechaCreacion);
  };

  return (
    <ComentariosContext.Provider value={{ addComentario, responderComentario, obtenerRespuestas, obtenerPorOrden }}>
      {children}
    </ComentariosContext.Provider>
  );
};

export const useComentarios = () => useContext(ComentariosContext);