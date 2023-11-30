const responses = require("../../utility/responses");
const userServices = require("../user/user.service");

const register = async (req, res, next) => {
  try {
    const result = await userServices.register(req);

    if (result.status && result.status !== 200) {
      return responses.customResponse(
        res,
        false,
        result.status,
        result.message
      );
    }

    return responses.successResponse(res, result.data);
  } catch (error) {
    console.log(error);
    return responses.internalFailureResponse(res, error);
  }
};

const login = async (req, res, next) => {
  try {
    const result = await userServices.login(req);

    if (result.status && result.status !== 200) {
      return responses.customResponse(
        res,
        false,
        result.status,
        result.message
      );
    }

    return responses.successResponse(res, result.data);
  } catch (error) {
    console.log(error);
    return responses.internalFailureResponse(res, error);
  }
};

module.exports = { register, login };
