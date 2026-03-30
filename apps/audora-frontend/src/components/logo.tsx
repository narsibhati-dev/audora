'use client';

import React from 'react';
import siteMetadata from '@/lib/seo/siteMetadata';
import Link from 'next/link';

interface LogoParams {
  href?: string;
  scrolled?: boolean;
  page?: string;
}

const Logo = ({ scrolled: _scrolled, page, href = '/' }: LogoParams) => {
  return (
    <Link href={href} className='group flex items-center gap-2.5'>
      {/* Icon mark — stylised waveform bars */}
      <div className='flex h-[22px] w-[22px] items-end justify-center gap-[2.5px] rounded-[5px] bg-[#1a1714] px-[4px] pb-[4px] pt-[5px]'>
        <span className='w-[2.5px] rounded-full bg-[#f7f5f1]/50' style={{ height: '6px' }} />
        <span className='w-[2.5px] rounded-full bg-[#f7f5f1]' style={{ height: '11px' }} />
        <span className='w-[2.5px] rounded-full bg-[#f7f5f1]/70' style={{ height: '8px' }} />
        <span className='w-[2.5px] rounded-full bg-[#f7f5f1]/40' style={{ height: '5px' }} />
      </div>

      {/* Wordmark */}
      <span className='font-syne text-[18px] font-extrabold tracking-[-0.04em] text-[#1a1714]'>
        {siteMetadata.header}
        {page && (
          <span className='ml-1.5 font-mono text-[11px] font-normal tracking-[0.1em] text-[#b0a394]'>
            / {page}
          </span>
        )}
      </span>
    </Link>
  );
};

export default Logo;
