'use client';

import { loginWithGoogle } from '@/lib/auth/loginWithGoogle';
import { FaApple } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { MdEmail } from 'react-icons/md';

const providers = [
  {
    label: 'Continue with Google',
    icon: <FcGoogle className='text-[18px]' />,
    onClick: () => loginWithGoogle(),
  },
  {
    label: 'Continue with Apple',
    icon: <FaApple className='text-[18px] text-[#1a1714]' />,
  },
  {
    label: 'Continue with Email',
    icon: <MdEmail className='text-[18px] text-[#7a6f65]' />,
  },
];

export default function AuthButtons({
  onEmailClick,
}: {
  onEmailClick?: () => void;
}) {
  const handleClick = (label: string, onClick?: () => void) => {
    if (label === 'Continue with Email') {
      onEmailClick?.();
      return;
    }
    onClick?.();
  };

  return (
    <div className='flex w-full flex-col gap-2.5'>
      {providers.map(({ label, icon, onClick }, i) => (
        <button
          key={i}
          onClick={() => handleClick(label, onClick)}
          className='flex w-full items-center gap-3.5 rounded-lg border border-[#ddd6cc] bg-white px-5 py-3.5 text-[13px] font-medium text-[#1a1714] transition-all duration-200 hover:border-[#b0a394] hover:bg-[#f7f5f1] active:scale-[0.99]'
        >
          <span className='shrink-0'>{icon}</span>
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}
