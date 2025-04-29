import express from "express";
import { authController } from "../controllers/auth.controller";
import { validate } from "../common/middlewares/validate.middleware";
import { registerSchema } from "../common/validations/auth.validation";

const authRouter = express.Router();

authRouter.post("/register", validate(registerSchema), authController.register);

authRouter.post("/login", authController.login);
export default authRouter;
