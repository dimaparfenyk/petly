const path = require("path");
const { Pet } = require("../../models/pet");
const { ctrlWrapper, uploadFile } = require("../../helpers");

const petsImgDir = path.join(__dirname, "../../../frontend/public/pets");

const createPet = async (req, res) => {
  const { _id, city, phone, email } = req.user;

  const petImgUrl = req.file
    ? await uploadFile(req, petsImgDir)
    : "pet-avatar.png";

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
