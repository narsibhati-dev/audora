'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Section {
  id: string;
  title: string;
}

const TableOfContents = ({ sections }: { sections: Section[] }) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-15% 0% -60% 0%', threshold: 0 },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav aria-label='Table of contents' className='sticky top-28'>
      <div className='mb-5 flex items-center gap-2.5'>
        <span className='h-px w-4 bg-[#b8620a]/60' />
        <span className='font-mono text-[10px] uppercase tracking-[0.22em] text-[#b8620a]'>
          Contents
        </span>
      </div>

      <ul>
        {sections.map((section, i) => {
          const isActive = activeId === section.id;
          return (
            <li key={section.id}>
              <Link
                href={`#${section.id}`}
                className={`group flex items-start gap-3 border-l-2 py-2.5 pl-3.5 transition-all duration-200 ${
                  isActive
                    ? 'border-[#b8620a]'
                    : 'border-[#e4dfd6] hover:border-[#b8620a]/40'
                }`}
              >
                <span
                  className={`mt-px shrink-0 font-mono text-[10px] tracking-[0.1em] transition-colors duration-200 ${
                    isActive
                      ? 'text-[#b8620a]'
                      : 'text-[#c8b9a8] group-hover:text-[#b8620a]'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className={`text-[12.5px] leading-[1.5] font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-[#1a1714]'
                      : 'text-[#9a8878] group-hover:text-[#3d3530]'
                  }`}
                >
                  {section.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TableOfContents;
