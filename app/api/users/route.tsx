import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      id: 12,
      name: "Hello",
    },
    {
      id: 12,
      name: "Hello",
    },
    {
      id: 12,
      name: "Hello",
    },
    {
      id: 12,
      name: "Hello",
    },
  ]);
}
