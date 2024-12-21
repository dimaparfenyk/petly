import { useEffect, useState } from "react";

import PageTitle from "../../components/PageTittle";
import Container from "../../components/Container";
import Section from "../../components/Section";
import Filter from "../../components/Filter";
import SponsorCardSet from "../../components/SponsorCardSet";
import Wrapper from "../../components/Wrapper";

import api from "../../api/sponsors";

const SponsorsPage = () => {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    api.fetchSponsors().then((res) => setSponsors(res));
  }, []);

  return (
    <Section>
      <Container>
        <Wrapper>
          <PageTitle text={"Our Friends"} />
          <Filter />
          <SponsorCardSet sponsors={sponsors} />
        </Wrapper>
      </Container>
    </Section>
  );
};

export default SponsorsPage;
