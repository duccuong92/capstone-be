import express from "express";
import userRouter from "./user.route";

const rootRouter = express.Router();

rootRouter.use("/api/user", userRouter);

export default rootRouter;
