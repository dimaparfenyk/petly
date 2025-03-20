const path = require("path");
const { Userpet } = require("../../models/userPet");
const { uploadFile } = require("../../helpers");
const { User } = require("../../models/user");

const petsImgDir = path.join(__dirname, "../../../frontend/public/user/pets");

const addUserPet = async (req, res) => {
  const { _id } = req.user;

  const petImgUrl = req.file
    ? await uploadFile(req, petsImgDir)
    : "pet-avatar.png";

  const userPet = { ...req.body, petImgUrl, owner: _id };

  const result = await new Userpet(userPet).save();

  const user = await User.findByIdAndUpdate(
    _id,
    {
      $push: { myPets: result._id },
    },
    { new: true }
  );
  if (!result || !user) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json(result);
};

module.exports = { addUserPet };
