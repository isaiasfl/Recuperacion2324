import  { useContext } from 'react';
import NotificacionesContext from './context/NotificacionesProvider';


const ListaNotificaciones = () => {
  const { convertirArray, marcarLeido } = useContext(NotificacionesContext);
  const notificaciones = convertirArray();

  return (
    <div>
      <h2>Lista de Notificaciones</h2>
      <ul>
        {notificaciones.map(({ id, mensaje, leido }) => (
          <li key={id} style={{ textDecoration: leido ? 'line-through' : 'none' }}>
            {mensaje}
            <button onClick={() => marcarLeido(id)}>
              Marcar como leída
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaNotificaciones;