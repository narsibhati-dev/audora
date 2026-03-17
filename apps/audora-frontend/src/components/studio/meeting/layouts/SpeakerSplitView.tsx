'use client';

import { m, useReducedMotion } from 'framer-motion';
import VideoTile from '../video-tile';
import { DisplayParticipant } from './types';

interface SpeakerSplitViewProps {
  mainSpeaker: DisplayParticipant;
  otherParticipants: DisplayParticipant[];
}

export default function SpeakerSplitView({
  mainSpeaker,
  otherParticipants,
}: SpeakerSplitViewProps) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <div className='flex h-full w-full flex-row gap-2 p-2'>
      <m.div
        className='relative flex-[3]'
        initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
      >
        <VideoTile
          label={mainSpeaker.name}
          stream={mainSpeaker.stream}
          borderColor={
            mainSpeaker.isCameraOn ? 'border-gray-600' : 'border-red-500'
          }
          camOn={mainSpeaker.isCameraOn}
          micOn={mainSpeaker.isMicOn}
          isSelf={!!mainSpeaker.isSelf}
        />
      </m.div>

      <m.div
        className='flex w-64 flex-col gap-2 overflow-y-auto'
        initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 20 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
      >
        {otherParticipants.map((p, i) => (
          <m.div
            key={p.id}
            className='aspect-video'
            initial={
              shouldReduceMotion ? false : { opacity: 0, y: 10 * (i + 1) }
            }
            animate={{ opacity: 1, y: 0 }}
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 10 * (i + 1) }
            }
            transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
          >
            <VideoTile
              label={p.name}
              stream={p.stream}
              borderColor={p.isCameraOn ? 'border-gray-600' : 'border-red-500'}
              camOn={p.isCameraOn}
              micOn={p.isMicOn}
              isSelf={!!p.isSelf}
            />
          </m.div>
        ))}
      </m.div>
    </div>
  );
}
