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
          <label className={css.meta_text} htmlFor={property}>
            {property} :
          </label>
          <input
            id={property}
            className={css.input_field}
            placeholder={"Edit ..."}
            name={property}
            defaultValue={metaValue}
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
        </>
      ) : (
        <>
          <p className={css.meta_text}>{property} :</p>
          {metaValue}
          <button
            type="button"
            className={css.edit_meta_btn}
            onClick={() => setShouldBeEdited((prev) => !prev)}
          >
            <FaPen />
          </button>
        </>
      )}
    </li>
  );
};

export default UserMetaItem;
