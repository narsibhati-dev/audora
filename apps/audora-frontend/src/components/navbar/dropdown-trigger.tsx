'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';

interface DropdownTriggerProps {
  text: string;
  className?: string;
  isOpen: boolean;
}

const DropdownTrigger = ({
  text,
  className = '',
  isOpen,
}: DropdownTriggerProps) => {
  return (
    <span
      className={`flex cursor-pointer items-center gap-1 text-sm font-medium text-[#7a6f65] transition-colors duration-200 hover:text-[#1a1714] ${className}`}
    >
      {text}
      <ChevronDown
        className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
      />
    </span>
  );
};

export default DropdownTrigger;
