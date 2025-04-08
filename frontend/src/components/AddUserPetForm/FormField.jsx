import { Field } from "formik";
import clsx from "clsx";
import css from "./_AddUserPetForm.module.scss";

const FormField = ({
  id,
  name,
  placeholder,
  errors,
  touched,
  isValid,
  type = "text",
  max,
  ...props
}) => (
  <>
    <label htmlFor={id} className={css.label}>
      {placeholder}
    </label>
    {touched && errors && <div className={css.error}>{errors}</div>}
    <Field
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      max={max}
      className={clsx(css.form_field, {
        [css.error_field]: touched && errors,
        [css.valid_field]: isValid,
      })}
      {...props}
    />
  </>
);

export default FormField;
