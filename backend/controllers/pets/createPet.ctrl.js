const { Pet } = require("../../models/pet");
const { ctrlWrapper } = require("../../helpers");

const createPet = async (req, res) => {
  const { _id: owner } = req.user;

  const result = await Pet.create({ ...req.body, owner });
  res.status(201).json({ message: "Pet's data successfully created", result });
};

module.exports = { createPet: ctrlWrapper(createPet) };
