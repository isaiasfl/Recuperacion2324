import React, { useState, useEffect } from 'react';
import TodoList from "./components/TodoList";
import { db } from './utils/firebase';
import { fetchTasks } from './utils/fetchTasks';
import NewTaskForm from './components/NewTaskForm';
import { addTask } from './utils/addTask';
function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetchTasks(); // returns [{ desc: 'blablabla', done: true }]
        const data = response;
        setTodos(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTodos();
  }, []);

  const updateTask = async (newTask) => {
    const { desc, done, priority } = newTask;
    setTodos(prevTodos => [...prevTodos, { desc, done, priority }]);
    await addTask(newTask);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} />
      <NewTaskForm updateTask={updateTask} />
    </div>
  );
}

export default App;