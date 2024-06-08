import { useState } from 'react';
import Swal from 'sweetalert2';
import { useComentarios } from './context/ComentariosProvider';

const ResponderComentario = ({ id }) => {
  const [respuesta, setRespuesta] = useState('');
  const { responderComentario } = useComentarios();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!respuesta) {
      Swal.fire({
        icon: 'error',
        title: 'Campo vacío',
        text: 'Por favor, ingresa una respuesta.',
      });
      return;
    }
    responderComentario(id, respuesta);
    setRespuesta('');
    Swal.fire({
      icon: 'success',
      title: 'Respuesta agregada',
      text: 'Tu respuesta ha sido agregada con éxito.',
    });
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