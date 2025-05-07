import express from "express";
import userRouter from "./user.route";
import authRouter from "./auth.route";

import imagesRouter from "./images.route";
import imageRouter from "./image.route";

import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../common/docs/swagger.doc";


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

rootRouter.use("/api/images", imagesRouter);
rootRouter.use("/api/image", imageRouter);

export default rootRouter;
