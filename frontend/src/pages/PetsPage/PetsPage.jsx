import { useState } from "react";
import { Outlet } from "react-router-dom";
import { createPortal } from "react-dom";
import useFilter from "../../hooks/useFilter";
import PageTitle from "../../components/PageTittle";
import Container from "../../components/Container";
import Section from "../../components/Section";
import Wrapper from "../../components/Wrapper";
import Filter from "../../components/Filter";
import FilterButtons from "../../components/FilterButtons";

import AddPetForm from "../../components/AddPetForm";
import Modal from "../../components/Modal";
const portalEl = document.getElementById("modal-root");

const PetsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [filterValue, handleFilterChange] = useFilter("");

  const toggleModal = () => setShowModal((prev) => !prev);

  return (
    <Section>
      <Container className={"grid_container"}>
        <Wrapper>
          <PageTitle text={"Find your favorite pet"} />
          <Filter onChange={handleFilterChange} />
          <FilterButtons toggleModal={toggleModal} />
        </Wrapper>

        <Outlet context={[filterValue]} />

        {showModal &&
          createPortal(
            <Modal onClose={toggleModal}>
              <AddPetForm onClose={toggleModal} />
            </Modal>,
            portalEl
          )}
      </Container>
    </Section>
  );
};

export default PetsPage;
