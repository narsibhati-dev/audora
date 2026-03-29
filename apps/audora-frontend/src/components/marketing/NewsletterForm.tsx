'use client';

import { useState } from 'react';
import { HashLoader } from 'react-spinners';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === 'loading') return;

    setStatus('loading');

    try {
      // TODO: wire up real newsletter endpoint
      // await fetch('/api/newsletter', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email }),
      // });
      await new Promise(resolve => setTimeout(resolve, 900));
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className='flex w-full max-w-md items-center gap-3 rounded-lg border border-[#c8ddb8] bg-[#f0f7eb] px-5 py-4'>
        <span className='h-1.5 w-1.5 shrink-0 rounded-full bg-[#5a8a3a]' />
        <p className='text-[14px] text-[#3a5a28]'>
          You're in. We'll send new articles straight to your inbox.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex w-full max-w-md flex-col gap-3 sm:flex-row'
    >
      <div className='flex-1'>
        <label htmlFor='newsletter-email' className='sr-only'>Email address</label>
        <input
          id='newsletter-email'
          type='email'
          placeholder='your@email.com'
          value={email}
          onChange={e => {
            setEmail(e.target.value);
            if (status === 'error') setStatus('idle');
          }}
          required
          autoComplete='email'
          disabled={status === 'loading'}
          className={`w-full rounded-lg border px-4 py-3 text-[14px] text-[#1a1714] placeholder-[#b0a394] outline-none transition-colors ${
            status === 'error'
              ? 'border-red-400 bg-red-50'
              : 'border-[#ddd6cc] bg-white focus:border-[#9a8878]'
          }`}
        />
        {status === 'error' && (
          <p className='mt-1.5 text-[12px] text-red-500' role='alert'>
            Something went wrong. Please try again.
          </p>
        )}
      </div>
      <button
        type='submit'
        disabled={status === 'loading'}
        className={`shrink-0 rounded-lg bg-[#1a1714] px-6 py-3 font-mono text-[12px] uppercase tracking-[0.16em] text-[#f7f5f1] transition-colors duration-200 hover:bg-[#2e2a25] active:scale-[0.98] ${
          status === 'loading' ? 'cursor-not-allowed opacity-70' : ''
        }`}
      >
        {status === 'loading' ? (
          <div className='flex items-center justify-center'>
            <HashLoader color='#f7f5f1' size={14} />
          </div>
        ) : (
          'Subscribe'
        )}
      </button>
    </form>
  );
}
