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
    setLoading(true);

    const fetchData = async () => {
      let res;
      if (status === statusFilters.own) {
        res = await api.getPetsByOwner();
      } else {
        res = await api.fetchPets();
      }

      setPets(res);
      setLoading(false);
    };

    fetchData();
  }, [status]);

  console.log(pets);

  const toggleModal = () => setShowModal((prev) => !prev);

  const filteredPets = pets.filter(
    ({ status: petStatus, breed }) =>
      petStatus === status && breed.includes(filterValue)
  );

  return (
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <ul className={css.pets_list}>
          {filteredPets.map((pet) => (
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

      {!loading && filteredPets.length === 0 && (
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
