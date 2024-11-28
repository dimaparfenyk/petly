const express = require("express");
const ctrl = require("../controllers/sponsors");

const sponsorsRouter = express.Router();

sponsorsRouter.get("/", ctrl.getAllSponsors);

module.exports = sponsorsRouter;
