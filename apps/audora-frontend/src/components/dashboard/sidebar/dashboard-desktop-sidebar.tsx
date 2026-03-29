'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FiHome, FiFolder, FiVideo, FiUserPlus,
  FiSettings, FiChevronLeft, FiChevronRight,
} from 'react-icons/fi';
import Logo from '../../logo';
import Tooltip from '../tooltip';
import AvatarDropdown from '../avatar/avatar-dropdown';
import { useStudioSettingsStore } from '@/store/studio/studio-settings-store';
import { Plus } from 'lucide-react';
import PopupWrapper from '../../shared/ui/popup-wrapper';
import CreateStudioPopup from '../account/create-studio-popup';

const navItems = [
  { href: '/dashboard/home', icon: FiHome, label: 'Home' },
  { href: '/projects', icon: FiFolder, label: 'Projects' },
];

/* ── Light palette matching landing page ─────────────── */
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

/*
 * Only wrap with Tooltip when there is something to show.
 * This avoids:
 *   1. Empty tooltip boxes when the sidebar is open
 *   2. The Tooltip's inline-block wrapper breaking flex-grow on children
 */
const MaybeTooltip = ({
  label,
  show,
  children,
}: {
  label: string;
  show: boolean;
  children: React.ReactNode;
}) =>
  show ? (
    <Tooltip tooltip={label} position='right' delay={120}>
      {children}
    </Tooltip>
  ) : (
    <>{children}</>
  );

/* Tiny mono section label */
const SectionLabel = ({ text }: { text: string }) => (
  <p
    className='font-mono text-[9px] uppercase tracking-[0.22em] px-2 pt-4 pb-1.5 select-none'
    style={{ color: C.label }}
  >
    {text}
  </p>
);

/* Shared nav-item style helper */
const navItemStyle = (active: boolean) => ({
  background: active ? C.amberBg : 'transparent',
  color:      active ? C.amberText : C.textMid,
});

const DashboardDesktopSidebar = () => {
  const [open, setOpen] = useState(true);
  const [isCreateStudioOpen, setIsCreateStudioOpen] = useState(false);
  const { studioSetting } = useStudioSettingsStore();
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/');

  const hoverOn  = (el: HTMLElement) => { el.style.background = C.hover;        el.style.color = C.text; };
  const hoverOff = (el: HTMLElement, active: boolean) => {
    el.style.background = active ? C.amberBg : 'transparent';
    el.style.color      = active ? C.amberText : C.textMid;
  };

  return (
    <>
      {/*
        NO overflow-hidden — tooltips and avatar dropdown are absolutely
        positioned and must not be clipped by the sidebar.
      */}
      <aside
        className='hidden lg:flex h-screen flex-col justify-between transition-all duration-300 ease-in-out'
        style={{
          width: open ? '15rem' : '4rem',
          background: C.bg,
          borderRight: `1px solid ${C.border}`,
        }}
      >

        {/* ── TOP ───────────────────────────────────── */}
        <div className='flex flex-col'>

          {/* Logo + collapse toggle */}
          <div
            className='flex h-14 shrink-0 items-center px-3'
            style={{
              borderBottom: `1px solid ${C.border}`,
              justifyContent: open ? 'space-between' : 'center',
            }}
          >
            {open && (
              <div className='overflow-hidden'>
                <Logo scrolled href='/dashboard/home' />
              </div>
            )}
            <MaybeTooltip label={open ? 'Collapse' : 'Expand'} show>
              <button
                onClick={() => setOpen(o => !o)}
                className='flex items-center justify-center w-7 h-7 rounded-lg transition-all duration-150'
                style={{ color: C.textDim, background: 'transparent' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = C.hover; (e.currentTarget as HTMLElement).style.color = C.text; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = C.textDim; }}
                aria-label={open ? 'Collapse sidebar' : 'Expand sidebar'}
              >
                {open ? <FiChevronLeft size={14} /> : <FiChevronRight size={14} />}
              </button>
            </MaybeTooltip>
          </div>

          {/* Nav items */}
          <nav className='flex flex-col gap-0.5 px-2 pt-2'>
            {open && studioSetting.studioSlug && <SectionLabel text='Navigation' />}

            {!studioSetting.studioSlug ? (
              /* No studio yet — prompt to create */
              <button
                onClick={() => setIsCreateStudioOpen(true)}
                className={`flex items-center gap-3 w-full rounded-xl px-2.5 py-2.5 text-sm font-medium transition-all duration-150 mt-1 ${
                  open ? '' : 'justify-center'
                }`}
                style={{ color: C.textMid }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = C.amberHover; (e.currentTarget as HTMLElement).style.color = C.amberText; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = C.textMid; }}
              >
                <span className='flex-shrink-0 flex items-center justify-center w-5 h-5' style={{ color: C.amber }}>
                  <Plus size={17} />
                </span>
                {open && <span className='truncate'>Create Studio</span>}
              </button>
            ) : (
              navItems.map(item => {
                const Icon = item.icon;
                const href =
                  item.label === 'Projects'
                    ? `/studio/${studioSetting.studioSlug}${item.href}`
                    : item.href;
                const active = isActive(item.href);

                return (
                  /* Only show tooltip when collapsed — avoids empty-box bug
                     and flex-grow breakage from the inline-block wrapper     */
                  <MaybeTooltip key={item.href} label={item.label} show={!open}>
                    <Link
                      href={href}
                      className={`relative flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-sm font-medium transition-all duration-150 ${
                        open ? '' : 'justify-center'
                      }`}
                      style={navItemStyle(active)}
                      onMouseEnter={e => { if (!active) hoverOn(e.currentTarget as HTMLElement); }}
                      onMouseLeave={e => { if (!active) hoverOff(e.currentTarget as HTMLElement, active); }}
                    >
                      {active && (
                        <span
                          className='absolute left-0 top-1/2 -translate-y-1/2 h-4 w-[2px] rounded-full'
                          style={{ background: C.amber }}
                        />
                      )}
                      <span className='flex-shrink-0 flex items-center justify-center w-5 h-5'>
                        <Icon size={16} />
                      </span>
                      {open && <span className='truncate'>{item.label}</span>}
                    </Link>
                  </MaybeTooltip>
                );
              })
            )}
          </nav>
        </div>

        {/* ── BOTTOM ────────────────────────────────── */}
        <div
          className='flex flex-col gap-0.5 px-2 pb-4 pt-3'
          style={{ borderTop: `1px solid ${C.border}` }}
        >
          {studioSetting.studioSlug && (
            <>
              {open && <SectionLabel text='Workspace' />}

              {/* Open Studio + Invite — rendered directly (no Tooltip wrapper)
                  when open so flex-1 works. Tooltip only when collapsed.     */}
              <div className={`flex gap-1.5 mb-1 ${open ? 'flex-row' : 'flex-col items-center'}`}>

                {open ? (
                  /* ── expanded: no Tooltip so flex-1 works ── */
                  <>
                    <a
                      href={`/studio/${studioSetting.studioSlug}`}
                      className='flex flex-1 items-center gap-2 rounded-xl px-3 py-2.5 text-xs font-semibold transition-all duration-200'
                      style={{ color: C.textMid, background: C.cardBg, border: `1px solid ${C.cardBorder}` }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = C.amberHover; (e.currentTarget as HTMLElement).style.color = C.amberText; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(184,98,10,0.3)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = C.cardBg; (e.currentTarget as HTMLElement).style.color = C.textMid; (e.currentTarget as HTMLElement).style.borderColor = C.cardBorder; }}
                    >
                      <FiVideo size={14} className='flex-shrink-0' />
                      <span className='truncate'>Open Studio</span>
                    </a>
                    <Link
                      href='/dashboard/invite'
                      className='flex items-center gap-2 rounded-xl px-3 py-2.5 text-xs font-semibold transition-all duration-200'
                      style={{ color: C.textDim, background: C.cardBg, border: `1px solid ${C.cardBorder}` }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = C.hover; (e.currentTarget as HTMLElement).style.color = C.text; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = C.cardBg; (e.currentTarget as HTMLElement).style.color = C.textDim; }}
                    >
                      <FiUserPlus size={14} />
                      <span>Invite</span>
                    </Link>
                  </>
                ) : (
                  /* ── collapsed: icons with tooltips ── */
                  <>
                    <MaybeTooltip label='Open Studio' show>
                      <a
                        href={`/studio/${studioSetting.studioSlug}`}
                        className='flex items-center justify-center p-2.5 rounded-xl transition-all duration-200'
                        style={{ color: C.textMid, background: C.cardBg, border: `1px solid ${C.cardBorder}` }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = C.amberHover; (e.currentTarget as HTMLElement).style.color = C.amberText; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(184,98,10,0.3)'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = C.cardBg; (e.currentTarget as HTMLElement).style.color = C.textMid; (e.currentTarget as HTMLElement).style.borderColor = C.cardBorder; }}
                      >
                        <FiVideo size={15} />
                      </a>
                    </MaybeTooltip>
                    <MaybeTooltip label='Invite' show>
                      <Link
                        href='/dashboard/invite'
                        className='flex items-center justify-center p-2.5 rounded-xl transition-all duration-200'
                        style={{ color: C.textDim, background: C.cardBg, border: `1px solid ${C.cardBorder}` }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = C.hover; (e.currentTarget as HTMLElement).style.color = C.text; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = C.cardBg; (e.currentTarget as HTMLElement).style.color = C.textDim; }}
                      >
                        <FiUserPlus size={15} />
                      </Link>
                    </MaybeTooltip>
                  </>
                )}
              </div>
            </>
          )}

          {/* Settings — same exact structure as nav items above */}
          <MaybeTooltip label='Settings' show={!open}>
            <Link
              href='/dashboard/account/studio-settings'
              className={`relative flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-sm font-medium transition-all duration-150 ${
                open ? '' : 'justify-center'
              }`}
              style={navItemStyle(isActive('/dashboard/account'))}
              onMouseEnter={e => { if (!isActive('/dashboard/account')) hoverOn(e.currentTarget as HTMLElement); }}
              onMouseLeave={e => { if (!isActive('/dashboard/account')) hoverOff(e.currentTarget as HTMLElement, isActive('/dashboard/account')); }}
            >
              {isActive('/dashboard/account') && (
                <span
                  className='absolute left-0 top-1/2 -translate-y-1/2 h-4 w-[2px] rounded-full'
                  style={{ background: C.amber }}
                />
              )}
              <span className='flex-shrink-0 flex items-center justify-center w-5 h-5'>
                <FiSettings size={15} />
              </span>
              {open && <span>Settings</span>}
            </Link>
          </MaybeTooltip>

          {/* Avatar — parent has no overflow-hidden so dropdown is never clipped */}
          <div className={`mt-1.5 ${open ? 'px-0.5' : 'flex justify-center'}`}>
            <AvatarDropdown collapsed={!open} />
          </div>
        </div>
      </aside>

      {isCreateStudioOpen && (
        <PopupWrapper open={isCreateStudioOpen} onClose={() => setIsCreateStudioOpen(false)}>
          <CreateStudioPopup onClose={() => setIsCreateStudioOpen(false)} />
        </PopupWrapper>
      )}
    </>
  );
};

export default DashboardDesktopSidebar;
