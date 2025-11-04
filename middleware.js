import { NextResponse } from "next/server";

export function middleware(req) {
  const country =
    req.geo?.country || req.headers.get("x-vercel-ip-country") || "GB";

  const res = NextResponse.next();
  res.cookies.set("user-region", country, { path: "/" });

  return res;
}
