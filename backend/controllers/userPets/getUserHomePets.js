const { HttpError } = require("../../helpers");
const { Userpet } = require("../../models/userPet");

const getUserHomePets = async (req, res) => {
  const { _id } = req.user;
  const data = await Userpet.find({ owner: _id });

  if (!data) throw HttpError(404, "Not found");

  res.status(200).json(data);
};

module.exports = { getUserHomePets };
