import React from 'react';
import Link from 'next/link';
import {
  footerBottomLinks,
  footerNavSections,
  footerSocialLinks,
  getIcon,
} from '@/data';
import siteMetadata from '@/lib/seo/siteMetadata';

const Footer = () => {
  return (
    <footer className='relative bg-[#1a1714]'>

      {/* Amber accent stripe */}
      <div className='h-[2px] bg-gradient-to-r from-[#b8620a]/80 via-[#b8620a]/30 to-transparent' />

      {/* ── MAIN GRID ─────────────────────────────────────────── */}
      <div className='mx-auto max-w-10xl px-8 pt-14 pb-12 sm:px-12 lg:px-16 xl:px-24'>
        <div className='grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-[2fr_1fr_1fr_1fr]'>

          {/* ── Brand column ──────────────────────────────────── */}
          <div className='col-span-2 flex flex-col lg:col-span-1'>

            {/* Logo */}
            <Link href='/' className='mb-5 flex w-fit items-center gap-2.5'>
              {/* Icon mark — waveform bars (light on dark) */}
              <div className='flex h-[22px] w-[22px] items-end justify-center gap-[2.5px] rounded-[5px] bg-[#f7f5f1]/10 px-[4px] pb-[4px] pt-[5px]'>
                <span className='w-[2.5px] rounded-full bg-[#f7f5f1]/40' style={{ height: '6px' }} />
                <span className='w-[2.5px] rounded-full bg-[#f7f5f1]' style={{ height: '11px' }} />
                <span className='w-[2.5px] rounded-full bg-[#f7f5f1]/70' style={{ height: '8px' }} />
                <span className='w-[2.5px] rounded-full bg-[#f7f5f1]/40' style={{ height: '5px' }} />
              </div>
              <span className='font-syne text-[18px] font-extrabold tracking-[-0.04em] text-white'>
                {siteMetadata.header}
              </span>
            </Link>

            {/* Tagline */}
            <p className='mb-6 max-w-[220px] text-[13px] leading-[1.7] text-[#7a6f65]'>
              All-in-one podcast &amp; video studio.
              <br />
              Record, edit, and go live — anywhere.
            </p>

            {/* Social row */}
            <div className='mb-6 flex items-center gap-2'>
              {footerSocialLinks.map(({ href, label, iconKey }) => {
                const Icon = getIcon(iconKey);
                return (
                  <a
                    key={label}
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={label}
                    className='group flex h-8 w-8 items-center justify-center rounded-lg border border-[#2e2a25] bg-[#211e1b] text-[#5a4e44] transition-all duration-200 hover:border-[#b8620a]/40 hover:bg-[#2a2218] hover:text-[#b8620a]'
                  >
                    <Icon className='h-3.5 w-3.5' />
                  </a>
                );
              })}
            </div>

            {/* Status pill */}
            <div className='inline-flex w-fit items-center gap-2 rounded-full border border-[#2e2a25] bg-[#211e1b] px-3 py-1.5'>
              <span className='relative flex h-1.5 w-1.5 shrink-0'>
                <span className='absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-50' />
                <span className='relative h-1.5 w-1.5 rounded-full bg-emerald-500' />
              </span>
              <span className='font-mono text-[10px] uppercase tracking-[0.14em] text-[#5a4e44]'>
                All systems operational
              </span>
            </div>
          </div>

          {/* ── Nav columns ───────────────────────────────────── */}
          {footerNavSections.map(({ title, links }) => (
            <div key={title} className='flex flex-col'>
              <div className='mb-5 flex items-center gap-2'>
                <span className='h-px w-3 bg-[#b8620a]/50' />
                <h3 className='font-mono text-[10px] uppercase tracking-[0.2em] text-[#5a4e44]'>
                  {title}
                </h3>
              </div>
              <ul className='space-y-3'>
                {links.map(({ name, href }) => (
                  <li key={name}>
                    <Link
                      href={href}
                      className='group inline-flex items-center gap-2 text-[13px] text-[#6a5e54] transition-colors duration-200 hover:text-[#9a8878]'
                    >
                      <span className='h-px w-0 bg-[#b8620a] transition-all duration-200 group-hover:w-3' />
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* ── DIVIDER ────────────────────────────────────────────── */}
      <div className='mx-8 h-px bg-[#2e2a25] sm:mx-12 lg:mx-16 xl:px-24' />

      {/* ── BOTTOM BAR ─────────────────────────────────────────── */}
      <div className='mx-auto max-w-10xl px-8 py-4 sm:px-12 lg:px-16 xl:px-24'>
        <div className='flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between'>
          <p className='font-mono text-[10px] text-[#3a3330]'>
            © {new Date().getFullYear()} Audora Labs. All rights reserved.
          </p>
          <div className='flex items-center gap-5'>
            {footerBottomLinks.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className='font-mono text-[10px] text-[#3a3330] transition-colors hover:text-[#5a4e44]'
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
