import React from 'react';

// Heights as % of container — center bar tallest, outer bars shorter
const BAR_SCALES = [0.3, 0.55, 0.8, 1, 0.8, 0.55, 0.3];

const Spinner = () => {
  return (
    <div className='flex h-12 items-end gap-[3.5px]'>
      {BAR_SCALES.map((scale, i) => (
        <div
          key={i}
          className='w-[3px] origin-bottom animate-waveBar rounded-full bg-[#b8620a]'
          style={{
            height: `${scale * 100}%`,
            animationDelay: `${i * 0.09}s`,
            opacity: 0.5 + scale * 0.5,
          }}
        />
      ))}
    </div>
  );
};

export default Spinner;
