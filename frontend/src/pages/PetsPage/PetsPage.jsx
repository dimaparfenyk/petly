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
import AddPetButton from "../../components/AddPetButton";
import { addPet } from "../../redux/pets/operations";
import { useSelector } from "react-redux";
import { selectStatusFilter } from "../../redux/filters/selectors";

const portalEl = document.getElementById("modal-root");

const PetsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [filterValue, handleFilterChange] = useFilter("");
  const filter = useSelector(selectStatusFilter);

  const initialFormValues = {
    title: "",
    name: "",
    birth: "",
    breed: "",
    price: "",
    petImgUrl: "",
    comments: "",
    sex: "male",
    status: filter,
  };

  const toggleModal = () => setShowModal((prev) => !prev);

  return (
    <Section>
      <Container className={"grid_container"}>
        <Wrapper newClass="pets_nav_box">
          <PageTitle text={"Find your favorite pet"} />
          <Filter onChange={handleFilterChange} />
          <FilterButtons toggleModal={toggleModal} />
          <AddPetButton handleAddPet={toggleModal} />
        </Wrapper>

        <Outlet context={[filterValue]} />

        {showModal &&
          createPortal(
            <Modal onClose={toggleModal}>
              <AddPetForm
                onClose={toggleModal}
                addEntity={addPet}
                initial={initialFormValues}
              />
            </Modal>,
            portalEl
          )}
      </Container>
    </Section>
  );
};

export default PetsPage;
