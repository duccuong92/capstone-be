import express from "express";
import { PORT } from "./src/common/constant/app.constant";
import { handleError } from "./src/common/helper/error.helper";
import cors from "cors";
import rootRouter from "./src/routes/root.route";
import logApi from "./src/common/logging/log-api.morgan";
import logger from "./src/common/logging/logger.winston";
import helmet from "helmet";

const app = express();

app.use(express.json());
app.use(logApi);
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
app.use(helmet());

app.use(rootRouter);
app.use(handleError);

app.listen(PORT, () => {
  logger.info(`Server is running at http://localhost:${PORT}`, {
    tag: "SERVER",
  });
});
