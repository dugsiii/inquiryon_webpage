// /app/api/send-email/route.ts
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template'; // adjust if your path is different
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'Inquiryon Inc.<noreply@mail.inquiryon.com>', // use your verified domain
      to: [email],
      subject: 'Thanks for signing up!',
      react: EmailTemplate(),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
