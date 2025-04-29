import express from "express";
import { userController } from "../controllers/user.controller";
import protect from "../common/middlewares/protect.middleware";

const userRouter = express.Router();

userRouter.get("/", userController.findAll);

userRouter.get("/get-info", protect, userController.getInfo);

userRouter.patch("/update-info", protect, userController.updateInfo);

export default userRouter;
