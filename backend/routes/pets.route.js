const express = require("express");
const {
  getAllPets,
  getPetsByCategory,
  getPetByOwner,
  getPetById,
  createPet,
  toggleFavoritePets,
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

petsRouter.get("/:category", getPetsByCategory);
petsRouter.get("/:category/:id", isValidId, getPetById);

petsRouter.get("/:id", authenticate, isValidId, getPetByOwner);

petsRouter.post(
  "/",
  authenticate,
  upload.single("petImgUrl"),
  validateBody(schemas.addSchema),
  createPet
);

petsRouter.put(
  "/:id/favorite",
  authenticate,
  isValidId,
  // validateBody(schemas.addSchema),
  toggleFavoritePets
);

petsRouter.delete("/:id", authenticate, isValidId, removePet);

module.exports = petsRouter;
