const mongoose = require("mongoose");
const { Pet } = require("../../models/pets");
const { ctrlWrapper, HttpError } = require("../../helpers");

const removePet = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "Invalid Id" });
  }

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
