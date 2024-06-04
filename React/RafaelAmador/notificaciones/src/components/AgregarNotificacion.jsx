import  { useContext, useState } from 'react';
import NotificacionesContext from './context/NotificacionesProvider';


const AgregarNotificacion = () => {
  const { addNotificacion } = useContext(NotificacionesContext);
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mensaje.trim()) {
      addNotificacion(mensaje);
      setMensaje('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={mensaje} 
        onChange={(e) => setMensaje(e.target.value)} 
        placeholder="Escribe una notificación" 
      />
      <button type="submit">Agregar Notificación</button>
    </form>
  );
};

export default AgregarNotificacion;