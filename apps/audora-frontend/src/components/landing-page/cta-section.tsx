'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { m, useInView, useReducedMotion } from 'framer-motion';
import siteMetadata from '@/lib/seo/siteMetadata';

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const CtaSection = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section ref={ref} className='relative bg-[#f7f5f1]'>

      {/* Top rule */}
      <div aria-hidden className='h-px bg-[#e4dfd6]' />

      <m.div
        initial={prefersReducedMotion ? 'show' : 'hidden'}
        animate={inView || prefersReducedMotion ? 'show' : 'hidden'}
        variants={fadeUp}
        className='mx-auto max-w-10xl px-8 py-16 sm:px-12 lg:px-16 xl:px-24'
      >
        <div className='flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between'>

          {/* Left: label + headline */}
          <div>
            <div className='mb-3 flex items-center gap-2'>
              <span className='h-px w-5 bg-[#b8620a]/60' />
              <span className='font-mono text-[10px] uppercase tracking-[0.22em] text-[#b8620a]'>
                Start today - free
              </span>
            </div>
            <h2 className='font-syne text-[clamp(1.6rem,3.5vw,2.6rem)] font-extrabold leading-[1.1] tracking-[-0.04em] text-[#1a1714]'>
              Ready to create your{' '}
              <span className='text-[#9a8878]'>best content?</span>
            </h2>
          </div>

          {/* Right: CTA */}
          <div className='flex shrink-0 flex-col items-start gap-2 sm:items-end'>
            <Link
              href={siteMetadata.dashboard}
              className='group inline-flex items-center gap-2 rounded-lg bg-[#1a1714] px-6 py-3 text-sm font-semibold text-[#f7f5f1] transition-all duration-200 hover:bg-[#2e2a25] active:scale-[0.98]'
            >
              Start for Free
              <span className='transition-transform duration-200 group-hover:translate-x-0.5'>→</span>
            </Link>
            <span className='font-mono text-[10px] uppercase tracking-[0.16em] text-[#c8b9a8]'>
              No credit card required
            </span>
          </div>

        </div>
      </m.div>

      {/* Bottom rule */}
      <div aria-hidden className='h-px bg-[#e4dfd6]' />

    </section>
  );
};

export default CtaSection;
