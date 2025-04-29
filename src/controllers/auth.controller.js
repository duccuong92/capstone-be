import { responseSuccess } from "../common/helpers/response.helper";
import { authService } from "../services/auth.service";

export const authController = {
  register: async (req, res, next) => {
    try {
      const result = await authService.register(req);
      const response = responseSuccess(
        result,
        "Đăng ký tài khoản thành công",
        201
      );
      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },
};
