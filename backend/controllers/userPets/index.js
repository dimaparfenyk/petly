const { ctrlWrapper } = require("../../helpers");
const { addUserPet } = require("./addUserPets.ctrl");
const { deleteUserPet } = require("./deleteUserPet.ctrl");
const { getUserHomePets } = require("./getUserHomePets");

module.exports = {
  addUserPet: ctrlWrapper(addUserPet),
  deleteUserPet: ctrlWrapper(deleteUserPet),
  getUserHomePets: ctrlWrapper(getUserHomePets),
};
