import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // Meta webhook verification
  const url = new URL(req.url);
  const mode = url.searchParams.get("hub.mode");
  const token = url.searchParams.get("hub.verify_token");
  const challenge = url.searchParams.get("hub.challenge");

  if (mode === "subscribe" && token === process.env.META_VERIFY_TOKEN) {
    return new NextResponse(challenge, { status: 200 });
  } else {
    return new NextResponse("Forbidden", { status: 403 });
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("📩 Webhook event:", JSON.stringify(body, null, 2));

  // For now, just acknowledge
  return new NextResponse("EVENT_RECEIVED", { status: 200 });
}
