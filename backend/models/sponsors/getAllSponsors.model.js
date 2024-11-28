const fs = require("fs/promises");
const path = require("path");

const pathToSponsors = path.join(__dirname, "../../", "db/data/sponsors.json");

const getAllSponsors = async () => {
  const res = await fs.readFile(pathToSponsors);
  return JSON.parse(res);
};

module.exports = getAllSponsors;
