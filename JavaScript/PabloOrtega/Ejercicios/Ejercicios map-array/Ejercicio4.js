/**
 * Ejercicio 4: Sistema de Notificaciones
    Implementa un sistema de notificaciones a través de una función almacene en un Map las notificaciones incluyendo siguientes funcionalidades:

    Añadir una nueva notificación.
    Marcar una notificación como leída.
    Obtener todas las notificaciones no leídas.
    Obtener todas las notificaciones ordenadas por fecha de creación.
    Versión 2.0 implementa el almacenamiento de las notificaciones en un Array de Objetos.
 */

class SistemaDeNotificaciones {
    constructor() {
        this.notificaciones = new Map();
    }

    añadirNotificacion(id, mensaje) {
        const fecha = new Date();
        this.notificaciones.set(id, { mensaje, leida: false, fecha });
        return `Notificación "${id}" añadida.`;
    }

    marcarComoLeida(id) {
        if (this.notificaciones.has(id)) {
            const notificacion = this.notificaciones.get(id);
            notificacion.leida = true;
            return `Notificación "${id}" marcada como leída.`;
        } else {
            return `No se encontró la notificación con ID "${id}".`;
        }
    }

    obtenerNoLeidas() {
        const noLeidas = [];
        for (let [id, notificacion] of this.notificaciones) {
            if (!notificacion.leida) {
                noLeidas.push({ id, ...notificacion });
            }
        }
        return noLeidas;
    }

    obtenerPorFecha() {
        return Array.from(this.notificaciones.entries()).sort((a, b) => a[1].fecha - b[1].fecha);
    }
}

// Ejemplo de uso
const sistemaNotificaciones = new SistemaDeNotificaciones();

// Añadir notificaciones
console.log(sistemaNotificaciones.añadirNotificacion(1, 'Primera notificación'));
console.log(sistemaNotificaciones.añadirNotificacion(2, 'Segunda notificación'));
console.log(sistemaNotificaciones.añadirNotificacion(3, 'Tercera notificación'));

// Marcar como leída
console.log(sistemaNotificaciones.marcarComoLeida(2));

// Obtener todas las notificaciones no leídas
console.log(sistemaNotificaciones.obtenerNoLeidas());

// Obtener todas las notificaciones ordenadas por fecha de creación
console.log(sistemaNotificaciones.obtenerPorFecha());