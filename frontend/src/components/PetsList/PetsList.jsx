import PetCard from "../PetCard";
import css from "./_PetsList.module.scss";

const PetsList = () => {
  return (
    <ul className={css.pets_list}>
      <PetCard />
      <PetCard />
      <PetCard />
      <PetCard />
      <PetCard />
      <PetCard />
      <PetCard />
      <PetCard />
    </ul>
  );
};

export default PetsList;
