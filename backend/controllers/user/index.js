const { ctrlWrapper } = require("../../helpers");
const getCurrent = require("./getCurrent");
const login = require("./login.ctrl");
const logout = require("./logout");
const register = require("./register.ctrl");
const updateAvatar = require("./updateAvatar");
const updateUser = require("./updateUser");

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
  updateAvatar: ctrlWrapper(updateAvatar),
  updateUser: ctrlWrapper(updateUser),
};
