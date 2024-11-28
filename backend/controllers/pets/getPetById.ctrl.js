const mongoose = require("mongoose");
const { Pet } = require("../../models/pets");

const getPetById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid Product Id" });
  }

  try {
    const data = await Pet.findById(id);

    if (!data) {
      return res
        .status(404)
        .json({ success: false, message: "Pet not founded" });
    }

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error in Get by id pet:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = getPetById;
