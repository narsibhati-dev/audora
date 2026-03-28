import type { IconKey } from '../icons';

export interface FooterLinkItem {
  name: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLinkItem[];
}

export interface SocialLinkItem {
  href: string;
  label: string;
  iconKey: IconKey;
}

export const footerNavSections: FooterSection[] = [
  {
    title: 'Product',
    links: [
      { name: 'Recording', href: '/recording' },
      { name: 'Live Streaming', href: '/live-streaming' },
      { name: 'Video Editor', href: '/video-editor' },
      { name: 'Webinars', href: '/use-cases/webinars' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '/blogs' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms & Conditions', href: '/terms-conditions' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  },
];

export const footerBottomLinks: FooterLinkItem[] = [
  { name: 'Privacy', href: '/privacy-policy' },
  { name: 'Terms', href: '/terms-conditions' },
  { name: 'Cookies', href: '/cookies' },
];

export const footerSocialLinks: SocialLinkItem[] = [
  {
    href: 'https://x.com/audoralabs',
    label: 'X',
    iconKey: 'XIcon',
  },
  {
    href: 'https://www.linkedin.com/company/audora-labs',
    label: 'LinkedIn',
    iconKey: 'LinkedInIcon',
  },
  {
    href: 'https://github.com/audoralabs',
    label: 'GitHub',
    iconKey: 'faGithub',
  },
];
