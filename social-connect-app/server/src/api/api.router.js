const router = require("express").Router({ mergeParams: true });
const checkToken = require("../middlewares/checkToken");

router.use("/auth", require("./auth/auth.router"));
router.use("/user", checkToken, require("./user/user.router"));
router.use("/post", checkToken, require("./post/post.router"));

module.exports = router;
