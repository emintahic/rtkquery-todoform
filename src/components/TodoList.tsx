import { useGetTodosQuery } from "../features/apiSlice";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

function TodoList() {
  const { data: todos = [] } = useGetTodosQuery();

  return (
    <div>
      <ul className="bg-purple-500 rounded-lg p-4 w-[70%] mx-auto h-96 overscroll-auto overflow-y-scroll scrollbar-hide">
        <h1 className="text-center text-3xl font-bold text-white">TODOS</h1>
        {todos.map((todo: Todo) => (
          <li
            key={todo.id}
            className="bg-white rounded-lg p-4 mt-10 w-[70%] mx-auto"
          >
            {todo.completed === true ? (
              <h1 className="line-through capitalize">{todo.title}</h1>
            ) : (
              <h1 className="capitalize">{todo.title}</h1>
            )}
            {/* <input
              type="checkbox"
              checked={todo.completed}
              onClick={() => {
                const newBool = !todo.completed;
                updateTodo({ bool: newBool });
                console.log(newBool);
              }}
            /> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
