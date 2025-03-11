const { User } = require("../../models/user");
const { HttpError, ctrlWrapper } = require("../../helpers");

const getFavoritePets = async (req, res) => {
  const { _id } = req.user;

  const user = await User.findById(_id).populate("favorites");

  if (!user) {
    throw HttpError(404, "User not found");
  }

  const favoritePets = user.favorites;

  if (!favoritePets || favoritePets.length === 0) {
    return res.status(404).json({ message: "No favorite pets found" });
  }

  res.status(200).json(favoritePets);
};

module.exports = { getFavoritePets: ctrlWrapper(getFavoritePets) };
