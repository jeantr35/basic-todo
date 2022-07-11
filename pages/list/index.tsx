import { GetServerSideProps } from "next/types";
import TodoItem from "../../components/list/TodoItem";

interface Props {
    label: string
}

const TodoListPage = ({label}:Props) => {
    return(
        <div className="bg-primary min-h-screen">
            <TodoItem label={label}></TodoItem>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    /* const resAgents = await fetch("https://valorant-api.com/v1/agents");
    const agentsDataFetch: AgentsFetchType = await resAgents.json();
    const agentsName: string[] = agentsDataFetch.data.map((agent) => {
        return agent.displayName
    }); */

    return {
      props: { label:"Soy el server side" }, // will be passed to the page component as props
    };
  };

export default TodoListPage;