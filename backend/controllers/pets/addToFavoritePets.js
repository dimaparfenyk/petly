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

  if (user.favorites.includes(petId)) {
    await User.findByIdAndUpdate(
      userId,
      { $pull: { favorites: petId } },
      { new: true, select: "favorites" }
    );

    await Pet.findByIdAndUpdate(petId, {
      $pull: { "owner.favorites": userId },
    });

    return res.status(200).json({
      message: "Pet removed from favorites",
      favorites: user.favorites.filter((id) => id.toString() !== petId),
    });
  }

  const updatedUser = await User.findByIdAndUpdate(
    userId,
    { $addToSet: { favorites: petId } },
    { new: true, select: "favorites" }
  );

  await Pet.findByIdAndUpdate(petId, {
    $addToSet: { "owner.favorites": userId },
  });

  res.status(200).json({
    message: "Pet added to favorites",
    favorites: updatedUser.favorites,
  });
};

module.exports = { toggleFavoritePets: ctrlWrapper(toggleFavoritePets) };
