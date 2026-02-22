'use client';

import { m, useReducedMotion } from 'framer-motion';
import VideoTile from '../video-tile';
import { DisplayParticipant } from './types';

interface SpeakerFullViewProps {
  speaker: DisplayParticipant;
}

export default function SpeakerFullView({ speaker }: SpeakerFullViewProps) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <m.div
      className='h-full w-full p-2'
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
    >
      <VideoTile
        label={speaker.name}
        stream={speaker.stream}
        borderColor={speaker.isCameraOn ? 'border-gray-600' : 'border-red-500'}
        camOn={speaker.isCameraOn}
        micOn={speaker.isMicOn}
        isSelf={!!speaker.isSelf}
      />
    </m.div>
  );
}
