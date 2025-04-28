import morgan from "morgan";
import logger from "./logger.winston";

// Tạo stream để Morgan ghi log vào Winston
const morganStream = {
  write: (message) => {
    logger.info(message.trim(), { tag: "API" });
  },
};

// Định dạng tùy chỉnh cho Morgan
const morganFormat = ":method :url :status :res[content-length] :response-time ms";

// Xuất middleware Morgan
export default morgan(morganFormat, { stream: morganStream });