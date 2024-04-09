// App.js
import { useState } from 'react';
import Formulario from './components/Formulario';
import ListaVehiculos from './components/ListaVehiculos';

function App() {
  const [vehiculos, setVehiculos] = useState([]);

  const agregarVehiculo = (nuevoVehiculo) => {
    fetch('http://localhost:4000/altas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevoVehiculo),
    })
      .then(response => response.json())
      .then(data => {
        setVehiculos([...vehiculos, data]);
        alert('Vehículo registrado correctamente con matrícula: ' + data.matricula);
      })
      .catch(error => console.error('Error al agregar el vehículo:', error));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="max-w-screen-lg w-full p-6 bg-white rounded-lg shadow-md grid grid-cols-2 gap-6">
        <div className="col-span-1">
          <h1 className="text-2xl font-bold mb-6">Dirección General de Tráfico</h1>
          <Formulario onAdd={agregarVehiculo} />
        </div>
        <div className="col-span-1">
          <h2 className="text-xl font-semibold mb-4">Lista de Vehículos</h2>
          <ListaVehiculos />
        </div>
      </div>
    </div>
  );
}

export default App;
