import Joi from "joi"

export const commentSchema = {
  body: Joi.object({
    content: Joi.string().trim().required().messages({
      "string.empty": "Nội dung bình luận không được để trống!",
      "any.required": "Nội dung bình luận là bắt buộc!",
    }),
  }),
}
