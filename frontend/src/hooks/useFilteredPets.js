import { useOutletContext } from "react-router-dom";
import statusFilters from "../redux/constants";

const useFilteredPets = (pets, favoritePets, status) => {
  const [filterValue] = useOutletContext();

  if (status === statusFilters.own) return pets;
  if (status === statusFilters.favorite) return favoritePets;
  return pets.filter(
    ({ status: petStatus, breed }) =>
      petStatus === status && breed.includes(filterValue)
  );
};

export default useFilteredPets;
