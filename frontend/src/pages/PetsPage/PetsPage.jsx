import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { createPortal } from "react-dom";
import useFilter from "../../hooks/useFilter";
import PageTitle from "../../components/PageTittle";
import Container from "../../components/Container";
import Section from "../../components/Section";
import Wrapper from "../../components/Wrapper";
import Filter from "../../components/Filter";
import FilterButtons from "../../components/FilterButtons";
import { ToastContainer, toast } from "react-toastify";
import AddPetForm from "../../components/AddPetForm";
import Modal from "../../components/Modal";
import AddPetButton from "../../components/AddPetButton";
import { addPet } from "../../redux/pets/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectStatusFilter } from "../../redux/filters/selectors";
import { selectError, selectMessage } from "../../redux/pets/selectors";
import { clearError, clearMessage } from "../../redux/pets/slice";

const portalEl = document.getElementById("modal-root");

const PetsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [filterValue, handleFilterChange] = useFilter("");
  const filter = useSelector(selectStatusFilter);
  const dispatch = useDispatch();
  const message = useSelector(selectMessage);
  const error = useSelector(selectError);

  const initialFormValues = {
    title: "",
    breed: "",
    petImgUrl: "",
    name: "",
    price: "",
    comments: "",
    sex: "male",
    status: filter || "sell",
    birth: "",
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
    }
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [dispatch, error, message]);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
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
                  addPet={addPet}
                  initial={initialFormValues}
                />
              </Modal>,
              portalEl
            )}
        </Container>
      </Section>
    </>
  );
};

export default PetsPage;
