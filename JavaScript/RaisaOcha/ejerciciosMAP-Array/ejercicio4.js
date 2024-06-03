/**
 * ## Ejercicio 4: Sistema de Notificaciones
 *
 * Implementa un sistema de notificaciones a través de una función almacene en un Map las notificaciones incluyendo 
 * siguientes funcionalidades:
 *
 * 1. Añadir una nueva notificación.
 * 2. Marcar una notificación como leída.
 * 3. Obtener todas las notificaciones no leídas.
 * 4. Obtener todas las notificaciones ordenadas por fecha de creación.
 * 5. Versión 2.0 implementa el almacenamiento de las notificaciones en un Array de Objetos.
 */
class NotificationSystem {
  /**
   * Constructor para inicializar el sistema de notificaciones.
   * Inicializa un Map para almacenar las notificaciones.
   */
  constructor() {
    this.notifications = new Map();
  }

  /**
   * Añade una nueva notificación al sistema.
   * @param {*} id - Identificador único de la notificación.
   * @param {*} message - Mensaje de la notificación.
   */
  addNotification(id, message) {
    const date = new Date();
    this.notifications.set(id, { message, date, read: false });
  }

  /**
   * Marca una notificación como leída.
   * @param {*} id - Identificador único de la notificación.
   */
  markAsRead(id) {
    if (this.notifications.has(id)) {
      this.notifications.get(id).read = true;
    }
  }

  /**
   * Obtiene todas las notificaciones no leídas.
   * @returns - Todas las notificaciones no leídas.
   */
  getUnreadNotifications() {
    return Array.from(this.notifications.values()).filter(
      (notification) => !notification.read
    );
  }

  /**
   * Obtiene todas las notificaciones ordenadas por fecha de creación.
   * @returns - Todas las notificaciones ordenadas por fecha de creación.
   */
  getAllNotificationsSortedByDate() {
    return Array.from(this.notifications.values()).sort(
      (a, b) => a.date - b.date
    );
  }
}

// Ejemplo de uso
const notifySystem = new NotificationSystem();
notifySystem.addNotification(1, "tienes un nuevo mensaje");
notifySystem.addNotification(2, "llegada un nuevo mensaje");
notifySystem.markAsRead(1);
console.log(notifySystem.getUnreadNotifications());
console.log(notifySystem.getAllNotificationsSortedByDate());
