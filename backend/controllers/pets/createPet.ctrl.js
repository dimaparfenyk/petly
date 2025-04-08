const { Pet } = require("../../models/pet");
const { ctrlWrapper, uploadFile } = require("../../helpers");

const createPet = async (req, res) => {
  const { _id, city, phone, email } = req.user;

  const petImgUrl = await uploadFile(req, "pet-avatar.png");

  const pet = new Pet({
    ...req.body,
    owner: { _id, city, phone, email },
    petImgUrl,
  });

  await pet.save();

  res
    .status(201)
    .json({ message: "Pet's data successfully created", result: pet });
};

module.exports = { createPet: ctrlWrapper(createPet) };
