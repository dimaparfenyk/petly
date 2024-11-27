const mongoose = require("mongoose");
const { MONGODB_KEY } = process.env;

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(MONGODB_KEY);
    console.log(`DB connected ${connect.connection.host}`);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { connectDB };
