export const verificarDuplicadosApi = async (endpoint, propiedad, valor) => {
    try {
        const response = await fetch(`http://localhost:4000/${endpoint}?${propiedad}=${valor}`);
        const data = await response.json();
        if (data.length > 0) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error("Error al verificar duplicado: ", error);
        return false;
    }
}

export default verificarDuplicadosApi