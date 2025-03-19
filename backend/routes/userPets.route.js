const express = require("express");
const { addUserPet } = require("../controllers/userPets/addUserPets");
const { authenticate, upload, validateBody } = require("../middlewars");
const { schemas } = require("../models/userPet");

const userRouter = express.Router();

userRouter.post(
  "/homepets",
  authenticate,
  upload.single("petImgUrl"),
  validateBody(schemas.addSchema),
  addUserPet
);

module.exports = userRouter;
