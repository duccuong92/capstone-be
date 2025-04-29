import Joi from "joi";

export const registerSchema = {
  body: Joi.object({
    fullName: Joi.string()
      .trim()
      .pattern(/^[a-zA-ZÀ-ỹ\s]+$/u)
      .custom((value, helpers) => {
        if (value === "") {
          return helpers.error("string.empty");
        }
        return value;
      })
      .required()
      .messages({
        "string.base": "Họ và tên phải là chuỗi!",
        "string.pattern.base":
          "Họ và tên không được chứa số hoặc ký tự đặc biệt!",
        "any.required": "Họ và tên là bắt buộc!",
        "string.empty": "Họ và tên không được để trống!",
      }),

    email: Joi.string()
      .email({ tlds: { allow: false } })
      .trim()
      .custom((value, helpers) => {
        if (value === "") {
          return helpers.error("string.empty");
        }
        return value;
      })
      .required()
      .messages({
        "string.email": "Email không hợp lệ!",
        "any.required": "Email là bắt buộc!",
        "string.empty": "Email không được để trống!",
      }),

    password: Joi.string()
      .trim()
      .min(6)
      .pattern(/^(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$/)
      .custom((value, helpers) => {
        if (value === "") {
          return helpers.error("string.empty");
        }
        return value;
      })
      .required()
      .messages({
        "string.min": "Mật khẩu phải tối thiểu 6 ký tự",
        "string.pattern.base": "Mật khẩu phải có ít nhất 1 chữ và 1 số!",
        "any.required": "Mật khẩu là bắt buộc",
        "string.empty": "Mật khẩu không được để trống!",
      }),
  }),
};

export const loginSchema = {
  body: Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .trim()
      .custom((value, helpers) => {
        if (value === "") return helpers.error("string.empty");
        return value;
      })
      .required()
      .messages({
        "string.email": "Email không hợp lệ!",
        "any.required": "Email là bắt buộc!",
        "string.empty": "Email không được để trống!",
      }),

    password: Joi.string()
      .trim()
      .min(6)
      .pattern(/^(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$/)
      .custom((value, helpers) => {
        if (value === "") return helpers.error("string.empty");
        return value;
      })
      .required()
      .messages({
        "string.min": "Mật khẩu phải tối thiểu 6 ký tự!",
        "string.pattern.base": "Mật khẩu phải có ít nhất 1 chữ và 1 số!",
        "any.required": "Mật khẩu là bắt buộc!",
        "string.empty": "Mật khẩu không được để trống!",
      }),
  }),
};
