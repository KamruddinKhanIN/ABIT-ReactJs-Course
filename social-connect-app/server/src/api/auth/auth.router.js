const router = require("express").Router({ mergeParams: true });

const authController = require("./auth.controller");

router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;
