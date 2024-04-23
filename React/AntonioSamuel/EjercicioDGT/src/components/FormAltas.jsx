import { useState } from "react"
import { format } from 'date-fns';
import generadorBastidorAleatorio from "../helpers/generadorBastidor";
import generarMatricula from "../helpers/generadorMatricula";
import { addVehiculoApi } from "../helpers/addVehiculoApi";
import { verificarDuplicadosApi } from "../helpers/verificarDuplicadosApi";
import Swal from "sweetalert2";

const FormAltas = () => {
    const [bastidor, setBastidor] = useState("") 
    const [marca, setMarca] = useState("")
    const [modelo, setModelo] = useState("")
    const [tipo, setTipo] = useState("")
    const [color, setColor] = useState("")

    const fechaActual = format(new Date(), 'dd/MM/yyyy');

    const handleGenerateBastidor = async () => {
      const newBastidor = generadorBastidorAleatorio();

      const bastidorDuplicado = await verificarDuplicadosApi('altas', 'bastidor', newBastidor)

      if (!bastidorDuplicado) {
        setBastidor(newBastidor)
      }
    }

    const handleAddVehiculo = async (e) => {
        e.preventDefault();

        try {
          const newVehiculo = {
              bastidor : bastidor,
              marca : marca,
              modelo : modelo,
              tipo : tipo,
              color : color,
              fechaAlta : fechaActual,
              matricula : generarMatricula(),
          }
          const matriculaDuplicada = await verificarDuplicadosApi('altas', 'matricula', newVehiculo.matricula)

          if (!matriculaDuplicada) {
            Swal.fire({
              title: 'Confirmar Datos',
              html: `
                <p className="font-md font-semibold text-center">¿Estás seguro de añadir el vehículo?</p>
                <p className="font-md text-center">Nº Bastidor: ${newVehiculo.bastidor}</p>
                <p className="font-md text-center">Marca: ${newVehiculo.marca}</p>
                <p className="font-md text-center">Modelo: ${newVehiculo.modelo}</p>
                <p className="font-md text-center">Tipo: ${newVehiculo.tipo}</p>
                <p className="font-md text-center">Color: ${newVehiculo.color}</p>
                <p className="font-md text-center">Fecha Alta ${newVehiculo.fechaAlta}</p>
                <p className="font-2xl font-bold text-center">Matrícula: ${newVehiculo.matricula}</p>
              `,
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Añadir',
              cancelButtonText: 'Cancelar',
            }).then((result) => {
              if (result.isConfirmed) {
                addVehiculoApi('http://localhost:4000/altas', newVehiculo, () =>{})
                setBastidor("")
                setMarca("")
                setModelo("")
                setColor("")
              }
            })
          } else {
            const newMatricula = generarMatricula();
            newVehiculo.matricula = newMatricula;
          }
          
        } catch (error) {
            console.error("Error al dar de alta el vehiculo: ", error)
        }

    }

  return (
    <div className="w-full mx-auto">
      <form action="" className="bg-blue-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-3xl text-center font-semibold mb-4">Nuevo Vehiculo</h2>
          <div className="mb-4">
            <label htmlFor="bastidor" className="block text-gray-800 text-sm font-bold mb-2">Nº Bastidor</label>
            <div className="flex flex-row">
              <input 
                  type="text" 
                  id="bastidor" 
                  placeholder="Nº Bastidor"
                  value={bastidor} 
                  required
                  readOnly 
                  onChange={(e) => setBastidor(e.target.value)} 
                  className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500 " 
              />
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
              px-3 mx-2 rounded focus:outline-none focus:shadow-lg focus:shadow-slate-700" onClick={handleGenerateBastidor}>
                Generar
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="marca" className="block text-gray-800 text-sm font-bold mb-2">Marca</label>
            <input 
                type="text" 
                id="marca" 
                placeholder="Marca Vehiculo"
                value={marca} required 
                onChange={(e) => setMarca(e.target.value)} 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500 " 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="modelo" className="block text-gray-800 text-sm font-bold mb-2">Modelo</label>
            <input 
                type="text" 
                id="modelo" 
                placeholder="Modelo Vehiculo"
                value={modelo} required 
                onChange={(e) => setModelo(e.target.value)} 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500 " 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="tipo" className="block text-gray-800 text-sm font-bold mb-2">Tipo</label>
            <select 
            name="tipo" 
            id="tipo" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500"
            required
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            >
                <option value="coche">Coche</option>
                <option value="moto">Moto</option>
                <option value="camion">Camion</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="color" className="block text-gray-800 text-sm font-bold mb-2">Color</label>
            <input 
                type="text" 
                id="color"
                value={color} required 
                onChange={(e) => setColor(e.target.value)} 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500 " 
            />
          </div>
          <div className="text-center mt-8">
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
              px-4 rounded focus:outline-none focus:shadow-lg focus:shadow-slate-700"
              onClick={handleAddVehiculo}
            >
              Guardar
            </button>
          </div>
      </form>
    </div>
  )
}

export default FormAltas
