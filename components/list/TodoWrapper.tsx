import { Todo } from "./ListTypes";
import TodoItem from "./TodoItem";

interface Props{
    todos: Todo[];
    category: string;
}

const TodoWrapper = ({todos, category}: Props) => {
    return(
        <section className="border-t border-dashed border-category py-2.5 mb-2.5">
            <h3 className="text-category text-sm w-11/12 mx-auto my-0 uppercase pb-2.5">{category}</h3>
            <div className="flex flex-col gap-y-2">
                {todos.map(todo => <TodoItem label={todo.label} key={todo.id}></TodoItem>)}
            </div>
        </section>
    )
}

export default TodoWrapper;