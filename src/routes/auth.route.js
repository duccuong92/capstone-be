import express from "express";

import { validate } from "../common/middlewares/validate.middleware";
import {
  loginSchema,
  registerSchema,
} from "../common/validations/auth.validation";
import protect from "../common/middlewares/protect.middleware";
import authController from "../controllers/auth.controller";

const authRouter = express.Router();

authRouter.post("/register", validate(registerSchema), authController.register);

authRouter.post("/login", validate(loginSchema), authController.login);

authRouter.post("/refresh-token", authController.refreshToken);

authRouter.get("/get-info", protect, authController.getInfo);

export default authRouter;
