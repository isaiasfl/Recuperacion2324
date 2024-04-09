const apiUrl="http://localhost:4000/altas";

export async function getVehiculos(callback, tipoVehiculo){
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        if(tipoVehiculo=="Todos"){    
            callback(data);
        }else{
            const vehiculoConcreto = data.filter(vehiculo => vehiculo.tipo === tipoVehiculo)
            callback(vehiculoConcreto)
        }
        
    }catch(error){
        console.error(error);
    }
}