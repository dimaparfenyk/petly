const Joi = require("joi");
const { model, Schema } = require("mongoose");
const { handleMongooseError } = require("../../helpers");

const dateRegexp = /^\d{2}-\d{2}-\d{4}$/;

const userPetSchema = new Schema(
  {
    name: { type: String },
    birth: { type: String, match: dateRegexp },
    breed: { type: String },
    comments: { type: String, maxLength: 100 },
    petImgUrl: {
      type: String,
    },
    owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { versionKey: false, timestamps: true }
);

userPetSchema.post("save", handleMongooseError);

const Userpet = model("Userpet", userPetSchema);

const addSchema = Joi.object({
  name: Joi.string().required(),
  birth: Joi.string().pattern(dateRegexp),
  breed: Joi.string().required(),
  petImgUrl: Joi.string().optional(),
  comments: Joi.string(),
});

const schemas = { addSchema };

module.exports = { Userpet, schemas };
