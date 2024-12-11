const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const {
  petsRouter,
  newsRouter,
  sponsorsRouter,
  authRouter,
} = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/pets", petsRouter);
app.use("/api/news", newsRouter);
app.use("/api/sponsors", sponsorsRouter);

app.use(express.static(path.join(__dirname, "../frontend/public")));

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
