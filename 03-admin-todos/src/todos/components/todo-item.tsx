"use client";
import { startTransition, useOptimistic } from "react";
import { Todo } from "@prisma/client";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";
import { toast } from "sonner";
import styles from "./todoItem.module.css";

interface Props {
  todo: Todo;
  // TODO: Acciones que quiero llamar
  toggleTodo: (id: string, complete: boolean) => Promise<Todo | void>;
}

export const TodoItem = ({ todo, toggleTodo }: Props) => {
  const [todoOptimistic, toggleTodoOptimistic] = useOptimistic(
    todo,
    (state, newCompleteValue: boolean) => ({
      ...state,
      complete: newCompleteValue,
    }),
  );

  const onToggleTodo = async () => {
    try {
      startTransition(() => toggleTodoOptimistic(!todoOptimistic.complete));
      const toggleTodoPromise = async () => {
        await toggleTodo(todoOptimistic.id, !todoOptimistic.complete);
      };
      toast.promise(toggleTodoPromise(), {
        loading: "Cargando...",
        success: "Todo actualizado",
        error: "Error al actualizar todo",
      });
    } catch (error) {
      startTransition(() => toggleTodoOptimistic(!todoOptimistic.complete));
    }
  };

  return (
    <div
      className={todoOptimistic.complete ? styles.todoDone : styles.todoPending}
    >
      <div className="flex flex-col items-center justify-start gap-4 sm:flex-row">
        <div
          onClick={() => onToggleTodo()}
          className={`flex cursor-pointer rounded-md p-2 ${
            todoOptimistic.complete ? "bg-blue-100" : "bg-red-100"
          } bg-blue-100 hover:bg-opacity-60`}
        >
          {todoOptimistic.complete ? (
            <IoCheckboxOutline size={20} />
          ) : (
            <IoSquareOutline size={20} />
          )}
        </div>

        <div className="text-center sm:text-left">
          {todoOptimistic.description}
        </div>
      </div>
    </div>
  );
};
