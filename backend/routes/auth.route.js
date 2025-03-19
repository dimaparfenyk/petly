const express = require("express");
const {
  register,
  login,
  getCurrent,
  logout,
  updateAvatar,
  getUserDetails,
} = require("../controllers/user");
const { validateBody, authenticate, upload } = require("../middlewars");
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

// authRouter.patch(
//   "/user",
//   authenticate,
//   validateBody(schemas.updateUserSchema),
//   updateUser
// );

authRouter.get("/user", authenticate, getUserDetails);

authRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  updateAvatar
);

module.exports = authRouter;
