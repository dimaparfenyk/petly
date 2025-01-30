const { Pet } = require("../../models/pet");
const { HttpError, ctrlWrapper } = require("../../helpers");

const getPetsByCategory = async (req, res) => {
  const { category } = req.params;

  const data = await Pet.find({ status: category });
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(data);
};

module.exports = { getPetsByCategory: ctrlWrapper(getPetsByCategory) };
