import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => "todos",
    }),
    addTodo: builder.mutation({
      query: (newTodo) => ({
        url: "todos",
        method: "POST",
        title: newTodo,
      }),
    }),
    // updateTodo: builder.mutation({
    //   query: ({ bool }) => ({
    //     url: "todos",
    //     method: "PATCH",
    //     completed: bool,
    //   }),
    // }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation } = todosApi;
export default todosApi;
