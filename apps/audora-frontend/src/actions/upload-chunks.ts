'use server';

import { HTTP_URL } from '@/config';
import axios from 'axios';

export const uploadChunks = async (formData: FormData) => {
  const response = await axios.post(`${HTTP_URL}/recording/chunks`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  if (!response.data.success) {
    throw new Error(response.data.message);
  }

  return response.data;
};
