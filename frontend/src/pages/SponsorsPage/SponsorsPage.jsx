import { useEffect, useState } from "react";

import PageTitle from "../../components/PageTittle";
import Container from "../../components/Container";
import Section from "../../components/Section";
import Filter from "../../components/Filter";
import SponsorCardSet from "../../components/SponsorCardSet";
import Wrapper from "../../components/Wrapper";

import api from "../../api/sponsors";
import useFilter from "../../hooks/useFilter";

const SponsorsPage = () => {
  const [sponsors, setSponsors] = useState([]);
  const [filterValue, handleFilterChange] = useFilter("");

  useEffect(() => {
    api.fetchSponsors().then((res) => setSponsors(res));
  }, []);

  const filterdSponsors = sponsors.filter(({ title }) =>
    title.toLowerCase().trim().includes(filterValue)
  );

  return (
    <Section>
      <Container>
        <Wrapper>
          <PageTitle text={"Our Friends"} />
          <Filter onChange={handleFilterChange} />
          <SponsorCardSet sponsors={filterdSponsors} />
        </Wrapper>
      </Container>
    </Section>
  );
};

export default SponsorsPage;
