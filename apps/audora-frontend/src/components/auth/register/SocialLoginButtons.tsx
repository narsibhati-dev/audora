'use client';

import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { loginWithGoogle } from '@/lib/auth/loginWithGoogle';

interface SocialLoginButtonsProps {
  onGoogleLogin?: () => void;
  onAppleLogin?: () => void;
}

export default function SocialLoginButtons({}: SocialLoginButtonsProps) {
  return (
    <div className='flex w-full gap-3'>
      <button
        onClick={() => loginWithGoogle()}
        className='flex flex-1 items-center justify-center gap-2.5 rounded-lg border border-[#ddd6cc] bg-white px-4 py-3 text-[13px] font-medium text-[#1a1714] transition-all duration-200 hover:border-[#b0a394] hover:bg-[#f7f5f1] active:scale-[0.98]'
        aria-label='Continue with Google'
      >
        <FcGoogle className='text-[18px]' />
        <span>Google</span>
      </button>
      <button
        className='flex flex-1 items-center justify-center gap-2.5 rounded-lg border border-[#ddd6cc] bg-white px-4 py-3 text-[13px] font-medium text-[#1a1714] transition-all duration-200 hover:border-[#b0a394] hover:bg-[#f7f5f1] active:scale-[0.98]'
        aria-label='Continue with Apple'
      >
        <FaApple className='text-[18px]' />
        <span>Apple</span>
      </button>
    </div>
  );
}
