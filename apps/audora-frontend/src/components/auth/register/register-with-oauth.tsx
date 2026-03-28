'use client';

import AuthButtons from '../auth-button';
import Link from 'next/link';

const RegisterWithOAuth = ({ onEmailClick }: { onEmailClick?: () => void }) => {
  return (
    <div className='flex w-full flex-col'>
      <div className='mb-8'>
        <div className='mb-2 flex items-center gap-2.5'>
          <span className='h-px w-5 bg-[#b8620a]/60' />
          <span className='font-mono text-[10px] uppercase tracking-[0.22em] text-[#b8620a]'>
            Create account
          </span>
        </div>
        <h2 className='font-syne text-[1.75rem] font-extrabold leading-tight tracking-[-0.03em] text-[#1a1714]'>
          Join Audora.
          <br />
          <span className='text-[#9a8878]'>{"It's free."}</span>
        </h2>
      </div>

      <AuthButtons onEmailClick={onEmailClick} />

      <p className='mt-6 text-[12px] leading-relaxed text-[#b0a394]'>
        By signing up, you agree to our{' '}
        <a
          href='/terms-conditions'
          className='text-[#7a6f65] underline underline-offset-2 transition-colors hover:text-[#1a1714]'
        >
          Terms
        </a>{' '}
        &amp;{' '}
        <a
          href='/privacy-policy'
          className='text-[#7a6f65] underline underline-offset-2 transition-colors hover:text-[#1a1714]'
        >
          Privacy Policy
        </a>
        .
      </p>

      <p className='mt-4 text-[13px] text-[#9a8878]'>
        Already have an account?{' '}
        <Link
          href='/login'
          className='font-medium text-[#1a1714] underline underline-offset-2 transition-colors hover:text-[#b8620a]'
        >
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default RegisterWithOAuth;
