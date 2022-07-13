import { useState } from "react";

interface Props {
  addNewTodo: (label: string) => void;
}

const AddItemWidget = ({ addNewTodo }: Props) => {
  const [todoLabel, setTodoLabel] = useState("");
  const handleClick = () => {
    addNewTodo(todoLabel);
    setTodoLabel("");
  };

  return (
    <div className="flex w-11/12 mx-auto my-0 py-4 items-center">
      <input
        autoComplete="off"
        type="text"
        name="todo_label"
        value={todoLabel}
        onChange={(e) => setTodoLabel(e.target.value)}
        placeholder="Add item"
        className="h-5/6 w-4/5 rounded-full"
      />
      <button
        onClick={handleClick}
        className="rounded-full bg-text-secondary w-10 h-10 align-middle ml-auto"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="bi bi-plus fill-text-primary"
          viewBox="0 0 16 16"
        >
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
      </button>
    </div>
  );
};

export default AddItemWidget;
