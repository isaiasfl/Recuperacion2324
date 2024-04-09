import { useState, useEffect } from 'react';

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

    const getCardStyle = (tipo) => {
        switch (tipo) {
        case 'Moto':
            return 'bg-gray-300';
        case 'Coche':
            return 'bg-blue-300';
        case 'Camión':
            return 'bg-green-300';
        default:
            return 'bg-blue-300';
        }
    };

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
            <div className="grid grid-cols-1 gap-4 overflow-y-auto max-h-screen">
            {vehiculosFiltrados.map((vehiculo, index) => {
                const cardStyle = getCardStyle(vehiculo.tipo);
                return (
                    <div key={index} className={`p-4 rounded-lg shadow-md ${cardStyle}`}>
                        <p>Número de Bastidor: {vehiculo.numeroBastidor}</p>
                        <p>Marca: {vehiculo.marca}</p>
                        <p>Modelo: {vehiculo.modelo}</p>
                        <p>Tipo: {vehiculo.tipo}</p>
                        <p>Color: {vehiculo.color}</p>
                        <p>Matrícula: {vehiculo.matricula}</p>
                        <p>Fecha de Alta: {new Date(vehiculo.fechaAlta).toLocaleDateString()}</p>
                    </div>
                );
            })}
            </div>
        </div>
    );
};

export default ListaVehiculos;
