const express = require("express");
const {
  getAllPets,
  getPetById,
  createPet,
  updatePet,
  removePet,
  updatePetFavorite,
} = require("../controllers/pets");
const { validateBody, isValidId } = require("../middlewars");
const { schemas } = require("../models/pet");

const petsRouter = express.Router();

petsRouter.get("/", getAllPets);
petsRouter.get("/:id", isValidId, getPetById);
petsRouter.post("/", validateBody(schemas.addSchema), createPet);
petsRouter.put("/:id", isValidId, validateBody(schemas.addSchema), updatePet);
petsRouter.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  updatePetFavorite
);
petsRouter.delete("/:id", isValidId, removePet);

module.exports = petsRouter;
