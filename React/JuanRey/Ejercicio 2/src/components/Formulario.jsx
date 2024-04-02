import { useState } from 'react';
import { generateRandomPlate } from "../helpers/FuncionesCrud";

const Formulario = () => {
    const [numeroBastidor, setNumeroBastidor] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [tipo, setTipo] = useState('');
    const [fechaAlta, setFechaAlta] = useState(new Date());
    const [color, setColor] = useState('');
    const [matricula, setMatricula] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!numeroBastidor || !marca || !modelo || !tipo || !color) {
            alert('Todos los campos son obligatorios');
            return;
        }
        let nuevaMatricula = '';
        do {
            nuevaMatricula = generateRandomPlate();
        } while (nuevaMatricula === matricula);
        setNumeroBastidor('');
        setMarca('');
        setModelo('');
        setTipo('');
        setColor('');
        setMatricula(nuevaMatricula);

        alert('Vehículo registrado correctamente con matrícula: ' + nuevaMatricula);
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-gray-300 rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Número de Bastidor:</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={numeroBastidor} onChange={(e) => setNumeroBastidor(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Marca:</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={marca} onChange={(e) => setMarca(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Modelo:</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Tipo:</label>
                    <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={tipo} onChange={(e) => setTipo(e.target.value)}>
                        <option value="">Selecciona un tipo</option>
                        <option value="motocicleta">Motocicleta</option>
                        <option value="coche">Coche</option>
                        <option value="camion">Camión</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Color:</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={color} onChange={(e) => setColor(e.target.value)} />
                </div>
                <p className="mb-4">Matrícula generada: {matricula}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Insertar</button>
            </form>
        </div>
    );
}

export default Formulario;
