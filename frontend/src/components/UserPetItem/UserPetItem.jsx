// import React from 'react'
import { HiMiniTrash } from "react-icons/hi2";
import css from "./_UserPetItem.module.scss";

const UserPetItem = ({ pet }) => {
  return (
    <li className={css.pet_item}>
      <div className={css.img_box}>
        <img
          src="./pets/pet-dog.png"
          alt={`pet${pet}`}
          className={css.pet_avatar}
        />
      </div>
      <div className={css.meta_box}>
        <div className={css.meta_text}>
          <span>Name:</span> Jack
          <button type="button" className={css.remove_btn}>
            <HiMiniTrash />
          </button>
        </div>
        <div className={css.meta_text}>
          <span>Date of birth:</span> 22.04.2018
        </div>
        <div className={css.meta_text}>
          <span>Breed:</span> 22.04.2018
        </div>
        <div className={css.meta_text}>
          <span>Comments:</span> Lorem ipsum dolor sit amet, consectetur. Lorem
          ipsum dolor sit amet, consectetur.
        </div>
      </div>
    </li>
  );
};

export default UserPetItem;
