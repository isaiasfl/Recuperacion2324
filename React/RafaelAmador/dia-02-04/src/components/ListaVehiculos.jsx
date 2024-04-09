import { useEffect, useState } from 'react';
import { getVehiculos } from '../helper/getVehiculos';

function ListaVehiculos() {
  const [vehiculos, setVehiculos] = useState([]);

  useEffect(() => {
   
    getVehiculos((data) => {
      setVehiculos(data);
    });
  }, [vehiculos]);

  const getCardStyle = (tipo) => {
    switch (tipo) {
      case 'Coche':
        return { backgroundColor: '#014bff' };
      case 'Moto':
        return { backgroundColor: 'grey' };
      case 'Camion':
        return { backgroundColor: '#654321' };
      default:
        return {};
    }
  };

  return (
    <div className="vehiculos-container">
      {vehiculos.map((vehiculo, index) => (
        <div className="vehiculo-card" key={index} style={getCardStyle(vehiculo.tipo)}>
          <p>Número de Bastidor: {vehiculo.bastidor}</p>
          <p>Tipo de Vehículo: {vehiculo.tipo}</p>
          <p>Marca: {vehiculo.marca}</p>
          <p>Modelo: {vehiculo.modelo}</p>
          <p>Color: {vehiculo.color}</p>
          <p>Matricula: {vehiculo.matricula}</p>
        </div>
      ))}
    </div>
  );
}

export default ListaVehiculos;