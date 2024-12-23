import { useEffect, useState } from "react";

import PageTitle from "../../components/PageTittle";
import Container from "../../components/Container";
import NewsList from "../../components/NewsList/NewsList";
import Section from "../../components/Section";
import Filter from "../../components/Filter";
import Wrapper from "../../components/Wrapper";

import api from "../../api/news";

const NewsPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    api.fetchNews().then((res) => setNews(res));
  }, []);

  return (
    <Section>
      <Container>
        <Wrapper>
          <PageTitle text={"News Page"} />
          <Filter />
          <NewsList news={news} />
        </Wrapper>
      </Container>
    </Section>
  );
};

export default NewsPage;
