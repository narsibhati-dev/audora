import React from 'react';

const DotLoader = () => {
  return (
    <div className='flex items-center gap-1.5'>
      {[0, 0.18, 0.36].map((delay, i) => (
        <div
          key={i}
          className='h-[5px] w-[5px] animate-bounce rounded-full bg-[#b8620a]'
          style={{ animationDelay: `${delay}s`, opacity: 0.5 + i * 0.2 }}
        />
      ))}
    </div>
  );
};

export default DotLoader;
