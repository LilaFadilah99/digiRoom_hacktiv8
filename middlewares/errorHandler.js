const errorHandler = (err, request, response, next) => {
  let errCode;
  let errMessage;

  switch (err.name) {
    case "SequelizeValidationError":
      errCode = 400;
      errMessage = err.errors.map((el) => el.message);
      break;
    case "invalidToken":
      errCode = 400;
      errMessage = "access token is required";
      break;
    case "Email and Password is required":
      errCode = 401;
      errMessage = "Email and Password is required";
      break;
    case "invalidUser":
    case "TypeError":
      errCode = 401;
      errMessage = "Authenticate failed";
      break;
    case "JsonWebTokenError":
      errCode = 401;
      errMessage = "invalid token";
      break;
    case "Unauthenticated":
      errCode = 401;
      errMessage = "Unauthenticated User";
      break;
    case "Forbidden":
      errCode = 403;
      errMessage = "You Have No Acces!";
      break;
    case "NotFound":
      errCode = 404;
      errMessage = "Data Not Found!";
      break;

    default:
      errCode = 500;
      errMessage = "Internal Server Error";
  }

  response.status(errCode).json({ message: errMessage });
};

module.exports = errorHandler;
