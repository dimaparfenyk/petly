import { useDispatch } from "react-redux";
import { changeAvatar, logOut } from "../../redux/auth/operations";
import useAuth from "../../hooks/useAuth";
import { MdPhotoCamera } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import css from "./_UserCard.module.scss";
import { useEffect, useState } from "react";

const UserCard = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState();
  const { user } = useAuth();

  const handleChangeAvatar = (e) => {
    const { files } = e.currentTarget;
    if (files) {
      setImage(files[0]);
      setImagePreview(URL.createObjectURL(files[0]));
    }
  };

  useEffect(() => {
    if (image) {
      const updData = new FormData();
      updData.append("avatar", image);
      dispatch(changeAvatar(updData));
    }
  }, [dispatch, image]);

  return (
    <div className={css.user_box}>
      <h3 className={css.card_title}>My information:</h3>
      <article className={css.user_article}>
        <div className={css.card}>
          <div className={css.img_box}>
            <img
              src={imagePreview || `/user/${user.avatarURL}`}
              alt="user photo"
              className={css.avatar}
            />
            {/* вынести в отдельный компонент */}
            <form>
              <label>
                <div className={css.edit_photo_btn}>
                  <MdPhotoCamera />
                  Edit photo
                </div>
                <input
                  className={css.avatar_input}
                  type="file"
                  name="avatarURL"
                  accept=".png, .jpg, .jpeg"
                  onChange={handleChangeAvatar}
                />
              </label>
            </form>
          </div>
          <div className={css.meta_box}>
            <div className={css.meta_block}>
              <p className={css.meta_text}>Name:</p>
              {user.name}
              <button type="button" className={css.edit_meta_btn}>
                <FaPen />
              </button>
            </div>
            <div className={css.meta_block}>
              <p className={css.meta_text}>Email:</p>
              {user.email}
              <button type="button" className={css.edit_meta_btn}>
                <FaPen />
              </button>
            </div>
            <div className={css.meta_block}>
              <p className={css.meta_text}>Phone:</p>
              {user.phone}
              <button type="button" className={css.edit_meta_btn}>
                <FaPen />
              </button>
            </div>
            <div className={css.meta_block}>
              <p className={css.meta_text}>City:</p>
              {user.city}
              <button type="button" className={css.edit_meta_btn}>
                <FaPen />
              </button>
            </div>
          </div>
        </div>
        <button
          type="button"
          className={css.logout_btn}
          onClick={() => dispatch(logOut())}
        >
          <IoLogOutOutline />
          Log Out
        </button>
      </article>
    </div>
  );
};

export default UserCard;
