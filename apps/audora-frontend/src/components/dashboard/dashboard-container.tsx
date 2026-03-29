import authOptions from '@/lib/auth/auth-options';
import { getServerSession } from 'next-auth';
import React from 'react';

const DashboardContainer = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const session = await getServerSession(authOptions);

  return (
    <div className='h-full rounded-2xl border border-[#2a2520] bg-[#0e0e0c] text-white'>
      {/* Top bar */}
      <div className='flex items-center justify-between border-b border-[#2a2520] px-5 py-3'>
        <div className='flex items-center gap-2.5'>
          <span className='h-1.5 w-1.5 rounded-full bg-[#b8620a]' aria-hidden />
          <p className='font-mono text-[11px] uppercase tracking-[0.18em] text-[#5a4e44]'>
            Welcome back,{' '}
            <span className='text-[#9a8878]'>{session?.user.name}</span>
          </p>
        </div>
        <div className='hidden items-center gap-1.5 sm:flex'>
          <span className='relative flex h-1.5 w-1.5 shrink-0'>
            <span className='absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-40' />
            <span className='relative h-1.5 w-1.5 rounded-full bg-emerald-500' />
          </span>
          <span className='font-mono text-[10px] uppercase tracking-[0.14em] text-[#3a3330]'>
            Studio online
          </span>
        </div>
      </div>

      <section className='w-full px-3 py-8 sm:px-12 md:px-6 lg:px-12 xl:px-34'>
        {children}
      </section>
    </div>
  );
};

export default DashboardContainer;
