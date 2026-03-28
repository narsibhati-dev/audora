'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { m, useInView } from 'framer-motion';
import siteMetadata from '@/lib/seo/siteMetadata';

interface Participant {
  name: string;
  avatar: string | null;
  status: string;
  resolution: string;
  icon?: React.ReactNode;
}

const participants: Participant[] = [
  {
    name: 'Narsi',
    avatar: '/images/team/narsi-bhati.jpg',
    status: 'Ready',
    resolution: '3840×2160',
  },
  {
    name: 'Stephen',
    avatar: '/images/stephen.png',
    status: 'Ready',
    resolution: '3840×2160',
  },
  {
    name: 'All Speakers',
    avatar: null,
    status: '',
    resolution: '3840×2160',
    icon: (
      <svg width='20' height='20' fill='none' viewBox='0 0 24 24' aria-hidden>
        <circle cx='12' cy='8' r='4' fill='#9a8878' />
        <rect x='4' y='16' width='16' height='4' rx='2' fill='#9a8878' />
      </svg>
    ),
  },
];

const FEATURES = [
  'Separate audio + video track per participant',
  'Local recording — no internet dependency',
  'Up to 4K UHD resolution at 60fps',
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
  hidden: { opacity: 0, x: 24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const RecordSection = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section
      ref={ref}
      className='relative overflow-hidden bg-[#f0ece5] py-28'
      aria-labelledby='record-heading'
    >
      {/* Top rule */}
      <div aria-hidden className='absolute top-0 left-0 right-0 h-px bg-[#e4dfd6]' />

      <m.div
        variants={stagger}
        initial='hidden'
        animate={inView ? 'show' : 'hidden'}
        className='relative z-10 mx-auto max-w-10xl px-8 sm:px-12 lg:px-16 xl:px-24'
      >
        <div className='grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_460px] lg:gap-16'>

          {/* ── LEFT: Copy ────────────────────────────────────── */}
          <div className='flex flex-col justify-center'>

            {/* Section label */}
            <m.div variants={fadeUp} className='mb-8 flex items-center gap-2.5'>
              <span className='h-px w-6 bg-[#b8620a]/60' />
              <span className='font-mono text-[11px] uppercase tracking-[0.24em] text-[#b8620a]'>
                01 — Record
              </span>
            </m.div>

            {/* Headline */}
            <m.h2
              id='record-heading'
              variants={fromLeft}
              className='font-syne mb-7 text-[clamp(3rem,7vw,6rem)] font-extrabold leading-none tracking-[-0.045em] text-[#1a1714]'
            >
              Record it.
            </m.h2>

            {/* Feature bullets */}
            <m.div variants={fadeUp} className='mb-10 space-y-3.5'>
              {FEATURES.map((feat, i) => (
                <div key={i} className='flex items-start gap-3'>
                  <div className='mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b8620a]' />
                  <p className='text-[15px] leading-relaxed text-[#7a6f65]'>{feat}</p>
                </div>
              ))}
            </m.div>

            {/* CTAs */}
            <m.div variants={fadeUp} className='flex flex-wrap items-center gap-4'>
              <a
                href={siteMetadata.dashboard}
                className='group inline-flex items-center gap-2 rounded-lg bg-[#1a1714] px-7 py-3.5 text-sm font-semibold text-[#f7f5f1] transition-all duration-200 hover:bg-[#2e2a25] active:scale-[0.98]'
                aria-label='Start recording for free'
              >
                Start for Free
                <span className='transition-transform duration-200 group-hover:translate-x-0.5'>→</span>
              </a>
              <a
                href='/recording'
                className='text-sm text-[#7a6f65] underline underline-offset-4 decoration-[#c8b9a8]/60 transition-colors hover:text-[#1a1714]'
              >
                Learn more
              </a>
            </m.div>
          </div>

          {/* ── RIGHT: Visuals ────────────────────────────────── */}
          <m.div variants={fromRight} className='flex flex-col gap-4'>

            {/* 4K preview */}
            <div className='relative overflow-hidden rounded-2xl border border-[#e4dfd6] shadow-[0_4px_24px_rgba(0,0,0,0.07)]'>
              <Image
                src='/images/4k.png'
                alt='4K Quality Recording'
                width={1200}
                height={800}
                className='h-auto w-full object-cover'
                priority
                sizes='460px'
              />

              {/* REC badge */}
              <div className='absolute top-4 right-4 z-10 flex items-center gap-1.5 rounded-md bg-white/80 px-2.5 py-1 backdrop-blur-sm'>
                <span className='h-1.5 w-1.5 rounded-full bg-red-400' />
                <span className='font-mono text-[9px] font-medium uppercase tracking-wider text-[#5a4e44]'>
                  Rec
                </span>
              </div>
            </div>

            {/* Tracks download card */}
            <div className='rounded-2xl border border-[#e4dfd6] bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.05)]'>
              <div className='mb-4 flex items-center justify-between'>
                <p className='font-mono text-[10px] uppercase tracking-[0.18em] text-[#b0a394]'>
                  Download separate tracks
                </p>
                <span className='rounded-md border border-[#ddd6cc] bg-[#f5f0e8] px-2 py-0.5 font-mono text-[10px] text-[#b8620a]'>
                  Lossless
                </span>
              </div>

              <div className='space-y-2'>
                {participants.map(p => (
                  <div
                    key={p.name}
                    className='group flex items-center justify-between rounded-xl border border-[#ede8e1] bg-[#faf8f5] px-4 py-3 transition-all duration-200 hover:border-[#ddd6cc] hover:bg-[#f5f2ed]'
                  >
                    <div className='flex items-center gap-3'>
                      {p.avatar ? (
                        <div className='relative h-9 w-9 shrink-0'>
                          <Image
                            src={p.avatar}
                            alt={`${p.name}'s avatar`}
                            fill
                            sizes='36px'
                            className='rounded-full border border-[#e4dfd6] object-cover'
                          />
                        </div>
                      ) : (
                        <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#e4dfd6] bg-[#f0ece5]'>
                          {p.icon}
                        </div>
                      )}
                      <div>
                        <p className='text-sm font-medium text-[#1a1714]'>{p.name}</p>
                        {p.status && (
                          <p className='font-mono text-[11px] text-[#b0a394]'>{p.status}</p>
                        )}
                      </div>
                    </div>
                    <div className='flex items-center gap-4'>
                      <span className='hidden font-mono text-[10px] text-[#c8b9a8] sm:block'>
                        {p.resolution}
                      </span>
                      <button
                        className='font-mono text-[11px] text-[#9a8878] transition-colors hover:text-[#b8620a]'
                        aria-label={`Download ${p.name}'s WAV`}
                      >
                        WAV
                      </button>
                      <button
                        className='font-mono text-[11px] text-[#9a8878] transition-colors hover:text-[#b8620a]'
                        aria-label={`Download ${p.name}'s MP4`}
                      >
                        MP4
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </m.div>
        </div>
      </m.div>
    </section>
  );
};

export default RecordSection;
