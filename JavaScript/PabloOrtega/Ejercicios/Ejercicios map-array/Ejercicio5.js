/**
 * Ejercicio 5: Sistema de Reserva de Habitaciones
    Implementa un sistema de reserva de habitaciones que a través de una función almacene en arrays de objetos las habitaciones 
    y las reservas además de incluir las siguientes funcionalidades:

    Añadir una nueva habitación.
    Reservar una habitación para un cliente.
    Cancelar una reserva.
    Obtener todas las reservas de un cliente específico.
    Obtener todas las habitaciones disponibles.
 */

class SistemaDeReserva {
    constructor() {
        this.habitaciones = [];
        this.reservas = [];
    }

    añadirHabitacion(id, precio) {
        this.habitaciones.push({ id, precio, disponible: true });
        return `Habitación con ID "${id}" añadida exitosamente.`;
    }

    reservarHabitacion(idHabitacion, cliente) {
        const habitacion = this.habitaciones.find(hab => hab.id === idHabitacion && hab.disponible);
        if (habitacion) {
            habitacion.disponible = false;
            this.reservas.push({ idHabitacion, cliente, fechaReserva: new Date() });
            return `Habitación con ID "${idHabitacion}" reservada para ${cliente}.`;
        } else {
            return `Habitación con ID "${idHabitacion}" no está disponible.`;
        }
    }

    cancelarReserva(idHabitacion, cliente) {
        const reservaIndex = this.reservas.findIndex(reserva => reserva.idHabitacion === idHabitacion && reserva.cliente === cliente);
        if (reservaIndex !== -1) {
            const habitacion = this.habitaciones.find(hab => hab.id === idHabitacion);
            habitacion.disponible = true;
            this.reservas.splice(reservaIndex, 1);
            return `Reserva de la habitación con ID "${idHabitacion}" para ${cliente} ha sido cancelada.`;
        } else {
            return `No se encontró una reserva de la habitación con ID "${idHabitacion}" para ${cliente}.`;
        }
    }

    obtenerReservasDeCliente(cliente) {
        return this.reservas.filter(reserva => reserva.cliente === cliente);
    }

    obtenerHabitacionesDisponibles() {
        return this.habitaciones.filter(habitacion => habitacion.disponible);
    }
}

// Ejemplo de uso
const sistemaReservas = new SistemaDeReserva();

// Añadir habitaciones
console.log(sistemaReservas.añadirHabitacion(1, 'Individual', 100));
console.log(sistemaReservas.añadirHabitacion(2, 'Doble', 150));
console.log(sistemaReservas.añadirHabitacion(3, 'Suite', 300));

// Reservar habitaciones
console.log(sistemaReservas.reservarHabitacion(1, 'Juan Perez'));
console.log(sistemaReservas.reservarHabitacion(2, 'Ana Garcia'));

// Cancelar una reserva
console.log(sistemaReservas.cancelarReserva(1, 'Juan Perez'));

// Obtener todas las reservas de un cliente específico
console.log(sistemaReservas.obtenerReservasDeCliente('Ana Garcia'));

// Obtener todas las habitaciones disponibles
console.log(sistemaReservas.obtenerHabitacionesDisponibles());

