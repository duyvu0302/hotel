import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "@/lib/i18n/config";

function detectLocale(request: NextRequest): string {
  const acceptLang = request.headers.get("accept-language") ?? "";
  // Simple parse: check if "vi" appears as a primary or secondary tag
  const preferred = acceptLang.split(",")[0]?.split("-")[0]?.trim().toLowerCase();
  return locales.includes(preferred as (typeof locales)[number]) ? preferred : defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already starts with a known locale
  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );

  if (!hasLocale) {
    const locale = detectLocale(request);
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url, 307);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|image|icon\\.png|sitemap\\.xml|robots\\.txt|favicon\\.ico|.*\\..*).*)" ],
};
