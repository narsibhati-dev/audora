'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { m, useInView, useReducedMotion } from 'framer-motion';
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
      <svg width='16' height='16' fill='none' viewBox='0 0 24 24' aria-hidden>
        <circle cx='12' cy='8' r='4' fill='#9a8878' />
        <rect x='4' y='16' width='16' height='4' rx='2' fill='#9a8878' />
      </svg>
    ),
  },
];

const FEATURES = [
  {
    label: 'Separate tracks',
    desc: 'Independent audio + video per participant, lossless.',
  },
  {
    label: 'Local-first',
    desc: 'Records to disk, no dropped frames on bad connections.',
  },
  {
    label: '4K UHD · 60fps',
    desc: 'Full-resolution capture. No quality compromise.',
  },
];

const TECH_SPECS = ['48 kHz', 'Lossless WAV', '4K UHD', '60fps'];

// Bar heights for decorative waveform
const WAVE_BARS = [18, 32, 22, 44, 16, 38, 28, 50, 20, 42, 34, 54, 18, 40, 26, 48, 22, 36, 30, 52];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

const fromLeft = {
  hidden: { opacity: 0, x: -26 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

const fromRight = {
  hidden: { opacity: 0, x: 24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const RecordSection = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      ref={ref}
      className='relative overflow-hidden bg-[#f0ece5] py-28'
      aria-labelledby='record-heading'
    >
      {/* Top rule */}
      <div aria-hidden className='absolute top-0 left-0 right-0 h-px bg-[#e4dfd6]' />

      {/* Faint background "01" watermark */}
      <div
        aria-hidden
        className='pointer-events-none absolute bottom-0 left-0 select-none font-syne text-[20rem] font-extrabold leading-none tracking-[-0.05em] text-[#1a1714]/[0.025]'
        style={{ lineHeight: 1 }}
      >
        01
      </div>

      <m.div
        variants={stagger}
        initial={prefersReducedMotion ? 'show' : 'hidden'}
        animate={inView || prefersReducedMotion ? 'show' : 'hidden'}
        className='relative z-10 mx-auto max-w-10xl px-8 sm:px-12 lg:px-16 xl:px-24'
      >
        <div className='grid grid-cols-1 items-start gap-16 lg:grid-cols-[1fr_480px]'>

          {/* ── LEFT: Copy ─────────────────────────────────────── */}
          <div className='flex flex-col'>

            {/* Section label */}
            <m.div variants={fadeUp} className='mb-8 flex items-center gap-2.5'>
              <span className='h-px w-6 bg-[#b8620a]/60' />
              <span className='font-mono text-[11px] uppercase tracking-[0.24em] text-[#b8620a]'>
                01 - Record
              </span>
            </m.div>

            {/* Headline */}
            <m.h2
              id='record-heading'
              variants={fromLeft}
              className='font-syne mb-6 text-[clamp(3.2rem,7vw,6.5rem)] font-extrabold leading-none tracking-[-0.045em] text-[#1a1714]'
            >
              Record it.
            </m.h2>

            {/* Tech spec pill row */}
            <m.div variants={fadeUp} className='mb-10 flex flex-wrap gap-2'>
              {TECH_SPECS.map(spec => (
                <span
                  key={spec}
                  className='rounded-full border border-[#ddd6cc] bg-white px-3.5 py-1.5 font-mono text-[11px] tracking-[0.12em] text-[#7a6f65]'
                >
                  {spec}
                </span>
              ))}
            </m.div>

            {/* Feature rows */}
            <m.div variants={fadeUp} className='mb-10 space-y-3'>
              {FEATURES.map((feat, i) => (
                <div
                  key={i}
                  className='flex items-start gap-4 rounded-xl border border-[#e4dfd6] bg-white/60 px-5 py-4'
                >
                  <span className='mt-0.5 shrink-0 font-mono text-[10px] font-bold tracking-[0.18em] text-[#b8620a]/60'>
                    0{i + 1}
                  </span>
                  <div>
                    <p className='mb-0.5 text-[14px] font-semibold text-[#1a1714]'>{feat.label}</p>
                    <p className='text-[13px] leading-relaxed text-[#9a8878]'>{feat.desc}</p>
                  </div>
                </div>
              ))}
            </m.div>

            {/* CTAs */}
            <m.div variants={fadeUp} className='mb-12 flex flex-wrap items-center gap-4'>
              <Link
                href={siteMetadata.dashboard}
                className='group inline-flex items-center gap-2 rounded-lg bg-[#1a1714] px-7 py-3.5 text-sm font-semibold text-[#f7f5f1] transition-all duration-200 hover:bg-[#2e2a25] active:scale-[0.98]'
                aria-label='Start recording for free'
              >
                Start for Free
                <span className='transition-transform duration-200 group-hover:translate-x-0.5'>→</span>
              </Link>
              <Link
                href='/recording'
                className='inline-flex min-h-[44px] items-center text-sm text-[#7a6f65] underline underline-offset-4 decoration-[#c8b9a8]/60 transition-colors hover:text-[#1a1714]'
              >
                Learn more
              </Link>
            </m.div>

            {/* Decorative waveform */}
            <m.div
              variants={fadeUp}
              className='flex items-end gap-[3px]'
              aria-hidden
            >
              {WAVE_BARS.map((h, i) => (
                <m.div
                  key={i}
                  className='w-[3px] shrink-0 rounded-full bg-[#b8620a]'
                  style={{ height: h, opacity: 0.15 + (i % 5) * 0.06 }}
                  animate={
                    prefersReducedMotion
                      ? {}
                      : {
                          scaleY: [1, 0.3 + Math.random() * 0.7, 0.5, 1],
                          opacity: [
                            0.15 + (i % 5) * 0.06,
                            0.35 + (i % 3) * 0.1,
                            0.2,
                            0.15 + (i % 5) * 0.06,
                          ],
                        }
                  }
                  transition={{
                    duration: 2.4 + (i % 4) * 0.4,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut',
                    delay: i * 0.06,
                  }}
                />
              ))}
            </m.div>
          </div>

          {/* ── RIGHT: Visuals ─────────────────────────────────── */}
          <m.div variants={fromRight} className='flex flex-col gap-3'>

            {/* 4K preview card */}
            <div className='relative overflow-hidden rounded-2xl border border-[#e4dfd6] shadow-[0_8px_32px_rgba(0,0,0,0.09)]'>
              <Image
                src='/images/4k.png'
                alt='4K Quality Recording'
                width={1200}
                height={800}
                className='h-auto w-full object-cover'
                priority
                sizes='480px'
              />

              {/* Bottom gradient overlay */}
              <div className='absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#1a1714]/70 to-transparent' />

              {/* REC badge — pulsing */}
              <div className='absolute top-3.5 right-3.5 z-10 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 shadow-sm backdrop-blur-sm'>
                <span className='relative flex h-2 w-2 shrink-0'>
                  <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-60' />
                  <span className='relative inline-flex h-2 w-2 rounded-full bg-red-500' />
                </span>
                <span className='font-mono text-[10px] font-bold uppercase tracking-wider text-[#3a3330]'>
                  REC
                </span>
              </div>

              {/* Recording timer */}
              <div className='absolute top-3.5 left-3.5 z-10 rounded-full bg-black/40 px-3 py-1.5 backdrop-blur-sm'>
                <span className='font-mono text-[10px] tabular-nums text-white/80'>
                  00:14:32
                </span>
              </div>

              {/* Bottom: waveform + label */}
              <div className='absolute inset-x-0 bottom-0 z-10 flex items-end justify-between px-4 pb-3.5'>
                {/* Mini waveform */}
                <div className='flex items-end gap-[2px]'>
                  {[14, 24, 18, 32, 12, 26, 20, 36, 16, 28].map((h, i) => (
                    <div
                      key={i}
                      aria-hidden
                      className='w-[2px] shrink-0 rounded-full bg-white'
                      style={{ height: h * 0.55, opacity: 0.4 + (i % 3) * 0.15 }}
                    />
                  ))}
                </div>
                <span className='font-mono text-[10px] uppercase tracking-[0.14em] text-white/60'>
                  4K · Lossless
                </span>
              </div>
            </div>

            {/* Tracks download card */}
            <div className='rounded-2xl border border-[#e4dfd6] bg-white px-5 pt-4 pb-3 shadow-[0_2px_12px_rgba(0,0,0,0.05)]'>

              {/* Card header */}
              <div className='mb-3 flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <div className='h-1.5 w-1.5 rounded-full bg-[#b8620a]' />
                  <p className='font-mono text-[10px] uppercase tracking-[0.18em] text-[#b0a394]'>
                    Download separate tracks
                  </p>
                </div>
                <span className='rounded-full border border-[#e4dfd6] bg-[#f5f0e8] px-2.5 py-1 font-mono text-[10px] text-[#b8620a]'>
                  Lossless
                </span>
              </div>

              {/* Thin divider */}
              <div className='mb-3 h-px bg-[#f0ece5]' />

              <div className='space-y-1.5'>
                {participants.map(p => (
                  <div
                    key={p.name}
                    className='group flex items-center justify-between rounded-xl border border-transparent px-3 py-2.5 transition-all duration-200 hover:border-[#e4dfd6] hover:bg-[#faf8f5]'
                  >
                    <div className='flex items-center gap-3'>
                      {p.avatar ? (
                        <div className='relative h-8 w-8 shrink-0'>
                          <Image
                            src={p.avatar}
                            alt={`${p.name}'s avatar`}
                            fill
                            sizes='32px'
                            className='rounded-full border border-[#e4dfd6] object-cover'
                          />
                        </div>
                      ) : (
                        <div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#e4dfd6] bg-[#f0ece5]'>
                          {p.icon}
                        </div>
                      )}
                      <div>
                        <p className='text-[13px] font-medium text-[#1a1714]'>{p.name}</p>
                        {p.status && (
                          <div className='flex items-center gap-1'>
                            <span className='h-1 w-1 rounded-full bg-emerald-400' />
                            <p className='font-mono text-[10px] text-[#b0a394]'>{p.status}</p>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='flex items-center gap-0.5'>
                      <span className='mr-2 hidden font-mono text-[9px] text-[#d0c8be] sm:block'>
                        {p.resolution}
                      </span>
                      <button
                        className='inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg font-mono text-[11px] text-[#b0a394] transition-all hover:bg-[#f0ece5] hover:text-[#b8620a]'
                        aria-label={`Download ${p.name}'s WAV`}
                      >
                        WAV
                      </button>
                      <button
                        className='inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg font-mono text-[11px] text-[#b0a394] transition-all hover:bg-[#f0ece5] hover:text-[#b8620a]'
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
