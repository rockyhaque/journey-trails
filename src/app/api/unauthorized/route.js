export async function GET(req) {
  return new Response(JSON.stringify({ message: "Access denied" }), {
    status: 403,
    headers: { "Content-Type": "application/json" },
  });
}
