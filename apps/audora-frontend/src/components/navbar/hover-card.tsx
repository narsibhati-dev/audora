'use client';

import React, { useState, useRef } from 'react';
import DropdownTrigger from './dropdown-trigger';

interface HoverCardProps {
  triggerText: string;
  children: React.ReactNode;
  className?: string;
}

const HoverCard = ({
  triggerText,
  children,
  className = '',
}: HoverCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 120);
  };

  return (
    <div
      className='relative'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <DropdownTrigger
        text={triggerText}
        className={className}
        isOpen={isOpen}
      />

      <div
        className={`absolute top-full left-0 mt-5 w-[700px] overflow-hidden rounded-xl border border-[#e4dfd6] bg-[#faf8f5] shadow-[0_8px_40px_rgba(0,0,0,0.1)] transition-all duration-200 ${
          isOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-1 opacity-0'
        }`}
      >
        {/* Warm top accent */}
        <div className='h-[2px] bg-gradient-to-r from-[#b8620a]/40 via-[#e4dfd6] to-transparent' />
        {children}
      </div>
    </div>
  );
};

export default HoverCard;
