'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import type { IconKey } from '@/data';
import { getIcon } from '@/data';

type DropdownItem = {
  title: string;
  href: string;
  description: string;
  iconKey: IconKey;
};

type Props = {
  sectionKey: string;
  label: string;
  items: DropdownItem[];
  isOpen: boolean;
  onToggle: (key: string) => void;
  onCloseMenu: () => void;
};

const MobileDropdownSection: React.FC<Props> = ({
  sectionKey,
  label,
  items,
  isOpen,
  onToggle,
  onCloseMenu,
}) => {
  return (
    <div className='border-b border-[#e4dfd6]'>
      <button
        onClick={() => onToggle(sectionKey)}
        className='flex w-full items-center justify-between py-4 text-base font-medium text-[#5a4e44] transition-colors hover:text-[#1a1714]'
        aria-expanded={isOpen}
        aria-controls={`dropdown-${sectionKey}`}
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 text-[#b0a394] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && items.length > 0 && (
        <div
          className='space-y-1 pb-3 pl-2'
          id={`dropdown-${sectionKey}`}
        >
          {items.map(item => {
            const Icon = getIcon(item.iconKey);
            return (
              <Link
                key={item.title}
                href={item.href}
                className='group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-[#ede8e1]'
                onClick={() => {
                  window.scrollTo(0, 0);
                  onToggle(sectionKey);
                  onCloseMenu();
                }}
              >
                <div className='shrink-0 rounded-lg bg-[#e8e2d8] p-2'>
                  <Icon className='h-4 w-4 text-[#b8620a]' />
                </div>
                <div>
                  <p className='text-sm font-semibold text-[#1a1714]'>
                    {item.title}
                  </p>
                  <p className='text-xs text-[#9a8878]'>{item.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MobileDropdownSection;
