'use client';

import { useState, useRef, useEffect } from 'react';
import { m, useReducedMotion } from 'framer-motion';
import { FiLogOut, FiUser, FiZap } from 'react-icons/fi';
import { MdOutlinePlayCircle } from 'react-icons/md';
import Link from 'next/link';
import { AnimatedAvatar } from './animated-avatar';
import { signOut } from 'next-auth/react';

export default function AvatarDropdown({ collapsed = false }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  /*
   * Positioning:
   *   open sidebar  → opens upward, left-aligned to the sidebar's inner edge
   *   collapsed     → opens to the right of the 4rem sidebar, top-aligned
   *
   * z-index: 300 — must render above the content area div which follows
   * the sidebar in DOM order and would otherwise paint on top.
   */
  const popupStyle: React.CSSProperties = collapsed
    ? {
        position: 'absolute',
        left: 'calc(100% + 12px)',
        bottom: 0,
        zIndex: 300,
        width: '15rem',
      }
    : {
        position: 'absolute',
        left: 0,
        bottom: 'calc(100% + 8px)',
        zIndex: 300,
        width: '15rem',
      };

  return (
    <div className='relative' ref={ref}>
      <button
        onClick={() => setOpen(prev => !prev)}
        aria-label='User menu'
        className='focus:outline-none'
      >
        <AnimatedAvatar open={open} />
      </button>

      {open && (
        <m.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97, y: 6 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: 6 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.16, ease: [0.22, 1, 0.36, 1] }}
          style={{
            ...popupStyle,
            background: '#ffffff',
            border: '1px solid #e0d9cf',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(58,45,34,0.12), 0 2px 8px rgba(58,45,34,0.06)',
            overflow: 'hidden',
          }}
        >
          {/* ── Plan block ─────────────────────────────── */}
          <Link
            href='/dashboard/account/subscription'
            className='group block transition-colors duration-150'
            style={{
              margin: '8px 8px 0',
              padding: '12px 14px',
              background: '#faf7f3',
              borderRadius: '10px',
              border: '1px solid #eee8e0',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = '#f4ede4';
              (e.currentTarget as HTMLElement).style.borderColor = '#ddd0c4';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = '#faf7f3';
              (e.currentTarget as HTMLElement).style.borderColor = '#eee8e0';
            }}
          >
            <div className='flex items-center justify-between'>
              <p
                className='font-mono text-[10px] uppercase tracking-[0.16em]'
                style={{ color: '#b4a49a' }}
              >
                Free Plan
              </p>
              {/* Progress pill */}
              <span
                className='font-mono text-[10px] rounded-full px-2 py-0.5'
                style={{ background: 'rgba(184,98,10,0.08)', color: '#b8620a' }}
              >
                0%
              </span>
            </div>
            <p
              className='mt-1 text-[15px] font-semibold tracking-tight'
              style={{ color: '#1c1410' }}
            >
              00:00
              <span className='text-sm font-normal ml-1' style={{ color: '#a89a8e' }}>
                / 2 hours
              </span>
            </p>
            {/* Usage bar */}
            <div
              className='mt-2 h-[3px] rounded-full overflow-hidden'
              style={{ background: '#ede8e0' }}
            >
              <div
                className='h-full rounded-full'
                style={{ width: '0%', background: '#b8620a' }}
              />
            </div>
          </Link>

          {/* ── Actions ────────────────────────────────── */}
          <div
            className='flex flex-col p-2'
            style={{ borderTop: '1px solid #ede8e0', marginTop: '8px' }}
          >
            {/* Upgrade */}
            <Link
              href='/upgrade'
              className='flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors duration-150'
              style={{ color: '#b8620a' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(184,98,10,0.07)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
              }}
            >
              <FiZap size={15} className='flex-shrink-0' />
              Unlock more features
            </Link>

            <Link
              href='/demo'
              className='flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors duration-150'
              style={{ color: '#4a3828' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = '#f4ede4';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
              }}
            >
              <MdOutlinePlayCircle size={17} className='flex-shrink-0' />
              Watch a demo
            </Link>

            <Link
              href='/dashboard/account/settings'
              className='flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors duration-150'
              style={{ color: '#4a3828' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = '#f4ede4';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
              }}
            >
              <FiUser size={15} className='flex-shrink-0' />
              Manage account
            </Link>

            {/* Divider */}
            <div
              className='my-1 mx-1'
              style={{ borderTop: '1px solid #ede8e0' }}
            />

            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className='flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-colors duration-150'
              style={{ color: '#9a8a7e' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = '#fdf1f0';
                (e.currentTarget as HTMLElement).style.color = '#c0392b';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
                (e.currentTarget as HTMLElement).style.color = '#9a8a7e';
              }}
            >
              <FiLogOut size={15} className='flex-shrink-0' />
              Log out
            </button>
          </div>
        </m.div>
      )}
    </div>
  );
}
