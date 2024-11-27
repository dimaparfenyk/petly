const { model, Schema } = require("mongoose");

const petSchema = new Schema(
  {
    name: { type: String, require: true },
    birth: { type: String },
    breed: { type: String, require: true },
    age: { type: String },
    price: { type: Number },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

const Pet = model("Pet", petSchema);

module.exports = { Pet };
