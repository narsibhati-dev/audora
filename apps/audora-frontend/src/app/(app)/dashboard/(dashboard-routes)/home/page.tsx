import getPageMetadata from '@/lib/seo/getPageMetadata';
import authOptions from '@/lib/auth/auth-options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { getStudio } from '@/actions/studio';
import Image from 'next/image';
import { FiVideo, FiSettings, FiFolder, FiPlay, FiChevronRight, FiRadio } from 'react-icons/fi';
import Link from 'next/link';
import { Suspense } from 'react';
import DashboardSkeleton from '@/components/loaders/dashboard-skeleton';

export const metadata = getPageMetadata({ title: 'Dashboard' });

const WAVE_BARS = [22, 48, 72, 96, 60, 88, 40, 64, 30, 76, 44, 82, 36, 56, 24, 68, 92, 50, 28, 62, 46, 84, 38, 70, 18];

const HomePageContent = async () => {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/login');

  const studio = await getStudio(session?.user?.accessToken as string);
  if (!studio) redirect('/dashboard/studios/create');

  const studioUrl   = `/studio/${studio.studioSlug}`;
  const projectsUrl = `${studioUrl}/projects`;
  const settingsUrl = '/dashboard/account/studio-settings';

  return (
    <div className='mx-auto max-w-4xl'>
      <div className='flex flex-col gap-4 pb-8'>

        {/* ── HERO IDENTITY BLOCK ─────────────────────────── */}
        <div className='overflow-hidden rounded-2xl border border-[#e4dfd6] bg-white shadow-sm shadow-[#c8a882]/10'>

          {/* Top meta strip */}
          <div className='flex items-center justify-between border-b border-[#ede8e0] bg-[#faf8f5] px-5 py-2.5'>
            <div className='flex items-center gap-2'>
              <FiRadio className='h-3 w-3 text-[#b8620a]' />
              <span className='font-mono text-[9px] uppercase tracking-[0.28em] text-[#b4a89e]'>
                Studio Dashboard
              </span>
            </div>
            <div className='flex items-center gap-1.5'>
              <span className='relative flex h-1.5 w-1.5 shrink-0'>
                <span className='absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-50' />
                <span className='relative h-1.5 w-1.5 rounded-full bg-emerald-500' />
              </span>
              <span className='font-mono text-[9px] uppercase tracking-[0.18em] text-[#c4bbb4]'>
                Online
              </span>
            </div>
          </div>

          <div className='p-6 lg:p-8'>
            <div className='flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-10'>

              {/* Left: studio name + controls */}
              <div className='flex flex-1 flex-col gap-5'>

                {/* Studio name */}
                <div>
                  <p className='mb-1 font-mono text-[9px] uppercase tracking-[0.28em] text-[#c4b9b0]'>
                    Active studio
                  </p>
                  <h1
                    className='font-syne font-extrabold leading-[0.88] tracking-[-0.05em] text-[#1c1410]'
                    style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
                  >
                    {studio.studioName}
                  </h1>
                </div>

                {/* Waveform visualizer */}
                <div className='flex h-7 items-end gap-[2px]' aria-hidden>
                  {WAVE_BARS.map((h, i) => (
                    <div
                      key={i}
                      className='w-[3px] origin-bottom animate-waveBar rounded-full bg-[#b8620a]'
                      style={{
                        height: `${h}%`,
                        opacity: 0.15 + (h / 100) * 0.5,
                        animationDelay: `${i * 0.07}s`,
                      }}
                    />
                  ))}
                </div>

                {/* CTA row */}
                <div className='flex flex-wrap items-center gap-3'>
                  <a
                    href={studioUrl}
                    className='inline-flex items-center gap-2.5 rounded-xl bg-[#b8620a] px-5 py-2.5 transition-all duration-200 hover:bg-[#9a5008] active:scale-[0.98]'
                  >
                    <FiPlay className='h-3.5 w-3.5 text-white' />
                    <span className='font-syne text-[12px] font-bold tracking-[-0.01em] text-white'>
                      Start Meeting
                    </span>
                  </a>
                  <Link
                    href={projectsUrl}
                    className='group inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#a89a90] transition-colors hover:text-[#6b5240]'
                  >
                    View Projects
                    <FiChevronRight className='h-3 w-3 transition-transform group-hover:translate-x-0.5' />
                  </Link>
                </div>
              </div>

              {/* Right: studio image */}
              <div className='shrink-0 self-end'>
                <div className='relative'>
                  {/* Corner crosshairs */}
                  <span className='absolute -left-1.5 -top-1.5 h-3 w-3 border-l border-t border-[#d4cec8]' aria-hidden />
                  <span className='absolute -right-1.5 -top-1.5 h-3 w-3 border-r border-t border-[#d4cec8]' aria-hidden />
                  <span className='absolute -bottom-1.5 -left-1.5 h-3 w-3 border-b border-l border-[#d4cec8]' aria-hidden />
                  <span className='absolute -bottom-1.5 -right-1.5 h-3 w-3 border-b border-r border-[#d4cec8]' aria-hidden />

                  <Image
                    src='/images/studio/create-studio.png'
                    alt={studio.studioName}
                    width={180}
                    height={180}
                    className='h-36 w-36 rounded-xl object-cover sm:h-44 sm:w-44'
                    style={{ objectFit: 'cover' }}
                    priority
                  />

                  {/* Live badge */}
                  <div className='absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-[#e4dfd6] bg-white px-2.5 py-[3px] shadow-sm'>
                    <span className='font-mono text-[9px] uppercase tracking-[0.16em] text-[#a89a90]'>
                      Live ready
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── ACTION GRID ────────────────────────────────── */}
        <div className='grid grid-cols-1 gap-3 sm:grid-cols-3'>

          <a
            href={studioUrl}
            className='group relative flex flex-col justify-between gap-8 overflow-hidden rounded-xl border border-[#e4dfd6] bg-white p-5 shadow-sm transition-all duration-200 hover:border-[#c8a882] hover:shadow-md hover:shadow-[#c8a882]/10'
          >
            <div className='flex items-center justify-between'>
              <span className='font-mono text-[10px] text-[#d4cbc4]'>01</span>
              <div className='flex h-7 w-7 items-center justify-center rounded-lg border border-[#ede8e0] bg-[#faf8f5]'>
                <FiVideo className='h-3.5 w-3.5 text-[#b8620a]' />
              </div>
            </div>
            <div>
              <p className='font-syne text-[13px] font-bold tracking-[-0.02em] text-[#1c1410]'>
                Open Studio
              </p>
              <p className='mt-0.5 text-[11px] text-[#a89a90]'>Launch recording</p>
            </div>
            <FiChevronRight className='absolute bottom-5 right-5 h-3.5 w-3.5 text-[#d4cbc4] transition-all group-hover:translate-x-0.5 group-hover:text-[#b8620a]' />
          </a>

          <Link
            href={projectsUrl}
            className='group relative flex flex-col justify-between gap-8 overflow-hidden rounded-xl border border-[#e4dfd6] bg-white p-5 shadow-sm transition-all duration-200 hover:border-[#c8a882] hover:shadow-md hover:shadow-[#c8a882]/10'
          >
            <div className='flex items-center justify-between'>
              <span className='font-mono text-[10px] text-[#d4cbc4]'>02</span>
              <div className='flex h-7 w-7 items-center justify-center rounded-lg border border-[#ede8e0] bg-[#faf8f5]'>
                <FiFolder className='h-3.5 w-3.5 text-[#b8620a]' />
              </div>
            </div>
            <div>
              <p className='font-syne text-[13px] font-bold tracking-[-0.02em] text-[#1c1410]'>
                Recordings
              </p>
              <p className='mt-0.5 text-[11px] text-[#a89a90]'>Browse projects</p>
            </div>
            <FiChevronRight className='absolute bottom-5 right-5 h-3.5 w-3.5 text-[#d4cbc4] transition-all group-hover:translate-x-0.5 group-hover:text-[#b8620a]' />
          </Link>

          <Link
            href={settingsUrl}
            className='group relative flex flex-col justify-between gap-8 overflow-hidden rounded-xl border border-[#e4dfd6] bg-white p-5 shadow-sm transition-all duration-200 hover:border-[#c8a882] hover:shadow-md hover:shadow-[#c8a882]/10'
          >
            <div className='flex items-center justify-between'>
              <span className='font-mono text-[10px] text-[#d4cbc4]'>03</span>
              <div className='flex h-7 w-7 items-center justify-center rounded-lg border border-[#ede8e0] bg-[#faf8f5]'>
                <FiSettings className='h-3.5 w-3.5 text-[#b8620a]' />
              </div>
            </div>
            <div>
              <p className='font-syne text-[13px] font-bold tracking-[-0.02em] text-[#1c1410]'>
                Settings
              </p>
              <p className='mt-0.5 text-[11px] text-[#a89a90]'>Customize studio</p>
            </div>
            <FiChevronRight className='absolute bottom-5 right-5 h-3.5 w-3.5 text-[#d4cbc4] transition-all group-hover:translate-x-0.5 group-hover:text-[#b8620a]' />
          </Link>

        </div>

        {/* ── STATUS BAR ─────────────────────────────────── */}
        <div className='flex flex-wrap items-center gap-x-5 gap-y-2 rounded-xl border border-[#e4dfd6] bg-white/60 px-5 py-3'>
          <div className='flex items-center gap-2'>
            <span className='h-px w-4 bg-[#e0d8d0]' aria-hidden />
            <span className='font-mono text-[9px] uppercase tracking-[0.26em] text-[#c4b9b0]'>
              Studio Features
            </span>
          </div>
          {['HD Recording', 'Real-time', 'Collaboration'].map((f, i) => (
            <span key={f} className='flex items-center gap-2'>
              {i > 0 && <span className='h-1 w-1 rounded-full bg-[#e0d8d0]' aria-hidden />}
              <span className='font-mono text-[10px] text-[#a89a90]'>{f}</span>
            </span>
          ))}
        </div>

      </div>
    </div>
  );
};

const HomePage = () => (
  <Suspense fallback={<DashboardSkeleton />}>
    <HomePageContent />
  </Suspense>
);

export default HomePage;
