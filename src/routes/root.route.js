import express from "express";
import userRouter from "./user.route";
import authRouter from "./auth.route";

const rootRouter = express.Router();

rootRouter.use("/api-docs", swaggerUi.serve);
rootRouter.get(
  "/api-docs",
  swaggerUi.setup(swaggerDocument, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  })
);

rootRouter.use("/api/auth", authRouter);
rootRouter.use("/api/user", userRouter);
rootRouter.use("/api/auth", authRouter);

export default rootRouter;
