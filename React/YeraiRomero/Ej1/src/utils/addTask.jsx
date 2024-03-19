import { addDoc } from "firebase/firestore";
import { getCollection } from "./collection";
export const addTask = async (task) => {
  const tasksCollection = getCollection("tasks");
  try {
    const docRef = await addDoc(tasksCollection, task);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};