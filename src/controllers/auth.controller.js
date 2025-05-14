import { responseSuccess } from "../common/helpers/response.helper";
import authService from "../services/auth.service";

const authController = {
  register: async (req, res, next) => {
    try {
      const result = await authService.register(req);
      const response = responseSuccess(
        result,
        "Đăng ký tài khoản thành công",
        201,
        "#/Auth/post_auth_register"
      );
      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  login: async (req, res, next) => {
    try {
      const result = await authService.login(req);
      const response = responseSuccess(
        result,
        "Đăng nhập tài khoản thành công",
        200,
        "#/Auth/post_auth_login"
      );
      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  refreshToken: async (req, res, next) => {
    try {
      const result = await authService.refreshToken(req);
      const response = responseSuccess(result, "Làm mới token thành công", 200, "/#/Auth/post_auth_refresh_token");
      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  
};

export default authController;
