import { type Request, type Response } from "express";
import { HttpStatus } from "../utils/HttpStatus";
import { createTrackService } from "@audora/database/trackServices";

export const createTrack = async (req: Request, res: Response) => {
  const { title, projectId, trackType } = req.body;

  if (!title || !projectId || !trackType) {
    res.status(HttpStatus.BAD_REQUEST).json({
      success: false,
      message: "Title, projectId and trackType are required",
    });
    return;
  }

  try {
    const track = await createTrackService({ title, projectId });
    if (!track) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: "Failed to create track",
      });
      return;
    }

    res.status(HttpStatus.CREATED).json({
      success: true,
      message: "Track created successfully",
      data: track,
    });
    return;
  } catch (error) {
    console.error(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Failed to create track",
    });
    return;
  }
};

export const deleteTrack = async (_req: Request, _res: Response) => {};

export const getTrack = async (_req: Request, _res: Response) => {};

export const getTracks = async (_req: Request, _res: Response) => {};
