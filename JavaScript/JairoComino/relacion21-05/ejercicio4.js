// ## Ejercicio 4: Sistema de Notificaciones

// Implementa un sistema de notificaciones a través de una función almacene en un Map las notificaciones incluyendo siguientes funcionalidades:

// 1. Añadir una nueva notificación.
// 2. Marcar una notificación como leída.
// 3. Obtener todas las notificaciones no leídas.
// 4. Obtener todas las notificaciones ordenadas por fecha de creación.
// 5. Versión 2.0 implementa el almacenamiento de las notificaciones en un Array de Objetos.
const sistemaNotificacion = () => {
    const notificaciones = new Map();
    let contador = 0;
    
    const addNotificacion = (mensaje) =>{
        const id = contador++;
        const notificacion= {
            mensaje,
            leido: false,
            fechaCreacion: new Date(),
        }
        notificaciones.set(id, notificacion)
        return notificaciones
    }
    const marcarLeido = (id)=>{
        if(notificaciones.has(id)){
            const notificacion = notificaciones.get(id);
            notificacion.leido=true;
            notificaciones.set(id, notificacion)
        }else{
            console.log("no existe la notificacion");
        }
        return notificaciones
    }
    const notificacionesNoLeidas = () =>{
        return Array.from(notificaciones.values()).filter(notificacion => !notificacion.leido);
    }
    
    const obtenerNotificacionesOrdenadasF = () =>{
        return Array.from(notificaciones.values()).sort((a, b) => a.fechaCreacion - b.fechaCreacion);
    }
    const convertirArray = () =>{
        return Array.from(notificaciones.values())
    }
    return [
        addNotificacion,
        marcarLeido,
        notificacionesNoLeidas,
        obtenerNotificacionesOrdenadasF,
        convertirArray,
    ]
}



// ---------- TEST -----------
const sistema = sistemaNotificacion();
sistema.addNotificacion("Primera notificación");
sistema.addNotificacion("Segunda notificación");

console.log("No leídas: ", sistema.notificacionesNoLeidas());

sistema.marcarLeido(0);
console.log("No leídas después de marcar la primera como leída: ", sistema.notificacionesNoLeidas());

console.log("Todas las notificaciones ordenadas: ", sistema.obtenerNotificacionesOrdenadasF());

console.log("Notificaciones como array de objetos: ", sistema.convertirArray());