interface Props{
    label: string,
}

const TodoItem = ({label}:Props) => {
return(
    <div className="flex flex-row justify-between w-5/6 mx-auto my-0 bg-secondary p-3 rounded-lg text-text-primary">
        <input type="checkbox"/>
        <label className="basis-1/2 text-center">{label}</label>
        <div className="flex flex-row text-text-secondary">
            <img src="/trash.svg" alt="trash button to delete"/>
        </div>
    </div>
)
}

export default TodoItem;