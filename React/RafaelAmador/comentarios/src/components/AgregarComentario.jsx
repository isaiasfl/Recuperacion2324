import  { useState } from 'react';
import Swal from 'sweetalert2';
import { useComentarios } from './context/ComentariosProvider';


const AgregarComentario = () => {
  const [contenido, setContenido] = useState('');
  const { addComentario } = useComentarios();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contenido) {
      Swal.fire({
        icon: 'error',
        title: 'Campo vacío',
        text: 'Por favor, ingresa un comentario.',
      });
      return;
    }
    addComentario(contenido);
    setContenido('');
    Swal.fire({
      icon: 'success',
      title: 'Comentario agregado',
      text: 'Tu comentario ha sido agregado con éxito.',
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={contenido}
        onChange={(e) => setContenido(e.target.value)}
        placeholder="Agregar comentario"
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default AgregarComentario;