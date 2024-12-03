const { Pet } = require("../../models/pet");
const { ctrlWrapper, HttpError } = require("../../helpers");

const updatePetFavorite = async (req, res) => {
  const { id } = req.params;

  const result = await Pet.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json({
    result,
    message: "Pet's data successfully updated",
  });
};

module.exports = { updatePetFavorite: ctrlWrapper(updatePetFavorite) };
