import { useState } from 'react';
import { generateRandomPlate} from "../helpers/FuncionesCrud";
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
    <div className='bg-gray-300 p-4 rounded-3xl'>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <label>
                Número de Bastidor:
                <input type="text" value={numeroBastidor} onChange={(e) => setNumeroBastidor(e.target.value)} />
            </label>
            <br />
            <label>
                Marca:
                <input type="text" value={marca} onChange={(e) => setMarca(e.target.value)} />
            </label>
            <br />
            <label>
                Modelo:
                <input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} />
            </label>
            <br />
            <label>
                Tipo:
                <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
                    <option value="">Selecciona un tipo</option>
                    <option value="motocicleta">Motocicleta</option>
                    <option value="coche">Coche</option>
                    <option value="camion">Camión</option>
                </select>
            </label>
            <br />
            <br />
            <label>
                Color:
                <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
            </label>
            <br />
            <p>Matrícula generada: {matricula}</p>
            <button type="submit">Insertar</button>
        </form>
    </div>
    
    );
}

export default Formulario