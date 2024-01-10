import prisma from "@/lib/primsa";
import { NewTodo, TodosGrid } from "@/todos/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Listado de Todos",
  description: "RestTodosPage",
};
export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });

  return (
    <div className="p-6">
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </div>
  );
}
