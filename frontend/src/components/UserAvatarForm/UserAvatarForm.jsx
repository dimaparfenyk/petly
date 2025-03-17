import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { MdPhotoCamera } from "react-icons/md";
import css from "./_UserAvatarForm.module.scss";
import { changeAvatar } from "../../redux/auth/operations";

const UserAvatarForm = ({ changePreviewImg }) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState();

  const handleChangeAvatar = (e) => {
    const { files } = e.currentTarget;
    if (files) {
      setImage(files[0]);
      changePreviewImg(URL.createObjectURL(files[0]));
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
  );
};

export default UserAvatarForm;
