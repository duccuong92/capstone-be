import { responseSuccess } from "../common/helpers/response.helper";
import { imagesService } from "../services/images.service";

export const imagesController = {
  findAll: async (req, res, next) => {
    try {
      const result = await imagesService.findAll(req);
      const response = responseSuccess(
        result,
        "Lấy danh sách hình ảnh thành công"
      );
      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  searchImageByName: async (req, res, next) => {
    try {
      const result = await imagesService.searchImageByName(req);
      const response = responseSuccess(
        result,
        "Tìm kiếm danh sách hình ảnh theo tên thành công"
      );
      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  getImageById: async (req, res, next) => {
    try {
      const result = await imagesService.getImageById(req);
      const response = responseSuccess(result, "Lấy thông tin ảnh thành công");
      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  getCommentsByImageId: async (req, res, next) => {
    try {
      const result = await imagesService.getCommentsByImageId(req);
      const response = responseSuccess(
        result,
        "Lấy danh sách bình luận thành công"
      );
      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  checkImageSaved: async (req, res, next) => {
    try {
      const result = await imagesService.checkImageSaved(req);
      const response = responseSuccess(
        result,
        "Kiểm tra trạng thái lưu ảnh thành công"
      );
      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  addComment: async (req, res, next) => {
    try {
      const result = await imagesService.addComment(req);
      const response = responseSuccess(
        result,
        "Thêm bình luận thành công",
        201
      );
      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },
};
