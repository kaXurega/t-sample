import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: '/',
};

export default function middleware(req: NextRequest): NextResponse {
  const basicAuth = req.headers.get('authorization');
  const url = req.nextUrl;

  if (basicAuth) {
    const auth = basicAuth.split(' ')[1];
    const [user, pwd] = atob(auth).split(':');

    if (user === '4dmin' && pwd === 'testpwd123') {
      return NextResponse.next();
    }
  }

  url.pathname = '/api/auth';
  return NextResponse.rewrite(url);
}
