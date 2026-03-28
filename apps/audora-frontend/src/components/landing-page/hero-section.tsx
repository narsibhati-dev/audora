'use client';

import React from 'react';
import Link from 'next/link';
import { m, useReducedMotion } from 'framer-motion';
import siteMetadata from '@/lib/seo/siteMetadata';
import { heroOptions } from '@/data';

const AUDIO_BARS = [
  28, 48, 36, 64, 24, 44, 58, 32, 52, 40, 62, 28, 42, 68, 34,
  56, 22, 46, 60, 32, 50, 38, 58, 26, 46, 66, 24, 40, 54, 36,
];

const STATS = [
  { value: '4K', label: 'Video quality' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '50+', label: 'Integrations' },
];

const PARTICIPANTS = [
  { initials: 'AK', label: 'Alex K.' },
  { initials: 'MR', label: 'Maya R.' },
  { initials: 'JL', label: 'Jordan L.' },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const fromLeft = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const fromRight = {
  hidden: { opacity: 0, x: 32, scale: 0.97 },
  show: {
    opacity: 1, x: 0, scale: 1,
    transition: { duration: 1.0, delay: 0.18, ease: [0.22, 1, 0.36, 1] },
  },
};

const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className='relative min-h-screen bg-[#f7f5f1]'>

      {/* Subtle warm grain texture */}
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 opacity-[0.018]'
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      {/* Faint warm tint bloom — top left */}
      <div
        aria-hidden
        className='pointer-events-none absolute top-0 left-0 h-[500px] w-[500px] -translate-x-1/3 -translate-y-1/4 rounded-full bg-[#c8740e]/[0.06] blur-[180px]'
      />

      {/* ── GRID ─────────────────────────────────────────────── */}
      <div className='relative mx-auto grid min-h-screen w-full max-w-10xl grid-cols-1 px-8 sm:px-12 lg:grid-cols-[1fr_500px] lg:px-16 xl:grid-cols-[1fr_540px] xl:px-24'>

        {/* ── LEFT: Copy ───────────────────────────────────────── */}
        <m.div
          variants={stagger}
          initial={prefersReducedMotion ? 'show' : 'hidden'}
          animate='show'
          className='flex flex-col justify-center py-28 lg:py-0 lg:pr-12'
        >

          {/* Eyebrow label */}
          <m.div variants={fadeUp} className='mb-7 flex items-center gap-2.5'>
            <span className='h-px w-6 bg-[#b8620a]/60' />
            <span className='font-mono text-[11px] uppercase tracking-[0.24em] text-[#b8620a]'>
              Podcast &amp; Video Studio
            </span>
          </m.div>

          {/* Headline — large, confident, warm dark */}
          <div className='mb-7'>
            <m.div variants={fromLeft}>
              <span className='font-syne block text-[clamp(3.4rem,7.5vw,7rem)] font-extrabold leading-[0.88] tracking-[-0.045em] text-[#1a1714]'>
                Record.
              </span>
            </m.div>
            <m.div variants={fromLeft}>
              <span className='font-syne block text-[clamp(3.4rem,7.5vw,7rem)] font-extrabold leading-[0.88] tracking-[-0.045em] text-[#1a1714]'>
                Edit.
              </span>
            </m.div>
            <m.div variants={fromLeft}>
              <span className='font-syne block text-[clamp(3.4rem,7.5vw,7rem)] font-extrabold leading-[0.88] tracking-[-0.045em] text-[#9a8878]'>
                Go live.
              </span>
            </m.div>
          </div>

          {/* Description */}
          <m.p
            variants={fadeUp}
            className='mb-8 max-w-[360px] text-[15px] leading-[1.8] text-[#7a6f65]'
          >
            Studio-quality podcasts and video from anywhere. Separate tracks
            per guest, AI editing, one-click publishing to every platform.
          </m.p>

          {/* CTAs */}
          <m.div variants={fadeUp} className='mb-6 flex flex-wrap items-center gap-3'>
            <Link
              href={siteMetadata.dashboard}
              className='group inline-flex items-center gap-2 rounded-lg bg-[#1a1714] px-7 py-3.5 text-[13px] font-semibold text-[#f7f5f1] transition-all duration-200 hover:bg-[#2e2a25] active:scale-[0.98]'
            >
              Start for free
              <span className='transition-transform duration-200 group-hover:translate-x-0.5'>→</span>
            </Link>
            <a
              href='/recording'
              className='inline-flex items-center gap-1.5 text-[13px] text-[#7a6f65] underline underline-offset-4 decoration-[#c8b9a8]/60 transition-colors hover:text-[#1a1714]'
            >
              See how it works
            </a>
          </m.div>

          {/* Trust note */}
          <m.p variants={fadeUp} className='mb-9 font-mono text-[10px] tracking-[0.14em] text-[#b0a394]'>
            No credit card required &nbsp;·&nbsp; Free forever plan
          </m.p>

          {/* Stats */}
          <m.div
            variants={fadeUp}
            className='flex items-center gap-7 border-t border-[#e8e2d8] pt-7'
          >
            {STATS.map((s, i) => (
              <React.Fragment key={s.value}>
                <div>
                  <p className='font-syne text-xl font-bold leading-none text-[#1a1714]'>{s.value}</p>
                  <p className='mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#a0938a]'>{s.label}</p>
                </div>
                {i < STATS.length - 1 && (
                  <div className='h-7 w-px bg-[#ddd6cc]' />
                )}
              </React.Fragment>
            ))}
          </m.div>
        </m.div>

        {/* ── RIGHT: Product card ──────────────────────────────── */}
        <m.div
          variants={fromRight}
          initial={prefersReducedMotion ? 'show' : 'hidden'}
          animate='show'
          className='relative hidden lg:flex lg:flex-col lg:justify-center'
        >
          {/* Padded wrapper so floating cards don't clip */}
          <div className='relative px-8 py-16 xl:px-10'>

            {/* ── Studio card ── */}
            <div className='overflow-hidden rounded-2xl border border-[#e4dfd6] bg-white shadow-[0_8px_40px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.04)]'>

              {/* Window chrome */}
              <div className='flex items-center gap-2 border-b border-[#ede8e1] bg-[#f5f2ed] px-4 py-3'>
                <span className='h-3 w-3 rounded-full bg-[#e8d5c4]' />
                <span className='h-3 w-3 rounded-full bg-[#e8d5c4]' />
                <span className='h-3 w-3 rounded-full bg-[#e8d5c4]' />
                <div className='mx-auto flex items-center gap-1.5 rounded-md bg-[#ede8e1] px-3 py-1'>
                  <span className='h-1.5 w-1.5 rounded-full bg-[#c4700a]' />
                  <span className='font-mono text-[9px] text-[#9a8878]'>studio.audora.fm</span>
                </div>
              </div>

              {/* Recording viewport */}
              <div className='relative bg-[#f2ede6]' style={{ aspectRatio: '16/10' }}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster='/images/video-poster.png'
                  className='h-full w-full object-cover opacity-90'
                >
                  <source src='/videos/audora-hero.mp4' type='video/mp4' />
                </video>

                {/* Subtle vignette */}
                <div
                  aria-hidden
                  className='pointer-events-none absolute inset-0'
                  style={{ boxShadow: 'inset 0 0 40px rgba(0,0,0,0.12)' }}
                />

                {/* REC badge — top left */}
                <div className='absolute top-3 left-3 flex items-center gap-1.5 rounded-md bg-white/80 px-2.5 py-1 backdrop-blur-sm'>
                  <span className='h-1.5 w-1.5 rounded-full bg-red-400' />
                  <span className='font-mono text-[9px] font-medium uppercase tracking-wider text-[#5a4e44]'>
                    Rec
                  </span>
                </div>

                {/* Timecode — top right */}
                <div className='absolute top-3 right-3 rounded-md bg-white/80 px-2.5 py-1 backdrop-blur-sm'>
                  <span className='font-mono text-[9px] tabular-nums text-[#7a6f65]'>
                    00:14:32
                  </span>
                </div>

                {/* Audio visualizer — bottom */}
                <div className='absolute right-0 bottom-0 left-0 flex items-end gap-[2px] bg-gradient-to-t from-[#1a1714]/20 to-transparent px-4 pb-2 pt-8'>
                  {AUDIO_BARS.map((h, i) => (
                    <div
                      key={i}
                      aria-hidden
                      className='w-[2.5px] shrink-0 rounded-full bg-white'
                      style={{ height: `${h * 0.18}px`, opacity: 0.25 + (i % 4) * 0.1 }}
                    />
                  ))}
                </div>
              </div>

              {/* Participant strip */}
              <div className='flex items-center gap-3 border-t border-[#ede8e1] bg-[#faf8f5] px-4 py-3'>
                <div className='flex items-center gap-1.5'>
                  {PARTICIPANTS.map(p => (
                    <div
                      key={p.initials}
                      title={p.label}
                      className='flex h-7 w-7 items-center justify-center rounded-full bg-[#ede8e1] text-[9px] font-semibold text-[#5a4e44]'
                    >
                      {p.initials}
                    </div>
                  ))}
                </div>
                <span className='font-mono text-[10px] text-[#b0a394]'>
                  {PARTICIPANTS.length} participants
                </span>
                <div className='ml-auto flex items-center gap-1.5 rounded-full bg-[#f0ebe3] px-2.5 py-1'>
                  <span className='h-1.5 w-1.5 rounded-full bg-[#c4700a]' />
                  <span className='font-mono text-[9px] text-[#c4700a]'>Live</span>
                </div>
              </div>
            </div>

            {/* Floating card: listeners */}
            <m.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className='absolute bottom-4 left-4 flex items-center gap-3 rounded-xl border border-[#e4dfd6] bg-white px-4 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.07)]'
            >
              <div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f5f0e8]'>
                <svg width='14' height='14' viewBox='0 0 24 24' fill='none' aria-hidden>
                  <path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' stroke='#9a8878' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' />
                  <circle cx='9' cy='7' r='4' stroke='#9a8878' strokeWidth='1.8' />
                  <path d='M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' stroke='#9a8878' strokeWidth='1.8' strokeLinecap='round' />
                </svg>
              </div>
              <div>
                <p className='font-syne text-sm font-bold leading-none text-[#1a1714]'>3,241</p>
                <p className='mt-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-[#b0a394]'>Live listeners</p>
              </div>
            </m.div>

            {/* Floating card: quality */}
            <m.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className='absolute top-4 right-4 flex items-center gap-3 rounded-xl border border-[#e4dfd6] bg-white px-4 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.07)]'
            >
              <div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f5f0e8]'>
                <svg width='14' height='14' viewBox='0 0 24 24' fill='none' aria-hidden>
                  <path d='M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z' fill='#9a8878' opacity='.7' />
                  <path d='M19 10v2a7 7 0 0 1-14 0v-2' stroke='#9a8878' strokeWidth='1.8' strokeLinecap='round' />
                  <line x1='12' y1='19' x2='12' y2='22' stroke='#9a8878' strokeWidth='1.8' strokeLinecap='round' />
                  <line x1='8' y1='22' x2='16' y2='22' stroke='#9a8878' strokeWidth='1.8' strokeLinecap='round' />
                </svg>
              </div>
              <div>
                <p className='font-syne text-sm font-bold leading-none text-[#1a1714]'>Lossless 4K</p>
                <p className='mt-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-[#b0a394]'>Studio audio</p>
              </div>
            </m.div>

          </div>
        </m.div>

      </div>
    </section>
  );
};

export default HeroSection;
