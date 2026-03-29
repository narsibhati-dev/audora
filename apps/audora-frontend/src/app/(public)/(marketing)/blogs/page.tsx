import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import getPageMetadata from '@/lib/seo/getPageMetadata';
import { blogCategories, blogPosts } from '@/data';
import NewsletterForm from '@/components/marketing/NewsletterForm';

export const metadata = getPageMetadata({
  title: 'Audora Blog',
  description:
    'Discover insights, tutorials, and the latest trends in podcasting and content creation.',
  imageUrl: '/images/blog/audio-encoding.png',
});

interface SearchParams {
  category?: string;
}

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const selectedCategory = params.category || 'All';

  const filteredPosts =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter(post => post.category === selectedCategory);

  const [featured, ...rest] = filteredPosts;

  return (
    <div className='min-h-screen bg-[#f7f5f1]'>

      {/* ── HEADER ──────────────────────────────────────────────── */}
      <section className='relative border-b border-[#e4dfd6] bg-[#f7f5f1] pt-32 pb-16'>

        {/* Faint warm bloom */}
        <div
          aria-hidden
          className='pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] translate-x-1/4 -translate-y-1/4 rounded-full bg-[#b8620a]/[0.05] blur-[160px]'
        />

        <div className='relative mx-auto max-w-10xl px-8 sm:px-12 lg:px-16 xl:px-24'>
          <div className='flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between'>

            {/* Left: headline */}
            <div>
              <div className='mb-5 flex items-center gap-2.5'>
                <span className='h-px w-6 bg-[#b8620a]/60' />
                <span className='font-mono text-[11px] uppercase tracking-[0.24em] text-[#b8620a]'>
                  Audora Journal
                </span>
              </div>
              <h1 className='font-syne text-[clamp(3rem,7vw,6rem)] font-extrabold leading-none tracking-[-0.045em] text-[#1a1714]'>
                Ideas &amp;
                <br />
                <span className='text-[#9a8878]'>Insights.</span>
              </h1>
            </div>

            {/* Right: description */}
            <p className='max-w-sm text-[15px] leading-relaxed text-[#7a6f65] lg:text-right'>
              Tutorials, deep dives, and the latest thinking on podcasting,
              audio, and content creation.
            </p>
          </div>
        </div>
      </section>

      {/* ── CATEGORY FILTERS ────────────────────────────────────── */}
      <div className='border-b border-[#e4dfd6] bg-[#f7f5f1]'>
        <div className='mx-auto max-w-10xl px-8 sm:px-12 lg:px-16 xl:px-24'>
          <div className='relative'>
            {/* Right fade — scroll affordance on mobile */}
            <div
              aria-hidden
              className='pointer-events-none absolute top-0 right-0 z-10 h-full w-12 bg-gradient-to-l from-[#f7f5f1] to-transparent lg:hidden'
            />
            <div className='flex items-center gap-2 overflow-x-auto py-4 scrollbar-none'>
              {blogCategories.map(category => {
                const isActive = selectedCategory === category;
                return (
                  <Link
                    key={category}
                    href={
                      category === 'All' ? '/blogs' : `/blogs?category=${category}`
                    }
                    className={`shrink-0 rounded-lg border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-all duration-200 ${
                      isActive
                        ? 'border-[#1a1714] bg-[#1a1714] text-[#f7f5f1]'
                        : 'border-[#ddd6cc] bg-transparent text-[#7a6f65] hover:border-[#b0a394] hover:text-[#1a1714]'
                    }`}
                  >
                    {category}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className='mx-auto max-w-10xl px-8 py-16 sm:px-12 lg:px-16 xl:px-24'>

        {filteredPosts.length === 0 ? (
          <div className='py-24 text-center'>
            <p className='font-mono text-[13px] uppercase tracking-[0.18em] text-[#9a8878]'>
              No articles in this category yet.
            </p>
          </div>
        ) : (
          <>
            {/* ── FEATURED POST ─────────────────────────────────── */}
            {featured && (
              <article className='group mb-14'>
                <Link href={`/blogs/${featured.id}`} className='block'>
                  <div className='grid grid-cols-1 overflow-hidden rounded-2xl border border-[#e4dfd6] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] lg:grid-cols-2'>

                    {/* Image */}
                    <div className='relative aspect-[4/3] overflow-hidden lg:aspect-auto'>
                      <Image
                        src={featured.image}
                        alt={featured.title}
                        fill
                        priority
                        className='object-cover transition-transform duration-700 group-hover:scale-[1.03]'
                        sizes='(max-width: 1024px) 100vw, 50vw'
                      />
                      {/* Subtle warm overlay on hover */}
                      <div className='absolute inset-0 bg-[#b8620a]/0 transition-all duration-500 group-hover:bg-[#b8620a]/[0.04]' />
                    </div>

                    {/* Copy */}
                    <div className='flex flex-col justify-center p-10 lg:p-14'>
                      <div className='mb-6 flex items-center gap-3'>
                        <span className='rounded-md border border-[#e4dfd6] bg-[#f0ece5] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#b8620a]'>
                          {featured.category}
                        </span>
                        <span className='font-mono text-[10px] text-[#b0a394]'>
                          Featured
                        </span>
                      </div>

                      <h2 className='font-syne mb-5 text-[clamp(1.5rem,2.8vw,2.4rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#1a1714] transition-colors duration-200 group-hover:text-[#2e2a25]'>
                        {featured.title}
                      </h2>

                      <p className='mb-8 text-[15px] leading-relaxed text-[#7a6f65]'>
                        {featured.excerpt}
                      </p>

                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-3 font-mono text-[11px] text-[#b0a394]'>
                          <span>{featured.date}</span>
                          <span className='h-px w-4 bg-[#ddd6cc]' />
                          <span>{featured.readTime}</span>
                        </div>
                        <span className='font-mono text-[11px] uppercase tracking-[0.16em] text-[#1a1714] transition-transform duration-200 group-hover:translate-x-0.5'>
                          Read →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            )}

            {/* ── DIVIDER ───────────────────────────────────────── */}
            {rest.length > 0 && (
              <div className='mb-12 flex items-center gap-4'>
                <span className='h-px flex-1 bg-[#e4dfd6]' />
                <span className='font-mono text-[10px] uppercase tracking-[0.2em] text-[#b0a394]'>
                  More articles
                </span>
                <span className='h-px flex-1 bg-[#e4dfd6]' />
              </div>
            )}

            {/* ── POST GRID ─────────────────────────────────────── */}
            {rest.length > 0 && (
              <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                {rest.map(post => (
                  <article key={post.id} className='group'>
                    <Link href={`/blogs/${post.id}`} className='block h-full'>
                      <div className='flex h-full flex-col overflow-hidden rounded-2xl border border-[#e4dfd6] bg-white shadow-[0_2px_16px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-[#c8b9a8] hover:shadow-[0_6px_32px_rgba(0,0,0,0.09)]'>

                        {/* Image */}
                        <div className='relative aspect-[16/9] overflow-hidden'>
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            loading='lazy'
                            className='object-cover transition-transform duration-700 group-hover:scale-[1.04]'
                            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                          />
                        </div>

                        {/* Copy */}
                        <div className='flex flex-1 flex-col p-6'>
                          <div className='mb-4 flex items-center gap-2.5'>
                            <span className='rounded-md border border-[#e4dfd6] bg-[#f0ece5] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-[#b8620a]'>
                              {post.category}
                            </span>
                          </div>

                          <h2 className='font-syne mb-3 text-[17px] font-bold leading-[1.25] tracking-[-0.02em] text-[#1a1714] transition-colors duration-200 group-hover:text-[#2e2a25]'>
                            {post.title}
                          </h2>

                          <p className='mb-6 line-clamp-2 flex-1 text-[13px] leading-relaxed text-[#7a6f65]'>
                            {post.excerpt}
                          </p>

                          <div className='flex items-center justify-between border-t border-[#f0ece5] pt-4'>
                            <div className='flex items-center gap-2 font-mono text-[10px] text-[#b0a394]'>
                              <span>{post.date}</span>
                              <span className='h-px w-3 bg-[#ddd6cc]' />
                              <span>{post.readTime}</span>
                            </div>
                            <span className='font-mono text-[10px] uppercase tracking-[0.14em] text-[#9a8878] transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-[#1a1714]'>
                              Read →
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* ── NEWSLETTER CTA ──────────────────────────────────────── */}
      <section className='border-t border-[#e4dfd6] bg-[#f0ece5] py-20'>
        <div className='mx-auto max-w-10xl px-8 sm:px-12 lg:px-16 xl:px-24'>
          <div className='flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between'>
            <div>
              <div className='mb-4 flex items-center gap-2.5'>
                <span className='h-px w-6 bg-[#b8620a]/60' />
                <span className='font-mono text-[11px] uppercase tracking-[0.24em] text-[#b8620a]'>
                  Stay in the loop
                </span>
              </div>
              <h2 className='font-syne text-[clamp(1.6rem,3.5vw,3rem)] font-extrabold leading-[1.0] tracking-[-0.04em] text-[#1a1714]'>
                Get new articles
                <br />
                <span className='text-[#9a8878]'>straight to your inbox.</span>
              </h2>
            </div>

            <NewsletterForm />
          </div>
        </div>
      </section>

    </div>
  );
}
