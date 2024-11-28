const news = require("../../models/news");

const getAllNews = async (req, res) => {
  const data = await news.getAllNews();
  res.json(data);
};

module.exports = getAllNews;
