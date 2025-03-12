const { Pet } = require("../../models/pet");
const { User } = require("../../models/user");
const { ctrlWrapper, HttpError } = require("../../helpers");

const toggleFavoritePets = async (req, res) => {
  const { _id: userId } = req.user;
  const { id: petId } = req.params;

  const pet = await Pet.findById(petId);
  if (!pet) {
    throw HttpError(404, "Pet not found");
  }

  const user = await User.findById(userId);
  if (!user) {
    throw HttpError(404, "User not found");
  }

  let updatedPet;
  let isFavorite;

  if (pet.favoritedBy.includes(userId)) {
    updatedPet = await Pet.findByIdAndUpdate(
      petId,
      { $pull: { favoritedBy: userId } },
      { new: true }
    );
    isFavorite = false;
  } else {
    updatedPet = await Pet.findByIdAndUpdate(
      petId,
      { $addToSet: { favoritedBy: userId } },
      { new: true }
    );
    isFavorite = true;
  }

  return res.status(200).json({
    message: isFavorite
      ? "Pet added to favorites"
      : "Pet removed from favorites",
    pet: updatedPet,
  });
};

module.exports = { toggleFavoritePets: ctrlWrapper(toggleFavoritePets) };
