const errorHandler = (error, request, response, next) => {
  let errCode;
  let errMessage;

  switch (error.name) {
    case "Email and Password is required":
      errCode = 401;
      errMessage = "Email and Password is required";
      break;
    default:
      errCode = 500;
      errMessage = "Internal Server Error";
  }
};

module.exports = errorHandler;
