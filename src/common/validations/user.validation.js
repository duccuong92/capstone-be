import Joi from "joi";

const updateInfoSchema = {
  body: Joi.object({
    body: Joi.object({
      fullName: Joi.string().disallow("").optional().messages({
        "string.base": "Họ và tên phải là chuỗi!",
        "string.disallow": "Họ và tên không được để trống!",
      }),
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .disallow("")
        .optional()
        .messages({
          "string.email": "Email không hợp lệ!",
          "string.disallow": "Email không được để trống!",
        }),
      age: Joi.number().integer().min(0).optional().messages({
        "number.base": "Tuổi phải là số!",
        "number.integer": "Tuổi phải là số nguyên!",
        "number.min": "Tuổi không được nhỏ hơn 0!",
      }),
      avatar: Joi.string().uri().disallow("").optional().messages({
        "string.uri": "Avatar phải là URL hợp lệ!",
        "string.disallow": "Avatar không được để trống!",
      }),
    }),
  }),
};

export default updateInfoSchema;
