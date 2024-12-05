const { ctrlWrapper } = require("../../helpers");
const { Pet } = require("../../models/pet");

const getAllPets = async (req, res) => {
  const { _id: owner } = req.user;

  const data = await Pet.find({ owner });
  res.status(200).json({ success: true, data });
};

module.exports = { getAllPets: ctrlWrapper(getAllPets) };
