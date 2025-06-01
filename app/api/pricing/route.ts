import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
  return NextResponse.json({ price: "Monthly fee is $200" });
}