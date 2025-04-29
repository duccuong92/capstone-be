export const validate = (schema) => {
  return (req, res, next) => {
    try {
      if (schema.body) {
        const { error } = schema.body.validate(req.body, { abortEarly: false });
        if (error) throw error;
      }

      if (schema.query) {
        const { error } = schema.query.validate(req.query, {
          abortEarly: false,
        });
        if (error) throw error;
      }

      if (schema.params) {
        const { error } = schema.params.validate(req.params, {
          abortEarly: false,
        });
        if (error) throw error;
      }

      next();
    } catch (error) {
      const formattedErrors = error.details.map((detail) => ({
        field: detail.path.join("."),
        message: detail.message,
      }));

      return res.status(400).json({
        message: "Validation Error",
        errors: formattedErrors,
      });
    }
  };
};
