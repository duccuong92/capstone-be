import authPaths from "./paths/auth.path";

const swaggerDocument = {
  openapi: "3.1.1",
  info: {
    title: "Capstone Express API",
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:3069/api",
      description: "Local Server",

    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  paths: {
    ...authPaths
  }

};

export default swaggerDocument;
