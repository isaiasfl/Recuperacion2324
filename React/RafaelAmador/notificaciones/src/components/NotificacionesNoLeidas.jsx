import { useContext } from 'react'
import NotificacionesContext from './context/NotificacionesProvider';

const NotificacionesNoLeidas = () => {
    const { notificacionesNoLeidas } = useContext(NotificacionesContext);
    const noLeidas = notificacionesNoLeidas();
  
    return (
      <div>
        <h2>Notificaciones No Leídas</h2>
        <ul>
          {noLeidas.map(({ id, mensaje, fechaCreacion }) => (
            <li key={id}>
              {mensaje} - {fechaCreacion.toLocaleString()}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default NotificacionesNoLeidas;