import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
  return NextResponse.json({ message: "Building data loaded" });
}

export async function POST(req: Request) {
  const body = await req.json();
  return NextResponse.json({ message: "New building added", data: body });
}