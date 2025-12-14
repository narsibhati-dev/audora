'use server';

import { HTTP_URL } from '@/config';
import axios from 'axios';

export const generateMeetingToken = async (
  studioSlug: string,
  userId: string | undefined,
  studioToken?: string | null,
) => {
  const response = await axios.post(
    `${HTTP_URL}/generate-token`,
    {
      studioSlug,
      userId,
      studioToken,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return response.data;
};
