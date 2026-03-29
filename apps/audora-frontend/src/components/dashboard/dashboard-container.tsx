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
    <div
      className='relative flex h-full flex-col overflow-hidden rounded-2xl text-[#1c1410]'
      style={{
        /* Warm cream — identical to landing page */
        background: '#f7f5f1',
        border: '1px solid #e4dfd6',
        /* Subtle paper noise via SVG data-URI */
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"),
          linear-gradient(160deg, #f9f7f3 0%, #f7f5f1 60%, #f4f0ea 100%)
        `,
        backgroundRepeat: 'repeat, no-repeat',
        backgroundSize: '160px 160px, 100% 100%',
        backgroundBlendMode: 'multiply, normal',
      }}
    >
      {/* Amber bloom — top right */}
      <div
        className='pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full'
        style={{
          background: 'radial-gradient(circle, rgba(200,116,14,0.07) 0%, transparent 70%)',
        }}
        aria-hidden
      />

      {/* Violet bloom — bottom left, very faint */}
      <div
        className='pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full'
        style={{
          background: 'radial-gradient(circle, rgba(115,87,255,0.04) 0%, transparent 70%)',
        }}
        aria-hidden
      />

      {/* ── Top bar ─────────────────────────────────── */}
      <div
        className='relative flex shrink-0 items-center justify-between px-5 py-3'
        style={{
          background: 'rgba(247,245,241,0.85)',
          borderBottom: '1px solid #e8e2d8',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
      >
        {/* Left: welcome */}
        <div className='flex items-center gap-2.5'>
          {/* Amber pulse dot */}
          <span className='relative flex h-1.5 w-1.5 shrink-0'>
            <span
              className='absolute inset-0 animate-ping rounded-full opacity-50'
              style={{ background: '#b8620a' }}
            />
            <span
              className='relative h-1.5 w-1.5 rounded-full'
              style={{ background: '#b8620a' }}
            />
          </span>
          <p
            className='font-mono text-[11px] uppercase tracking-[0.18em]'
            style={{ color: '#9a8a7e' }}
          >
            Welcome back,{' '}
            <span
              className='font-semibold'
              style={{ color: '#4a3828', letterSpacing: '0.08em' }}
            >
              {session?.user.name}
            </span>
          </p>
        </div>

        {/* Right: online status */}
        <div className='hidden items-center gap-1.5 sm:flex'>
          <span className='relative flex h-1.5 w-1.5 shrink-0'>
            <span className='absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-40' />
            <span className='relative h-1.5 w-1.5 rounded-full bg-emerald-500' />
          </span>
          <span
            className='font-mono text-[10px] uppercase tracking-[0.16em]'
            style={{ color: '#b8afa8' }}
          >
            Studio online
          </span>
        </div>
      </div>

      {/* ── Content ─────────────────────────────────── */}
      <section
        className='relative flex-1 overflow-y-auto scrollbar-none'
        style={{ padding: 'clamp(1.25rem, 3vw, 2.5rem) clamp(1rem, 3vw, 3.5rem)' }}
      >
        {children}
      </section>
    </div>
  );
};

export default DashboardContainer;
