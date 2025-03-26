import * as Yup from "yup";

const addPetSchema = Yup.object().shape({
  status: Yup.string().required("Выберите статус"),
  breed: Yup.string().required("Введите породу"),
  title: Yup.string()
    .min(3, "Минимум 3 символа")
    .max(50, "Максимум 50 символов")
    .required("Введите заголовок"),
  name: Yup.string()
    .trim()
    .min(2, "Минимум 2 символа")
    .max(30, "Максимум 30 символов"),
  birthday: Yup.date().nullable().required("Выберите дату рождения"),
  sex: Yup.string().oneOf(["male", "female"]).required("Выберите пол"),
  location: Yup.string().required("Введите местоположение"),
  price: Yup.number().when("status", {
    is: (status) => status === "sell",
    then: Yup.number()
      .required("Установите цену")
      .positive("Цена должна быть положительным числом")
      .integer("Цена должна быть целым числом"),
  }),
  comments: Yup.string().max(300, "Максимум 300 символов"),
});

export default addPetSchema;
