'use client';

import { X } from 'lucide-react';
import { m, AnimatePresence, useReducedMotion } from 'framer-motion';
import React, { useRef } from 'react';

type PopupWrapperProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function PopupWrapper({
  open,
  onClose,
  children,
}: PopupWrapperProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  function handleOverlayKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClose();
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <m.div
            className='fixed inset-0 z-40 bg-black/50'
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          />
          <m.div
            className='fixed inset-0 z-50 flex items-center justify-center p-4'
            initial={
              shouldReduceMotion ? { opacity: 1 } : { scale: 0.95, opacity: 0 }
            }
            animate={{ scale: 1, opacity: 1 }}
            exit={
              shouldReduceMotion ? { opacity: 1 } : { scale: 0.95, opacity: 0 }
            }
            onClick={onClose}
            role='button'
            tabIndex={0}
            onKeyDown={handleOverlayKeyDown}
            aria-label='Close modal'
          >
            <div
              ref={modalRef}
              role='dialog'
              aria-modal='true'
              onClick={e => e.stopPropagation()}
              onKeyDown={e => e.stopPropagation()}
              className='relative w-full max-w-lg rounded-xl bg-zinc-900 p-6 text-white shadow-xl'
            >
              <button
                onClick={onClose}
                className='absolute top-3 right-3 rounded-full bg-zinc-800 p-1 text-zinc-400 transition hover:text-white'
              >
                <X size={16} />
              </button>
              {children}
            </div>
          </m.div>
        </>
      )}
    </AnimatePresence>
  );
}
