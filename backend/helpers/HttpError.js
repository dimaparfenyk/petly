const errorsMessageList = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  409: "Conflict",
  500: "Server error",
};

const HttpError = (status, message = errorsMessageList[status]) => {
  const err = new Error(message);
  err.status = status;
  return err;
};

module.exports = HttpError;
