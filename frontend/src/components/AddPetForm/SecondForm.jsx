import { Field } from "formik";
import css from "./_AddPetForm.module.scss";
import ImageDownloader from "../ImageDownLoader/ImageDownloader";
import Button from "../Button";

const SecondForm = ({ setStep, ...restProps }) => {
  const { setImage, status, touched, errors } = restProps;
  const isFormFieldVisible = status === "sell";

  return (
    <>
      <fieldset className={css.fieldset}>
        <legend className={css.legend}>The sex:</legend>
        <div className={css.sex_box}>
          {["male", "female"].map((sex) => (
            <label key={sex} htmlFor={sex} className={css.sex_label}>
              <Field
                id={sex}
                name="sex"
                type="radio"
                value={sex}
                className={`${css.form_field} ${css.sex_field}`}
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
        {touched.sex && errors.sex && (
          <div className={css.error}>{errors.sex}</div>
        )}
      </fieldset>

      {isFormFieldVisible && (
        <>
          <label
            htmlFor="price"
            className={`${css.label} ${css.label_required}`}
          >
            Price
          </label>
          <Field
            id="price"
            name="price"
            placeholder="Type price"
            type="number"
            min="0"
            className={css.form_field}
          />
          {touched.price && errors.price && (
            <div className={css.error}>{errors.price}</div>
          )}
        </>
      )}
      <ImageDownloader setImage={setImage} />
      <label htmlFor="comments" className={css.label}>
        Comments
      </label>
      <Field
        id="comments"
        name="comments"
        placeholder="Type comment"
        as="textarea"
        rows="1"
        className={`${css.form_field} ${css.textarea}`}
      />
      {touched.comments && errors.comments && (
        <div className={css.error}>{errors.comments}</div>
      )}
      <div className={css.btn_box}>
        <Button type="button" onClick={() => setStep(1)}>
          Back
        </Button>
        <Button type="submit" isActive>
          Done
        </Button>
      </div>
    </>
  );
};

export default SecondForm;
