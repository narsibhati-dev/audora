'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { m, useInView, useReducedMotion, type Variants } from 'motion/react';
import { teamMembers, aboutValues, getIcon } from '@/data';
import TeamMemberCard from '@/components/about/team-member-card';
import AboutHeroSection from '@/components/about/about-hero-section';
import { FaXTwitter, FaLinkedin } from 'react-icons/fa6';

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const fromLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

// ── Section wrapper ──────────────────────────────────────────────────────────
function AnimatedSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });
  const prefersReducedMotion = useReducedMotion();

  return (
    <m.div
      ref={ref}
      variants={stagger}
      initial={prefersReducedMotion ? 'show' : 'hidden'}
      animate={inView || prefersReducedMotion ? 'show' : 'hidden'}
      className={className}
    >
      {children}
    </m.div>
  );
}

const AboutPage = () => {
  return (
    <div className='min-h-screen bg-[#f7f5f1]'>
      <AboutHeroSection />

      {/* ── VALUES SECTION ────────────────────────────────────── */}
      <section className='relative overflow-hidden bg-[#f7f5f1] py-28'>
        <div aria-hidden className='absolute top-0 inset-x-0 h-px bg-[#e4dfd6]' />

        {/* Watermark */}
        <div
          aria-hidden
          className='pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none font-syne text-[20rem] font-extrabold leading-none tracking-[-0.05em] text-[#1a1714]/[0.022]'
        >
          01
        </div>

        <AnimatedSection className='relative z-10 mx-auto max-w-10xl px-8 sm:px-12 lg:px-16 xl:px-24'>

          {/* Label */}
          <m.div variants={fadeUp} className='mb-6 flex items-center gap-2.5'>
            <span className='h-px w-6 bg-[#b8620a]/60' />
            <span className='font-mono text-[11px] uppercase tracking-[0.24em] text-[#b8620a]'>
              01 - Values
            </span>
          </m.div>

          {/* Headline */}
          <m.h2
            variants={fromLeft}
            className='font-syne mb-14 text-[clamp(2.6rem,6vw,5rem)] font-extrabold leading-none tracking-[-0.04em] text-[#1a1714]'
          >
            What drives us.
          </m.h2>

          {/* Cards */}
          <m.div
            variants={stagger}
            className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'
          >
            {aboutValues.map((value, i) => {
              const Icon = getIcon(value.iconKey);
              return (
                <m.div
                  key={i}
                  variants={fadeUp}
                  className='group flex flex-col rounded-2xl border border-[#e4dfd6] bg-white px-7 py-7 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-shadow duration-200 hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)]'
                >
                  {/* Icon */}
                  <div className='mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-[#e4dfd6] bg-[#f7f5f1] text-[#b8620a] transition-colors duration-200 group-hover:border-[#b8620a]/20 group-hover:bg-[#fdf5ec]'>
                    <Icon className='h-5 w-5' />
                  </div>

                  {/* Divider */}
                  <div className='mb-5 h-px bg-[#f0ece5]' />

                  <h3 className='font-syne mb-3 text-[1.15rem] font-extrabold tracking-[-0.03em] text-[#1a1714]'>
                    {value.title}
                  </h3>
                  <p className='text-[14px] leading-[1.8] text-[#7a6f65]'>
                    {value.description}
                  </p>
                </m.div>
              );
            })}
          </m.div>
        </AnimatedSection>

        <div aria-hidden className='absolute bottom-0 inset-x-0 h-px bg-[#e4dfd6]' />
      </section>

      {/* ── TEAM SECTION ──────────────────────────────────────── */}
      <section className='relative overflow-hidden bg-[#f7f5f1] py-28'>

        {/* Watermark */}
        <div
          aria-hidden
          className='pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none font-syne text-[20rem] font-extrabold leading-none tracking-[-0.05em] text-[#1a1714]/[0.022]'
        >
          02
        </div>

        <AnimatedSection className='relative z-10 mx-auto max-w-10xl px-8 sm:px-12 lg:px-16 xl:px-24'>

          {/* Label */}
          <m.div variants={fadeUp} className='mb-6 flex items-center gap-2.5'>
            <span className='h-px w-6 bg-[#b8620a]/60' />
            <span className='font-mono text-[11px] uppercase tracking-[0.24em] text-[#b8620a]'>
              02 - Team
            </span>
          </m.div>

          {/* Headline */}
          <m.h2
            variants={fromLeft}
            className='font-syne mb-14 text-[clamp(2.6rem,6vw,5rem)] font-extrabold leading-none tracking-[-0.04em] text-[#1a1714]'
          >
            {`Who's behind`}
            <br />
            <span className='text-[#9a8878]'>Audora?</span>
          </m.h2>

          {/* Team cards — single founder gets full width up to 640px */}
          <m.div variants={fadeUp} className='max-w-2xl'>
            {teamMembers.map((member, i) => (
              <TeamMemberCard key={i} {...member} />
            ))}
          </m.div>

        </AnimatedSection>

        <div aria-hidden className='absolute bottom-0 inset-x-0 h-px bg-[#e4dfd6]' />
      </section>

      {/* ── CTA STRIP ─────────────────────────────────────────── */}
      <section className='relative bg-[#f7f5f1] py-16'>
        <div aria-hidden className='absolute top-0 inset-x-0 h-px bg-[#e4dfd6]' />

        <AnimatedSection className='mx-auto max-w-10xl px-8 sm:px-12 lg:px-16 xl:px-24'>
          <m.div
            variants={fadeUp}
            className='flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center'
          >
            {/* Left copy */}
            <div>
              <p className='mb-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[#b8620a]'>
                ✦ Stay in the loop
              </p>
              <h2 className='font-syne text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-tight tracking-[-0.04em] text-[#1a1714]'>
                Follow the build.
              </h2>
            </div>

            {/* Right CTAs */}
            <div className='flex flex-wrap items-center gap-2.5'>
              <a
                href='https://www.linkedin.com/company/109048176/'
                target='_blank'
                rel='noopener noreferrer'
                className='group inline-flex shrink-0 items-center gap-2 rounded-full border border-[#e4dfd6] bg-[#f0ece5] px-4 py-2 transition-all duration-200 hover:border-[#b8620a]/30 hover:bg-[#fdf5ec] active:scale-[0.97]'
              >
                <FaLinkedin className='h-3 w-3 text-[#b8620a]' />
                <span className='font-mono text-[11px] uppercase tracking-[0.14em] text-[#7a6f65] transition-colors duration-200 group-hover:text-[#b8620a]'>
                  LinkedIn
                </span>
                <span className='font-mono text-[10px] text-[#c8b9a8] transition-colors duration-200 group-hover:text-[#b8620a]'>↗</span>
              </a>
              <a
                href='https://x.com/audoralabs'
                target='_blank'
                rel='noopener noreferrer'
                className='group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#1a1714] px-4 py-2 transition-all duration-200 hover:bg-[#2e2a25] active:scale-[0.97]'
              >
                <FaXTwitter className='h-3 w-3 text-[#f0ece5]' />
                <span className='font-mono text-[11px] uppercase tracking-[0.14em] text-[#f0ece5]'>
                  @audoralabs
                </span>
                <span className='font-mono text-[10px] text-[#5a4e44] transition-colors duration-200 group-hover:text-[#9a8878]'>↗</span>
              </a>
            </div>
          </m.div>
        </AnimatedSection>

        <div aria-hidden className='absolute bottom-0 inset-x-0 h-px bg-[#e4dfd6]' />
      </section>

    </div>
  );
};

export default AboutPage;
