const path = require("path");
const { User } = require("../../models/user");
const { uploadFile } = require("../../helpers");

const avatarDir = path.join(__dirname, "../../../frontend/public/user");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const avatarURL = await uploadFile(req, avatarDir, "user");
  console.log(avatarURL);
  await User.findByIdAndUpdate(_id, { avatarURL });
  res.json({ avatarURL });
};

module.exports = updateAvatar;
