import express from "express";
import userRouter from "./user.route";
import authRouter from "./auth.route";

const rootRouter = express.Router();

rootRouter.use("/api/user", userRouter);
rootRouter.use("/api/auth", authRouter);

export default rootRouter;
