import React from 'react';
import Image from 'next/image';
import Spinner from '@/components/loaders/spinner';
import siteMetadata from '@/lib/seo/siteMetadata';

const AuthLoader = () => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-[#1a1714]'>
      {/* Ambient bloom */}
      <div
        className='pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b8620a]/[0.05] blur-3xl'
        aria-hidden
      />

      <div className='relative flex flex-col items-center gap-10'>
        {/* Logo + wordmark */}
        <div className='flex items-center gap-2.5'>
          <Image
            src='/images/audora-logo-black.webp'
            alt='Audora'
            width={22}
            height={22}
            className='rounded-sm object-cover invert brightness-200'
          />
          <span className='font-syne text-[20px] font-extrabold tracking-[-0.04em] text-white'>
            {siteMetadata.header}
          </span>
        </div>

        {/* Waveform spinner */}
        <div className='flex flex-col items-center gap-6'>
          <Spinner />

          {/* Label */}
          <p className='font-mono text-[11px] uppercase tracking-[0.24em] text-[#5a4e44]'>
            Setting the stage…
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLoader;
