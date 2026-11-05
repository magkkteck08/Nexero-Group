// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, organization, email, phone, category, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromAddress =
      process.env.RESEND_FROM_EMAIL || "info@nexora-group.cv";
    const receiverInbox =
      process.env.CONTACT_INBOX_EMAIL || "info@nexora-group.cv";

    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Please add RESEND_API_KEY to your environment variables.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    // Map the chosen desk to its official corporate alias for reference
    const deskLabelMap: Record<string, string> = {
      "General Enquiry": "General Enquiries Desk (info@nexora-group.cv)",
      "Partnership & Commercial":
        "Partnerships Desk (partnerships@nexora-group.cv)",
      "Investor Relations": "Founder & Executive Office (founder@nexora-group.cv)",
      "Become A Legend (Game Investment)":
        "Gaming R&D & Seed Desk (founder@nexora-group.cv)",
      "Product / Technical Support":
        "Technical Support Desk (support@nexora-group.cv)",
    };

    const routedDesk = deskLabelMap[category] || "General Enquiries Desk";

    // 1. Deliver Enquiry to Your Private Receiver Inbox
    const internalEmailPromise = resend.emails.send({
      from: `Nexora Group Portal <${fromAddress}>`,
      to: [receiverInbox],
      replyTo: email,
      subject: `[${category || "Corporate Enquiry"}] from ${name}${
        organization ? ` — ${organization}` : ""
      }`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; background: #09090b; color: #f4f4f5; padding: 32px; border-radius: 12px; border: 1px solid #27272a;">
          <p style="color: #f59e0b; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 8px 0;">
            NEXORA GROUP • INCOMING DESK ROUTING
          </p>
          <h2 style="margin: 0 0 6px 0; color: #ffffff; font-size: 22px;">
            ${category || "General Enquiry"}
          </h2>
          <p style="margin: 0 0 24px 0; color: #a1a1aa; font-size: 13px;">
            Routed via: <strong style="color: #fbbf24;">${routedDesk}</strong>
          </p>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #a1a1aa; width: 140px;"><strong>Sender Name:</strong></td>
              <td style="padding: 8px 0; color: #ffffff;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #a1a1aa;"><strong>Organization:</strong></td>
              <td style="padding: 8px 0; color: #ffffff;">${organization || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #a1a1aa;"><strong>Reply-To Email:</strong></td>
              <td style="padding: 8px 0; color: #f59e0b;"><a href="mailto:${email}" style="color: #f59e0b; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #a1a1aa;"><strong>Phone / WhatsApp:</strong></td>
              <td style="padding: 8px 0; color: #ffffff;">${phone || "Not provided"}</td>
            </tr>
          </table>
          <div style="background: #18181b; border: 1px solid #27272a; padding: 20px; border-radius: 8px;">
            <p style="margin: 0 0 8px 0; color: #a1a1aa; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;"><strong>Message Content:</strong></p>
            <p style="margin: 0; color: #e4e4e7; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    // 2. Send Automatic Branded Acknowledgement to the Sender
    const acknowledgementPromise = resend.emails.send({
      from: `Nexora Group <${fromAddress}>`,
      to: [email],
      replyTo: fromAddress,
      subject: `We have received your correspondence — NEXORA GROUP`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #09090b; color: #f4f4f5; padding: 36px; border-radius: 12px; border: 1px solid #27272a;">
          <div style="margin-bottom: 24px;">
            <span style="display: inline-block; width: 10px; height: 10px; background: #f59e0b; margin-right: 8px; border-radius: 2px;"></span>
            <strong style="color: #ffffff; font-size: 18px; letter-spacing: 0.5px;">NEXORA GROUP</strong>
          </div>
          <h2 style="color: #ffffff; font-size: 20px; margin-bottom: 14px;">
            Thank you for contacting Nexora Group, ${name}.
          </h2>
          <p style="color: #d4d4d8; font-size: 14px; line-height: 1.6; margin-bottom: 16px;">
            This is an automated confirmation that your message has been routed to our <strong>${
              category || "Corporate Communications"
            }</strong> desk. A member of our executive or technical team will review your enquiry and respond shortly.
          </p>
          <div style="background: #18181b; border-left: 3px solid #f59e0b; padding: 16px; margin: 24px 0; font-size: 13px; color: #a1a1aa;">
            <strong style="color: #ffffff; display: block; margin-bottom: 6px;">Summary of your submission:</strong>
            "${message}"
          </div>
          <p style="color: #a1a1aa; font-size: 13px; line-height: 1.6; margin-top: 24px;">
            Warm regards,<br/>
            <strong style="color: #ffffff;">Office of Corporate Communications</strong><br/>
            NEXORA GROUP
          </p>
        </div>
      `,
    });

    const [internalResult] = await Promise.allSettled([
      internalEmailPromise,
      acknowledgementPromise,
    ]);

    if (internalResult.status === "rejected") {
      throw new Error("Failed to dispatch notification email.");
    }

    return NextResponse.json({
      success: true,
      message:
        "Your enquiry has been routed to the appropriate desk and a confirmation email has been sent to your inbox.",
    });
  } catch (error: unknown) {
    console.error("Resend Contact Error:", error);
    return NextResponse.json(
      {
        error:
          "Unable to send right now. Please try again or reach us via our direct WhatsApp channel.",
      },
      { status: 500 }
    );
  }
}