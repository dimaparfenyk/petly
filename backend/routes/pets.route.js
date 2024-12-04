const express = require("express");
const {
  getAllPets,
  getPetById,
  createPet,
  updatePet,
  removePet,
  updatePetFavorite,
} = require("../controllers/pets");
const { validateBody, isValidId, authenticate } = require("../middlewars");
const { schemas } = require("../models/pet");

const petsRouter = express.Router();

petsRouter.get("/", authenticate, getAllPets);
petsRouter.get("/:id", authenticate, isValidId, getPetById);
petsRouter.post("/", authenticate, validateBody(schemas.addSchema), createPet);
petsRouter.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  updatePet
);
petsRouter.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  updatePetFavorite
);
petsRouter.delete("/:id", authenticate, isValidId, removePet);

module.exports = petsRouter;
