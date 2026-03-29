import Link from 'next/link';
import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex h-screen flex-col overflow-hidden'>

      {/* Top bar */}
      <div className='flex h-[44px] shrink-0 items-center border-b border-[#e4dfd6] bg-[#f7f5f1]/95 backdrop-blur-sm'>
        <Link
          href='/'
          aria-label='Back to home'
          className='flex h-full items-center gap-1.5 px-6 font-mono text-[11px] uppercase tracking-[0.16em] text-[#9a8878] transition-colors hover:text-[#1a1714]'
        >
          ← Home
        </Link>

        <div className='absolute left-1/2 -translate-x-1/2 flex items-center gap-2'>
          <span className='h-1.5 w-1.5 rounded-full bg-[#b8620a]' />
          <p className='font-mono text-[10px] uppercase tracking-[0.2em] text-[#9a8878]'>
            Early access - Some features are still rolling out
          </p>
        </div>

        <div className='ml-auto h-full px-6' aria-hidden />
      </div>

      {/* Page content — fills remaining height, no scroll */}
      <div className='flex-1 overflow-hidden'>
        {children}
      </div>

    </div>
  );
};

export default AuthLayout;
