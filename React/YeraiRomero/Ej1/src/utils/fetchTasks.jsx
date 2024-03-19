// fetchs from localstorage
export const fetchTasks = async () => {
  const data = JSON.parse(localStorage.getItem('tasks'));
  return data || [];
}