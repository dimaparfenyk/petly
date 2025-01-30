const Joi = require("joi");
const { model, Schema } = require("mongoose");
const { handleMongooseError } = require("../../helpers");

const dateRegexp = /^\d{2}-\d{2}-\d{4}$/;
const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegexp = /^(\+\d{1,3}[- ]?)?\(?\d{1,4}\)?[- ]?\d{1,4}[- ]?\d{1,9}$/;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: emailRegexp,
      unique: true,
    },
    city: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      match: phoneRegexp,
      unique: true,
    },
    birthday: {
      type: String,
      match: dateRegexp,
    },
    avatarURL: {
      type: String,
    },
    token: {
      type: String,
      default: null,
    },
    favorites: { type: Array, ref: "pet" },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const User = model("User", userSchema);

const registerUserSchema = Joi.object({
  name: Joi.string().required(),
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(emailRegexp).required(),
  city: Joi.string().required(),
  phone: Joi.string().required(),
  birthday: Joi.string().pattern(dateRegexp),
  avatarURL: Joi.string(),
  token: Joi.string(),
});

const loginUserSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const schemas = { registerUserSchema, loginUserSchema };

module.exports = { User, schemas };
