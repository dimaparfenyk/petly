import PageTitle from "../../components/PageTittle";
import Container from "../../components/Container";
import Section from "../../components/Section";
import Wrapper from "../../components/Wrapper";
import Filter from "../../components/Filter";
import FilterButtons from "../../components/FilterButtons";
import PetsList from "../../components/PetsList";

const PetsPage = () => {
  return (
    <>
      {/* <Section> */}
      <Container>
        <Wrapper>
          <PageTitle text={"Find your favorite pet"} />
          <Filter />
          <FilterButtons />
        </Wrapper>
      </Container>
      {/* </Section> */}
      <Section>
        <Container>
          <Wrapper>
            <PetsList />
          </Wrapper>
        </Container>
      </Section>
    </>
  );
};

export default PetsPage;
