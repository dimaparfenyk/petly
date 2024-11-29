const mongoose = require("mongoose");
const { Pet } = require("../../models/pets");
const { ctrlWrapper, HttpError } = require("../../helpers");

const updatePet = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "Invalid Id" });
  }

  const result = await Pet.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json({
    result,
    message: "Pet's data successfully updated",
  });
};

module.exports = { updatePet: ctrlWrapper(updatePet) };
