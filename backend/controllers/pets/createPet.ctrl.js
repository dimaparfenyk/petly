const { Pet } = require("../../models/pets");

const createPet = async (req, res) => {
  const data = req.body;

  if (!data.name || !data.breed) {
    return res
      .status(400)
      .json({ succsess: false, message: "Fill in all required fields." });
  }

  try {
    const result = await Pet.create({ ...data });
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error("Error in Post pet:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = createPet;
