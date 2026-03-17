'use server';

import { HTTP_URL } from '@/config';
import axios from 'axios';

export const generateMeetingToken = async (
  studioSlug: string,
  userId: string | undefined,
  studioToken?: string | null,
) => {
  try {
    const response = await axios.post(
      `${HTTP_URL}/meeting/generate-token`,
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
  } catch {
    return { success: false, message: 'Failed to generate meeting token' };
  }
};
