import { useEffect, useState } from 'react';

function Lista() {
    const [vehiculos, setVehiculos] = useState([]);

    useEffect(() => {
        fetch("/React/JuanRey/Ejercicio 2/server/dgt.json")
            .then(response => response.json())
            .then(data => setVehiculos(data.altas))
            .catch(error => console.error('Error al cargar los vehículos:', error));
    }, []);

    const getCardStyle = (tipo) => {
        switch (tipo) {
            case 'Coche':
                return 'bg-blue-500';
            case 'Moto':
                return 'bg-gray-500';
            case 'Camion':
                return 'bg-brown-600';
            default:
                return '';
        }
    };

    return (
        <div className="flex flex-wrap justify-center gap-4">
            {vehiculos.map((vehiculo, index) => (
                <div key={index} className={`max-w-md p-4 rounded-lg shadow-md ${getCardStyle(vehiculo.tipo)}`}>
                    <p className="mb-2">Número de Bastidor: {vehiculo.nbastidor}</p>
                    <p className="mb-2">Tipo de Vehículo: {vehiculo.tipo}</p>
                    <p className="mb-2">Marca: {vehiculo.marca}</p>
                    <p className="mb-2">Modelo: {vehiculo.modelo}</p>
                    <p className="mb-2">Color: {vehiculo.color}</p>
                    <p className="mb-2">Matricula: {vehiculo.matricula}</p>
                </div>
            ))}
        </div>
    );
}

export default Lista;
