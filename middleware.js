import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname, searchParams } = request.nextUrl;

  // Strip WordPress search query params (?s=...)
  if (searchParams.has('s')) {
    const url = request.nextUrl.clone();
    url.searchParams.delete('s');
    url.pathname = '/';
    return NextResponse.redirect(url, 301);
  }

  // Strip WordPress pagination query params (?_page=2)
  if (searchParams.has('_page')) {
    const url = request.nextUrl.clone();
    url.searchParams.delete('_page');
    url.pathname = '/';
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except static files and _next
    '/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png).*)',
  ],
};
