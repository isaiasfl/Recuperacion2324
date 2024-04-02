import React from 'react'

const Card = (props) => {

     const {id ,nBastidor, Marca, Modelo, Color, Tipo, Matricula} = props;

  return (
    <div className={`p-4 rounded-lg ${Tipo === 'coche' ? 'bg-blue-500' :Tipo === 'moto' ? 'bg-gray-500' :Tipo === 'camion' ? 'bg-brown-500' : ''}`}>
        <p>Id: {id}</p>
        <p>Numero Bastidor: {nBastidor}</p>
        <p>Marca: {Marca}</p>
        <p>Modelo: {Modelo}</p>
        <p>Color {Color}</p>
        <p>Tipo {Tipo}</p>
        <p>Matricula {Matricula}</p>
    </div>
  )
}

export default Card