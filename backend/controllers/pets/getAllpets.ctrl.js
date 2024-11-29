const { ctrlWrapper } = require("../../helpers");
const { Pet } = require("../../models/pets");

const getAllPets = async (req, res) => {
  const data = await Pet.find({});
  res.status(200).json({ success: true, data });
};

module.exports = { getAllPets: ctrlWrapper(getAllPets) };
