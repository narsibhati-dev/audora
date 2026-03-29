import getPageMetadata from '@/lib/seo/getPageMetadata';
import authOptions from '@/lib/auth/auth-options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { getStudio } from '@/actions/studio';
import Image from 'next/image';
import { FiVideo, FiSettings, FiFolder, FiPlay } from 'react-icons/fi';
import Link from 'next/link';
import { Suspense } from 'react';
import DashboardSkeleton from '@/components/loaders/dashboard-skeleton';

export const metadata = getPageMetadata({
  title: 'Dashboard',
});

const HomePageContent = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }

  const studio = await getStudio(session?.user?.accessToken as string);

  if (!studio) {
    redirect('/dashboard/studios/create');
  }

  const studioUrl = `/studio/${studio.studioSlug}`;
  const projectsUrl = `${studioUrl}/projects`;
  const settingsUrl = '/dashboard/account/studio-settings';

  return (
    <div className='h-full overflow-hidden'>
      <div
        className='mx-auto h-full max-w-5xl overflow-y-auto'
        style={{ scrollbarWidth: 'none' }}
      >
        <div className='space-y-8 p-4 lg:space-y-10'>

          {/* ── Hero ─────────────────────────────────────────────── */}
          <div className='flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10'>
            {/* Studio image */}
            <div className='mx-auto flex-shrink-0 lg:mx-0'>
              <div className='relative h-40 w-40 sm:h-48 sm:w-48 lg:h-56 lg:w-56 xl:h-64 xl:w-64'>
                {/* Amber glow ring */}
                <div className='absolute inset-0 rounded-2xl bg-[#b8620a]/10 blur-xl' aria-hidden />
                <Image
                  src='/images/studio/create-studio.png'
                  alt={`${studio.studioName} Studio`}
                  width={256}
                  height={256}
                  className='relative rounded-2xl object-cover shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>

            {/* Hero text + CTAs */}
            <div className='flex flex-1 flex-col items-center gap-5 text-center lg:items-start lg:text-left'>
              <div>
                <p className='mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#b8620a]'>
                  ✦ Your studio is ready
                </p>
                <h1 className='font-syne text-2xl font-extrabold leading-tight tracking-[-0.03em] text-white sm:text-3xl lg:text-4xl'>
                  Welcome to your studio
                </h1>
                <p className='mt-2 text-[13px] leading-[1.7] text-[#5a4e44] sm:text-sm'>
                  Your professional recording studio is ready. Start creating
                  amazing content today.
                </p>
              </div>

              {/* Quick action buttons */}
              <div className='flex w-full flex-col items-center gap-2.5 lg:flex-row lg:items-center lg:gap-3'>
                <a
                  href={studioUrl}
                  className='group flex items-center justify-center gap-2 rounded-xl bg-[#b8620a] px-5 py-2.5 text-white transition-all duration-200 hover:bg-[#9a5008] active:scale-95 sm:px-6 sm:py-3'
                >
                  <FiPlay className='h-4 w-4 sm:h-[18px] sm:w-[18px]' />
                  <span className='font-syne text-[13px] font-bold tracking-[-0.01em] sm:text-sm'>
                    Start Meeting
                  </span>
                </a>

                <Link
                  href={projectsUrl}
                  className='flex items-center justify-center gap-2 rounded-xl border border-[#2a2520] bg-[#1a1714] px-5 py-2.5 text-[#9a8878] transition-all duration-200 hover:border-[#b8620a]/30 hover:bg-[#221e1a] hover:text-white active:scale-95 sm:px-6 sm:py-3'
                >
                  <FiFolder className='h-4 w-4 sm:h-[18px] sm:w-[18px]' />
                  <span className='font-syne text-[13px] font-bold tracking-[-0.01em] sm:text-sm'>
                    View Projects
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* ── Quick Access ─────────────────────────────────────── */}
          <div className='space-y-5'>
            <div className='flex items-center gap-2.5'>
              <span className='h-px w-4 bg-[#b8620a]/60' />
              <h2 className='font-mono text-[10px] uppercase tracking-[0.22em] text-[#5a4e44]'>
                Quick Access
              </h2>
            </div>

            <div className='grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-2'>

              {/* Open Studio */}
              <a
                href={studioUrl}
                className='group rounded-2xl border border-[#2a2520] bg-[#141210] p-4 shadow-sm transition-all duration-200 hover:border-[#b8620a]/25 hover:bg-[#1a1714] sm:p-5'
              >
                <div className='flex flex-col items-center gap-3 md:flex-row md:gap-4'>
                  <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#b8620a]/20 bg-[#b8620a]/10 transition-colors duration-200 group-hover:border-[#b8620a]/30 group-hover:bg-[#b8620a]/15 sm:h-14 sm:w-14'>
                    <FiVideo className='h-5 w-5 text-[#b8620a] sm:h-6 sm:w-6' />
                  </div>
                  <div className='flex-1 text-center md:text-left'>
                    <h3 className='font-syne text-[15px] font-extrabold tracking-[-0.02em] text-white transition-colors duration-200 group-hover:text-[#c8a070] sm:text-base'>
                      Open Studio
                    </h3>
                    <p className='mt-1 text-[12px] leading-[1.6] text-[#5a4e44] sm:text-[13px]'>
                      Launch your recording studio and start creating content
                      immediately.
                    </p>
                  </div>
                </div>
              </a>

              {/* Your Recordings */}
              <Link
                href={projectsUrl}
                className='group rounded-2xl border border-[#2a2520] bg-[#141210] p-4 shadow-sm transition-all duration-200 hover:border-[#b8620a]/25 hover:bg-[#1a1714] sm:p-5'
              >
                <div className='flex flex-col items-center gap-3 md:flex-row md:gap-4'>
                  <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#b8620a]/20 bg-[#b8620a]/10 transition-colors duration-200 group-hover:border-[#b8620a]/30 group-hover:bg-[#b8620a]/15 sm:h-14 sm:w-14'>
                    <FiFolder className='h-5 w-5 text-[#b8620a] sm:h-6 sm:w-6' />
                  </div>
                  <div className='flex-1 text-center md:text-left'>
                    <h3 className='font-syne text-[15px] font-extrabold tracking-[-0.02em] text-white transition-colors duration-200 group-hover:text-[#c8a070] sm:text-base'>
                      Your Recordings
                    </h3>
                    <p className='mt-1 text-[12px] leading-[1.6] text-[#5a4e44] sm:text-[13px]'>
                      Browse and manage your past recordings and projects.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Studio Settings */}
              <Link
                href={settingsUrl}
                className='group rounded-2xl border border-[#2a2520] bg-[#141210] p-4 shadow-sm transition-all duration-200 hover:border-[#b8620a]/25 hover:bg-[#1a1714] sm:p-5'
              >
                <div className='flex flex-col items-center gap-3 md:flex-row md:gap-4'>
                  <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#b8620a]/20 bg-[#b8620a]/10 transition-colors duration-200 group-hover:border-[#b8620a]/30 group-hover:bg-[#b8620a]/15 sm:h-14 sm:w-14'>
                    <FiSettings className='h-5 w-5 text-[#b8620a] sm:h-6 sm:w-6' />
                  </div>
                  <div className='flex-1 text-center md:text-left'>
                    <h3 className='font-syne text-[15px] font-extrabold tracking-[-0.02em] text-white transition-colors duration-200 group-hover:text-[#c8a070] sm:text-base'>
                      Studio Settings
                    </h3>
                    <p className='mt-1 text-[12px] leading-[1.6] text-[#5a4e44] sm:text-[13px]'>
                      Customize your recording environment and preferences.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Studio Features */}
              <div className='rounded-2xl border border-[#b8620a]/20 bg-[#141210] p-4 shadow-sm sm:p-5'>
                <div className='flex flex-col items-center gap-3 md:flex-row md:gap-4'>
                  <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#b8620a]/20 bg-[#b8620a]/10 sm:h-14 sm:w-14'>
                    <FiVideo className='h-5 w-5 text-[#b8620a] sm:h-6 sm:w-6' />
                  </div>
                  <div className='flex-1 text-center md:text-left'>
                    <h3 className='font-syne text-[15px] font-extrabold tracking-[-0.02em] text-white sm:text-base'>
                      Studio Features
                    </h3>
                    <p className='mt-1 text-[12px] leading-[1.6] text-[#5a4e44] sm:text-[13px]'>
                      High-quality recording, real-time collaboration, and
                      professional tools.
                    </p>
                    <div className='mt-3 flex flex-wrap justify-center gap-1.5 md:justify-start'>
                      <span className='inline-flex items-center rounded-full border border-[#b8620a]/20 bg-[#b8620a]/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-[#b8620a]'>
                        HD Recording
                      </span>
                      <span className='inline-flex items-center rounded-full border border-[#b8620a]/15 bg-[#b8620a]/08 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-[#9a6030]'>
                        Real-time
                      </span>
                      <span className='inline-flex items-center rounded-full border border-[#b8620a]/15 bg-[#b8620a]/08 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-[#9a6030]'>
                        Collaboration
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <HomePageContent />
    </Suspense>
  );
};

export default HomePage;
