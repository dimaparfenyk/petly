import { IoIosSearch } from "react-icons/io";
import css from "./_Filter.module.scss";

const Filter = () => {
  return (
    <div className={css.filter_box}>
      <input placeholder="Search" className={css.filter} />
      <button className={css.search_btn}>
        <IoIosSearch />
      </button>
    </div>
  );
};

export default Filter;
