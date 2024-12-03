const { Pet } = require("../../models/pet");
const { ctrlWrapper } = require("../../helpers");

const createPet = async (req, res) => {
  const result = await Pet.create({ ...req.body });
  res.status(201).json({ message: "Pet's data successfully created", result });
};

module.exports = { createPet: ctrlWrapper(createPet) };
