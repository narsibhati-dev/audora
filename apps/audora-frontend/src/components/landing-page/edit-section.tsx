'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { m, useInView } from 'framer-motion';
import siteMetadata from '@/lib/seo/siteMetadata';

const FEATURES = [
  'AI-powered transcript-based editing',
  'No file transfers — everything stays in the cloud',
  'Multi-track timeline with precision controls',
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

const EditSection = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section ref={ref} className='relative overflow-hidden bg-[#f7f5f1] py-28'>

      {/* Top rule */}
      <div aria-hidden className='absolute top-0 left-0 right-0 h-px bg-[#e4dfd6]' />

      <m.div
        variants={stagger}
        initial='hidden'
        animate={inView ? 'show' : 'hidden'}
        className='relative z-10 mx-auto max-w-10xl px-8 sm:px-12 lg:px-16 xl:px-24'
      >
        <div className='grid grid-cols-1 items-center gap-14 lg:grid-cols-[380px_1fr] lg:gap-16'>

          {/* ── LEFT: Copy ────────────────────────────────────── */}
          <div className='flex flex-col'>

            {/* Section label */}
            <m.div variants={fadeUp} className='mb-8 flex items-center gap-2.5'>
              <span className='h-px w-6 bg-[#b8620a]/60' />
              <span className='font-mono text-[11px] uppercase tracking-[0.24em] text-[#b8620a]'>
                02 — Edit
              </span>
            </m.div>

            {/* Headline */}
            <m.h2
              variants={fromLeft}
              className='font-syne mb-7 text-[clamp(3rem,7vw,6rem)] font-extrabold leading-none tracking-[-0.045em] text-[#1a1714]'
            >
              Edit it.
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
                aria-label='Start editing for free'
              >
                Start for Free
                <span className='transition-transform duration-200 group-hover:translate-x-0.5'>→</span>
              </a>
              <a
                href='/video-editor'
                className='text-sm text-[#7a6f65] underline underline-offset-4 decoration-[#c8b9a8]/60 transition-colors hover:text-[#1a1714]'
              >
                Learn more
              </a>
            </m.div>
          </div>

          {/* ── RIGHT: Editor mockup ──────────────────────────── */}
          <m.div variants={fromRight} className='w-full'>
            <div className='relative overflow-hidden rounded-2xl border border-[#e4dfd6] shadow-[0_4px_32px_rgba(0,0,0,0.08)]'>

              {/* Browser chrome */}
              <div className='flex items-center justify-between border-b border-[#e4dfd6] bg-[#f0ece5] px-4 py-2.5'>
                <div className='flex items-center gap-2'>
                  <span className='h-2.5 w-2.5 rounded-full bg-[#ddd6cc]' />
                  <span className='h-2.5 w-2.5 rounded-full bg-[#ddd6cc]' />
                  <span className='h-2.5 w-2.5 rounded-full bg-[#ddd6cc]' />
                </div>
                <div className='flex items-center gap-2 rounded-md border border-[#e4dfd6] bg-white/70 px-3 py-1'>
                  <span className='font-mono text-[11px] text-[#9a8878]'>
                    app.audora.xyz/editor
                  </span>
                </div>
                <div className='flex items-center gap-1.5'>
                  <span className='h-1.5 w-1.5 rounded-full bg-[#b8620a]' />
                  <span className='font-mono text-[10px] text-[#b8620a]'>Live</span>
                </div>
              </div>

              <Image
                src='/images/editor-mockup-2.png'
                alt='Audora editor interface'
                width={1200}
                height={700}
                className='h-auto w-full object-cover'
                priority
              />
            </div>
          </m.div>
        </div>
      </m.div>
    </section>
  );
};

export default EditSection;
