import { useState, useEffect } from 'react';

function TaskPage() {
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState(1);
  const [tasks, setTasks] = useState([]);

  // Al cargar la página, obtener tareas almacenadas
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  // Guardar tarea en localStorage
  const saveTask = () => {
    const newTask = { name: taskName, priority: priority };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setTaskName('');
    setPriority(1);
  };

  // Calcular el número de tareas y tareas con prioridad máxima
  const totalTasks = tasks.length;
  const highPriorityTasks = tasks.filter(task => task.priority == 5).length;

  // Ordenar tareas por prioridad
  const sortByPriority = () => {
    const sortedTasks = [...tasks].sort((a, b) => b.priority - a.priority);
    setTasks(sortedTasks);
  };

  // Ordenar tareas por nombre
  const sortByName = () => {
    const sortedTasks = [...tasks].sort((a, b) => a.name.localeCompare(b.name));
    setTasks(sortedTasks);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Panel izquierdo */}
      <div className="bg-blue-100 p-4 shadow-md rounded-md w-1/3 mr-4">
        <h2 className="text-lg font-semibold mb-2">Agregar Tarea</h2>
        <input type="text" value={taskName} onChange={e => setTaskName(e.target.value)} placeholder="Nombre de la tarea" className="border border-gray-300 px-3 py-2 rounded-md w-full mb-2" />
        <input type="range" value={priority} onChange={e => setPriority(e.target.value)} min="1" max="5" className="w-full mb-2" />
        <button onClick={saveTask} className="bg-blue-500 text-white px-4 py-2 rounded-md">Guardar</button>
      </div>

      {/* Panel central */}
      <div className="bg-green-200 p-4 shadow-md rounded-md w-1/3 mr-4">
        <h2 className="text-lg font-semibold mb-2">Información de Tareas</h2>
        <p>Total de tareas: <span>{totalTasks}</span></p>
        <p>Tareas con mayor prioridad: <span>{highPriorityTasks}</span></p>
      </div>

      {/* Panel derecho */}
      <div className="bg-yellow-500 p-4 shadow-md rounded-md w-1/3">
        <h2 className="text-lg font-semibold mb-4">Todas las Tareas</h2>
        <div>
          {tasks.map((task, index) => (
            <div key={index}>{task.name} - {'★'.repeat(task.priority)}</div>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <button onClick={sortByPriority} className="bg-blue-500 text-white px-4 py-2 rounded-md">Ordenar por Prioridad</button>
          <button onClick={sortByName} className="bg-blue-500 text-white px-4 py-2 rounded-md">Ordenar por Nombre</button>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
