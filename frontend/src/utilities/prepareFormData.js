import moment from "moment";

const prepareFormData = (values, image) => {
  const body = new FormData();

  const { ...filteredValues } = values;
  delete filteredValues.petImgPreview;

  if (filteredValues.birth) {
    filteredValues.birth = moment(filteredValues.birth).format("DD-MM-YYYY");
  }

  Object.entries(filteredValues).forEach(([key, value]) => {
    if (value) {
      body.append(key, value);
    }
  });

  if (image) {
    body.append("petImgUrl", image);
  }

  return body;
};

export default prepareFormData;
