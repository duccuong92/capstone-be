import { responseSuccess } from "../common/helpers/response.helper"
import { imageService } from "../services/images.service"

export const imageController = {
  getImageById: async (req, res, next) => {
    try {
      const result = await imageService.getImageById(req)
      const response = responseSuccess(result, "Lấy thông tin ảnh thành công")
      res.status(response.statusCode).json(response)
    } catch (error) {
      next(error)
    }
  },

  getCommentsByImageId: async (req, res, next) => {
    try {
      const result = await imageService.getCommentsByImageId(req)
      const response = responseSuccess(result, "Lấy danh sách bình luận thành công")
      res.status(response.statusCode).json(response)
    } catch (error) {
      next(error)
    }
  },

  checkImageSaved: async (req, res, next) => {
    try {
      const result = await imageService.checkImageSaved(req)
      const response = responseSuccess(result, "Kiểm tra trạng thái lưu ảnh thành công")
      res.status(response.statusCode).json(response)
    } catch (error) {
      next(error)
    }
  },

  addComment: async (req, res, next) => {
    try {
      const result = await imageService.addComment(req)
      const response = responseSuccess(result, "Thêm bình luận thành công", 201)
      res.status(response.statusCode).json(response)
    } catch (error) {
      next(error)
    }
  },
}
