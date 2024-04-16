import { useState, useEffect } from 'react';
import Tarjeta from './Tarjeta';

const ListaVehiculos = () => {
    const [vehiculos, setVehiculos] = useState([]);
    const [filtroTipo, setFiltroTipo] = useState('');
    
    useEffect(() => {
        fetch('http://localhost:4000/altas')
        .then(response => response.json())
        .then(data => setVehiculos(data))
        .catch(error => console.error('Error al cargar los vehículos:', error));
    }, []);

    const handleFiltroChange = (event) => {
        setFiltroTipo(event.target.value);
    };

    const vehiculosFiltrados = filtroTipo ? vehiculos.filter(vehiculo => vehiculo.tipo === filtroTipo) : vehiculos;

    return (
        <div className="grid grid-cols-1 gap-4">
            <div>
                <label htmlFor="filtroTipo" className="block text-sm font-medium text-gray-700">Filtrar por tipo:</label>
                <select id="filtroTipo" name="filtroTipo" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={filtroTipo} onChange={handleFiltroChange}>
                    <option value="">Todos</option>
                    <option value="Moto">Motocicleta</option>
                    <option value="Coche">Coche</option>
                    <option value="Camión">Camión</option>
                </select>
            </div>
            <div>
            {vehiculosFiltrados.map(vehiculo=>(
                <Tarjeta key={vehiculo.id} vehiculo={vehiculo} />

            ))}
            </div>
        </div>
    );
};

export default ListaVehiculos;
