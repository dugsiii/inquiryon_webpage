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
  const [error, setError] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleContact = async () => {
    if (!email || !message) {
      setError('Please enter your email and a message.');
      return;
    }

    setLoading(true);
    setError('');
    setSent(false);
    try {
      const response = await fetch('/api/contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      });
      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.error || 'We could not send your message.');
      }
      setSent(true);
      setEmail('');
      setMessage('');
    } catch (err) {
      console.error('Error sending message:', err);
      setError(err instanceof Error ? err.message : 'We could not send your message.');
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
      <div aria-live="polite">
        {sent && <p className="text-sm text-primary">Thanks—we&apos;ll be in touch soon.</p>}
        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>
      <p>
        Or email us directly at{' '}
        <a className="text-primary hover:text-hover" href="mailto:team@inquiryon.com">
          team@inquiryon.com
        </a>{' '}
        <button type="button" className="cursor-pointer text-sm text-dark-grey hover:text-hover" onClick={() => {
          navigator.clipboard.writeText('team@inquiryon.com');
          setCopiedEmail(true);
          setTimeout(() => setCopiedEmail(false), 2000);
        }}>
          ({copiedEmail ? 'Copied' : 'copy'})
        </button>
      </p>
    </div>
  );
}
