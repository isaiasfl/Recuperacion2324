export const comprobarToken = () => {
    const token = localStorage.getItem('token');

    // Verificar si el token es null o undefined
    if (token === null || token === undefined) {
        return false;
    } else {
        return true;
    }
}

export default comprobarToken