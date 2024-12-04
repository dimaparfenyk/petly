const Joi = require("joi");
const { model, Schema } = require("mongoose");
const { handleMongooseError, getData } = require("../../helpers");

const dateRegexp = /^\d{2}-\d{2}-\d{4}$/;
const specieList = [
  "dog",
  "cat",
  "rabbit",
  "reptile",
  "rodent",
  "bird",
  "exotic",
];
const dogList = getData("../db/data/dogBreeds.json");
const catList = getData("../db/data/catBreeds.json");

const petSchema = new Schema(
  {
    name: { type: String, required: [true, "Name is required"] },
    birth: { type: String, required: true, match: dateRegexp },
    specie: {
      type: String,
      enum: specieList,
    },
    sex: {
      type: String,
      required: [true, "Sex is required"],
      enum: ["male", "female"],
    },
    breed: { type: String },
    price: { type: Number },
    image: { type: String },
    description: { type: String },
    favorite: {
      type: Boolean,
      default: false,
    },
    // createdAt: {
    //   type: String,
    //   default: Math.floor(Date.now() / 1000),
    // },
    // updatedAt: {
    //   type: String,
    //   default: Math.floor(Date.now() / 1000),
    // },
  },
  { versionKey: false, timestamps: true }
);

petSchema.post("save", handleMongooseError);

const Pet = model("Pet", petSchema);

const addSchema = Joi.object({
  name: Joi.string().required(),
  birth: Joi.string().pattern(dateRegexp),
  sex: Joi.string().valid("male", "female").required(),
  specie: Joi.string().valid(...specieList),
  breed: Joi.string().required(),
  price: Joi.number(),
  description: Joi.string(),
  favorite: Joi.boolean(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = { addSchema, updateFavoriteSchema };

module.exports = { Pet, schemas };
