

const notificacionesAlmacenadas = () => {
    let notificaciones = Map();

    const crearNotificacion = (id, contenido) => {
        if (notificaciones.has(id)) {
            throw new Error("Notificacion ya existe");
        } else {
            const notificacion = {
                id: id,
                contenido: contenido,
                estado: false,
                fecha: Date.now(),
            }
            this.notificaciones.set(notificacion);
        }
    }

    const notificacionLeida = (id) => {
        if (this.notificaciones.has(id)) {
            const notificacion = this.notificaciones.get(id);
            notificacion.estado = true;
            this.notificaciones.set(id, notificacion);
        } else {
            throw new Error("Notificacion no existe");
        }
    }

    const buscarNotificaionesNoLeidas = () => {
        return Array.from(this.notificaciones.values()).filter(notificacion => notificacion.estado === false);
    }

    const ordenarNotificacionesPorFecha = () => {
        return Array.from(this.notificaciones.values()).sort((a, b) => a.fecha - b.fecha);
    }

    return {
        crearNotificacion,
        notificacionLeida,
        buscarNotificaionesNoLeidas,
        ordenarNotificacionesPorFecha,
    }
}

const notificaciones = new notificacionesAlmacenadas();