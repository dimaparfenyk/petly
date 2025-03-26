import { prepareFormData, submitData } from "../utilities";

const handleSubmit = (options) => async (values) => {
  const { dispatch, addEntity, onClose, image } = options;

  const body = prepareFormData(values, image);
  submitData(dispatch, addEntity, body);

  onClose();
};

export default handleSubmit;
