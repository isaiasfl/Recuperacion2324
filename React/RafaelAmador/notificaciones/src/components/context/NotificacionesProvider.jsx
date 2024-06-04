import  { createContext, useState } from 'react';

const NotificacionesContext = createContext();

export const NotificacionesProvider = ({ children }) => {
  const [notificaciones, setNotificaciones] = useState(new Map());
  const [contador, setContador] = useState(0);

  const addNotificacion = (mensaje) => {
    const id = contador;
    setContador(contador + 1);
    const notificacion = {
      id,
      mensaje,
      leido: false,
      fechaCreacion: new Date(),
    };
    setNotificaciones(new Map(notificaciones.set(id, notificacion)));
  };

  const marcarLeido = (id) => {
    if (notificaciones.has(id)) {
      const notificacion = notificaciones.get(id);
      notificacion.leido = true;
      setNotificaciones(new Map(notificaciones.set(id, notificacion)));
    } else {
      console.log('No existe la notificación');
    }
  };

  const notificacionesNoLeidas = () => {
    return Array.from(notificaciones.values()).filter(notificacion => !notificacion.leido);
  };

  const obtenerNotificacionesOrdenadasF = () => {
    return Array.from(notificaciones.values()).sort((a, b) => a.fechaCreacion - b.fechaCreacion);
  };

  const convertirArray = () => {
    return Array.from(notificaciones.values());
  };

  return (
    <NotificacionesContext.Provider value={{
      addNotificacion,
      marcarLeido,
      notificacionesNoLeidas,
      obtenerNotificacionesOrdenadasF,
      convertirArray,
      notificaciones
    }}>
      {children}
    </NotificacionesContext.Provider>
  );
};

export default NotificacionesContext;