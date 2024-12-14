const express = require("express");
const {
  getAllPets,
  getPetById,
  createPet,
  updatePet,
  removePet,
} = require("../controllers/pets");
const {
  validateBody,
  isValidId,
  authenticate,
  upload,
} = require("../middlewars");
const { schemas } = require("../models/pet");

const petsRouter = express.Router();

petsRouter.get("/", authenticate, getAllPets);
petsRouter.get("/:id", authenticate, isValidId, getPetById);
petsRouter.post(
  "/",
  authenticate,
  upload.single("petImgUrl"),
  validateBody(schemas.addSchema),
  createPet
);
petsRouter.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  updatePet
);

petsRouter.delete("/:id", authenticate, isValidId, removePet);

module.exports = petsRouter;
