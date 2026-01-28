import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import siteMetadata from '@/lib/seo/siteMetadata';
import { getIcon, goLiveLeftPlatforms, goLiveRightPlatforms } from '@/data';

const GoLiveSection = () => {
  return (
    <section className='relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-[#f7f7fa] to-white px-4 py-20 sm:px-10'>
      <div className='relative flex w-full flex-col items-center px-4 text-center'>
        <h1 className='mb-4 bg-gradient-to-r from-black to-zinc-600 bg-clip-text text-5xl leading-tight font-extrabold text-transparent sm:text-6xl'>
          Go live.
        </h1>
        <p className='mx-auto mb-8 max-w-2xl text-lg text-gray-600 sm:text-xl'>
          Stream your events and webinars in full HD from your fully branded
          studio. Simulcasting, omnichat, and lots more included.
        </p>
        <div className='mb-12 flex flex-col justify-center gap-4 sm:flex-row'>
          <Link
            href={siteMetadata.dashboard}
            className='group bg-primary-500 hover:bg-primary-600 hover:shadow-primary/25 relative cursor-pointer rounded-lg px-8 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl sm:text-lg'
          >
            <span className='relative z-10'>Start for Free</span>
            <div className='absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-[#7357FF] to-[#5a3fdc] opacity-0 blur transition-opacity duration-300 group-hover:opacity-100'></div>
          </Link>
          <Link
            href='/use-cases/webinars'
            className='group text-primary-500 hover:text-primary-600 flex items-center justify-center font-medium transition-all duration-300 hover:underline'
          >
            Learn more{' '}
            <span className='ml-1 transition-transform duration-300 group-hover:translate-x-1'>
              →
            </span>
          </Link>
        </div>
        <div className='relative mt-8 flex w-full items-center justify-center'>
          {/* Left icons and lines */}
          <div className='top-1/2 left-0 z-10 hidden h-[350px] -translate-x-10 flex-col justify-between gap-8 md:flex'>
            {goLiveLeftPlatforms.map((item, idx) => {
              const Icon = getIcon(item.iconKey);
              return (
                <div key={idx} className='relative flex items-center'>
                  {/* Icon with double border */}
                  <div
                    className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 ${item.color}`}
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full ${item.color}`}
                    >
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${item.color} text-2xl text-white`}
                      >
                        <Icon />
                      </div>
                    </div>
                  </div>
                  {/* Connecting line */}
                  <div
                    className='absolute top-1/2 left-16 h-1 w-24 -translate-y-1/2'
                    style={{ background: item.gradient }}
                  />
                </div>
              );
            })}
          </div>

          {/* Central image */}
          <div className='relative z-20'>
            <div className='relative'>
              <Image
                width={700}
                height={700}
                src='/images/go-live-section.png'
                alt='Product Screenshot'
                className='border-primary-500 hover:shadow-primary-500/30 w-[700px] max-w-full rounded-xl border-4 shadow-2xl transition-all duration-300'
              />
              <div className='absolute top-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-lg border border-zinc-700/50 bg-zinc-800/90 px-4 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-zinc-800/95'>
                <span className='relative h-2 w-2'>
                  <span className='absolute inset-0 animate-ping rounded-full bg-red-500/75'></span>
                  <span className='relative block h-2 w-2 rounded-full bg-red-500 ring-3 ring-red-500/30'></span>
                </span>
                <span className='font-medium tracking-wider'>ON AIR</span>
              </div>
            </div>
          </div>

          {/* Right icons and lines */}
          <div className='top-1/2 right-0 z-10 hidden h-[350px] translate-x-10 flex-col justify-between gap-8 md:flex'>
            {goLiveRightPlatforms.map((item, idx) => {
              const Icon = getIcon(item.iconKey);
              return (
                <div key={idx} className='relative flex items-center'>
                  {/* Connecting line */}
                  <div
                    className='absolute top-1/2 right-16 h-1 w-24 -translate-y-1/2'
                    style={{ background: item.gradient }}
                  />
                  {/* Icon with double border */}
                  <div
                    className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 ${item.color}`}
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full ${item.color}`}
                    >
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${item.color} text-2xl text-white`}
                      >
                        <Icon />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoLiveSection;
