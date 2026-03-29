'use client';

import { FcGoogle } from 'react-icons/fc';
import { loginWithGoogle } from '@/lib/auth/loginWithGoogle';

export default function SocialLoginButtons() {
  return (
    <button
      onClick={() => loginWithGoogle()}
      className='flex w-full items-center justify-center gap-2.5 rounded-lg border border-[#ddd6cc] bg-white px-4 py-3 text-[13px] font-medium text-[#1a1714] transition-all duration-200 hover:border-[#b0a394] hover:bg-[#f7f5f1] active:scale-[0.98]'
      aria-label='Continue with Google'
    >
      <FcGoogle className='text-[18px]' />
      <span>Continue with Google</span>
    </button>
  );
}
