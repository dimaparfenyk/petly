const { model, Schema } = require("mongoose");

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: [true, "Password is required"] },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    city: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    birthday: {
      type: String,
    },
    avatarURL: {
      type: String,
    },
    favorites: [{ type: Schema.ObjectId, ref: "notice" }],
    myPets: [{ type: Schema.ObjectId, ref: "userPet" }],
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

const User = model("User", userSchema);

module.exports = { User };
