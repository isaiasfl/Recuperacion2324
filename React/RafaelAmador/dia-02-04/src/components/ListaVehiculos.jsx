import { useEffect, useState } from 'react';
import { getVehiculos } from '../helper/getVehiculos';

function ListaVehiculos() {
  const [vehiculos, setVehiculos] = useState([]);

  useEffect(() => {
   
    getVehiculos((data) => {
      setVehiculos(data);
    });
  }, [vehiculos]);

  return (
    <div>
      <h2>Lista de Vehículos</h2>
      <table>
        <thead>
          <tr>
            <th>Número de Bastidor</th>
            <th>Marca</th>
            <th>Color</th>
            <th>Tipo de Vehículo</th>
          </tr>
        </thead>
        <tbody>
          {vehiculos.map((vehiculo, index) => (
            <tr key={index}>
              <td>{vehiculo.bastidor}</td>
              <td>{vehiculo.marca}</td>
              <td>{vehiculo.color}</td>
              <td>{vehiculo.tipo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaVehiculos;