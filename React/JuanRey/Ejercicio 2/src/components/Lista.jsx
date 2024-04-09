import { useEffect, useState } from 'react';

function Lista() {
    const [vehiculos, setVehiculos] = useState([]);

    useEffect(() => {
        // Cargar los datos del archivo JSON cuando el componente se monte
        fetch("/React/JuanRey/Ejercicio 2/server/dgt.json")
          .then(response => response.json())
          .then(data => setVehiculos(data.altas))
          .catch(error => console.error('Error al cargar los vehículos:', error));
      }, []);

    const getCardStyle = (tipo) => {
        switch (tipo) {
        case 'Coche':
            return { backgroundColor: 'blue' };
        case 'Moto':
            return { backgroundColor: 'grey' };
        case 'Camion':
            return { backgroundColor: '#654321' };
        default:
            return {};
        }
    };

    return (
        <div className="vehiculos-container">
        {vehiculos.map((vehiculo, index) => (
            <div className="vehiculo-card" key={index} style={getCardStyle(vehiculo.tipo)}>
            <p>Número de Bastidor: {vehiculo.bastidor}</p>
            <p>Tipo de Vehículo: {vehiculo.tipo}</p>
            <p>Marca: {vehiculo.marca}</p>
            <p>Modelo: {vehiculo.modelo}</p>
            <p>Color: {vehiculo.color}</p>
            <p>Matricula: {vehiculo.matricula}</p>
            </div>
        ))}
        </div>
    );
}

export default Lista;