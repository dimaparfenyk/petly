const cloudinary = require("../helpers/cloudinary");
const HttpError = require("../helpers/HttpError");

const uploadFile = async (req, defaultUrl) => {
  if (!req.file) return defaultUrl;

  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      // transformation: [
      //   { width: 340, height: 320, crop: "fill", gravity: "auto" },
      //   { quality: "auto" },
      //   { fetch_format: "auto" },
      // ],
      // folder: "pets-app",
    });
    return result.secure_url;
  } catch (error) {
    throw HttpError(500, "Image upload failed");
  }
};

module.exports = uploadFile;
