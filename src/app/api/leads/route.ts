import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { name, email, organisation, role, interest, message } = body;

  if (!name || !email || !interest) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // TODO: integrate CRM (HubSpot / Zoho) — send lead data here
  // Example HubSpot: POST https://api.hsforms.com/submissions/v3/integration/submit/{portalId}/{formGuid}
  // Example Zoho: POST https://crm.zoho.in/crm/v2/Leads with Authorization header
  console.log("[civisense lead]", { name, email, organisation, role, interest, message, ts: new Date().toISOString() });

  return NextResponse.json({ success: true }, { status: 200 });
}
