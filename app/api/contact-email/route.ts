/* eslint-disable @typescript-eslint/no-unused-vars */
// /app/api/contact-email/route.ts
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email, message } = await req.json();

    if (!email || !message) {
      console.error('email: ', email);
      console.error('message: ', message);
      return NextResponse.json({ error: 'Missing email or message' }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: 'Inquiryon Inc.<contact@mail.inquiryon.com>',
      to: 'team@inquiryon.com',
      subject: `New Inquiry from ${email}`,
      html: `
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error); 
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
