const responses = require("../../utility/responses");
const postServices = require("./post.service");

const post = async (req, res, next) => {
  try {
    const result = await postServices.post(req);

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

const getPosts = async (req, res, next) => {
  try {
    const result = await postServices.getPosts(req);

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

const like = async (req, res, next) => {
  try {
    const result = await postServices.like(req);

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

module.exports = { post, getPosts, like };
