const path = require("path");
const { Pet } = require("../../models/pet");
const { ctrlWrapper, uploadFile } = require("../../helpers");

const petsImgDir = path.join(__dirname, "../../public/pets");

const createPet = async (req, res) => {
  const { _id: owner } = req.user;
  const petImgUrl = req.file
    ? await uploadFile(req, petsImgDir, "pets")
    : path.join("pets", "pet-avatar.png");

  const result = await Pet.create({ ...req.body, owner, petImgUrl });
  res.status(201).json({ message: "Pet's data successfully created", result });
};

module.exports = { createPet: ctrlWrapper(createPet) };
