const habitaciones = [];
let contador = 0;

const addHabitacion = () =>{
    contador++;
    habitaciones.push(contador, {reservada: false, cliente: null})
    return habitaciones
}

const reservar = (cliente) =>{
    habitaciones.forEach((habitacion)=>{
        if(habitacion.reservada==false){
            habitacion.reservada=true;
            habitacion.cliente=cliente;
        }
    })
    return habitaciones
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