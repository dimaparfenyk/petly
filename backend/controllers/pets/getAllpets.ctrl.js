const { ctrlWrapper } = require("../../helpers");
const { Pet } = require("../../models/pet");

const getAllPets = async (req, res) => {
  // const { _id: owner } = req.user;

  const data = await Pet.find();
  res.status(200).json(data);
};

module.exports = { getAllPets: ctrlWrapper(getAllPets) };
