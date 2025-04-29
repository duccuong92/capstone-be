import chalk from "chalk";
import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const colorLevel = (level) => {
  if (level === "INFO") return chalk.greenBright(level);
  if (level === "DEBUG") return chalk.blueBright(level);
  if (level === "WARN") return chalk.yellowBright(level);
  if (level === "ERROR") return chalk.redBright(level);
  return level;
};

// Format cho console (chỉ dùng Chalk trong development)
const consoleFormat = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  winston.format.printf(({ level, message, timestamp, tag }) => {
    if (process.env.NODE_ENV === "production") {
      return `[${timestamp}] ${level.toUpperCase()} ${tag || ""}: ${message}`;
    }
    const timestampFormatted = chalk.gray(`[${timestamp}]`);
    const separator = chalk.gray(" - ");
    const levelUppercase = level.toUpperCase();
    const coloredLevel = colorLevel(levelUppercase);
    const tagLabel = tag ? chalk.cyanBright(`${tag}`) : "";
    const messageFormatted = chalk.magentaBright(message);
    return `${timestampFormatted}${separator}${coloredLevel}${separator}${tagLabel}${separator}${messageFormatted}`;
  })
);

// Format cho file (JSON)
const fileFormat = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss.SSS" }),
  winston.format.json()
);

const logger = winston.createLogger({
  level: "info",
  format: fileFormat,
  defaultMeta: { tag: "SYSTEM" },
  transports: [
    new winston.transports.Console({ format: consoleFormat }),
    new DailyRotateFile({
      filename: "logs/error-%DATE%.log",
      datePattern: "YYYY-MM-DD",
      level: "error",
      maxSize: "5m", // 5MB
      maxFiles: "14d", // Giữ log 14 ngày
      format: fileFormat,
    }),
    new DailyRotateFile({
      filename: "logs/combined-%DATE%.log",
      datePattern: "YYYY-MM-DD",
      maxSize: "5m",
      maxFiles: "14d",
      format: fileFormat,
    }),
  ],
});

export default logger;