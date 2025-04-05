const express = require("express");
const {
  getAllPets,
  getPetsByCategory,
  getPetByOwner,
  getPetById,
  getFavoritePets,
  createPet,
  toggleFavoritePets,
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

petsRouter.get("/", getAllPets);

petsRouter.get("/own", authenticate, getPetByOwner);

petsRouter.get("/favorite", authenticate, getFavoritePets);

petsRouter.get("/:category", getPetsByCategory);

petsRouter.get("/:category/:id", isValidId, getPetById);

petsRouter.post(
  "/",
  authenticate,
  upload.single("petImgUrl"),
  validateBody(schemas.addSchema),
  createPet
);

petsRouter.put("/favorite/:id", authenticate, isValidId, toggleFavoritePets);

petsRouter.delete("/:id", authenticate, isValidId, removePet);

module.exports = petsRouter;
