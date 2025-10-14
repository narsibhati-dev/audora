interface WorkInProgressProps {
  title: string;
}

export default function WorkInProgress({ title }: WorkInProgressProps) {
  return (
    <div className='fixed top-0 z-[60] w-full border-b border-zinc-800 bg-black/90 backdrop-blur supports-[backdrop-filter]:bg-black/80'>
      <div className='mx-auto max-w-7xl px-4 py-2 text-center'>
        <p className='text-xs text-zinc-200 sm:text-sm'>{title}</p>
      </div>
    </div>
  );
}
