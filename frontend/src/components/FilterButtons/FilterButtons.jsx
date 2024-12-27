import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import Button from "../Button/Button";
import css from "./_FilterButtons.module.scss";

const FilterButtons = () => {
  const buttons = [
    "Sell",
    "Lost/Found",
    "In good hands",
    "Favorite ads",
    "My ads",
  ];
  const [activeButton, setActiveButton] = useState(buttons[0]);

  return (
    <div className={css.btns_box}>
      <ul className={css.buttons_list}>
        {buttons.map((text, index) => (
          <li key={index} className={css.buttons_item}>
            <Button
              text={text}
              isActive={activeButton === text}
              onClick={() => setActiveButton(text)}
            />
          </li>
        ))}
      </ul>
      <button type="button" className={css.add_btn}>
        Add Pet
        <IoIosAdd />
      </button>
    </div>
  );
};

export default FilterButtons;
