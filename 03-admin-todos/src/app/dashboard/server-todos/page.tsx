export const dynamic = "force-dynamic";
export const revalidate = 0;

import { getUserServerSession } from "@/auth/actions/auth-action";
import prisma from "@/lib/primsa";
import { NewTodo, TodosGrid } from "@/todos/components";
import { Metadata } from "next";

import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Listado de Todos - Server Actions",
  description: "RestTodosPage",
};
export default async function ServerTodosPage() {
  const user = await getUserServerSession();
  if (!user) {
    redirect("/api/auth/signin");
  }
  const todos = await prisma.todo.findMany({
    where: { userId: user?.id },
    orderBy: { description: "asc" },
  });

  return (
    <div className="p-6">
      <h1 className="mb-5 text-3xl">Server Actions</h1>

      <div className="mx-5 mb-5 w-full px-3">
        <NewTodo />
      </div>

      <TodosGrid todos={todos} />
    </div>
  );
}
