const jwt = require("jsonwebtoken");

const checkToken = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const data = jwt.verify(token, process.env.SECRET_KEY);
    if (data) {
      req.userId = data.id;
      next();
    } else {
      return res.status(401).json({
        message: "something wrong with token",
      });
    }
  } catch (err) {
    return res.status(401).json({
      message: "something wrong with token",
    });
  }
};

module.exports = checkToken;
