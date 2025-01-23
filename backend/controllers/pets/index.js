const { createPet } = require("./createPet.ctrl");
const { getAllPets } = require("./getAllpets.ctrl");
const { getPetById } = require("./getPetById.ctrl");
const { getPetByOwner } = require("./getPetByOwner.ctrl");
const { removePet } = require("./removePet.ctrl");
const { updatePet } = require("./updatePet.ctrl");

module.exports = {
  getAllPets,
  getPetByOwner,
  getPetById,
  createPet,
  updatePet,
  removePet,
};
