export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding Audora's Audio Encoding Process",
    excerpt:
      'Dive deep into how Audora processes and encodes your audio files, ensuring optimal quality while maintaining efficient file sizes.',
    category: 'Technical',
    image: '/images/blog/audio-encoding.png',
    date: 'May 15, 2024',
    readTime: '8 min read',
  },
  {
    id: 2,
    title: 'How Audora Handles Multi-Track Recording',
    excerpt:
      "Learn about Audora's advanced multi-track recording system that allows you to record multiple audio sources simultaneously with perfect synchronization.",
    category: 'Features',
    image: '/images/blog/multi-track.png',
    date: 'May 12, 2024',
    readTime: '6 min read',
  },
  {
    id: 3,
    title: "Behind the Scenes: Audora's Cloud Storage Architecture",
    excerpt:
      'Explore how Audora securely stores and manages your audio files in the cloud, ensuring fast access and reliable backup.',
    category: 'Technical',
    image: '/images/blog/cloud-storage.png',
    date: 'May 10, 2024',
    readTime: '7 min read',
  },
  {
    id: 4,
    title: 'Real-time Audio Processing in Audora',
    excerpt:
      'Discover how Audora processes audio in real-time, from noise reduction to automatic gain control, ensuring professional-quality output.',
    category: 'Technical',
    image: '/images/blog/audio-processing.png',
    date: 'May 8, 2024',
    readTime: '9 min read',
  },
  {
    id: 5,
    title: "Audora's AI-Powered Audio Enhancement",
    excerpt:
      "Learn about the AI algorithms that power Audora's automatic audio enhancement features, from voice isolation to background noise removal.",
    category: 'AI Features',
    image: '/images/blog/ai-audio.png',
    date: 'May 6, 2024',
    readTime: '7 min read',
  },
  {
    id: 6,
    title: "Optimizing Your Workflow with Audora's API",
    excerpt:
      "A comprehensive guide to using Audora's API for automating your audio production workflow and integrating with other tools.",
    category: 'Development',
    image: '/images/blog/api-integration.png',
    date: 'May 4, 2024',
    readTime: '10 min read',
  },
];

export const blogCategories = [
  'All',
  'Technical',
  'Features',
  'AI Features',
  'Development',
] as const;
