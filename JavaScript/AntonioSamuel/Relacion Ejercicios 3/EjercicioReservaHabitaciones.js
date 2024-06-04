// Ejercicio 5: Sistema de Reserva de Habitaciones

// Implementa un sistema de reserva de habitaciones que a través de una función almacene en 
// arrays de objetos las habitaciones y las reservas además de incluir las siguientes funcionalidades:

// 1. Añadir una nueva habitación.
// 2. Reservar una habitación para un cliente.
// 3. Cancelar una reserva.
// 4. Obtener todas las reservas de un cliente específico.
// 5. Obtener todas las habitaciones disponibles.

function sistemaReservaHabitaciones() {
    const habitaciones = new Array;
    const reservas = new Array;
    let reservaId = 1;

    // 1. Añadir una nueva habitación.
    const addHabitacion = (id, numHabitacion, tipo, piso, disponible = true) => {
        if (habitaciones.some(habitacion => habitacion.id === id || habitacion.numHabitacion === numHabitacion)) {
            throw new Error("La habitacion ya esta en el sistema")
        }
        const habitacion = {
            id,
            numHabitacion,
            tipo,
            piso,
            disponible
        }
        habitaciones.push(habitacion)
    }

    // 2. Reservar una habitación para un cliente.
    const reservarHabitacion = (cliente, idHabitacion, fechaInicio, fechaFin) => {
        const habitacion = habitaciones.find(habitacion => habitacion.id === idHabitacion && habitacion.disponible === true);
        if (!habitacion) {
            throw new Error("La habitacion ya esta reservada")
        }
        reservas.push({id : reservaId++, cliente, habitacion, fechaInicio, fechaFin})
        habitacion.disponible = false
    }

    // 3. Cancelar una reserva.
    const cancelarReserva = (cliente, idReserva, numHabitacion) => {
        const index = reservas.findIndex(reserva => reserva.cliente === cliente && reserva.id === idReserva);
        if (index !== -1) {
            reservas.splice(index, 1);
            // Cambiar la disponibilidad de la habitación a true
            const habitacion = habitaciones.find(habitacion => habitacion.numHabitacion === numHabitacion);
            if (habitacion) {
                habitacion.disponible = true;
            }
        }
    }

    // 4. Obtener todas las reservas de un cliente específico.
    const getReservasCliente = (cliente) => {
        return reservas.filter(reserva => reserva.cliente === cliente);
    };

    // 5. Obtener todas las habitaciones disponibles.
    const getHabitacionesDisponibles = () => {
        return habitaciones.filter(habitacion => habitacion.disponible === true);
    };

    // DEVOLVER LOS ARRAYS
    const getHabitaciones = () => {
        return habitaciones
    }

    const getReservas = () => {
        return reservas
    }

    return {
        addHabitacion,
        reservarHabitacion,
        cancelarReserva,
        getReservasCliente,
        getHabitacionesDisponibles,
        getHabitaciones,
        getReservas
    }
}

// -----------| PRUEBAS |-------------
const sistema = sistemaReservaHabitaciones();

console.log('----- AÑADIR HABITACIONES -----')
sistema.addHabitacion(1, 101, 'simple', 1);
sistema.addHabitacion(2, 102, 'doble', 1);
sistema.addHabitacion(3, 103, 'simple', 1);
sistema.addHabitacion(4, 104, 'suite', 2);
console.log(sistema.getHabitaciones())

console.log('----- RESERVAR HABITACION -----')
sistema.reservarHabitacion('Juan', 1, '26-05-2024', '27-05-2024');
sistema.reservarHabitacion('Alberto', 2, '28-05-2024', '29-05-2024');
console.log(sistema.getReservas())

console.log('----- CANCELAR RESERVA -----')
sistema.cancelarReserva('Juan', 1, 101)
console.log(sistema.getReservas())

console.log('----- OBTENER RESERVAS DE UN CLIENTE -----')
console.log(sistema.getReservasCliente('Alberto'))

console.log('----- OBTENER HABITACIONES DISPONIBLES -----')
console.log(sistema.getHabitacionesDisponibles())