import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

const doc1collection = doc(db, "react1recuperacion");

export const getUsers = async () => {
  try {
    const users = await getDoc(doc1collection);
    console.log(users.data());
  } catch (e) {
    console.log("Error getting cached document:", e);
  }
};
