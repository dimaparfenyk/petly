import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectStatusFilter } from "../../redux/filters/selectors";
import statusFilters from "../../redux/constants";
import { setStatusFilters } from "../../redux/filters/filtersSlice";

import { IoIosAdd } from "react-icons/io";
import css from "./_AddPetButton.module.scss";

const AddPetButton = ({ handleAddPet }) => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);
  const isMissingFilter =
    filter === statusFilters.favorite || filter === statusFilters.own;
  const [status] = useState(() =>
    isMissingFilter ? statusFilters.sell : filter
  );

  const onAddPetButtonClick = () => {
    handleAddPet();
    dispatch(setStatusFilters(status));
  };

  return (
    <button type="button" className={css.add_btn} onClick={onAddPetButtonClick}>
      Add Pet
      <IoIosAdd />
    </button>
  );
};

export default AddPetButton;
