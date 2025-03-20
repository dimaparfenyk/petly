const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");

const getUserDetails = async (req, res) => {
  const { _id } = req.user;

  const user = await User.findById(_id)
    .select("name email city phone avatarURL")
    .populate({
      path: "myPets",
      select: "name breed petImgUrl birth comments",
      options: { lean: true },
    })
    .lean();

  if (!user) {
    throw HttpError(404, "User not found");
  }

  res.json(user);
};

module.exports = getUserDetails;
