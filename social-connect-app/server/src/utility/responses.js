const successResponse = (res, data) => {
  const result = {
    isSuccess: "true",
    message: "success",
    code: 200,
    data: data,
  };
  return res.status(200).json(result);
};

const notFoundResponse = (res, message) => {
  const result = {
    isSuccess: "false",
    message: message,
    code: 404,
    data: null,
  };
  return res.status(404).json(result);
};

const internalFailureResponse = (res, data) => {
  const result = {
    isSuccess: "false",
    message: "internal server error",
    code: 500,
    data: data,
  };
  return res.status(500).json(result);
};

const authFailureResponse = (res, message) => {
  const result = {
    isSuccess: "false",
    message: message,
    code: 401,
    data: null,
  };
  return res.status(401).json(result);
};

const conflictResponse = (res, message) => {
  const result = {
    isSuccess: "false",
    message: message,
    code: 409,
    data: null,
  };
  return res.status(409).json(result);
};

const badRequestResponse = (res, message) => {
  const result = {
    isSuccess: "false",
    message: message,
    code: 400,
    data: null,
  };
  return res.status(400).json(result);
};

const customResponse = (res, isSuccess, code, message, data = null) => {
  const result = {
    isSuccess: isSuccess,
    message: message,
    code: code,
    data,
  };
  return res.status(code).json(result);
};

module.exports = {
  successResponse,
  internalFailureResponse,
  badRequestResponse,
  authFailureResponse,
  notFoundResponse,
  conflictResponse,
  customResponse,
};
