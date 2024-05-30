import WelcomeTemplate from "@/emails/welcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "liuyuftd@gmail.com",
    subject: "Hello World",
    react: <WelcomeTemplate />,
  });

  return NextResponse.json({ success: "Email Sent Successfully" });
}
