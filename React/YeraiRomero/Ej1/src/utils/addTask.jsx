import { fetchTasks } from './fetchTasks';
export const addTask = async (task) => {
  try {
    const allTasks = await fetchTasks();
    allTasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(allTasks));
  } catch (error) {
    console.error(error);
  }
};
/*
// fetchs from localstorage
export const fetchTasks = async () => {
  const data = JSON.parse(localStorage.getItem('tasks'));
  return data || [];
}
*/