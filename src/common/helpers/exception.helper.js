import { statusCodes } from "./status-code.helper";

export class BadRequestException extends Error {
   constructor(message = `BadRequestException`) {
      super(message);
      this.statusCode = statusCodes.BAD_REQUEST;
   }
}

export class UnAuthorizedException extends Error {
   constructor(message = `UnAuthorizedException`) {
      super(message);
      this.statusCode = statusCodes.UNAUTHORIZED;
   }
}

export class ForbiddenException extends Error {
   constructor(message = `ForbiddenException`) {
      super(message);
      this.statusCode = statusCodes.FORBIDDEN;
   }
}

export class NotFoundException extends Error {
   constructor(message = `NotFoundException`) {
     super(message)
     this.statusCode = statusCodes.NOT_FOUND
   }
 }
 