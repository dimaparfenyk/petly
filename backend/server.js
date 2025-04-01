const mongoose = require("mongoose");
const app = require("./app");
const { PORT, MONGODB_KEY } = process.env;

mongoose
  .connect(MONGODB_KEY)
  .then(app.listen(PORT))
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
