"use client";
import { Todo } from "@prisma/client";
import { TodoItem } from "@/todos/components";

import { toggleTodo } from "../actions/todo-actions";

interface Props {
  todos?: Todo[];
}

export const TodosGrid = ({ todos = [] }: Props) => {
  return (
    <div className="grid sm:grid-cols-3 gap-2">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
};
