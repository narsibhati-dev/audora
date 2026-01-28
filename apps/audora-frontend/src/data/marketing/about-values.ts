import type { IconKey } from '../icons';

export interface AboutValue {
  title: string;
  description: string;
  iconKey: IconKey;
}

export const aboutValues: AboutValue[] = [
  {
    title: 'Innovation',
    description:
      "We constantly push the boundaries of what's possible in remote content creation, making it easy to collaborate and record from anywhere.",
    iconKey: 'InnovationIcon',
  },
  {
    title: 'Accessibility',
    description:
      'Professional-grade recording tools for podcasts, meetings, and more—available to everyone, no matter their experience level.',
    iconKey: 'AccessibilityIcon',
  },
  {
    title: 'Quality',
    description:
      'Local recording for every participant ensures the best possible audio and video quality, every time.',
    iconKey: 'QualityIcon',
  },
];
