'use client';

import React, { useState } from 'react';

const FAQ = ({ faqs }: { faqs: { question: string; answer: string }[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section className='bg-[#f7f5f1] py-24'>
      <div className='mx-auto max-w-10xl px-8 sm:px-12 lg:px-16 xl:px-24'>

        {/* Header */}
        <div className='mb-12'>
          <div className='mb-5 flex items-center gap-2.5'>
            <span className='h-px w-6 bg-[#b8620a]/60' />
            <span className='font-mono text-[11px] uppercase tracking-[0.24em] text-[#b8620a]'>
              FAQ
            </span>
          </div>
          <h2 className='font-syne text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-[#1a1714]'>
            Frequently asked
            <br />
            questions
          </h2>
        </div>

        {/* Accordion */}
        <div className='max-w-3xl divide-y divide-[#e4dfd6]'>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx}>
                <button
                  onClick={() => toggleFAQ(idx)}
                  className='flex w-full items-start justify-between gap-6 py-5 text-left focus:outline-none'
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                >
                  <span className='text-[15px] font-semibold text-[#1a1714]'>
                    {faq.question}
                  </span>
                  <span className='mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#ddd6cc] text-[14px] text-[#9a8878] select-none transition-colors hover:border-[#c8b9a8]'>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div
                  id={`faq-panel-${idx}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 pb-0 opacity-0'
                  }`}
                  aria-hidden={!isOpen}
                >
                  <p className='text-[14px] leading-relaxed text-[#7a6f65]'>
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
