import { useEffect, useState } from "react";
import useFilter from "../../hooks/useFilter";

import PageTitle from "../../components/PageTittle";
import Container from "../../components/Container";
import Section from "../../components/Section";
import Filter from "../../components/Filter";
import SponsorCardSet from "../../components/SponsorCardSet";
import Wrapper from "../../components/Wrapper";
import Spinner from "../../components/Spinner";

import api from "../../api/sponsors";

const SponsorsPage = () => {
  const [sponsors, setSponsors] = useState([]);
  const [filterValue, handleFilterChange] = useFilter("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .fetchSponsors()
      .then((res) => setSponsors(res))
      .finally(setLoading(false));
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
          <Spinner loading={loading} />
          {!loading && <SponsorCardSet sponsors={filterdSponsors} />}
        </Wrapper>
      </Container>
    </Section>
  );
};

export default SponsorsPage;
