const { ctrlWrapper } = require("../../helpers");
const { Sponsors } = require("../../models/sponsor");

const getAllSponsors = async (req, res) => {
  const data = await Sponsors.find();
  res.status(200).json(data);
};

module.exports = { getAllSponsors: ctrlWrapper(getAllSponsors) };
