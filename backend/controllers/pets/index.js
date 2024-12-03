const { createPet } = require("./createPet.ctrl");
const { getAllPets } = require("./getAllpets.ctrl");
const { getPetById } = require("./getPetById.ctrl");
const { removePet } = require("./removePet.ctrl");
const { updatePet } = require("./updatePet.ctrl");
const { updatePetFavorite } = require("./updatePetFavorite.ctrl");

module.exports = {
  getAllPets,
  getPetById,
  createPet,
  updatePet,
  updatePetFavorite,
  removePet,
};
