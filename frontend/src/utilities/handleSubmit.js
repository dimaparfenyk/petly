import moment from "moment";

const handleSubmit = (options) => async (values, actions) => {
  const { dispatch, addEntity, onClose, image } = options;
  const body = new FormData();

  const cleanedValues = { ...values };
  if (values.status === "lost/found") {
    delete cleanedValues.name;
    delete cleanedValues.birth;
    delete cleanedValues.price;
  } else if (values.status !== "sell") {
    delete cleanedValues.price;
  }

  if (cleanedValues.birth) {
    cleanedValues.birth = moment(cleanedValues.birth).format("DD-MM-YYYY");
  }

  Object.entries(cleanedValues).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      body.append(key, value);
    }
  });

  if (image) {
    body.append("petImgUrl", image);
  }
  console.log("Submitting:", cleanedValues);
  dispatch(addEntity(body));
  actions.resetForm();
  //   onClose();
};

export default handleSubmit;
