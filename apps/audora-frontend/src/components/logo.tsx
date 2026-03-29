'use client';

import React from 'react';
import Image from 'next/image';
import siteMetadata from '@/lib/seo/siteMetadata';
import Link from 'next/link';

interface LogoParams {
  href?: string;
  scrolled?: boolean;
  page?: string;
}

const Logo = ({ scrolled: _scrolled, page, href = '/' }: LogoParams) => {
  return (
    <Link href={href} className='flex items-center gap-2'>
      <Image
        src='/images/audora-logo-black.webp'
        alt='Audora Logo'
        width={20}
        height={20}
        className='rounded-sm object-cover'
      />
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
