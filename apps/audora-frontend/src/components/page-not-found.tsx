'use client';

import { m, useReducedMotion, type Variants } from 'motion/react';
import { useEffect, useState } from 'react';

const SIGNAL_BARS = [
  14, 38, 20, 52, 16, 44, 26, 58, 12, 40, 30, 54, 18, 46, 22, 60, 14, 36,
  28, 50, 16, 42, 24, 56, 20, 48, 18, 44, 12, 38,
];

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } },
};

const fromTop: Variants = {
  hidden: { opacity: 0, y: -14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 12 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const PageNotFound = () => {
  const prefersReducedMotion = useReducedMotion();
  const [glitching, setGlitching] = useState(false);
  const [year, setYear] = useState('');
  const [dateStr, setDateStr] = useState('');

  useEffect(() => {
    const now = new Date();
    setYear(String(now.getFullYear()));
    setDateStr(now.toISOString().slice(0, 10));
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const t1 = setTimeout(() => setGlitching(true), 650);
    const t2 = setTimeout(() => setGlitching(false), 750);
    const t3 = setTimeout(() => setGlitching(true), 820);
    const t4 = setTimeout(() => setGlitching(false), 860);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, [prefersReducedMotion]);

  return (
    <main className='relative flex min-h-screen flex-col overflow-hidden bg-[#0f0d0c]'>

      {/* Grain */}
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 opacity-[0.045]'
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
          backgroundSize: '128px 128px',
        }}
      />

      {/* Ambient amber bloom */}
      <div
        aria-hidden
        className='pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b8620a]/[0.07] blur-[240px]'
      />
      <div
        aria-hidden
        className='pointer-events-none absolute -bottom-20 -right-20 h-[320px] w-[320px] rounded-full bg-[#b8620a]/[0.04] blur-[130px]'
      />

      {/* Amber top stripe */}
      <div className='h-[2px] shrink-0 bg-gradient-to-r from-[#b8620a] via-[#b8620a]/40 to-transparent' />

      {/* Top bar */}
      <m.div
        variants={fromTop}
        initial={prefersReducedMotion ? 'show' : 'hidden'}
        animate='show'
        className='flex h-[52px] shrink-0 items-center justify-between border-b border-[#1e1a17] px-8 sm:px-12 lg:px-16 xl:px-24'
      >
        <a
          href='/'
          className='font-syne text-[16px] font-extrabold tracking-[-0.04em] text-[#f0ece5] transition-opacity hover:opacity-70'
        >
          AUDORA
        </a>
        <div className='flex items-center gap-2'>
          <span className='relative flex h-1.5 w-1.5'>
            <span className='absolute inset-0 animate-ping rounded-full bg-red-500 opacity-60' />
            <span className='relative h-1.5 w-1.5 rounded-full bg-red-500' />
          </span>
          <span className='font-mono text-[10px] uppercase tracking-[0.22em] text-[#6a5e54]'>
            Signal lost
          </span>
        </div>
      </m.div>

      {/* Main content */}
      <m.div
        variants={stagger}
        initial={prefersReducedMotion ? 'show' : 'hidden'}
        animate='show'
        className='relative flex flex-1 flex-col items-center justify-center px-8 pb-8 sm:px-12 lg:px-16 xl:px-24'
      >

        {/* Error label */}
        <m.div variants={fadeUp} className='mb-5 flex items-center gap-3'>
          <span className='h-px w-10 bg-[#b8620a]/40' />
          <span className='font-mono text-[10px] uppercase tracking-[0.28em] text-[#b8620a]'>
            Error · 404
          </span>
          <span className='h-px w-10 bg-[#b8620a]/40' />
        </m.div>

        {/* Giant 404 with glitch */}
        <m.div variants={scaleIn} className='relative mb-1 select-none'>

          {/* Glitch layer A — amber offset */}
          <span
            aria-hidden
            className='font-syne pointer-events-none absolute inset-0 block text-[clamp(8rem,22vw,18rem)] font-extrabold leading-none tracking-[-0.06em] text-[#b8620a]'
            style={{
              opacity: glitching ? 0.25 : 0,
              transform: glitching ? 'translateX(-6px) translateY(2px)' : 'translateX(0)',
              transition: glitching ? 'none' : 'opacity 0.08s',
            }}
          >
            404
          </span>

          {/* Glitch layer B — cream offset */}
          <span
            aria-hidden
            className='font-syne pointer-events-none absolute inset-0 block text-[clamp(8rem,22vw,18rem)] font-extrabold leading-none tracking-[-0.06em] text-[#f0ece5]'
            style={{
              opacity: glitching ? 0.15 : 0,
              transform: glitching ? 'translateX(5px) translateY(-1px)' : 'translateX(0)',
              transition: glitching ? 'none' : 'opacity 0.08s',
              clipPath: glitching ? 'inset(30% 0 40% 0)' : 'none',
            }}
          >
            404
          </span>

          {/* Primary */}
          <span
            className='font-syne block text-[clamp(8rem,22vw,18rem)] font-extrabold leading-none tracking-[-0.06em] text-[#f0ece5]'
            style={{
              transform: glitching ? 'translateX(3px)' : 'translateX(0)',
              transition: glitching ? 'none' : 'transform 0.08s',
            }}
          >
            404
          </span>
        </m.div>

        {/* Waveform — dying signal */}
        <m.div variants={fadeIn} className='mb-10 flex items-center gap-[2.5px]' aria-hidden>
          {SIGNAL_BARS.map((h, i) => (
            <m.div
              key={i}
              className='w-[2.5px] shrink-0 rounded-full bg-[#b8620a]'
              style={{ height: h * 0.4 }}
              animate={
                prefersReducedMotion
                  ? {}
                  : {
                    scaleY: [1, 0.08 + (i % 4) * 0.12, 0.04, 0.08 + (i % 4) * 0.12, 1],
                    opacity: [0.55, 0.15, 0.06, 0.15, 0.55],
                  }
              }
              transition={{
                duration: 3.8 + (i % 6) * 0.4,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
                delay: i * 0.05,
              }}
            />
          ))}
        </m.div>

        {/* Copy */}
        <m.h1
          variants={fadeUp}
          className='font-syne mb-4 text-center text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-[1.06] tracking-[-0.04em] text-[#f0ece5]'
        >
          Dead air.
        </m.h1>

        <m.p
          variants={fadeUp}
          className='mb-9 max-w-[22rem] text-center text-[14px] leading-[1.85] text-[#7a6f65]'
        >
          This page doesn't exist or has been moved.
          <br />
          Head back to the studio and keep creating.
        </m.p>

        {/* CTAs */}
        <m.div
          variants={fadeUp}
          className='flex flex-wrap items-center justify-center gap-4'
        >
          <a
            href='/'
            className='group inline-flex items-center gap-2 rounded-lg bg-[#b8620a] px-7 py-3.5 text-sm font-semibold text-[#f7f5f1] transition-all duration-200 hover:bg-[#a35508] active:scale-[0.98]'
          >
            Return to studio
            <span className='transition-transform duration-200 group-hover:translate-x-0.5'>→</span>
          </a>
          <a
            href='/contact'
            className='inline-flex min-h-[44px] items-center text-sm text-[#5a4e44] underline underline-offset-4 decoration-[#3a3330] transition-colors hover:text-[#9a8878]'
          >
            Report an issue
          </a>
        </m.div>

        {/* Broadcast metadata row */}
        <m.p
          variants={fadeUp}
          className='mt-12 font-mono text-[10px] uppercase tracking-[0.2em] text-[#2e2a25]'
        >
          CH 404 - {dateStr} - NO CARRIER
        </m.p>

      </m.div>

      {/* Bottom bar */}
      <div className='shrink-0 border-t border-[#1a1614]'>
        <div className='mx-auto flex max-w-10xl items-center justify-between px-8 py-4 sm:px-12 lg:px-16 xl:px-24'>
          <span className='font-mono text-[10px] text-[#3a3330]'>
            © {year} Audora Labs
          </span>
          <a
            href='/'
            className='font-mono text-[10px] uppercase tracking-[0.16em] text-[#4a4440] transition-colors hover:text-[#9a8878]'
          >
            ← Return home
          </a>
        </div>
      </div>

    </main>
  );
};

export default PageNotFound;
