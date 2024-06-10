export const generarFechaActual = () => {
    const fechaActual = new Date();
    const dia = String(fechaActual.getDate()).padStart(2, '0');
    const mes = String(fechaActual.getMonth() + 1).padStart(2, '0'); 
    const año = fechaActual.getFullYear();
    
    return `${dia}/${mes}/${año}`;
}