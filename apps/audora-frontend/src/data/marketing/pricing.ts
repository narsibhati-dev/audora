export interface PricingPlan {
  id: string;
  name: string;
  price: number | null;
  period: string;
  recordingHours: number | 'Custom';
  features: string[];
  highlight?: boolean;
  badge?: string;
  ctaLabel: string;
  ctaHref: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    period: 'month',
    recordingHours: 2,
    features: [
      '2 hours of recording per month',
      'Video & audio or audio-only recording',
      'Standard quality (720p)',
      'Basic noise reduction',
      '1 studio',
    ],
    ctaLabel: 'Get started',
    ctaHref: '/dashboard',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 10,
    period: 'month',
    recordingHours: 20,
    features: [
      '20 hours of recording per month',
      'High-quality audio (44.1 kHz / 48 kHz)',
      'Advanced video (up to 1080p/4K)',
      'Lobby, captions & countdown timer',
      'Auto-start on guest join & pause uploads',
      'S3 multipart uploads with retry & resume',
      'Professional processing (transcoding, normalization)',
      'Secure room management & WebRTC',
      'Custom branding',
    ],
    highlight: true,
    badge: 'Best value',
    ctaLabel: 'Get Pro',
    ctaHref: '/dashboard',
  },
  {
    id: 'custom',
    name: 'Custom',
    price: null,
    period: 'month',
    recordingHours: 'Custom',
    features: [
      'Custom recording hours and usage',
      'Dedicated support',
      'SLA and custom branding',
    ],
    badge: 'Enterprise',
    ctaLabel: 'Contact us',
    ctaHref: 'mailto:narsibhati2000@gmail.com',
  },
];
