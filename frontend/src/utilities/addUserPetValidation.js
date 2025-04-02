import * as Yup from "yup";
const firstStepSchema = Yup.object({
  breed: Yup.string().required("Введите породу"),
  name: Yup.string()
    .trim()
    .min(2, "Минимум 2 символа")
    .max(30, "Максимум 30 символов"),
  birth: Yup.date().nullable().required("Выберите дату рождения"),
});

const secondStepSchema = Yup.object({
  comments: Yup.string().max(300, "Максимум 300 символов"),
});

const addUserPetSchema = { firstStepSchema, secondStepSchema };

export default addUserPetSchema;
