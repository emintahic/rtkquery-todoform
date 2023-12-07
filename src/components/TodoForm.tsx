import { useAddTodoMutation } from "../features/apiSlice";
import { useState } from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

function TodoForm() {
  const [newTitle, setNewTitle] = useState("");
  const [addTodo] = useAddTodoMutation();

  return (
    <div>
      <form
        className="bg-purple-500 rounded-lg p-4 w-[70%] mx-auto my-5"
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(newTitle);
          setNewTitle("");
        }}
      >
        <div className="flex flex-col max-w-44 gap-3 items-center">
          <input
            type="text"
            value={newTitle}
            autoFocus
            placeholder="Type new TODO"
            className=" w-44 outline-none placeholder-emerald-500/50  bg-white text-center   text-purple-500 ring-1 ring-purple-300 focus:ring-purple-400  rounded-3xl p-1"
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button
            className="px-2 py-1 rounded-xl bg-emerald-400 text-white w-24"
            type="submit"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
