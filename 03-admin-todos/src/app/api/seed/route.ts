import prisma from "@/lib/primsa";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  await prisma.todo.deleteMany(); // dele * from todo
  await prisma.todo.createMany({
    data: [
      {
        description: "description 1",
      },
      {
        description: "description 2",
        complete: true,
      },
      {
        description: "description 3",
      },
    ],
  });

  // const todo = await prisma.todo.create({
  //   data: { description: "Piedra del alma", complete: true },
  // });
  // console.log(todo);
  return NextResponse.json({
    message: "seed",
  });
}
