import prisma from "@/lib/primsa";
import { NextResponse, NextRequest } from "next/server";
import * as yup from "yup";

// * GET /todos
export async function GET(request: Request) {
  // * skip = offset
  // * take = limit
  const { searchParams } = new URL(request.url);
  const take = Number(searchParams.get("limit") ?? "10");
  const skip = Number(searchParams.get("offset") ?? "0");

  // Validaciones de parametros --------------
  if (isNaN(take))
    return NextResponse.json(
      { message: "Take debe ser un numero" },
      { status: 400 }
    );

  if (isNaN(skip))
    return NextResponse.json(
      { message: "Skip debe ser un numero" },
      { status: 400 }
    );

  // ========================================
  const todos = await prisma.todo.findMany({
    take: take,
    skip: skip,
  });

  return NextResponse.json(todos);
}

const postSchema = yup.object({
  description: yup.string().required(),
  complete: yup.boolean().optional().default(false),
});

// * POST /todos
export async function POST(request: Request) {
  try {
    const body = await postSchema.validate(await request.json());

    const todo = await prisma.todo.create({ data: body });

    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
