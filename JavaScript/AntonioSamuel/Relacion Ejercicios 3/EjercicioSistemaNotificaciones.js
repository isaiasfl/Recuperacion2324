// Ejercicio 4: Sistema de Notificaciones

// Implementa un sistema de notificaciones a través de una función almacene en un Map las notificaciones 
// incluyendo siguientes funcionalidades:

// 1. Añadir una nueva notificación.
// 2. Marcar una notificación como leída.
// 3. Obtener todas las notificaciones no leídas.
// 4. Obtener todas las notificaciones ordenadas por fecha de creación.
// 5. Versión 2.0 implementa el almacenamiento de las notificaciones en un Array de Objetos.

function almacenarNotificaciones() {
    const notificaciones = new Map();

    // 1. Añadir una nueva notificación.
    const addNotificacion = (id, text, date, esLeida = false) => {
        if (notificaciones.has(id)) {
            throw new Error("La notificacion ya esta en el sistema")
        }
        notificaciones.set(id, {text, date, esLeida})
    }

    // 2. Marcar una notificación como leída.
    const leerNotificacion = (id) => {
        if (notificaciones.has(id)) {
            const notificacion = notificaciones.get(id);
            notificacion.esLeida = true;
            notificaciones.set(id, notificacion);
        }
    }

    // 3. Obtener todas las notificaciones no leídas.
    const getNotificacionNoLeidas = () => {
        const busqueda = []
        notificaciones.forEach(notificacion => {
            if (notificacion.esLeida === false) {
                busqueda.push(notificacion)
            }
        });
        return busqueda
    }

    // 4. Obtener todas las notificaciones ordenadas por fecha de creación.
    const getNotificacionesByDate = () => {
        return [...notificaciones.values()].sort((a, b) => a.date - b.date);
    }

    // Devolver el map
    const returnMap = () => {
        return notificaciones
    }

    return {
        addNotificacion,
        leerNotificacion,
        getNotificacionNoLeidas,
        getNotificacionesByDate, 
        returnMap
    }
}


// -----------| PRUEBAS |-------------
const sistemaNotificaciones = almacenarNotificaciones()

console.log('----- AÑADIR -----')
sistemaNotificaciones.addNotificacion(1, 'Reunión de equipo a las 10 AM', '25-05-2024')
sistemaNotificaciones.addNotificacion(2, 'Entrega del informe mensual', '26-05-2024')
sistemaNotificaciones.addNotificacion(3, 'Mantenimiento programado del sistema', '27-05-2024')
sistemaNotificaciones.addNotificacion(4, 'Actualización de seguridad disponible', '28-05-2024')
console.log(sistemaNotificaciones.returnMap())

console.log('----- LEER NOTIFICACION -----')
sistemaNotificaciones.leerNotificacion(2)
sistemaNotificaciones.leerNotificacion(4)
console.log(sistemaNotificaciones.returnMap())

console.log('----- NOTIFICACIONES NO LEIDAS -----')
console.log(sistemaNotificaciones.getNotificacionNoLeidas())

console.log('----- ORDENAR POR FECHA -----')
console.log(sistemaNotificaciones.getNotificacionesByDate())