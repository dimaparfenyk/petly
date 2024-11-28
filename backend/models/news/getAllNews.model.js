const fs = require("fs/promises");
const path = require("path");
const newsFilePath = path.join(__dirname, "../../", "db/data/news.json");

const getAllNews = async () => {
  try {
    const res = await fs.readFile(newsFilePath);
    return JSON.parse(res);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getAllNews;
