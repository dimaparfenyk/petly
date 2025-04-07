const { User } = require("../../models/user");
const { uploadFile } = require("../../helpers");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  // cloudinary.uploader.upload(req.file.path, async (err, result) => {
  //   if (err) throw HttpError(500, "Error");
  const avatarURL = await uploadFile(req, "avatar-placeholder.png");

  await User.findByIdAndUpdate(_id, { avatarURL });

  res.status(200).json({ avatarURL });
  // });
};

module.exports = updateAvatar;

// ctrl if save img to own server
// const avatarDir =
//   process.env.NODE_ENV === "production"
//     ? path.join(__dirname, "../../../frontend/dist")
//     : path.join(__dirname, "../../../frontend/public");

// const updateAvatar = async (req, res) => {
//   const { _id } = req.user;
//   const avatarURL = await uploadFile(req, avatarDir);
//   await User.findByIdAndUpdate(_id, { avatarURL });
//   res.json({ avatarURL });
// };
