import { getDocs } from 'firebase/firestore';
import { getCollection } from './collection';
// takes a collection that should contain tasks and returns the tasks
export const fetchTasks = async () => {
  const tasksCollection = getCollection('tasks');
  const tasksSnapshot = await getDocs(tasksCollection);
  const tasks = tasksSnapshot.docs.map(doc => doc.data());
  return tasks;
}