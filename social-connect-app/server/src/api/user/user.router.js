const router = require("express").Router({ mergeParams: true });

const userController = require("./user.controller");

router.get("/profile", userController.profile);

module.exports = router;
