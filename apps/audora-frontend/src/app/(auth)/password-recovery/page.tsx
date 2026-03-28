'use client';

import { useState } from 'react';
import Link from 'next/link';

const PasswordRecoveryPage = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSent(true);
  };

  return (
    <main className='flex min-h-screen w-screen items-center justify-center bg-[#f7f5f1] px-6'>

      {/* Faint warm bloom */}
      <div
        aria-hidden
        className='pointer-events-none fixed top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b8620a]/[0.04] blur-[180px]'
      />

      <div className='relative z-10 w-full max-w-sm'>

        {/* Logo mark */}
        <div className='mb-12'>
          <span className='font-syne text-[18px] font-extrabold tracking-[-0.04em] text-[#1a1714]'>
            Audora
          </span>
        </div>

        {!sent ? (
          <>
            <div className='mb-8'>
              <div className='mb-3 flex items-center gap-2.5'>
                <span className='h-px w-5 bg-[#b8620a]/60' />
                <span className='font-mono text-[10px] uppercase tracking-[0.22em] text-[#b8620a]'>
                  Password reset
                </span>
              </div>
              <h1 className='font-syne mb-2 text-[1.75rem] font-extrabold leading-tight tracking-[-0.03em] text-[#1a1714]'>
                Forgot your
                <br />
                <span className='text-[#9a8878]'>password?</span>
              </h1>
              <p className='text-[14px] leading-relaxed text-[#7a6f65]'>
                Enter your email and we'll send you a reset link.
              </p>
            </div>

            <form onSubmit={handleSubmit} className='space-y-3'>
              <input
                type='email'
                placeholder='Email address'
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className='w-full rounded-lg border border-[#ddd6cc] bg-white px-4 py-3 text-[14px] text-[#1a1714] placeholder-[#b0a394] outline-none transition-colors focus:border-[#9a8878]'
              />
              <button
                type='submit'
                className='w-full rounded-lg bg-[#1a1714] px-4 py-3.5 text-[13px] font-semibold text-[#f7f5f1] transition-colors hover:bg-[#2e2a25] active:scale-[0.99]'
              >
                Send reset link
              </button>
            </form>
          </>
        ) : (
          <div>
            <div className='mb-3 flex items-center gap-2.5'>
              <span className='h-px w-5 bg-[#b8620a]/60' />
              <span className='font-mono text-[10px] uppercase tracking-[0.22em] text-[#b8620a]'>
                Email sent
              </span>
            </div>
            <h1 className='font-syne mb-3 text-[1.75rem] font-extrabold leading-tight tracking-[-0.03em] text-[#1a1714]'>
              Check your inbox.
            </h1>
            <p className='text-[14px] leading-relaxed text-[#7a6f65]'>
              We sent a reset link to <span className='font-medium text-[#1a1714]'>{email}</span>.
              Check your spam folder if you don't see it.
            </p>
          </div>
        )}

        <Link
          href='/login'
          className='mt-8 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#9a8878] transition-colors hover:text-[#1a1714]'
        >
          ← Back to sign in
        </Link>
      </div>
    </main>
  );
};

export default PasswordRecoveryPage;
