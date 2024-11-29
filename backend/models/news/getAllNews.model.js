const fs = require("fs/promises");
const path = require("path");
const newsFilePath = path.join(__dirname, "../../", "db/data/news.json");

const getAllNews = async () => {
  const result = await fs.readFile(newsFilePath);
  return JSON.parse(result);
};

module.exports = getAllNews;
