export default function eliminarToken() {
    if (localStorage.getItem('token')) {
        localStorage.removeItem('token');
    } else {
        return console.log("No existe el token");
    }
}
