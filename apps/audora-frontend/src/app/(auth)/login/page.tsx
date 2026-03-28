import React from 'react';
import Link from 'next/link';
import AuthCard from '@/components/auth/auth-card';
import SocialLoginButtons from '@/components/auth/register/SocialLoginButtons';
import getPageMetadata from '@/lib/seo/getPageMetadata';
import LoginForm from '@/components/auth/login-form';

export const metadata = getPageMetadata({
  title: 'Login',
  description: 'Login to your Audora account',
});

const BRAND_FEATURES = [
  'Record studio-quality audio & video',
  'AI-powered transcript editing',
  'Simulcast to 7+ platforms live',
];

const LoginPage = () => {
  return (
    <main className='flex min-h-screen w-screen bg-[#f7f5f1]'>
      <AuthCard>

        {/* ── LEFT: Form panel ──────────────────────────────── */}
        <div className='flex w-full flex-col justify-center bg-[#f7f5f1] px-8 py-16 sm:px-12 md:w-[45%] md:px-14 lg:px-20'>

          {/* Logo mark */}
          <div className='mb-12'>
            <div className='flex items-center gap-2'>
              <span className='font-syne text-[18px] font-extrabold tracking-[-0.04em] text-[#1a1714]'>
                Audora
              </span>
            </div>
          </div>

          <div className='w-full max-w-sm'>
            {/* Heading */}
            <div className='mb-8'>
              <div className='mb-3 flex items-center gap-2.5'>
                <span className='h-px w-5 bg-[#b8620a]/60' />
                <span className='font-mono text-[10px] uppercase tracking-[0.22em] text-[#b8620a]'>
                  Welcome back
                </span>
              </div>
              <h1 className='font-syne text-[1.75rem] font-extrabold leading-tight tracking-[-0.03em] text-[#1a1714]'>
                Sign in to
                <br />
                <span className='text-[#9a8878]'>your studio.</span>
              </h1>
            </div>

            {/* Social buttons */}
            <SocialLoginButtons />

            {/* Divider */}
            <div className='my-5 flex items-center gap-3'>
              <span className='h-px flex-1 bg-[#e4dfd6]' />
              <span className='font-mono text-[10px] uppercase tracking-[0.16em] text-[#b0a394]'>
                or email
              </span>
              <span className='h-px flex-1 bg-[#e4dfd6]' />
            </div>

            {/* Login form */}
            <LoginForm />

            {/* Links */}
            <div className='mt-4 flex items-center justify-between'>
              <Link
                href='/password-recovery'
                className='text-[12px] text-[#9a8878] underline underline-offset-2 transition-colors hover:text-[#1a1714]'
              >
                Forgot password?
              </Link>
              <p className='text-[13px] text-[#9a8878]'>
                New here?{' '}
                <Link
                  href='/register'
                  className='font-medium text-[#1a1714] underline underline-offset-2 transition-colors hover:text-[#b8620a]'
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Brand panel ────────────────────────────── */}
        <div className='relative hidden flex-1 flex-col justify-between overflow-hidden bg-[#1a1714] px-14 py-16 md:flex lg:px-20'>

          {/* Warm bloom */}
          <div
            aria-hidden
            className='pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/3 translate-y-1/3 rounded-full bg-[#b8620a]/[0.08] blur-[150px]'
          />

          {/* Top rule accent */}
          <div className='absolute top-0 left-14 right-14 h-px bg-gradient-to-r from-transparent via-[#b8620a]/40 to-transparent lg:left-20 lg:right-20' />

          {/* Brand statement */}
          <div className='relative z-10'>
            <p className='mb-8 font-mono text-[10px] uppercase tracking-[0.22em] text-[#b8620a]'>
              ✦ &nbsp;Audora Studio
            </p>
            <h2 className='font-syne mb-10 text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.0] tracking-[-0.04em] text-white'>
              Everything you need
              <br />
              to create your
              <br />
              <span className='text-[#5a4e44]'>best content.</span>
            </h2>

            <ul className='space-y-4'>
              {BRAND_FEATURES.map((feat, i) => (
                <li key={i} className='flex items-start gap-3'>
                  <span className='mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b8620a]' />
                  <span className='text-[14px] leading-relaxed text-[#9a8878]'>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom wordmark */}
          <div
            aria-hidden
            className='relative z-10 font-syne pointer-events-none select-none whitespace-nowrap text-[clamp(3rem,6vw,5rem)] font-extrabold leading-none tracking-[-0.05em] text-white/[0.04]'
          >
            AUDORA
          </div>
        </div>

      </AuthCard>
    </main>
  );
};

export default LoginPage;
