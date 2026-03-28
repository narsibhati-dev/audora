import React from 'react';
import Link from 'next/link';
import {
  footerBottomLinks,
  footerNavSections,
  footerSocialLinks,
  getIcon,
} from '@/data';
import Logo from '../logo';
import siteMetadata from '@/lib/seo/siteMetadata';

const Footer = () => {
  return (
    <footer className='relative overflow-hidden bg-[#1a1714] text-[#9a8878]'>

      {/* Top rule */}
      <div className='h-px bg-[#2e2a25]' />

      {/* ── CTA PANEL ──────────────────────────────────────────── */}
      <div className='relative mx-auto max-w-10xl px-8 pb-16 pt-20 sm:px-12 lg:px-16 xl:px-24'>

        <div className='relative flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between'>

          {/* Left: CTA text */}
          <div className='max-w-xl'>
            <p className='mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[#b8620a]'>
              ✦ &nbsp;Start today — free
            </p>
            <h2 className='font-syne text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-white'>
              Ready to create your
              <br />
              <span className='text-[#5a4e44]'>best content?</span>
            </h2>
          </div>

          {/* Right: CTA button + note */}
          <div className='flex flex-col items-start gap-3 sm:items-end'>
            <Link
              href={siteMetadata.dashboard}
              className='group inline-flex items-center gap-2.5 rounded-lg bg-white px-8 py-4 text-sm font-semibold text-[#1a1714] transition-all duration-200 hover:bg-[#f7f5f1] active:scale-[0.98]'
            >
              Start Podcasting
              <span className='transition-transform duration-200 group-hover:translate-x-0.5'>→</span>
            </Link>
            <span className='font-mono text-[11px] text-[#3a3330]'>
              No credit card required
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className='mx-8 h-px bg-[#2e2a25] sm:mx-12 lg:mx-16 xl:mx-24' />

      {/* ── NAV GRID ───────────────────────────────────────────── */}
      <div className='mx-auto max-w-10xl px-8 py-14 sm:px-12 lg:px-16 xl:px-24'>
        <div className='grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]'>

          {/* Brand column */}
          <div className='flex flex-col gap-5'>
            <div className='w-fit'>
              <Logo scrolled={false} />
            </div>
            <p className='max-w-[220px] text-[14px] leading-relaxed text-[#5a4e44]'>
              All-in-one podcast &amp; video studio. Record, edit, and go live
              from anywhere.
            </p>

            {/* Social links */}
            <div className='flex items-center gap-3'>
              {footerSocialLinks.map(({ href, label, iconKey }) => {
                const Icon = getIcon(iconKey);
                return (
                  <a
                    key={label}
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={label}
                    className='flex h-8 w-8 items-center justify-center rounded-lg border border-[#2e2a25] bg-[#2a2520]/50 text-[#5a4e44] transition-all duration-200 hover:border-[#4a4440] hover:text-[#9a8878]'
                  >
                    <Icon className='h-4 w-4' />
                  </a>
                );
              })}
            </div>

            {/* Status pill */}
            <div className='inline-flex w-fit items-center gap-2 rounded-full border border-[#2e2a25] bg-[#2a2520]/40 px-3 py-1.5'>
              <span className='relative inline-flex h-1.5 w-1.5'>
                <span className='absolute inset-0 animate-ping rounded-full bg-emerald-500/60' />
                <span className='relative h-1.5 w-1.5 rounded-full bg-emerald-500' />
              </span>
              <span className='font-mono text-[10px] uppercase tracking-[0.15em] text-[#4a4440]'>
                All systems operational
              </span>
            </div>
          </div>

          {/* Nav sections */}
          {footerNavSections.map(({ title, links }) => (
            <div key={title}>
              <h3 className='mb-5 font-mono text-[10px] uppercase tracking-[0.22em] text-[#3a3330]'>
                {title}
              </h3>
              <ul className='space-y-3'>
                {links.map(({ name, href }) => (
                  <li key={name}>
                    <Link
                      href={href}
                      className='group inline-flex items-center gap-1.5 text-[14px] text-[#5a4e44] transition-colors duration-200 hover:text-[#9a8878]'
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

      {/* ── GHOST WORDMARK ─────────────────────────────────────── */}
      <div className='w-full overflow-hidden'>
        <div
          aria-hidden
          className='font-syne pointer-events-none select-none whitespace-nowrap px-4 text-[clamp(4rem,16vw,18rem)] font-extrabold leading-none tracking-[-0.05em] text-white/[0.04]'
        >
          AUDORA
        </div>
      </div>

      {/* Bottom rule */}
      <div className='mx-8 h-px bg-[#2e2a25] sm:mx-12 lg:mx-16 xl:mx-24' />

      {/* ── BOTTOM BAR ─────────────────────────────────────────── */}
      <div className='mx-auto max-w-10xl px-8 py-5 sm:px-12 lg:px-16 xl:px-24'>
        <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
          <p className='font-mono text-[11px] text-[#3a3330]'>
            © {new Date().getFullYear()} Audora Labs. All rights reserved.
          </p>
          <div className='flex items-center gap-5'>
            {footerBottomLinks.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className='font-mono text-[11px] text-[#3a3330] transition-colors hover:text-[#5a4e44]'
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
