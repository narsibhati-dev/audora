'use client';

import { LazyMotion, domAnimation } from 'motion/react';

export function FramerMotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
