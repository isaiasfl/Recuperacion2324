import { useEffect, useState } from "react";
import TaskList from "./TaskList";

const Tareas = () => {
  const [taskName, setTaskName] = useState('');
  const [importance, setImportance] = useState(1);
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    return storedTasks || [];
  });
  const [sortByPriority, setSortByPriority] = useState(true);

  const handleNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleImportanceChange = (e) => {
    setImportance(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      name: taskName,
      importance: importance
    };
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks, newTask];
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    });
    setTaskName('');
    setImportance(1);
  };
  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const toggleSort = () => {
    setSortByPriority(prevState => !prevState);
  };

  useEffect(() => {
    const sortedTasks = [...tasks];
    if (sortByPriority) {
      sortedTasks.sort((a, b) => b.importance - a.importance);
    } else {
      //sortedTasks.sort((a, b) => a.name.localeCompare(b.name));
      sortedTasks.sort((a, b) => a.name.length - b.name.length);
    }
    setTasks(sortedTasks);
  }, [sortByPriority]);

  useEffect(() => {
    // Cargar tareas del almacenamiento local al inicio
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tarea: </label>
          <input
            type="text"
            value={taskName}
            onChange={handleNameChange}
            required
          />
        </div>
        <div>
          <label>Importance:</label>
          <input
            type="range"
            min="1"
            max="5"
            value={importance}
            onChange={handleImportanceChange}
            required
          />
          {importance}
        </div>
        <button type="submit">Añadir tarea</button>
      </form>
     
      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
      <button onClick={toggleSort}>
        {sortByPriority ? 'Ordenar por Nombre' : 'Ordenar por Prioridad'}
      </button>
    </>
  );
};

export default Tareas;