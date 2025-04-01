import * as Yup from "yup";
const firstStepSchema = Yup.object({
  title: Yup.string().when("isProfilePage", {
    is: false,
    then: (schema) =>
      schema
        .min(3, "Минимум 3 символа")
        .max(50, "Максимум 50 символов")
        .required("Введите заголовок"),
  }),
  breed: Yup.string().required("Введите породу"),
  name: Yup.string()
    .trim()
    .min(2, "Минимум 2 символа")
    .max(30, "Максимум 30 символов"),
  birth: Yup.date().nullable().required("Выберите дату рождения"),
});

const secondStepSchema = Yup.object({
  // sex: Yup.string().oneOf(["male", "female"]).required("Выберите пол"),
  // price: Yup.number().when("status", (status, schema) =>
  //   status === "sell"
  //     ? schema
  //         .required("Установите цену")
  //         .positive("Цена должна быть положительным числом")
  //         .integer("Цена должна быть целым числом")
  //     : schema.nullable().notRequired()
  // ),
  comments: Yup.string().max(300, "Максимум 300 символов"),
});

const schema = { firstStepSchema, secondStepSchema };

export default schema;
