'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome, FiVideo, FiUserPlus, FiSettings, FiX, FiMenu } from 'react-icons/fi';
import Logo from '../../logo';
import AvatarDropdown from '../avatar/avatar-dropdown';
import { useStudioSettingsStore } from '@/store/studio/studio-settings-store';

const navItems = [{ href: '/dashboard/home', icon: FiHome, label: 'Home' }];

/* ── Light-theme colour tokens ─────────────────────────── */
const C = {
  bg:         '#ede9e3',
  border:     '#d8d2c8',
  amber:      '#b8620a',
  amberBg:    'rgba(184,98,10,0.07)',
  amberText:  '#7c4a12',
  amberHover: 'rgba(184,98,10,0.12)',
  text:       '#3a2d22',
  textMid:    '#6b5c50',
  textDim:    '#a89a8e',
  hover:      'rgba(0,0,0,0.05)',
  cardBg:     'rgba(0,0,0,0.04)',
  cardBorder: '#cdc7be',
  label:      '#b4a49a',
} as const;

const DashboardMobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { studioSetting } = useStudioSettingsStore();

  useEffect(() => { setTimeout(() => setIsOpen(false), 0); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/');

  return (
    <>
      {/* ── Hamburger — z-[200] always above everything ── */}
      <button
        onClick={() => setIsOpen(true)}
        className='fixed top-3.5 left-3.5 flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-150 active:scale-95 lg:hidden'
        style={{
          zIndex: 200,
          background: C.bg,
          border: `1px solid ${C.border}`,
          color: C.textMid,
          boxShadow: '0 2px 12px rgba(0,0,0,0.12)',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.color = C.text;
          (e.currentTarget as HTMLElement).style.borderColor = C.amber;
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.color = C.textMid;
          (e.currentTarget as HTMLElement).style.borderColor = C.border;
        }}
        aria-label='Open menu'
      >
        <FiMenu size={17} />
      </button>

      {/* ── Backdrop — z-[190] ──────────────────────────── */}
      <div
        onClick={() => setIsOpen(false)}
        aria-hidden='true'
        className='fixed inset-0 lg:hidden transition-all duration-300'
        style={{
          zIndex: 190,
          background: 'rgba(58,45,34,0.35)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
      />

      {/* ── Drawer — z-[195], NO overflow-hidden ────────── */}
      <div
        className='fixed top-0 left-0 h-screen w-[17rem] flex flex-col lg:hidden'
        style={{
          zIndex: 195,
          background: C.bg,
          borderRight: `1px solid ${C.border}`,
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: isOpen ? '8px 0 32px rgba(58,45,34,0.18)' : 'none',
        }}
        role='dialog'
        aria-modal='true'
        aria-label='Navigation menu'
      >
        {/* Faint amber bloom in top-right of drawer */}
        <div
          className='pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full'
          style={{ background: 'radial-gradient(circle, rgba(184,98,10,0.07) 0%, transparent 70%)' }}
          aria-hidden
        />

        {/* Header */}
        <div
          className='relative flex items-center justify-between h-14 px-4 shrink-0'
          style={{ borderBottom: `1px solid ${C.border}` }}
        >
          <Logo scrolled href='/dashboard/home' />
          <button
            onClick={() => setIsOpen(false)}
            className='flex items-center justify-center w-7 h-7 rounded-lg transition-all duration-150'
            style={{ color: C.textDim, background: 'transparent' }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = C.hover;
              (e.currentTarget as HTMLElement).style.color = C.text;
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = 'transparent';
              (e.currentTarget as HTMLElement).style.color = C.textDim;
            }}
            aria-label='Close sidebar'
          >
            <FiX size={16} />
          </button>
        </div>

        {/* Nav */}
        <nav
          className='relative flex-1 flex flex-col gap-0.5 px-2 pt-2 overflow-y-auto scrollbar-none'
          aria-label='Main navigation'
        >
          {studioSetting.studioSlug && (
            <p
              className='font-mono text-[9px] uppercase tracking-[0.22em] px-2 pt-3 pb-1.5 select-none'
              style={{ color: C.label }}
            >
              Navigation
            </p>
          )}

          {!studioSetting.studioSlug ? (
            <Link
              href='/dashboard/account/studio-settings'
              className='flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-150'
              style={{
                background: isActive('/dashboard/account/studio-settings') ? C.amberBg : 'transparent',
                color: isActive('/dashboard/account/studio-settings') ? C.amberText : C.textMid,
              }}
            >
              <span className='relative flex items-center justify-center w-5 h-5 flex-shrink-0'>
                {isActive('/dashboard/account/studio-settings') && (
                  <span
                    className='absolute -left-3 top-1/2 -translate-y-1/2 h-3.5 w-[2px] rounded-full'
                    style={{ background: C.amber }}
                  />
                )}
                <FiSettings size={16} />
              </span>
              Settings
            </Link>
          ) : (
            navItems.map(item => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className='relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-150'
                  style={{
                    background: active ? C.amberBg : 'transparent',
                    color: active ? C.amberText : C.textMid,
                  }}
                  aria-current={active ? 'page' : undefined}
                  onMouseEnter={e => {
                    if (!active) {
                      (e.currentTarget as HTMLElement).style.background = C.hover;
                      (e.currentTarget as HTMLElement).style.color = C.text;
                    }
                  }}
                  onMouseLeave={e => {
                    if (!active) {
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                      (e.currentTarget as HTMLElement).style.color = C.textMid;
                    }
                  }}
                >
                  {active && (
                    <span
                      className='absolute left-0 top-1/2 -translate-y-1/2 h-4 w-[2px] rounded-full'
                      style={{ background: C.amber }}
                    />
                  )}
                  <span className='flex items-center justify-center w-5 h-5 flex-shrink-0'>
                    <Icon size={16} />
                  </span>
                  {item.label}
                </Link>
              );
            })
          )}
        </nav>

        {/* Footer — NO overflow-hidden so avatar dropdown renders freely */}
        <div
          className='relative flex flex-col gap-1.5 px-2 pb-5 pt-3'
          style={{ borderTop: `1px solid ${C.border}` }}
        >
          {studioSetting.studioSlug && (
            <>
              <p
                className='font-mono text-[9px] uppercase tracking-[0.22em] px-2 pt-1 pb-1.5 select-none'
                style={{ color: C.label }}
              >
                Workspace
              </p>
              <div
                className='flex flex-col gap-1 pb-3 mb-1'
                style={{ borderBottom: `1px solid ${C.border}` }}
              >
                <Link
                  href={`/studio/${studioSetting.studioSlug}`}
                  className='flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-xs font-semibold transition-all duration-150'
                  style={{
                    color: C.textMid,
                    background: C.cardBg,
                    border: `1px solid ${C.cardBorder}`,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = C.amberHover;
                    (e.currentTarget as HTMLElement).style.color = C.amberText;
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(184,98,10,0.3)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = C.cardBg;
                    (e.currentTarget as HTMLElement).style.color = C.textMid;
                    (e.currentTarget as HTMLElement).style.borderColor = C.cardBorder;
                  }}
                >
                  <FiVideo size={14} className='flex-shrink-0' />
                  Open Studio
                </Link>

                <Link
                  href='/dashboard/invite'
                  className='flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-xs font-semibold transition-all duration-150'
                  style={{
                    color: C.textDim,
                    background: C.cardBg,
                    border: `1px solid ${C.cardBorder}`,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = C.hover;
                    (e.currentTarget as HTMLElement).style.color = C.text;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = C.cardBg;
                    (e.currentTarget as HTMLElement).style.color = C.textDim;
                  }}
                >
                  <FiUserPlus size={14} className='flex-shrink-0' />
                  Invite
                </Link>
              </div>
            </>
          )}

          <Link
            href='/dashboard/account/settings'
            className='flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-150'
            style={{
              background: isActive('/dashboard/account/settings') ? C.amberBg : 'transparent',
              color: isActive('/dashboard/account/settings') ? C.amberText : C.textDim,
            }}
            aria-current={isActive('/dashboard/account/settings') ? 'page' : undefined}
            onMouseEnter={e => {
              if (!isActive('/dashboard/account/settings')) {
                (e.currentTarget as HTMLElement).style.background = C.hover;
                (e.currentTarget as HTMLElement).style.color = C.text;
              }
            }}
            onMouseLeave={e => {
              if (!isActive('/dashboard/account/settings')) {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
                (e.currentTarget as HTMLElement).style.color = C.textDim;
              }
            }}
          >
            <span className='flex items-center justify-center w-5 h-5 flex-shrink-0'>
              <FiSettings size={16} />
            </span>
            Settings
          </Link>

          <div className='mt-1 px-0.5'>
            <AvatarDropdown />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardMobileSidebar;
