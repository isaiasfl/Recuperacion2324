import { useState } from "react";
import Button from "./Button";
import genBastidor from "../helpers/genBastidor";
import genMatricula from "../helpers/genMatricula";
import {format } from "date-fns";
import addVehicle from "../helpers/addVehicle";
import Swal from 'sweetalert2';


const Formulario = () => {
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [tipoVehiculo, setTipoVehiculo] = useState('Motocicleta');
    const [color, setColor] = useState('');
    const [bastidor, setBastidor] = useState('');
    

    const fechaActual = format(new Date(), 'dd/MM/yyyy');


    const handleAddVehicle = (e) => {
      e.preventDefault();
      const newVehicle = {
          nBastidor : bastidor,
          marca: marca,
          modelo: modelo,
          tipo: tipoVehiculo,
          color: color,
          fecha: fechaActual,
          matricula: genMatricula(),
      };
  
      addVehicle('http://localhost:4000/altas', newVehicle, (info) => {
          if (info) {
            Swal.fire({
              icon: "success",
              title: "¡Inserción correcta!",
              text: `Vehiculo añadido correctamente con la matricula ${newVehicle.matricula}`,
            })


          } else {
            Swal.fire({
              icon: "error",
              title: "Error al insertar!",
              text: "Vehiculo no añadido",
            });
          }
      });

      console.log("q11111111111");
  }
  


    return (
<div className=" flex flex-col items-start">
    <h2 className=" text-xl ">Registro de Vehículos</h2>
    
    <form type="submit" className="flex flex-col items-start">

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

      <button onClick={handleAddVehicle} >Guardar</button>
      {/* <Button onClick={handleAddVehicle} texto="Guardar"></Button> */}
    </form>
    
</div>

    );
}

export default Formulario;
