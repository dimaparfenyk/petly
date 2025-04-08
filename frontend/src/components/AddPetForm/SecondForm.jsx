import { Field } from "formik";
import clsx from "clsx";
import css from "./_AddPetForm.module.scss";
import ImageDownloader from "../ImageDownLoader/ImageDownloader";
import Button from "../Button";
import InputField from "./InputField";

const SecondForm = ({ setStep, ...restProps }) => {
  const { setImage, status, errors, touched } = restProps;
  const isFormFieldVisible = status === "sell";

  return (
    <>
      <fieldset className={css.fieldset}>
        <legend className={css.legend}>The sex:</legend>
        {errors.sex && <div className={css.error}>{errors.sex}</div>}
        <div className={css.sex_box}>
          {["male", "female"].map((sex) => (
            <label key={sex} htmlFor={sex} className={css.sex_label}>
              <Field
                id={sex}
                name="sex"
                type="radio"
                value={sex}
                className={clsx(css.form_field, css.sex_field)}
              />
              <div className={css.radio_btn_label}>
                <img
                  src={`/sex-${sex}.png`}
                  alt={sex}
                  className={css.sex_img}
                />
                <span className={css.sex_label_text}>
                  {sex.charAt(0).toUpperCase() + sex.slice(1)}
                </span>
              </div>
            </label>
          ))}
        </div>
      </fieldset>
      {isFormFieldVisible && (
        <InputField
          id="price"
          name="price"
          placeholder="Type price"
          type="number"
          min="0"
          errors={errors.price}
          touched={touched.price}
        />
      )}
      <ImageDownloader setImage={setImage} />
      <InputField
        id="comments"
        name="comments"
        placeholder="Type comment"
        type="textarea"
        errors={errors.comments}
        touched={touched.comments}
      />
      <div className={css.btn_box}>
        <Button type="button" onClick={() => setStep(1)}>
          Back
        </Button>
        <Button
          type="submit"
          isActive
          disabled={Object.keys(errors).length > 0}
        >
          Done
        </Button>
      </div>
    </>
  );
};

export default SecondForm;
