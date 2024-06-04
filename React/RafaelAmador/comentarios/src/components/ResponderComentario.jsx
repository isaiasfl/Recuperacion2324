import { useState } from 'react';
import { useComentarios } from './context/ComentariosProvider';


const ResponderComentario = ({ id }) => {
  const [respuesta, setRespuesta] = useState('');
  const { responderComentario } = useComentarios();

  const handleSubmit = (e) => {
    e.preventDefault();
    responderComentario(id, respuesta);
    setRespuesta('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={respuesta}
        onChange={(e) => setRespuesta(e.target.value)}
        placeholder="Responder comentario"
      />
      <button type="submit">Responder</button>
    </form>
  );
};

export default ResponderComentario;