'use client';

import { m, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import siteMetadata from '@/lib/seo/siteMetadata';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const fromLeft = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};

const AboutHeroSection = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className='relative overflow-hidden bg-[#f7f5f1] pt-24 pb-20'>

      {/* Top border rule */}
      <div aria-hidden className='absolute top-0 inset-x-0 h-px bg-[#e4dfd6]' />

      {/* Amber bloom — top right */}
      <div
        aria-hidden
        className='pointer-events-none absolute -top-20 right-0 h-[500px] w-[500px] translate-x-1/4 -translate-y-1/4 rounded-full bg-[#b8620a]/[0.05] blur-[180px]'
      />

      {/* Watermark */}
      <div
        aria-hidden
        className='pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none font-syne text-[18rem] font-extrabold leading-none tracking-[-0.05em] text-[#1a1714]/[0.022]'
      >
        AB
      </div>

      <m.div
        variants={stagger}
        initial={prefersReducedMotion ? 'show' : 'hidden'}
        animate='show'
        className='relative z-10 mx-auto max-w-10xl px-8 sm:px-12 lg:px-16 xl:px-24'
      >
        {/* Section label */}
        <m.div variants={fadeUp} className='mb-7 flex items-center gap-2.5'>
          <span className='h-px w-6 bg-[#b8620a]/60' />
          <span className='font-mono text-[11px] uppercase tracking-[0.24em] text-[#b8620a]'>
            About Audora
          </span>
        </m.div>

        {/* Headline */}
        <m.h1
          variants={fromLeft}
          className='font-syne mb-6 max-w-3xl text-[clamp(3rem,7vw,6rem)] font-extrabold leading-none tracking-[-0.045em] text-[#1a1714]'
        >
          Built for
          <br />
          <span className='text-[#9a8878]'>creators.</span>
        </m.h1>

        {/* Description */}
        <m.p
          variants={fadeUp}
          className='mb-10 max-w-[520px] text-[16px] leading-[1.85] text-[#7a6f65]'
        >
          Audora is a studio-grade platform for recording, editing, and
          broadcasting, built for podcasters, interviewers, and live streamers
          who refuse to compromise on quality.
        </m.p>

        {/* Stats row */}
        <m.div variants={fadeUp} className='flex flex-wrap items-center gap-8'>
          {[
            { value: '7+', label: 'Platforms' },
            { value: 'HD', label: 'Local capture' },
            { value: 'AI', label: 'Transcript editing' },
          ].map(stat => (
            <div key={stat.label} className='flex items-center gap-3'>
              <span className='font-syne text-[1.6rem] font-extrabold leading-none tracking-[-0.04em] text-[#1a1714]'>
                {stat.value}
              </span>
              <span className='font-mono text-[10px] uppercase tracking-[0.18em] text-[#b0a394]'>
                {stat.label}
              </span>
            </div>
          ))}
          <div className='h-px w-6 bg-[#ddd6cc]' />
          <Link
            href={siteMetadata.dashboard}
            className='group inline-flex items-center gap-2 rounded-lg bg-[#1a1714] px-6 py-3 text-[13px] font-semibold text-[#f7f5f1] transition-all duration-200 hover:bg-[#2e2a25] active:scale-[0.98]'
          >
            Try it free
            <span className='transition-transform duration-200 group-hover:translate-x-0.5'>→</span>
          </Link>
        </m.div>
      </m.div>

      {/* Bottom rule */}
      <div aria-hidden className='absolute bottom-0 inset-x-0 h-px bg-[#e4dfd6]' />
    </section>
  );
};

export default AboutHeroSection;
