import prisma from "@/lib/primsa";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";

export async function GET(request: Request) {
  await prisma.todo.deleteMany(); // dele * from todo
  await prisma.user.deleteMany();

  const user = await prisma.user.create({
    data: {
      email: "test1@gmail.com",
      password: bcrypt.hashSync("123456"),
      roles: ["client"],
      todos: {
        create: [
          { description: "Piedra del alma", complete: true },
          { description: "Piedra del infinito", complete: false },
          { description: "Piedra del tiempo", complete: false },
          { description: "Piedra del poder", complete: true },
          { description: "Piedra del espacio", complete: false },
          { description: "Piedra del amor", complete: false },
        ],
      },
    },
  });

  return NextResponse.json({
    message: "seed",
  });
}
