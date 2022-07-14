import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, setDoc, doc, deleteDoc, CollectionReference} from 'firebase/firestore/lite';
import { Todo } from "../components/list/ListTypes";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHrCRuXLubHhwrfJo0dTVRCyUBrkg3UKc",
  authDomain: "todo-f0bdf.firebaseapp.com",
  projectId: "todo-f0bdf",
  storageBucket: "todo-f0bdf.appspot.com",
  messagingSenderId: "1083061891459",
  appId: "1:1083061891459:web:c2c3f0d9ae014b1cc946b6"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getTodos() {
    const todosCol = collection(db, 'todos') as CollectionReference<Todo>
    const todosSnapshot = await getDocs(todosCol)
    return todosSnapshot.docs.map(document => document.data());
}

export async function updateOrCreateTodo(todo:Todo) {
    await setDoc(doc(db, "todos", todo.id), todo);
}

export async function deleteTodo(id:string) {
    await deleteDoc(doc(db, "todos", id));
}