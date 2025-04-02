import { prepareFormData, submitData } from "../utilities";

const handleSubmit = (options) => async (values) => {
  const { dispatch, addPet, onClose, image } = options;

  const body = prepareFormData(values, image);
  submitData(dispatch, addPet, body);

  onClose();
};

export default handleSubmit;
