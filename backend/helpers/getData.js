const path = require("path");
const fs = require("fs");

const getData = (pathToData) => {
  const pathToFile = path.join(__dirname, pathToData);
  const data = fs.readFileSync(pathToFile);
  return JSON.parse(data);
};

module.exports = getData;
