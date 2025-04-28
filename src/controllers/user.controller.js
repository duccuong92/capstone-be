import { responseSuccess } from "../common/helper/response.helper";
import { userService } from "../services/user.service";

export const userController = {
  findAll: async (req, res, next) => {
    try {
      const result = await userService.findAll();
      const response = responseSuccess(result, "Lấy danh sách user thành công");
      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },
};
