const apiUrl="http://localhost:4000/altas";

export async function getVehiculos(callback){
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        callback(data);
    }catch(error){
        console.error(error);
    }
}


export async function getCoches(callback) {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const coches = data.filter(vehiculo => vehiculo.tipo === "Coche");
        callback(coches);
    } catch (error) {
        console.error(error);
    }
}
export async function getMotos(callback) {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const coches = data.filter(vehiculo => vehiculo.tipo === "Moto");
        callback(coches);
    } catch (error) {
        console.error(error);
    }
}

export async function getCamion(callback) {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const coches = data.filter(vehiculo => vehiculo.tipo === "Camion");
        callback(coches);
    } catch (error) {
        console.error(error);
    }
}