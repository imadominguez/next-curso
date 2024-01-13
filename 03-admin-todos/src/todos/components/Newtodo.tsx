"use client";

import { FormEvent, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { createTodo, deleteCompletedTodo } from "../actions/todo-actions";

import { toast } from "sonner";

export const NewTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (description.trim().length === 0) return;
    const createTodoPromise = async () => {
      await createTodo(description);
    };

    setDescription("");
    toast.promise(createTodoPromise, {
      loading: "Loading...",
      success: (data) => {
        return `toast has been added`;
      },
      error: "Error",
    });
  };

  return (
    <form onSubmit={onSubmit} className="flex w-full">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="-ml-10 w-6/12 rounded-lg border-2 border-gray-200 py-2 pl-3 pr-3 outline-none transition-all focus:border-sky-500"
        placeholder="¿Qué necesita ser hecho?"
      />

      <button
        type="submit"
        className="ml-2 flex items-center justify-center rounded bg-sky-500 p-2 text-white transition-all hover:bg-sky-700"
      >
        Crear
      </button>

      <span className="flex flex-1"></span>

      <button
        onClick={() => deleteCompletedTodo()}
        type="button"
        className="ml-2 flex items-center justify-center gap-x-3 rounded bg-red-400 p-2 text-white transition-all hover:bg-red-700"
      >
        <IoTrashOutline />
        Borrar completados
      </button>
    </form>
  );
};
