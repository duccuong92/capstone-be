import express from "express";
import { userController } from "../controllers/user.controller";

const userRouter = express.Router();

userRouter.get("/", userController.findAll);

export default userRouter;
