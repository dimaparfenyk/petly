const newsRouter = require("./news.route");
const petsRouter = require("./pets.route");
const sponsorsRouter = require("./sponsors.route");
const authRouter = require("./auth.route");
const userRouter = require("./userPets.route");

module.exports = {
  petsRouter,
  newsRouter,
  sponsorsRouter,
  authRouter,
  userRouter,
};
