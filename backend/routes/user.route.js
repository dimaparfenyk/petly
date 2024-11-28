const express = require("express");
const { register } = require("../controllers/auth");

const userRouter = express.Router();

userRouter.post("/register", register);

module.exports = userRouter;
