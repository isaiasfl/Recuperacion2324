export const postVehiculo = async (bastidor, tipo, marca, modelo, color, matricula, fecha) =>{
    await fetch('http://localhost:4000/altas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bastidor, marca, modelo, tipo, color, fecha, matricula }), 
});
}
