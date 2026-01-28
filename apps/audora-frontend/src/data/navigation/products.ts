import type { IconKey } from '../icons';

export interface ProductNavItem {
  iconKey: IconKey;
  title: string;
  description: string;
  href: string;
}

export const productItems: ProductNavItem[] = [
  {
    iconKey: 'lucideCircleDot',
    title: 'Recording',
    description: '4K video and audio recorder.',
    href: '/recording',
  },
  {
    iconKey: 'lucideSlidersHorizontal',
    title: 'Editing',
    description: 'AI, text-based video editor.',
    href: '/video-editor',
  },
  {
    iconKey: 'lucidePodcast',
    title: 'Live Streaming',
    description: 'For livestreams in full HD.',
    href: '/live-streaming',
  },
  {
    iconKey: 'lucideMonitorPlay',
    title: 'Webinars',
    description: 'Host, record, and repurpose.',
    href: '/use-cases/webinars',
  },
];

// Backwards-compatible alias (prefer `productItems`)
export const products = productItems;
