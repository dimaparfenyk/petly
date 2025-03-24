import * as Yup from "yup";

const dateRegexp = /^\d{2}-\d{2}-\d{4}$/;

const addPetSchema = Yup.object().shape({
  name: Yup.string().when("status", {
    is: (status) => status !== "lost/found",
    then: Yup.string().required("Введите имя питомца"),
    otherwise: Yup.string().notRequired(),
  }),
  birth: Yup.string()
    .matches(dateRegexp, "Дата должна быть в формате ДД-ММ-ГГГГ")
    .when("status", {
      is: (status) => status !== "lost/found",
      then: Yup.string().required("Введите дату рождения"),
      otherwise: Yup.string().notRequired(),
    }),
  sex: Yup.string()
    .oneOf(["male", "female"], "Выберите пол")
    .required("Пол обязателен"),
  breed: Yup.string().notRequired(),
  price: Yup.number()
    .when("status", {
      is: "sell",
      then: Yup.number()
        .typeError("Цена должна быть числом")
        .required("Введите цену"),
      otherwise: Yup.number().nullable(),
    })
    .transform((value, originalValue) =>
      String(originalValue).trim() === "" ? null : value
    ),
  title: Yup.string().required("Введите заголовок"),
  petImgUrl: Yup.string().url("Введите корректный URL").nullable(),
  comments: Yup.string().max(100, "Максимум 100 символов").nullable(),
  status: Yup.string()
    .oneOf(["lost/found", "sell", "in good hands"], "Неверный статус")
    .required("Статус обязателен"),
});

export default addPetSchema;
