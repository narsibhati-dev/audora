import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  learnMoreHref?: string;
  imageSrc: string;
  imageAlt?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  buttonLabel,
  buttonHref,
  learnMoreHref = '#features',
  imageSrc,
  imageAlt = '',
}) => {
  return (
    <section className='relative overflow-hidden bg-[#f7f5f1] pt-32 pb-0'>

      {/* Faint warm bloom */}
      <div
        aria-hidden
        className='pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] translate-x-1/4 -translate-y-1/4 rounded-full bg-[#b8620a]/[0.05] blur-[180px]'
      />

      <div className='relative mx-auto max-w-10xl px-8 sm:px-12 lg:px-16 xl:px-24'>

        {/* Copy */}
        <div className='mb-14 max-w-2xl'>

          <div className='mb-6 flex items-center gap-2.5'>
            <span className='h-px w-6 bg-[#b8620a]/60' />
            <span className='font-mono text-[11px] uppercase tracking-[0.24em] text-[#b8620a]'>
              Audora Studio
            </span>
          </div>

          <h1 className='font-syne mb-6 text-[clamp(2.4rem,5.5vw,4.5rem)] font-extrabold leading-[0.92] tracking-[-0.04em] text-[#1a1714]'>
            {title}
          </h1>

          <p className='mb-8 max-w-[480px] text-[16px] leading-[1.8] text-[#7a6f65]'>
            {description}
          </p>

          <div className='flex flex-wrap items-center gap-4'>
            <Link
              href={buttonHref}
              className='group inline-flex items-center gap-2 rounded-lg bg-[#1a1714] px-7 py-3.5 text-[13px] font-semibold text-[#f7f5f1] transition-all duration-200 hover:bg-[#2e2a25] active:scale-[0.98]'
            >
              {buttonLabel}
              <span className='transition-transform duration-200 group-hover:translate-x-0.5'>→</span>
            </Link>
            <a
              href={learnMoreHref}
              className='text-[13px] text-[#7a6f65] underline underline-offset-4 decoration-[#c8b9a8]/60 transition-colors hover:text-[#1a1714]'
            >
              See how it works
            </a>
          </div>
        </div>

        {/* Product screenshot in browser frame — flush to section bottom */}
        <div className='relative overflow-hidden rounded-t-2xl border border-b-0 border-[#e4dfd6] shadow-[0_-4px_32px_rgba(0,0,0,0.07)]'>

          <div className='flex items-center gap-2 border-b border-[#e4dfd6] bg-[#f0ece5] px-4 py-3'>
            <span className='h-3 w-3 rounded-full bg-[#e8ddd0]' />
            <span className='h-3 w-3 rounded-full bg-[#e8ddd0]' />
            <span className='h-3 w-3 rounded-full bg-[#e8ddd0]' />
            <div className='mx-auto flex items-center gap-1.5 rounded-md border border-[#e4dfd6] bg-white/70 px-3 py-1'>
              <span className='font-mono text-[10px] text-[#9a8878]'>app.audora.xyz</span>
            </div>
          </div>

          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1400}
            height={700}
            className='w-full object-cover object-top'
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
