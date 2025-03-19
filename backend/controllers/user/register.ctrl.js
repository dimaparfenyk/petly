const bcrypt = require("bcrypt");
const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email is already in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const { name: userName, email: userEmail } = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL: "/user/avatar-placeholder.png",
  });

  res.status(201).json({
    name: userName,
    email: userEmail,
  });
};

module.exports = register;
