import { useEffect, useState } from "react";
import { getAllTasksFromLocalStorage } from "../utils/localStorage";

const ShowTareas = () => {
  const [tareas, setTareas] = useState([]);
  const [orden, setOrden] = useState('asc')
  const [ordenPriority, setOrdenPriority] = useState('asc')

  const getPriorityColor = (priority) => {
    switch (priority) {
      case '1':
      case '2':
        return 'bg-green-300';
      case '3':
      case '4':
        return 'bg-yellow-300';
      case '5':
        return 'bg-red-300';
      default:
        return 'bg-gray-200';
    }
  };

  const getPriorityStars = (priority) => {
    let stars = '';
    for (let i = 0; i < parseInt(priority); i++) {
      stars += '⭐';
    }
    return stars;
  }

  const handleOrderByNombre = () => {
    setTareas([...tareas.sort((a, b) => {
      if (orden === 'asc') {
        setOrden('desc');
        return a.name.localeCompare(b.name)
      }else{
        setOrden('asc');
        return b.name.localeCompare(a.name)
      }
    })]);
  }

  const handleOrderByPrioridad = () => {
    setTareas([...tareas.sort((a,b) => {
      if (ordenPriority === 'asc'){
        setOrdenPriority('desc');
        return parseInt(a.priority) - parseInt(b.priority)
      }else{
        setOrdenPriority('asc');
        return parseInt(b.priority) - parseInt(a.priority)
      }
    })])
  }

  useEffect(() => {
    const tareasLocalstorage = getAllTasksFromLocalStorage('tareasReact');
    setTareas(tareasLocalstorage);
  }, [])
  
  return (
    <div className="container w-full mx-auto mt-5">
      <h2 className="text-2xl text-center font-semibold text-gray-900 mb-4">Tareas</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-200">
          <tr>
            <th scope="col" className="px-6 py-3 text-center font-semibold text-gray-900 hover:bg-gray-400" onClick={handleOrderByNombre}>Nombre</th>
            <th scope="col" className="px-6 py-3 text-center font-semibold text-gray-900 hover:bg-gray-400" onClick={handleOrderByPrioridad}>Prioridad</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {
            tareas.map((tarea, index)=> (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-md font-normal text-gray-900">{tarea.name}</div>
                </td>
                <td className={`px-6 py-4 whitespace-nowrap ${getPriorityColor(tarea.priority)}`}>
                  <div className="text-sm text-center font-normal text-gray-900">{getPriorityStars(tarea.priority)}</div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default ShowTareas
