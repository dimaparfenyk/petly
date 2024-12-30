import PetCard from "../PetCard";
import css from "./_PetsList.module.scss";

const PetsList = () => {
  return (
    <ul className={css.pets_list}>
      <PetCard _id={"1"} />
      <PetCard _id={"2"} />
      <PetCard _id={"3"} />
      <PetCard _id={"4"} />
      <PetCard _id={"5"} />
      <PetCard _id={"6"} />
      <PetCard _id={"7"} />
      <PetCard _id={"8"} />
    </ul>
  );
};

export default PetsList;
