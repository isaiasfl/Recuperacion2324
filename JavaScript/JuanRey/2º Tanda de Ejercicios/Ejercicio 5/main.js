const reservaHabitaciones = () => {
  let habitaciones = [];
  let reservas = [];

  const addHabitacion = (numeroHabitacion) => {
    habitaciones.push({ numeroHabitacion, available: true });
    console.log(`La habitacion ${numeroHabitacion} ha sido añadida.`);
  };

  const reservarHabitacion = (numeroHabitacion, nombreCliente) => {
    const habitacion = habitaciones.find(r => r.numeroHabitacion === numeroHabitacion && r.available);
    if (habitacion) {
      habitacion.available = false;
      reservas.push({ numeroHabitacion, nombreCliente });
      console.log(`La habitacion ${numeroHabitacion} ha sido reservada por el cliente ${nombreCliente}.`);
    } else {
      console.log(`La habitacion ${numeroHabitacion} no está disponible.`);
    }
  };

  const cancelarReserva = (numeroHabitacion, nombreCliente) => {
    const reservationIndex = reservas.findIndex(r => r.numeroHabitacion === numeroHabitacion && r.nombreCliente === nombreCliente);
    if (reservationIndex !== -1) {
      reservas.splice(reservationIndex, 1);
      const habitacion = habitaciones.find(r => r.numeroHabitacion === numeroHabitacion);
      if (habitacion) habitacion.available = true;
      console.log(`La reserva para la habitacion numero ${numeroHabitacion} hecha por el cliente ${nombreCliente} ha sido cancelada.`);
    } else {
      console.log(`No se ha encontrado reserva para la habitacion número ${numeroHabitacion} del cliente ${nombreCliente}.`);
    }
  };

  const buscarReservaPorCLiente = (nombreCliente) => {
    const reservasPorCliente = reservas.filter(r => r.nombreCliente === nombreCliente);
    console.log(`Las reservas hechas por el cliente ${nombreCliente} son las siguientes:`, reservasPorCliente);
    return reservasPorCliente;
  };

  const buscarHabitacionesDisponibles = () => {
    const habitacionesDisponibles = habitaciones.filter(r => r.available);
    console.log("Las habitaciones disponibles son las siguientes:", habitacionesDisponibles);
    return habitacionesDisponibles;
  };

  return {
    addHabitacion,
    reservarHabitacion,
    cancelarReserva,
    buscarReservaPorCLiente,
    buscarHabitacionesDisponibles
  };
};

// Ejemplo de uso
const hotel = reservaHabitaciones();

hotel.addHabitacion(101);
hotel.addHabitacion(102);
hotel.addHabitacion(103);

hotel.reservarHabitacion(101, 'Paco');
hotel.reservarHabitacion(102, 'Juan');

hotel.buscarHabitacionesDisponibles();

hotel.cancelarReserva(101, 'Paco');
hotel.buscarReservaPorCLiente('Paco');

hotel.buscarHabitacionesDisponibles();
