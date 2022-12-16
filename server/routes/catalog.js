var express = require("express");
const router = express.Router();

const userController = require("../controllers/userController.js");

//user routes

router.get("/user/create", userController.user_create_get);

router.post("/user/create", userController.user_create_post);

router.get("/user/:id", userController.user_detail);

module.exports = router;