import { Resend } from 'resend';
import { SupportConfirmationEmailTemplate, SupportNotificationEmailTemplate } from '@/components/email-template';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const supportEmail = 'team@inquiryon.com';
const fromEmail = 'Inquiryon <contact@mail.inquiryon.com>';
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';

    if (!emailPattern.test(email) || !message || message.length > 5000) {
      return NextResponse.json({ error: 'Please enter a valid email and message.' }, { status: 400 });
    }

    const { error: notificationError } = await resend.emails.send({
      from: fromEmail,
      to: supportEmail,
      replyTo: email,
      subject: `New Inquiry from ${email}`,
      react: SupportNotificationEmailTemplate({ email, message }),
    });

    if (notificationError) {
      console.error('Resend notification error:', notificationError);
      return NextResponse.json({ error: 'We could not send your message.' }, { status: 502 });
    }

    const { error: confirmationError } = await resend.emails.send({
      from: fromEmail,
      to: email,
      replyTo: supportEmail,
      subject: 'We received your Inquiryon inquiry',
      react: SupportConfirmationEmailTemplate(),
    });

    if (confirmationError) console.error('Resend confirmation error:', confirmationError);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact email error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
