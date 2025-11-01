import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/ir") {
    return NextResponse.redirect(
      "https://netorg19852980-my.sharepoint.com/:f:/g/personal/meet_xenosystems_xyz/EjwYZ6UoaMhOmEWS5pB9vVgBK24z2vQoHjaQutoL9o-D-g?e=I5yHJl",
      {
        status: 307,
      },
    )
  }
}

export const config = {
  matcher: "/ir",
}
