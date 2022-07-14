import { ChangeEvent } from "react";
import { Todo } from "./ListTypes";

interface Props{
    todo: Todo;
    handleCheckboxChange: (e:ChangeEvent<HTMLInputElement>, id:string) => void;
    handleDeleteTodo: (id:string) => void;
}

const TodoItem = ({todo, handleCheckboxChange, handleDeleteTodo}:Props) => {
return(
    <div className="flex flex-row items-center justify-between w-11/12 mx-auto my-0 bg-secondary p-3 rounded-lg text-text-primary">
        <input type="checkbox" className="w-5 h-5 mr-4 rounded-full" checked={todo.isCompleted} onChange={(e) => handleCheckboxChange(e, todo.id)}/>
        <label className="basis-full text-left">{todo.label}</label>
        <div className="flex flex-row text-text-secondary" onClick={() => handleDeleteTodo(todo.id)}>
            <img src="/trash.svg" alt="trash button to delete"/>
        </div>
    </div>
)
}

export default TodoItem;