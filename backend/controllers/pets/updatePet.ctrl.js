const mongoose = require("mongoose");
const { Pet } = require("../../models");

const updatePet = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid Product Id" });
  }

  try {
    const result = await Pet.findByIdAndUpdate(id, data, { new: true });

    if (!result) {
      return res
        .status(404)
        .json({ success: false, message: "Pet not founded" });
    }

    res.status(200).json({
      success: true,
      result,
      message: "Pet's data successfully updated",
    });
  } catch (error) {
    console.error("Error in Update pet:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = updatePet;
