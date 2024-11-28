const { model, Schema } = require("mongoose");

const petSchema = new Schema(
  {
    name: { type: String, require: true },
    birth: { type: String, require: true },
    breed: { type: String },
    price: { type: Number },
    image: { type: String },
    description: { type: String },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

const Pet = model("Pet", petSchema);

module.exports = { Pet };
