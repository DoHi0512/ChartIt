import { NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
  if (
    !req.cookies.has("sb-gduetmogfvqnhdmmsvst-auth-token-code-verifier") &&
    !req.cookies.has("sb-gduetmogfvqnhdmmsvst-auth-token.0")
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  return NextResponse.next();
};

export const config = {
  matcher: ["/list/:path*", "/draw/:path*"],
};
