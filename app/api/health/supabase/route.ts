export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return Response.json({ status: "not_configured", service: "supabase" }, { status: 503, headers: { "Cache-Control": "no-store" } });
  try {
    const response = await fetch(`${url.replace(/\/$/, "")}/rest/v1/`, { headers: { apikey: key, Authorization: `Bearer ${key}` }, cache: "no-store" });
    return Response.json({ status: response.ok ? "connected" : "unavailable", service: "supabase", httpStatus: response.status }, { status: response.ok ? 200 : 502, headers: { "Cache-Control": "no-store" } });
  } catch {
    return Response.json({ status: "unavailable", service: "supabase" }, { status: 502, headers: { "Cache-Control": "no-store" } });
  }
}
