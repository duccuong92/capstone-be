import express from "express"
import { imagesController } from "../controllers/images.controller"
import protect from "../common/middlewares/protect.middleware"
import { validate } from "../common/middlewares/validate.middleware"
import { commentSchema } from "../common/validations/images.validation"

const imagesRouter = express.Router()

// 5. GET thông tin ảnh và người tạo ảnh bằng id ảnh
imagesRouter.get("/:id", imagesController.getImageById)

// 6. GET thông tin bình luận theo id ảnh
imagesRouter.get("/:id/comments", imagesController.getCommentsByImageId)

// 7. GET thông tin đã lưu hình này chưa theo id ảnh
imagesRouter.get("/:id/saved", protect, imagesController.checkImageSaved)

// 8. POST để lưu thông tin bình luận của người dùng với hình ảnh
imagesRouter.post("/:id/comment", protect, validate(commentSchema), imagesController.addComment)

export default imagesRouter;
