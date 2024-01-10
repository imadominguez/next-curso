import prisma from "@/lib/primsa";
import { NextResponse, NextRequest } from "next/server";

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

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json(body);
}
