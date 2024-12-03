const { ctrlWrapper } = require("../../helpers");
const sponsors = require("../../models/sponsor");

const getAllSponsors = async (req, res) => {
  const data = await sponsors.getAllSponsors();
  res.json(data);
};

module.exports = { getAllSponsors: ctrlWrapper(getAllSponsors) };
