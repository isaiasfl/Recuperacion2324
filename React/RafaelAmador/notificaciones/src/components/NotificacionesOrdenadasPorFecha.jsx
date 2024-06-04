import  { useContext } from 'react'
import NotificacionesContext from './context/NotificacionesProvider';

const NotificacionesOrdenadasPorFecha = () => {
    const { obtenerNotificacionesOrdenadasF } = useContext(NotificacionesContext);
    const ordenadasPorFecha = obtenerNotificacionesOrdenadasF();
  
    return (
      <div>
        <h2>Notificaciones Ordenadas por Fecha</h2>
        <ul>
          {ordenadasPorFecha.map(({ id, mensaje, fechaCreacion }) => (
            <li key={id}>
              {mensaje} - {fechaCreacion.toLocaleString()}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default NotificacionesOrdenadasPorFecha;