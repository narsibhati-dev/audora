import type { IconKey } from '../icons';

export interface GoLivePlatform {
  iconKey: IconKey;
  color: string;
  label: string;
  gradient: string;
}

export const goLiveLeftPlatforms: GoLivePlatform[] = [
  {
    iconKey: 'faYoutube',
    color: 'bg-red-600',
    label: 'YouTube',
    gradient: 'linear-gradient(90deg, #ff0000 60%, transparent 100%)',
  },
  {
    iconKey: 'faTwitch',
    color: 'bg-purple-600',
    label: 'Twitch',
    gradient: 'linear-gradient(270deg, #9147ff 60%, transparent 100%)',
  },
];

export const goLiveRightPlatforms: GoLivePlatform[] = [
  {
    iconKey: 'faXTwitter',
    color: 'bg-black',
    label: 'X',
    gradient: 'linear-gradient(90deg, #000000 60%, transparent 100%)',
  },
  {
    iconKey: 'faLinkedin',
    color: 'bg-blue-700',
    label: 'LinkedIn',
    gradient: 'linear-gradient(90deg, #0a66c2 60%, transparent 100%)',
  },
];
