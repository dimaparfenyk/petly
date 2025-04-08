const { Userpet } = require("../../models/userPet");
const { User } = require("../../models/user");
const { uploadFile } = require("../../helpers");

const addUserPet = async (req, res) => {
  const { _id } = req.user;

  const petImgUrl = await uploadFile(req, "pet-avatar.png");

  const userPet = { ...req.body, petImgUrl, owner: _id };

  const result = await new Userpet(userPet).save();
  const user = await User.findByIdAndUpdate(
    _id,
    {
      $push: { myPets: result._id },
    },
    { new: true }
  );

  if (!result || !user) throw HttpError(404, "Not found");

  res.status(200).json(result);
};

module.exports = { addUserPet };
