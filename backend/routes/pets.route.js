const express = require("express");
const {
  getAllPets,
  getPetById,
  createPet,
  updatePet,
  removePet,
} = require("../controllers/pets");

const petsRouter = express.Router();

petsRouter.get("/", getAllPets);
petsRouter.get("/:id", getPetById);
petsRouter.post("/", createPet);
petsRouter.put("/:id", updatePet);
petsRouter.delete("/:id", removePet);

module.exports = petsRouter;
