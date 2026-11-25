import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in your name, email, and message." },
        { status: 400 }
      );
    }

    const receiver = process.env.CONTACT_RECEIVER_EMAIL;
    if (!receiver || !process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service is not configured on the server yet." },
        { status: 500 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Frontiers Contact <onboarding@resend.dev>",
      to: [receiver],
      replyTo: email,
      subject: `New Frontiers Inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong while sending your message." },
      { status: 500 }
    );
  }
}