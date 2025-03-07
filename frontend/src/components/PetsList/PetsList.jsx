import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import { createPortal } from "react-dom";
import api from "../../api/pets";
import PetCard from "../PetCard";
import NoContentBlock from "../../components/NoContentBlock";
import Modal from "../../components/Modal";
import PetDetails from "../../components/PetDetails";
import Spinner from "../../components/Spinner";

import css from "./_PetsList.module.scss";
import AddPetForm from "../AddPetForm";
import { useSelector } from "react-redux";
import { selectStatusFilter } from "../../redux/filters/selectors";
import statusFilters from "../../redux/constants";

const portalEl = document.getElementById("modal-root");

const PetsList = () => {
  const status = useSelector(selectStatusFilter);
  const [pets, setPets] = useState([]);
  const [filterValue] = useOutletContext();
  const [showModal, setShowModal] = useState(false);
  const [curId, setCurId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === statusFilters.own) {
      api.getPetsByOwner().then((res) => {
        setPets(res);
        setLoading(false);
      });
      return;
    }
    api.fetchPetsByCategory(status).then((res) => {
      setPets(res);
      setLoading(false);
    });
  }, [status]);

  const toggleModal = () => setShowModal((prev) => !prev);

  const filteredByBreedPets = pets.filter(({ breed }) =>
    breed.includes(filterValue)
  );

  return (
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <ul className={css.pets_list}>
          {filteredByBreedPets.map((pet) => (
            <PetCard
              key={pet._id}
              pet={pet}
              onClick={() => {
                setCurId(pet._id);
                setShowModal(true);
              }}
            />
          ))}
        </ul>
      )}

      {!loading && filteredByBreedPets.length === 0 && (
        <NoContentBlock toggleModal={toggleModal} />
      )}

      {showModal &&
        createPortal(
          <Modal onClose={toggleModal}>
            {curId ? (
              <PetDetails petId={curId} />
            ) : (
              <AddPetForm onClose={toggleModal} />
            )}
          </Modal>,
          portalEl
        )}
    </>
  );
};

export default PetsList;
