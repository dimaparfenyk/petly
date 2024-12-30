import Container from "../../components/Container";
import PageTitle from "../../components/PageTittle";
import Section from "../../components/Section";
import Wrapper from "../../components/Wrapper";

const ProfilePage = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <PageTitle text={"My information:"} />
        </Wrapper>
      </Container>
    </Section>
  );
};

export default ProfilePage;
