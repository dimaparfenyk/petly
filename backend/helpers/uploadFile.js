const cloudinary = require("../helpers/cloudinary");
const HttpError = require("../helpers/HttpError");

const uploadFile = async (req, defaultUrl) => {
  if (!req.file) return defaultUrl;

  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    return result.url;
  } catch (error) {
    throw HttpError(500, "Image upload failed");
  }
};

// const uploadFile = async (req, resultDir) => {
//   const { path: tempUpload, originalname } = req.file;
//   const filename = `${req.user._id}_${originalname}`;
//   const resultUpload = path.join(resultDir, filename);
//   await fs.rename(tempUpload, resultUpload);
//   // const fileUrl = path.join(dirname, filename);
//   // return fileUrl;
//   return filename;
// };

module.exports = uploadFile;
