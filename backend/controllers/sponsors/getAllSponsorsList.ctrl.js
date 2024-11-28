const sponsors = require("../../models/sponsors");

const getAllSponsors = async (req, res) => {
  try {
    const data = await sponsors.getAllSponsors();
    res.json(data);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getAllSponsors;
