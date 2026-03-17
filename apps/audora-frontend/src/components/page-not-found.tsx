'use client';

import Header from './shared/header';
import { m, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

const PageNotFound = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <Header />
      <main className='relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#101010] px-4'>
        <div className='from-primary-500/10 absolute inset-0 bg-gradient-to-b to-transparent' />

        <div className='bg-primary-500/20 absolute top-1/4 left-1/4 h-64 w-64 animate-pulse rounded-full blur-3xl' />
        <div className='bg-primary-500/20 absolute right-1/4 bottom-1/4 h-64 w-64 animate-pulse rounded-full blur-3xl' />

        <m.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          className='relative z-10 text-center'
        >
          <m.h1
            initial={shouldReduceMotion ? false : { scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                    delay: 0.2,
                  }
            }
            className='mb-4 text-8xl font-bold text-white'
          >
            404
          </m.h1>

          <m.h2
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.4 }}
            className='mb-6 text-3xl font-semibold text-gray-300'
          >
            Page Not Found
          </m.h2>

          <m.p
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.6 }}
            className='mb-8 max-w-md text-gray-400'
          >
            {`Oops! The page you're looking for doesn't exist or has been moved.`}
          </m.p>

          <m.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.8 }}
            className='flex flex-col items-center gap-4 sm:flex-row sm:justify-center'
          >
            <Link
              href='/'
              className='group bg-primary-500 hover:bg-primary-600 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-white transition-all hover:shadow-lg'
            >
              <FaHome className='transition-transform group-hover:-translate-x-1' />
              Back to Home
            </Link>
          </m.div>

          <m.div
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: shouldReduceMotion ? 0 : 1 }}
            className='mt-12 text-sm text-gray-500'
          >
            <p>Need help? Contact our support team</p>
            <Link
              href='/contact'
              className='text-primary-500 hover:text-primary-600 cursor-pointer'
            >
              Get Support
            </Link>
          </m.div>
        </m.div>
      </main>
    </>
  );
};

export default PageNotFound;
