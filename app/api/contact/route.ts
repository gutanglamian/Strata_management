import { NextResponse } from 'next/server';

export const runtime = 'edge';

// Handle GET requests (query params)
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get('name');
  const email = searchParams.get('email');
  return NextResponse.json({ method: 'GET', name, email });
}

// Handle POST requests (form data or JSON)
export async function POST(req: Request) {
  let name = '';
  let email = '';
  const contentType = req.headers.get('content-type') || '';

  if (contentType.includes('application/json')) {
    const body = await req.json();
    name = body.name;
    email = body.email;
  } else if (contentType.includes('application/x-www-form-urlencoded')) {
    const form = await req.formData();
    name = form.get('name') as string;
    email = form.get('email') as string;
  }

  // Example: redirect
  return NextResponse.redirect(new URL('/thank-you', req.url), 302);

} 