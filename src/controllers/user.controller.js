import { responseSuccess } from "../common/helpers/response.helper";
import { userService } from "../services/user.service";

export const userController = {
  findAll: async (req, res, next) => {
    try {
      const result = await userService.findAll(req);
      const response = responseSuccess(result, "Lấy danh sách user thành công");
      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  getInfo: async (req, res, next) => {
    try {
      const result = await userService.getInfo(req);
      const response = responseSuccess(
        result,
        "Lấy thông tin tài khoản thành công"
      );
      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  updateInfo: async (req, res, next) => {
    try {
      const result = await userService.updateInfo(req);
      const response = responseSuccess(
        result,
        "Cập nhật thông tin tài khoản thành công"
      );
      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },
};
