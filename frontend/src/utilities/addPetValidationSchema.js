import * as Yup from "yup";

const firstStepSchema = Yup.object({
  title: Yup.string()
    .trim()
    .min(3, "Min 3 symbols")
    .max(50, "Max 50 symbols")
    .matches(/^[\p{L}\s']+$/u, "Must contain only cahracters and spaces")
    .required("Title is required"),
  breed: Yup.string()
    .trim()
    .matches(/^[\p{L}\s']+$/u, "Must contain only cahracters and spaces")
    .required("Breed is required"),
  name: Yup.string()
    .trim()
    .matches(/^[\p{L}\s']+$/u, "Must contain only cahracters and spaces")
    .min(2, "Min 2 symbols")
    .max(30, "Max 30 symbols")
    .required("Pet`s name is required"),
  birth: Yup.date()
    .max(new Date(), "Date must be in the future")
    .required("Date is required"),
});

const secondStepSchema = Yup.object({
  sex: Yup.string()
    .oneOf(["male", "female"])
    .required("Choose sex of the animal"),
  price: Yup.number().when("status", (status, schema) =>
    status === "sell"
      ? schema
          .required("Price is required")
          .matches(/^[0-9][0-9]*$/, "Numbers only")
          .positive("Price must be positive number")
          .integer("Price must be integer number")
      : schema.nullable().notRequired()
  ),
  comments: Yup.string()
    .trim()
    .matches(/^[\p{L}\s']+$/u, "Must contain only cahracters and spaces")
    .max(300, "Max 300 symbols"),
});

const schema = { firstStepSchema, secondStepSchema };

export default schema;
