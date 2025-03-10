const { Pet } = require("../../models/pet");
const { ctrlWrapper, HttpError } = require("../../helpers");

const removePet = async (req, res) => {
  const { id } = req.params;

  const data = await Pet.findByIdAndDelete(id);

  if (!data) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json({
    message: "Data successfully deleted",
  });
  // res.status(204).send()
};

module.exports = { removePet: ctrlWrapper(removePet) };
