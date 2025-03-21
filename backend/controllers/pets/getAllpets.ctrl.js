const { ctrlWrapper } = require("../../helpers");
const { Pet } = require("../../models/pet");

const getAllPets = async (req, res) => {
  const data = await Pet.find().populate("owner", "city email phone");
  console.log(data);
  res.status(200).json(data);
};

module.exports = { getAllPets: ctrlWrapper(getAllPets) };
