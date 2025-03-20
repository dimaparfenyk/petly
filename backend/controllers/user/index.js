const { ctrlWrapper } = require("../../helpers");
const getCurrent = require("./getCurrent.ctrl");
const getUserDetails = require("./getUserDetalls.ctrl");
const login = require("./login.ctrl");
const logout = require("./logout.ctrl");
const register = require("./register.ctrl");
const updateAvatar = require("./updateAvatar.ctrl");
const updateUser = require("./updateUser.ctrl");

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
  getUserDetails: ctrlWrapper(getUserDetails),
  updateAvatar: ctrlWrapper(updateAvatar),
  updateUser: ctrlWrapper(updateUser),
};
