// import { useGetTodosQuery } from "./features/apiSlice";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

// interface Todo {
//   id: number;
//   title: string;
// }

function App() {
  // const { data: todos } = useGetTodosQuery();
  // console.log(
  //   todos.map((todo) => {
  //     <h1>{todo.title}</h1>;
  //   })
  // );

  return (
    <>
      <div>
        <TodoForm />
        <TodoList />
      </div>
    </>
  );
}

export default App;
