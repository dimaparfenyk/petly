const express = require("express");
const {
  addUserPet,
  deleteUserPet,
  getUserHomePets,
} = require("../controllers/userPets");
const { authenticate, upload, validateBody } = require("../middlewars");
const { schemas } = require("../models/userPet");

const userRouter = express.Router();

userRouter.get("/homepets", authenticate, getUserHomePets);

userRouter.post(
  "/homepets",
  authenticate,
  upload.single("petImgUrl"),
  validateBody(schemas.addSchema),
  addUserPet
);

userRouter.delete("/homepets/:id", authenticate, deleteUserPet);

module.exports = userRouter;
