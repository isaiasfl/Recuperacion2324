import { useEffect } from "react";

const Tarjeta = ({vehiculo}) => {
    
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

    // const cardStyle = getCardStyle(vehiculo.tipo);
    

    return (
        // <div className="grid grid-cols-1 gap-4 overflow-y-auto max-h-screen mb-4">
            <div className={`p-4 rounded-lg shadow-md  my-4 ${getCardStyle(vehiculo.tipo)}`} >
                <p>Número de Bastidor: {vehiculo.nbastidor}</p>
                <p>Marca: {vehiculo.marca}</p>
                <p>Modelo: {vehiculo.modelo}</p>
                <p>Tipo: {vehiculo.tipo}</p>
                <p>Color: {vehiculo.color}</p>
                <p>Matrícula: {vehiculo.matricula}</p>
                <p>Fecha de Alta: {new Date(vehiculo.fechaAlta).toLocaleDateString()}</p>
            </div>
        // </div>
    )
}

export default Tarjeta