"use client";
import { Todo } from "@prisma/client";
import { TodoItem } from "@/todos/components";
import * as todosApi from "@/todos/helpers/todos";
import { useRouter } from "next/navigation";

interface Props {
  todos?: Todo[];
}

export const TodosGrid = ({ todos = [] }: Props) => {
  const router = useRouter();

  const toggleTodo = async (id: string, complete: boolean) => {
    const updateTodo = await todosApi.updateTodo(id, complete);

    router.refresh();
  };

  return (
    <div className="grid sm:grid-cols-3 gap-2">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
};
