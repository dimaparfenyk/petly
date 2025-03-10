// import { useState } from "react";
import { MdPhotoCamera } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { FaPen } from "react-icons/fa";

import css from "./_UserCard.module.scss";

const UserCard = () => {
  // const [isEdited, setIsEdited] = useState(false);
  return (
    <div className={css.user_box}>
      <h3 className={css.card_title}>My information:</h3>
      <article className={css.user_article}>
        <div className={css.card}>
          <div className={css.img_box}>
            <img
              src="./user/avatar.png"
              alt="user photo"
              className={css.avatar}
            />
            <button type="button" className={css.edit_photo_btn}>
              <MdPhotoCamera />
              Edit photo
            </button>
          </div>
          <div className={css.meta_box}>
            <div className={css.meta_block}>
              <p className={css.meta_text}>Name:</p>
              Anna
              <button type="button" className={css.edit_meta_btn}>
                <FaPen />
              </button>
            </div>
            <div className={css.meta_block}>
              <p className={css.meta_text}>Email:</p>
              anna00@gmail.com
              <button type="button" className={css.edit_meta_btn}>
                <FaPen />
              </button>
            </div>
            <div className={css.meta_block}>
              <p className={css.meta_text}>Birthday:</p>
              00.00.0000
              <button type="button" className={css.edit_meta_btn}>
                <FaPen />
              </button>
            </div>
            <div className={css.meta_block}>
              <p className={css.meta_text}>Phone:</p>
              +38000000000
              <button type="button" className={css.edit_meta_btn}>
                <FaPen />
              </button>
            </div>
            <div className={css.meta_block}>
              <p className={css.meta_text}>City:</p>
              Kiev
              <button type="button" className={css.edit_meta_btn}>
                <FaPen />
              </button>
            </div>
          </div>
        </div>
        <button type="button" className={css.logout_btn}>
          <IoLogOutOutline />
          Log Out
        </button>
      </article>
    </div>
  );
};

export default UserCard;
