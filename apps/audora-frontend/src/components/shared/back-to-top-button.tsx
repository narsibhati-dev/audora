'use client';

import { useState, useEffect } from 'react';
import { m, AnimatePresence, useReducedMotion } from 'framer-motion';

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(scrolled > 300);
      setProgress(total > 0 ? Math.min(scrolled / total, 1) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // SVG arc progress ring
  const size = 44;
  const r = 18;
  const circ = 2 * Math.PI * r;
  const dash = circ * progress;

  return (
    <AnimatePresence>
      {visible && (
        <m.button
          key='btt'
          onClick={scrollToTop}
          aria-label='Back to top'
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14, scale: 0.88 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          whileHover={prefersReducedMotion ? {} : { scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className='group fixed right-6 bottom-6 z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#1a1714] shadow-[0_4px_20px_rgba(0,0,0,0.22)] transition-shadow duration-200 hover:shadow-[0_6px_28px_rgba(184,98,10,0.22)]'
        >
          {/* Scroll progress ring */}
          <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className='absolute inset-0'
            aria-hidden
          >
            {/* Track */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill='none'
              stroke='#2e2a25'
              strokeWidth='1.5'
            />
            {/* Fill */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill='none'
              stroke='#b8620a'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeDasharray={`${dash} ${circ}`}
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
              style={{ transition: 'stroke-dasharray 0.1s linear' }}
            />
          </svg>

          {/* Arrow */}
          <svg
            width='14'
            height='14'
            viewBox='0 0 14 14'
            fill='none'
            className='relative z-10 text-[#f0ece5] transition-transform duration-200 group-hover:-translate-y-0.5'
            aria-hidden
          >
            <path
              d='M7 11.5V2.5M7 2.5L3 6.5M7 2.5L11 6.5'
              stroke='currentColor'
              strokeWidth='1.6'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </m.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton;
