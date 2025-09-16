'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input'; // adjust if needed
import { Button } from '@/components/ui/button'; // adjust if needed

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleEmailSignup = async () => {
    if (!email) return;

    setLoading(true);
    try {
      await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setSent(true);
    } catch (err) {
      console.error('Error sending email:', err);
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
          {loading ? 'Sending...' : sent ? 'Sent!' : 'Build With Trust'}
        </Button>
      </div>
      <p className="text-input-text px-2 text-xs">
        *Early access is limited—claim your spot now.
      </p>
    </div>
  );
}
