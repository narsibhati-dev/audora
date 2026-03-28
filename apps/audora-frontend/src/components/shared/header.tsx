'use client';

import React, { useEffect, useState } from 'react';
import Logo from '@/components/logo';
import Navbar from '../navbar/navbar';
import MobileNavbar from '../navbar/mobile-navbar';
import { useIsDesktop } from '@/hooks/useIsDesktop';

const SCROLL_THRESHOLD = 60;

const Header = ({ isMarketing = false }: { isMarketing?: boolean }) => {
  const [scrolled, setScrolled] = useState(isMarketing);
  const isDesktop = useIsDesktop();

  useEffect(() => {
    const check = () => setScrolled(isMarketing || window.scrollY > SCROLL_THRESHOLD);
    check();
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, [isMarketing]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ease-in-out ${
        scrolled
          ? 'border-b border-[#e4dfd6] bg-[#f7f5f1]/95 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className='mx-auto flex max-w-10xl items-center justify-between px-8 py-3.5 sm:px-12 lg:px-16 xl:px-24'>
        <Logo scrolled={true} />
        {isDesktop ? <Navbar /> : <MobileNavbar />}
      </div>
    </header>
  );
};

export default Header;
