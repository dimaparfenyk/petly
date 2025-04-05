import * as Yup from "yup";

const firstStepSchema = Yup.object({
  breed: Yup.string().trim().required("Breed is required"),
  name: Yup.string()
    .required("Name is required")
    .trim()
    .min(2, "Min 2 symbols")
    .max(30, "Max 30 symbols"),
  birth: Yup.date()
    .max(new Date(), "Date must be in the future")
    .nullable()
    .required("Date is required"),
});

const secondStepSchema = Yup.object({
  comments: Yup.string()
    .trim()
    .matches(/^[\p{L}\s']+$/u, "Must contain only cahracters and spaces")
    .max(300, "Max 300 symbols"),
});

const addUserPetSchema = { firstStepSchema, secondStepSchema };

export default addUserPetSchema;
