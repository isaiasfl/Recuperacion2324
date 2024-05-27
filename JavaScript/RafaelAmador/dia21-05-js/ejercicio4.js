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
