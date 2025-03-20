const express = require("express");
const {
  register,
  login,
  getCurrent,
  logout,
  updateUser,
  updateAvatar,
  getUserDetails,
} = require("../controllers/user");
const { validateBody, authenticate, upload } = require("../middlewars");
const { schemas } = require("../models/user");

const { registerUserSchema, loginUserSchema, updUserSchema } = schemas;

const authRouter = express.Router();

authRouter.post("/register", validateBody(registerUserSchema), register);

authRouter.post("/login", validateBody(loginUserSchema), login);

authRouter.get("/current", authenticate, getCurrent);

authRouter.post("/logout", authenticate, logout);

authRouter.patch(
  "/user",
  authenticate,
  validateBody(updUserSchema),
  updateUser
);

authRouter.get("/user", authenticate, getUserDetails);

authRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  updateAvatar
);

module.exports = authRouter;
