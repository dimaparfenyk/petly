const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const {
  petsRouter,
  newsRouter,
  sponsorsRouter,
  authRouter,
  userRouter,
} = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../../frontend", "dist")));

app.use("/api/auth", authRouter);
app.use("/api/pets", petsRouter);
app.use("/api/user", userRouter);
app.use("/api/news", newsRouter);
app.use("/api/sponsors", sponsorsRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/dist")));
// } else {
//   app.use(express.static(path.join(__dirname, "../frontend/public")));
// }

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "frontend", "index.html"));
// });

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
