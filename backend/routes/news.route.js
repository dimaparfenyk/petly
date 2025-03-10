const express = require("express");
const ctrl = require("../controllers/news");

const newsRouter = express.Router();

newsRouter.get("/", ctrl.getAllNews);

module.exports = newsRouter;
