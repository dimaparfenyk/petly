import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import api from "../../api/pets";
import useFilter from "../../hooks/useFilter";

import PageTitle from "../../components/PageTittle";
import Container from "../../components/Container";
import Section from "../../components/Section";
import Wrapper from "../../components/Wrapper";
import Filter from "../../components/Filter";
import FilterButtons from "../../components/FilterButtons";
import PetsList from "../../components/PetsList";
import Modal from "../../components/Modal";
import PetDetails from "../../components/PetDetails";
import NoContentBlock from "../../components/NoContentBlock";
import Spinner from "../../components/Spinner";
import AddPetForm from "../../components/AddPetForm";

const portalEl = document.getElementById("modal-root");

const PetsPage = () => {
  const [pets, setPets] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [filterValue, handleFilterChange] = useFilter("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.fetchPets().then((res) => {
      setPets(res);
      setLoading(false);
    });
  }, []);

  const toggleModal = (id) => {
    !showModal ? setCurrentId(id) : setCurrentId(null);
    setShowModal((prev) => !prev);
  };

  const filteredByBreedPets = pets.filter(({ breed }) =>
    breed.includes(filterValue)
  );

  return (
    <Section>
      <Container className={"grid_container"}>
        <Wrapper>
          <PageTitle text={"Find your favorite pet"} />
          <Filter onChange={handleFilterChange} />
          <FilterButtons toggleModal={toggleModal} />
        </Wrapper>
        <Spinner loading={loading} />
        {!loading && (
          <PetsList toggleModal={toggleModal} pets={filteredByBreedPets} />
        )}
        {!loading && pets.length === 0 && (
          <NoContentBlock toggleModal={toggleModal} />
        )}

        {showModal &&
          createPortal(
            <Modal onClose={toggleModal}>
              {currentId ? <PetDetails petId={currentId} /> : <AddPetForm />}
            </Modal>,
            portalEl
          )}
      </Container>
    </Section>
  );
};

export default PetsPage;
