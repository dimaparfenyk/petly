import Container from "../../components/Container";
import Section from "../../components/Section";
import UserCard from "../../components/UserCard";
import UserPetList from "../../components/UserPetList";
import css from "./_ProfilePage.module.scss";

const ProfilePage = () => {
  return (
    <Section>
      <Container>
        <div className={css.profile_wrapper}>
          <UserCard />
          <UserPetList />
        </div>
      </Container>
    </Section>
  );
};

export default ProfilePage;
