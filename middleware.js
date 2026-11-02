import { NextResponse } from 'next/server';

const GONE_PATTERNS = [
  /^\/810(\/.*)?$/i,
  /^\/1153-2(\/.*)?$/i,
  /^\/author(\/.*)?$/i,
  /^\/category(\/.*)?$/i,
  /^\/news(\/.*)?$/i,
  /^\/faqs?(\/.*)?$/i,
  /^\/freie-stellen(\/.*)?$/i,
  /^\/grippesaison-gesundheitstipps-fur-den-winter(\/.*)?$/i,
  /^\/comments\/feed(\/.*)?$/i,
  /^\/feed(\/.*)?$/i,
  /^\/home\/feed(\/.*)?$/i,
  /^\/search\/.*\/feed(\/.*)?$/i,
  /^\/wp-(content|admin|includes)(\/.*)?$/i,
  /^\/wp-.*\.php$/i,
  /^\/xmlrpc\.php$/i,
];

export function middleware(request) {
  const { pathname, searchParams } = request.nextUrl;

  // 1. Return HTTP 410 Gone for historical WordPress URLs that have no replacement
  for (const pattern of GONE_PATTERNS) {
    if (pattern.test(pathname)) {
      return new NextResponse(null, {
        status: 410,
        statusText: 'Gone',
        headers: {
          'X-Robots-Tag': 'noindex, nofollow',
          'Cache-Control': 'public, max-age=604800, stale-while-revalidate=86400',
        },
      });
    }
  }

  // 2. Strip WordPress search query params (?s=...)
  if (searchParams.has('s')) {
    const url = request.nextUrl.clone();
    url.searchParams.delete('s');
    url.pathname = '/';
    return NextResponse.redirect(url, 301);
  }

  // 3. Strip WordPress pagination query params (?_page=2)
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
