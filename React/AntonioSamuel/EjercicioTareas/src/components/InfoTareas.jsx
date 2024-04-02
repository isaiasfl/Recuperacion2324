import { useEffect, useState } from "react"
import { countTaskWithHigherPriority, countTasksInLocalStorage } from "../utils/localStorage"

const InfoTareas = () => {
  const [numTareas, setNumTareas] = useState('0');
  const [numTareasPrioritarias, setNumTareasPrioritarias] = useState('0');

  useEffect(() => {
    // Cuando el componente se renderice, actualiza el número de tareas.
    setNumTareas(countTasksInLocalStorage('tareasReact'));
    setNumTareasPrioritarias(countTaskWithHigherPriority('tareasReact'));
  }, []);

  return (
    <div className="w-full mx-auto mt-5 px-8 pt-6 pb-8 bg-green-100 shadow-md rounded">
      <h2 className="text-2xl text-center font-semibold text-gray-900 mb-5">Informacion de Tareas en LocalStorage</h2>
      <div className="my-2">
        <h2 className="text-gray-900 font-semibold">Nº Total de Tareas:<span className="mx-2 font-bold">{numTareas}</span></h2>
      </div>
      <div className="my-2">
        <h2 className="text-gray-900 font-semibold">Nº Tareas de mayor prioridad:<span className="mx-2 font-bold">{numTareasPrioritarias}</span></h2>
      </div>
    </div>
  )
}

export default InfoTareas
