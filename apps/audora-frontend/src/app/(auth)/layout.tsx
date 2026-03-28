import WorkInProgress from '@/components/work-in progress';
import Link from 'next/link';
import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Link
        href='/'
        className='fixed top-4 left-6 z-70 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#9a8878] transition-colors hover:text-[#1a1714]'
        aria-label='Back to home'
      >
        ← Home
      </Link>

      <WorkInProgress title='The backend is in development mode right now as we’re adding new features. The production-ready backend will go live soon.' />
      {children}
    </>
  );
};

export default AuthLayout;
