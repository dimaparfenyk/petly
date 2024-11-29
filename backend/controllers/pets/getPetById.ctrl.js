const mongoose = require("mongoose");
const { Pet } = require("../../models/pets");
const { HttpError, ctrlWrapper } = require("../../helpers");

const getPetById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "Invalid Id" });
  }

  const data = await Pet.findById(id);
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({ data });
};

module.exports = { getPetById: ctrlWrapper(getPetById) };
