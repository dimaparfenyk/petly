import { Field, useFormikContext } from "formik";
import statusFilters from "../../redux/constants";
import css from "./_AddPetForm.module.scss";

const RadioButtons = ({ values }) => {
  const { setFieldValue } = useFormikContext();

  return (
    <div
      role="group"
      aria-labelledby="status-group"
      className={css.status_group}
    >
      <label>
        <Field
          type="radio"
          name="status"
          value={statusFilters.lost_found}
          checked={values.status === statusFilters.lost_found}
          onChange={() => setFieldValue("status", statusFilters.lost_found)}
          className={css.petStatus_radio}
        />
        <div className={css.pet_status}>Lost/Found</div>
      </label>

      <label>
        <Field
          type="radio"
          name="status"
          value={statusFilters.for_free}
          checked={values.status === statusFilters.for_free}
          onChange={() => setFieldValue("status", statusFilters.for_free)}
          className={css.petStatus_radio}
        />
        <div className={css.pet_status}>In good hands</div>
      </label>
      <label>
        <Field
          type="radio"
          name="status"
          value={statusFilters.sell}
          checked={values.status === statusFilters.sell}
          onChange={() => setFieldValue("status", statusFilters.sell)}
          className={css.petStatus_radio}
        />
        <div className={css.pet_status}>Sell</div>
      </label>
    </div>
  );
};

export default RadioButtons;
