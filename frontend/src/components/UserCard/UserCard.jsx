import { useState } from "react";
import useAuth from "../../hooks/useAuth";

import UserAvatarForm from "../UserAvatarForm";
import LogOutBtn from "../LogOutBtn";
import UserMetaList from "../UserMetaList/UserMetaList";
import css from "./_UserCard.module.scss";

const UserCard = () => {
  const [imagePreview, setImagePreview] = useState();
  const { user } = useAuth();

  return (
    <div className={css.user_box}>
      <h3 className={css.card_title}>My information:</h3>
      <article className={css.user_article}>
        <div className={css.card}>
          <div className={css.img_box}>
            <img
              src={imagePreview || `pets/${user.avatarURL}`}
              alt="user photo"
              className={css.avatar}
            />
            <UserAvatarForm changePreviewImg={setImagePreview} />
          </div>
          <UserMetaList />
        </div>
        <LogOutBtn />
      </article>
    </div>
  );
};

export default UserCard;
