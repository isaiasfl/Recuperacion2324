/**
 * ## Ejercicio 4: Sistema de Notificaciones

Implementa un sistema de notificaciones a través de una función almacene en un Map las notificaciones incluyendo 
siguientes funcionalidades:

1. Añadir una nueva notificación.
2. Marcar una notificación como leída.
3. Obtener todas las notificaciones no leídas.
4. Obtener todas las notificaciones ordenadas por fecha de creación.
5. Versión 2.0 implementa el almacenamiento de las notificaciones en un Array de Objetos.
 */
class NotificationSystem {
  constructor() {
    this.notifications = new Map();
  }

  // Añadido las funciones para el LocalStorage
  loadNotificationsFromLocalStorage = () => {
    const storedNotifications = localStorage.getItem("notifications");
    return storedNotifications ? JSON.parse(storedNotifications) : [];
  };

  saveNotificationsToLocalStorage = (notifications) => {
    localStorage.setItem("notifications", JSON.stringify(notifications));
  };

  addNotification(id, message) {
    // lógica para agregar una nueva notificación
    this.notifications.set(id, { id, message, read: false, date: new Date() });
  }

  markAsRead(id) {
    // lógica para marcar una notificación como leída
    const notification = this.notifications.get(id);
    if (notification) {
      notification.read = true;
    }
  }

  deleteNotification(id) {
    // lógica para eliminar una notificación
    this.notifications.delete(id);
  }

  getUnreadNotifications() {
    return Array.from(this.notifications.values()).filter(
      (notification) => !notification.read
    );
  }

  getAllNotificationsSortedByDate() {
    return Array.from(this.notifications.values()).sort(
      (a, b) => a.date - b.date
    );
  }
}

export default NotificationSystem;

// // Ejemplo de uso
// const notifySystem = new NotificationSystem();
// notifySystem.addNotification(1, "tienes un nuevo mensaje");
// notifySystem.addNotification(2, "llegada un nuevo mensaje");
// notifySystem.markAsRead(1);
// console.log(notifySystem.getUnreadNotifications());
// console.log(notifySystem.getAllNotificationsSortedByDate());
