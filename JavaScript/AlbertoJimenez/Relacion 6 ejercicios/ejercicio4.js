class SistemaDeNotificaciones {
    constructor() {
        this.notificaciones = new Map();
    }

    agregarNotificacion(id, mensaje) {
        const fechaCreacion = new Date();
        if (this.notificaciones.has(id)) {
            console.log(`La notificación con id ${id} ya existe.`);
            return;
        }
        this.notificaciones.set(id, { mensaje, fechaCreacion, leida: false });
        console.log(`Notificación '${mensaje}' agregada.`);
    }

    marcarComoLeida(id) {
        if (!this.notificaciones.has(id)) {
            console.log(`La notificación con id ${id} no existe.`);
            return;
        }
        let notificacion = this.notificaciones.get(id);
        notificacion.leida = true;
        this.notificaciones.set(id, notificacion);
        console.log(`Notificación con id ${id} marcada como leída.`);
    }

    obtenerNotificacionesNoLeidas() {
        let noLeidas = [];
        for (let [id, notificacion] of this.notificaciones.entries()) {
            if (!notificacion.leida) {
                noLeidas.push({ id, ...notificacion });
            }
        }
        return noLeidas;
    }

    obtenerNotificacionesOrdenadasPorFecha() {
        let todasLasNotificaciones = Array.from(this.notificaciones.values());
        todasLasNotificaciones.sort((a, b) => a.fechaCreacion - b.fechaCreacion);
        return todasLasNotificaciones;
    }
}


const sistemaDeNotificaciones = new SistemaDeNotificaciones();
sistemaDeNotificaciones.agregarNotificacion(1, 'Primera notificación');
sistemaDeNotificaciones.agregarNotificacion(2, 'Segunda notificación');
sistemaDeNotificaciones.agregarNotificacion(3, 'Tercera notificación');

console.log("Marcando la notificación con id 2 como leída:");
sistemaDeNotificaciones.marcarComoLeida(2);

console.log("Notificaciones no leídas:");
console.log(sistemaDeNotificaciones.obtenerNotificacionesNoLeidas());

console.log("Todas las notificaciones ordenadas por fecha de creación:");
console.log(sistemaDeNotificaciones.obtenerNotificacionesOrdenadasPorFecha());
