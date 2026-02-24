import { NextResponse } from "next/server";

const PROTECTED_ROUTES = ["/thank-you"];
const ACCESS_COOKIE = "aa_contact_submitted";

function requiresSubmissionCookie(pathname) {
  return PROTECTED_ROUTES.some((route) => pathname === route || pathname.startsWith(`${route}/`));
}

export function proxy(request) {
  const { pathname } = request.nextUrl;

  if (!requiresSubmissionCookie(pathname)) {
    return NextResponse.next();
  }

  const hasAccessCookie = Boolean(request.cookies.get(ACCESS_COOKIE)?.value);
  if (hasAccessCookie) {
    return NextResponse.next();
  }

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = "/contact";
  redirectUrl.searchParams.set("redirected", "thank-you-guard");

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ["/thank-you/:path*"],
};
