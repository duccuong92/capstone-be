const authPath = {
  "/auth/register": {
    post: {
      tags: ["Auth"],
      summary: "Đăng ký tài khoản",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                fullName: {
                  type: "string",
                  example: "Nhập họ tên vào đây",
                },

                email: {
                  type: "string",
                  format: "email",
                  example: "Nhập email vào đây",
                },
                password: {
                  type: "string",
                  example: "Nhập mật khẩu vào đây",
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "Đăng ký tài khoản thành công",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: {
                    type: "string",
                    example: "success",
                  },
                  statusCode: {
                    type: "integer",
                    example: 201,
                  },
                  message: {
                    type: "string",
                    example: "Đăng ký tài khoản thành công",
                  },
                  data: {
                    type: "object",
                    properties: {
                      id: { type: "integer", example: 1 },
                      fullName: { type: "string", example: "Nguyen Van A" },
                      email: {
                        type: "string",
                        example: "nguyenvana@example.com",
                      },
                      age: { type: "number", example: null },
                      avatar: {
                        type: "string",
                        example: null,
                      },
                      deletedBy: { type: "integer", example: 0 },
                      isDeleted: { type: "boolean", example: false },
                      deletedAt: {
                        type: "string",
                        format: "date-time",
                        nullable: true,
                        example: null,
                      },
                      createdAt: {
                        type: "string",
                        format: "date-time",
                        example: "2025-04-29T12:00:00.000Z",
                      },
                      updatedAt: {
                        type: "string",
                        format: "date-time",
                        example: "2025-04-29T12:00:00.000Z",
                      },
                    },
                  },
                  docs: {
                    type: "string",
                    example:
                      "http://localhost:3069/api-docs/#/Auth/post_auth_register",
                  },
                },
              },
            },
          },
        },
      },
    },
  },

  "/auth/login": {
    post: {
      tags: ["Auth"],
      summary: "Đăng nhập tài khoản",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: {
                  type: "string",
                  format: "email",
                  example: "Nhập email vào đây",
                },
                password: {
                  type: "string",
                  example: "Nhập mật khẩu vào đây",
                },
              },
            },
          },
        },
      },
      responses: {
        "200": {
          description: "Đăng nhập tài khoản thành công",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: {
                    type: "string",
                    example: "success",
                  },
                  statusCode: {
                    type: "integer",
                    example: 200,
                  },
                  message: {
                    type: "string",
                    example: "Đăng nhập tài khoản thành công",
                  },
                  data: {
                    type: "object",
                    properties: {
                      accessToken: {
                        type: "string",
                        example:
                          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE0LCJpYXQiOjE3NDU5ODg4NzYsImV4cCI6MTc0NjA3NTI3Nn0.i9d1QtyCD5UiNWQvP0IVNk7tA6amGclc9iY9Igmyaj8",
                      },
                      refreshToken: {
                        type: "string",
                        example:
                          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE0LCJpYXQiOjE3NDA3NTI3Nn0.uzxIPimMC1htLfQVjQ1HEmXz2cgRJlBVI96yjUaot4k",
                      },
                    },
                  },
                  docs: {
                    type: "string",
                    example:
                      "http://localhost:3069/api-docs/#/Auth/post_auth_login",
                  },
                },
              },
            },
          },
        },
      },
    },
  },

  "/auth/refresh-token": {
    post: {
      tags: ["Auth"],
      summary: "Làm mới token",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                accessToken: {
                  type: "string",
                  example: "Nhập access token vào đây",
                },
                refreshToken: {
                  type: "string",
                  example: "Nhập refresh token vào đây",
                },
              },
            },
          },
        },
      },
      responses: {
        "200": {
          description: "Làm mới token thành công",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: {
                    type: "string",
                    example: "success",
                  },
                  statusCode: {
                    type: "integer",
                    example: 200,
                  },
                  message: {
                    type: "string",
                    example: "Làm mới token thành công",
                  },
                  data: {
                    type: "object",
                    properties: {
                      accessToken: {
                        type: "string",
                        example:
                          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE0LCJpYXQiOjE3NDU5ODg4NzYsImV4cCI6MTc0NjA3NTI3Nn0.i9d1QtyCD5UiNWQvP0IVNk7tA6amGclc9iY9Igmyaj8",
                      },
                      refreshToken: {
                        type: "string",
                        example:
                          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE0LCJpYXQiOjE3NDU5ODg4NzYsImV4cCI6MTc0NjU5MzY3Nn0.uzxIPimMC1htLfQVjQ1HEmXz2cgRJlBVI96yjUaot4k",
                      },
                    },
                  },
                  docs: {
                    type: "string",
                    example:
                      "http://localhost:3069/api-docs/#/Auth/post_auth_refresh_token",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

export default authPath;
