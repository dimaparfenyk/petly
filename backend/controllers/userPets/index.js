const { ctrlWrapper } = require("../../helpers");
const { addUserPet } = require("./addUserPets");

module.exports = { addUserPet: ctrlWrapper(addUserPet) };
