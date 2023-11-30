const router = require("express").Router({ mergeParams: true });

const postController = require("./post.controller");

router.post("/", postController.post);
router.get("/", postController.getPosts);
router.post("/like", postController.like);

module.exports = router;
