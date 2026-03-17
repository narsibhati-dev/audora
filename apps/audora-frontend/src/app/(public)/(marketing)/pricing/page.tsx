import React from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import getPageMetadata from '@/lib/seo/getPageMetadata';
import siteMetadata from '@/lib/seo/siteMetadata';
import { PRICING_PLANS, type PricingPlan } from '@/data/marketing/pricing';

export const metadata = getPageMetadata({
  title: 'Audora Pricing',
  description:
    'Audora pricing: Free 2-hour recording, Pro $10 for 20 hours with high-quality audio and video. Custom plans available.',
});

function PricingCard({ plan }: { plan: PricingPlan }) {
  const ctaHref =
    plan.id === 'custom' ? `mailto:${siteMetadata.email}` : plan.ctaHref;
  const isMailto = plan.id === 'custom';

  const ctaClassName = `mt-6 inline-flex justify-center rounded-lg px-6 py-3 font-semibold transition ${
    plan.highlight
      ? 'bg-primary-500 text-white hover:bg-primary-600'
      : 'bg-zinc-700 text-white hover:bg-zinc-600'
  }`;

  return (
    <div
      className={`flex flex-col rounded-2xl border p-6 ${
        plan.highlight
          ? 'border-primary-500 shadow-primary-500/10 bg-zinc-900 shadow-lg'
          : 'border-zinc-700/80 bg-zinc-900'
      }`}
    >
      {plan.badge && (
        <span
          className={`mb-3 inline-flex w-fit rounded-lg px-2.5 py-0.5 text-xs font-semibold ${
            plan.highlight
              ? 'bg-primary-500 text-white'
              : 'bg-zinc-700 text-zinc-200'
          }`}
        >
          {plan.badge}
        </span>
      )}
      <h3 className='text-xl font-bold text-white'>{plan.name}</h3>
      <div className='mt-2 flex items-baseline gap-1'>
        {plan.price !== null ? (
          <>
            <span className='text-3xl font-bold text-white'>${plan.price}</span>
            <span className='text-zinc-400'>/{plan.period}</span>
          </>
        ) : (
          <span className='text-3xl font-bold text-white'>Custom</span>
        )}
      </div>
      <p className='mt-1 text-sm text-zinc-400'>
        {plan.recordingHours === 'Custom'
          ? 'Custom hours'
          : `${plan.recordingHours} hr/month recording`}
      </p>
      <ul className='mt-6 flex-1 space-y-3'>
        {plan.features.map(feature => (
          <li
            key={feature}
            className='flex items-start gap-2 text-sm text-zinc-300'
          >
            <Check className='text-primary-500 mt-0.5 h-5 w-5 shrink-0' />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      {isMailto ? (
        <a href={ctaHref} className={ctaClassName}>
          {plan.ctaLabel}
        </a>
      ) : (
        <Link href={ctaHref} className={ctaClassName}>
          {plan.ctaLabel}
        </Link>
      )}
    </div>
  );
}

const PricingPage = () => {
  return (
    <main className='bg-black px-4 py-12 md:py-16'>
      <div className='mx-auto grid max-w-6xl gap-8 md:grid-cols-3'>
        {PRICING_PLANS.map(plan => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
    </main>
  );
};

export default PricingPage;
