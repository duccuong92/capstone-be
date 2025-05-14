export const responseSuccess = (data = null, message = `Thành công`, statusCode = 200, doc = ``) => {
    return {
       status: `success`,
       statusCode: statusCode,
       message: message,
       data: data,
       doc: `http://localhost:3069/api-docs/${doc}`,
    };
 };
 
 export const responseError = (message = `Internal Server Error`, statusCode = 500, stack = null) => {
    return {
       status: `error`,
       statusCode: statusCode,
       message: message,
       stack: stack,
       doc: "http://localhost:3069/api-docs/",
    };
 };
 