import createIntlMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  const locales = ["pl", "en"];
  const defaultLocale = "pl";
  const pathnames = {
    "/": "/",
    "/forgot-password": {
      en: "/forgot-password",
      pl: "/zapomniales-haslo",
    },
    "/login": {
      en: "/login",
      pl: "/logowanie",
    },
    "/registration": {
      en: "/registration",
      pl: "/rejestracja",
    },
    "/reset-password": {
      en: "/reset-password",
      pl: "/resetuj-haslo",
    },
    "/cart": {
      en: "/cart",
      pl: "/koszyk",
    },
    "/search": {
      en: "/search",
      pl: "/wyszukaj",
    },
    "/favourites": {
      en: "/favourites",
      pl: "/ulubione",
    },
    "/account/settings": {
      en: "/account/settings",
      pl: "/konto/ustawienia",
    },
    "/account/edit-profile": {
      en: "/account/edit-profile",
      pl: "/konto/edytuj-profil",
    },
    "/account/edit-profile/my-addresses": {
      en: "/account/edit-profile/my-addresses",
      pl: "/konto/edytuj-profil/moje-adresy",
    },
  };

  const pathname = request.nextUrl.pathname;
  console.log(pathname);
  // HANDLING ADMIN PANEL ROUTES
  if (pathname.startsWith("/admin/")) {
    // admin should be authorized and redirrected to login page if was not
    return NextResponse.next();
  }

  // HANDLING LOCALIZED ROUTES
  const handleI18nRouting = createIntlMiddleware({
    locales,
    defaultLocale,
    pathnames,
  });
  const response = handleI18nRouting(request);

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
