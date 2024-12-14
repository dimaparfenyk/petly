import PageTitle from "../../components/PageTittle/PageTitle";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

const HomePage = () => {
  const text = "Take good care of your small pets";
  return (
    <PageWrapper>
      <PageTitle text={text} />
    </PageWrapper>
  );
};

export default HomePage;
