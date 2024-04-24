

import React from 'react'

const Tarjet = ({vehiculo}) => {
  function getColorClass(tipo) {
    switch (tipo) {
      case 'motocicleta':
        return 'bg-gray-200';
      case 'coche':
        return 'bg-blue-200';
      case 'camion':
        return ' bg-green-300';
      default:
        return '';
    }
  }

  return (
    <>
    <div className="flex flex-wrap justify-center">
            <div
        
           className={`m-4 p-6 rounded-lg shadow-lg  ${getColorClass(vehiculo.tipo)}`}
            style={{ width: '300px' }}
            >
                <h2 className="text-2xl font-semibold"> NºBastidor: {vehiculo.nbastidor}</h2>
                <p><strong>Modelo:</strong> {vehiculo.modelo}</p>
                <p><strong>Marca:</strong> {vehiculo.marca}</p>
                <p><strong>Color:</strong> {vehiculo.color}</p>
                <p><strong>Fecha de Alta:</strong> {vehiculo.fecha}</p>
                <p><strong>Matrícula:</strong> {vehiculo.matricula}</p>
                <p><strong>Tipo:</strong> {vehiculo.tipo}</p>
        </div>
    </div>
    </>
  )
}

export default Tarjet



  