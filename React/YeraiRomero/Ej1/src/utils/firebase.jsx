import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVHCnu07291fKaq9JF-cFn8GUsy3EFhiI",
  authDomain: "todo-list-sellsword9.firebaseapp.com",
  projectId: "todo-list-sellsword9",
  storageBucket: "todo-list-sellsword9.appspot.com",
  messagingSenderId: "537778465033",
  appId: "1:537778465033:web:70cd670609624d14308bd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
