var express = require("express");
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;

const userController = require("../controllers/userController.js");
const postController = require("../controllers/postController.js");
const commentController = require("../controllers/commentController.js");


//index
router.get("/", (req, res) => {
    res.json({user: req.user});
  });

//user routes

router.get("/user/create", userController.user_create_get);

router.post("/user/create", userController.user_create_post);

router.get("/user", userController.user_list);

router.get("/user/:id", userController.user_detail);

module.exports = router;

//post routes

router.post("/post/create", postController.post_create_post);

router.get("/post/detail", postController.post_detail);

router.delete("/post/:id/delete", postController.post_delete);

//comment routes

router.post("/comment/create", commentController.comment_create_post);

//login

router.post(
    "/login",
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/"
    })
  );
