import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import Button from "../Button/Button";
import css from "./_FilterButtons.module.scss";

const FilterButtons = ({ toggleModal }) => {
  const links = [
    "Sell",
    "Lost/Found",
    "In good hands",
    "Favorite ads",
    "My ads",
  ];
  // const normalizedLinks=links.map(link=>{
  //  link.toLowerCase()

  // })

  const [activeButton, setActiveButton] = useState(links[0]);

  return (
    <div className={css.btns_box}>
      <ul className={css.buttons_list}>
        {/* {buttons.map((text, index) => (
          <li key={index} className={css.buttons_item}>
            <Button
              text={text}
              isActive={activeButton === text}
              onClick={() => setActiveButton(text)}
            />
          </li>
        ))} */}
        <li>
          <NavLink to="/pets/sell">Sell</NavLink>
        </li>
        <li>
          <NavLink to="/pets/lost_found">Lost/Found</NavLink>
        </li>
        <li>
          <NavLink to="/pets/for_free">In good hands</NavLink>
        </li>
        <li>
          <NavLink to="/pets/favorite">Favorite ads</NavLink>
        </li>
        <li>
          <NavLink to="/pets/own">My ads</NavLink>
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
