import { Field } from "formik";
import clsx from "clsx";
import css from "./_AddPetForm.module.scss";

const InputField = ({
  id,
  name,
  placeholder,
  type = "text",
  min,
  errors,
  touched,
}) => (
  <>
    <label
      htmlFor={id}
      className={clsx(css.label, errors && touched && css.label_required)}
    >
      {placeholder}
    </label>
    {errors && touched && <div className={css.error}>{errors}</div>}
    <Field
      id={id}
      name={name}
      placeholder={placeholder}
      type={type}
      min={min}
      className={clsx(css.form_field, {
        [css.valid]: touched && !errors,
      })}
    />
  </>
);

export default InputField;
