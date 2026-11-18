import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const CENTRAL_INBOX = "magkk.muizomoyele@gmail.com";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, category, subject, message, honeypot } = body;

    // 1. Spam Protection (Honeypot trap)
    if (honeypot) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 2. Server-Side Input Validation
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { error: "Please provide a complete message or enquiry brief." },
        { status: 400 }
      );
    }

    const cleanName = (name || "Website Visitor").toString().slice(0, 120);
    const cleanCategory = (category || "General Enquiries")
      .toString()
      .slice(0, 100);
    const finalSubject =
      subject ||
      `[Nexora Group - ${cleanCategory}] New Dispatch from ${cleanName}`;

    // 3. Resend Email Dispatch
    const { data, error } = await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL ||
        "Nexora Group <onboarding@resend.dev>",
      to: [CENTRAL_INBOX],
      replyTo: email,
      subject: finalSubject,
      html: `
        <div style="font-family: sans-serif; background: #FFFDF5; padding: 24px; border: 2px solid #1E1B2E; border-radius: 16px; color: #1E1B2E;">
          <div style="display: inline-block; background: #F7D147; border: 2px solid #1E1B2E; padding: 4px 12px; border-radius: 999px; font-size: 12px; font-weight: 800; text-transform: uppercase;">
            ${cleanCategory}
          </div>
          <h2 style="margin-top: 16px; font-size: 20px; font-weight: 900;">${finalSubject}</h2>
          <p style="font-size: 14px;"><strong>Sender:</strong> ${cleanName}</p>
          <p style="font-size: 14px;"><strong>Reply-To Email:</strong> ${email}</p>
          <hr style="border: 0; border-top: 2px solid #1E1B2E; margin: 16px 0;" />
          <p style="font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Nexora API dispatch error:", err);
    return NextResponse.json(
      { error: "Internal server error while processing enquiry." },
      { status: 500 }
    );
  }
}