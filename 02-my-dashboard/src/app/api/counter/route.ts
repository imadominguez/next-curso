import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({
    count: 100,
    time: new Date().toISOString().slice(0, 10),
    url: request.url,
    method: request.method,
  });
}
