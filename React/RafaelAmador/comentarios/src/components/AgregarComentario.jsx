import  { useState } from 'react';
import { useComentarios } from './context/ComentariosProvider';


const AgregarComentario = () => {
  const [contenido, setContenido] = useState('');
  const { addComentario } = useComentarios();

  const handleSubmit = (e) => {
    e.preventDefault();
    addComentario(contenido);
    setContenido('');
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