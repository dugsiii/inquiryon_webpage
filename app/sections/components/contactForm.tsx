'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleContact = async () => {
    if (!email || !message) return;

    setLoading(true);
    try {
      await fetch('/api/contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setSent(true);
      setEmail('');
      setMessage('');
    } catch (err) {
      console.error('Error sending message:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full h-full max-w-sm">
      <div className="flex flex-col w-full gap-2">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Textarea
          placeholder="Questions?"
          className="h-32"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <Button
        variant="blue"
        size="lg"
        className="w-fit text-lg font-semibold"
        onClick={handleContact}
        disabled={loading}
      >
        {loading ? 'Sending...' : sent ? 'Sent!' : 'Inquire!'}
      </Button>
      <p>
        Or shoot us an email:{' '}
        <button
          type="button"
          className="w-fit cursor-pointer text-primary hover:text-hover"
          onClick={() => {
            navigator.clipboard.writeText('team@inquiryon.com');
            setCopiedEmail(true);
            setTimeout(() => setCopiedEmail(false), 2000);
          }}
        >
          {copiedEmail ? 'Email Copied!' : 'Copy Email'}
        </button>
      </p>
    </div>
  );
}
