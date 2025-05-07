import { BadRequestException, ForbiddenException, UnAuthorizedException } from "./exception.helper";
import jwt from "jsonwebtoken";
import { responseError } from "./response.helper";
import { MulterError } from "multer";

export const handleError = (err, req, res, next) => {
     //   (new Error())
     console.log(err);

     let statusCode = err.statusCode || 500;
  
     if (err instanceof jwt.JsonWebTokenError) {
        statusCode = new UnAuthorizedException().statusCode; // 401 => FE logout
     }
     if (err instanceof jwt.TokenExpiredError) {
        statusCode = new ForbiddenException().statusCode; // 403 => FE refresh token
     }
     if (err instanceof MulterError) {
        statusCode = new BadRequestException().statusCode;
     }
  

     const response = responseError(err.message, statusCode, err.stack);
     res.status(response.statusCode).json(response);
};
