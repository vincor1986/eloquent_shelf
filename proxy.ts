import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  const country =
    req.headers.get("x-vercel-ip-country") || "GB";

  const res = NextResponse.next();
  res.cookies.set("user-region", country, { path: "/" });

  return res;
}
