import { clsx } from "clsx";
import { FaPen } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

import css from "./_userMetaItem.module.scss";
import { useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/auth/operations";

const UserMetaItem = ({ meta }) => {
  const dispatch = useDispatch();
  const [property, metaValue] = meta;
  const [shouldBeEdited, setShouldBeEdited] = useState(false);
  const [value, setValue] = useState(metaValue);

  const normalizedMetaValue = useMemo(
    () => metaValue.trim().toLowerCase(),
    [metaValue]
  );

  const normalizedValue = useMemo(() => value.trim().toLowerCase(), [value]);

  const isValueChanged = normalizedValue !== normalizedMetaValue;

  const handleEditField = () => {
    setShouldBeEdited((prev) => !prev);
    if (!isValueChanged) return;
    dispatch(updateUser({ property, value: normalizedValue }));
  };

  return (
    <li className={css.meta_block}>
      {shouldBeEdited ? (
        <>
          <label className={css.meta_label} htmlFor={property}>
            {property}:
          </label>
          <div className={css.meta_edit_box}>
            <input
              id={property}
              className={css.input_field}
              placeholder={"Edit ..."}
              name={property}
              value={value}
              onChange={(e) => setValue(e.target.value.trim())}
            />
            <button
              type="submit"
              className={clsx(css.edit_meta_btn, {
                [css.is_edited]: isValueChanged,
              })}
              onClick={handleEditField}
            >
              <FaCheck />
            </button>
          </div>
        </>
      ) : (
        <>
          <p className={css.meta_label}>{property}:</p>
          <div
            className={css.meta_edit_box}
            onClick={() => setShouldBeEdited((prev) => !prev)}
          >
            <span className={css.meta_value} name={property}>
              {metaValue}
            </span>
            <button type="button" className={css.edit_meta_btn}>
              <FaPen />
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default UserMetaItem;
