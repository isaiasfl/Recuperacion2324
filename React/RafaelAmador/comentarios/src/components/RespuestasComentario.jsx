import { useComentarios } from "./context/ComentariosProvider";
const RespuestasComentario = ({ id }) => {
  const { obtenerRespuestas } = useComentarios();
  const respuestas = obtenerRespuestas(id);

  return (
    <div>
      <h3>Respuestas</h3>
      <ul>
        {respuestas.map(respuesta => (
          <li key={respuesta.id}>
            {respuesta.contenido} - {respuesta.fechaCreacion.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RespuestasComentario;