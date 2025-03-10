const { Pet } = require("../../models/pet");
const { HttpError, ctrlWrapper } = require("../../helpers");

const getPetByOwner = async (req, res) => {
  const { _id } = req.user;

  const data = await Pet.find({ owner: _id });

  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(data);
};

module.exports = { getPetByOwner: ctrlWrapper(getPetByOwner) };
