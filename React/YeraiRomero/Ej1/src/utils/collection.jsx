import { collection } from "firebase/firestore";
import { db } from './firebase';
// i need a function that takes a collection name and returns a reference to that collection
export const getCollection = (collectionName) => {
  return collection(db, collectionName);
}
