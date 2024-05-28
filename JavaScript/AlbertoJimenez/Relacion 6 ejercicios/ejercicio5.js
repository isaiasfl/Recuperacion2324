class SistemaDeReservaDeHabitaciones {
    constructor() {
        this.habitaciones = [];
        this.reservas = [];
    }

    agregarHabitacion(id, descripcion) {
        if (this.habitaciones.some(habitacion => habitacion.id === id)) {
            console.log(`La habitación con id ${id} ya existe.`);
            return;
        }
        this.habitaciones.push({ id, descripcion, disponible: true });
        console.log(`Habitación '${descripcion}' agregada.`);
    }

    reservarHabitacion(idHabitacion, cliente, fechaInicio, fechaFin) {
        let habitacion = this.habitaciones.find(h => h.id === idHabitacion);
        if (!habitacion) {
            console.log(`La habitación con id ${idHabitacion} no existe.`);
            return;
        }
        if (!habitacion.disponible) {
            console.log(`La habitación '${habitacion.descripcion}' no está disponible.`);
            return;
        }
        habitacion.disponible = false;
        this.reservas.push({ idHabitacion, cliente, fechaInicio, fechaFin });
        console.log(`Habitación '${habitacion.descripcion}' reservada para ${cliente}.`);
    }

    cancelarReserva(idHabitacion, cliente) {
        let indiceReserva = this.reservas.findIndex(r => r.idHabitacion === idHabitacion && r.cliente === cliente);
        if (indiceReserva === -1) {
            console.log(`No se encontró ninguna reserva para la habitación con id ${idHabitacion} del cliente ${cliente}.`);
            return;
        }
        this.reservas.splice(indiceReserva, 1);
        let habitacion = this.habitaciones.find(h => h.id === idHabitacion);
        habitacion.disponible = true;
        console.log(`Reserva de la habitación '${habitacion.descripcion}' para ${cliente} cancelada.`);
    }

    obtenerReservasDeCliente(cliente) {
        return this.reservas.filter(reserva => reserva.cliente === cliente);
    }

    obtenerHabitacionesDisponibles() {
        return this.habitaciones.filter(habitacion => habitacion.disponible);
    }
}


const sistemaDeReservaDeHabitaciones = new SistemaDeReservaDeHabitaciones();
sistemaDeReservaDeHabitaciones.agregarHabitacion(1, 'Habitación Simple');
sistemaDeReservaDeHabitaciones.agregarHabitacion(2, 'Habitación Doble');
sistemaDeReservaDeHabitaciones.agregarHabitacion(3, 'Suite');

console.log("Reservando la habitación con id 1 para 'Alberto' del 2024-06-01 al 2024-06-05:");
sistemaDeReservaDeHabitaciones.reservarHabitacion(1, 'Alberto', '2024-06-01', '2024-06-05');

console.log("Reservando la habitación con id 2 para 'Samu' del 2024-06-10 al 2024-06-15:");
sistemaDeReservaDeHabitaciones.reservarHabitacion(2, 'Samu', '2024-06-10', '2024-06-15');

console.log("Cancelando la reserva de la habitación con id 1 para 'Alberto':");
sistemaDeReservaDeHabitaciones.cancelarReserva(1, 'Alberto');

console.log("Reservas de 'Samu':");
console.log(sistemaDeReservaDeHabitaciones.obtenerReservasDeCliente('Samu'));

console.log("Habitaciones disponibles:");
console.log(sistemaDeReservaDeHabitaciones.obtenerHabitacionesDisponibles());
