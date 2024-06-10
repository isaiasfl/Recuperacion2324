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
            sortedTasks.sort((a, b) => a.name.localeCompare(b.name));
        }
        setTasks(sortedTasks);
    }, [sortByPriority]);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
            setTasks(storedTasks);
        }
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4 text-center">Task Manager</h1>
            <form onSubmit={handleSubmit} className="mb-6 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Tarea:</label>
                    <input
                        type="text"
                        value={taskName}
                        onChange={handleNameChange}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Importancia:</label>
                    <input
                        type="range"
                        min="1"
                        max="5"
                        value={importance}
                        onChange={handleImportanceChange}
                        required
                        className="w-full"
                    />
                    <span className="text-gray-700 text-sm font-bold">{importance}</span>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Añadir tarea
                </button>
            </form>

            <div className="mb-6">
                <TaskList tasks={tasks} onDelete={handleDeleteTask} />
            </div>

            <button
                onClick={toggleSort}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                {sortByPriority ? 'Ordenar por Nombre' : 'Ordenar por Prioridad'}
            </button>
        </div>
    );
};

export default Tareas;
