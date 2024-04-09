import { useState } from "react";
import Button from "./Button";
import genBastidor from "../helpers/genBastidor";
import genMatricula from "../helpers/genMatricula";
import {format } from "date-fns";


const Formulario = () => {
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [tipoVehiculo, setTipoVehiculo] = useState('Motocicleta');
    const [color, setColor] = useState('');
    const [bastidor, setBastidor] = useState('');
    const [matricula, setMatricula] = useState('');

    const fechaActual = format(new Date(), 'dd/MM/yyyy');


    const handleAddVehicle = () => {
      const newVehicle = {
          nBastidor : genBastidor(),
          marca: marca,
          modelo: modelo,
          tipoVehiculo: tipoVehiculo,
          color: color,
          fecha: fechaActual(),
          matricula: genMatricula()
      };
    

    }


    return (
<div className=" flex flex-col items-start">
    <h2 className=" text-xl ">Registro de Vehículos</h2>
    
    <form className="flex flex-col items-start">

      <label htmlFor="matricula">Matricula:</label>
      <div className="flex items-center mb-4">
        <input
          type="text"
          id="matricula"
          value={matricula}
          onChange={(e) => setMatricula(e.target.value)}
          className="border border-gray-300 rounded-md p-2 mr-2"
          required
        />
        <Button onClick={genMatricula} texto="Generar"></Button>
      </div>

      <label htmlFor="bastidor">Bastidor:</label>
      <div className="flex items-center mb-4">
        <input
          type="text"
          id="bastidor"
          value={bastidor}
          onChange={(e) => setBastidor(e.target.value)}
          className="border border-gray-300 rounded-md p-2 mr-2"
          required
        />
         <Button onClick={genBastidor()} texto="Generar"></Button>
      </div>

      <label htmlFor="marca">Marca del vehículo:</label>
      <input
        type="text"
        id="marca"
        value={marca}
        onChange={(e) => setMarca(e.target.value)}
        className="border border-gray-300 rounded-md p-2 mb-4"
        required
      />

      <label htmlFor="modelo">Modelo del vehículo:</label>
      <input
        type="text"
        id="modelo"
        value={modelo}
        onChange={(e) => setModelo(e.target.value)}
        className="border border-gray-300 rounded-md p-2 mb-4"
        required
      />

      <label htmlFor="tipo_vehiculo">Tipo de vehículo:</label>
      <select
        id="tipo_vehiculo"
        value={tipoVehiculo}
        onChange={(e) => setTipoVehiculo(e.target.value)}
        className="border border-gray-300 rounded-md p-2 mb-4"
        required
      >
        <option value="Motocicleta">Motocicleta</option>
        <option value="Coche">Coche</option>
        <option value="Camion">Camión</option>
      </select>

      <label htmlFor="color">Color:</label>
      <input
        type="text"
        id="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="border border-gray-300 rounded-md p-2 mb-4"
        required
      />

      <Button onClick={handleAddVehicle} texto="Guardar"></Button>
    </form>
    {console.log("MAT",genMatricula())}
</div>

    );
}

export default Formulario;
