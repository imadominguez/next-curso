export const dynamic = "force-dynamic";
export const revalidate = 0;

import prisma from "@/lib/primsa";
import { NewTodo, TodosGrid } from "@/todos/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Listado de Todos - Server Actions",
  description: "RestTodosPage",
};
export default async function ServerTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-5">Server Actions</h1>

      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>

      <TodosGrid todos={todos} />
    </div>
  );
}
