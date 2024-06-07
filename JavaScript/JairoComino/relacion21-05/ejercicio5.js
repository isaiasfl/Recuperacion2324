// ## Ejercicio 5: Sistema de Reserva de Habitaciones

// Implementa un sistema de reserva de habitaciones que a través de una función almacene en arrays de objetos las habitaciones y las reservas además de incluir las siguientes funcionalidades:

// 1. Añadir una nueva habitación.
// 2. Reservar una habitación para un cliente.
// 3. Cancelar una reserva.
// 4. Obtener todas las reservas de un cliente específico.
// 5. Obtener todas las habitaciones disponibles.



let habitaciones = [];
let contador = 0;

const addHabitacion = () =>{
    contador++;
    id=contador;
    habitaciones.push(id, {reservada: false, cliente: null})
    return habitaciones
}

const reservar = (cliente) =>{
    const habitacionDisponible = habitaciones.filter(habitacion => habitacion.reservada === false); 
    habitacionDisponible.reservada=true;
    habitacionDisponible.cliente=cliente;
    console.log(`La habitación número ${habitacionDisponible.id} ha sido reservada para ${cliente}.`);
    return habitaciones[habitacionDisponible.id]=habitacionDisponible;
}
const cancelarReserva= (id)=>{
    habitaciones[id].reservada=false;
    habitaciones[id].cliente=false;
    return habitaciones
}
const obtenerReservasCliente= (client) =>{
    const habitacionCliente= []
    habitaciones.forEach((habitacion)=>{
        if(habitacion.cliente==client){
            habitacionCliente.push(clien)
        }
    })
    return habitacionCliente
}
const habitacionesDisponibles = () =>{
    const disponibles = [];
    habitaciones.forEach((habitacion)=>{
        if(habitacion.reservada==false){
            disponibles.push(habitacion)
        }
    })
    return disponibles
}
//-----------------------//
console.log(addHabitacion());
console.log(addHabitacion());
console.log(reservar("Rodrigo"));
console.log(cancelarReserva(1));
console.log(reservar("Rodrigo"));
console.log(obtenerReservasCliente("Rodrigo"));
console.log(habitacionesDisponibles());
//--------------------------------//