const { toggleFavoritePets } = require("./toggleFavoritePets.ctrl");
const { createPet } = require("./createPet.ctrl");
const { getAllPets } = require("./getAllpets.ctrl");
const { getFavoritePets } = require("./getFavoritePets.ctrl");
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
  getFavoritePets,
  createPet,
  updatePet,
  toggleFavoritePets,
  removePet,
};
