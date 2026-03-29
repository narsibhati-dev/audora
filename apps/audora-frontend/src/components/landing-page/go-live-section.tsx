'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { m, useInView, useReducedMotion } from 'framer-motion';
import siteMetadata from '@/lib/seo/siteMetadata';
import { getIcon, goLiveLeftPlatforms, goLiveRightPlatforms } from '@/data';

const allPlatforms = [...goLiveLeftPlatforms, ...goLiveRightPlatforms];

const FEATURES = [
  {
    label: 'Simulcast everywhere',
    desc: '7+ platforms, one click. YouTube, Twitch, LinkedIn, X - all at once.',
  },
  {
    label: 'Branded studio overlays',
    desc: 'Custom graphics, lower thirds, and intros. Your brand, live.',
  },
  {
    label: 'Omnichat',
    desc: 'Every comment from every platform, unified in one feed.',
  },
];

const LIVE_STATS = [
  { value: '3,241', label: 'Live viewers' },
  { value: '7', label: 'Platforms' },
  { value: '99.9%', label: 'Uptime SLA' },
];


// Broadcast signal bar heights
const SIGNAL_BARS = [10, 20, 14, 32, 10, 26, 18, 38, 12, 30, 22, 44, 10, 28, 16, 36, 12, 24, 18, 34];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

const fromLeft = {
  hidden: { opacity: 0, x: -26 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

const fromRight = {
  hidden: { opacity: 0, x: 28, scale: 0.98 },
  show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const GoLiveSection = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section ref={ref} className='relative overflow-hidden bg-[#1a1714] py-28'>

      {/* Warm bloom — right */}
      <div
        aria-hidden
        className='pointer-events-none absolute top-1/2 right-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/3 rounded-full bg-[#b8620a]/[0.06] blur-[180px]'
      />

      {/* Warm bloom — left */}
      <div
        aria-hidden
        className='pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] -translate-x-1/2 translate-y-1/3 rounded-full bg-[#b8620a]/[0.04] blur-[120px]'
      />

      {/* Top rule */}
      <div aria-hidden className='absolute top-0 left-0 right-0 h-px bg-[#2e2a25]' />

      {/* "03" watermark */}
      <div
        aria-hidden
        className='pointer-events-none absolute bottom-0 right-0 select-none font-syne text-[20rem] font-extrabold leading-none tracking-[-0.05em] text-white/[0.02]'
        style={{ lineHeight: 1 }}
      >
        03
      </div>

      <m.div
        variants={stagger}
        initial={prefersReducedMotion ? 'show' : 'hidden'}
        animate={inView || prefersReducedMotion ? 'show' : 'hidden'}
        className='relative z-10 mx-auto max-w-10xl px-8 sm:px-12 lg:px-16 xl:px-24'
      >
        <div className='grid grid-cols-1 items-start gap-16 lg:grid-cols-[1fr_520px]'>

          {/* ── LEFT: Copy ─────────────────────────────────────── */}
          <div className='flex flex-col'>

            {/* Section label */}
            <m.div variants={fadeUp} className='mb-6 flex items-center gap-2.5'>
              <span className='h-px w-6 bg-[#b8620a]/60' />
              <span className='font-mono text-[11px] uppercase tracking-[0.24em] text-[#b8620a]'>
                03 - Go Live
              </span>
            </m.div>

            {/* Headline */}
            <m.h2
              variants={fromLeft}
              className='font-syne mb-6 text-[clamp(3.2rem,7vw,6.5rem)] font-extrabold leading-none tracking-[-0.045em] text-white'
            >
              Go live.
            </m.h2>

            {/* Numbered feature cards — dark palette */}
            <m.div variants={fadeUp} className='mb-7 space-y-3'>
              {FEATURES.map((feat, i) => (
                <div
                  key={i}
                  className='flex items-start gap-4 rounded-xl border border-[#2e2a25] bg-[#211e1b]/80 px-5 py-4 transition-colors duration-200 hover:border-[#3a3330]'
                >
                  <span className='mt-0.5 shrink-0 font-mono text-[10px] font-bold tracking-[0.18em] text-[#b8620a]/50'>
                    0{i + 1}
                  </span>
                  <div>
                    <p className='mb-0.5 text-[14px] font-semibold text-white'>{feat.label}</p>
                    <p className='text-[13px] leading-relaxed text-[#5a4e44]'>{feat.desc}</p>
                  </div>
                </div>
              ))}
            </m.div>

            {/* Live stats strip */}
            <m.div
              variants={fadeUp}
              className='mb-7 grid grid-cols-3 divide-x divide-[#2e2a25] rounded-xl border border-[#2e2a25] bg-[#211e1b]/60'
            >
              {LIVE_STATS.map(({ value, label }) => (
                <div key={label} className='px-5 py-4'>
                  <p className='font-syne text-[1.4rem] font-extrabold leading-none tracking-[-0.03em] text-white'>
                    {value}
                  </p>
                  <p className='mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#4a4440]'>
                    {label}
                  </p>
                </div>
              ))}
            </m.div>

            {/* CTAs */}
            <m.div variants={fadeUp} className='mb-8 flex flex-wrap items-center gap-4'>
              <Link
                href={siteMetadata.dashboard}
                className='group inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-[#1a1714] transition-all duration-200 hover:bg-[#f7f5f1] active:scale-[0.98]'
              >
                Start for Free
                <span className='transition-transform duration-200 group-hover:translate-x-0.5'>→</span>
              </Link>
              <Link
                href='/live-streaming'
                className='inline-flex min-h-[44px] items-center text-sm text-[#5a4e44] underline underline-offset-4 decoration-[#3a3330]/60 transition-colors hover:text-white'
              >
                Learn more
              </Link>
            </m.div>

            {/* Platform chips */}
            <m.div variants={fadeUp} className='mb-8'>
              <div className='mb-3 flex items-center gap-2'>
                <span className='relative flex h-1.5 w-1.5 shrink-0'>
                  <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-50' />
                  <span className='relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500' />
                </span>
                <p className='font-mono text-[10px] uppercase tracking-[0.2em] text-[#4a4440]'>
                  Broadcasting to
                </p>
              </div>
              <div className='flex flex-wrap gap-2'>
                {allPlatforms.map((platform, idx) => {
                  const Icon = getIcon(platform.iconKey);
                  return (
                    <div
                      key={idx}
                      className='flex items-center gap-2 rounded-lg border border-[#2e2a25] bg-[#211e1b] px-3.5 py-2.5 transition-all duration-200 hover:border-[#3a3330] hover:bg-[#2a2520]'
                    >
                      <Icon className='h-3.5 w-3.5 text-[#7a6f65]' />
                      <span className='font-mono text-[11px] tracking-wide text-[#5a4e44]'>
                        {platform.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </m.div>

            {/* Decorative broadcast signal bars */}
            <m.div variants={fadeUp} className='flex items-end gap-[3px]' aria-hidden>
              {SIGNAL_BARS.map((h, i) => (
                <m.div
                  key={i}
                  className='w-[3px] shrink-0 rounded-full bg-red-500'
                  style={{ height: h, opacity: 0.1 + (i % 5) * 0.04 }}
                  animate={
                    prefersReducedMotion
                      ? {}
                      : {
                          scaleY: [1, 0.2 + (i % 3) * 0.3, 0.6, 1],
                          opacity: [
                            0.1 + (i % 5) * 0.04,
                            0.25 + (i % 4) * 0.07,
                            0.12,
                            0.1 + (i % 5) * 0.04,
                          ],
                        }
                  }
                  transition={{
                    duration: 1.8 + (i % 4) * 0.4,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut',
                    delay: i * 0.06,
                  }}
                />
              ))}
            </m.div>

          </div>

          {/* ── RIGHT: Two stacked cards ────────────────────────── */}
          <m.div variants={fromRight} className='flex flex-col gap-3'>

            {/* Card 1: Broadcast studio */}
            <div className='relative'>
              <div className='relative overflow-hidden rounded-2xl border border-[#2e2a25] shadow-[0_16px_64px_rgba(0,0,0,0.5)]'>

                {/* Top bar */}
                <div className='flex items-center justify-between border-b border-[#2e2a25] bg-[#100f0d] px-4 py-3'>
                  <span className='font-mono text-[10px] uppercase tracking-wider text-[#4a4440]'>
                    Broadcast Studio
                  </span>
                  <div className='flex items-center gap-1.5'>
                    <span className='relative flex h-2 w-2'>
                      <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-60' />
                      <span className='relative inline-flex h-2 w-2 rounded-full bg-red-500' />
                    </span>
                    <span className='font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-red-400'>
                      On Air
                    </span>
                  </div>
                </div>

                <Image
                  width={700}
                  height={460}
                  src='/images/go-live-section.png'
                  alt='Go Live Studio Interface showing simulcast to multiple platforms'
                  className='h-auto w-full object-cover'
                />

                {/* Bottom bar */}
                <div className='flex items-center justify-between border-t border-[#2e2a25] bg-[#100f0d] px-4 py-3'>
                  <span className='font-mono text-[10px] text-[#4a4440]'>Full HD · Simulcast</span>
                  <div className='flex items-center gap-1.5'>
                    <span className='h-1.5 w-1.5 rounded-full bg-[#b8620a]' />
                    <span className='font-mono text-[10px] text-[#b8620a]'>Live</span>
                  </div>
                </div>
              </div>

              {/* Floating: viewer count */}
              <m.div
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                transition={{ delay: 0.9, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className='absolute -bottom-4 -left-4 flex items-center gap-3 rounded-xl border border-[#2e2a25] bg-[#1a1714]/95 px-4 py-3 shadow-2xl backdrop-blur-sm'
              >
                <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-[#2e2a25]'>
                  <svg width='14' height='14' viewBox='0 0 24 24' fill='none' aria-hidden>
                    <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' stroke='#9a8878' strokeWidth='2' />
                    <circle cx='12' cy='12' r='3' fill='#9a8878' />
                  </svg>
                </div>
                <div>
                  <p className='font-mono text-[10px] uppercase tracking-wider text-[#4a4440]'>Live viewers</p>
                  <p className='font-syne text-sm font-bold text-white'>3,241</p>
                </div>
              </m.div>

              {/* Floating: platform count */}
              <m.div
                initial={{ opacity: 0, y: -8 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
                transition={{ delay: 1.05, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className='absolute -top-4 -right-3 flex items-center gap-3 rounded-xl border border-[#2e2a25] bg-[#1a1714]/95 px-4 py-3 shadow-2xl backdrop-blur-sm'
              >
                <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-[#2e2a25]'>
                  <svg width='14' height='14' viewBox='0 0 24 24' fill='none' aria-hidden>
                    <rect x='2' y='3' width='20' height='14' rx='2' stroke='#9a8878' strokeWidth='2' />
                    <path d='M8 21h8M12 17v4' stroke='#9a8878' strokeWidth='2' strokeLinecap='round' />
                  </svg>
                </div>
                <div>
                  <p className='font-mono text-[10px] uppercase tracking-wider text-[#4a4440]'>Streaming to</p>
                  <p className='font-syne text-sm font-bold text-white'>7 Platforms</p>
                </div>
              </m.div>
            </div>

            {/* Card 2: Simulcast destinations */}
            <div className='rounded-2xl border border-[#2e2a25] bg-[#100f0d] px-5 pt-4 pb-3'>

              {/* Header */}
              <div className='mb-3 flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <div className='h-1.5 w-1.5 rounded-full bg-[#b8620a]' />
                  <p className='font-mono text-[10px] uppercase tracking-[0.18em] text-[#4a4440]'>
                    Simulcast destinations
                  </p>
                </div>
                <span className='flex items-center gap-1.5 rounded-full border border-[#2e2a25] bg-[#1a1714] px-2.5 py-1'>
                  <span className='h-1.5 w-1.5 rounded-full bg-red-500' />
                  <span className='font-mono text-[10px] text-red-400'>7 Active</span>
                </span>
              </div>

              {/* Divider */}
              <div className='mb-3 h-px bg-[#1e1b18]' />

              {/* Platform rows */}
              <div className='space-y-1'>
                {allPlatforms.map((platform, i) => {
                  const Icon = getIcon(platform.iconKey);
                  return (
                    <div
                      key={i}
                      className='flex items-center justify-between rounded-xl border border-transparent px-3 py-2.5 transition-all duration-200 hover:border-[#2e2a25] hover:bg-[#1a1714]'
                    >
                      <div className='flex items-center gap-3'>
                        <div className='flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#2e2a25] bg-[#1a1714]'>
                          <Icon className='h-3.5 w-3.5 text-[#5a4e44]' />
                        </div>
                        <span className='text-[13px] font-medium text-[#7a6f65]'>{platform.label}</span>
                      </div>
                      <div className='flex items-center gap-1.5'>
                        <span className='h-1.5 w-1.5 rounded-full bg-emerald-500' />
                        <span className='font-mono text-[10px] text-[#3a3330]'>Live</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Footer */}
              <div className='mt-2 flex items-center justify-between border-t border-[#1e1b18] pt-3'>
                <span className='font-mono text-[10px] text-[#3a3330]'>Streaming since 14:32</span>
                <span className='font-mono text-[10px] text-[#b8620a]'>Full HD · Simulcast</span>
              </div>

            </div>
          </m.div>

        </div>
      </m.div>
    </section>
  );
};

export default GoLiveSection;
