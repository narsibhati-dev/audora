import siteMetadata from '@/lib/seo/siteMetadata';

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
  twitter: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Narsi Bhati',
    role: 'Founder & Full-Stack Engineer',
    image: '/images/team/narsi-bhati.jpg',
    bio: 'Experienced in real-time media, distributed systems, and the development of robust, user-centered applications. Responsible for leading product and technology at Audora.',
    linkedin: siteMetadata.linkedIn,
    twitter: siteMetadata.twitter,
  },
];
