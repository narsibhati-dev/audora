import React from 'react';

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: string;
}

interface FeatureGridProps {
  title: string;
  features: Feature[];
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ title, features }) => {
  return (
    <section className='bg-[#f0ece5] py-24' id='features'>
      <div className='mx-auto max-w-10xl px-8 sm:px-12 lg:px-16 xl:px-24'>

        {/* Section header */}
        <div className='mb-14'>
          <div className='mb-5 flex items-center gap-2.5'>
            <span className='h-px w-6 bg-[#b8620a]/60' />
            <span className='font-mono text-[11px] uppercase tracking-[0.24em] text-[#b8620a]'>
              Features
            </span>
          </div>
          <h2 className='font-syne text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-[#1a1714]'>
            {title}
          </h2>
        </div>

        {/* Feature cards */}
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='flex flex-col gap-4 rounded-2xl border border-[#e4dfd6] bg-white p-6 transition-shadow duration-200 hover:shadow-[0_4px_24px_rgba(0,0,0,0.07)]'
            >
              <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8e2d8] text-[#b8620a]'>
                {feature.icon}
              </div>
              <div>
                <h3 className='font-syne mb-2 text-[15px] font-bold text-[#1a1714]'>
                  {feature.title}
                </h3>
                <p className='text-[14px] leading-relaxed text-[#7a6f65]'>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
