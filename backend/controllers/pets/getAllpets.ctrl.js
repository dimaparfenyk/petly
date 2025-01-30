const { ctrlWrapper } = require("../../helpers");
const { Pet } = require("../../models/pet");

const getAllPets = async (req, res) => {
  const { _id } = req.user;
  console.log(req.user);

  const data = await Pet.find({ "owner._id": _id });
  res.status(200).json(data);
};

module.exports = { getAllPets: ctrlWrapper(getAllPets) };
