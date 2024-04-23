
export const verificarDuplicadosApi = async (propiedad, valor) => {
    try {
        const response = await fetch(`http://localhost:4000/altas?${propiedad}=${valor}`);
        const data = await response.json();
        return data.length > 0;
    } catch (error) {
        console.error(`${propiedad} ya existe`, error);
        return false;
    }
}

export default verificarDuplicadosApi