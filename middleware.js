import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const url = req.nextUrl;
  // If token doesn't exist, block access to restricted routes
  if (!token) {
    return NextResponse.rewrite(new URL("/api/unauthorized", req.url));
  }

  const { role, email } = token;

  // Public routes (accessible by anyone)
  if (url.pathname === "/api/users" && req.method === "POST")
    return NextResponse.next();
  if (url.pathname.startsWith("/api/all-places") && req.method === "GET")
    return NextResponse.next();

  // Admin-only routes
  const isAdmin = role === "admin";
  if (
    ["/api/users", "/api/all-places"].some((route) =>
      url.pathname.startsWith(route)
    ) &&
    ["POST", "PATCH", "DELETE"].includes(req.method)
  ) {
    if (isAdmin) return NextResponse.next();
  }

  // Tourist-specific routes
  const isTourist = role === "tourist";
  if (
    url.pathname === "/api/all-bookings" &&
    ["GET", "POST"].includes(req.method)
  ) {
    if (isTourist) return NextResponse.next();
  }

  if (
    url.pathname.startsWith("/api/all-bookings/") &&
    req.method === "DELETE"
  ) {
    if (isTourist) return NextResponse.next();
  }

  // Email-specific access
  if (url.pathname.startsWith("/api/all-bookings/") && req.method === "GET") {
    const routeEmail = url.pathname.split("/").pop(); // Extract email from URL
    if (email === routeEmail) return NextResponse.next();
  }

  // Deny by default
  return NextResponse.rewrite(new URL("/api/unauthorized", req.url));
}

export const config = {
  matcher: "/api/:path*",
};
