import { TeamMember } from '@/data';
import { FaLinkedin, FaXTwitter, FaGithub } from 'react-icons/fa6';
import Image from 'next/image';

const TeamMemberCard = (member: TeamMember) => {
  return (
    <div className='group relative overflow-hidden rounded-2xl border border-[#e4dfd6] bg-white px-7 py-7 shadow-[0_2px_16px_rgba(0,0,0,0.05)] transition-shadow duration-200 hover:shadow-[0_4px_28px_rgba(0,0,0,0.09)]'>

      {/* Amber top accent */}
      <div className='absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#b8620a] via-[#b8620a]/30 to-transparent' />

      <div className='flex items-start gap-5'>

        {/* Photo */}
        <div className='relative shrink-0'>
          <div className='relative h-20 w-20 overflow-hidden rounded-full border-2 border-[#e4dfd6] shadow-sm ring-2 ring-[#b8620a]/10'>
            <Image
              src={member.image}
              alt={member.name}
              fill
              className='object-cover'
            />
          </div>
          {/* Amber glow on hover */}
          <div className='pointer-events-none absolute inset-0 rounded-full bg-[#b8620a]/[0.08] blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
        </div>

        {/* Content */}
        <div className='flex min-w-0 flex-1 flex-col'>

          <p className='mb-0.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[#b8620a]'>
            Founder
          </p>

          <h3 className='font-syne mb-0.5 text-[1.15rem] font-extrabold leading-tight tracking-[-0.03em] text-[#1a1714]'>
            {member.name}
          </h3>

          <p className='mb-3 text-[12px] text-[#9a8878]'>{member.role}</p>

          <p className='mb-5 text-[13px] leading-[1.75] text-[#7a6f65]'>
            {member.bio}
          </p>

          {/* Social links */}
          <div className='flex items-center gap-2'>
            {member.linkedin && (
              <a
                href={member.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`${member.name} on LinkedIn`}
                className='flex h-8 w-8 items-center justify-center rounded-lg border border-[#e4dfd6] bg-[#f7f5f1] text-[#9a8878] transition-all duration-200 hover:border-[#b8620a]/30 hover:bg-[#fdf5ec] hover:text-[#b8620a]'
              >
                <FaLinkedin className='h-3.5 w-3.5' />
              </a>
            )}
            {member.twitter && (
              <a
                href={member.twitter}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`${member.name} on X`}
                className='flex h-8 w-8 items-center justify-center rounded-lg border border-[#e4dfd6] bg-[#f7f5f1] text-[#9a8878] transition-all duration-200 hover:border-[#1a1714]/20 hover:bg-[#f0ece5] hover:text-[#1a1714]'
              >
                <FaXTwitter className='h-3.5 w-3.5' />
              </a>
            )}
            {member.github && (
              <a
                href={member.github}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`${member.name} on GitHub`}
                className='flex h-8 w-8 items-center justify-center rounded-lg border border-[#e4dfd6] bg-[#f7f5f1] text-[#9a8878] transition-all duration-200 hover:border-[#1a1714]/20 hover:bg-[#f0ece5] hover:text-[#1a1714]'
              >
                <FaGithub className='h-3.5 w-3.5' />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
