import express from "express"
import { imageController } from "../controllers/images.controller"
import protect from "../common/middlewares/protect.middleware"
import { validate } from "../common/middlewares/validate.middleware"
import { commentSchema } from "../common/validations/images.validation"

const imageRouter = express.Router()

// 5. GET thông tin ảnh và người tạo ảnh bằng id ảnh
imageRouter.get("/:id", imageController.getImageById)

// 6. GET thông tin bình luận theo id ảnh
imageRouter.get("/:id/comments", imageController.getCommentsByImageId)

// 7. GET thông tin đã lưu hình này chưa theo id ảnh
imageRouter.get("/:id/saved", protect, imageController.checkImageSaved)

// 8. POST để lưu thông tin bình luận của người dùng với hình ảnh
imageRouter.post("/:id/comment", protect, validate(commentSchema), imageController.addComment)

export default imageRouter;
