import express, { type Router } from "express";
import {
  register,
  login,
  registerWithGoogle,
} from "../controllers/auth.controller";
import { authLimiter } from "../middleware/rateLimiters";

const authRouter: Router = express.Router();

authRouter.post("/register", authLimiter, register);
authRouter.post("/login", authLimiter, login);
authRouter.post("/google", authLimiter, registerWithGoogle);

export default authRouter;
