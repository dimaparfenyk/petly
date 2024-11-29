const Joi = require("joi");
const { model, Schema } = require("mongoose");

const petSchema = new Schema(
  {
    name: { type: String, required: true },
    birth: { type: String, required: true },
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

const addSchema = Joi.object({
  name: Joi.string().required(),
  birth: Joi.string(),
  breed: Joi.string().required(),
  price: Joi.number(),
  description: Joi.string(),
  favorite: Joi.boolean(),
});

const schemas = { addSchema };

module.exports = { Pet, schemas };
