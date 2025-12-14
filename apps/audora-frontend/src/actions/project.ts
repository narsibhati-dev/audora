'use server';

import { getServerSession } from 'next-auth';
import authOptions from '@/lib/auth/auth-options';
import axios from 'axios';
import { HTTP_URL } from '@/config';

export interface CreateProjectResponse {
  success: boolean;
  message: string;
  project?: {
    id: string;
    name: string;
    studioId: string;
    createdAt: string;
  };
}

export interface CreateTrackResponse {
  success: boolean;
  message: string;
  track?: {
    id: string;
    name: string;
    projectId: string;
    createdAt: string;
  };
}

export const createProject = async (
  studioSlug: string,
  projectName: string,
): Promise<CreateProjectResponse> => {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return {
        success: false,
        message: 'Unauthorized',
      };
    }

    const response = await axios(`${HTTP_URL}/api/projects`, {
      method: 'POST',
      data: {
        studioSlug,
        name: projectName,
      },
    });

    if (!response.data.success) {
      return {
        success: false,
        message: response.data.message || 'Failed to create project',
      };
    }

    return {
      success: true,
      message: 'Project created successfully',
      project: response.data.project,
    };
  } catch (error) {
    console.error('Error creating project:', error);
    return {
      success: false,
      message: 'Failed to create project',
    };
  }
};

export const createTrack = async (
  projectId: string,
  trackName: string,
): Promise<CreateTrackResponse> => {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return {
        success: false,
        message: 'Unauthorized',
      };
    }

    const response = await axios(`${HTTP_URL}/api/tracks`, {
      method: 'POST',
      data: {
        projectId,
        name: trackName,
      },
    });

    if (!response.data.success) {
      return {
        success: false,
        message: response.data.message || 'Failed to create track',
      };
    }

    return {
      success: true,
      message: 'Track created successfully',
      track: response.data.data,
    };
  } catch (error) {
    console.error('Error creating track:', error);
    return {
      success: false,
      message: 'Failed to create track',
    };
  }
};
