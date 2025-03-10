const { model, Schema } = require("mongoose");
const { handleMongooseError } = require("../../helpers");

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegexp = /^(\+\d{1,3}[- ]?)?\(?\d{1,4}\)?[- ]?\d{1,4}[- ]?\d{1,9}$/;

const sponsorsSchema = new Schema(
  {
    title: { type: String },
    url: { type: String },
    addressUrl: { type: String },
    imageUrl: { type: String },
    address: { type: String },
    phone: { type: String, match: phoneRegexp },
    email: { type: String, match: emailRegexp },
    workDays: [
      {
        isOpen: { type: Boolean, required: true, default: false },
        from: { type: String },
        to: { type: String },
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

sponsorsSchema.post("save", handleMongooseError);

const Sponsors = model("Sponsor", sponsorsSchema);

module.exports = { Sponsors };
