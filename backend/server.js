const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connectDB } = require("./db/pets_db");
const { petsRouter } = require("./routes");

const { PORT } = process.env;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/pets", petsRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server work at ${PORT} port`);
});
