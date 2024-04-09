import { useEffect, useState } from 'react';

function Card() {
    const [vehiculos, setVehiculos] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch("http://localhost:4000/altas");
                if (!response.ok) {
                    throw new Error("Error al fechear");
                }
                const data = await response.json();
                setVehiculos(data.altas);
            } catch (err) {
                console.error('Error al cargar los vehículos:', err);
            }
        }
    }, []);

    const getCardStyle = (tipo) => {
        switch (tipo) {
            case 'Coche':
                return 'bg-blue-500';
            case 'Moto':
                return 'bg-gray-500';
            case 'Camion':
                return 'bg-green-600';
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
                    <p className="mb-2">Fecha de alta: {vehiculo.fechaAlta}</p>
                    <p className="mb-2">Matricula: {vehiculo.matricula}</p>
                </div>
            ))}
        </div>
    );
}

export default Card;
