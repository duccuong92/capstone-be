import express from "express"
import imageController from "../controllers/image.controller";

const imageRouter = express.Router();

imageRouter.get("/", imageController.findAll)

imageRouter.get("/search-by-name", imageController.searchImageByName)

export default imageRouter