const { model, Schema } = require("mongoose");
const { handleMongooseError } = require("../../helpers");

const dateRegexp = /^\d{2}-\d{2}-\d{4}$/;

const newsSchema = new Schema(
  {
    title: { type: String, required: true },
    url: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, match: dateRegexp },
  },
  { versionKey: false, timestamps: true }
);

newsSchema.post("save", handleMongooseError);

const News = model("News", newsSchema);

module.exports = { News };
