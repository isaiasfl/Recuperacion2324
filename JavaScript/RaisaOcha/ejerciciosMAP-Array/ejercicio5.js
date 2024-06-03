/**
 * ## Ejercicio 5: Sistema de Reserva de Habitaciones
 *
 * Implementa un sistema de reserva de habitaciones que a través de una función almacene en arrays
 *  de objetos las habitaciones y las reservas además de incluir las siguientes funcionalidades:
 * 1. Añadir una nueva habitación.
 * 2. Reservar una habitación para un cliente.
 * 3. Cancelar una reserva.
 * 4. Obtener todas las reservas de un cliente específico.
 * 5. Obtener todas las habitaciones disponibles.
 */
class RoomBookingSystem {
  /**
   * Constructor para inicializar el sistema de reserva de habitaciones.
   * Inicializa los arreglos de habitaciones y reservas.
   */
  constructor() {
    this.rooms = [];
    this.reservations = [];
  }

  /**
   * Añade una nueva habitación al sistema.
   * @param {number} roomNumber - Número de habitación a añadir.
   */
  addRoom(roomNumber) {
    this.rooms.push({ roomNumber, available: true });
  }

  /**
   * Reserva una habitación para un cliente.
   * @param {number} roomNumber - Número de habitación a reservar.
   * @param {string} customerName - Nombre del cliente que realiza la reserva.
   */
  reserveRoom(roomNumber, customerName) {
    const room = this.rooms.find(
      (room) => room.roomNumber === roomNumber && room.available
    );
    if (room) {
      room.available = false;
      this.reservations.push({ roomNumber, customerName, date: new Date() });
    }
  }

  /**
   * Cancela la reserva de una habitación.
   * @param {number} roomNumber - Número de habitación de la reserva a cancelar.
   */
  cancelReservation(roomNumber) {
    const reservationIndex = this.reservations.findIndex(
      (reservation) => reservation.roomNumber === roomNumber
    );
    if (reservationIndex !== -1) {
      this.reservations.splice(reservationIndex, 1);
      const room = this.rooms.find((room) => room.roomNumber === roomNumber);
      if (room) {
        room.available = true;
      }
    }
  }

  /**
   * Obtiene todas las reservas de un cliente específico.
   * @param {string} customerName - Nombre del cliente para buscar sus reservas.
   * @returns {Array} - Array de reservas del cliente especificado.
   */
  getReservationsByCustomer(customerName) {
    return this.reservations.filter(
      (reservation) => reservation.customerName === customerName
    );
  }

  /**
   * Obtiene todas las habitaciones disponibles.
   * @returns {Array} - Array de habitaciones disponibles.
   */
  getAvailableRooms() {
    return this.rooms.filter((room) => room.available);
  }
}

// Ejemplo de uso
const bookingSystem = new RoomBookingSystem();
bookingSystem.addRoom(101);
bookingSystem.addRoom(102);
bookingSystem.reserveRoom(101, "Raisa");
bookingSystem.reserveRoom(102, "Juan");
bookingSystem.cancelReservation(101);
console.log(bookingSystem.getReservationsByCustomer("Juan"));
console.log(bookingSystem.getAvailableRooms());
