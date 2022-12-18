var express = require("express");
const router = express.Router();

const userController = require("../controllers/userController.js");
const postController = require("../controllers/postController.js");
const commentController = require("../controllers/commentController.js");

//user routes

router.get("/user/create", userController.user_create_get);

router.post("/user/create", userController.user_create_post);

router.get("/user/:id", userController.user_detail);

module.exports = router;

//post routes

router.post("/post/create", postController.post_create_post);

//conmment routes

router.post("/comment/create", commentController.comment_create_post);