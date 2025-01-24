import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import api from "../../api/pets";

import PageTitle from "../../components/PageTittle";
import Container from "../../components/Container";
import Section from "../../components/Section";
import Wrapper from "../../components/Wrapper";
import Filter from "../../components/Filter";
import FilterButtons from "../../components/FilterButtons";
import PetsList from "../../components/PetsList";
import Modal from "../../components/Modal";
import PetDetails from "../../components/PetDetails";

const portalEl = document.getElementById("modal-root");

const PetsPage = () => {
  const [pets, setPets] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    api.fetchPets().then((res) => setPets(res));
  }, []);

  const toggleModal = (id) => {
    !showModal ? setCurrentId(id) : setCurrentId(null);
    setShowModal((prev) => !prev);
  };

  return (
    <Section>
      <Container>
        <Wrapper>
          <PageTitle text={"Find your favorite pet"} />
          <Filter />
          <FilterButtons toggleModal={toggleModal} />
        </Wrapper>

        <PetsList toggleModal={toggleModal} pets={pets} />

        {showModal &&
          createPortal(
            <Modal onClose={toggleModal}>
              {currentId ? (
                <PetDetails petId={currentId} />
              ) : (
                <div>Add pet content</div>
              )}
            </Modal>,
            portalEl
          )}
      </Container>
    </Section>
  );
};

export default PetsPage;
