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
    <main className='h-full w-full'>
      <AuthCard>

        {/* ── LEFT: Form panel ──────────────────────────────── */}
        <div className='flex h-full w-full flex-col justify-center overflow-y-auto bg-[#f7f5f1] px-8 sm:px-12 md:w-1/2 md:px-14 lg:px-20'>
          <div className='mx-auto w-full max-w-sm py-10'>

            {/* Logo */}
            <div className='mb-10'>
              <span className='font-syne text-[16px] font-extrabold tracking-[-0.04em] text-[#1a1714]'>
                AUDORA
              </span>
            </div>

            {/* Heading */}
            <div className='mb-7'>
              <div className='mb-3 flex items-center gap-2.5'>
                <span className='h-px w-5 bg-[#b8620a]/60' />
                <span className='font-mono text-[10px] uppercase tracking-[0.22em] text-[#b8620a]'>
                  Welcome back
                </span>
              </div>
              <h1 className='font-syne text-[1.9rem] font-extrabold leading-tight tracking-[-0.035em] text-[#1a1714]'>
                Sign in to
                <br />
                <span className='text-[#9a8878]'>your studio.</span>
              </h1>
            </div>

            {/* Google */}
            <SocialLoginButtons />

            {/* Divider */}
            <div className='my-5 flex items-center gap-3'>
              <span className='h-px flex-1 bg-[#e4dfd6]' />
              <span className='font-mono text-[10px] uppercase tracking-[0.16em] text-[#c8b9a8]'>or email</span>
              <span className='h-px flex-1 bg-[#e4dfd6]' />
            </div>

            {/* Form */}
            <LoginForm />

            {/* Links */}
            <div className='mt-3 flex items-center justify-between'>
              <Link
                href='/password-recovery'
                className='inline-flex min-h-[44px] items-center font-mono text-[11px] uppercase tracking-[0.12em] text-[#b0a394] transition-colors hover:text-[#1a1714]'
              >
                Forgot password?
              </Link>
              <p className='text-[12px] text-[#9a8878]'>
                New here?{' '}
                <Link
                  href='/register'
                  className='font-semibold text-[#1a1714] underline underline-offset-2 transition-colors hover:text-[#b8620a]'
                >
                  Sign up
                </Link>
              </p>
            </div>

            <p className='mt-7 font-mono text-[10px] uppercase tracking-[0.16em] text-[#d0c8be]'>
              No credit card required - Free forever plan
            </p>
          </div>
        </div>

        {/* ── RIGHT: Brand panel ────────────────────────────── */}
        <div className='relative hidden h-full flex-1 flex-col overflow-hidden bg-[#1a1714] md:flex'>

          {/* Amber top stripe */}
          <div className='h-[2px] shrink-0 bg-gradient-to-r from-[#b8620a] via-[#b8620a]/30 to-transparent' />

          {/* Ambient glow */}
          <div aria-hidden className='pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] translate-x-1/2 -translate-y-1/4 rounded-full bg-[#b8620a]/[0.07] blur-[200px]' />
          <div aria-hidden className='pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] -translate-x-1/3 translate-y-1/4 rounded-full bg-[#b8620a]/[0.04] blur-[140px]' />

          {/* Content — vertically centered */}
          <div className='relative z-10 flex flex-1 flex-col justify-center px-14 lg:px-20'>

            <p className='mb-5 font-mono text-[10px] uppercase tracking-[0.24em] text-[#b8620a]'>
              ✦ Audora Studio
            </p>

            <h2 className='font-syne mb-10 text-[clamp(2rem,3.2vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.045em] text-white'>
              Create confidently.
              <br />
              <span className='text-[#3a3330]'>Share seamlessly.</span>
            </h2>

            <ul className='space-y-5'>
              {BRAND_FEATURES.map((feat, i) => (
                <li key={i} className='flex items-center gap-3'>
                  <span className='h-px w-5 shrink-0 bg-[#b8620a]/40' />
                  <span className='text-[14px] leading-snug text-[#5a4e44]'>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom status */}
          <div className='relative z-10 flex items-center justify-between border-t border-[#2e2a25] px-14 py-4 lg:px-20'>
            <span className='font-mono text-[10px] text-[#4a4440]'>
              © {new Date().getFullYear()} Audora Labs
            </span>
            <div className='flex items-center gap-2'>
              <span className='relative flex h-1.5 w-1.5'>
                <span className='absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-40' />
                <span className='relative h-1.5 w-1.5 rounded-full bg-emerald-500' />
              </span>
              <span className='font-mono text-[10px] text-[#4a4440]'>All systems operational</span>
            </div>
          </div>
        </div>

      </AuthCard>
    </main>
  );
};

export default LoginPage;
