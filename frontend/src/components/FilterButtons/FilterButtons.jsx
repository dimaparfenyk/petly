import { useDispatch, useSelector } from "react-redux";
import { selectStatusFilter } from "../../redux/filters/selectors";
import { setStatusFilters } from "../../redux/filters/filtersSlice";
import statusFilters from "../../redux/constants";
import { NavLink } from "react-router-dom";

import { IoIosAdd } from "react-icons/io";
import css from "./_FilterButtons.module.scss";

const FilterButtons = ({ toggleModal }) => {
  const filter = useSelector(selectStatusFilter);
  const dispatch = useDispatch();

  const handleFilterChange = (filter) => dispatch(setStatusFilters(filter));

  return (
    <div className={css.nav}>
      <ul className={css.nav_list}>
        <li className={css.nav_item}>
          <NavLink
            to="/pets/sell"
            className={
              filter === statusFilters.sell
                ? `${css.nav_link} ${css.active}`
                : css.nav_link
            }
            onClick={() => handleFilterChange(statusFilters.sell)}
          >
            Sell
          </NavLink>
        </li>
        <li className={css.nav_item}>
          <NavLink
            to="/pets/lost_found"
            className={
              filter === statusFilters.lost_found
                ? `${css.nav_link} ${css.active}`
                : css.nav_link
            }
            onClick={() => handleFilterChange(statusFilters.lost_found)}
          >
            Lost/Found
          </NavLink>
        </li>
        <li className={css.nav_item}>
          <NavLink
            to="/pets/for_free"
            className={
              filter === statusFilters.for_free
                ? `${css.nav_link} ${css.active}`
                : css.nav_link
            }
            onClick={() => handleFilterChange(statusFilters.for_free)}
          >
            In good hands
          </NavLink>
        </li>
        <li className={css.nav_item}>
          <NavLink
            to="/pets/favorite"
            onClick={() => handleFilterChange(statusFilters.favorite)}
            className={
              filter === statusFilters.favorite
                ? `${css.nav_link} ${css.active}`
                : css.nav_link
            }
          >
            Favorite ads
          </NavLink>
        </li>
        <li className={css.nav_item}>
          <NavLink
            to="/pets/own"
            className={
              filter === statusFilters.own
                ? `${css.nav_link} ${css.active}`
                : css.nav_link
            }
            onClick={() => handleFilterChange(statusFilters.own)}
          >
            My ads
          </NavLink>
        </li>
      </ul>
      <button
        type="button"
        className={css.add_btn}
        onClick={() => toggleModal()}
      >
        Add Pet
        <IoIosAdd />
      </button>
    </div>
  );
};

export default FilterButtons;
