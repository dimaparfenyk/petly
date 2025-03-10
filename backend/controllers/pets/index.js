const { toggleFavoritePets } = require("./addToFavoritePets");
const { createPet } = require("./createPet.ctrl");
const { getAllPets } = require("./getAllpets.ctrl");
const { getPetById } = require("./getPetById.ctrl");
const { getPetByOwner } = require("./getPetByOwner.ctrl");
const { getPetsByCategory } = require("./getPetsByCategory");
const { removePet } = require("./removePet.ctrl");
const { updatePet } = require("./updatePet.ctrl");

module.exports = {
  getAllPets,
  getPetsByCategory,
  getPetByOwner,
  getPetById,
  createPet,
  updatePet,
  toggleFavoritePets,
  removePet,
};
