'use client';

import Link from 'next/link';
import React from 'react';
import HoverCard from './hover-card';
import Image from 'next/image';
import { productItems } from '@/data';
import ProductItem from './product-item';
import siteMetadata from '@/lib/seo/siteMetadata';
import GithubStar from '@/components/github-star';

const Navbar = () => {
  return (
    <nav className='relative z-50 hidden w-full items-center justify-between pl-12 md:flex'>

      {/* Nav links */}
      <ul className='flex items-center gap-8'>
        <li className='relative z-50'>
          <HoverCard triggerText='Product'>
            <div className='grid grid-cols-2 gap-0'>
              {/* Left: product list */}
              <div className='space-y-0.5 p-4'>
                <p className='mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#b0a394]'>
                  Products
                </p>
                {productItems.map(item => (
                  <ProductItem
                    key={item.title}
                    iconKey={item.iconKey}
                    title={item.title}
                    description={item.description}
                    href={item.href}
                  />
                ))}
              </div>

              {/* Right: preview image */}
              <div className='overflow-hidden rounded-r-xl bg-[#f0ece5] p-4'>
                <Image
                  src='/images/product-preview.webp'
                  alt='Product preview'
                  width={200}
                  height={200}
                  className='h-full w-full rounded-lg object-cover opacity-90'
                />
              </div>
            </div>
          </HoverCard>
        </li>

        <li>
          <Link
            href='/blogs'
            className='text-sm font-medium text-[#7a6f65] transition-colors duration-200 hover:text-[#1a1714]'
          >
            Blogs
          </Link>
        </li>

        <li>
          <Link
            href='/pricing'
            className='text-sm font-medium text-[#7a6f65] transition-colors duration-200 hover:text-[#1a1714]'
          >
            Pricing
          </Link>
        </li>
      </ul>

      {/* Right: auth actions */}
      <div className='flex items-center gap-3'>
        <GithubStar />
        <div className='h-4 w-px bg-[#ddd6cc]' />

        <Link
          href={siteMetadata.dashboard}
          className='inline-flex items-center rounded-lg border border-[#ddd6cc] bg-white px-4 py-1.5 text-sm font-medium text-[#5a4e44] transition-all duration-200 hover:border-[#c8b9a8] hover:bg-[#f0ece5] hover:text-[#1a1714] active:scale-[0.98]'
        >
          Login
        </Link>

        <Link
          href={siteMetadata.dashboard}
          className='inline-flex items-center gap-1.5 rounded-lg bg-[#1a1714] px-4 py-2 text-sm font-semibold text-[#f7f5f1] transition-all duration-200 hover:bg-[#2e2a25] active:scale-[0.98]'
        >
          Start for Free
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
