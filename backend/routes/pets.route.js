const express = require("express");
const {
  getAllPets,
  getPetById,
  createPet,
  updatePet,
  removePet,
} = require("../controllers/pets");
const { validateBody } = require("../middlewars");
const { schemas } = require("../models/pets");

const petsRouter = express.Router();

petsRouter.get("/", getAllPets);
petsRouter.get("/:id", getPetById);
petsRouter.post("/", validateBody(schemas.addSchema), createPet);
petsRouter.put("/:id", validateBody(schemas.addSchema), updatePet);
petsRouter.delete("/:id", removePet);

module.exports = petsRouter;
