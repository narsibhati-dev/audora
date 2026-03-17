import express, { type Router } from "express";

import { auth } from "../middleware/auth";
import { setProfileName } from "../controllers/profile.controller";

const profileRouter: Router = express.Router();

profileRouter.use(auth);

profileRouter.put("/update-name", setProfileName);

export default profileRouter;
