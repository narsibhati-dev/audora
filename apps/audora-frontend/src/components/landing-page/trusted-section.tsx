'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { m, useInView, useReducedMotion } from 'framer-motion';

const videos = [
  {
    names: 'Angel Poon & Kerry Washington',
    youtubeId: 'XVR9OgOtnZo',
    label: 'Podcast',
  },
  {
    names: 'Web Dev Cody',
    youtubeId: 'yR7bIVhktOE',
    label: 'Interview',
  },
];

const PLATFORM_STATS = [
  { value: '4K', label: 'Max resolution' },
  { value: '7+', label: 'Platforms' },
  { value: '48kHz', label: 'Audio quality' },
  { value: '99.9%', label: 'Uptime SLA' },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function VideoCard({
  video,
  isPlaying,
  onPlay,
}: {
  video: typeof videos[0];
  isPlaying: boolean;
  onPlay: () => void;
}) {
  return (
    <div className='group overflow-hidden rounded-xl border border-[#e4dfd6] shadow-[0_2px_16px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)]'>

      {/* Chrome bar */}
      <div className='flex items-center justify-between border-b border-[#e4dfd6] bg-[#f0ece5] px-3.5 py-1.5'>
        <div className='flex items-center gap-1.5'>
          <span className='h-1.5 w-1.5 rounded-full bg-[#b8620a]' />
          <span className='font-mono text-[10px] uppercase tracking-[0.2em] text-[#b8620a]'>
            {video.label}
          </span>
        </div>
        <span className='font-mono text-[10px] text-[#c8b9a8]'>Made with Audora</span>
      </div>

      {/* Video area */}
      <div className='relative overflow-hidden' style={{ aspectRatio: '16/9' }}>
        {isPlaying ? (
          <iframe
            width='100%'
            height='100%'
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.names}
            allow='autoplay; encrypted-media'
            allowFullScreen
            className='h-full w-full'
          />
        ) : (
          <>
            <Image
              src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
              alt={`${video.names} - ${video.label}`}
              width={640}
              height={360}
              className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]'
            />

            {/* Gradient */}
            <div className='absolute inset-0 bg-gradient-to-t from-[#1a1714]/75 via-[#1a1714]/15 to-transparent' />

            {/* Play button */}
            <button
              className='absolute inset-0 flex cursor-pointer items-center justify-center'
              onClick={onPlay}
              aria-label={`Play ${video.names} video`}
            >
              <div className='flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#b8620a] bg-[#1a1714] transition-all duration-300 group-hover:scale-110 group-hover:border-[#d4751a] group-hover:bg-[#2e2a25]'>
                <svg width='12' height='12' fill='white' viewBox='0 0 24 24' aria-hidden className='translate-x-[2px]'>
                  <path d='M8 5v14l11-7z' />
                </svg>
              </div>
            </button>

            {/* Host name overlay */}
            <div className='absolute inset-x-0 bottom-0 z-10 px-4 pb-3.5'>
              <p className='font-syne text-[13px] font-extrabold leading-tight tracking-[-0.02em] text-white'>
                {video.names}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const TrustedSection = () => {
  const [playingIdx, setPlayingIdx] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      ref={ref}
      className='relative overflow-hidden bg-[#f0ece5] py-20'
      aria-labelledby='trusted-heading'
    >
      {/* Top rule */}
      <div aria-hidden className='absolute top-0 left-0 right-0 h-px bg-[#e4dfd6]' />

      {/* Warm bloom */}
      <div
        aria-hidden
        className='pointer-events-none absolute bottom-0 right-0 h-[360px] w-[360px] translate-x-1/3 translate-y-1/3 rounded-full bg-[#b8620a]/[0.04] blur-[130px]'
      />

      <m.div
        variants={stagger}
        initial={prefersReducedMotion ? 'show' : 'hidden'}
        animate={inView || prefersReducedMotion ? 'show' : 'hidden'}
        className='relative z-10 mx-auto max-w-10xl px-8 sm:px-12 lg:px-16 xl:px-24'
      >

        {/* Section header */}
        <m.div variants={fadeUp} className='mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between'>
          <div>
            <div className='mb-4 flex items-center gap-2.5'>
              <span className='h-px w-6 bg-[#b8620a]/60' />
              <span className='font-mono text-[11px] uppercase tracking-[0.24em] text-[#b8620a]'>
                Made with Audora
              </span>
            </div>
            <h2
              id='trusted-heading'
              className='font-syne text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-none tracking-[-0.04em] text-[#1a1714]'
            >
              Real creators,{' '}
              <span className='text-[#9a8878]'>real results.</span>
            </h2>
          </div>

          {/* Inline stats */}
          <div className='flex items-center gap-8 lg:gap-10'>
            {PLATFORM_STATS.map(({ value, label }) => (
              <div key={label} className='text-center lg:text-right'>
                <p className='font-syne text-[1.4rem] font-extrabold leading-none tracking-[-0.03em] text-[#1a1714]'>
                  {value}
                </p>
                <p className='mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#b0a394]'>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </m.div>

        {/* Divider */}
        <m.div variants={fadeUp} className='mb-7 h-px bg-[#e4dfd6]' />

        {/* Videos in a row */}
        <m.div variants={fadeUp} className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
          {videos.map((video, i) => (
            <VideoCard
              key={i}
              video={video}
              isPlaying={playingIdx === i}
              onPlay={() => setPlayingIdx(i)}
            />
          ))}
        </m.div>

        {/* Testimonial strip */}
        <m.div
          variants={fadeUp}
          className='mt-4 flex flex-col items-start justify-between gap-4 rounded-xl border border-[#e4dfd6] bg-white px-6 py-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] sm:flex-row sm:items-center'
        >
          <div className='flex items-start gap-4'>
            <div className='flex shrink-0 items-center gap-0.5 pt-0.5'>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width='11' height='11' viewBox='0 0 24 24' fill='#b8620a' aria-hidden>
                  <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
                </svg>
              ))}
            </div>
            <p className='text-[13px] leading-relaxed text-[#5a4e44]'>
              "Audora's separate track recording is a game changer. Guests sound studio-perfect regardless of their setup."
            </p>
          </div>
          <div className='flex shrink-0 items-center gap-2.5'>
            <div className='h-7 w-7 rounded-full bg-[#e8e2d8]' />
            <div>
              <p className='text-[12px] font-semibold text-[#1a1714]'>Creator Community</p>
              <p className='font-mono text-[10px] text-[#b0a394]'>Podcast producer</p>
            </div>
          </div>
        </m.div>

      </m.div>
    </section>
  );
};

export default TrustedSection;
