const express = require("express");
const { register, login } = require("../controllers/auth");
const { validateBody } = require("../middlewars");
const { schemas } = require("../models/user");

const authRouter = express.Router();

authRouter.post(
  "/register",
  validateBody(schemas.registerUserSchema),
  register
);

authRouter.post("/login", validateBody(schemas.loginUserSchema), login);

module.exports = authRouter;
