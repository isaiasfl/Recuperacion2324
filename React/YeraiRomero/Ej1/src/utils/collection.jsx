import { collection } from "firebase/firestore";
import { db } from './firebase';
export const getCollection = (collectionName) => {
  return collection(db, collectionName);
}
