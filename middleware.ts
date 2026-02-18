import { type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'

export async function middleware(request: NextRequest) {
  return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Only run middleware on routes that need auth:
     * - /admin (admin dashboard)
     * - /account (user account)
     * - /checkout (requires login)
     * - /order-tracking (requires login)
     * Public pages (home, pro, labs, maker, etc.) are excluded
     * to avoid MIDDLEWARE_INVOCATION_TIMEOUT on Vercel.
     */
    '/admin/:path*',
    '/account/:path*',
    '/checkout/:path*',
    '/order-tracking/:path*',
  ],
}
