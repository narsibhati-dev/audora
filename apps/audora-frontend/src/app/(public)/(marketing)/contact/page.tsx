'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { m, useInView, useReducedMotion, type Variants } from 'motion/react';
import { contactInfo } from '@/data';

// ── Animation variants ───────────────────────────────────────────────────────
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const fromLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};

const fromRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};

// ── Waveform bar heights (decorative) ────────────────────────────────────────
const WAVE_BARS = [28, 44, 18, 60, 36, 52, 22, 64, 30, 48, 16, 42, 68, 24, 50, 34, 58, 20, 46, 32, 56, 26, 40, 14, 62];

const CONTACT_ITEMS = [
  { num: '01', ...contactInfo.email },
  { num: '02', ...contactInfo.availability },
  { num: '03', ...contactInfo.location },
];

// ── Page ─────────────────────────────────────────────────────────────────────
const ContactPage = () => {
  const prefersReducedMotion = useReducedMotion();
  const splitRef = useRef<HTMLDivElement>(null);
  const splitInView = useInView(splitRef, { once: true, margin: '-8%' });

  return (
    <div className='min-h-screen bg-[#f7f5f1]'>
      {/* Grain texture */}
      <div className='pointer-events-none fixed inset-0 z-0 opacity-[0.03] mix-blend-multiply' aria-hidden>
        <svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
          <filter id='grain-contact'>
            <feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch' />
            <feColorMatrix type='saturate' values='0' />
          </filter>
          <rect width='100%' height='100%' filter='url(#grain-contact)' />
        </svg>
      </div>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className='relative overflow-hidden bg-[#f7f5f1] pb-10 pt-24 md:pb-14 md:pt-32'>
        <div className='pointer-events-none absolute -left-48 -top-48 h-[700px] w-[700px] rounded-full bg-[#b8620a]/[0.06] blur-3xl' aria-hidden />
        <div className='pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 select-none font-syne text-[22rem] font-extrabold leading-none tracking-[-0.06em] text-[#1a1714]/[0.025]' aria-hidden>
          ✦
        </div>

        <m.div
          variants={stagger}
          initial={prefersReducedMotion ? 'show' : 'hidden'}
          animate='show'
          className='relative z-10 mx-auto max-w-[90rem] px-8 sm:px-12 lg:px-16 xl:px-24'
        >
          <m.div variants={fadeUp} className='mb-5 flex items-center gap-2.5'>
            <span className='h-px w-6 bg-[#b8620a]/60' />
            <span className='font-mono text-[11px] uppercase tracking-[0.24em] text-[#b8620a]'>
              Get in touch
            </span>
          </m.div>

          <m.h1
            variants={fromLeft}
            className='mb-4 font-syne text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-[#1a1714]'
          >
            Let&apos;s
            <br />
            <span className='text-[#9a8878]'>talk.</span>
          </m.h1>

          <m.p variants={fadeUp} className='max-w-lg text-[0.95rem] leading-[1.7] text-[#7a6f65]'>
            Got a question, a partnership idea, or just want to say hello?
            We&apos;d love to hear from you.
          </m.p>
        </m.div>

        <div aria-hidden className='absolute inset-x-0 bottom-0 h-px bg-[#e4dfd6]' />
      </section>

      {/* ── SPLIT: Info + Image ───────────────────────────────────── */}
      <section className='relative bg-[#f7f5f1] py-24 lg:py-32'>
        <m.div
          ref={splitRef}
          variants={stagger}
          initial={prefersReducedMotion ? 'show' : 'hidden'}
          animate={splitInView || prefersReducedMotion ? 'show' : 'hidden'}
          className='mx-auto max-w-[90rem] px-8 sm:px-12 lg:px-16 xl:px-24'
        >
          <div className='grid grid-cols-1 gap-16 lg:grid-cols-[5fr_7fr] lg:gap-16 xl:gap-24'>

            {/* LEFT: Contact Info */}
            <div>
              <m.div variants={fadeUp} className='mb-6 flex items-center gap-2.5'>
                <span className='h-px w-6 bg-[#b8620a]/60' />
                <span className='font-mono text-[11px] uppercase tracking-[0.24em] text-[#b8620a]'>
                  Where to reach us
                </span>
              </m.div>

              <m.h2
                variants={fromLeft}
                className='mb-14 font-syne text-[clamp(1.7rem,3.5vw,2.8rem)] font-extrabold leading-[1.1] tracking-[-0.04em] text-[#1a1714]'
              >
                We&apos;re just a
                <br />
                <span className='text-[#9a8878]'>message away.</span>
              </m.h2>

              {/* Contact items */}
              <div>
                {CONTACT_ITEMS.map(item => (
                  <m.div
                    key={item.num}
                    variants={fadeUp}
                    className='flex items-start gap-5 border-t border-[#e4dfd6] py-7 last:border-b'
                  >
                    <span className='mt-0.5 w-7 shrink-0 font-mono text-[11px] font-semibold tracking-[0.16em] text-[#b8620a]'>
                      {item.num}
                    </span>
                    <div className='flex-1'>
                      <p className='mb-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[#c8b9a8]'>
                        {item.label}
                      </p>
                      {'href' in item && item.href ? (
                        <a
                          href={item.href}
                          className='font-syne text-[1.05rem] font-extrabold tracking-[-0.02em] text-[#1a1714] transition-colors duration-200 hover:text-[#b8620a]'
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className='font-syne text-[1.05rem] font-extrabold tracking-[-0.02em] text-[#1a1714]'>
                          {item.value}
                        </p>
                      )}
                      <p className='mt-1 text-[13px] leading-[1.6] text-[#9a8878]'>
                        {item.note}
                      </p>
                    </div>
                  </m.div>
                ))}
              </div>

              {/* Waveform decoration */}
              <m.div variants={fadeUp} className='mt-14 flex h-14 items-end gap-[2.5px]' aria-hidden>
                {WAVE_BARS.map((h, i) => (
                  <div
                    key={i}
                    className='w-[3px] origin-bottom rounded-full bg-[#b8620a]'
                    style={{ height: `${h}%`, opacity: 0.12 + (h / 68) * 0.45 }}
                  />
                ))}
              </m.div>
            </div>

            {/* RIGHT: Image */}
            <m.div variants={fromRight} className='relative'>
              <div className='relative h-full min-h-[420px] overflow-hidden rounded-2xl border border-[#e4dfd6] bg-[#f0ece5] lg:min-h-[560px]'>
                <Image
                  src={contactInfo.image}
                  alt='Contact'
                  fill
                  className='object-cover'
                  sizes='(max-width: 1024px) 100vw, 58vw'
                />
                {/* Subtle overlay for when placeholder is used */}
                <div className='absolute inset-0 bg-[#1a1714]/[0.03]' aria-hidden />
              </div>

              {/* Floating email pill */}
              <div className='absolute -bottom-5 left-6 flex items-center gap-3 rounded-full border border-[#e4dfd6] bg-white px-5 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.08)]'>
                <span className='h-2 w-2 rounded-full bg-[#b8620a]' aria-hidden />
                <a
                  href={contactInfo.email.href}
                  className='font-mono text-[12px] tracking-[0.04em] text-[#1a1714] transition-colors duration-200 hover:text-[#b8620a]'
                >
                  {contactInfo.email.value}
                </a>
              </div>
            </m.div>

          </div>
        </m.div>

        <div aria-hidden className='absolute inset-x-0 bottom-0 h-px bg-[#e4dfd6]' />
      </section>

      {/* ── BOTTOM STRIP ─────────────────────────────────────────── */}
      <section className='relative bg-[#f0ece5] py-14'>
        <div className='mx-auto max-w-[90rem] px-8 sm:px-12 lg:px-16 xl:px-24'>
          <div className='flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center'>
            <div>
              <p className='mb-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[#b8620a]'>
                ✦ Prefer async?
              </p>
              <p className='font-syne text-[clamp(1.1rem,2.5vw,1.6rem)] font-extrabold tracking-[-0.03em] text-[#1a1714]'>
                Drop us an email directly.
              </p>
            </div>
            <a
              href={contactInfo.email.href}
              className='group inline-flex shrink-0 items-center gap-3 rounded-full border border-[#e4dfd6] bg-white px-6 py-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-200 hover:border-[#b8620a]/30 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] active:scale-[0.98]'
            >
              <span className='font-mono text-[12px] tracking-[0.06em] text-[#1a1714]'>
                {contactInfo.email.value}
              </span>
              <span className='font-mono text-[11px] text-[#c8b9a8] transition-colors duration-200 group-hover:text-[#b8620a]'>
                ↗
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
