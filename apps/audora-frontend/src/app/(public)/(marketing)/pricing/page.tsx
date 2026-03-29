import React from 'react';
import Link from 'next/link';
import getPageMetadata from '@/lib/seo/getPageMetadata';
import siteMetadata from '@/lib/seo/siteMetadata';
import { PRICING_PLANS, type PricingPlan } from '@/data/marketing/pricing';

export const metadata = getPageMetadata({
  title: 'Audora Pricing',
  description:
    'Audora pricing: Free 2-hour recording, Pro $10 for 20 hours with high-quality audio and video. Custom plans available.',
});

const TRUST_ITEMS = [
  { label: 'No credit card required', note: 'for Free plan' },
  { label: 'Cancel anytime', note: 'no lock-in' },
  { label: 'SOC 2 compliant', note: 'enterprise security' },
  { label: '99.9% uptime SLA', note: 'Pro & Custom' },
];

const FAQS = [
  {
    q: 'Can I upgrade or downgrade my plan?',
    a: 'Yes, you can switch between plans at any time. Changes take effect immediately and billing is prorated.',
  },
  {
    q: 'What happens when I hit my recording limit?',
    a: 'You\'ll be notified as you approach the limit. You can upgrade at any time or wait until your next billing cycle.',
  },
  {
    q: 'Do unused recording hours roll over?',
    a: 'Recording hours reset each billing cycle and do not roll over.',
  },
  {
    q: 'Is there a long-term contract for Custom plans?',
    a: 'No. Custom plans are negotiated month-to-month or annually, whatever works best for your team.',
  },
];

function PricingCard({ plan }: { plan: PricingPlan }) {
  const isHighlight = plan.highlight;
  const isCustom = plan.id === 'custom';
  const ctaHref = isCustom ? `mailto:${siteMetadata.email}` : plan.ctaHref;

  if (isHighlight) {
    // Dark card — Pro
    return (
      <div className='relative flex flex-col rounded-2xl bg-[#1a1714] p-8 shadow-[0_8px_48px_rgba(0,0,0,0.18)]'>
        {/* Top rule accent */}
        <div className='absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#b8620a]/60 to-transparent' />

        {plan.badge && (
          <div className='mb-6 flex items-center gap-2.5'>
            <span className='h-px w-4 bg-[#b8620a]/60' />
            <span className='font-mono text-[10px] uppercase tracking-[0.22em] text-[#b8620a]'>
              {plan.badge}
            </span>
          </div>
        )}

        <h3 className='font-syne mb-1 text-[22px] font-extrabold tracking-[-0.02em] text-white'>
          {plan.name}
        </h3>

        <div className='mt-3 flex items-baseline gap-1.5'>
          {plan.price !== null ? (
            <>
              <span className='font-syne text-[3.5rem] font-extrabold leading-none tracking-[-0.04em] text-white'>
                ${plan.price}
              </span>
              <span className='mb-1 font-mono text-[12px] text-[#5a4e44]'>
                / {plan.period}
              </span>
            </>
          ) : (
            <span className='font-syne text-[3rem] font-extrabold leading-none tracking-[-0.04em] text-white'>
              Custom
            </span>
          )}
        </div>

        <p className='mt-2 mb-8 font-mono text-[11px] text-[#5a4e44]'>
          {plan.recordingHours === 'Custom'
            ? 'Custom hours'
            : `${plan.recordingHours} hr / month recording`}
        </p>

        <ul className='flex-1 space-y-3.5 border-t border-[#2e2a25] pt-7'>
          {plan.features.map(feat => (
            <li key={feat} className='flex items-start gap-3'>
              <span className='mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b8620a]' />
              <span className='text-[13px] leading-relaxed text-[#9a8878]'>{feat}</span>
            </li>
          ))}
        </ul>

        <Link
          href={ctaHref}
          className='group mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-[13px] font-semibold text-[#1a1714] transition-all duration-200 hover:bg-[#f7f5f1] active:scale-[0.98]'
        >
          {plan.ctaLabel}
          <span className='transition-transform duration-200 group-hover:translate-x-0.5'>→</span>
        </Link>
      </div>
    );
  }

  // Light card — Free & Custom
  return (
    <div className='flex flex-col rounded-2xl border border-[#e4dfd6] bg-white p-8 shadow-[0_2px_16px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0_6px_32px_rgba(0,0,0,0.09)]'>

      {plan.badge && (
        <div className='mb-6 flex items-center gap-2.5'>
          <span className='h-px w-4 bg-[#b8620a]/40' />
          <span className='font-mono text-[10px] uppercase tracking-[0.22em] text-[#b8620a]'>
            {plan.badge}
          </span>
        </div>
      )}

      {!plan.badge && <div className='mb-6 h-4' />}

      <h3 className='font-syne mb-1 text-[22px] font-extrabold tracking-[-0.02em] text-[#1a1714]'>
        {plan.name}
      </h3>

      <div className='mt-3 flex items-baseline gap-1.5'>
        {plan.price !== null ? (
          <>
            <span className='font-syne text-[3.5rem] font-extrabold leading-none tracking-[-0.04em] text-[#1a1714]'>
              ${plan.price}
            </span>
            <span className='mb-1 font-mono text-[12px] text-[#b0a394]'>
              / {plan.period}
            </span>
          </>
        ) : (
          <span className='font-syne text-[3rem] font-extrabold leading-none tracking-[-0.04em] text-[#1a1714]'>
            Custom
          </span>
        )}
      </div>

      <p className='mt-2 mb-8 font-mono text-[11px] text-[#b0a394]'>
        {plan.recordingHours === 'Custom'
          ? 'Custom hours'
          : `${plan.recordingHours} hr / month recording`}
      </p>

      <ul className='flex-1 space-y-3.5 border-t border-[#f0ece5] pt-7'>
        {plan.features.map(feat => (
          <li key={feat} className='flex items-start gap-3'>
            <span className='mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b8620a]' />
            <span className='text-[13px] leading-relaxed text-[#7a6f65]'>{feat}</span>
          </li>
        ))}
      </ul>

      {isCustom ? (
        <a
          href={ctaHref}
          className='group mt-8 inline-flex items-center justify-center gap-2 rounded-lg border border-[#ddd6cc] bg-transparent px-6 py-3.5 text-[13px] font-semibold text-[#1a1714] transition-all duration-200 hover:border-[#b0a394] hover:bg-[#f7f5f1] active:scale-[0.98]'
        >
          {plan.ctaLabel}
          <span className='transition-transform duration-200 group-hover:translate-x-0.5'>→</span>
        </a>
      ) : (
        <Link
          href={ctaHref}
          className='group mt-8 inline-flex items-center justify-center gap-2 rounded-lg border border-[#ddd6cc] bg-transparent px-6 py-3.5 text-[13px] font-semibold text-[#1a1714] transition-all duration-200 hover:border-[#b0a394] hover:bg-[#f7f5f1] active:scale-[0.98]'
        >
          {plan.ctaLabel}
          <span className='transition-transform duration-200 group-hover:translate-x-0.5'>→</span>
        </Link>
      )}
    </div>
  );
}

const PricingPage = () => {
  return (
    <div className='min-h-screen bg-[#f7f5f1]'>

      {/* ── HEADER ──────────────────────────────────────────────── */}
      <section className='relative border-b border-[#e4dfd6] bg-[#f7f5f1] pt-32 pb-20'>

        {/* Faint warm bloom */}
        <div
          aria-hidden
          className='pointer-events-none absolute top-0 left-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[#b8620a]/[0.05] blur-[180px]'
        />

        <div className='relative mx-auto max-w-10xl px-8 sm:px-12 lg:px-16 xl:px-24'>

          <div className='mb-7 flex items-center gap-2.5'>
            <span className='h-px w-6 bg-[#b8620a]/60' />
            <span className='font-mono text-[11px] uppercase tracking-[0.24em] text-[#b8620a]'>
              Pricing
            </span>
          </div>

          <div className='flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between'>
            <h1 className='font-syne text-[clamp(3rem,7vw,6rem)] font-extrabold leading-none tracking-[-0.045em] text-[#1a1714]'>
              Simple,
              <br />
              <span className='text-[#9a8878]'>honest pricing.</span>
            </h1>

            <p className='max-w-sm text-[15px] leading-relaxed text-[#7a6f65] lg:text-right'>
              Start free, upgrade when you need it.
              <br />
              No hidden fees. No annual lock-in.
            </p>
          </div>
        </div>
      </section>

      {/* ── CARDS ───────────────────────────────────────────────── */}
      <section className='bg-[#f0ece5] py-20'>
        <div className='mx-auto max-w-10xl px-8 sm:px-12 lg:px-16 xl:px-24'>
          <div className='grid grid-cols-1 gap-5 lg:grid-cols-3 lg:items-start'>
            {PRICING_PLANS.map(plan => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ───────────────────────────────────────────── */}
      <section className='border-y border-[#e4dfd6] bg-[#f7f5f1]'>
        <div className='mx-auto max-w-10xl px-8 sm:px-12 lg:px-16 xl:px-24'>
          <div className='grid grid-cols-2 divide-x divide-[#e4dfd6] lg:grid-cols-4'>
            {TRUST_ITEMS.map(({ label, note }) => (
              <div key={label} className='px-8 py-7 first:pl-0 last:pr-0'>
                <p className='font-syne text-[14px] font-bold text-[#1a1714]'>
                  {label}
                </p>
                <p className='mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#b0a394]'>
                  {note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section className='bg-[#f7f5f1] py-24'>
        <div className='mx-auto max-w-10xl px-8 sm:px-12 lg:px-16 xl:px-24'>

          <div className='mb-14'>
            <div className='mb-5 flex items-center gap-2.5'>
              <span className='h-px w-6 bg-[#b8620a]/60' />
              <span className='font-mono text-[11px] uppercase tracking-[0.24em] text-[#b8620a]'>
                Questions
              </span>
            </div>
            <h2 className='font-syne text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-[#1a1714]'>
              Everything you
              <br />
              need to know.
            </h2>
          </div>

          <div className='grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-2'>
            {FAQS.map(({ q, a }) => (
              <div key={q} className='border-t border-[#e4dfd6] pt-7'>
                <h3 className='font-syne mb-3 text-[15px] font-bold text-[#1a1714]'>
                  {q}
                </h3>
                <p className='text-[14px] leading-relaxed text-[#7a6f65]'>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────────────────────────── */}
      <section className='bg-[#1a1714] py-20'>
        <div className='mx-auto max-w-10xl px-8 sm:px-12 lg:px-16 xl:px-24'>

          {/* Top rule accent */}
          <div className='mb-14 h-px bg-gradient-to-r from-transparent via-[#b8620a]/40 to-transparent' />

          <div className='flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between'>
            <div>
              <p className='mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[#b8620a]'>
                ✦ Start today - free
              </p>
              <h2 className='font-syne text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-white'>
                Ready to create your
                <br />
                <span className='text-[#5a4e44]'>best content?</span>
              </h2>
            </div>
            <div className='flex flex-col items-start gap-3 sm:items-end'>
              <Link
                href={siteMetadata.dashboard}
                className='group inline-flex items-center gap-2.5 rounded-lg bg-white px-8 py-4 text-sm font-semibold text-[#1a1714] transition-all duration-200 hover:bg-[#f7f5f1] active:scale-[0.98]'
              >
                Get started free
                <span className='transition-transform duration-200 group-hover:translate-x-0.5'>→</span>
              </Link>
              <span className='font-mono text-[11px] text-[#3a3330]'>
                No credit card required
              </span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PricingPage;
