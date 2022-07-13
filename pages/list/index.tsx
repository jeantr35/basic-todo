import { GetServerSideProps } from "next/types";
import { Todo } from "../../components/list/ListTypes";
import TodoWrapper from "../../components/list/TodoWrapper";

interface Props {
    todos: Todo[]
}

const TodoListPage = ({todos}:Props) => {
    return(
        <div className="bg-primary min-h-screen">
            <TodoWrapper todos={todos} category="To-do"/>
            <TodoWrapper todos={todos} category="Completed"/>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    /* const resAgents = await fetch("https://valorant-api.com/v1/agents");
    const agentsDataFetch: AgentsFetchType = await resAgents.json();
    const agentsName: string[] = agentsDataFetch.data.map((agent) => {
        return agent.displayName
    }); */
    const todos:Todo[] = [{id:'1', isCompleted:false, label:"Todo1"},{id:'2', isCompleted:false, label:"Todo2"},{id:'3', isCompleted:false, label:"Todo3"}]

    return {
      props: { todos }, // will be passed to the page component as props
    };
  };

export default TodoListPage;