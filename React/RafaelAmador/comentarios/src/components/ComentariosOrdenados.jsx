import ResponderComentario from './ResponderComentario';
import RespuestasComentario from './RespuestasComentario';
import { useComentarios } from './context/ComentariosProvider';

const ComentariosOrdenados = () => {
  const { obtenerPorOrden } = useComentarios();
  const comentarios = obtenerPorOrden();

  return (
    <div>
      <h2>Comentarios Ordenados por Fecha</h2>
      {comentarios.map(comentario => (
        <div key={comentario.id}>
          <p>{comentario.contenido} - {comentario.fechaCreacion.toLocaleString()}</p>
          <ResponderComentario id={comentario.id} />
          <RespuestasComentario id={comentario.id} />
        </div>
      ))}
    </div>
  );
};

export default ComentariosOrdenados;