'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { productItems } from '@/data';
import Logo from '../logo';
import MobileDropdownSection from './mobile-dropdown-section';
import siteMetadata from '@/lib/seo/siteMetadata';
import GithubStar from '@/components/github-star';

const menuSections = [
  { label: 'Product', key: 'product1', items: productItems },
];

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <>
      <div className='md:hidden'>
        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='flex h-9 w-9 items-center justify-center rounded-lg border border-[#ddd6cc] bg-white text-[#5a4e44] transition-colors hover:border-[#c8b9a8] hover:text-[#1a1714]'
          aria-label='Toggle menu'
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        {/* Backdrop */}
        <div
          className={`fixed inset-0 z-50 bg-[#1a1714]/30 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`fixed top-0 left-0 z-50 w-full transform rounded-b-2xl border-b border-[#e4dfd6] bg-[#f7f5f1] shadow-[0_8px_40px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          {/* Warm top accent */}
          <div className='h-[2px] rounded-t-2xl bg-gradient-to-r from-[#b8620a]/50 via-[#e4dfd6] to-transparent' />

          <div className='flex flex-col p-5'>
            {/* Header row */}
            <div className='mb-5 flex items-center justify-between'>
              <div className='w-fit'>
                <Logo scrolled={true} />
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className='flex h-8 w-8 items-center justify-center rounded-lg border border-[#ddd6cc] text-[#7a6f65] transition-colors hover:border-[#c8b9a8] hover:text-[#1a1714]'
                aria-label='Close menu'
              >
                <X size={16} />
              </button>
            </div>

            {/* Nav links */}
            <nav className='mb-6 space-y-0'>
              {menuSections.map((section, index) => (
                <MobileDropdownSection
                  key={index}
                  sectionKey={section.key}
                  label={section.label}
                  items={section.items}
                  isOpen={openDropdown === section.key}
                  onToggle={key =>
                    setOpenDropdown(openDropdown === key ? null : key)
                  }
                  onCloseMenu={() => setIsOpen(false)}
                />
              ))}

              <Link
                href='/blogs'
                className='block border-b border-[#e4dfd6] py-4 text-base font-medium text-[#5a4e44] transition-colors hover:text-[#1a1714]'
                onClick={() => setIsOpen(false)}
              >
                Blogs
              </Link>
              <Link
                href='/pricing'
                className='block border-b border-[#e4dfd6] py-4 text-base font-medium text-[#5a4e44] transition-colors hover:text-[#1a1714]'
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
            </nav>

            {/* CTA buttons */}
            <div className='flex flex-col gap-3 pb-2'>
              <GithubStar className='w-full justify-center' />
              <Link
                href={siteMetadata.dashboard}
                className='block w-full rounded-xl bg-[#1a1714] py-3.5 text-center text-sm font-semibold text-[#f7f5f1] transition-all hover:bg-[#2e2a25] active:scale-[0.98]'
                onClick={() => setIsOpen(false)}
              >
                Start for Free
              </Link>
              <Link
                href={siteMetadata.dashboard}
                className='block w-full rounded-xl border border-[#ddd6cc] py-3.5 text-center text-sm font-medium text-[#7a6f65] transition-colors hover:border-[#c8b9a8] hover:text-[#1a1714]'
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
