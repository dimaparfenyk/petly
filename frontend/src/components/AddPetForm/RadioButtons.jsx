import { Field, useFormikContext } from "formik";
import statusFilters from "../../redux/constants";
import css from "./_AddPetForm.module.scss";
import { setStatusFilters } from "../../redux/filters/filtersSlice";
import { useDispatch } from "react-redux";

const RadioButtons = ({ values }) => {
  const dispatch = useDispatch();
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
          onChange={() => {
            dispatch(setStatusFilters(statusFilters.lost_found));
            setFieldValue("status", statusFilters.lost_found);
          }}
          className={css.petStatus_radio}
        />
        <div className={css.pet_status}>Lost/Found</div>
      </label>

      <label>
        <Field
          type="radio"
          name="status"
          value="in_good_hands"
          checked={values.status === statusFilters.for_free}
          onChange={() => {
            dispatch(setStatusFilters(statusFilters.for_free));
            setFieldValue("status", statusFilters.for_free);
          }}
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
          onChange={() => {
            dispatch(setStatusFilters(statusFilters.sell));
            setFieldValue("status", statusFilters.sell);
          }}
          className={css.petStatus_radio}
        />
        <div className={css.pet_status}>Sell</div>
      </label>
    </div>
  );
};

export default RadioButtons;
