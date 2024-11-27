const { Pet } = require("../../models");

const getAllPets = async (req, res) => {
  try {
    const data = await Pet.find({});
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error in Get pet:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = getAllPets;
