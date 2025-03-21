import { useState } from "react";
import { useSelector } from "react-redux";
import { Field } from "formik";
import { selectStatusFilter } from "../../redux/filters/selectors";
import statusFilters from "../../redux/constants";
import css from "./_AddPetForm.module.scss";

const RadioButtons = () => {
  const filter = useSelector(selectStatusFilter);
  const [checkedBtn, setCheckedBtn] = useState(filter);
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
          value="lost_found"
          checked={checkedBtn === statusFilters.lost_found}
          onChange={() => setCheckedBtn(statusFilters.lost_found)}
          className={css.petStatus_radio}
        />
        <div className={css.pet_status}>Lost/Found</div>
      </label>

      <label>
        <Field
          type="radio"
          name="status"
          value="in_good_hands"
          checked={checkedBtn === statusFilters.for_free}
          onChange={() => setCheckedBtn(statusFilters.for_free)}
          className={css.petStatus_radio}
        />
        <div className={css.pet_status}>In good hands</div>
      </label>
      <label>
        <Field
          type="radio"
          name="status"
          value="sell"
          checked={checkedBtn === statusFilters.sell}
          onChange={() => setCheckedBtn(statusFilters.sell)}
          className={css.petStatus_radio}
        />
        <div className={css.pet_status}>Sell</div>
      </label>
    </div>
  );
};

export default RadioButtons;
