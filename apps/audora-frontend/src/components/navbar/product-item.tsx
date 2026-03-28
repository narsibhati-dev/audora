'use client';

import React from 'react';
import Link from 'next/link';
import type { IconKey } from '@/data';
import { getIcon } from '@/data';

interface ProductItemProps {
  iconKey: IconKey;
  title: string;
  description: string;
  href: string;
}

const ProductItem = ({
  iconKey,
  title,
  description,
  href,
}: ProductItemProps) => {
  return (
    <Link href={href} aria-label={title} className='block'>
      <div className='group flex w-full cursor-pointer items-start gap-3 rounded-lg p-3 transition-all duration-150 hover:bg-[#ede8e1]'>
        <div className='shrink-0 rounded-lg bg-[#e8e2d8] p-2.5'>
          {React.createElement(getIcon(iconKey), {
            className: 'h-4 w-4 text-[#b8620a]',
          })}
        </div>
        <div>
          <p className='text-sm font-semibold text-[#1a1714] transition-colors duration-150'>
            {title}
          </p>
          <p className='mt-0.5 text-xs leading-relaxed text-[#9a8878]'>
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
