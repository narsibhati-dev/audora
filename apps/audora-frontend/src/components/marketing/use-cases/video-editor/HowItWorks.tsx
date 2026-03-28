import React from 'react';
import { Upload, Edit, Wand2, Share2 } from 'lucide-react';

interface StepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  isLast: boolean;
}

const Step = ({ number, icon, title, description, isLast }: StepProps) => (
  <div className='relative flex items-start gap-6'>
    {/* Vertical connector */}
    {!isLast && (
      <div className='absolute top-12 left-5 h-full w-px bg-[#ddd6cc]' />
    )}

    {/* Step icon circle */}
    <div className='relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e4dfd6] bg-white text-[#b8620a] shadow-sm'>
      {icon}
    </div>

    <div className='pb-10'>
      <div className='mb-2 flex items-center gap-2'>
        <span className='font-mono text-[10px] uppercase tracking-[0.18em] text-[#b0a394]'>
          Step {number}
        </span>
        <span className='h-px w-6 bg-[#ddd6cc]' />
      </div>
      <h3 className='font-syne mb-1.5 text-[17px] font-bold text-[#1a1714]'>{title}</h3>
      <p className='text-[14px] leading-relaxed text-[#7a6f65]'>{description}</p>
    </div>
  </div>
);

const HowItWorksVideoEditor = () => {
  const steps = [
    {
      icon: <Upload className='h-4 w-4' />,
      title: 'Import Your Media',
      description: 'Upload video files, images, and audio tracks. We support all major formats up to 4K resolution.',
    },
    {
      icon: <Edit className='h-4 w-4' />,
      title: 'Edit on the Timeline',
      description: 'Trim, cut, and arrange clips with precision using our multi-track timeline interface.',
    },
    {
      icon: <Wand2 className='h-4 w-4' />,
      title: 'Enhance & Polish',
      description: 'Apply effects, color grading, transitions, and audio mixing to perfect your video.',
    },
    {
      icon: <Share2 className='h-4 w-4' />,
      title: 'Export & Share',
      description: 'Export your finished video in your preferred format and share it directly to your audience.',
    },
  ];

  return (
    <section className='bg-[#f0ece5] py-24'>
      <div className='mx-auto max-w-10xl px-8 sm:px-12 lg:px-16 xl:px-24'>

        <div className='mb-14'>
          <div className='mb-5 flex items-center gap-2.5'>
            <span className='h-px w-6 bg-[#b8620a]/60' />
            <span className='font-mono text-[11px] uppercase tracking-[0.24em] text-[#b8620a]'>
              How it works
            </span>
          </div>
          <h2 className='font-syne text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-[#1a1714]'>
            Edit like a pro
            <br />
            from day one.
          </h2>
        </div>

        <div className='max-w-xl'>
          {steps.map((step, i) => (
            <Step
              key={i}
              number={i + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
              isLast={i === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksVideoEditor;
