const { Pet } = require("../../models/pet");
const { HttpError, ctrlWrapper } = require("../../helpers");

const getFavoritePets = async (req, res) => {
  const { _id: userId } = req.user;

  if (!userId) {
    throw HttpError(400, "User is not authenticated");
  }

  const favoritePets = await Pet.find({ favoritedBy: userId }).populate(
    "owner",
    "email phone city"
  );

  res.status(200).json(favoritePets);
};

module.exports = { getFavoritePets: ctrlWrapper(getFavoritePets) };
