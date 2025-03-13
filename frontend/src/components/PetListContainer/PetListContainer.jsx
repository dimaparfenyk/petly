import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectStatusFilter } from "../../redux/filters/selectors";
import { selectToken } from "../../redux/auth/selectors";
import statusFilters from "../../redux/constants";
import {
  fetchAllPets,
  fetchPetsByOwner,
  fetchFavoritePets,
} from "../../redux/pets/operations";
import PetsList from "../PetsList";

const PetListContainer = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatusFilter);
  const token = useSelector(selectToken);

  useEffect(() => {
    switch (status) {
      case statusFilters.own:
        dispatch(fetchPetsByOwner(token));
        return;
      case statusFilters.favorite:
        dispatch(fetchFavoritePets(token));
        return;
      default:
        dispatch(fetchAllPets());
        return;
    }
  }, [dispatch, status, token]);

  return <PetsList />;
};

export default PetListContainer;
