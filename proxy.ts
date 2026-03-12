import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  if (false) { // Replace with actual condition to determine if the request should be proxied
    return NextResponse.redirect(new URL('/', request.url))
  }
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/catalog(.*)"
  ]
};
