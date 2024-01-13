"use server";

import prisma from "@/lib/primsa";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const toggleTodo = async (id: string, complete: boolean): Promise<Todo> => {
  const todo = await prisma.todo.findFirst({ where: { id } });

  if (!todo) {
    throw `Todo con id ${id} no encontrado`;
  }

  const updateTodo = await prisma.todo.update({
    where: { id },
    data: { complete },
  });

  revalidatePath("/dashboard/server-todos");
  return updateTodo;
};

export const createTodo = async (description: string) => {
  // :Promise<Todo | {}>
  try {
    const todo = await prisma.todo.create({ data: { description } });
    revalidatePath("/dashboard/server-todos");

    return todo;
  } catch (error) {
    return { message: "Error creando el todo" };
  }
};

export const deleteCompletedTodo = async () => {
  try {
    const todo = await prisma.todo.deleteMany({ where: { complete: true } });
    revalidatePath("dashboard/server-todos");
    return todo;
  } catch (error) {
    return { message: "Error eliminando los todos completados" };
  }
};
