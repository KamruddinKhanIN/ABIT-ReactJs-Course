const responses = require("../../utility/responses");
const userServices = require("./user.service");

const profile = async (req, res, next) => {
  try {
    const result = await userServices.profile(req);

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

module.exports = { profile };
