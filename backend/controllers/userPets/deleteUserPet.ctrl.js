const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");
const { Userpet } = require("../../models/userPet");

const deleteUserPet = async (req, res) => {
  const { id } = req.params;

  const pet = await Userpet.findByIdAndDelete(id);

  if (!pet) {
    throw HttpError(404, "Not found");
  }

  await User.findByIdAndUpdate(
    pet.owner,
    { $pull: { myPets: id } },
    { new: true }
  );

  res.status(200).json({
    message: "Pet data successfully deleted",
  });
};

module.exports = { deleteUserPet };
