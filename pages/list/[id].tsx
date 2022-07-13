import { GetServerSideProps } from "next/types";
import { ChangeEvent, useState } from "react";
import AddItemWidget from "../../components/list/AddItemWidget";
import { Todo } from "../../components/list/ListTypes";
import TodoWrapper from "../../components/list/TodoWrapper";
import uuid from 'uuid-random';

interface Props {
    initialTodos: Todo[]
}

const TodoListPage = ({initialTodos}:Props) => {

    const initialTodosFromProps:Todo[] = initialTodos
    const [todos, setTodos] = useState<Todo[]>(initialTodosFromProps);

    const getUncompletedTodos = () => {
        return todos.filter(todo => !todo.isCompleted)
    }
    const getCompletedTodos = () => {
        return todos.filter(todo => todo.isCompleted)
    }
    const addNewTodo = (label:string) => {
        setTodos(actualTodos => [{id:uuid(), isCompleted:false, label:label}, ...actualTodos])
    }

    const handleCheckboxChange = (e:ChangeEvent<HTMLInputElement>, id:string) => {
        const isChecked = e.target.checked;
        let newArr = [...todos];
        const indexOfItem = newArr.map(el => el.id).indexOf(id)
        newArr[indexOfItem] = {...newArr[indexOfItem],isCompleted: isChecked}
        setTodos(newArr);
    }

    return(
        <div className="bg-primary min-h-screen">
            <AddItemWidget addNewTodo={addNewTodo}/>
            <TodoWrapper todos={getUncompletedTodos()} handleCheckboxChange={handleCheckboxChange} category="To-do"/>
            <TodoWrapper todos={getCompletedTodos()} handleCheckboxChange={handleCheckboxChange} category="Completed"/>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    /* const resAgents = await fetch("https://valorant-api.com/v1/agents");
    const agentsDataFetch: AgentsFetchType = await resAgents.json();
    const agentsName: string[] = agentsDataFetch.data.map((agent) => {
        return agent.displayName
    }); */
    const initialTodos:Todo[] = [{id:'1', isCompleted:false, label:"Todo1"},{id:'2', isCompleted:true, label:"Todo2"},{id:'3', isCompleted:false, label:"Todo3"}]

    return {
      props: { initialTodos }, // will be passed to the page component as props
    };
  };

export default TodoListPage;