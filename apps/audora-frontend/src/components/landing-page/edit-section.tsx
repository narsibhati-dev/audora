'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { m, useInView, useReducedMotion } from 'framer-motion';
import siteMetadata from '@/lib/seo/siteMetadata';

const FEATURES = [
  {
    label: 'Edit by text, not clips',
    desc: 'AI transcribes every word. Delete a sentence, the clip disappears.',
  },
  {
    label: 'Cloud-native',
    desc: 'No exports, no file juggling. Everything lives in your browser.',
  },
  {
    label: 'Multi-track timeline',
    desc: 'Per-participant tracks. Precision control. Non-destructive, always.',
  },
];

const TECH_SPECS = ['AI Transcript', 'Multi-track', 'Cloud', 'Non-destructive'];

// Decorative editing-cursor bars
const CURSOR_BARS = [12, 28, 18, 36, 14, 30, 22, 40, 16, 34, 24, 44, 12, 32, 20, 38, 14, 28, 18, 36];

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

const EditSection = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section ref={ref} className='relative overflow-hidden bg-[#f7f5f1] py-28'>

      {/* Top rule */}
      <div aria-hidden className='absolute top-0 left-0 right-0 h-px bg-[#e4dfd6]' />

      {/* "02" background watermark */}
      <div
        aria-hidden
        className='pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none font-syne text-[20rem] font-extrabold leading-none tracking-[-0.05em] text-[#1a1714]/[0.025]'
        style={{ lineHeight: 1 }}
      >
        02
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
            <m.div variants={fadeUp} className='mb-6 flex items-center gap-2.5'>
              <span className='h-px w-6 bg-[#b8620a]/60' />
              <span className='font-mono text-[11px] uppercase tracking-[0.24em] text-[#b8620a]'>
                02 - Edit
              </span>
            </m.div>

            {/* Headline */}
            <m.h2
              variants={fromLeft}
              className='font-syne mb-5 text-[clamp(3.2rem,7vw,6.5rem)] font-extrabold leading-none tracking-[-0.045em] text-[#1a1714]'
            >
              Edit it.
            </m.h2>

            {/* Tech spec pills */}
            <m.div variants={fadeUp} className='mb-7 flex flex-wrap gap-2'>
              {TECH_SPECS.map(spec => (
                <span
                  key={spec}
                  className='rounded-full border border-[#ddd6cc] bg-[#f0ece5] px-3.5 py-1.5 font-mono text-[11px] tracking-[0.12em] text-[#7a6f65]'
                >
                  {spec}
                </span>
              ))}
            </m.div>

            {/* Numbered feature cards */}
            <m.div variants={fadeUp} className='mb-7 space-y-3'>
              {FEATURES.map((feat, i) => (
                <div
                  key={i}
                  className='flex items-start gap-4 rounded-xl border border-[#e4dfd6] bg-white/70 px-5 py-4'
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
            <m.div variants={fadeUp} className='mb-8 flex flex-wrap items-center gap-4'>
              <Link
                href={siteMetadata.dashboard}
                className='group inline-flex items-center gap-2 rounded-lg bg-[#1a1714] px-7 py-3.5 text-sm font-semibold text-[#f7f5f1] transition-all duration-200 hover:bg-[#2e2a25] active:scale-[0.98]'
                aria-label='Start editing for free'
              >
                Start for Free
                <span className='transition-transform duration-200 group-hover:translate-x-0.5'>→</span>
              </Link>
              <Link
                href='/video-editor'
                className='inline-flex min-h-[44px] items-center text-sm text-[#7a6f65] underline underline-offset-4 decoration-[#c8b9a8]/60 transition-colors hover:text-[#1a1714]'
              >
                Learn more
              </Link>
            </m.div>

            {/* Decorative cursor bars — mirrors RecordSection waveform */}
            <m.div variants={fadeUp} className='flex items-end gap-[3px]' aria-hidden>
              {CURSOR_BARS.map((h, i) => (
                <m.div
                  key={i}
                  className='w-[3px] shrink-0 rounded-full bg-[#b8620a]'
                  style={{ height: h, opacity: 0.12 + (i % 5) * 0.05 }}
                  animate={
                    prefersReducedMotion
                      ? {}
                      : {
                          scaleY: [1, 0.2 + (i % 3) * 0.3, 0.6, 1],
                          opacity: [
                            0.12 + (i % 5) * 0.05,
                            0.3 + (i % 4) * 0.08,
                            0.15,
                            0.12 + (i % 5) * 0.05,
                          ],
                        }
                  }
                  transition={{
                    duration: 2.2 + (i % 5) * 0.35,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut',
                    delay: i * 0.07,
                  }}
                />
              ))}
            </m.div>

          </div>

          {/* ── RIGHT: Two stacked cards ────────────────────────── */}
          <m.div variants={fromRight} className='flex flex-col gap-3'>

            {/* Card 1: Editor mockup */}
            <div className='relative overflow-hidden rounded-2xl border border-[#e4dfd6] shadow-[0_8px_40px_rgba(0,0,0,0.09)]'>

              {/* Browser chrome */}
              <div className='flex items-center justify-between border-b border-[#e4dfd6] bg-[#f0ece5] px-4 py-3'>
                <div className='flex items-center gap-2'>
                  <span className='h-2.5 w-2.5 rounded-full bg-[#e8d5c4]' />
                  <span className='h-2.5 w-2.5 rounded-full bg-[#e8d5c4]' />
                  <span className='h-2.5 w-2.5 rounded-full bg-[#e8d5c4]' />
                </div>
                <div className='flex items-center gap-2 rounded-md border border-[#e4dfd6] bg-white/70 px-3 py-1'>
                  <span className='font-mono text-[11px] text-[#9a8878]'>app.audora.xyz/editor</span>
                </div>
                <div className='flex items-center gap-1.5'>
                  <span className='relative flex h-2 w-2'>
                    <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-[#b8620a] opacity-40' />
                    <span className='relative inline-flex h-2 w-2 rounded-full bg-[#b8620a]' />
                  </span>
                  <span className='font-mono text-[10px] text-[#b8620a]'>Live sync</span>
                </div>
              </div>

              <div className='relative'>
                <Image
                  src='/images/editor-mockup-2.png'
                  alt='Audora AI editor interface showing transcript-based editing'
                  width={1200}
                  height={700}
                  className='h-auto w-full object-cover'
                />

                {/* Bottom gradient */}
                <div className='absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#1a1714]/60 to-transparent' />

                {/* AI badge — top right */}
                <div className='absolute top-3.5 right-3.5 z-10 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 shadow-sm backdrop-blur-sm'>
                  <span className='relative flex h-2 w-2 shrink-0'>
                    <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-[#b8620a] opacity-50' />
                    <span className='relative inline-flex h-2 w-2 rounded-full bg-[#b8620a]' />
                  </span>
                  <span className='font-mono text-[10px] font-bold uppercase tracking-wider text-[#3a3330]'>
                    AI Editing
                  </span>
                </div>

                {/* Bottom: word count + label */}
                <div className='absolute inset-x-0 bottom-0 z-10 flex items-end justify-between px-4 pb-3.5'>
                  <span className='font-mono text-[10px] tabular-nums text-white/70'>
                    2,847 words
                  </span>
                  <span className='font-mono text-[10px] uppercase tracking-[0.14em] text-white/60'>
                    Transcript · Cloud
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: AI transcript preview */}
            <div className='rounded-2xl border border-[#e4dfd6] bg-white px-5 pt-4 pb-4 shadow-[0_2px_12px_rgba(0,0,0,0.05)]'>

              {/* Header */}
              <div className='mb-3 flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <div className='h-1.5 w-1.5 rounded-full bg-[#b8620a]' />
                  <p className='font-mono text-[10px] uppercase tracking-[0.18em] text-[#b0a394]'>
                    Transcript edit
                  </p>
                </div>
                <span className='flex items-center gap-1.5 rounded-full border border-[#e4dfd6] bg-[#f5f0e8] px-2.5 py-1'>
                  <span className='h-1.5 w-1.5 rounded-full bg-emerald-400' />
                  <span className='font-mono text-[10px] text-[#b8620a]'>AI cleaned</span>
                </span>
              </div>

              {/* Thin divider */}
              <div className='mb-3 h-px bg-[#f0ece5]' />

              {/* Transcript text */}
              <div className='rounded-xl border border-[#f0ece5] bg-[#faf8f5] px-4 py-3'>
                <p className='text-[13px] leading-[2] text-[#5a4e44]'>
                  <span className='rounded bg-red-50 px-0.5 text-[#c8b9a8] line-through'>um</span>{' '}
                  the thing is,{' '}
                  <span className='rounded bg-red-50 px-0.5 text-[#c8b9a8] line-through'>you know</span>{' '}
                  this podcast is{' '}
                  <span className='rounded bg-red-50 px-0.5 text-[#c8b9a8] line-through'>basically</span>{' '}
                  about making great content.
                </p>
              </div>

              {/* Footer stats */}
              <div className='mt-3 flex items-center justify-between border-t border-[#f0ece5] pt-3'>
                <span className='font-mono text-[10px] text-[#b0a394]'>3 filler words removed</span>
                <span className='font-mono text-[10px] text-[#b0a394]'>~0.4s saved</span>
              </div>
            </div>

          </m.div>
        </div>
      </m.div>
    </section>
  );
};

export default EditSection;
