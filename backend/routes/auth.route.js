const express = require("express");
const { register, login, getCurrent, logout } = require("../controllers/auth");
const { validateBody, authenticate } = require("../middlewars");
const { schemas } = require("../models/user");

const authRouter = express.Router();

authRouter.post(
  "/register",
  validateBody(schemas.registerUserSchema),
  register
);

authRouter.post("/login", validateBody(schemas.loginUserSchema), login);

authRouter.get("/current", authenticate, getCurrent);

authRouter.post("/logout", authenticate, logout);

module.exports = authRouter;
