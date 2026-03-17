import { type Router, Router as ExpressRouter } from "express";
import { generateMeetingTokenController } from "../controllers/meeting.controller";

export const meetingRoutes: Router = ExpressRouter();

meetingRoutes.post("/generate-token", generateMeetingTokenController);

export default meetingRoutes;
