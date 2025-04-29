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
};
