import type { ComponentType } from 'react';

// React-icons (serializable via iconKey)
import {
  FaYoutube,
  FaLinkedin,
  FaTwitch,
  FaTiktok,
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaVideo,
  FaGithub,
} from 'react-icons/fa6';

// Lucide icons (used in navbar product list)
import {
  CircleDot,
  SlidersHorizontal,
  Podcast,
  MonitorPlay,
} from 'lucide-react';

// Custom in-repo icons
import {
  DashboardSidebarIcon,
  LinkedInIcon,
  XIcon,
  FacebookIcon,
  YoutubeIcon,
  TwitchIcon,
  TikTokIcon,
  RTMPIcon,
  InnovationIcon,
  AccessibilityIcon,
  QualityIcon,
  InfoIcon,
  StreamingResolutionIcon,
  AudienceInfoIcon,
  SupportIcon,
  SupportIcon2,
  SupportIcon3,
  ZapIcon,
  CameraIcon,
  MicrophoneIcon,
  SpeakerIcon,
  MicrophoneOffIcon,
  CameraOffIcon,
  GridLayoutIcon,
  SpeakerFullIcon,
  SpeakerSplitIcon,
  ScreenShareIcon,
  ScreenFillIcon,
  ScreenFitIcon,
} from './custom-icons';

export type IconComponent = ComponentType<{ className?: string }>;

export const iconMap = {
  // react-icons (marketing/landing)
  faFacebook: FaFacebook,
  faXTwitter: FaXTwitter,
  faYoutube: FaYoutube,
  faLinkedin: FaLinkedin,
  faTwitch: FaTwitch,
  faInstagram: FaInstagram,
  faTiktok: FaTiktok,
  faVideo: FaVideo,
  faGithub: FaGithub,

  // lucide-react (navbar products)
  lucideCircleDot: CircleDot,
  lucideSlidersHorizontal: SlidersHorizontal,
  lucidePodcast: Podcast,
  lucideMonitorPlay: MonitorPlay,

  // custom icons (existing)
  DashboardSidebarIcon,
  LinkedInIcon,
  XIcon,
  FacebookIcon,
  YoutubeIcon,
  TwitchIcon,
  TikTokIcon,
  RTMPIcon,
  InnovationIcon,
  AccessibilityIcon,
  QualityIcon,
  InfoIcon,
  StreamingResolutionIcon,
  AudienceInfoIcon,
  SupportIcon,
  SupportIcon2,
  SupportIcon3,
  ZapIcon,
  CameraIcon,
  MicrophoneIcon,
  SpeakerIcon,
  MicrophoneOffIcon,
  CameraOffIcon,
  GridLayoutIcon,
  SpeakerFullIcon,
  SpeakerSplitIcon,
  ScreenShareIcon,
  ScreenFillIcon,
  ScreenFitIcon,
} as const satisfies Record<string, IconComponent>;

export type IconKey = keyof typeof iconMap;
