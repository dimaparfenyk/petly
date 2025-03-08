const { Pet } = require("../../models/pet");
const { HttpError, ctrlWrapper } = require("../../helpers");

const getPetById = async (req, res) => {
  const { category, id } = req.params;
  console.log(`Запрос на питомца с категорией ${category} и ID ${id}`);
  const data = await Pet.findOne({ _id: id, status: category }).populate(
    "owner",
    "email phone city"
  );
  console.log("Полученные данные:", data);
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({ data });
};

module.exports = { getPetById: ctrlWrapper(getPetById) };
