'use client';

import React, { useState } from 'react';
import { type UserLogin, UserLoginSchema } from '@audora/types';
import { toast } from 'react-hot-toast';
import { HashLoader } from 'react-spinners';
import { signIn } from 'next-auth/react';
import siteMetadata from '@/lib/seo/siteMetadata';

const LoginForm = () => {
  const [formData, setFormData] = useState<UserLogin>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Partial<UserLogin>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const validatedData = UserLoginSchema.parse(formData);
      setErrors({});

      const result = await signIn('credentials', {
        email: validatedData.email,
        password: validatedData.password,
        callbackUrl: siteMetadata.dashboard,
      });

      if (result?.error) {
        toast.error(result.error);
        return;
      }

      if (result?.ok) {
        toast.success('Logged in successfully');
      }
    } catch (error) {
      if (error instanceof Error) {
        try {
          const zodError = JSON.parse(error.message);
          const formattedErrors: Partial<UserLogin> = {};
          zodError.forEach((err: { path: string[]; message: string }) => {
            const field = err.path[0] as keyof UserLogin;
            formattedErrors[field] = err.message;
          });
          setErrors(formattedErrors);
        } catch {
          toast.error(error.message);
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: UserLogin) => ({ ...prev, [name]: value }));
    if (errors[name as keyof UserLogin]) {
      setErrors((prev: Partial<UserLogin>) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-full space-y-3'>
      <div>
        <label htmlFor='email' className='sr-only'>Email address</label>
        <input
          id='email'
          type='email'
          name='email'
          required
          autoComplete='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Email address'
          disabled={isLoading}
          className={`w-full rounded-lg border px-4 py-3 text-[14px] text-[#1a1714] placeholder-[#c8b9a8] outline-none transition-all ${
            errors.email
              ? 'border-red-400 bg-red-50 focus:ring-2 focus:ring-red-200'
              : 'border-[#ddd6cc] bg-white focus:border-[#b8620a] focus:ring-2 focus:ring-[#b8620a]/10'
          }`}
        />
        {errors.email && (
          <p className='mt-1.5 text-[12px] text-red-500' role='alert'>{errors.email}</p>
        )}
      </div>

      <div className='relative'>
        <label htmlFor='password' className='sr-only'>Password</label>
        <input
          id='password'
          type={showPassword ? 'text' : 'password'}
          name='password'
          required
          autoComplete='current-password'
          value={formData.password}
          onChange={handleChange}
          placeholder='Password'
          disabled={isLoading}
          className={`w-full rounded-lg border px-4 py-3 pr-16 text-[14px] text-[#1a1714] placeholder-[#c8b9a8] outline-none transition-all ${
            errors.password
              ? 'border-red-400 bg-red-50 focus:ring-2 focus:ring-red-200'
              : 'border-[#ddd6cc] bg-white focus:border-[#b8620a] focus:ring-2 focus:ring-[#b8620a]/10'
          }`}
        />
        <button
          type='button'
          aria-label={showPassword ? 'Hide password' : 'Show password'}
          className='absolute top-1/2 right-0 -translate-y-1/2 flex h-[44px] w-[52px] items-center justify-center font-mono text-[11px] uppercase tracking-[0.12em] text-[#9a8878] transition-colors hover:text-[#1a1714]'
          onClick={() => setShowPassword(v => !v)}
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
        {errors.password && (
          <p className='mt-1.5 text-[12px] text-red-500' role='alert'>{errors.password}</p>
        )}
      </div>

      <button
        type='submit'
        disabled={isLoading}
        className={`mt-1 w-full rounded-lg bg-[#1a1714] px-4 py-3.5 text-[13px] font-semibold text-[#f7f5f1] transition-colors hover:bg-[#2e2a25] active:scale-[0.99] ${
          isLoading ? 'cursor-not-allowed opacity-60' : ''
        }`}
      >
        {isLoading ? (
          <div className='flex justify-center'>
            <HashLoader color='#f7f5f1' size={18} />
          </div>
        ) : (
          'Sign in'
        )}
      </button>
    </form>
  );
};

export default LoginForm;
