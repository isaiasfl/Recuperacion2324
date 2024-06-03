import { createContext, useState, useEffect } from 'react';
import NotificationSystem from '../utils/ejercicio4';

export const NotificationContext = createContext();
const notificationSystem = new NotificationSystem();

export const NotificationProvider = ({ children }) => {
  // Estado local para almacenar las notificaciones
  const [notifications, setNotifications] = useState([]);

  // Al cargar el componente, cargar las notificaciones desde el localStorage
  useEffect(() => {
    const storedNotifications = notificationSystem.loadNotificationsFromLocalStorage();
    if (storedNotifications.length > 0) {
      setNotifications(storedNotifications);
    }
  }, []);

  // Guardar las notificaciones en el localStorage cada vez que cambien
  useEffect(() => {
    notificationSystem.saveNotificationsToLocalStorage(notifications);
  }, [notifications]);

  // Función para agregar una nueva notificación
  const addNotification = (message) => {
    const id = Date.now().toString();
    notificationSystem.addNotification(id, message);
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      { id, message, read: false, date: new Date() }
    ]);
  };

  // Función para marcar una notificación como leída
  const markAsRead = (id) => {
    notificationSystem.markAsRead(id);
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  // Función para eliminar una notificación
  const deleteNotification = (id) => {
    notificationSystem.deleteNotification(id);
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, markAsRead, deleteNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
