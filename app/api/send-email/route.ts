import { Resend } from 'resend';
import { WaitlistEmailTemplate } from '@/components/email-template';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function saveWaitlistContact(email: string, segmentId: string) {
  const existingContact = await resend.contacts.get({ email });

  if (existingContact.data) {
    const { error } = await resend.contacts.segments.add({
      email,
      segmentId,
    });
    return error;
  }

  if (existingContact.error?.statusCode !== 404) {
    return existingContact.error;
  }

  const { error } = await resend.contacts.create({
    email,
    unsubscribed: false,
    segments: [{ id: segmentId }],
  });
  return error;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
    const segmentId = process.env.RESEND_WAITLIST_SEGMENT_ID;

    if (!emailPattern.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    if (!segmentId) {
      console.error('RESEND_WAITLIST_SEGMENT_ID is not configured.');
      return NextResponse.json({ error: 'Waitlist signup is not configured.' }, { status: 500 });
    }

    const contactError = await saveWaitlistContact(email, segmentId);

    if (contactError) {
      console.error('Resend contact error:', contactError);
      return NextResponse.json({ error: 'We could not save your signup.' }, { status: 502 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Inquiryon <noreply@mail.inquiryon.com>',
      to: email,
      replyTo: 'team@inquiryon.com',
      subject: 'You’re on the AMP early access list',
      react: WaitlistEmailTemplate(),
    });

    if (error) {
      console.error('Resend confirmation error:', error);
      return NextResponse.json({ error: 'Your signup was saved, but the confirmation email could not be sent.' }, { status: 502 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Waitlist signup error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
