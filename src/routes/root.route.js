import express from "express";
import userRouter from "./user.route";
import authRouter from "./auth.route";
import imageRouter from "./image.route";

const rootRouter = express.Router();

rootRouter.use("/api/auth", authRouter);
rootRouter.use("/api/user", userRouter);
rootRouter.use("/api/image", imageRouter);

export default rootRouter;
