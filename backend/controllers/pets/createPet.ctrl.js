const path = require("path");
const fs = require("fs/promises");
const { Pet } = require("../../models/pet");
const { ctrlWrapper } = require("../../helpers");

const petsImgDir = path.join(__dirname, "../../../frontend/public/pets");

const createPet = async (req, res) => {
  const { _id: owner } = req.user;

  const { path: tempUpload, originalname } = req.file;
  const resultUpload = path.join(petsImgDir, originalname);
  await fs.rename(tempUpload, resultUpload);
  const petImgUrl = path.join("pets", originalname);

  const result = await Pet.create({ ...req.body, owner, petImgUrl });
  res.status(201).json({ message: "Pet's data successfully created", result });
};

module.exports = { createPet: ctrlWrapper(createPet) };
