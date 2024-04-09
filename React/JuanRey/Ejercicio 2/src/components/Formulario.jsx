import { useState } from 'react';
import { generateRandomPlate } from '../helpers/FuncionesCrud';

const Formulario = ({ onAdd }) => {
    const [nbastidor, setnbastidor] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [tipo, setTipo] = useState('');
    const [color, setColor] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!nbastidor || !marca || !modelo || !tipo || !color) {
            alert('Todos los campos son obligatorios');
            return;
        }
        const matricula = generateRandomPlate();
        const fechaAlta = new Date().toISOString();
        const nuevoVehiculo = {
            nbastidor,
            marca,
            modelo,
            tipo,
            color,
            matricula,
            fechaAlta,
        };
        onAdd(nuevoVehiculo);
        setnbastidor('');
        setMarca('');
        setModelo('');
        setTipo('');
        setColor('');
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-gray-300 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Número de Bastidor:
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={nbastidor} onChange={(e) => setnbastidor(e.target.value)} />
            </label>
            <br />
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Marca:
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={marca} onChange={(e) => setMarca(e.target.value)} />
            </label>
            <br />
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Modelo:
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} />
            </label>
            <br />
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Tipo:
                <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={tipo} onChange={(e) => setTipo(e.target.value)}>
                <option value="">Selecciona un tipo</option>
                <option value="Moto">Moto</option>
                <option value="Coche">Coche</option>
                <option value="Camión">Camión</option>
                </select>
            </label>
            <br />
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Color:
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={color} onChange={(e) => setColor(e.target.value)} />
            </label>
            <br />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Insertar</button>
        </form>
        </div>
    );
};

export default Formulario;
