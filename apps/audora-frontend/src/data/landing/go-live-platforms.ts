import type { IconKey } from '../icons';

export interface GoLivePlatform {
  iconKey: IconKey;
  color: string;
  label: string;
  gradient: string;
}

export const goLiveLeftPlatforms: GoLivePlatform[] = [
  {
    iconKey: 'faFacebook',
    color: 'bg-blue-600',
    label: 'Facebook',
    gradient: 'linear-gradient(90deg, #1877f2 60%, transparent 100%)',
  },
  {
    iconKey: 'faXTwitter',
    color: 'bg-black',
    label: 'Twitter',
    gradient: 'linear-gradient(90deg, #000000 60%, transparent 100%)',
  },
  {
    iconKey: 'faYoutube',
    color: 'bg-red-600',
    label: 'YouTube',
    gradient: 'linear-gradient(90deg, #ff0000 60%, transparent 100%)',
  },
  {
    iconKey: 'faLinkedin',
    color: 'bg-blue-700',
    label: 'LinkedIn',
    gradient: 'linear-gradient(90deg, #0a66c2 60%, transparent 100%)',
  },
];

export const goLiveRightPlatforms: GoLivePlatform[] = [
  {
    iconKey: 'faTwitch',
    color: 'bg-purple-600',
    label: 'Twitch',
    gradient: 'linear-gradient(270deg, #9147ff 60%, transparent 100%)',
  },
  {
    iconKey: 'faInstagram',
    color: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600',
    label: 'Instagram',
    gradient:
      'linear-gradient(270deg, #f9d423 0%, #e65c00 30%, #e1306c 60%, #8a3ab9 80%, transparent 100%)',
  },
  {
    iconKey: 'faTiktok',
    color: 'bg-black',
    label: 'TikTok',
    gradient: 'linear-gradient(270deg, #000000 60%, transparent 100%)',
  },
  {
    iconKey: 'faVideo',
    color: 'bg-primary-500',
    label: 'Video',
    gradient: 'linear-gradient(270deg, #7357ff 60%, transparent 100%)',
  },
];
