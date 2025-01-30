const path = require("path");
const fs = require("fs/promises");

const uploadFile = async (req, resultDir, dirname) => {
  const { path: tempUpload, originalname } = req.file;
  const filename = `${req.user._id}_${originalname}`;
  const resultUpload = path.join(resultDir, filename);
  await fs.rename(tempUpload, resultUpload);
  // const fileUrl = path.join(dirname, filename);
  // return fileUrl;
  return filename;
};

module.exports = uploadFile;
