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