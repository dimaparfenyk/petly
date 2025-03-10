const path = require("path");
const { Pet } = require("../../models/pet");
const { ctrlWrapper, uploadFile } = require("../../helpers");

const petsImgDir = path.join(__dirname, "../../../frontend/public/pets");

const createPet = async (req, res) => {
  const { _id } = req.user;
  // const { _id, city, email, phone, favorites } = req.user;
  // const owner = { _id, city, email, phone, favorites };

  const petImgUrl = req.file
    ? await uploadFile(req, petsImgDir, "pets")
    : path.join("pets", "pet-avatar.png");

  const result = await Pet.create({ ...req.body, owner: _id, petImgUrl });
  res.status(201).json({ message: "Pet's data successfully created", result });
};

module.exports = { createPet: ctrlWrapper(createPet) };
