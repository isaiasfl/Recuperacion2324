import { useState } from "react";
import Swal from "sweetalert2";

export default function AddTaskForm() {
  
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState(1);
    
///logica
/**
 * 
 * @returns  cambia el color del case
 */
const getColorClass = () => {
    switch (priority) {
      case 1:
      case 2:
        return 'bg-green-200';
      case 3:
      case 4:
        return 'bg-orange-200';
      case 5:
        return 'bg-red-200';
      default:
        return '';
    }
  };

  ///envia las task a el local estoraje
const handleSubmit=(e)=>{ 
    e.preventDefault();

 //obtengo  el contenido del localstoraje
    const getStorageContent=localStorage.getItem('tasks');

    const newTask={
        id:getStorageContent.length+1,
        titulo:title,
        descripcion:description,
        priotidad:priority,
    }
 const task=[];
 if(getStorageContent){
    task.push(JSON.parse(getStorageContent));
}

const agregarTarea = (newTask) => {
    // Agregar la nueva tarea al array
    task.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(task));
}
agregarTarea(newTask);
 // ventana indicando si todo ok
 Swal.fire({
    icon: "success",
    title: "¡Inserción correcta!",
    text: "Datos del producto insertados correctamente",
  });
  //seteamos al inicial
  setTitle('');
  setDescription('');
  setPriority(1);
}

return (
 <>
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"  onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Título
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Título de la tarea"
            value={title}
            // cabia el contenido del titulo
            onChange={(e) =>  setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Descripción
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Descripción de la tarea"
            value={description}
             // cabia el contenido del Description
            onChange={(e) =>  setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="priority">
            Prioridad
          </label>
          <select
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${getColorClass()}`}
            id="priority"
            value={priority}
            // cabia el contenido del Priority
            onChange={(e) =>  setPriority(parseInt(e.target.value))}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Crear Tarea
          </button>
        </div>
      </form>
    </div>
 </>
  )
}
