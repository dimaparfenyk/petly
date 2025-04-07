const Joi = require("joi");
const { model, Schema } = require("mongoose");
const { handleMongooseError } = require("../../helpers");

const dateRegexp = /^\d{2}-\d{2}-\d{4}$/;

const petSchema = new Schema(
  {
    name: {
      type: String,
      required: function () {
        return this.status !== "lost/found";
      },
    },
    birth: {
      type: String,
      required: function () {
        return this.status !== "lost/found";
      },
      match: dateRegexp,
    },
    title: { type: String },
    sex: {
      type: String,
      required: [true, "Sex is required"],
      enum: ["male", "female"],
    },
    breed: { type: String },
    price: {
      type: Number,
      required: function () {
        return this.status === "sell";
      },
    },
    image: { type: String },
    status: {
      type: String,
      required: true,
      default: "sell",
      enum: ["lost/found", "sell", "in good hands"],
    },
    comments: { type: String, maxLength: 100 },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    favoritedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
    petImgUrl: {
      type: String,
      required: false,
    },
  },
  { versionKey: false, timestamps: true }
);

petSchema.post("save", handleMongooseError);

const Pet = model("Pet", petSchema);

const addSchema = Joi.object({
  name: Joi.when("status", {
    is: Joi.valid("sell", "in good hands"),
    then: Joi.string().required(),
    otherwise: Joi.string().allow("").optional(),
  }),
  birth: Joi.when("status", {
    is: Joi.valid("sell", "in good hands"),
    then: Joi.string().pattern(dateRegexp).required(),
    otherwise: Joi.string().pattern(dateRegexp).allow("").optional(),
  }),
  sex: Joi.string().valid("male", "female").required(),
  breed: Joi.string(),
  price: Joi.when("status", {
    is: "sell",
    then: Joi.number().required(),
    otherwise: Joi.number().optional().allow(null, ""),
  }),
  title: Joi.string().required(),
  petImgUrl: Joi.string().allow("").optional(),
  comments: Joi.string(),
  status: Joi.string().valid("lost/found", "sell", "in good hands").required(),
});

const schemas = { addSchema };

module.exports = { Pet, schemas };
