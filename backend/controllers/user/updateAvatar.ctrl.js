const { User } = require("../../models/user");
const { uploadFile } = require("../../helpers");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;

  const avatarURL = await uploadFile(req, "avatar-placeholder.png");
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.status(200).json({ avatarURL });
};

module.exports = updateAvatar;
