import { useState } from "react";
import saveTaskToLocalStorage from "../utils/localStorage";
import Swal from "sweetalert2";

const TareasForm = () => {
  const [nombre, setNombre] = useState('');
  const [prioridad, setPrioridad] = useState('1');

  const handleAddTask = (e) => {
    e.preventDefault();
    try {
      const newTask = {
        name : nombre,
        priority : prioridad
      }
      saveTaskToLocalStorage('tareasReact', newTask);
  
      Swal.fire({
        icon: "success",
        title: "¡Inserción correcta!",
        text: "Datos del producto insertados correctamente",
      });

      setNombre('');
      setPrioridad('1');

    } catch (error) {
      console.error("Error al añadir producto: ", error)
    }
    

  }

  return (
    <div className="w-full mx-auto mt-5">
      <form action="" className="bg-blue-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-3xl text-center font-semibold mb-4">Nueva Tarea</h2>
          <div className="mb-4">
              <label htmlFor="nombre" className="block text-gray-800 text-sm font-bold mb-2">Nombre</label>
              <input 
                type="text" 
                id="nombre" 
                placeholder="Nombre tarea"
                value={nombre} required 
                onChange={(e) => setNombre(e.target.value)} 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500 " 
              />
          </div>
          <div className="mb-4">
            <label htmlFor="prioridad" className="block text-gray-800 text-sm font-bold mb-2">Prioridad</label>
            <input 
              type="range" 
              id="prioridad" 
              name="prioridad" 
              min={1} 
              max={5}
              value={prioridad} required 
              onChange={(e) => setPrioridad(e.target.value)} 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500 " 
            />
          </div>
          <div className="text-center mt-8">
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
              px-4 rounded focus:outline-none focus:shadow-lg focus:shadow-slate-700"
              onClick={handleAddTask}
            >
              Añadir
            </button>
          </div>
      </form>
    </div>
  )
}

export default TareasForm
