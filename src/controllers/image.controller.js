import { responseSuccess } from "../common/helpers/response.helper";
import imageService from "../services/image.service";

const imageController = {
  findAll: async (req, res, next) => {
    try {
      const result = await imageService.findAll(req);
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
      const result = await imageService.searchImageByName(req);
      const response = responseSuccess(
        result,
        "Tìm kiếm danh sách hình ảnh theo tên thành công"
      );
      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },
};

export default imageController;
