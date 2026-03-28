'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { m, useInView } from 'framer-motion';
import siteMetadata from '@/lib/seo/siteMetadata';
import { getIcon, goLiveLeftPlatforms, goLiveRightPlatforms } from '@/data';

const allPlatforms = [...goLiveLeftPlatforms, ...goLiveRightPlatforms];

const FEATURES = [
  'Simulcast to 7+ platforms simultaneously',
  'Full HD streaming with branded studio overlays',
  'Omnichat — all audience comments in one feed',
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
};

const fromLeft = {
  hidden: { opacity: 0, x: -26 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

const fromRight = {
  hidden: { opacity: 0, x: 28, scale: 0.98 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const GoLiveSection = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section ref={ref} className='relative overflow-hidden bg-[#1a1714] py-28'>

      {/* Subtle warm bloom */}
      <div
        aria-hidden
        className='pointer-events-none absolute top-1/2 right-0 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/3 rounded-full bg-[#b8620a]/[0.07] blur-[160px]'
      />

      {/* Top rule */}
      <div aria-hidden className='absolute top-0 left-0 right-0 h-px bg-[#2e2a25]' />

      <m.div
        variants={stagger}
        initial='hidden'
        animate={inView ? 'show' : 'hidden'}
        className='relative z-10 mx-auto max-w-10xl px-8 sm:px-12 lg:px-16 xl:px-24'
      >
        <div className='grid grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_520px] lg:gap-16'>

          {/* ── LEFT: Copy ────────────────────────────────────── */}
          <div className='flex flex-col'>

            {/* Section label */}
            <m.div variants={fadeUp} className='mb-8 flex items-center gap-2.5'>
              <span className='h-px w-6 bg-[#b8620a]/60' />
              <span className='font-mono text-[11px] uppercase tracking-[0.24em] text-[#b8620a]'>
                03 — Go Live
              </span>
            </m.div>

            {/* Headline */}
            <m.h2
              variants={fromLeft}
              className='font-syne mb-7 text-[clamp(3rem,7vw,6rem)] font-extrabold leading-none tracking-[-0.045em] text-white'
            >
              Go live.
            </m.h2>

            {/* Feature bullets */}
            <m.div variants={fadeUp} className='mb-10 space-y-3.5'>
              {FEATURES.map((feat, i) => (
                <div key={i} className='flex items-start gap-3'>
                  <div className='mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b8620a]' />
                  <p className='text-[15px] leading-relaxed text-[#9a8878]'>{feat}</p>
                </div>
              ))}
            </m.div>

            {/* CTAs */}
            <m.div variants={fadeUp} className='mb-10 flex flex-wrap items-center gap-4'>
              <Link
                href={siteMetadata.dashboard}
                className='group inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-[#1a1714] transition-all duration-200 hover:bg-[#f7f5f1] active:scale-[0.98]'
              >
                Start for Free
                <span className='transition-transform duration-200 group-hover:translate-x-0.5'>→</span>
              </Link>
              <Link
                href='/use-cases/webinars'
                className='text-sm text-[#9a8878] underline underline-offset-4 decoration-[#4a4440]/60 transition-colors hover:text-white'
              >
                Learn more
              </Link>
            </m.div>

            {/* Platform chips */}
            <m.div variants={fadeUp}>
              <p className='mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#3a3330]'>
                Stream to
              </p>
              <div className='flex flex-wrap gap-2'>
                {allPlatforms.map((platform, idx) => {
                  const Icon = getIcon(platform.iconKey);
                  return (
                    <div
                      key={idx}
                      className='flex items-center gap-2 rounded-lg border border-[#2e2a25] bg-[#211e1b] px-3.5 py-2.5 transition-colors duration-200 hover:border-[#3a3330] hover:bg-[#2a2520]'
                    >
                      <Icon className='h-3.5 w-3.5 text-[#9a8878]' />
                      <span className='font-mono text-[11px] tracking-wide text-[#7a6f65]'>
                        {platform.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </m.div>
          </div>

          {/* ── RIGHT: Go-live image ──────────────────────────── */}
          <m.div variants={fromRight} className='w-full'>
            <div className='relative'>

              {/* Outer card frame */}
              <div className='relative overflow-hidden rounded-2xl border border-[#2e2a25] shadow-[0_8px_48px_rgba(0,0,0,0.4)]'>

                {/* Top bar */}
                <div className='flex items-center justify-between border-b border-[#2e2a25] bg-[#100f0d] px-4 py-2.5'>
                  <span className='font-mono text-[10px] tracking-wider text-[#5a4e44]'>
                    BROADCAST STUDIO
                  </span>
                  <div className='flex items-center gap-1.5'>
                    <span className='relative inline-flex h-2 w-2'>
                      <span className='absolute inset-0 animate-ping rounded-full bg-red-500/60' />
                      <span className='relative h-2 w-2 rounded-full bg-red-500' />
                    </span>
                    <span className='font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-red-400'>
                      ON AIR
                    </span>
                  </div>
                </div>

                {/* Image */}
                <div className='relative'>
                  <Image
                    width={700}
                    height={520}
                    src='/images/go-live-section.png'
                    alt='Go Live Studio Interface'
                    className='h-auto w-full object-cover'
                  />
                </div>

                {/* Bottom bar */}
                <div className='flex items-center justify-between border-t border-[#2e2a25] bg-[#100f0d] px-4 py-2.5'>
                  <span className='font-mono text-[10px] text-[#5a4e44]'>
                    FULL HD · SIMULCAST
                  </span>
                  <div className='flex items-center gap-1.5'>
                    <span className='h-1.5 w-1.5 rounded-full bg-[#b8620a]' />
                    <span className='font-mono text-[10px] text-[#b8620a]'>Live</span>
                  </div>
                </div>
              </div>

              {/* Viewer count floating card */}
              <m.div
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                transition={{ delay: 0.9, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className='absolute -bottom-4 -left-4 flex items-center gap-3 rounded-xl border border-[#2e2a25] bg-[#1a1714]/95 px-4 py-3 shadow-2xl backdrop-blur-sm'
              >
                <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-[#2e2a25]'>
                  <svg width='15' height='15' viewBox='0 0 24 24' fill='none' aria-hidden>
                    <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' stroke='#9a8878' strokeWidth='2' />
                    <circle cx='12' cy='12' r='3' fill='#9a8878' />
                  </svg>
                </div>
                <div>
                  <p className='font-mono text-[10px] uppercase tracking-wider text-[#5a4e44]'>
                    Live viewers
                  </p>
                  <p className='font-syne text-sm font-bold text-white'>3,241</p>
                </div>
              </m.div>

              {/* Platform count floating card */}
              <m.div
                initial={{ opacity: 0, y: -8 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
                transition={{ delay: 1.05, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className='absolute -top-4 -right-3 flex items-center gap-3 rounded-xl border border-[#2e2a25] bg-[#1a1714]/95 px-4 py-3 shadow-2xl backdrop-blur-sm'
              >
                <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-[#2e2a25]'>
                  <svg width='15' height='15' viewBox='0 0 24 24' fill='none' aria-hidden>
                    <rect x='2' y='3' width='20' height='14' rx='2' stroke='#9a8878' strokeWidth='2' />
                    <path d='M8 21h8M12 17v4' stroke='#9a8878' strokeWidth='2' strokeLinecap='round' />
                  </svg>
                </div>
                <div>
                  <p className='font-mono text-[10px] uppercase tracking-wider text-[#5a4e44]'>
                    Streaming to
                  </p>
                  <p className='font-syne text-sm font-bold text-white'>7 Platforms</p>
                </div>
              </m.div>
            </div>
          </m.div>
        </div>
      </m.div>
    </section>
  );
};

export default GoLiveSection;
