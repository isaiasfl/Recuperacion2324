export const fechData = async () => {
    try{
        const response = await fetch("http://localhost:4000/altas")
        if(!response.ok){
            throw new console.error("No se puede conectar a la api");
        }
        const data = await response.json();
        const results = data.results;
        const vehiculosData = await Promise.all(
            results.map( async (vehiculo) =>{
                const resp = await fetch(vehiculo.url);
                const vehiculoDetails = await resp.json();
                return{
                    key: vehiculoDetails.id,
                    id: vehiculoDetails.id,
                    nBastidor: vehiculoDetails.nbastidor,
                    Marca: vehiculoDetails.Marca,
                    Modelo: vehiculoDetails.Modelo,
                    Color:vehiculoDetails.Color,
                    Tipo: vehiculoDetails.Tipo
                }
            })
        )
    }catch(error){
        throw new error("No se conecta a la api")
    }
    fechData()
}