'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input'; // adjust if needed
import { Button } from '@/components/ui/button'; // adjust if needed

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleEmailSignup = async () => {
    if (!email) {
      setError('Please enter your email.');
      return;
    }

    setLoading(true);
    setError('');
    setSent(false);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.error || 'We could not save your signup.');
      }
      setSent(true);
      setEmail('');
    } catch (err) {
      console.error('Error sending email:', err);
      setError(err instanceof Error ? err.message : 'We could not save your signup.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col sm:flex-row gap-4 max-w-md">
        <Input
          id="email-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          variant="blue"
          size="lg"
          className="text-lg font-semibold"
          onClick={handleEmailSignup}
          disabled={loading}
        >
          {loading ? 'Sending...' : sent ? 'Sent!' : 'Request Early Access'}
        </Button>
      </div>
      <p className="text-input-text px-2 text-xs">
        Join the AMP early access list.
      </p>
      <div aria-live="polite">
        {sent && <p className="px-2 text-sm text-primary">You&apos;re on the list. Check your inbox.</p>}
        {error && <p className="px-2 text-sm text-destructive">{error}</p>}
      </div>
    </div>
  );
}
