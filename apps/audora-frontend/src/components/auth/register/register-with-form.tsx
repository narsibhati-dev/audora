'use client';

import { RegisterUser } from '@/actions/auth';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import HashLoader from 'react-spinners/HashLoader';
import Link from 'next/link';

const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePassword = (password: string) =>
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*.,?])(?=.{8,})/.test(password);

const passwordChecks = [
  { label: 'One capital letter', test: (pw: string) => /[A-Z]/.test(pw) },
  { label: 'One special character', test: (pw: string) => /[!@#$%^&*.,?]/.test(pw) },
  { label: 'One lower-case letter', test: (pw: string) => /[a-z]/.test(pw) },
  { label: 'At least 8 characters', test: (pw: string) => pw.length >= 8 },
];

const RegisterWithForm = ({ onBack }: { onBack?: () => void }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const route = useRouter();

  const getValidationErrors = (data: typeof formData) => {
    const errs: string[] = [];
    if (!data.name.trim()) errs.push('Name is required');
    if (!validateEmail(data.email)) errs.push('Please enter a valid email address');
    if (!validatePassword(data.password))
      errs.push('Password must have 8+ characters, uppercase, lowercase, and a special character.');
    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = getValidationErrors(formData);
    setErrors(validationErrors);
    if (validationErrors.length === 0) registerMutation.mutate(formData);
  };

  const registerMutation = useMutation({
    mutationFn: RegisterUser,
    onSuccess: () => {
      toast.success('Account created successfully');
      route.push('/login');
    },
    onError: err => {
      setFormData({ name: '', email: '', password: '' });
      toast.error(err.message);
    },
  });

  const nameError = errors.includes('Name is required');
  const emailError = errors.some(e => e.toLowerCase().includes('email'));
  const passwordError = errors.some(e => e.toLowerCase().includes('password'));

  return (
    <div className='flex w-full flex-col'>
      <div className='mb-8'>
        <button
          type='button'
          onClick={onBack}
          className='mb-6 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#9a8878] transition-colors hover:text-[#1a1714]'
        >
          ← Back
        </button>
        <div className='mb-2 flex items-center gap-2.5'>
          <span className='h-px w-5 bg-[#b8620a]/60' />
          <span className='font-mono text-[10px] uppercase tracking-[0.22em] text-[#b8620a]'>
            Create account
          </span>
        </div>
        <h2 className='font-syne text-[1.75rem] font-extrabold leading-tight tracking-[-0.03em] text-[#1a1714]'>
          Your details.
        </h2>
      </div>

      <form className='space-y-3' onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Full name'
          value={formData.name}
          onChange={handleChange}
          className={`w-full rounded-lg border px-4 py-3 text-[14px] text-[#1a1714] placeholder-[#c8b9a8] outline-none transition-all ${
            nameError
              ? 'border-red-400 bg-red-50 focus:ring-2 focus:ring-red-200'
              : 'border-[#ddd6cc] bg-white focus:border-[#b8620a] focus:ring-2 focus:ring-[#b8620a]/10'
          }`}
          required
        />
        <input
          type='email'
          name='email'
          placeholder='Email address'
          value={formData.email}
          onChange={handleChange}
          className={`w-full rounded-lg border px-4 py-3 text-[14px] text-[#1a1714] placeholder-[#c8b9a8] outline-none transition-all ${
            emailError
              ? 'border-red-400 bg-red-50 focus:ring-2 focus:ring-red-200'
              : 'border-[#ddd6cc] bg-white focus:border-[#b8620a] focus:ring-2 focus:ring-[#b8620a]/10'
          }`}
          required
        />

        <div>
          <div className='relative'>
            <input
              type={showPassword ? 'text' : 'password'}
              name='password'
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
              className={`w-full rounded-lg border px-4 py-3 pr-16 text-[14px] text-[#1a1714] placeholder-[#c8b9a8] outline-none transition-all ${
                passwordError
                  ? 'border-red-400 bg-red-50 focus:ring-2 focus:ring-red-200'
                  : 'border-[#ddd6cc] bg-white focus:border-[#b8620a] focus:ring-2 focus:ring-[#b8620a]/10'
              }`}
              required
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
            />
            <button
              type='button'
              className='absolute top-1/2 right-0 -translate-y-1/2 flex h-[44px] w-[52px] items-center justify-center font-mono text-[11px] uppercase tracking-[0.12em] text-[#b0a394] transition-colors hover:text-[#1a1714]'
              onClick={() => setShowPassword(v => !v)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          {/* Inline password strength — shows when user has started typing */}
          {formData.password.length > 0 && (
            <div className='mt-2.5'>
              {/* Strength bar */}
              <div className='flex gap-1'>
                {passwordChecks.map((req, idx) => (
                  <div
                    key={idx}
                    className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                      req.test(formData.password) ? 'bg-[#b8620a]' : 'bg-[#e4dfd6]'
                    }`}
                  />
                ))}
              </div>
              {/* Inline check list */}
              <div className='mt-2 flex flex-wrap gap-x-4 gap-y-1'>
                {passwordChecks.map((req, idx) => {
                  const passing = req.test(formData.password);
                  return (
                    <span key={idx} className={`flex items-center gap-1 font-mono text-[10px] transition-colors ${passing ? 'text-[#b8620a]' : 'text-[#c8b9a8]'}`}>
                      <span>{passing ? '✓' : '○'}</span>
                      {req.label}
                    </span>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Error messages */}
        {errors.length > 0 && (
          <div className='rounded-lg border border-red-200 bg-red-50 px-4 py-3'>
            <ul className='space-y-1'>
              {errors.map((err, idx) => (
                <li key={idx} className='text-[12px] text-red-600'>
                  {err}
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          type='submit'
          disabled={registerMutation.isPending}
          className={`mt-1 w-full rounded-lg bg-[#1a1714] px-4 py-3.5 text-[13px] font-semibold text-[#f7f5f1] transition-colors hover:bg-[#2e2a25] active:scale-[0.99] ${
            registerMutation.isPending ? 'cursor-not-allowed opacity-60' : ''
          }`}
        >
          {registerMutation.isPending ? (
            <div className='flex justify-center'>
              <HashLoader color='#f7f5f1' size={18} />
            </div>
          ) : (
            'Create account'
          )}
        </button>
      </form>

      <p className='mt-5 text-[12px] leading-relaxed text-[#b0a394]'>
        By signing up, you agree to our{' '}
        <a
          href='/terms-conditions'
          className='text-[#7a6f65] underline underline-offset-2 transition-colors hover:text-[#1a1714]'
        >
          Terms
        </a>{' '}
        &amp;{' '}
        <a
          href='/privacy-policy'
          className='text-[#7a6f65] underline underline-offset-2 transition-colors hover:text-[#1a1714]'
        >
          Privacy Policy
        </a>
        .
      </p>

      <p className='mt-3 text-[13px] text-[#9a8878]'>
        Already have an account?{' '}
        <Link
          href='/login'
          className='font-medium text-[#1a1714] underline underline-offset-2 transition-colors hover:text-[#b8620a]'
        >
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default RegisterWithForm;
