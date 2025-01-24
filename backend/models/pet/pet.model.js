const Joi = require("joi");
const { model, Schema } = require("mongoose");
const { handleMongooseError, getData } = require("../../helpers");

const dateRegexp = /^\d{2}-\d{2}-\d{4}$/;

const dogList = getData("../db/data/dogBreeds.json");
const catList = getData("../db/data/catBreeds.json");

const petSchema = new Schema(
  {
    name: { type: String, required: [true, "Name is required"] },
    birth: { type: String, required: true, match: dateRegexp },
    title: { type: String, required: true },
    sex: {
      type: String,
      required: [true, "Sex is required"],
      enum: ["male", "female"],
    },
    breed: { type: String },
    price: { type: Number },
    image: { type: String },
    location: { type: String, required: true },
    status: { type: String, required: true, default: "sell" },
    description: { type: String, maxLength: 100 },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    petImgUrl: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

petSchema.post("save", handleMongooseError);

const Pet = model("Pet", petSchema);

const addSchema = Joi.object({
  name: Joi.string().required(),
  birth: Joi.string().pattern(dateRegexp),
  sex: Joi.string().valid("male", "female").required(),
  breed: Joi.string().required(),
  price: Joi.number(),
  description: Joi.string(),
});

const schemas = { addSchema };

module.exports = { Pet, schemas };
