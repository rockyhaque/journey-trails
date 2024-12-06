import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const url = req.nextUrl;

  // If token doesn't exist, redirect to unauthorized route
  if (!token) {
    return NextResponse.redirect(new URL("/api/unauthorized", req.url));
  }

  const { role, email } = token;

  // Public routes (accessible by anyone)
  if (
    (url.pathname.startsWith("/api/all-places") && req.method === "GET") || // Allow tourists to view all places
    (url.pathname === "/api/users" && req.method === "POST") // Allow public access to POST /api/users
  ) {
    return NextResponse.next();
  }

  // Admin-only routes (e.g., Add Place, Manage Users, All Bookings, Destinations)
  if (role === "admin") {
    // Admin routes
    if (
      (url.pathname === "/api/add-place" && req.method === "POST") || // Admin can add place
      (url.pathname === "/api/manage-users" && req.method === "GET") || // Admin can manage users
      (url.pathname === "/api/all-bookings" && req.method === "GET") || // Admin can view all bookings
      (url.pathname === "/api/destinations" && req.method === "GET") // Admin can view destinations
    ) {
      return NextResponse.next();
    }
  }

  // Tourist-only routes (e.g., My Wishlist, My Bookings)
  if (role === "tourist") {
    // Tourist routes
    if (
      (url.pathname === "/api/my-wishlist" && req.method === "GET") || // Tourist can view their wishlist
      (url.pathname === "/api/my-bookings" && req.method === "GET") || // Tourist can view their bookings
      (url.pathname === "/api/all-bookings" && req.method === "GET") // Tourist can view all their bookings
    ) {
      return NextResponse.next();
    }
  }

  // Email-specific access (e.g., viewing own bookings)
  if (url.pathname.startsWith("/api/my-bookings/") && req.method === "GET") {
    const routeEmail = url.pathname.split("/").pop(); // Extract email from URL
    if (email === routeEmail) return NextResponse.next(); // Allow access if the email matches
  }

  // Deny access for other routes (Unauthorized access)
  return NextResponse.redirect(new URL("/api/unauthorized", req.url));
}

// Config to specify the routes where the middleware should be applied
export const config = {
  matcher: "/api/:path*", // Apply to all routes under /api/
};
