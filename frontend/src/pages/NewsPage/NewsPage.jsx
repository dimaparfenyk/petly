import { useEffect, useState } from "react";

import PageTitle from "../../components/PageTittle";
import Container from "../../components/Container";
import NewsList from "../../components/NewsList/NewsList";
import Section from "../../components/Section";
import Filter from "../../components/Filter";
import Wrapper from "../../components/Wrapper";

import api from "../../api/news";
import useFilter from "../../hooks/useFilter";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [filterValue, handleFilterChange] = useFilter("");

  useEffect(() => {
    api.fetchNews().then((res) => setNews(res));
  }, []);

  const filteredNews = news.filter(({ title }) =>
    title.toLowerCase().trim().includes(filterValue)
  );

  return (
    <Section>
      <Container>
        <Wrapper>
          <PageTitle text={"News Page"} />
          <Filter onChange={handleFilterChange} />
          <NewsList news={filteredNews} />
        </Wrapper>
      </Container>
    </Section>
  );
};

export default NewsPage;
