import { Field } from "formik";
import { useSelector } from "react-redux";
import { selectStatusFilter } from "../../redux/filters/selectors";
import statusFilters from "../../redux/constants";
import css from "./_AddPetForm.module.scss";
import ImageDownloader from "./ImageDownloader";
import Button from "../Button";

const SecondForm = ({ changeForm, setFieldValue, setImage }) => {
  const filter = useSelector(selectStatusFilter);
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
      </fieldset>

      {filter === statusFilters.sell && (
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
            className={css.form_field}
          />
        </>
      )}

      <ImageDownloader setFieldValue={setFieldValue} setImage={setImage} />

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
      <div className={css.btn_box}>
        <Button type="button" onClick={() => changeForm(true)}>
          Back
        </Button>
        <Button type="submit" isActive={true}>
          Done
        </Button>
      </div>
    </>
  );
};

export default SecondForm;
