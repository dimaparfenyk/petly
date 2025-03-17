import css from "./_UserMetaList.module.scss";
import useAuth from "../../hooks/useAuth";
import UserMetaItem from "../UserMetaItem";

const UserMetaList = () => {
  const { user } = useAuth();
  const allowedFields = ["name", "email", "city", "phone"];

  const userEntries = Object.entries(user).filter((item) =>
    allowedFields.includes(item[0])
  );

  return (
    <ul className={css.meta_box}>
      {userEntries.map((item, ind) => (
        <UserMetaItem key={ind} meta={item} />
      ))}
    </ul>
  );
};

export default UserMetaList;
