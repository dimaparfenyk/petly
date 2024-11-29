const app = require("./app");
const { connectDB } = require("./db/pets_db");
const { PORT } = process.env;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server work at ${PORT} port`);
});
