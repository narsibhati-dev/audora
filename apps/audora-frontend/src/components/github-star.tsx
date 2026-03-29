'use client';

import { useState, useEffect } from 'react';
import { fetchGitHubStars } from '../lib/github';
import { Star, Github } from 'lucide-react';
import siteMetadata from '@/lib/seo/siteMetadata';

interface GithubStarProps {
  owner?: string;
  repo?: string;
  className?: string;
}

export default function GithubStar({
  owner = 'NarsiBhati-Dev',
  repo = 'audora',
  className = '',
}: GithubStarProps) {
  const [stars, setStars] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const repoUrl = siteMetadata.github;

  useEffect(() => {
    const loadStars = async () => {
      try {
        setLoading(true);
        setError(null);
        const starCount = await fetchGitHubStars(owner, repo);
        setStars(starCount);
      } catch (err) {
        console.error('Failed to fetch GitHub stars:', err);
        setError('Failed to load stars');
      } finally {
        setLoading(false);
      }
    };

    loadStars();
  }, [owner, repo]);

  return (
    <a
      href={repoUrl}
      target='_blank'
      rel='noopener noreferrer'
      className={`group inline-flex items-center gap-2 rounded-lg border border-[#ddd6cc] bg-white px-3 py-1.5 text-sm font-medium text-[#5a4e44] transition-all duration-200 hover:border-[#c8b9a8] hover:bg-[#f0ece5] hover:text-[#1a1714] hover:shadow-sm active:scale-[0.98] ${className}`}
    >
      <Github className='h-3.5 w-3.5 transition-transform duration-200 group-hover:scale-110' />
      <span>Star</span>

      {loading ? (
        <div className='h-3 w-3 animate-spin rounded-full border border-[#c8b9a8] border-t-[#5a4e44]' />
      ) : error ? null : stars !== null ? (
        <div className='flex items-center gap-1 rounded-md bg-[#f0ece5] px-1.5 py-0.5'>
          <Star className='h-3 w-3 fill-[#b8620a] text-[#b8620a]' />
          <span className='text-xs font-semibold text-[#5a4e44]'>
            {stars.toLocaleString()}
          </span>
        </div>
      ) : null}
    </a>
  );
}
